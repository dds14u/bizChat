// Combines several golden-set runs (one folder per app and repeat, each with results.json and report.md)
// into one report: a side-by-side table of how often each case passed on each app.
//
//   node evals/compare.mjs evals/out/runs evals/out
// Reads every <runsDir>/<app>-<n>/results.json, writes <outDir>/report.md and <outDir>/results.json.
// Exit code 1 when any run had a FAIL or ERROR (same rule as a single run).
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const [runsDir, outDir] = process.argv.slice(2);
if (!runsDir || !outDir) {
  console.error("Usage: node evals/compare.mjs <runsDir> <outDir>");
  process.exit(2);
}

const runs = [];
for (const name of (await readdir(runsDir)).sort()) {
  try {
    const data = JSON.parse(await readFile(join(runsDir, name, "results.json"), "utf8"));
    const report = await readFile(join(runsDir, name, "report.md"), "utf8");
    runs.push({ name, app: data.app, data, report });
  } catch {
    // a run that stopped before writing results (e.g. missing key) is reported below as missing
  }
}
if (!runs.length) {
  console.error(`No results found in ${runsDir}.`);
  process.exit(2);
}

const apps = [...new Set(runs.map((r) => r.app))];
const byApp = Object.fromEntries(apps.map((a) => [a, runs.filter((r) => r.app === a)]));
const caseList = [];
for (const r of runs) for (const c of r.data.results) if (!caseList.some((x) => x.id === c.id)) caseList.push({ id: c.id, title: c.title });

// First try = passed without the automatic rerun. Final = PASS or FLAKY (what a single run counts as green).
const stats = (app, id) => {
  const rs = byApp[app].map((r) => r.data.results.find((c) => c.id === id)).filter(Boolean);
  return {
    n: rs.length,
    first: rs.filter((c) => c.status === "PASS").length,
    final: rs.filter((c) => c.status === "PASS" || c.status === "FLAKY").length,
    error: rs.filter((c) => c.status === "ERROR").length,
  };
};
const cell = (s) => {
  if (!s.n) return "–";
  const extra = [];
  if (s.final > s.first) extra.push(`${s.final - s.first} flaky`);
  if (s.error) extra.push(`${s.error} error`);
  return `${s.first}/${s.n}${extra.length ? ` (${extra.join(", ")})` : ""}`;
};

const green = runs.every((r) => r.data.green);
const spec = runs[0].data.spec;
const repeats = Math.max(...apps.map((a) => byApp[a].length));
const lines = [];
lines.push(`# Golden set comparison: ${green ? "GREEN" : "RED"}`);
lines.push("");
lines.push(`Spec: ${spec} · ${apps.join(" vs ")} · ${repeats} run${repeats > 1 ? "s" : ""} each · ${new Date().toISOString().replace("T", " ").slice(0, 16)} UTC`);
lines.push("");
lines.push("Each cell = passed on the first try / runs. \"Flaky\" = failed, then passed on the automatic rerun.");
lines.push("When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.");
lines.push("");
lines.push(`| Case | ${apps.join(" | ")} |`);
lines.push(`|---|${apps.map(() => "---").join("|")}|`);
for (const c of caseList) lines.push(`| ${c.id} ${c.title.replace(/\|/g, "\\|")} | ${apps.map((a) => cell(stats(a, c.id))).join(" | ")} |`);
const total = (a) => caseList.reduce((t, c) => { const s = stats(a, c.id); return { first: t.first + s.first, n: t.n + s.n }; }, { first: 0, n: 0 });
lines.push(`| **Total (first try)** | ${apps.map((a) => { const t = total(a); return `**${t.first}/${t.n}**`; }).join(" | ")} |`);
lines.push("");
lines.push("## Runs");
for (const r of runs) {
  const count = (s) => r.data.results.filter((c) => c.status === s).length;
  lines.push(`- ${r.name}: ${r.data.green ? "GREEN" : "RED"} · PASS ${count("PASS")} · FAIL ${count("FAIL")} · FLAKY ${count("FLAKY")} · ERROR ${count("ERROR")}`);
}
lines.push("");
lines.push("Full reports for each run, including failed replies and review items, follow below.");
for (const r of runs) {
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(`<details><summary><b>${r.name}</b></summary>`);
  lines.push("");
  lines.push(r.report.replace(/^# /m, "### "));
  lines.push("</details>");
}

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "report.md"), lines.join("\n") + "\n");
await writeFile(
  join(outDir, "results.json"),
  JSON.stringify({ spec, apps, repeats, at: new Date().toISOString(), green, runs: runs.map((r) => ({ name: r.name, ...r.data })) }, null, 2)
);
console.log(lines.slice(0, 8 + caseList.length + 3).join("\n"));
process.exit(green ? 0 : 1);
