// netlify/functions/chat.mjs
// Runs on Netlify's servers, never in the browser, so your keys stay private.
//
// Netlify owns ALL access control and quotas. Dify only handles the tutoring
// (prompt, knowledge, model). If a Dify rate-limit plugin is still in the
// Chatflow, remove it so limits aren't enforced twice.
//
// Three access tiers (see resolveAccess):
//   admin   -> code in ADMIN_CODES: no quotas
//   invite  -> code in INVITE_CODES: RATE_LIMIT_HOURLY / RATE_LIMIT_DAILY
//   visitor -> no valid code: free trial, TRIAL_* limits per browser, per IP, and globally
//
// Quotas are checked and consumed in ONE atomic Redis script, and only when a
// request is admitted, so rejected attempts never use up anyone's allowance.

import { createHash } from "node:crypto";

// ---------- Settings (all optional; defaults shown) ----------
const env = process.env;
const num = (name, fallback) => {
  const v = Number(env[name]);
  return Number.isFinite(v) && v >= 0 ? v : fallback;
};
const flag = (name, fallback) => {
  const v = String(env[name] ?? "").trim().toLowerCase();
  if (v === "true") return true;
  if (v === "false") return false;
  return fallback;
};

const MAX_MESSAGE_CHARS = num("MAX_MESSAGE_CHARS", 2000);

// Invitees
const HOURLY_LIMIT = num("RATE_LIMIT_HOURLY", 30);
const DAILY_LIMIT = num("RATE_LIMIT_DAILY", 100);
// Whether invited learners keep access if the quota database is down.
// false = safest for spending (default); true = learners keep chatting, uncounted.
const INVITE_ACCESS_DURING_OUTAGE = flag("INVITE_ACCESS_DURING_OUTAGE", false);

// Visitors (free trial)
const TRIAL_ENABLED = flag("TRIAL_ENABLED", true);
const TRIAL_DAILY = num("TRIAL_DAILY_LIMIT", 8);
const TRIAL_IP_DAILY = num("TRIAL_IP_DAILY_LIMIT", 30);
const TRIAL_GLOBAL_DAILY = num("TRIAL_GLOBAL_DAILY_LIMIT", 300);

// Request attempts per IP per minute (all tiers except admin), counted even when
// rejected. This is separate from quotas: it never uses up anyone's allowance.
const ATTEMPTS_PER_MINUTE = num("ATTEMPT_LIMIT_PER_MINUTE", 20);

// Visitor-facing text. {limit} = TRIAL_DAILY_LIMIT, {hours} = hours until reset.
const TRIAL_WELCOME_TEXT =
  env.TRIAL_WELCOME_TEXT || "Free trial: {limit} messages a day. 免费体验：每天 {limit} 条消息。";
const TRIAL_ENDED_TEXT =
  env.TRIAL_ENDED_TEXT ||
  "You've used today's {limit} free messages. They refresh in about {hours} hours. 今天的 {limit} 条免费消息已用完。";
const TRIAL_CONTACT =
  env.TRIAL_CONTACT_TEXT || "Ask Donald for your personal invite link. 联系 Donald 获取专属邀请链接。";

const TZ_OFFSET_HOURS = num("LIMIT_TZ_OFFSET_HOURS", 8);

// Timeouts
const REDIS_TIMEOUT_MS = 3000;
const DIFY_CONNECT_TIMEOUT_MS = num("DIFY_CONNECT_TIMEOUT_MS", 30000);
const DIFY_IDLE_TIMEOUT_MS = num("DIFY_IDLE_TIMEOUT_MS", 60000);

// ---------- Small helpers ----------
const json = (obj, status, headers = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });

function localNow() {
  return new Date(Date.now() + TZ_OFFSET_HOURS * 3600 * 1000);
}
const dayStamp = () => localNow().toISOString().slice(0, 10); // 2026-10-06
const hourStamp = () => localNow().toISOString().slice(0, 13); // 2026-10-06T14
const minuteStamp = () => localNow().toISOString().slice(0, 16); // 2026-10-06T14:05
const hoursUntilReset = () => Math.max(1, 24 - localNow().getUTCHours());
const fill = (text) =>
  text.replaceAll("{limit}", String(TRIAL_DAILY)).replaceAll("{hours}", String(hoursUntilReset()));

// Admin identity in Dify logs: a hash of the FULL admin code, so admins never
// collide and the admin code itself never appears in logs.
const adminId = (code) => createHash("sha256").update(`admin:${code}`).digest("hex").slice(0, 24);

function loadInvites() {
  const raw = env.INVITE_CODES;
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    console.error("INVITE_CODES is not valid JSON");
    return {};
  }
}

function loadAdminCodes() {
  return new Set(
    String(env.ADMIN_CODES || "")
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
  );
}

// ---------- Access policy: tier, identity, applicable limits ----------
// Invite codes are access passes: limits are tracked per code, and sharing a
// code shares its allowance. No user accounts.
export function resolveAccess({ code, browserId, ip }) {
  const day = dayStamp();
  const attempts = { key: `att:${ip}:${minuteStamp()}`, limit: ATTEMPTS_PER_MINUTE, ttl: 120 };

  if (code && loadAdminCodes().has(code)) {
    return { tier: "admin", difyUser: `admin-${adminId(code)}`, attempts: null, quotas: [] };
  }

  if (code && Object.prototype.hasOwnProperty.call(loadInvites(), code)) {
    return {
      tier: "invite",
      difyUser: `invite-${code}`,
      attempts,
      quotas: [
        { key: `rl:h:code:${code}:${hourStamp()}`, limit: HOURLY_LIMIT, ttl: 3600 + 300, reason: "invite-hourly" },
        { key: `rl:d:code:${code}:${day}`, limit: DAILY_LIMIT, ttl: 86400 + 3600, reason: "invite-daily" },
      ],
    };
  }

  return {
    tier: "visitor",
    difyUser: `trial-${browserId}`,
    attempts,
    quotas: [
      { key: `trial:b:${browserId}:${day}`, limit: TRIAL_DAILY, ttl: 86400 + 3600, reason: "trial" },
      { key: `trial:ip:${ip}:${day}`, limit: TRIAL_IP_DAILY, ttl: 86400 + 3600, reason: "trial" },
      { key: `trial:all:${day}`, limit: TRIAL_GLOBAL_DAILY, ttl: 86400 + 3600, reason: "trial-global" },
    ],
  };
}

// ---------- Upstash Redis (REST API, no npm package needed) ----------
const upstashConfigured = () => Boolean(env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN);

class QuotaStoreError extends Error {}

// Sends one command and validates the response. Upstash reports command errors
// as {"error": "..."} with or without an HTTP error status, so check both.
async function redisCommand(command) {
  if (!upstashConfigured()) throw new QuotaStoreError("Upstash is not configured");
  let res;
  try {
    res = await fetch(env.UPSTASH_REDIS_REST_URL.replace(/\/$/, ""), {
      method: "POST",
      headers: { Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify(command),
      signal: AbortSignal.timeout(REDIS_TIMEOUT_MS),
    });
  } catch (e) {
    throw new QuotaStoreError(`Upstash unreachable: ${e?.name || e}`);
  }
  let data;
  try {
    data = await res.json();
  } catch {
    throw new QuotaStoreError(`Upstash returned non-JSON (HTTP ${res.status})`);
  }
  if (!res.ok || !data || typeof data !== "object" || "error" in data || !("result" in data)) {
    throw new QuotaStoreError(`Upstash error (HTTP ${res.status}): ${data?.error ?? "missing result"}`);
  }
  return data.result;
}

// Atomic admission. KEYS[1] = attempt counter (always counted).
// KEYS[2..n] = quota counters: all are checked first, and incremented only if
// every one has room. ARGV holds (limit, ttl) pairs in the same order as KEYS.
// Returns {1, count2, ..., countN} when admitted, or {0, failedIndex, current}.
const ADMIT_SCRIPT = `
local a = redis.call('INCR', KEYS[1])
if redis.call('TTL', KEYS[1]) < 0 then redis.call('EXPIRE', KEYS[1], tonumber(ARGV[2])) end
if a > tonumber(ARGV[1]) then return {0, 1, a} end
local n = #KEYS
for i = 2, n do
  local c = tonumber(redis.call('GET', KEYS[i]) or '0')
  if c + 1 > tonumber(ARGV[i * 2 - 1]) then return {0, i, c} end
end
local out = {1}
for i = 2, n do
  local v = redis.call('INCR', KEYS[i])
  if redis.call('TTL', KEYS[i]) < 0 then redis.call('EXPIRE', KEYS[i], tonumber(ARGV[i * 2])) end
  out[#out + 1] = v
end
return out
`;

// Gives back quota (not attempts) when an admitted request never reached the tutor.
const REFUND_SCRIPT = `
for i = 1, #KEYS do
  local c = tonumber(redis.call('GET', KEYS[i]) or '0')
  if c > 0 then redis.call('DECR', KEYS[i]) end
end
return 1
`;

async function admit(access) {
  const entries = [access.attempts, ...access.quotas];
  const keys = entries.map((e) => e.key);
  const args = entries.flatMap((e) => [String(e.limit), String(e.ttl)]);
  const result = await redisCommand(["EVAL", ADMIT_SCRIPT, String(keys.length), ...keys, ...args]);

  const valid =
    Array.isArray(result) &&
    result.length >= 1 &&
    result.every((v) => Number.isInteger(typeof v === "string" ? Number(v) : v));
  if (!valid) throw new QuotaStoreError(`Unexpected admission result: ${JSON.stringify(result)}`);
  const nums = result.map(Number);

  if (nums[0] === 1) {
    if (nums.length !== keys.length) throw new QuotaStoreError("Admission result has the wrong length");
    return { ok: true, counts: nums.slice(1) };
  }
  const failedIndex = nums[1];
  if (failedIndex === 1) return { ok: false, reason: "attempts" };
  const quota = access.quotas[failedIndex - 2];
  if (!quota) throw new QuotaStoreError("Admission result points to an unknown quota");
  return { ok: false, reason: quota.reason };
}

async function refund(access) {
  if (!access.quotas.length) return;
  try {
    await redisCommand(["EVAL", REFUND_SCRIPT, String(access.quotas.length), ...access.quotas.map((q) => q.key)]);
  } catch (e) {
    console.error("Quota refund failed:", e.message);
  }
}

// ---------- Messages for each outcome ----------
function denial(reason) {
  switch (reason) {
    case "attempts":
      return json({ error: "Too many requests. Please wait a minute and try again. 请求过于频繁，请稍等一分钟再试。" }, 429);
    case "invite-hourly": {
      const minsLeft = 60 - localNow().getUTCMinutes();
      return json({ error: `You've had a great session! Your hourly limit resets in about ${minsLeft} minutes. 本小时练习次数已用完，请稍后再来～` }, 429);
    }
    case "invite-daily":
      return json({ error: "You've reached today's practice limit. See you tomorrow! 今天的练习次数已用完，明天见～" }, 429);
    case "trial-global":
      return json(
        { error: "Free trial spots are full for today. Please try again tomorrow, or use an invite link. 今日免费体验名额已满，请明天再来，或使用邀请链接。", trialEnded: true, contact: TRIAL_CONTACT },
        403,
        { "X-Access-Tier": "visitor", "X-Trial-Remaining": "0" }
      );
    case "trial":
    default:
      return json(
        { error: fill(TRIAL_ENDED_TEXT), trialEnded: true, contact: TRIAL_CONTACT },
        403,
        { "X-Access-Tier": "visitor", "X-Trial-Remaining": "0" }
      );
  }
}

const unavailable = (tier) =>
  json(
    {
      error:
        tier === "visitor"
          ? "The free trial is temporarily unavailable. Please try again in a few minutes. 免费体验暂时不可用，请稍后再试。"
          : "Practice is temporarily unavailable. Please try again in a few minutes. 服务暂时不可用，请稍后再试。",
      unavailable: true,
    },
    503,
    { "X-Access-Tier": tier }
  );

// Passes Dify's stream through, but ends it if Dify goes silent for too long.
function withIdleTimeout(body, ms) {
  const reader = body.getReader();
  return new ReadableStream({
    async pull(controller) {
      let timer;
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("Dify stream idle timeout")), ms);
      });
      try {
        const { value, done } = await Promise.race([reader.read(), timeout]);
        if (done) controller.close();
        else controller.enqueue(value);
      } catch (e) {
        reader.cancel().catch(() => {});
        controller.error(e);
      } finally {
        clearTimeout(timer);
      }
    },
    cancel(reason) {
      return reader.cancel(reason);
    },
  });
}

// ---------- Main handler ----------
export default async (req, context) => {
  // GET: public settings for the page (no secrets here)
  if (req.method === "GET") {
    const trialOpen = TRIAL_ENABLED && upstashConfigured();
    return json(
      {
        trialEnabled: trialOpen,
        trialDailyLimit: TRIAL_DAILY,
        welcomeText: trialOpen ? fill(TRIAL_WELCOME_TEXT) : "",
        maxMessageChars: MAX_MESSAGE_CHARS,
      },
      200
    );
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const apiKey = env.DIFY_API_KEY;
  const baseUrl = (env.DIFY_API_URL || "https://api.dify.ai/v1").replace(/\/$/, "");
  if (!apiKey) return json({ error: "The server is missing DIFY_API_KEY." }, 500);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Reject oversized messages instead of silently cutting them.
  const query = String(body?.query ?? "").trim();
  if (!query) return json({ error: "Message is empty." }, 400);
  if (query.length > MAX_MESSAGE_CHARS) {
    return json(
      {
        error: `Your message is ${query.length.toLocaleString("en-US")} characters; the limit is ${MAX_MESSAGE_CHARS.toLocaleString("en-US")}. Please shorten it and send again. 消息过长，请删减后再发送。`,
        tooLong: true,
        maxChars: MAX_MESSAGE_CHARS,
      },
      413
    );
  }

  // 1. Resolve the tier and identity
  const code = String(body?.code ?? "").trim().slice(0, 200);
  const browserId = String(body?.user ?? "").replace(/[^\w-]/g, "").slice(0, 100) || "anon";
  const ip =
    context?.ip ||
    req.headers.get("x-nf-client-connection-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown";
  const access = resolveAccess({ code, browserId, ip });

  // 2. Admit (atomic check-and-consume)
  const headers = { "X-Access-Tier": access.tier };
  let admitted = false;
  if (access.tier === "visitor" && !TRIAL_ENABLED) {
    return json(
      { error: "This chat is invite-only right now. 目前仅限受邀用户使用。", trialEnded: true, contact: TRIAL_CONTACT },
      403,
      { ...headers, "X-Trial-Remaining": "0" }
    );
  }
  if (access.tier !== "admin") {
    try {
      const result = await admit(access);
      if (!result.ok) return denial(result.reason);
      admitted = true;
      if (access.tier === "visitor") {
        const [b, i, g] = result.counts;
        const remaining = Math.max(0, Math.min(TRIAL_DAILY - b, TRIAL_IP_DAILY - i, TRIAL_GLOBAL_DAILY - g));
        headers["X-Trial-Remaining"] = String(remaining);
      }
    } catch (e) {
      console.error(`Quota check failed (${access.tier}):`, e.message);
      if (!(access.tier === "invite" && INVITE_ACCESS_DURING_OUTAGE)) return unavailable(access.tier);
      // Invited learner during an outage, explicitly allowed by INVITE_ACCESS_DURING_OUTAGE.
    }
  }

  // 3. Forward to Dify with a connection timeout
  const conversationId = String(body?.conversationId ?? "").slice(0, 100);
  const difyAbort = new AbortController();
  const connectTimer = setTimeout(() => difyAbort.abort(), DIFY_CONNECT_TIMEOUT_MS);
  let upstream;
  try {
    upstream = await fetch(`${baseUrl}/chat-messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        inputs: {},
        query,
        response_mode: "streaming",
        conversation_id: conversationId,
        user: access.difyUser,
      }),
      signal: difyAbort.signal,
    });
  } catch (e) {
    clearTimeout(connectTimer);
    if (admitted) await refund(access);
    const timedOut = difyAbort.signal.aborted;
    return json(
      { error: timedOut ? "The tutor took too long to start. Please try again. 响应超时，请重试。" : "Couldn't reach the tutor. Please try again. 无法连接，请重试。" },
      timedOut ? 504 : 502,
      headers
    );
  }
  clearTimeout(connectTimer);

  if (!upstream.ok || !upstream.body) {
    if (admitted) await refund(access);
    const detail = (await upstream.text().catch(() => "")).slice(0, 500);
    console.error(`Dify error ${upstream.status}: ${detail}`);
    return json({ error: `The tutor returned an error (${upstream.status}). Please try again.` }, 502, headers);
  }

  return new Response(withIdleTimeout(upstream.body, DIFY_IDLE_TIMEOUT_MS), {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", ...headers },
  });
};

export const config = { path: "/api/chat" };
