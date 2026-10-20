// Content for the start screens. Edit the wording here; no other file needs to change.

// Coach start screen: tapping one sends it as the learner's question.
export const COACH_STARTERS = [
  'How do I start a meeting?',
  'What should I do in my first 90 days?',
  'How do I handle small talk at a conference or event?',
];

// Second line on the home screen's Coach card.
export const COACH_EXAMPLE = 'Ask work questions.';

/** How much the character pushes back. The levels are defined in the Dify system prompt. */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

/** Short label shown next to the dots on scene cards (4 characters max) */
export const DIFFICULTY_SHORT: Record<Difficulty, string> = { Easy: 'Easy', Medium: 'Med', Hard: 'Hard' };

export interface Scene {
  id: string;
  /** Shown as a tag on the card; leave out for no tag */
  difficulty?: Difficulty;
  /** Who the learner talks to; not shown on the card, only in the in-chat scene divider (text after '·') */
  label: string;
  title: string;
  summary: string;
  avatar: string;
  avatarBg: string;
  /**
   * Sent to the tutor (not shown as a chat bubble) to start the scene.
   * Each scene's behavior is defined in the system prompt (Part B), so this only
   * names the scene and its difficulty. Leave out to start the scene without calling
   * the tutor: the learner's first message then sets up the scene.
   */
  kickoff?: string;
}

// Scene cards on the Role-play screen: a free-choice scene plus the MVP scenes from the Business Chat PRD.
export const SCENES: Scene[] = [
  {
    id: 'choose-scene',
    label: 'YOUR SCENE · State your role, company, and situation (meeting, presentation, difficult co-worker ...)',
    title: 'Set your scene',
    summary: 'A status meeting, client meeting, or 1:1 with a coworker.',
    avatar: '💬',
    avatarBg: '#E2F3EC',
    // No kickoff: tapping opens the scene header and waits for the learner to describe their scene.
  },
  {
    id: 'start-meeting',
    difficulty: 'Easy',
    label: 'KICKOFF MEETING · Sarah and the team',
    title: 'Start a meeting',
    summary: 'Open with Introductions, Context and Expectations.',
    avatar: '👩‍💼',
    avatarBg: '#FCE7E3',
    kickoff: 'Start the role-play scene "Start a meeting". Difficulty: Easy.',
  },
  {
    id: 'disagree',
    difficulty: 'Medium',
    label: 'TEAM DISCUSSION · Bob, teammate',
    title: 'Disagree with a coworker',
    summary: 'Agree with part of their idea first, then share your view.',
    avatar: '👨‍💻',
    avatarBg: '#EFE7F7',
    kickoff: 'Start the role-play scene "Disagree with a coworker". Difficulty: Medium.',
  },
];
