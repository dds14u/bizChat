// Content for the start screens. Edit the wording here; no other file needs to change.

// Coach start screen: tapping one sends it as the learner's question.
export const COACH_STARTERS = [
  'How do I start a meeting?',
  'How do I handle a tough question during a presentation?',
  'How do I handle small talk at a conference or event?',
];

// Example shown on the first-visit Coach card.
export const COACH_EXAMPLE = 'How do I decline an unreasonable or late request?';

/** How much the character pushes back. The levels are defined in the Dify system prompt. */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Scene {
  id: string;
  difficulty: Difficulty;
  /** Small label above the title, e.g. who the learner talks to */
  label: string;
  title: string;
  summary: string;
  avatar: string;
  avatarBg: string;
  /**
   * Sent to the tutor (not shown as a chat bubble) to start the scene.
   * Each scene's behavior is defined in the system prompt (Part B), so this only
   * names the scene and its difficulty.
   */
  kickoff: string;
}

// The 3 MVP scenes from the Business Chat PRD.
export const SCENES: Scene[] = [
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
    label: 'TEAM DISCUSSION · Lin, teammate',
    title: 'Disagree with a coworker',
    summary: 'Agree with part of their idea first, then share your view.',
    avatar: '👩‍💻',
    avatarBg: '#EFE7F7',
    kickoff: 'Start the role-play scene "Disagree with a coworker". Difficulty: Medium.',
  },
  {
    id: 'late-request',
    difficulty: 'Medium',
    label: 'MANAGER · David',
    title: 'Reject a late request',
    summary: 'David wants extra work by Monday. Push back politely.',
    avatar: '🧑‍💼',
    avatarBg: '#F3EBD9',
    kickoff: 'Start the role-play scene "Reject a late request". Difficulty: Medium.',
  },
];

// Names shown on the first-visit Role-play card.
export const SCENE_PEOPLE = 'Sarah, Lin, David and more';
