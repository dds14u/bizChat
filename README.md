# Real Business by Donald

An AI Business English tutor for Chinese professionals, currently in private beta.

Learners chat with a tutor that works in two modes:

- **[QA] Coach:** answers questions about vocabulary, emails, meetings and workplace communication, using course material from a knowledge base.
- **[RP] Role-play:** acts out realistic workplace scenarios (for example a meeting, a negotiation or a client call) and gives structured feedback at the end.

Learners can write in English or Chinese.

**Live site:** [bizchatv1.netlify.app](https://bizchatv1.netlify.app)

---

## Architecture

```
Browser (React + Vite + TypeScript)
   │  POST /api/chat  { query, conversationId, user, code }
   ▼
Netlify Function  (netlify/functions/chat.mjs)
   │  • decides access tier (admin / invite / visitor)
   │  • checks and uses up quotas atomically in Upstash Redis
   │  • rejects messages that are too long
   │  • streams the reply back to the browser
   ▼
Dify Chatflow  (tutoring logic, prompt, knowledge base, conversation memory)
   ▼
Kimi (Moonshot)  kimi-k2.6, thinking mode off
```

**Who does what:**
- **Netlify** owns all access control and quotas.
- **Dify** handles only the tutoring: prompt, knowledge retrieval, model and memory.
- **Upstash Redis** stores quota counters.
- **API keys never reach the browser.**

---

## Features

**Chat experience**
- Streaming replies, with a "Thinking…" indicator.
- Conversation memory within a chat, plus a "Start a new chat" button.
- A character counter that warns near the limit and blocks sending when it's exceeded.
- Clear error messages for timeouts, interrupted replies, quota limits and outages, in English with short Chinese hints.
- The Enter key works correctly with Chinese input methods: it doesn't send while text is still being composed.
- Phone-first layout (`100dvh`, safe-area padding, inputs large enough that iPhones don't zoom in).

**Access tiers**

| Tier | How it's granted | Limits |
|---|---|---|
| Admin | Code in `ADMIN_CODES` | None |
| Invite | Personal link `?code=…`, with the code in `INVITE_CODES` | `RATE_LIMIT_HOURLY` / `RATE_LIMIT_DAILY` per code |
| Visitor | No valid code | Free trial: limits per browser, per IP and site-wide per day |

- Invite codes are **access passes, not accounts.** Limits are tracked per code, and anyone who has a code shares its allowance.
- The page saves the invite code locally and removes it from the address bar once it's saved.
- Visitors see a "free messages left" counter and a friendly card when the trial ends.
- Daily limits reset at midnight in the timezone set by `LIMIT_TZ_OFFSET_HOURS` (default: Beijing time).

**Reliability and safety**
- Quotas are checked and used up in **one atomic Redis script**. Requests that are rejected never use up anyone's allowance.
- If Dify fails after a request was admitted, its quota is **refunded**.
- If Redis is down, visitors are refused; whether invitees can still chat is set by `INVITE_ACCESS_DURING_OUTAGE`.
- Each IP is limited to a number of attempts per minute, to slow down abuse.
- Timeouts: 30s to connect to Dify and 60s with no new data on the server, plus first-response and no-data timeouts in the browser.

---

## Dify Chatflow: one LLM node, two modes

```
Start → Code (detect mode) → Variable Assigner → Knowledge Retrieval → LLM → Answer
```

- **Conversation variable `mode`:** a string, default `[QA]`. It keeps its value across turns within a conversation.
- **Code node:** if a message starts with exactly `[QA]` or `[RP]`, it switches the mode and removes the tag. Any other value falls back to `[QA]`.

  ```python
  def main(query: str, current_mode: str) -> dict:
      text = (query or "").strip()
      mode = current_mode if current_mode in ("[QA]", "[RP]") else "[QA]"
      for tag in ("[QA]", "[RP]"):
          if text.startswith(tag):
              mode = tag
              text = text[len(tag):].strip()
              break
      return {"mode": mode, "clean_query": text}
  ```
- **Variable Assigner:** overwrites `conversation.mode` with the Code node's `mode` output.
- **Knowledge Retrieval:** the query is `clean_query`. Indexing is Economical (keyword-based).
- **LLM:**
  - Memory is on, and the current message is `clean_query`.
  - The system prompt starts and ends with `CURRENT MODE: {{#conversation.mode#}}` and contains two fenced parts: Part A (Coach) and Part B (Role-play).
- **Mode lock:** the model can never change the mode itself. If a learner asks to switch, it replies with a fixed line explaining how.

**Debugging:** in Dify Preview, open the **Conversation Variables** panel, or open **Tracing** and check the Code node output, the Variable Assigner value and the LLM node's final system prompt.

---

## Project structure

```
├── index.html
├── netlify.toml                 # build: npm run build → dist, Node 22
├── netlify/functions/chat.mjs   # access tiers, quotas, Dify proxy (path: /api/chat)
└── src/
    ├── App.tsx / App.css        # header and page layout
    ├── Chat.tsx / Chat.css      # chat UI, trial display, character limit
    ├── chatApi.ts               # requests, server-sent events parser, timeouts, error types
    ├── invite.ts                # invite code from the URL, browser ID with storage fallbacks
    └── index.css
```

---

## Setup

### 1. Run locally

```bash
npm config set registry http://registry.npmjs.org/   # needed in StackBlitz
npm install
npm run dev
```

`/api/chat` only exists on Netlify. When the app runs without it, the page shows a clear "Chat server not found (404)" message. To test the full flow locally, use `netlify dev`.

### 2. Deploy to Netlify

Connect this repo in Netlify. The build settings come from `netlify.toml`.

### 3. Environment variables

Set these in **Netlify → Site configuration → Environment variables.**

**Secrets** (mark as secret, and never commit them):

| Name | Purpose |
|---|---|
| `DIFY_API_KEY` | Dify app API key |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash REST token |
| `ADMIN_CODES` | Comma-separated admin codes |
| `INVITE_CODES` | Comma-separated invite codes |

**Settings** (safe to import from a `.env` file):

| Name | Default | Purpose |
|---|---|---|
| `DIFY_API_URL` | `https://api.dify.ai/v1` | Dify API base address |
| `UPSTASH_REDIS_REST_URL` | — | Upstash REST address |
| `MAX_MESSAGE_CHARS` | `2000` | Longest allowed message |
| `RATE_LIMIT_HOURLY` / `RATE_LIMIT_DAILY` | `30` / `100` | Limits per invite code |
| `INVITE_ACCESS_DURING_OUTAGE` | `false` | Let invitees chat (uncounted) if Redis is down |
| `ATTEMPT_LIMIT_PER_MINUTE` | `20` | Requests per IP per minute |
| `TRIAL_ENABLED` | `true` | Turn the visitor trial on or off |
| `TRIAL_DAILY_LIMIT` | `8` | Free messages per browser per day |
| `TRIAL_IP_DAILY_LIMIT` | `30` | Free messages per IP per day |
| `TRIAL_GLOBAL_DAILY_LIMIT` | `300` | Free messages per day, site-wide |
| `TRIAL_WELCOME_TEXT` / `TRIAL_ENDED_TEXT` / `TRIAL_CONTACT_TEXT` | built-in | Text shown to visitors. `{limit}` and `{hours}` are filled in automatically. |
| `LIMIT_TZ_OFFSET_HOURS` | `8` | Timezone offset for the daily reset |

Redeploy after changing environment variables.

### 4. Keep these files out of GitHub

Add them to `.gitignore`:

```
netlify-secrets.env
invite-links.csv
INVITE_CODES-env-value.txt
.env*
```

---

## Roadmap

- **Mode buttons (planned):** the page will own the mode, and taps recolor the UI instantly.
  - The Netlify function will replace any tag at the start of the message with the page's mode, so Dify always receives exactly one tag and typed tags can't switch modes on the live site.
  - The Dify flow stays the same.
- **Scenario buttons:** start a role-play scenario with one tap, by sending a hidden kickoff message.
- **Skip retrieval in [RP]:** add an IF/ELSE node so role-play turns don't query the knowledge base.
- **Retrieval quality:** more distinctive keywords per chunk, and an evidence rule for weak matches.

---

## Tech stack

React · Vite · TypeScript · Netlify Functions · Upstash Redis · Dify · Kimi (Moonshot)
