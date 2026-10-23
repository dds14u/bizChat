// Saved learner profile: first name, company, industry and learning goal.
//
// The tutor writes a hidden line when it learns something new, e.g.
//   <profile name="Lee" company="NIO" industry="Electric vehicles" industry_source="inferred" goal="lead weekly meetings with German suppliers"/>
// The chat function reads it from the reply stream and merges it into Redis under the
// learner's anonymous browser ID. New values replace old ones field by field; an empty
// value never erases a saved one. Only these fields are ever stored, each capped.
//
// Shared by functions/chat.mjs (read + save) and functions/profile.mjs (show + clear).
// It lives outside netlify/functions so Netlify doesn't publish it as an endpoint.

const env = process.env;
const days = Number(env.PROFILE_TTL_DAYS);
/** Profiles are deleted this long after their last update (default 30 days). */
export const PROFILE_TTL_SECONDS = Math.round((Number.isFinite(days) && days > 0 ? days : 30) * 86400);

const LIMITS = { name: 40, company: 60, industry: 60, goal: 140 };
const FIELDS = Object.keys(LIMITS);

export const profileKey = (browserId) => `profile:${browserId}`;

/** Only real browser IDs get a profile (never the shared "anon" fallback). */
export const canStoreProfile = (browserId) => Boolean(browserId) && browserId !== "anon" && browserId.length >= 8;

const clean = (value, max) =>
  String(value ?? "")
    .replace(/[<>"`{}[\]\\]/g, "") // nothing that could look like markup or a prompt tag
    // oxlint-disable-next-line no-control-regex -- removing control characters on purpose
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
    .trim();

/** Every <profile …/> tag in a reply, merged in order (later tags win). Null when there is none. */
export function readProfileTags(text) {
  let found = null;
  // Quote-aware, so a ">" inside a value doesn't end the tag early
  for (const tag of String(text).matchAll(/<profile\b((?:"[^"]*"|'[^']*'|[^>"'])*)>/gi)) {
    const attrs = {};
    for (const m of tag[1].matchAll(/([a-z_]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
      attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? "";
    }
    found = { ...found, ...attrs };
  }
  return found;
}

/** Keeps only the four fields (plus where the industry came from), cleaned and capped. */
export function sanitizeProfile(raw) {
  const out = {};
  if (!raw || typeof raw !== "object") return out;
  for (const field of FIELDS) {
    const v = clean(raw[field], LIMITS[field]);
    if (v) out[field] = v;
  }
  if (out.industry) {
    out.industry_source = String(raw.industry_source || "").toLowerCase().startsWith("infer") ? "inferred" : "stated";
  }
  return out;
}

/** New non-empty values replace saved ones; nothing is erased. */
export function mergeProfile(saved, update) {
  const merged = { ...sanitizeProfile(saved) };
  const next = sanitizeProfile(update);
  for (const field of FIELDS) if (next[field]) merged[field] = next[field];
  if (next.industry) merged.industry_source = next.industry_source;
  return merged;
}

export const isEmptyProfile = (p) => !p || FIELDS.every((f) => !p[f]);

/** One line for the system prompt, e.g. "First name: Lee. Company: NIO. …" */
export function profileSummary(p) {
  if (isEmptyProfile(p)) return "";
  const parts = [];
  if (p.name) parts.push(`First name: ${p.name}`);
  if (p.company) parts.push(`Company: ${p.company}`);
  if (p.industry) parts.push(`Industry: ${p.industry}${p.industry_source === "inferred" ? " (guessed from the company)" : ""}`);
  if (p.goal) parts.push(`Learning goal: ${p.goal}`);
  return parts.join(". ") + ".";
}

// ---------- Redis (the caller passes its own command function) ----------

export async function loadProfile(redis, browserId) {
  if (!canStoreProfile(browserId)) return null;
  const raw = await redis(["GET", profileKey(browserId)]);
  if (!raw) return null;
  try {
    const p = sanitizeProfile(JSON.parse(raw));
    return isEmptyProfile(p) ? null : p;
  } catch {
    return null;
  }
}

/** Merges an update into the saved profile and restarts the 30-day clock. Returns the result. */
export async function saveProfile(redis, browserId, update) {
  if (!canStoreProfile(browserId)) return null;
  const saved = await loadProfile(redis, browserId);
  const merged = mergeProfile(saved, update);
  if (isEmptyProfile(merged)) return saved;
  await redis(["SET", profileKey(browserId), JSON.stringify(merged), "EX", String(PROFILE_TTL_SECONDS)]);
  return merged;
}

export async function clearProfile(redis, browserId) {
  if (!canStoreProfile(browserId)) return;
  await redis(["DEL", profileKey(browserId)]);
}
