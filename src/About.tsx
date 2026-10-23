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
          There are no user accounts. To pick up where you left off, the tutor remembers a short profile (first name,
          role, company, industry and learning goal), linked to this browser and deleted after 30 days without an update. You
          can clear it or turn memory off below at any time. Conversations are processed to generate replies. Please don’t
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

          {!memoryOn ? (
            <p className="profile-note">Memory is off. The tutor won’t save anything about you on this browser.</p>
          ) : profile ? (
            <>
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
              <p className="profile-note">
                The tutor uses this to set up scenes for you.{' '}
                <button type="button" className="profile-clear" onClick={onClear}>
                  Clear
                </button>
              </p>
            </>
          ) : (
            <p className="profile-note">
              Nothing saved yet. Share your first name, role, company and goal in a chat, and the tutor will remember them here.
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
