import { useEffect, useRef, useState, type KeyboardEvent, type ChangeEvent } from 'react';
import './Chat.css';

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
        body: JSON.stringify({ query, conversationId, user: userId.current }),
      });

      if (res.status === 404) {
        throw new Error('The chat server only runs on the published Netlify site, not in this preview.');
      }
      if (!res.ok || !res.body) {
        let msg = `Request failed (${res.status}).`;
        try {
          const j = await res.json();
          if (j.error) msg = j.error;
        } catch {}
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
          disabled={sending || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
