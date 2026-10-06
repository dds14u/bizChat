import { useEffect, useRef, useState, type KeyboardEvent, type ChangeEvent } from 'react';
import './Chat.css';
import { getInviteCode } from './invite';

type Message = { role: 'user' | 'assistant'; text: string };

// A stable anonymous ID per browser, so Dify can rate-limit each visitor.
function getUserId(): string {
  const KEY = 'td-user-id';
  try {
    let id = localStorage.getItem(KEY);
    if (!id) {
      id =
        'web-' +
        (typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2) + Date.now().toString(36));
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return 'web-anon';
  }
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [conversationId, setConversationId] = useState('');
  const userId = useRef(getUserId());
  const inviteCode = useRef(getInviteCode());
  // Free-trial state for visitors without an invite code
  const [tier, setTier] = useState<string>(inviteCode.current ? '' : 'visitor');
  const [trialRemaining, setTrialRemaining] = useState<number | null>(null);
  const [trialEnded, setTrialEnded] = useState<{ message: string; contact: string } | null>(null);
  const [trialWelcome, setTrialWelcome] = useState('');

  // Load the welcome-screen trial text (set by TRIAL_WELCOME_TEXT in Netlify)
  useEffect(() => {
    if (tier !== 'visitor') return;
    let cancelled = false;
    fetch('/api/chat')
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => {
        if (!cancelled && cfg?.welcomeText) setTrialWelcome(cfg.welcomeText);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [tier]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages]);

  const appendToReply = (chunk: string) =>
    setMessages((m) => {
      const copy = [...m];
      const last = copy[copy.length - 1];
      copy[copy.length - 1] = { ...last, text: last.text + chunk };
      return copy;
    });

  const replaceReply = (text: string) =>
    setMessages((m) => {
      const copy = [...m];
      copy[copy.length - 1] = { role: 'assistant', text };
      return copy;
    });

  // Reads one server-sent event from Dify's stream
  const handleEvent = (raw: string) => {
    const dataLines = raw
      .split('\n')
      .filter((line) => line.startsWith('data:'))
      .map((line) => line.slice(5).trim());
    if (dataLines.length === 0) return; // e.g. keep-alive pings

    let data: any;
    try {
      data = JSON.parse(dataLines.join(''));
    } catch {
      return;
    }

    if (data.conversation_id) setConversationId(data.conversation_id);

    switch (data.event) {
      case 'message':
      case 'agent_message':
        if (data.answer) appendToReply(data.answer);
        break;
      case 'message_replace':
        replaceReply(data.answer || '');
        break;
      case 'error':
        throw new Error(data.message || 'The tutor ran into a problem.');
    }
  };

  const send = async () => {
    const query = input.trim();
    if (!query || sending) return;

    setInput('');
    if (inputRef.current) inputRef.current.style.height = '';
    setError('');
    setMessages((m) => [...m, { role: 'user', text: query }, { role: 'assistant', text: '' }]);
    setSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, conversationId, user: userId.current, code: inviteCode.current }),
      });

      if (res.status === 404) {
        throw new Error('Chat server not found (404). In StackBlitz this is expected; on Netlify, check that the chat function deployed.');
      }
      const tierHeader = res.headers.get('X-Access-Tier');
      if (tierHeader) setTier(tierHeader);
      const remainingHeader = res.headers.get('X-Trial-Remaining');
      if (remainingHeader !== null) setTrialRemaining(Number(remainingHeader));

      if (!res.ok || !res.body) {
        let msg = `Request failed (${res.status}).`;
        let j: any = null;
        try {
          j = await res.json();
          if (j?.error) msg = j.error;
        } catch {}
        if (j?.trialEnded) {
          setTrialEnded({ message: msg, contact: j.contact || '' });
          // Remove the unanswered message pair so the chat stays tidy
          setMessages((m) => m.slice(0, -2));
          setInput(query);
          return;
        }
        throw new Error(msg);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, '\n');
        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';
        events.forEach(handleEvent);
      }
      if (buffer.trim()) handleEvent(buffer);
    } catch (e: any) {
      setError(e?.message || 'Couldn\u2019t reach the tutor. Check your connection and try again.');
      // Remove the empty reply bubble if nothing arrived
      setMessages((m) => {
        const last = m[m.length - 1];
        return last && last.role === 'assistant' && !last.text ? m.slice(0, -1) : m;
      });
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  };

  const newChat = () => {
    setMessages([]);
    setConversationId('');
    setError('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // isComposing keeps Enter working normally while typing Chinese with an input method
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 140) + 'px';
  };

  const lastIsEmptyReply =
    sending && messages.length > 0 && messages[messages.length - 1].text === '';

  return (
    <div className="chat">
      <div className="messages" aria-live="polite">
        {messages.length === 0 && (
          <div className="empty-state">
            <h2>Practice your business English</h2>
            <p>Ask about vocabulary, emails, or meetings. You can write in English or Chinese.</p>
            {tier === 'visitor' && !trialEnded && trialWelcome && (
              <p className="trial-note">{trialWelcome}</p>
            )}
          </div>
        )}

        {messages.map((m, i) =>
          m.role === 'assistant' && !m.text ? null : (
            <div key={i} className={`bubble ${m.role}`}>
              {m.text}
            </div>
          )
        )}

        {lastIsEmptyReply && <div className="bubble assistant typing">Thinking…</div>}
        <div ref={endRef} />
      </div>

      {trialEnded && (
        <div className="trial-card" role="status">
          <p className="trial-card-title">{trialEnded.message}</p>
          <p className="trial-card-body">
            Want to keep practicing? 想继续练习？
            <br />
            {trialEnded.contact}
          </p>
          <p className="trial-card-hint">Already have an invite link? Open it to continue. 已有邀请链接？直接打开即可继续。</p>
        </div>
      )}

      {tier === 'visitor' && trialRemaining !== null && !trialEnded && (
        <div className="trial-remaining">
          {trialRemaining === 0
            ? 'That was your last free message today. 今天的免费消息已用完。'
            : `${trialRemaining} free message${trialRemaining === 1 ? '' : 's'} left today · 今天还剩 ${trialRemaining} 条`}
        </div>
      )}

      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      {messages.length > 0 && !sending && (
        <button type="button" className="new-chat" onClick={newChat}>
          Start a new chat
        </button>
      )}

      <div className="composer">
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message"
          aria-label="Message"
          disabled={sending}
        />
        <button
          type="button"
          className="send-btn"
          onClick={send}
          disabled={sending}
        >
          Send
        </button>
      </div>
    </div>
  );
}
