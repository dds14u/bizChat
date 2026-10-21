import { Fragment, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ChangeEvent, type ReactNode } from 'react';
import './Chat.css';
import { getBrowserId, getInviteCode } from './invite';
import { ChatError, DEFAULT_MAX_MESSAGE_CHARS, fetchConfig, sendChat, sendFeedback, type ChatMode, type Rating } from './chatApi';
import About from './About';
import ModeSwitcher, { CoachIcon, RoleplayIcon, modeLabel } from './ModeSwitcher';
import { COACH_EXAMPLE, COACH_STARTERS, DIFFICULTY_SHORT, SCENES, type Scene } from './scenes';

// A chat thread holds messages plus two kinds of markers:
// a scene header (a scene card was tapped) and a divider (mode switched mid-chat).
type Item =
  | { kind: 'user'; text: string; mode: ChatMode }
  | { kind: 'assistant'; text: string; mode: ChatMode; messageId?: string; rating?: Rating }
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

// Hints: every line (or run of lines) wrapped in [ ] in a tutor reply, e.g.
//   [At Apple in Shanghai. You lead a new app launch…]   ← scene setup
//   Sarah: "Thanks, sounds good."
//   [Now give the context: the past, the present, and the future.]
// becomes a note inside the bubble, in the same place it appears in the reply, with the
// brackets removed. Brackets inside a sentence ("send it to [the client]") are ordinary
// text. Works on partial text, so a note appears live as it streams in.
type Segment = { kind: 'text' | 'hint'; text: string };

function splitHints(text: string): Segment[] {
  // 1. Group lines into blocks: a bracket block runs from a line starting with [
  //    to the line where its brackets close; other lines are plain text.
  const segs: Segment[] = [];
  const addText = (line: string) => {
    const last = segs[segs.length - 1];
    if (last?.kind === 'text') last.text += '\n' + line;
    else segs.push({ kind: 'text', text: line });
  };
  let open: string[] | null = null;
  let depth = 0;
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!open && !t.startsWith('[')) {
      addText(line);
      continue;
    }
    let d = open ? depth : 0;
    for (const ch of t) {
      if (ch === '[') d++;
      else if (ch === ']') d = Math.max(0, d - 1);
    }
    if (open) {
      open.push(t);
    } else if (d === 0 && !t.endsWith(']')) {
      // Starts with [ but text runs on past the closing ] ("[Note] then ..."): ordinary text
      addText(line);
      continue;
    } else {
      open = [t];
      segs.push({ kind: 'hint', text: '' });
    }
    // Keep the hint's text current, so a hint still streaming in shows what has arrived
    segs[segs.length - 1].text = open.join(' ');
    depth = d;
    if (d === 0) open = null;
  }

  // 2. Tidy: strip the outer [ ] from hints, trim text, drop anything left empty
  return segs
    .map((s) =>
      s.kind === 'hint'
        ? { kind: s.kind, text: s.text.trim().replace(/^\[\s*/, '').replace(/\s*\]$/, '').trim() }
        : { kind: s.kind, text: s.text.replace(/^\s*\n|\n\s*$/g, '').replace(/\n{3,}/g, '\n\n').trim() }
    )
    .filter((s) => s.text);
}

const HintBulb = () => (
  <svg className="hint-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);

// Tutor reply: the character's text in the bubble, then every bracketed note below it.
// Notes always sit under the text, even when the model wrote one first (e.g. the scene
// setup); while streaming, a note can appear before any text, and the text then fills
// in above it.
// All of a reply's notes count together: once the reply has finished streaming, if they
// add up to more than NOTE_LINES lines, the group is cut at that line with "… See more",
// and "Hide" at the end of the last note folds it back.
const NOTE_LINES = 8;

function ReplyBody({ text, streaming }: { text: string; streaming: boolean }) {
  const segs = splitHints(text);
  const body = segs.filter((s) => s.kind === 'text').map((s) => s.text).join('\n\n');
  const hints = segs.filter((s) => s.kind === 'hint').map((s) => s.text);

  const groupRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  // Where to cut the group (px from its top) and where "… See more" sits; null = fits
  const [cut, setCut] = useState<{ height: number; moreTop: number; lineH: number } | null>(null);

  // Measure the notes' rendered lines (only after streaming, and again on resize)
  useLayoutEffect(() => {
    const group = groupRef.current;
    if (!group || streaming) {
      setCut(null);
      return;
    }
    const measure = () => {
      const top = group.getBoundingClientRect().top;
      let lines = 0;
      let next: { height: number; moreTop: number; lineH: number } | null = null;
      for (const span of group.querySelectorAll<HTMLElement>('.hint-text')) {
        const lineH = parseFloat(getComputedStyle(span).lineHeight) || 20;
        const r = span.getBoundingClientRect();
        const n = Math.max(1, Math.round(r.height / lineH));
        if (!next && lines + n > NOTE_LINES) {
          // The last visible line falls inside this note
          const lineTop = r.top - top + (NOTE_LINES - lines - 1) * lineH;
          next = { height: Math.round(lineTop + lineH + 9), moreTop: Math.round(lineTop), lineH };
        }
        lines += n;
      }
      setCut(lines > NOTE_LINES ? next : null);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [text, streaming, hints.length]);

  const collapsed = Boolean(cut) && !expanded;
  return (
    <>
      {body && formatReply(body)}
      {hints.length > 0 && (
        <div
          ref={groupRef}
          className={`hints${!body ? ' first' : ''}${collapsed ? ' collapsed' : ''}`}
          style={collapsed && cut ? { maxHeight: cut.height } : undefined}
        >
          {hints.map((h, k) => {
            const label = h.match(/^(Hint|Note|提示)\s*[:：]\s*/i);
            const isLast = k === hints.length - 1;
            return (
              <div key={k} className="hint">
                <HintBulb />
                <span className="hint-text">
                  {label && <b>{label[1]}: </b>}
                  {formatReply(label ? h.slice(label[0].length) : h)}
                  {cut && expanded && isLast && (
                    <button type="button" className="hint-toggle hide" aria-expanded="true" onClick={() => setExpanded(false)}>
                      Hide
                    </button>
                  )}
                </span>
              </div>
            );
          })}
          {collapsed && cut && (
            <button
              type="button"
              className="hint-toggle more"
              style={{ top: cut.moreTop, height: cut.lineH }}
              aria-expanded="false"
              onClick={() => setExpanded(true)}
            >
              … See more
            </button>
          )}
        </div>
      )}
    </>
  );
}

const SendArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

// Thumbs for rating the newest tutor reply (outline; filled in the mode color once chosen)
const THUMB_UP = 'M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3';
const THUMB_DOWN = 'M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3';
const Thumb = ({ path, on }: { path: string; on: boolean }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill={on ? 'var(--fb-fill)' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={path} />
  </svg>
);

export default function Chat({ brand }: { brand: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [conversationId, setConversationId] = useState('');

  // The page owns the mode. Only the switcher, the intro cards and scene cards change it.
  const [mode, setMode] = useState<ChatMode>('[RP]'); // the app opens in Role-play
  // About page: #about in the URL, so the phone's back gesture closes it
  const [showAbout, setShowAbout] = useState(() => window.location.hash === '#about');
  // Every visit or refresh starts on the home screen (the two-card intro)
  const [showIntro, setShowIntro] = useState(true);

  const userId = useRef(getBrowserId());
  const inviteCode = useRef(getInviteCode());

  // Free trial and limits
  const [tier, setTier] = useState<string>(inviteCode.current ? '' : 'visitor');
  const [trialRemaining, setTrialRemaining] = useState<number | null>(null);
  const [trialEnded, setTrialEnded] = useState<{ message: string; contact: string } | null>(null);
  const [trialWelcome, setTrialWelcome] = useState('');
  // Text for the "used up" card, so it can show without sending anything
  const [usedUp, setUsedUp] = useState({ message: '', contact: '' });
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
      setUsedUp({ message: cfg.trialEndedText, contact: cfg.trialContact });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Last free message used: refresh the card text so "refresh in about N hours" is current.
  // This is a settings request only; it never reaches the tutor or uses a message.
  useEffect(() => {
    if (tier !== 'visitor' || trialRemaining !== 0) return;
    let cancelled = false;
    fetchConfig().then((cfg) => {
      if (!cancelled && cfg?.trialEndedText) setUsedUp({ message: cfg.trialEndedText, contact: cfg.trialContact });
    });
    return () => {
      cancelled = true;
    };
  }, [tier, trialRemaining]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [items]);

  const leaveIntro = () => {
    if (showIntro) setShowIntro(false);
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

  // Dify's id for the reply that just finished, so it can be rated
  const setReplyMessageId = (messageId: string) =>
    setItems((list) => {
      const copy = [...list];
      const last = copy[copy.length - 1];
      if (last?.kind === 'assistant') copy[copy.length - 1] = { ...last, messageId };
      return copy;
    });

  // Thumbs: tapping the chosen thumb again clears it. The rating shows right away and
  // goes back if it couldn't be saved. Nothing else happens on a thumbs down for now.
  const rateReply = async (index: number, pick: 'like' | 'dislike') => {
    const item = items[index];
    if (item?.kind !== 'assistant' || !item.messageId) return;
    const previous = item.rating ?? null;
    const next: Rating = previous === pick ? null : pick;
    const setRating = (rating: Rating) =>
      setItems((list) => list.map((x, i) => (i === index && x.kind === 'assistant' ? { ...x, rating } : x)));
    setRating(next);
    const ok = await sendFeedback({ messageId: item.messageId, rating: next, user: userId.current, code: inviteCode.current });
    if (!ok && mountedRef.current) setRating(previous);
  };

  // Visitor's free messages are used up: sending is off until they refresh or an invite link is opened
  const trialUsedUp = tier === 'visitor' && (trialRemaining === 0 || Boolean(trialEnded));

  const charCount = input.trim().length;
  const overLimit = charCount > maxChars;
  const nearLimit = charCount > maxChars * 0.85;

  /**
   * Send one message in a given mode.
   * A scene kickoff is sent to the tutor but shown as a scene header, not a bubble.
   */
  const sendMessage = async (text: string, sendMode: ChatMode, scene?: Scene) => {
    const query = text.trim();
    if (!query || sending || trialUsedUp || query.length > maxChars) return;

    leaveIntro();
    if (!scene) {
      setInput('');
      if (inputRef.current) {
        inputRef.current.style.height = '';
        inputRef.current.style.overflowY = '';
      }
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
        onMessageId: setReplyMessageId,
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
    if (scene.kickoff) {
      sendMessage(scene.kickoff, '[RP]', scene);
      return;
    }
    // No kickoff (e.g. "Set your scene"): show the scene header only, no tutor call.
    // The learner's next message describes their role, company and situation.
    leaveIntro();
    setError('');
    setItems((list) => [...list, { kind: 'scene', scene }]);
    inputRef.current?.focus();
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
  useEffect(() => {
    const onPop = () => setShowAbout(window.location.hash === '#about');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const openAbout = () => {
    if (window.location.hash !== '#about') window.history.pushState({ about: true }, '', '#about');
    setShowAbout(true);
  };

  const closeAbout = () => {
    // Opened from the menu: step back in history. Landed on #about directly: just clear it.
    if (window.history.state?.about) window.history.back();
    else window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setShowAbout(false);
  };

  const goHome = () => {
    if (showAbout) closeAbout();
    newChat();
    setInput('');
    if (inputRef.current) {
      inputRef.current.style.height = '';
      inputRef.current.style.overflowY = '';
    }
    setMode('[RP]'); // the home screen defaults to Role-play
    setShowIntro(true);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // isComposing keeps Enter working normally while typing Chinese with an input method
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  // Grow the box with the text, up to 140px. scrollHeight leaves out the borders, so add
  // them back; otherwise the box is a few pixels short and shows a scrollbar on one line.
  // The scrollbar only appears once the text is taller than the 140px cap.
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const box = e.target;
    box.style.height = 'auto';
    const borders = box.offsetHeight - box.clientHeight;
    const needed = box.scrollHeight + borders;
    box.style.height = Math.min(needed, 140) + 'px';
    box.style.overflowY = needed > 140 ? 'auto' : 'hidden';
  };

  const isRP = mode === '[RP]';
  const empty = items.length === 0;
  const last = items[items.length - 1];
  const lastReplyIndex = items.map((x) => x.kind).lastIndexOf('assistant');
  const lastIsEmptyReply = sending && last?.kind === 'assistant' && last.text === '';
  const startDisabled = sending || trialUsedUp;
  // The invite reminder appears once the learner starts typing (or after the server says the trial ended)
  const showUsedUpCard = Boolean(trialEnded) || (trialUsedUp && input.trim().length > 0);
  const usedUpMessage = trialEnded?.message || usedUp.message || 'You’ve used today’s free messages.';
  const usedUpContact = trialEnded?.contact || usedUp.contact || 'Ask Donald for your personal invite link.';

  // First-visit screen: the learner picks Role-play or Coach from the cards, so there's no text box
  const onIntro = showIntro && empty;

  // Status pills float just above the box; the chat keeps room for them at the bottom so they never cover text
  const showTrialPill = tier === 'visitor' && trialRemaining !== null && !showUsedUpCard;
  const showTierBadge = tier === 'admin' || tier === 'invite';
  const hasPill = !onIntro && (showTrialPill || showTierBadge);

  // Text above the box and placeholder depend on the screen
  let hint: ReactNode = null;
  let placeholder = 'Type your message';
  if (empty) {
    if (isRP) {
      hint = <span className="composer-hint">Set your own scene</span>;
      placeholder = 'e.g. I\'m a PM at Apple working on...';
    } else {
      placeholder = 'Ask a question…';
    }
  } else if (isRP && last?.kind === 'scene' && !last.scene.kickoff) {
    // A self-set scene is waiting for the learner to describe it
    placeholder = 'e.g. I\'m a PM at Apple working on...';
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
      <header className={`site-header${empty && !showAbout ? '' : ' with-line'}`}>
        <button type="button" className="brand-home" onClick={goHome} aria-label="Real Business by Donald, home">
          {brand}
        </button>
        {showAbout ? (
          <button type="button" className="close-link" onClick={closeAbout}>
            Close
            <span className="close-x" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </span>
          </button>
        ) : (
          <ModeSwitcher mode={mode} onChange={changeMode} disabled={sending} onAbout={openAbout} />
        )}
      </header>

      {showAbout && <About />}

      <main className="chat-area" hidden={showAbout}>
        <div className="chat-slot">
          <div
            className={`chat ${isRP ? 'mode-rp' : 'mode-qa'}${empty ? (showIntro ? ' screen-intro' : ' screen-home') : ' has-thread'}${hasPill ? ' has-pill' : ''}`}
          >
            <div className="messages" aria-live="polite">
              {/* ---------- First visit: two mode cards (Proposal A1) ---------- */}
              {empty && showIntro && (
                <div className="start intro">
                  <h1>Practice your business English</h1>
                  <p className="start-sub">How would you like to practice today? <br />You can write in English or Chinese.</p>
                  {trialNote}

                  <button type="button" className="mode-card rp" onClick={() => pickIntroMode('[RP]')}>
                    <span className="mode-card-head">
                      <span className="avatar big" aria-hidden="true"><RoleplayIcon size={26} /></span>
                      <span className="mode-card-titles">
                        <span className="mode-card-title">Practice a conversation</span>
                        <span className="mode-card-kicker">ROLE-PLAY MODE<span className="zh" lang="zh-CN">模拟同事/客户</span></span>
                      </span>
                    </span>
                    <span className="mode-card-body">Talk with a colleague, manager, or client and get feedback.</span>
                  </button>

                  <button type="button" className="mode-card qa" onClick={() => pickIntroMode('[QA]')}>
                    <span className="mode-card-head">
                      <span className="avatar big" aria-hidden="true"><CoachIcon size={22} /></span>
                      <span className="mode-card-titles">
                        <span className="mode-card-title">Ask a question</span>
                        <span className="mode-card-kicker">COACH MODE<span className="zh" lang="zh-CN">答疑模式</span></span>
                      </span>
                    </span>
                    <span className="mode-card-body">Guidance from Donald’s lessons.</span>
                    <span className="mode-card-example">{COACH_EXAMPLE}</span>
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
                        <span className="scene-card-title">
                          {s.title}
                          {s.difficulty && (
                            <span
                              className={`difficulty ${s.difficulty.toLowerCase()}`}
                              aria-label={`Difficulty: ${s.difficulty}`}
                            >
                              <span aria-hidden="true">{DIFFICULTY_SHORT[s.difficulty]}</span>
                              <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                            </span>
                          )}
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
                    <div key={i} className="marker rp scene" role="separator">
                      <span className="marker-line" />
                      <span className="avatar scene-avatar" aria-hidden="true" style={{ background: item.scene.avatarBg }}>
                        {item.scene.avatar}
                      </span>
                      <span className="marker-text">
                        <span className="marker-title">ROLE-PLAY · {item.scene.title.toUpperCase()}</span>
                        <span className="marker-sub">
                          {item.scene.label.split('·')[1]?.trim()}
                          {item.scene.difficulty && ` · ${item.scene.difficulty}`}
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
                // Thumbs only on the newest tutor reply, once it has finished (same on desktop and phone)
                const showThumbs = item.kind === 'assistant' && i === lastReplyIndex && !sending && Boolean(item.messageId);
                return (
                  <Fragment key={i}>
                  <div
                    className={`bubble ${item.kind} ${item.mode === '[RP]' ? 'rp' : 'qa'}${item.kind === 'assistant' && item.mode === '[RP]' ? ' in-scene' : ''}`}
                  >
                    {item.kind === 'assistant' && (
                      <span className={`who ${item.mode === '[RP]' ? 'rp' : 'qa'}`}>
                        {item.mode === '[RP]' ? <RoleplayIcon size={14} /> : <CoachIcon size={14} />}
                        {item.mode === '[RP]' ? 'Role-play' : 'Coach'}
                      </span>
                    )}
                    {item.kind === 'assistant' ? <ReplyBody text={item.text} streaming={sending && i === items.length - 1} /> : item.text}
                  </div>
                  {showThumbs && item.kind === 'assistant' && (
                    <div className="fb" role="group" aria-label="Rate this reply">
                      <button type="button" className={`fb-btn${item.rating === 'like' ? ' on' : ''}`} aria-label="Helpful" aria-pressed={item.rating === 'like'} onClick={() => rateReply(i, 'like')}>
                        <Thumb path={THUMB_UP} on={item.rating === 'like'} />
                      </button>
                      <button type="button" className={`fb-btn${item.rating === 'dislike' ? ' on' : ''}`} aria-label="Not helpful" aria-pressed={item.rating === 'dislike'} onClick={() => rateReply(i, 'dislike')}>
                        <Thumb path={THUMB_DOWN} on={item.rating === 'dislike'} />
                      </button>
                    </div>
                  )}
                  </Fragment>
                );
              })}

              {lastIsEmptyReply && <div className="bubble assistant typing">Thinking…</div>}
              <div ref={endRef} />
            </div>

            {showUsedUpCard && (
              <div className="trial-card" role="status">
                <p className="trial-card-title">{usedUpMessage}</p>
                <p className="trial-card-body">
                  Want to keep practicing?
                  <br />
                  {usedUpContact}
                </p>
                <p className="trial-card-hint">Already have an invite link? Open it to continue.</p>
              </div>
            )}

            {error && (
              <div className="error-banner" role="alert">
                {error}
              </div>
            )}

            {!onIntro && (
            <div className="composer">
              {/* Status pills float just above the box instead of taking a row of their own */}
              {showTrialPill && (
                <div className="trial-remaining">
                  {trialRemaining === 0
                    ? 'That was your last free message today.'
                    : `${trialRemaining} free message${trialRemaining === 1 ? '' : 's'} left today`}
                </div>
              )}
              {/* Shown once the server confirms the code: ADMIN for admin codes, PRO for invite codes */}
              {showTierBadge && (
                <div className={`tier-badge ${tier}`}>{tier === 'admin' ? 'admin' : 'pro'}</div>
              )}
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
                  disabled={sending || trialUsedUp || overLimit || !input.trim()}
                  aria-label="Send"
                >
                  <SendArrow />
                </button>
              </div>
            </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
