# Golden set (chat regression tests)

Fixed test conversations sent straight to the Dify app, the same way the live app sends them,
with replies checked by plain code. No model reads the cases or grades the replies.

- `golden.json`: the cases (translated from the z_Chat_Regression_Test spec, kept outside the repo).
- `checks.mjs`: the AUTO checks and the global checks G1–G4.
- `run.mjs`: the runner. Each case is a new chat; the saved profile is carried between turns with the
  app's own profile code; a failed case is rerun once (passes on rerun = FLAKY).

## Run it
- GitHub: Actions → Golden set → Run workflow (choose production or staging, optionally some case IDs).
- It also runs when `evals/` changes on `dev`.
- Locally: `DIFY_API_KEY=… npm run eval` (optional `EVAL_CASES="C1 D2"`).

## Settings (GitHub → Settings → Secrets and variables → Actions)
- Secret `DIFY_API_KEY`: production app key. Optional secret `DIFY_API_KEY_STAGING`.
- Optional variables: `DIFY_API_URL` (if not api.dify.ai), `LESSON_VIDEO_IDS` (comma-separated Bilibili
  BV IDs of the real lessons; without it, video links are listed for review instead of checked).

## Results
The run's Summary page, and the `eval-results` branch (`latest.md`, history in `runs/`).
Test chats show in Dify Logs as user `eval-runner`.
