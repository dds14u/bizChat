// Sending messages and reading the streamed reply.
// Chat.tsx only deals with messages, input and trial display; everything about
// the network, timeouts and the event stream lives here.

export type ChatErrorKind =
  | 'trial-ended'
  | 'too-long'
  | 'limited'
  | 'unavailable'
  | 'interrupted'
  | 'timeout'
  | 'network'
  | 'server'
  | 'not-found'
  | 'aborted';

export class ChatError extends Error {
  kind: ChatErrorKind;
  contact: string;
  constructor(kind: ChatErrorKind, message: string, contact = '') {
    super(message);
    this.kind = kind;
    this.contact = contact;
  }
}

export interface ChatConfig {
  trialEnabled: boolean;
  welcomeText: string;
  maxMessageChars: number;
}

export const DEFAULT_MAX_MESSAGE_CHARS = 2000;

// ---------- Server-sent events parser ----------
// Handles line endings split across network chunks (\r\n arriving as \r + \n),
// bare \r or \n endings, multi-line data fields, and comment/ping lines.
export function createSSEParser(onData: (data: string) => void) {
  let buffer = '';
  let dataLines: string[] = [];

  const processLine = (line: string) => {
    if (line === '') {
      if (dataLines.length) {
        const data = dataLines.join('\n');
        dataLines = [];
        onData(data);
      }
      return;
    }
    if (line.startsWith(':')) return; // comment
    const idx = line.indexOf(':');
    const field = idx === -1 ? line : line.slice(0, idx);
    let value = idx === -1 ? '' : line.slice(idx + 1);
    if (value.startsWith(' ')) value = value.slice(1);
    if (field === 'data') dataLines.push(value);
  };

  return {
    push(text: string) {
      buffer += text;
      let start = 0;
      for (let i = 0; i < buffer.length; i++) {
        const ch = buffer[i];
        if (ch === '\n') {
          processLine(buffer.slice(start, i));
          start = i + 1;
        } else if (ch === '\r') {
          // A trailing \r might be the first half of \r\n: wait for the next chunk.
          if (i + 1 >= buffer.length) break;
          processLine(buffer.slice(start, i));
          if (buffer[i + 1] === '\n') i++;
          start = i + 1;
        }
      }
      buffer = buffer.slice(start);
    },
    end() {
      if (buffer.endsWith('\r')) buffer = buffer.slice(0, -1);
      if (buffer) processLine(buffer);
      buffer = '';
      processLine(''); // flush a final event that had no trailing blank line
    },
  };
}

// ---------- Settings for the page ----------
export async function fetchConfig(timeoutMs = 8000): Promise<ChatConfig | null> {
  try {
    const res = await fetch('/api/chat', { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return null;
    const cfg = await res.json();
    return {
      trialEnabled: Boolean(cfg?.trialEnabled),
      welcomeText: String(cfg?.welcomeText || ''),
      maxMessageChars: Number(cfg?.maxMessageChars) > 0 ? Number(cfg.maxMessageChars) : DEFAULT_MAX_MESSAGE_CHARS,
    };
  } catch {
    return null;
  }
}

// ---------- Send one message and stream the reply ----------
export interface SendOptions {
  query: string;
  conversationId: string;
  user: string;
  code: string;
  signal: AbortSignal; // abort when the component unmounts
  onMeta?: (meta: { tier: string | null; trialRemaining: number | null }) => void;
  onDelta: (text: string) => void;
  onReplace: (text: string) => void;
  onConversationId: (id: string) => void;
  firstResponseTimeoutMs?: number;
  idleTimeoutMs?: number;
}

export async function sendChat(opts: SendOptions): Promise<void> {
  const firstResponseTimeoutMs = opts.firstResponseTimeoutMs ?? 40000;
  const idleTimeoutMs = opts.idleTimeoutMs ?? 75000;

  // Our own controller, also aborted when the caller's signal aborts.
  const controller = new AbortController();
  let timedOut = false;
  const onOuterAbort = () => controller.abort();
  if (opts.signal.aborted) throw new ChatError('aborted', 'Cancelled.');
  opts.signal.addEventListener('abort', onOuterAbort);

  let timer: ReturnType<typeof setTimeout> | undefined;
  let activeReader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  const armTimer = (ms: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
      // Some browsers don't end an open body on abort; cancel the reader directly.
      activeReader?.cancel().catch(() => {});
    }, ms);
  };
  const onOuterAbortReader = () => activeReader?.cancel().catch(() => {});
  opts.signal.addEventListener('abort', onOuterAbortReader);

  const fail = (e: unknown): ChatError => {
    if (e instanceof ChatError) return e;
    if (opts.signal.aborted) return new ChatError('aborted', 'Cancelled.');
    if (timedOut) return new ChatError('timeout', 'The tutor took too long to respond. Please try again. 响应超时，请重试。');
    return new ChatError('network', 'Couldn’t reach the tutor. Check your connection and try again. 网络连接失败，请重试。');
  };

  try {
    armTimer(firstResponseTimeoutMs);
    let res: Response;
    try {
      res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: opts.query, conversationId: opts.conversationId, user: opts.user, code: opts.code }),
        signal: controller.signal,
      });
    } catch (e) {
      throw fail(e);
    }

    const remainingHeader = res.headers.get('X-Trial-Remaining');
    opts.onMeta?.({
      tier: res.headers.get('X-Access-Tier'),
      trialRemaining: remainingHeader !== null ? Number(remainingHeader) : null,
    });

    if (res.status === 404) {
      throw new ChatError('not-found', 'Chat server not found (404). In StackBlitz this is expected; on Netlify, check that the chat function deployed.');
    }
    if (!res.ok || !res.body) {
      let j: any = null;
      try {
        j = await res.json();
      } catch {}
      const msg = j?.error || `Request failed (${res.status}).`;
      if (j?.trialEnded) throw new ChatError('trial-ended', msg, j.contact || '');
      if (res.status === 413 || j?.tooLong) throw new ChatError('too-long', msg);
      if (res.status === 429) throw new ChatError('limited', msg);
      if (res.status === 503) throw new ChatError('unavailable', msg);
      if (res.status === 504) throw new ChatError('timeout', msg);
      throw new ChatError('server', msg);
    }

    let completed = false;
    const parser = createSSEParser((raw) => {
      let data: any;
      try {
        data = JSON.parse(raw);
      } catch {
        return; // not JSON (e.g. a ping); ignore
      }
      if (data.conversation_id) opts.onConversationId(data.conversation_id);
      switch (data.event) {
        case 'message':
        case 'agent_message':
          if (data.answer) opts.onDelta(data.answer);
          break;
        case 'message_replace':
          opts.onReplace(data.answer || '');
          break;
        case 'message_end':
          completed = true;
          break;
        case 'workflow_finished':
          if (data.data?.status && data.data.status !== 'succeeded') {
            throw new ChatError('server', data.data?.error || 'The tutor ran into a problem. Please try again.');
          }
          completed = true;
          break;
        case 'error':
          throw new ChatError('server', data.message || 'The tutor ran into a problem. Please try again.');
      }
    });

    const reader = res.body.getReader();
    activeReader = reader;
    const decoder = new TextDecoder();
    try {
      while (true) {
        armTimer(idleTimeoutMs);
        let chunk: ReadableStreamReadResult<Uint8Array>;
        try {
          chunk = await reader.read();
        } catch (e) {
          if (timedOut || opts.signal.aborted) throw fail(e);
          throw new ChatError('interrupted', 'The reply was interrupted. Please try again. 回复中断，请重试。');
        }
        if (chunk.done) {
          if (timedOut || opts.signal.aborted) throw fail(null);
          break;
        }
        parser.push(decoder.decode(chunk.value, { stream: true }));
      }
      parser.push(decoder.decode());
      parser.end();
    } finally {
      reader.cancel().catch(() => {});
    }

    if (!completed) {
      throw new ChatError('interrupted', 'The reply was interrupted before it finished. Please try again. 回复未完成，请重试。');
    }
  } catch (e) {
    throw fail(e);
  } finally {
    clearTimeout(timer);
    activeReader = null;
    opts.signal.removeEventListener('abort', onOuterAbort);
    opts.signal.removeEventListener('abort', onOuterAbortReader);
  }
}
