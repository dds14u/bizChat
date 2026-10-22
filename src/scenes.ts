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
  /** The character's face, shown large while they reply, and their gender. Leave out for invented characters. */
  face?: string;
  gender?: 'female' | 'male';
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
    face: '👩‍💼', // Sarah
    gender: 'female',
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
    face: '👨‍💻', // Bob
    gender: 'male',
    kickoff: 'Start the role-play scene "Disagree with a coworker". Difficulty: Medium.',
  },
];

// Faces for characters the tutor invents ("Set your scene", or a scene typed in the box).
// The tutor names the character's gender in a hidden <character … gender="…"/> line; without it,
// a random woman or man is picked. One face per scene.
export type Gender = 'female' | 'male';

export const SPEAKER_FACES: Record<Gender, string[]> = {
  female: ['👩‍💼', '🙋🏼‍♀️'],
  male: ['🧔‍♂️', '👨‍💻'],
};

const FACE_BG: Record<Gender, string> = { female: '#FCE7E3', male: '#EFE7F7' };

export interface SpeakerFace {
  face: string;
  bg: string;
  gender: Gender;
}

const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

export function speakerFaceForGender(gender: Gender): SpeakerFace {
  return { face: pick(SPEAKER_FACES[gender]), bg: FACE_BG[gender], gender };
}

export function randomSpeakerFace(): SpeakerFace {
  return speakerFaceForGender(Math.random() < 0.5 ? 'female' : 'male');
}

/** The fixed face for a built-in character, or null when the tutor invents the character */
export function fixedSpeakerFace(scene: Scene): SpeakerFace | null {
  return scene.face && scene.gender ? { face: scene.face, bg: scene.avatarBg, gender: scene.gender } : null;
}
