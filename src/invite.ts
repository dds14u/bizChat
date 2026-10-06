// Reads the invite code from the link (?code=XXXX), remembers it on this device,
// then removes it from the address bar so it isn't shared by accident.
const KEY = 'td-invite-code';

export function getInviteCode(): string {
  try {
    const url = new URL(window.location.href);
    const fromLink = url.searchParams.get('code');
    if (fromLink) {
      localStorage.setItem(KEY, fromLink.trim());
      url.searchParams.delete('code');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
      return fromLink.trim();
    }
    return localStorage.getItem(KEY) || '';
  } catch {
    return '';
  }
}
