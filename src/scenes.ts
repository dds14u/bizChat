// Content for the start screens. Edit the wording here; no other file needs to change.

// Coach start screen: tapping one sends it as the learner's question.
export const COACH_STARTERS = [
  'How do I open a meeting with a clear agenda?',
  'How do I handle a tough question during a presentation?',
  'What small talk works at a networking event?',
];

// Example shown on the first-visit Coach card.
export const COACH_EXAMPLE = 'How do I decline an unreasonable or late request?';

export interface Scene {
  id: string;
  /** Small label above the title, e.g. who the learner talks to */
  label: string;
  title: string;
  summary: string;
  avatar: string;
  avatarBg: string;
  /** Sent to the tutor (not shown as a chat bubble) to start the scene */
  kickoff: string;
}

// The 3 MVP scenes from the Business Chat PRD.
// The kickoff text sets up the scene until the system prompt defines each one.
export const SCENES: Scene[] = [
  {
    id: 'start-meeting',
    label: 'KICKOFF MEETING · Sarah and the team',
    title: 'Start a meeting',
    summary: 'Open with Introductions, Context and Expectations.',
    avatar: '👩‍💼',
    avatarBg: '#FCE7E3',
    kickoff:
      'Start the role-play scene "Start a meeting". I am leading a project kickoff meeting at a well-known US company. ' +
      'You play Sarah and the team who are attending. Set the scene in 2–3 sentences, then guide me to open the meeting ' +
      'in three steps: first my Introduction, then the Context, then the Expectations. ' +
      'In your first message, mention that I can tell you my real role and company if I want the scene tailored. ' +
      'Give me feedback after I finish the Expectations step.',
  },
  {
    id: 'disagree',
    label: 'TEAM DISCUSSION · Lin, teammate',
    title: 'Disagree with a coworker',
    summary: 'Agree with part of their idea first, then share your view.',
    avatar: '👩‍💻',
    avatarBg: '#EFE7F7',
    kickoff:
      'Start the role-play scene "Disagree with a coworker". You play Lin, my teammate, in a team discussion at a well-known US company. ' +
      'Set the scene in 2–3 sentences and propose an idea that I can reasonably disagree with. ' +
      'I am practicing the feedback sandwich: agree with part of your idea first, then share my own view and facts. ' +
      'In your first message, mention that I can tell you my real role and company if I want the scene tailored. ' +
      'Stay in character until I type feedback or end.',
  },
  {
    id: 'late-request',
    label: 'MANAGER · David',
    title: 'Reject a late request',
    summary: 'David wants extra work by Monday. Push back politely.',
    avatar: '🧑‍💼',
    avatarBg: '#F3EBD9',
    kickoff:
      'Start the role-play scene "Reject a late request". You play David, my manager at a well-known US company. ' +
      'It is late on Friday and you ask me to take on extra work due Monday morning. ' +
      'I am practicing how to politely push back or negotiate. Set the scene in 2–3 sentences and make the request. ' +
      'In your first message, mention that I can tell you my real role and company if I want the scene tailored. ' +
      'Stay in character until I type feedback or end.',
  },
];

// Names shown on the first-visit Role-play card.
export const SCENE_PEOPLE = 'Sarah, Lin, David and more';
