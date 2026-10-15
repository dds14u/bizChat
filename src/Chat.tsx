import { Fragment, useEffect, useRef, useState, type KeyboardEvent, type ChangeEvent, type ReactNode } from 'react';
import './Chat.css';
import { getBrowserId, getInviteCode } from './invite';
import { ChatError, DEFAULT_MAX_MESSAGE_CHARS, fetchConfig, sendChat, type ChatMode } from './chatApi';
import ModeSwitcher, { CoachIcon, RoleplayIcon, modeLabel } from './ModeSwitcher';
import { COACH_EXAMPLE, COACH_STARTERS, SCENES, SCENE_PEOPLE, type Scene } from './scenes';

// A chat thread holds messages plus two kinds of markers:
// a scene header (a scene card was tapped) and a divider (mode switched mid-chat).
type Item =
  | { kind: 'user'; text: string; mode: ChatMode }
  | { kind: 'assistant'; text: string; mode: ChatMode }
  | { kind: 'scene'; scene: Scene }
  | { kind: 'divider'; mode: ChatMode };

// Switching mode without sending anything never stacks dividers: any divider at the
// end of the chat is replaced, and none is shown if the learner switched back to the
// mode of the last message (e.g. Coach -> Role-play -> Coach).
function withModeDivider(list: Item[], next: ChatMode): Item[] {
  let end = list.length;
  while (end > 0 && list[end - 1].kind === 'divider') end--;
  const thread = list.slice(0, end);
  const last = thread[thread.length - 1];
  const lastMode: ChatMode | null = !last ? null : last.kind === 'scene' ? '[RP]' : 'mode' in last ? last.mode : null;
  return lastMode === null || lastMode === next ? thread : [...thread, { kind: 'divider', mode: next }];
}

// The two-card intro (Proposal A1) shows on a learner's first visit only.
const INTRO_KEY = 'rb.seenIntro';
const readSeenIntro = () => {
  try {
    return localStorage.getItem(INTRO_KEY) === '1';
  } catch {
    return false;
  }
};
const saveSeenIntro = () => {
  try {
    localStorage.setItem(INTRO_KEY, '1');
  } catch {
    // Storage blocked: the intro will just show again next visit
  }
};

// Video links in tutor replies. Only Bilibili links become clickable (the only links
// the system prompt asks for); any other address stays plain text.
const VIDEO_LINK = /https:\/\/(?:[a-z0-9-]+\.)?(?:bilibili\.com|b23\.tv)\/[^\s<>"'，。！？）】]*/gi;

function withVideoLinks(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(VIDEO_LINK)) {
    // Leave trailing punctuation (e.g. "…/BV1x/." or "…)") outside the link
    const url = match[0].replace(/[.,;:!?)\]]+$/, '');
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <a key={start} href={url} target="_blank" rel="noopener noreferrer" className="video-link">
        {url}
      </a>
    );
    last = start + url.length;
  }
  if (parts.length === 0) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Markdown bold (**text**) in tutor replies, e.g. feedback headings.
// While a reply is still streaming, an unclosed ** stays as-is until its pair arrives.
const BOLD = /\*\*([^*\n]+?)\*\*/g;

function formatReply(text: string): ReactNode {
  const parts = text.split(BOLD); // odd indexes are the bold text
  if (parts.length === 1) return withVideoLinks(text);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{withVideoLinks(part)}</strong>
    ) : (
      <Fragment key={i}>{withVideoLinks(part)}</Fragment>
    )
  );
}

const SendArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Chat({ brand }: { brand: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [conversationId, setConversationId] = useState('');

  // The page owns the mode. Only the switcher, the intro cards and scene cards change it.
  const [mode, setMode] = useState<ChatMode>('[QA]');
  const [showIntro, setShowIntro] = useState(() => !readSeenIntro());

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
  }, [items]);

  const leaveIntro = () => {
    if (showIntro) {
      setShowIntro(false);
      saveSeenIntro();
    }
  };

  const appendToReply = (chunk: string) =>
    setItems((list) => {
      const copy = [...list];
      const last = copy[copy.length - 1];
      if (last?.kind === 'assistant') copy[copy.length - 1] = { ...last, text: last.text + chunk };
      return copy;
    });

  const replaceReply = (text: string) =>
    setItems((list) => {
      const copy = [...list];
      const last = copy[copy.length - 1];
      if (last?.kind === 'assistant') copy[copy.length - 1] = { ...last, text };
      return copy;
    });

  const charCount = input.trim().length;
  const overLimit = charCount > maxChars;
  const nearLimit = charCount > maxChars * 0.85;

  /**
   * Send one message in a given mode.
   * A scene kickoff is sent to the tutor but shown as a scene header, not a bubble.
   */
  const sendMessage = async (text: string, sendMode: ChatMode, scene?: Scene) => {
    const query = text.trim();
    if (!query || sending || query.length > maxChars) return;

    leaveIntro();
    if (!scene) {
      setInput('');
      if (inputRef.current) inputRef.current.style.height = '';
    }
    setError('');
    const shown: Item = scene ? { kind: 'scene', scene } : { kind: 'user', text: query, mode: sendMode };
    setItems((list) => [...list, shown, { kind: 'assistant', text: '', mode: sendMode }]);
    setSending(true);

    const controller = new AbortController();
    abortRef.current = controller;
    let gotText = false;

    try {
      await sendChat({
        query,
        mode: sendMode,
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
        setItems((list) => list.slice(0, -2));
      }
      // Keep the learner's own words in the box so retrying is one tap
      if (!scene) setInput((current) => current || query);

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

  const send = () => {
    if (!overLimit) sendMessage(input, mode);
  };

  // Switching mode never sends anything: the new mode goes with the next message.
  const changeMode = (next: ChatMode) => {
    if (sending || next === mode) return;
    leaveIntro();
    setMode(next);
    if (items.length > 0) setItems((list) => withModeDivider(list, next));
  };

  const pickIntroMode = (next: ChatMode) => {
    leaveIntro();
    setMode(next);
  };

  const startScene = (scene: Scene) => {
    setMode('[RP]');
    sendMessage(scene.kickoff, '[RP]', scene);
  };

  const newChat = () => {
    abortRef.current?.abort();
    setItems([]);
    setConversationId('');
    setError('');
    setMode('[QA]');
  };

  // Logo / title: back to the home screen with the Coach and Role-play cards.
  // Like "Start a new chat", this ends the current conversation.
  const goHome = () => {
    newChat();
    setInput('');
    if (inputRef.current) inputRef.current.style.height = '';
    setShowIntro(true);
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

  const isRP = mode === '[RP]';
  const empty = items.length === 0;
  const last = items[items.length - 1];
  const lastIsEmptyReply = sending && last?.kind === 'assistant' && last.text === '';
  const startDisabled = sending || Boolean(trialEnded);

  // Text above the box and placeholder depend on the screen
  let hint: ReactNode = null;
  let placeholder = 'Type your message';
  if (showIntro && empty) {
    placeholder = 'Or just type a question…';
  } else if (empty) {
    if (isRP) {
      hint = <span className="composer-hint">Set your own scene</span>;
      placeholder = 'e.g. Ask my boss for Friday off';
    } else {
      placeholder = 'Ask a question…';
    }
  } else if (isRP) {
    hint = (
      <span className="composer-hint">
        Type <b>feedback</b> or <b>end</b> to finish the scene
      </span>
    );
    placeholder = 'Reply…';
  } else {
    if (!sending) {
      hint = (
        <button type="button" className="new-chat" onClick={newChat}>
          Start a new chat
        </button>
      );
    }
    placeholder = 'Ask a follow-up…';
  }

  const trialNote =
    tier === 'visitor' && !trialEnded && trialWelcome ? <p className="trial-note">{trialWelcome}</p> : null;

  return (
    <>
      <header className="site-header">
        <button type="button" className="brand-home" onClick={goHome} aria-label="Real Business by Donald, home">
          {brand}
        </button>
        <ModeSwitcher mode={mode} onChange={changeMode} disabled={sending} />
      </header>

      <main className="chat-area">
        <div className="chat-slot">
          <div className={`chat ${isRP ? 'mode-rp' : 'mode-qa'}`}>
            <div className="messages" aria-live="polite">
              {/* ---------- First visit: two mode cards (Proposal A1) ---------- */}
              {empty && showIntro && (
                <div className="start intro">
                  <h1>Practice your business English</h1>
                  <p className="start-sub">How would you like to practice today? <br />You can write in English or Chinese.</p>
                  {trialNote}

                  <button type="button" className="mode-card qa" onClick={() => pickIntroMode('[QA]')}>
                    <span className="mode-card-head">
                      <span className="avatar big" aria-hidden="true">🧑‍🏫</span>
                      <span className="mode-card-titles">
                        <span className="mode-card-title">Ask a question</span>
                        <span className="mode-card-kicker">COACH MODE</span>
                      </span>
                    </span>
                    <span className="mode-card-body">Guidance from Donald’s lessons.</span>
                    <span className="mode-card-example">“{COACH_EXAMPLE}”</span>
                  </button>

                  <button type="button" className="mode-card rp" onClick={() => pickIntroMode('[RP]')}>
                    <span className="mode-card-head">
                      <span className="avatar big" aria-hidden="true">💬</span>
                      <span className="mode-card-titles">
                        <span className="mode-card-title">Practice a conversation</span>
                        <span className="mode-card-kicker">ROLE-PLAY MODE</span>
                      </span>
                    </span>
                    <span className="mode-card-body">
                      Talk with a colleague, manager or client. Get feedback when the scene ends.
                    </span>
                    <span className="mode-card-people">
                      <span className="avatar-stack" aria-hidden="true">
                        {SCENES.map((s) => (
                          <span key={s.id} className="avatar small" style={{ background: s.avatarBg }}>
                            {s.avatar}
                          </span>
                        ))}
                      </span>
                      {SCENE_PEOPLE}
                    </span>
                  </button>

                  <p className="start-foot">You can switch modes anytime from the top right.</p>
                </div>
              )}

              {/* ---------- Coach start screen (Proposal A2) ---------- */}
              {empty && !showIntro && !isRP && (
                <div className="start">
                  <span className="avatar hero qa" aria-hidden="true">🧑‍🏫</span>
                  <h1>Ask your coach</h1>
                  <p className="start-sub">Ask about vocabulary, meetings or presentations.<br />You can write in English or Chinese.</p>
                  {trialNote}
                  <p className="start-label">Try a question</p>
                  {COACH_STARTERS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      className="starter"
                      disabled={startDisabled}
                      onClick={() => sendMessage(q, '[QA]')}
                    >
                      {q}
                      <span className="starter-arrow" aria-hidden="true">›</span>
                    </button>
                  ))}
                </div>
              )}

              {/* ---------- Role-play start screen (Proposal A2 cards) ---------- */}
              {empty && !showIntro && isRP && (
                <div className="start">
                  <h1>Practice a conversation</h1>
                  <p className="start-sub">Pick a scene. I’ll play the other person and stay in character.</p>
                  {trialNote}
                  {SCENES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className="scene-card"
                      disabled={startDisabled}
                      onClick={() => startScene(s)}
                    >
                      <span className="avatar" aria-hidden="true" style={{ background: s.avatarBg }}>
                        {s.avatar}
                      </span>
                      <span className="scene-card-text">
                        <span className="scene-card-label">{s.label}</span>
                        <span className="scene-card-title">
                          {s.title}
                          <span className={`difficulty ${s.difficulty.toLowerCase()}`}>{s.difficulty}</span>
                        </span>
                        <span className="scene-card-summary">{s.summary}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* ---------- Thread ---------- */}
              {items.map((item, i) => {
                if (item.kind === 'scene') {
                  return (
                    <div key={i} className="marker rp" role="separator">
                      <span className="marker-line" />
                      <span className="marker-text">
                        <span className="marker-title">ROLE-PLAY · {item.scene.title.toUpperCase()}</span>
                        <span className="marker-sub">
                          {item.scene.label.split('·')[1]?.trim()} · {item.scene.difficulty}
                        </span>
                      </span>
                      <span className="marker-line" />
                    </div>
                  );
                }
                if (item.kind === 'divider') {
                  return (
                    <div key={i} className={`marker ${item.mode === '[RP]' ? 'rp' : 'qa'}`} role="separator">
                      <span className="marker-line" />
                      <span className="marker-text">
                        <span className="marker-title">SWITCHED TO {modeLabel(item.mode).toUpperCase()}</span>
                      </span>
                      <span className="marker-line" />
                    </div>
                  );
                }
                if (item.kind === 'assistant' && !item.text) return null;
                return (
                  <div
                    key={i}
                    className={`bubble ${item.kind}${item.kind === 'assistant' && item.mode === '[RP]' ? ' in-scene' : ''}`}
                  >
                    {item.kind === 'assistant' && (
                      <span className={`who ${item.mode === '[RP]' ? 'rp' : 'qa'}`}>
                        {item.mode === '[RP]' ? <RoleplayIcon size={14} /> : <CoachIcon size={14} />}
                        {item.mode === '[RP]' ? 'Role-play' : 'Coach'}
                      </span>
                    )}
                    {item.kind === 'assistant' ? formatReply(item.text) : item.text}
                  </div>
                );
              })}

              {lastIsEmptyReply && <div className="bubble assistant typing">Thinking…</div>}
              <div ref={endRef} />
            </div>

            {trialEnded && (
              <div className="trial-card" role="status">
                <p className="trial-card-title">{trialEnded.message}</p>
                <p className="trial-card-body">
                  Want to keep practicing?
                  <br />
                  {trialEnded.contact}
                </p>
                <p className="trial-card-hint">Already have an invite link? Open it to continue.</p>
              </div>
            )}

            {tier === 'visitor' && trialRemaining !== null && !trialEnded && (
              <div className="trial-remaining">
                {trialRemaining === 0
                  ? 'That was your last free message today.'
                  : `${trialRemaining} free message${trialRemaining === 1 ? '' : 's'} left today`}
              </div>
            )}

            {error && (
              <div className="error-banner" role="alert">
                {error}
              </div>
            )}

            {/* Shown once the server confirms the code: ADMIN for admin codes, PRO for invite codes */}
            {(tier === 'admin' || tier === 'invite') && (
              <div className={`tier-badge ${tier}`}>{tier === 'admin' ? 'admin' : 'pro'}</div>
            )}

            <div className="composer">
              {nearLimit && (
                <div className={`char-count${overLimit ? ' over' : ''}`} role={overLimit ? 'alert' : undefined}>
                  {overLimit
                    ? `Message too long: ${charCount.toLocaleString()} / ${maxChars.toLocaleString()} characters. Please shorten it before sending.`
                    : `${charCount.toLocaleString()} / ${maxChars.toLocaleString()} characters`}
                </div>
              )}
              {hint && <div className="composer-top">{hint}</div>}
              <div className="composer-row">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  placeholder={placeholder}
                  aria-label="Message"
                  aria-invalid={overLimit}
                  disabled={sending}
                />
                <button
                  type="button"
                  className="send-btn"
                  onClick={send}
                  disabled={sending || overLimit || !input.trim()}
                  aria-label="Send"
                >
                  <SendArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
