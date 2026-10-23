// /api/profile — the learner's saved profile, for the home greeting and the About page.
//   GET    ?user=<browser ID>  -> { profile: { name, company, industry, industry_source, goal } | null }
//   DELETE ?user=<browser ID>  -> clears it (the About page's Clear link and memory switch)
// Saving happens in chat.mjs, from the tutor's hidden <profile …/> line.
import { redisCommand, upstashConfigured } from "./chat.mjs";
import { clearProfile, loadProfile } from "../lib/profile.mjs";

const json = (data, status) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export default async (req) => {
  const browserId = (new URL(req.url).searchParams.get("user") || "").replace(/[^\w-]/g, "").slice(0, 100);
  if (!upstashConfigured()) return json({ profile: null }, 200);

  try {
    if (req.method === "GET") return json({ profile: await loadProfile(redisCommand, browserId) }, 200);
    if (req.method === "DELETE") {
      await clearProfile(redisCommand, browserId);
      return json({ ok: true }, 200);
    }
    return json({ error: "Method not allowed" }, 405);
  } catch (e) {
    console.error("Profile request failed:", e.message);
    return json({ error: "Couldn't reach the profile store." }, 503);
  }
};

export const config = { path: "/api/profile" };
