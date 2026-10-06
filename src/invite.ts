// Invite code and anonymous browser ID.
// Both keep working when the browser blocks storage (some private modes,
// in-app browsers, or strict privacy settings).

const CODE_KEY = 'td-invite-code';
const USER_KEY = 'td-user-id';

// Reads the invite code from the link (?code=XXXX) and remembers it on this device.
// The code from the link is returned even if saving it fails. The code is only
// removed from the address bar once it is safely saved, so a reload still works.
export function getInviteCode(): string {
  let fromLink = '';
  try {
    fromLink = (new URL(window.location.href).searchParams.get('code') || '').trim();
  } catch {}

  if (fromLink) {
    let saved = false;
    try {
      localStorage.setItem(CODE_KEY, fromLink);
      saved = localStorage.getItem(CODE_KEY) === fromLink;
    } catch {}
    if (saved) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete('code');
        window.history.replaceState(null, '', url.pathname + url.search + url.hash);
      } catch {}
    }
    return fromLink;
  }

  try {
    return localStorage.getItem(CODE_KEY) || '';
  } catch {
    return '';
  }
}

const newId = () =>
  'web-' +
  (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36));

let memoryId: string | null = null;

// A stable anonymous ID: per device when possible, otherwise per tab session,
// otherwise per page load. Never a shared value like "web-anon".
export function getBrowserId(): string {
  try {
    let id = localStorage.getItem(USER_KEY);
    if (!id) {
      id = newId();
      localStorage.setItem(USER_KEY, id);
    }
    return id;
  } catch {}
  try {
    let id = sessionStorage.getItem(USER_KEY);
    if (!id) {
      id = newId();
      sessionStorage.setItem(USER_KEY, id);
    }
    return id;
  } catch {}
  if (!memoryId) memoryId = newId();
  return memoryId;
}
