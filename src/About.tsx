import './About.css';

const FEEDBACK_EMAIL = 'dds14u@live.com';

// About page: opened from the bottom of the mode menu; the header shows "← Back" instead of the menu.
export default function About() {
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
          There are no user accounts. Conversations are processed to generate replies and are not used to identify you.
          Please don’t paste confidential company information.
        </p>

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
