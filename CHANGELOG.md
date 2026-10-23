# Real Business: Changelog

## Dev only (not yet on main)
*None right now.* `dev` and `main` are identical as of `b1d6043` (Oct 22).

> **"On main" isn't the same as "live."** Auto-publishing is locked, so a `main` deploy only goes live once it's published in Netlify. The newest deploy waiting to be published is `main@b1d6043`.

## History

### Oct 22
- **Faster finish on slow networks:** a reply counts as done as soon as Dify signals the end, so buttons come back right away. `9420b14`
- **Notes wait for the character's text:** while a reply streams, hints stay hidden until the character's line is complete, with "Thinking…" shown until text starts. `9420b14`
- **Role-play character face:** the character's face floats at the top while they reply. It's fixed for Sarah and Bob, and in custom scenes it follows the tutor's `<character … gender="…"/>` line. `1dd0b6a`, `c2f014a`
- **The face stays visible with the iPhone keyboard open,** and looks the same with Reduce motion on. `c8af53c`

### Oct 21
- **Hints:** bracketed lines show as yellow notes under the character's text, with brackets hidden. That includes the scene setup, cues and out-of-character answers. `bd826a4` → `a4946d1`
- **See more / Hide:** when a reply's notes add up to more than 8 lines, they collapse together. This works live while streaming, on phone and desktop. `5f279bb`, `e8a35cf`
- **Mode-button heartbeat:** when a Role-play reply says to tap the mode menu, the button swells twice, rests 0.6 s, and swells twice more. Same on every device, and it doesn't replay after closing About. `e8a35cf` → `6a06024`
- **Home icon:** a line house replaces 🙋🏻‍♀️ on screens with a text box or chat. The home screen and About page keep the emoji. `9ffc8b4`
- **Every visit or refresh starts on the home screen.** `60ba5d8`
- **Thumbs up/down** on the newest tutor reply, saved to Dify feedback. `c07e346`
- **About page:** an About item at the bottom of the mode menu, a Close button with an X in the header, and a Feedback email link. `685145c`, `a60fa63`
- **Chinese mode names:** 模拟同事/客户 on the home card, 情景模拟 in the menu, and 答疑模式 for Coach. `8cbfdf4`, `fb24fcf`
- **Mode menu:** the Coach subtitle reads "Ask questions", and the menu no longer shifts when a mode is selected. `7118099`
- **Status pills never cover text;** no text box on the first-visit screen; the free-messages pill is a neutral gray. `fbfd07f` → `7ac9c5a`

### Oct 20
- **Scene cards:** short difficulty labels with dots, pinned to the top right. `b2fcee5`
- **Scene 2 character renamed Lin → Bob,** and the scene header shows the character's emoji. `f81d7de`, `cff0eab`
- **Coach starter question:** "What should I do in my first 90 days?" replaced the presentation question. `4f7c232`

### Oct 19
- **Study Desk redesign:** powder blue for Coach, apricot for Role-play, off-white background. Also denser text, a wider chat, softer lines, chat-tail corners on bubbles, and "by Donald · beta" in the header. `5b1eb71` → `1dd2720`
- **Role-play first:** the app opens in Role-play. The scene cards are Choose your scene, Start a meeting and Disagree; "Reject a late request" was removed. `1c80b55` → `c0074c4`
- **"Set your scene"** opens the scene header without calling the tutor. `f8bbee0`
- **Free trial used up:** sending is disabled, and the invite card appears when the learner types. `87d1bd5`
- **Fix:** no scrollbar in a one-line text box. `3670c0c`

### Oct 14–16
- **Coach and Role-play modes** with a top-right mode menu, and a home screen with two cards. `e15c850`
- **Scene difficulty tags,** shorter scene kickoffs and simpler scene cards. `86c79f7` → `0838ffe`
- **Tutor replies:** clickable Bilibili video links and **bold** text. `ab76674`, `96c3800`
- **Logo returns home;** at most one "Switched to…" divider. `24c8310`, `affb9c5`
- **PRO badge** for invite-code users. `efc968a`

### Oct 5–12
- **Initial app:** React page → Netlify function → Dify. `075a70f`
- **Invite codes and rate limits;** the visitor bug fixed. `78828ec`, `24a374e`

## Settings and content (outside the repo)
- **Oct 22: trial limit raised to 12 messages a day** (`TRIAL_DAILY_LIMIT`). Takes effect with the `main@b1d6043` deploy.
- **Oct 22: system prompt v3.1, ordering update.** The character's line comes first and brackets come after. Scene 1's lesson video now matches the knowledge base (`BV17j411b7Pg`).
- **Oct 21–22: system prompt, Coach fixes.** Not-covered answers no longer mention the course, with a stricter rule for when a lesson counts as covered.
- **Oct 21: minor knowledge base updates** (chunking: `\n\n`, max 2,000 characters, overlap 0, URLs kept).
- **Oct 19–20: system prompt v3 → v3.1.** About 20–25% shorter, with Do/Never lists, a 6-turn feedback limit, plain everyday topics in the built-in scenes, and the role reminder shown only when needed.
- **Oct 20: Netlify upgraded to the $9 Personal plan** (1,000 credits a month).
