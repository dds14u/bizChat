// Content for the start screens. Edit the wording here; no other file needs to change.

// Coach start screen: tapping one sends it as the learner's question.
export const COACH_STARTERS = [
  'How do I start a meeting?',
  'How do I handle a tough question during a presentation?',
  'How do I handle small talk at a conference or event?',
];

// Second line on the home screen's Coach card.
export const COACH_EXAMPLE = 'Ask work questions.';

/** How much the character pushes back. The levels are defined in the Dify system prompt. */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

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
   * names the scene and its difficulty.
   */
  kickoff: string;
}

// Scene cards on the Role-play screen: a free-choice scene plus the MVP scenes from the Business Chat PRD.
export const SCENES: Scene[] = [
  {
    id: 'choose-scene',
    label: 'YOUR SCENE · You choose',
    title: 'Choose your scene',
    summary: 'A status meeting, client meeting, or 1:1 with a coworker.',
    avatar: '💬',
    avatarBg: '#E2F3EC',
    kickoff:
      'I want to set up my own role-play scene. Ask me which one I want to practice: ' +
      'a status meeting, a client meeting, or a 1:1 with a coworker. Also ask for my role and company if I want it tailored.',
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
    label: 'TEAM DISCUSSION · Lin, teammate',
    title: 'Disagree with a coworker',
    summary: 'Agree with part of their idea first, then share your view.',
    avatar: '👩‍💻',
    avatarBg: '#EFE7F7',
    kickoff: 'Start the role-play scene "Disagree with a coworker". Difficulty: Medium.',
  },
];
