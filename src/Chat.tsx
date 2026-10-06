import { useEffect, useRef, useState, type KeyboardEvent, type ChangeEvent } from 'react';
import './Chat.css';
import { getBrowserId, getInviteCode } from './invite';
import { ChatError, DEFAULT_MAX_MESSAGE_CHARS, fetchConfig, sendChat } from './chatApi';

type Message = { role: 'user' | 'assistant'; text: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [conversationId, setConversationId] = useState('');

  const userId = useRef(getBrowserId());
  const inviteCode = useRef(getInviteCode());

  // Free trial and limits
  const [tier, setTier] = useState<string>(inviteCode.current ? '' : 'visitor');
  const [trialRemaining, setTrialRemaining] = useState<number | null>(null);
  const [trialEnded, setTrialEnded] = useState<{ message: string; contact: string } | null>(null);
  const [trialWelcome, setTrialWelcome] = useState('');
  const [maxChars, setMaxChars] = useState(DEFAULT_MAX_MESSAGE_CHARS);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  // Cancel any reply in progress when the chat goes away
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      abortRef.current?.abort();
    };
  }, []);

  // Page settings: message length limit and the trial welcome text
  useEffect(() => {
    let cancelled = false;
    fetchConfig().then((cfg) => {
      if (cancelled || !cfg) return;
      setMaxChars(cfg.maxMessageChars);
      setTrialWelcome(cfg.welcomeText);
    });
    return () => {
      cancelled = true;
    };
  }, []);

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

  const charCount = input.trim().length;
  const overLimit = charCount > maxChars;
  const nearLimit = charCount > maxChars * 0.85;

  const send = async () => {
    const query = input.trim();
    if (!query || sending || overLimit) return;

    setInput('');
    if (inputRef.current) inputRef.current.style.height = '';
    setError('');
    setMessages((m) => [...m, { role: 'user', text: query }, { role: 'assistant', text: '' }]);
    setSending(true);

    const controller = new AbortController();
    abortRef.current = controller;
    let gotText = false;

    try {
      await sendChat({
        query,
        conversationId,
        user: userId.current,
        code: inviteCode.current,
        signal: controller.signal,
        onMeta: ({ tier: t, trialRemaining: r }) => {
          if (t) setTier(t);
          if (r !== null && !Number.isNaN(r)) setTrialRemaining(r);
        },
        onDelta: (t) => {
          gotText = true;
          appendToReply(t);
        },
        onReplace: (t) => {
          gotText = gotText || t.length > 0;
          replaceReply(t);
        },
        onConversationId: setConversationId,
      });
    } catch (e) {
      if (!mountedRef.current) return;
      const err =
        e instanceof ChatError
          ? e
          : new ChatError('network', 'Couldn’t reach the tutor. Check your connection and try again.');
      if (err.kind === 'aborted') return;

      if (!gotText) {
        // Nothing arrived: remove the unanswered pair
        setMessages((m) => m.slice(0, -2));
      }
      // Keep the learner's question in the box so retrying is one tap
      setInput((current) => current || query);

      if (err.kind === 'trial-ended') {
        setTrialEnded({ message: err.message, contact: err.contact });
        setTrialRemaining(0);
        return;
      }
      setError(err.message);
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      if (mountedRef.current) {
        setSending(false);
        inputRef.current?.focus();
      }
    }
  };

  const newChat = () => {
    abortRef.current?.abort();
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
            <h2>Practice your Business English</h2>
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

      {nearLimit && (
        <div className={`char-count${overLimit ? ' over' : ''}`} role={overLimit ? 'alert' : undefined}>
          {overLimit
            ? `Message too long: ${charCount.toLocaleString()} / ${maxChars.toLocaleString()} characters. Please shorten it before sending. 消息过长，请删减后再发送。`
            : `${charCount.toLocaleString()} / ${maxChars.toLocaleString()} characters`}
        </div>
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
          aria-invalid={overLimit}
          disabled={sending}
        />
        <button
          type="button"
          className="send-btn"
          onClick={send}
          disabled={sending || overLimit}
        >
          Send
        </button>
      </div>
    </div>
  );
}
