// Golden-set checks: each one is plain code, so the same reply always gets the same result.
// Spec: z_Chat_Regression_Test (kept outside the repo). Cases live in golden.json.
import { readProfileTags, sanitizeProfile } from "../netlify/lib/profile.mjs";

// Same rule as the page: any self-closing tag with attributes is hidden, plus <profile>/<character> in any form
const ATTR = String.raw`\s+[A-Za-z_][\w:.-]*\s*=\s*(?:"[^"]*"|'[^']*')`;
const HIDDEN_TAG = new RegExp(
  String.raw`<[A-Za-z][\w:.-]*(?:${ATTR})+\s*\/>` + String.raw`|<(?:character|profile)\b(?:"[^"]*"|'[^']*'|[^>"'])*>`,
  "gi"
);

/** Reply as the learner sees it: hidden lines removed, **bold** markers removed, trimmed. */
export const visibleText = (raw) => String(raw).replace(HIDDEN_TAG, "").replace(/\*\*/g, "").trim();

const lower = (s) => String(s ?? "").toLowerCase();
const LINK = /https?:\/\/(?:[\w-]+\.)*(?:bilibili\.com|b23\.tv)\/[^\s)<>\]"']*/gi;
const ANY_URL = /https?:\/\/[^\s)<>\]"']+/gi;
const CJK = /[㐀-鿿豈-﫿]/g;
const HAS_CJK = /[㐀-鿿豈-﫿]/;
const SANDWICH_GROUPS = [
  ["partially agree", "partial agreement", "partly agree"],
  ["keep the discussion open", "keep it open"],
  ["move forward together"],
];

const words = (s) => (s.match(/[A-Za-z0-9㐀-鿿]+(?:['’][A-Za-z]+)?/g) || []).length;
const profileOf = (raw) => {
  const tags = readProfileTags(raw);
  return tags ? sanitizeProfile(tags) : null;
};
const feedbackScore = (text) => {
  const m = text.match(/course score:?\s*\**\s*(\d(?:\.\d)?)\s*\/\s*5/i);
  return m ? Number(m[1]) : null;
};
const characterLines = (raw) => String(raw).match(/<character\b(?:"[^"]*"|'[^']*'|[^>"'])*>/gi) || [];

/** One AUTO check → { ok, label, detail }. */
export function runCheck(check, raw) {
  const vis = visibleText(raw);
  const v = lower(vis);
  const p = profileOf(raw);
  const show = (s) => JSON.stringify(s);

  if ("startsWith" in check)
    return { ok: v.startsWith(lower(check.startsWith)), label: `starts with ${show(check.startsWith)}` };
  if ("contains" in check) return { ok: v.includes(lower(check.contains)), label: `contains ${show(check.contains)}` };
  if ("containsAny" in check && !("profileField" in check) && !("profileAnyField" in check))
    return { ok: check.containsAny.some((s) => v.includes(lower(s))), label: `contains any of ${show(check.containsAny)}` };
  if ("notContainsAny" in check) {
    const hit = check.notContainsAny.find((s) => v.includes(lower(s)));
    return { ok: !hit, label: `doesn't contain any of ${show(check.notContainsAny)}`, detail: hit && `found ${show(hit)}` };
  }
  if ("link" in check) {
    const links = vis.match(LINK) || [];
    if (check.link === "lesson") return { ok: links.length > 0, label: "link: lesson link" };
    const urls = vis.match(ANY_URL) || [];
    return { ok: urls.length === 0, label: "link: no link", detail: urls[0] && `found ${urls[0]}` };
  }
  if ("profile" in check) return { ok: !p, label: "profile: no profile line", detail: p && `saved ${show(p)}` };
  if ("profileField" in check) {
    const value = p?.[check.profileField];
    const label = `profile: ${check.profileField} ${"equals" in check ? `= ${show(check.equals)}` : `contains any of ${show(check.containsAny)}`}`;
    const ok =
      value != null &&
      ("equals" in check ? lower(value).trim() === lower(check.equals) : check.containsAny.some((s) => lower(value).includes(lower(s))));
    return { ok, label, detail: p ? `saved ${show(p)}` : "no profile line" };
  }
  if ("profileAnyField" in check) {
    const ok = check.profileAnyField.some((f) => p?.[f] && check.containsAny.some((s) => lower(p[f]).includes(lower(s))));
    return {
      ok,
      label: `profile: ${check.profileAnyField.join(" or ")} contains any of ${show(check.containsAny)}`,
      detail: p ? `saved ${show(p)}` : "no profile line",
    };
  }
  if ("profileFieldsPresent" in check) {
    const missing = check.profileFieldsPresent.filter((f) => !p?.[f]);
    return {
      ok: missing.length === 0,
      label: `profile: fields present ${show(check.profileFieldsPresent)}`,
      detail: missing.length ? `missing ${missing.join(", ")}` : undefined,
    };
  }
  if ("characterLine" in check) {
    const has = characterLines(raw).length > 0;
    return { ok: has === check.characterLine, label: `character line: ${check.characterLine ? "present" : "absent"}` };
  }
  if ("bracketLine" in check) return { ok: /\[[^\]\n]{3,}\](?!\()/.test(vis), label: "bracket line: present" };
  if ("feedbackMin" in check) {
    const score = feedbackScore(vis);
    return { ok: score != null && score >= check.feedbackMin, label: `feedback score ≥ ${check.feedbackMin}`, detail: score == null ? "no score" : `score ${score}` };
  }
  if ("noFeedback" in check) {
    const score = feedbackScore(vis);
    return { ok: score == null && !/course score/i.test(vis), label: "no feedback" };
  }
  if ("maxWords" in check) {
    const n = words(vis);
    return { ok: n <= check.maxWords, label: `words ≤ ${check.maxWords}`, detail: `${n} words` };
  }
  if ("minListItems" in check) {
    const n = (vis.match(/^\s*(?:[•\-*]|\d+[.)])\s+\S/gm) || []).length;
    return { ok: n >= check.minListItems, label: `list items ≥ ${check.minListItems}`, detail: `${n} items` };
  }
  if ("exampleSentence" in check) {
    const quotes = [...vis.matchAll(/["“]([^"”\n]+)["”]/g)].map((m) => m[1]);
    return { ok: quotes.some((q) => words(q) >= 4), label: "example sentence: present" };
  }
  if ("sandwichStepsBelow" in check) {
    const found = SANDWICH_GROUPS.filter((g) => g.some((s) => v.includes(s)));
    return {
      ok: found.length < check.sandwichStepsBelow,
      label: `sandwich steps < ${check.sandwichStepsBelow}`,
      detail: found.length ? `found ${found.map((g) => g.find((s) => v.includes(s))).join(", ")}` : undefined,
    };
  }
  return { ok: false, label: `unknown check ${show(check)}` };
}

/**
 * Global checks G1–G4, on every reply. lessonIds: allowed Bilibili video IDs (empty = can't verify,
 * so links are listed for review instead of failing).
 */
export function globalChecks(raw, learnerMessage, lessonIds) {
  const vis = visibleText(raw);
  const results = [];
  const review = [];

  // G1 real lesson links only
  const links = vis.match(LINK) || [];
  if (lessonIds.size) {
    const bad = links.filter((l) => {
      const id = l.match(/BV[0-9A-Za-z]{10}/)?.[0];
      if (/b23\.tv/i.test(l)) return false; // short links can't be resolved offline: listed for review below
      return !id || !lessonIds.has(id);
    });
    results.push({ ok: bad.length === 0, label: "G1 lesson links are real", detail: bad.length ? `unknown ${bad.join(", ")}` : undefined });
    const short = links.filter((l) => /b23\.tv/i.test(l));
    if (short.length) review.push(`G1: short link(s) to check by hand: ${short.join(", ")}`);
  } else if (links.length) {
    review.push(`G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: ${links.join(", ")}`);
  }

  // G2 no Taiwan
  results.push({ ok: !/taiwan|台湾|台灣/i.test(raw), label: "G2 no mention of Taiwan" });

  // G3 English reply to an English message
  if (!HAS_CJK.test(learnerMessage)) {
    const n = (vis.match(CJK) || []).length;
    results.push({ ok: n <= 5, label: "G3 English reply", detail: n ? `${n} Chinese characters` : undefined });
  }

  // G4 hidden lines well formed
  const problems = [];
  for (const tag of String(raw).match(/<profile\b(?:"[^"]*"|'[^']*'|[^>"'])*>?/gi) || []) {
    if (!tag.endsWith("/>")) problems.push(`profile line not closed with "/>"`);
    const keys = [...tag.matchAll(/([A-Za-z_]+)\s*=/g)].map((m) => m[1]);
    if (!keys.length) problems.push("profile line has no fields");
    const unprefixed = keys.filter((k) => !k.startsWith("learner_"));
    if (unprefixed.length) problems.push(`profile fields without learner_: ${unprefixed.join(", ")}`);
  }
  for (const tag of characterLines(raw)) {
    if (!tag.endsWith("/>")) problems.push(`character line not closed with "/>"`);
    if (!/\bname\s*=\s*["'][^"']+["']/.test(tag)) problems.push("character line has no name");
    if (!/\bgender\s*=\s*["'](?:female|male)["']/i.test(tag)) problems.push("character line gender isn't female/male");
  }
  results.push({ ok: problems.length === 0, label: "G4 hidden lines well formed", detail: problems.join("; ") || undefined });

  return { results, review };
}

export { profileOf };
