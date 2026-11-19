// Saved learner profile (first name, role, company, industry, learning goal).
// The server saves it from the tutor's hidden <profile …/> line; the page only shows it,
// clears it, and remembers whether the learner turned memory off on this browser.

export interface LearnerProfile {
  name?: string;
  role?: string;
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

// Last profile the server returned, kept on this browser so the home greeting is right on the
// first paint (no "Practice your…" → "Hi D…" flash). The browser ID the profile is linked to lives in
// the same storage, so the two are cleared together. The server stays the source of truth: each load
// re-checks it and updates or removes this copy.
const PROFILE_CACHE_KEY = 'td-profile';

export function readCachedProfile(): LearnerProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_CACHE_KEY);
    const p = raw ? JSON.parse(raw) : null;
    return p && typeof p === 'object' ? (p as LearnerProfile) : null;
  } catch {
    return null;
  }
}

function cacheProfile(p: LearnerProfile | null) {
  try {
    if (p) localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify(p));
    else localStorage.removeItem(PROFILE_CACHE_KEY);
  } catch {
    // Storage blocked: the greeting just waits for the server, as before
  }
}

/** The saved profile, or null if there is none. Undefined means the server couldn't be reached (keep what's shown). */
export async function fetchProfile(user: string): Promise<LearnerProfile | null | undefined> {
  try {
    const res = await fetch(`/api/profile?user=${encodeURIComponent(user)}`, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return undefined;
    const data = await res.json();
    const p = data?.profile;
    const profile =
      p && typeof p === 'object' && (p.name || p.role || p.company || p.industry || p.goal) ? (p as LearnerProfile) : null;
    cacheProfile(profile);
    return profile;
  } catch {
    return undefined;
  }
}

export async function deleteProfile(user: string): Promise<boolean> {
  cacheProfile(null);
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
