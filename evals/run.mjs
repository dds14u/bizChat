// Golden-set runner: sends each case's fixed messages to the Dify app, the same way the live app does,
// and checks the replies with plain code (checks.mjs). No model reads the spec or grades the replies.
//
//   DIFY_API_KEY=… node evals/run.mjs            all cases
//   EVAL_CASES="C1 D2" node evals/run.mjs        only some cases
// Optional: DIFY_API_URL (default https://api.dify.ai/v1), LESSON_VIDEO_IDS (comma-separated Bilibili BV IDs),
// EVAL_APP (label for the report), EVAL_CONCURRENCY (default 2).
// Writes evals/out/report.md and evals/out/results.json. Exit code 1 when any case FAILS.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { mergeProfile, profileSummary, readProfileTags, sanitizeProfile } from "../netlify/lib/profile.mjs";
import { globalChecks, runCheck, visibleText } from "./checks.mjs";

const env = process.env;
const apiKey = env.DIFY_API_KEY;
const baseUrl = (env.DIFY_API_URL || "https://api.dify.ai/v1").replace(/\/$/, "");
const lessonIds = new Set((env.LESSON_VIDEO_IDS || "").split(/[\s,]+/).filter(Boolean));
const concurrency = Math.max(1, Number(env.EVAL_CONCURRENCY) || 2);
const only = new Set((env.EVAL_CASES || "").split(/[\s,]+/).filter(Boolean).map((s) => s.toUpperCase()));
const TURN_TIMEOUT_MS = 120000;
const USER = "eval-runner";

if (!apiKey) {
  console.error("DIFY_API_KEY is not set.");
  process.exit(2);
}

const golden = JSON.parse(await readFile(new URL("./golden.json", import.meta.url), "utf8"));
const cases = golden.cases.filter((c) => !only.size || only.has(c.id.toUpperCase()));

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

/** One attempt at a case: all turns in one conversation, profile carried like the live app. */
async function attempt(c) {
  let profile = sanitizeProfile(c.startProfile || {});
  let conversationId = "";
  const turns = [];
  for (const [i, t] of c.turns.entries()) {
    const summary = profileSummary(profile);
    const inputs = summary ? { learner_profile: summary } : {};
    const turn = { n: i + 1, mode: t.mode, message: t.message, profileSent: summary || "(empty)", checks: [], review: [...(t.review || [])] };
    try {
      const r = await askWithRetry({ query: `${t.mode} ${t.message}`, inputs, conversationId });
      conversationId = r.conversationId;
      turn.reply = r.answer;
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
  if (!first.failed) return { id: c.id, title: c.title, status: "PASS", attempts: [first] };
  const second = await attempt(c);
  const status = !second.failed ? "FLAKY" : second.errored ? "ERROR" : "FAIL";
  return { id: c.id, title: c.title, status, attempts: [first, second] };
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

// ---------- Report ----------
const count = (s) => results.filter((r) => r.status === s).length;
const green = count("FAIL") === 0 && count("ERROR") === 0;
const quote = (text, max = 1500) => {
  const t = String(text || "").trim();
  const cut = t.length > max ? `${t.slice(0, max)}…` : t;
  return cut.split("\n").map((l) => `> ${l}`).join("\n") || "> (empty)";
};
const lines = [];
lines.push(`# Golden set: ${green ? "GREEN" : "RED"}`);
lines.push("");
lines.push(`App: ${env.EVAL_APP || "production"} · Spec: ${golden.spec} · ${new Date().toISOString().replace("T", " ").slice(0, 16)} UTC`);
lines.push("");
lines.push(`**PASS ${count("PASS")} · FAIL ${count("FAIL")} · FLAKY ${count("FLAKY")} · ERROR ${count("ERROR")}**`);
lines.push("");
lines.push("| Case | Result | Failed checks (last attempt) |");
lines.push("|---|---|---|");
for (const r of results) {
  const last = r.attempts.at(-1);
  const fails = last.turns.flatMap((t) => t.checks.filter((c) => !c.ok).map((c) => `T${t.n}: ${c.label}${c.detail ? ` (${c.detail})` : ""}`));
  const shown = r.status === "FLAKY" ? `passed on rerun; first try: ${r.attempts[0].turns.flatMap((t) => t.checks.filter((c) => !c.ok).map((c) => `T${t.n}: ${c.label}`)).join("; ")}` : fails.join("; ");
  lines.push(`| ${r.id} ${r.title} | ${r.status} | ${shown.replace(/\|/g, "\\|") || "–"} |`);
}

const failing = results.filter((r) => r.status !== "PASS");
if (failing.length) {
  lines.push("");
  lines.push("## Failed replies");
  for (const r of failing) {
    for (const [ai, a] of r.attempts.entries()) {
      for (const t of a.turns.filter((t) => t.checks.some((c) => !c.ok))) {
        lines.push("");
        lines.push(`### ${r.id} T${t.n} (attempt ${ai + 1}) ${t.mode} "${t.message.slice(0, 80)}${t.message.length > 80 ? "…" : ""}"`);
        lines.push(`Profile sent: ${t.profileSent}`);
        for (const c of t.checks.filter((c) => !c.ok)) lines.push(`- ✗ ${c.label}${c.detail ? `: ${c.detail}` : ""}`);
        lines.push("");
        lines.push(quote(t.reply));
      }
    }
  }
}

lines.push("");
lines.push("## For review (advisory)");
for (const r of results) {
  const a = r.attempts.at(-1);
  for (const t of a.turns.filter((t) => t.review.length)) {
    lines.push("");
    lines.push(`### ${r.id} T${t.n} ${t.mode} "${t.message.slice(0, 80)}${t.message.length > 80 ? "…" : ""}"`);
    for (const item of t.review) lines.push(`- [ ] ${item}`);
    lines.push("");
    lines.push(quote(visibleText(t.reply)));
  }
}

await mkdir(new URL("./out/", import.meta.url), { recursive: true });
await writeFile(new URL("./out/report.md", import.meta.url), lines.join("\n") + "\n");
await writeFile(
  new URL("./out/results.json", import.meta.url),
  JSON.stringify({ spec: golden.spec, app: env.EVAL_APP || "production", at: new Date().toISOString(), green, results }, null, 2)
);
console.log(`\nPASS ${count("PASS")} · FAIL ${count("FAIL")} · FLAKY ${count("FLAKY")} · ERROR ${count("ERROR")}`);
process.exit(green ? 0 : 1);
