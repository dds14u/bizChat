// Saved learner profile (first name, company, industry, learning goal).
// The server saves it from the tutor's hidden <profile …/> line; the page only shows it,
// clears it, and remembers whether the learner turned memory off on this browser.

export interface LearnerProfile {
  name?: string;
  company?: string;
  industry?: string;
  industry_source?: 'stated' | 'inferred';
  goal?: string;
}

const MEMORY_OFF_KEY = 'td-memory-off';

/** Memory is on unless the learner turned it off on this browser. */
export function readMemoryOn(): boolean {
  try {
    return localStorage.getItem(MEMORY_OFF_KEY) !== '1';
  } catch {
    return true;
  }
}

export function saveMemoryOn(on: boolean) {
  try {
    if (on) localStorage.removeItem(MEMORY_OFF_KEY);
    else localStorage.setItem(MEMORY_OFF_KEY, '1');
  } catch {
    // Storage blocked: the switch still works for this visit
  }
}

export async function fetchProfile(user: string): Promise<LearnerProfile | null> {
  try {
    const res = await fetch(`/api/profile?user=${encodeURIComponent(user)}`, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const data = await res.json();
    const p = data?.profile;
    return p && typeof p === 'object' && (p.name || p.company || p.industry || p.goal) ? (p as LearnerProfile) : null;
  } catch {
    return null;
  }
}

export async function deleteProfile(user: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/profile?user=${encodeURIComponent(user)}`, {
      method: 'DELETE',
      signal: AbortSignal.timeout(6000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
