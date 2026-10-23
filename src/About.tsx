import { useEffect, useRef, useState } from 'react';
import './About.css';
import type { LearnerProfile } from './profile';

const FEEDBACK_EMAIL = 'dds14u@live.com';

interface Props {
  profile: LearnerProfile | null;
  memoryOn: boolean;
  onMemoryChange: (on: boolean) => void;
  onClear: () => void;
}

// About page: opened from the bottom of the mode menu; the header shows "Close" instead of the menu.
export default function About({ profile, memoryOn, onMemoryChange, onClear }: Props) {
  // One line in this order: name · role · company · industry; the goal gets its own line
  const summary = profile
    ? (['name', 'role', 'company', 'industry'] as const).filter((key) => profile[key]).map((key) => ({ key, text: profile[key]! }))
    : [];

  // "Are you sure?" for Clear / Delete now: the note line turns into a confirm strip (no pop-up)
  const [confirming, setConfirming] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (confirming) cancelRef.current?.focus(); // keyboard and screen-reader users land on the safe choice
  }, [confirming]);
  useEffect(() => {
    setConfirming(false); // the switch or a new profile ends any pending confirm
  }, [memoryOn, profile]);
  const confirmStrip = (
    <div
      className="profile-confirm"
      role="group"
      aria-label="Confirm delete"
      onKeyDown={(e) => {
        if (e.key === 'Escape') setConfirming(false);
      }}
    >
      <span>Delete your profile? This can’t be undone.</span>
      <span className="profile-confirm-actions">
        <button
          type="button"
          className="profile-confirm-delete"
          onClick={() => {
            setConfirming(false);
            onClear();
          }}
        >
          Delete
        </button>
        <button type="button" className="profile-confirm-cancel" ref={cancelRef} onClick={() => setConfirming(false)}>
          Cancel
        </button>
      </span>
    </div>
  );
  return (
    <main className="about-area">
      <article className="about">
        <h1>About this app</h1>

        <p>
          Real Business is a practice partner for professionals who use English at work. You can simulate real workplace
          conversations like meetings, calls, and other situations — and get feedback on how you can improve.
        </p>
        <p className="about-zh" lang="zh-CN">
          Real Business 帮助在外企或跨国团队工作的中国职场人练习商务英语。
        </p>

        <h2>Who made this</h2>
        <p>
          I’m Donald. I’ve worked as a product manager at Microsoft, Apple and Google, and later ran a business helping
          professionals from dozens of companies in tech, automotive, pharma and finance improve their communication skills.
        </p>
        <p>
          The lessons behind this app come from that classroom: short, practical methods you can use in your next meeting,
          not grammar drills.
        </p>

        <h2>Two ways to practice</h2>
        <p>
          <strong>
            Role-play <span lang="zh-CN">情景模拟</span>
          </strong>{' '}
          — act out a scene with a colleague, manager or client, then get a score and feedback and what to improve.
        </p>
        <p>
          <strong>
            Coach <span lang="zh-CN">答疑模式</span>
          </strong>{' '}
          — ask a work question and get guidance drawn from the lessons, with links to some of my videos.
        </p>

        <h2>Privacy</h2>
        <p>
          There are no user accounts. To pick up where you left off, the app remembers a short profile (first name,
          role, company, industry and learning goal), linked to this browser and deleted after 30 days without an update. You
          can pause memory or delete your profile below at any time. Conversations are processed to generate replies. Please don’t
          paste confidential company information.
        </p>

        {/* Saved profile: between two rules, with the memory switch in its heading */}
        <section className="profile-box" aria-labelledby="profile-title">
          <div className="profile-head">
            <h3 id="profile-title">Your profile</h3>
            <button
              type="button"
              role="switch"
              aria-checked={memoryOn}
              aria-label="Remember my background"
              className={`switch${memoryOn ? ' on' : ''}`}
              onClick={() => onMemoryChange(!memoryOn)}
            >
              <span className="switch-text" aria-hidden="true">
                {memoryOn ? 'On' : 'Off'}
              </span>
              <span className="switch-knob" aria-hidden="true" />
            </button>
          </div>

          {!memoryOn && !profile ? (
            <p className="profile-note">Memory is off. The app won’t save anything about you on this browser.</p>
          ) : profile ? (
            <>
              {/* Paused: the saved profile stays visible but faded */}
              <div className={memoryOn ? undefined : 'profile-paused'}>
              {summary.length > 0 && (
                <p className="profile-line">
                  {summary.map((part, i) => (
                    <span key={part.key}>
                      {i > 0 && ' · '}
                      {part.text}
                      {part.key === 'industry' && profile.industry_source === 'inferred' && (
                        <span className="profile-guess"> (guessed)</span>
                      )}
                    </span>
                  ))}
                </p>
              )}
              {profile.goal && <p className="profile-line goal">Goal: {profile.goal}</p>}
              </div>
              {confirming ? (
                confirmStrip
              ) : memoryOn ? (
                <p className="profile-note">
                  The app uses this to set up scenes for you.{' '}
                  <button type="button" className="profile-clear" onClick={() => setConfirming(true)}>
                    Clear
                  </button>
                </p>
              ) : (
                <p className="profile-note">
                  Memory is paused. The app won’t use or update this profile until you turn it back on. It’s still
                  deleted 30 days after the last update.{' '}
                  <button type="button" className="profile-clear" onClick={() => setConfirming(true)}>
                    Delete now
                  </button>
                </p>
              )}
            </>
          ) : (
            <p className="profile-note">
              Nothing saved yet. Share your first name, role, company and goal in a chat, and the app will remember them here.
            </p>
          )}
        </section>

        <h2>Beta</h2>
        <p>
          This is an early version shared with a small group. If something feels off — I’d love to hear about it.{' '}
          <a className="about-link" href={`mailto:${FEEDBACK_EMAIL}?subject=Real%20Business%20feedback`}>
            Feedback
          </a>
        </p>
      </article>
    </main>
  );
}
