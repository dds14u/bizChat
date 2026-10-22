import { useEffect, useLayoutEffect, useState } from 'react';

export type SpeakerPhase = 'speaking' | 'done' | 'leaving';

interface Props {
  face: string;
  bg: string;
  phase: SpeakerPhase;
  /** The learner did something after the reply finished: start shrinking away */
  onDismiss: () => void;
  /** The shrink-away animation finished: remove the face */
  onGone: () => void;
}

// Role-play: the character's face floats front and center at the top while they reply, like the
// other person in a spoken conversation. It sits on its own layer (fixed, no pointer events),
// so the chat underneath never moves or gets covered for taps.
//   speaking: large face with a soft breathing glow
//   done:     the glow stops; the face stays until the learner's next action
//   leaving:  any scroll, tap, click or key press shrinks it away
export default function Speaker({ face, bg, phase, onDismiss, onGone }: Props) {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  // Centered in the header's gap between the logo and the mode button (the page center on wide
  // screens), hanging down from the middle of the header.
  useLayoutEffect(() => {
    const place = () => {
      const header = document.querySelector('.site-header')?.getBoundingClientRect();
      const brand = document.querySelector('.brand-home')?.getBoundingClientRect();
      const mode = document.querySelector('.mode-switcher')?.getBoundingClientRect();
      const left = brand && mode ? (brand.right + mode.left) / 2 : window.innerWidth / 2;
      const top = header ? (header.top + header.bottom) / 2 - 20 : 12;
      setPos({ left, top });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, []);

  // After the reply: the learner's next action (scroll, tap, click, typing) dismisses the face.
  // Listen on the capture phase so it reacts before anything else handles the event.
  useEffect(() => {
    if (phase !== 'done') return;
    const events = ['pointerdown', 'keydown', 'wheel', 'touchmove'] as const;
    const opts: AddEventListenerOptions = { capture: true, passive: true };
    const dismiss = () => onDismiss();
    events.forEach((e) => window.addEventListener(e, dismiss, opts));
    return () => events.forEach((e) => window.removeEventListener(e, dismiss, opts));
  }, [phase, onDismiss]);

  // Remove the face once it has shrunk away (instantly with Reduce motion)
  useEffect(() => {
    if (phase !== 'leaving') return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(onGone, reduce ? 0 : 280);
    return () => window.clearTimeout(t);
  }, [phase, onGone]);

  if (!pos) return null;
  return (
    <div className={`speaker ${phase}`} style={{ left: pos.left, top: pos.top }} aria-hidden="true">
      <span className="speaker-face" style={{ background: bg }}>
        {face}
      </span>
    </div>
  );
}
