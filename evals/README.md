# Golden set (chat regression tests)

Fixed test conversations sent straight to the Dify app, the same way the live app sends them,
with replies checked by plain code. No model reads the cases or grades the replies.

- `z_Chat_Regression_Test_v2.0.txt`: the spec (cases, checks and how tests run).
- `golden.json`: the cases, translated from the spec.
- `checks.mjs`: the AUTO checks and the global checks G1–G4.
- `run.mjs`: the runner. Each case is a new chat; the saved profile is carried between turns with the
  app's own profile code; a failed case is rerun once (passes on rerun = FLAKY).

## Run it
- GitHub: Actions → Golden set → Run workflow. Choose the app (production, staging or both), runs per app (1–3),
  and optionally some case IDs or group letters. With more than one run, the report starts with a side-by-side
  table of first-try passes per case and app (`compare.mjs`).
- It also runs when `evals/` changes on `dev`.
- Locally: `DIFY_API_KEY=… npm run eval` (optional `EVAL_CASES="C1 D2"`, or a group letter: `EVAL_CASES="S"`).

## Case groups
- **C** core: the basic paths every learner uses (Coach answers, scene card, menu, profile).
- **D** drift: multi-turn cases where behavior tends to slip (mode switches, changing background).
- **S** scene adherence: custom scenes stay custom (no fixed menu, no meeting-opener hints, feedback that
  fits the scene). S1–S8 come from failures in the Dify logs and the scenario review.
- **O** optional: reworded S checks, skipped by default and never tuned against. Run them after a prompt change
  by naming them (`EVAL_CASES="O"`) or with `EVAL_OPTIONAL=1`. If they pass without tuning, the fix generalizes.

## Case labels (one per case: `severity` in golden.json)
- **BLOCKING** (`blocking`): a failed case turns the run red.
- **NON-BLOCKING** (`non-blocking`): reported in its own table with a baseline (how often it passed on the first
  try in the last 10 earlier runs of the same app), marked "worse" or "ready to promote". Never turns the run red.
- **HUMAN-REVIEW** (`human-review`): a case with no automatic checks, only review notes.

Inside a case, `auto` lists the automatic checks and `review` the notes for a person to read.

## Settings (GitHub → Settings → Secrets and variables → Actions)
- Secret `DIFY_API_KEY`: production app key. Optional secret `DIFY_API_KEY_STAGING`.
- Optional variables: `DIFY_API_URL` (if not api.dify.ai), `LESSON_VIDEO_IDS` (comma-separated Bilibili
  BV IDs of the real lessons; without it, video links are listed for review instead of checked).

## Results
The run's Summary page, and the `eval-results` branch (`latest.md`, history in `runs/`). Every case is listed,
passed or failed, with each turn's checks and the full reply (hidden profile/character lines shown as text).
Test chats show in Dify Logs as user `eval-runner`.
