// POST /api/feedback — thumbs up/down on a tutor reply.
// Forwards the rating to Dify's message feedback API, so it shows on that message in
// the app's Logs & Annotations. The Dify key stays here, never on the page.
import { resolveAccess } from "./chat.mjs";

const env = process.env;
const RATINGS = new Set(["like", "dislike", null]);

const json = (data, status) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

export default async (req, context) => {
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

  const messageId = String(body?.messageId ?? "");
  const rating = body?.rating ?? null;
  if (!/^[\w-]{8,64}$/.test(messageId) || !RATINGS.has(rating)) return json({ error: "Invalid request." }, 400);

  // Same identity the chat used, so Dify finds the message under this learner.
  // Dify only accepts feedback from the user who received the message.
  const code = String(body?.code ?? "").trim().slice(0, 200);
  const browserId = String(body?.user ?? "").replace(/[^\w-]/g, "").slice(0, 100) || "anon";
  const ip = context?.ip || "unknown";
  const { difyUser } = resolveAccess({ code, browserId, ip });

  try {
    const res = await fetch(`${baseUrl}/messages/${encodeURIComponent(messageId)}/feedbacks`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ rating, user: difyUser }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const detail = (await res.text().catch(() => "")).slice(0, 300);
      console.error(`Dify feedback error ${res.status}: ${detail}`);
      return json({ error: "Couldn't save the rating." }, 502);
    }
    return json({ ok: true }, 200);
  } catch (e) {
    console.error("Dify feedback failed:", e.message);
    return json({ error: "Couldn't save the rating." }, 502);
  }
};

export const config = { path: "/api/feedback" };
