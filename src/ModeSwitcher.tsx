import { useEffect, useRef, useState } from 'react';
import type { ChatMode } from './chatApi';

// Line icons (Powder Blue design: chat bubble for Coach, people for Role-play)
export const CoachIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 20.5l1.5-4.6A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z" />
  </svg>
);

export const RoleplayIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const OPTIONS: { mode: ChatMode; label: string; zh: string; hint: string; Icon: typeof CoachIcon }[] = [
  { mode: '[RP]', label: 'Role-play', zh: '情景模拟', hint: 'Practice a conversation', Icon: RoleplayIcon },
  { mode: '[QA]', label: 'Coach', zh: '答疑模式', hint: 'Ask questions', Icon: CoachIcon },
];

export const modeLabel = (mode: ChatMode) => (mode === '[RP]' ? 'Role-play' : 'Coach');

interface Props {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
  disabled?: boolean;
  onAbout?: () => void;
  /** Bump this number to make the button pulse twice (draws attention to it) */
  nudge?: number;
}

// Top-right mode pill with a dropdown (Proposal C)
export default function ModeSwitcher({ mode, onChange, disabled, onAbout, nudge = 0 }: Props) {
  const [open, setOpen] = useState(false);
  // Two light pulses each time `nudge` goes up (restarted if one is already playing)
  const [pulsing, setPulsing] = useState(false);
  useEffect(() => {
    if (!nudge) return;
    setPulsing(false);
    const frame = requestAnimationFrame(() => setPulsing(true));
    return () => cancelAnimationFrame(frame);
  }, [nudge]);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((o) => o.mode === mode) ?? OPTIONS[0];

  // Close on outside tap or Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // A reply started streaming: close the menu
  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  const pick = (m: ChatMode) => {
    setOpen(false);
    if (m !== mode) onChange(m);
  };

  return (
    <div className="mode-switcher" ref={rootRef}>
      <button
        type="button"
        className={`mode-pill ${mode === '[RP]' ? 'rp' : 'qa'}${pulsing ? ' pulse' : ''}`}
        onAnimationEnd={() => setPulsing(false)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Mode: ${current.label}. Tap to switch`}
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mode-dot" aria-hidden="true" />
        {current.label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="mode-menu" role="menu" aria-label="Switch mode">
          {OPTIONS.map(({ mode: m, label, zh, hint, Icon }) => (
            <button
              key={m}
              type="button"
              role="menuitemradio"
              aria-checked={m === mode}
              className={`mode-option ${m === '[RP]' ? 'rp' : 'qa'}${m === mode ? ' current' : ''}`}
              onClick={() => pick(m)}
            >
              <span className="mode-option-icon">
                <Icon size={18} />
              </span>
              <span className="mode-option-text">
                <span className="mode-option-label">
                  {label}
                  <span className="zh" lang="zh-CN">{zh}</span>
                </span>
                <span className="mode-option-hint">{hint}</span>
              </span>
              {/* Always rendered so every row keeps the same width; only the selected row shows it */}
              <svg className="mode-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </button>
          ))}
          {onAbout && (
            <button
              type="button"
              role="menuitem"
              className="mode-about"
              onClick={() => {
                setOpen(false);
                onAbout();
              }}
            >
              About
            </button>
          )}
        </div>
      )}
    </div>
  );
}
