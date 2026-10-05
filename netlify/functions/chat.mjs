// netlify/functions/chat.mjs
// Runs on Netlify's servers, never in the browser, so your Dify API key stays private.
// The page calls /api/chat; this function forwards the message to Dify and streams the reply back.

const json = (obj, status) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default async (req) => {
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

  const user = String(body.user || "web-anon").slice(0, 100);
  const conversationId = String(body.conversationId || "");

  let upstream;
  try {
    upstream = await fetch(`${baseUrl}/chat-messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {},                 // add values here if your Chatflow's Start node has required inputs
        query,
        response_mode: "streaming",
        conversation_id: conversationId,
        user,                       // becomes sys.user_id in Dify (used by your rate limit)
      }),
    });
  } catch {
    return json({ error: "Couldn't reach Dify." }, 502);
  }

  if (!upstream.ok || !upstream.body) {
    const detail = (await upstream.text().catch(() => "")).slice(0, 500);
    return json({ error: `Dify returned an error (${upstream.status}).`, detail }, 502);
  }

  // Pass Dify's stream straight through to the browser
  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
};

export const config = { path: "/api/chat" };
