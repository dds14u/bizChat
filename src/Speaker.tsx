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
  // iPhone: with the keyboard open, Safari shifts the visible area down and anything pinned to the
  // top of the page ends up above it. So the face follows the visible area (visualViewport): if the
  // header has been pushed out of view, the face sits at the top of what the learner can see.
  useLayoutEffect(() => {
    const vv = window.visualViewport;
    const place = () => {
      const header = document.querySelector('.site-header')?.getBoundingClientRect();
      const brand = document.querySelector('.brand-home')?.getBoundingClientRect();
      const mode = document.querySelector('.mode-switcher')?.getBoundingClientRect();
      const visibleTop = vv ? vv.offsetTop : 0;
      const left = (brand && mode ? (brand.right + mode.left) / 2 : window.innerWidth / 2) + (vv ? vv.offsetLeft : 0);
      const top = Math.max(header ? (header.top + header.bottom) / 2 - 20 : 12, visibleTop + 8);
      setPos({ left, top });
    };
    place();
    window.addEventListener('resize', place);
    vv?.addEventListener('resize', place);
    vv?.addEventListener('scroll', place);
    return () => {
      window.removeEventListener('resize', place);
      vv?.removeEventListener('resize', place);
      vv?.removeEventListener('scroll', place);
    };
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

  // Remove the face once it has shrunk away. Same timing whatever the motion setting (beta: one
  // behavior for everyone).
  useEffect(() => {
    if (phase !== 'leaving') return;
    const t = window.setTimeout(onGone, 280);
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
