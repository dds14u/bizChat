// Golden-set runner: sends each case's fixed messages to the Dify app, the same way the live app does,
// and checks the replies with plain code (checks.mjs). No model reads the spec or grades the replies.
//
//   DIFY_API_KEY=… node evals/run.mjs            all cases
//   EVAL_CASES="C1 D2" node evals/run.mjs        only some cases
//   EVAL_CASES="S" node evals/run.mjs            a whole group (S1, S2, …)
//   EVAL_OPTIONAL=1 node evals/run.mjs           all cases, including optional ones (O1–O3)
// Optional: DIFY_API_URL (default https://api.dify.ai/v1), LESSON_VIDEO_IDS (comma-separated Bilibili BV IDs),
// EVAL_APP (label for the report), EVAL_CONCURRENCY (default 1: the Dify plan limits knowledge-base requests per minute),
// EVAL_HISTORY (folder of earlier runs' results.json files, for the non-blocking baselines).
// Writes report.md and results.json to evals/out/ (or EVAL_OUT). Exit code 1 when any case FAILS.
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { mergeProfile, profileSummary, readProfileTags, sanitizeProfile } from "../netlify/lib/profile.mjs";
import { globalChecks, runCheck, visibleText } from "./checks.mjs";

const env = process.env;
const apiKey = env.DIFY_API_KEY;
const baseUrl = (env.DIFY_API_URL || "https://api.dify.ai/v1").replace(/\/$/, "");
const lessonIds = new Set((env.LESSON_VIDEO_IDS || "").split(/[\s,]+/).filter(Boolean));
const concurrency = Math.max(1, Number(env.EVAL_CONCURRENCY) || 1);
const only = new Set((env.EVAL_CASES || "").split(/[\s,]+/).filter(Boolean).map((s) => s.toUpperCase()));
const TURN_TIMEOUT_MS = 120000;
const USER = "eval-runner";

if (!apiKey) {
  console.error("DIFY_API_KEY is not set.");
  process.exit(2);
}

const golden = JSON.parse(await readFile(new URL("./golden.json", import.meta.url), "utf8"));
// EVAL_CASES takes case IDs ("S3") or group letters ("S" = S1, S2, …).
// Optional cases (optional: true) are skipped unless named in EVAL_CASES or EVAL_OPTIONAL=1
const includeOptional = env.EVAL_OPTIONAL === "1" || env.EVAL_HELD_OUT === "1";
const picked = (id) => {
  const ID = id.toUpperCase();
  return only.has(ID) || [...only].some((t) => /^[A-Z]+$/.test(t) && new RegExp(`^${t}\\d+$`).test(ID));
};
const cases = golden.cases.filter((c) => (only.size ? picked(c.id) : !c.optional || includeOptional));
if (!cases.length) {
  console.error(`No cases match EVAL_CASES="${env.EVAL_CASES}".`);
  process.exit(2);
}

/** One chat turn, streamed like the live app. Returns { answer, conversationId, ms }. */
async function ask({ query, inputs, conversationId }) {
  const started = Date.now();
  const send = (withInputs) =>
    fetch(`${baseUrl}/chat-messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: withInputs, query, response_mode: "streaming", conversation_id: conversationId, user: USER }),
      signal: AbortSignal.timeout(TURN_TIMEOUT_MS),
    });
  let res = await send(inputs);
  // Same fallback as the live app: if the Chatflow rejects the profile, chat without it
  if (res.status === 400 && inputs.scene) {
    const { scene: _dropped, ...rest } = inputs;
    inputs = rest;
    res = await send(inputs);
  }
  if (res.status === 400 && Object.keys(inputs).length) res = await send({});
  if (!res.ok || !res.body) throw new Error(`Dify ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`);

  const decoder = new TextDecoder();
  let buffer = "";
  let answer = "";
  let convo = conversationId;
  let error = null;
  const readLine = (line) => {
    if (!line.startsWith("data:")) return;
    let data;
    try {
      data = JSON.parse(line.slice(5).trim());
    } catch {
      return;
    }
    if (data.conversation_id) convo = data.conversation_id;
    if (data.event === "message" || data.event === "agent_message") answer += data.answer || "";
    else if (data.event === "message_replace") answer = data.answer || "";
    else if (data.event === "error") error = data.message || data.code || "stream error";
    // A failed workflow (e.g. the model provider's rate limit) can end the stream with no text and no "error" event
    else if (data.event === "workflow_finished" && data.data?.status && data.data.status !== "succeeded")
      error = `workflow ${data.data.status}: ${data.data.error || "no detail"}`;
    else if (data.event === "node_finished" && data.data?.status === "failed" && !error)
      error = `${data.data.title || data.data.node_type || "node"} failed: ${data.data.error || "no detail"}`;
  };
  for await (const chunk of res.body) {
    buffer += decoder.decode(chunk, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) readLine(line.trim());
  }
  if (buffer.trim()) readLine(buffer.trim());
  if (error) throw new Error(`Dify: ${String(error).slice(0, 300)}`);
  if (!answer.trim()) throw new Error("Dify: empty reply (no text and no error in the stream)");
  return { answer, conversationId: convo, ms: Date.now() - started };
}

/** A Dify/provider hiccup isn't a test result: retry the same turn a couple of times with a pause. */
async function askWithRetry(args) {
  let last;
  for (let i = 0; i < 3; i++) {
    try {
      return await ask(args);
    } catch (e) {
      last = e;
      await new Promise((r) => setTimeout(r, (Number(process.env.EVAL_RETRY_MS) || 8000) * (i + 1)));
    }
  }
  throw last;
}

// Built-in scenes as the page sends them (mirrors src/scenes.ts): a scene card sends its kickoff
// with a one-time "scene" input, and a number typed right after the tutor's menu counts as a card tap.
const MENU_SCENES = {
  1: { title: "Start a meeting", difficulty: "Easy" },
  2: { title: "Disagree with a coworker", difficulty: "Medium" },
  3: { title: "Reject a late request", difficulty: "Medium" },
};
function asPageSends(message, mode, lastReply) {
  const n = mode === "[RP]" && /Reply with a number:/i.test(lastReply) ? message.trim().match(/^([1-3])[.)。]?$/)?.[1] : null;
  if (n) {
    const { title, difficulty } = MENU_SCENES[n];
    return { query: `Start the role-play scene "${title}". Difficulty: ${difficulty}.`, scene: title };
  }
  const card = message.match(/^Start the role-play scene "([^"]+)"/);
  return { query: message, scene: card ? card[1] : "" };
}

/** One attempt at a case: all turns in one conversation, profile carried like the live app. */
async function attempt(c) {
  let profile = sanitizeProfile(c.startProfile || {});
  let conversationId = "";
  const turns = [];
  let lastReply = "";
  for (const [i, t] of c.turns.entries()) {
    const summary = profileSummary(profile);
    const sent = asPageSends(t.message, t.mode, lastReply);
    const inputs = { ...(summary ? { learner_profile: summary } : {}), ...(sent.scene ? { scene: sent.scene } : {}) };
    const turn = { n: i + 1, mode: t.mode, message: t.message, profileSent: summary || "(empty)", checks: [], review: [...(t.review || [])] };
    try {
      const r = await askWithRetry({ query: `${t.mode} ${sent.query}`, inputs, conversationId });
      conversationId = r.conversationId;
      turn.reply = r.answer;
      lastReply = r.answer;
      if (sent.scene) turn.sceneSent = sent.scene;
      turn.ms = r.ms;
      for (const check of t.auto || []) turn.checks.push(runCheck(check, r.answer));
      const g = globalChecks(r.answer, t.message, lessonIds);
      turn.checks.push(...g.results);
      turn.review.push(...g.review);
      const update = readProfileTags(r.answer);
      if (update) profile = mergeProfile(profile, update);
    } catch (e) {
      turn.reply = "";
      turn.checks.push({ ok: false, label: "reply received", detail: e.message });
      turns.push(turn);
      return { failed: true, errored: true, turns }; // later turns depend on this one
    }
    turns.push(turn);
  }
  const failed = turns.some((t) => t.checks.some((ch) => !ch.ok));
  return { failed, errored: false, turns };
}

// ERROR = Dify or the model provider didn't return a reply (not a prompt result); it still blocks a green run
async function runCase(c) {
  const first = await attempt(c);
  const severity = c.severity || "blocking";
  if (!first.failed) return { id: c.id, title: c.title, severity, status: "PASS", attempts: [first] };
  const second = await attempt(c);
  const status = !second.failed ? "FLAKY" : second.errored ? "ERROR" : "FAIL";
  return { id: c.id, title: c.title, severity, status, attempts: [first, second] };
}

// Run cases a few at a time (turns within a case stay in order)
const results = Array.from({ length: cases.length });
let next = 0;
await Promise.all(
  Array.from({ length: Math.min(concurrency, cases.length) }, async () => {
    while (next < cases.length) {
      const i = next++;
      results[i] = await runCase(cases[i]);
      console.log(`${results[i].id} ${results[i].status}`);
    }
  })
);

// ---------- Non-blocking cases: this run vs. earlier runs of the same app ----------
// Baseline = how often the case passed on the first try in the last 10 earlier runs (results.json files).
const app = env.EVAL_APP || "production";
const history = [];
if (env.EVAL_HISTORY) {
  for (const name of await readdir(env.EVAL_HISTORY).catch(() => [])) {
    if (!name.endsWith(".json")) continue;
    try {
      const h = JSON.parse(await readFile(resolve(env.EVAL_HISTORY, name), "utf8"));
      if (h.app === app && Array.isArray(h.results)) history.push(h);
    } catch {
      // not a single-run results file
    }
  }
}
history.sort((a, b) => String(a.at).localeCompare(String(b.at)));
const nonBlocking = results
  .filter((r) => r.severity === "non-blocking")
  .map((r) => {
    const firstTry = r.status === "PASS";
    const past = history.map((h) => h.results.find((x) => x.id === r.id)).filter(Boolean).slice(-10).map((x) => x.status === "PASS");
    const baseline = past.length ? { rate: past.filter(Boolean).length / past.length, runs: past.length } : null;
    const last10 = [...past, firstTry].slice(-10);
    return {
      id: r.id,
      status: r.status,
      firstTry,
      baseline,
      worse: Boolean(!firstTry && baseline && baseline.runs >= 3 && baseline.rate >= 0.75),
      readyToPromote: last10.length === 10 && last10.filter(Boolean).length >= 9,
    };
  });

// ---------- Report ----------
const count = (s) => results.filter((r) => r.status === s).length;
// Only BLOCKING cases turn a run red
const green = !results.some((r) => r.severity === "blocking" && (r.status === "FAIL" || r.status === "ERROR"));
const LABEL = { blocking: "BLOCKING", "non-blocking": "NON-BLOCKING", "human-review": "HUMAN-REVIEW" };
const quote = (text, max = 1500) => {
  const t = String(text || "").trim();
  const cut = t.length > max ? `${t.slice(0, max)}…` : t;
  return cut.split("\n").map((l) => `> ${l}`).join("\n") || "> (empty)";
};
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const lines = [];
lines.push(`# Golden set: ${green ? "GREEN" : "RED"}`);
lines.push("");
lines.push(`App: ${app} · Spec: ${golden.spec} · ${new Date().toISOString().replace("T", " ").slice(0, 16)} UTC`);
lines.push("");
lines.push(`**PASS ${count("PASS")} · FAIL ${count("FAIL")} · FLAKY ${count("FLAKY")} · ERROR ${count("ERROR")}**`);
lines.push("");
lines.push("| Case | Label | Result | Failed checks (last attempt) |");
lines.push("|---|---|---|---|");
for (const r of results) {
  const last = r.attempts.at(-1);
  const fails = last.turns.flatMap((t) => t.checks.filter((c) => !c.ok).map((c) => `T${t.n}: ${c.label}${c.detail ? ` (${c.detail})` : ""}`));
  const shown = r.status === "FLAKY" ? `passed on rerun; first try: ${r.attempts[0].turns.flatMap((t) => t.checks.filter((c) => !c.ok).map((c) => `T${t.n}: ${c.label}`)).join("; ")}` : fails.join("; ");
  lines.push(`| ${r.id} ${r.title} | ${LABEL[r.severity] || r.severity} | ${r.status} | ${shown.replace(/\|/g, "\\|") || "–"} |`);
}
if (nonBlocking.length) {
  const pct = (x) => `${Math.round(x * 100)}%`;
  lines.push("");
  lines.push("## Non-blocking cases");
  lines.push("Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.");
  lines.push("");
  lines.push("| Case | This run | Baseline | Note |");
  lines.push("|---|---|---|---|");
  for (const n of nonBlocking) {
    const note = n.worse ? "worse" : n.readyToPromote ? "ready to promote" : "";
    lines.push(`| ${n.id} | ${n.status} | ${n.baseline ? `${pct(n.baseline.rate)} (${n.baseline.runs} runs)` : "–"} | ${note} |`);
  }
}

// Every case, passed or not, with each turn's message, check results, review items and the full reply.
// Hidden lines (<profile …/>, <character …/>) are shown as text so they can be inspected too.
const isGlobal = (c) => /^G\d /.test(c.label);
lines.push("");
lines.push("## Every reply (passed and failed)");
lines.push("Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.");
for (const r of results) {
  lines.push("");
  lines.push(`### ${r.id} ${r.title} · ${LABEL[r.severity] || r.severity} · ${r.status}`);
  for (const [ai, a] of r.attempts.entries()) {
    if (r.attempts.length > 1) {
      lines.push("");
      lines.push(`**Attempt ${ai + 1}${ai === 0 && r.attempts.length > 1 ? " (failed, so it was rerun)" : ""}**`);
    }
    for (const t of a.turns) {
      lines.push("");
      lines.push(`**T${t.n} ${t.mode}** "${esc(t.message)}"`);
      if (t.profileSent && t.profileSent !== "(empty)") lines.push(`Profile sent: ${esc(t.profileSent)}`);
      if (t.sceneSent) lines.push(`Scene sent: ${esc(t.sceneSent)}`);
      const own = t.checks.filter((c) => !isGlobal(c));
      const globals = t.checks.filter(isGlobal);
      for (const c of own) lines.push(`- ${c.ok ? "✓" : "✗"} ${esc(c.label)}${c.detail ? `: ${esc(c.detail)}` : ""}`);
      const badGlobals = globals.filter((c) => !c.ok);
      if (globals.length) lines.push(badGlobals.length ? badGlobals.map((c) => `- ✗ ${esc(c.label)}${c.detail ? `: ${esc(c.detail)}` : ""}`).join("\n") : "- ✓ global checks G1–G4");
      for (const item of t.review) lines.push(`- [ ] ${esc(item)}`);
      lines.push("");
      lines.push(quote(esc(t.reply)));
    }
  }
}

const outDir = env.EVAL_OUT ? pathToFileURL(`${resolve(env.EVAL_OUT)}/`) : new URL("./out/", import.meta.url);
await mkdir(outDir, { recursive: true });
await writeFile(new URL("report.md", outDir), lines.join("\n") + "\n");
await writeFile(
  new URL("results.json", outDir),
  JSON.stringify({ spec: golden.spec, app, at: new Date().toISOString(), green, nonBlocking, results }, null, 2)
);
console.log(`\nPASS ${count("PASS")} · FAIL ${count("FAIL")} · FLAKY ${count("FLAKY")} · ERROR ${count("ERROR")}`);
process.exit(green ? 0 : 1);
