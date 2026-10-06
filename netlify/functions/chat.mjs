// netlify/functions/chat.mjs
// Runs on Netlify's servers, never in the browser, so your keys stay private.
//
// Three access tiers:
//   admin   -> code in ADMIN_CODES: no limits
//   invite  -> code in INVITE_CODES: RATE_LIMIT_HOURLY / RATE_LIMIT_DAILY per code
//   visitor -> no (valid) code: free trial, TRIAL_* limits per browser, per IP, and globally
//
// Daily counters reset at midnight in the timezone set by LIMIT_TZ_OFFSET_HOURS (default 8 = Beijing).

const json = (obj, status, headers = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });

const num = (name, fallback) => {
  const v = Number(process.env[name]);
  return Number.isFinite(v) && v >= 0 ? v : fallback;
};

// ---------- Settings (all optional; defaults shown) ----------
// Invitees (unchanged from before)
const HOURLY_LIMIT = num("RATE_LIMIT_HOURLY", 30);
const DAILY_LIMIT = num("RATE_LIMIT_DAILY", 100);
// Visitors (free trial)
const TRIAL_ENABLED = String(process.env.TRIAL_ENABLED ?? "true").toLowerCase() !== "false";
const TRIAL_DAILY = num("TRIAL_DAILY_LIMIT", 8);            // per browser, per day
const TRIAL_IP_DAILY = num("TRIAL_IP_DAILY_LIMIT", 30);      // per IP, per day (offices share IPs)
const TRIAL_GLOBAL_DAILY = num("TRIAL_GLOBAL_DAILY_LIMIT", 300); // all visitors combined, per day
const TRIAL_CONTACT =
  process.env.TRIAL_CONTACT_TEXT ||
  "Ask Donald for your personal invite link. 联系 Donald 获取专属邀请链接。";
// Visitor-facing text. {limit} = TRIAL_DAILY_LIMIT, {hours} = hours until the daily reset.
const TRIAL_WELCOME_TEXT =
  process.env.TRIAL_WELCOME_TEXT ||
  "Free trial: {limit} messages a day. 免费体验：每天 {limit} 条消息。";
const TRIAL_ENDED_TEXT =
  process.env.TRIAL_ENDED_TEXT ||
  "You've used today's {limit} free messages. They refresh in about {hours} hours. 今天的 {limit} 条免费消息已用完。";
const fill = (text) =>
  text.replaceAll("{limit}", String(TRIAL_DAILY)).replaceAll("{hours}", String(hoursUntilReset()));
// Timezone for daily resets
const TZ_OFFSET_HOURS = num("LIMIT_TZ_OFFSET_HOURS", 8);

// ---------- Codes ----------
// INVITE_CODES = {"wHrQRe52":"Learner 01", ...}   ADMIN_CODES = "code1,code2"
function loadInvites() {
  const raw = process.env.INVITE_CODES;
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    console.error("INVITE_CODES is not valid JSON");
    return {};
  }
}

function loadAdminCodes() {
  return new Set(
    String(process.env.ADMIN_CODES || "")
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
  );
}

// ---------- Time helpers ----------
function localNow() {
  return new Date(Date.now() + TZ_OFFSET_HOURS * 3600 * 1000);
}
const dayStamp = () => localNow().toISOString().slice(0, 10);   // 2026-10-06
const hourStamp = () => localNow().toISOString().slice(0, 13);  // 2026-10-06T14
function hoursUntilReset() {
  const n = localNow();
  return Math.max(1, 24 - n.getUTCHours());
}

// ---------- Upstash (REST API, no npm package needed) ----------
function upstashConfigured() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

// Increments each key, sets its expiry, and returns the new counts in order.
async function incrementAll(keysWithTtl) {
  const url = process.env.UPSTASH_REDIS_REST_URL.replace(/\/$/, "");
  const commands = keysWithTtl.flatMap(([key, ttl]) => [["INCR", key], ["EXPIRE", key, ttl]]);
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const out = await res.json();
  return keysWithTtl.map((_, i) => Number(out[i * 2]?.result ?? 0));
}

// ---------- Invitee limit ----------
async function checkInviteLimit(code) {
  if (!upstashConfigured()) return { ok: true };
  try {
    const [hourCount, dayCount] = await incrementAll([
      [`rl:h:code:${code}:${hourStamp()}`, 3600],
      [`rl:d:code:${code}:${dayStamp()}`, 86400 + 3600],
    ]);
    if (hourCount > HOURLY_LIMIT) {
      const minsLeft = 60 - new Date().getUTCMinutes();
      return { ok: false, msg: `You've had a great session! Your hourly limit resets in about ${minsLeft} minutes. 本小时练习次数已用完，请稍后再来～` };
    }
    if (dayCount > DAILY_LIMIT) {
      return { ok: false, msg: "You've reached today's practice limit. See you tomorrow! 今天的练习次数已用完，明天见～" };
    }
    return { ok: true };
  } catch (e) {
    console.error("Invite limit check failed:", e);
    return { ok: true }; // fail open so a Redis hiccup doesn't block invited learners
  }
}

// ---------- Visitor (free trial) limit ----------
async function checkTrialLimit(browserId, ip) {
  // Without Upstash there's no way to count, so the trial stays closed.
  if (!TRIAL_ENABLED || !upstashConfigured()) {
    return { ok: false, ended: true, msg: "This chat is invite-only right now. 目前仅限受邀用户使用。" };
  }
  try {
    const day = dayStamp();
    const [browserCount, ipCount, globalCount] = await incrementAll([
      [`trial:b:${browserId}:${day}`, 86400 + 3600],
      [`trial:ip:${ip}:${day}`, 86400 + 3600],
      [`trial:all:${day}`, 86400 + 3600],
    ]);

    if (globalCount > TRIAL_GLOBAL_DAILY) {
      return { ok: false, ended: true, msg: "Free trial spots are full for today. Please try again tomorrow, or use an invite link. 今日免费体验名额已满，请明天再来，或使用邀请链接。" };
    }
    if (browserCount > TRIAL_DAILY || ipCount > TRIAL_IP_DAILY) {
      return { ok: false, ended: true, msg: fill(TRIAL_ENDED_TEXT) };
    }
    return { ok: true, remaining: Math.max(0, TRIAL_DAILY - browserCount) };
  } catch (e) {
    console.error("Trial limit check failed:", e);
    return { ok: true, remaining: null }; // fail open on a temporary Redis error
  }
}

// ---------- Main handler ----------
export default async (req, context) => {
  // GET: public trial settings for the welcome screen (no secrets here)
  if (req.method === "GET") {
    const trialOpen = TRIAL_ENABLED && upstashConfigured();
    return json(
      { trialEnabled: trialOpen, trialDailyLimit: TRIAL_DAILY, welcomeText: trialOpen ? fill(TRIAL_WELCOME_TEXT) : "" },
      200,
      { "Cache-Control": "no-store" }
    );
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const apiKey = process.env.DIFY_API_KEY;
  const baseUrl = (process.env.DIFY_API_URL || "https://api.dify.ai/v1").replace(/\/$/, "");
  if (!apiKey) return json({ error: "The server is missing DIFY_API_KEY." }, 500);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const query = String(body.query || "").trim().slice(0, 2000); // cap message length
  if (!query) return json({ error: "Message is empty." }, 400);

  // 1. Work out the tier
  const code = String(body.code || "").trim();
  const browserId = String(body.user || "web-anon").replace(/[^\w-]/g, "").slice(0, 100) || "web-anon";
  const ip =
    context?.ip ||
    req.headers.get("x-nf-client-connection-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown";

  let tier = "visitor";
  if (code && loadAdminCodes().has(code)) tier = "admin";
  else if (code && Object.prototype.hasOwnProperty.call(loadInvites(), code)) tier = "invite";

  // 2. Apply the tier's limits
  const extraHeaders = { "X-Access-Tier": tier };
  if (tier === "invite") {
    const limit = await checkInviteLimit(code);
    if (!limit.ok) return json({ error: limit.msg }, 429, extraHeaders);
  } else if (tier === "visitor") {
    const limit = await checkTrialLimit(browserId, ip);
    if (!limit.ok) {
      return json(
        { error: limit.msg, trialEnded: true, contact: TRIAL_CONTACT },
        403,
        { ...extraHeaders, "X-Trial-Remaining": "0" }
      );
    }
    if (limit.remaining !== null && limit.remaining !== undefined) {
      extraHeaders["X-Trial-Remaining"] = String(limit.remaining);
    }
  }

  // 3. Forward to Dify. Logs show who's who: admin-xxxx, invite-<code>, trial-<browser>.
  const user =
    tier === "admin" ? `admin-${code.slice(0, 4)}` : tier === "invite" ? `invite-${code}` : `trial-${browserId}`;
  const conversationId = String(body.conversationId || "");

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
        user,
      }),
    });
  } catch {
    return json({ error: "Couldn't reach Dify." }, 502);
  }

  if (!upstream.ok || !upstream.body) {
    const detail = (await upstream.text().catch(() => "")).slice(0, 500);
    return json({ error: `Dify returned an error (${upstream.status}).`, detail }, 502);
  }

  return new Response(upstream.body, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", ...extraHeaders },
  });
};

export const config = { path: "/api/chat" };
