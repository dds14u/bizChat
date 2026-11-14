# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v2.0 · production vs staging · 2 runs each · 2026-11-14 06:19 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C1 Out of scope (Coach) | 2/2 | 2/2 |
| C2 Coach starter: first 90 days | 2/2 | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 2/2 |
| C4 Menu path: greeting, then "1" | 2/2 | 2/2 |
| C5 Custom scene with profile (non-blocking) | 0/2 | 0/2 |
| C6 Profile save, then use (Coach) | 2/2 | 2/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit (non-blocking) | 0/2 | 0/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 1/2 |
| O1 Optional: finance and IT on audit-software bugs | 2/2 | 2/2 |
| O2 Optional: editor exploring AI proofreading with engineering | 2/2 | 2/2 |
| O3 Optional: PM and engineering disagree on launch scope | 2/2 | 2/2 |
| **Total (first try)** | **32/38** | **33/38** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | production | staging |
|---|---|---|
| C5 | 0/2 | 0/2 |
| D2 | 0/2 | 0/2 |

## Runs
- production-1: RED · PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0
- production-2: RED · PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0
- staging-1: GREEN · PASS 17 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-14 05:56 UTC

**PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | FAIL | T2: profile: company contains any of ["google"] (no profile line) |
| S1 Custom scene: client meeting | BLOCKING | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | BLOCKING | PASS | – |
| S3 Production defects: business level, feedback fits the scene | BLOCKING | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | BLOCKING | PASS | – |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | BLOCKING | PASS | – |
| S7 Manager 1:1: workload and priorities | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | PASS | – |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | PASS | – |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | – |  |
| D2 | FAIL | – |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Learn and understand your new environment**
> - Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> - Decide where you want your career to go. Let that direction guide what you learn and the opportunities you pursue, even if your long-term goal is outside the company.
> 
> **Start with humility and learn proactively**
> - Be flexible, listen, and avoid being overly aggressive.
> - Ask questions boldly while you are new, and learn from both coworkers and internal documents.
> - Focus first on learning and making a specific plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining today. We're all looking forward to hearing how this project will take shape.
> 
> [You're the project lead at Apple, kicking off a new mobile app launch with the design and engineering teams. Over the past week, there have been email threads about requirements and timelines. Today's goal is to align on the schedule and key features. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> That sounds great, Lee. Thanks for laying that out so clearly — I think we're all set to dive in.
> 
> **Course score: 5/5** — You covered all three ICE steps with clear details and good sequencing.
> 
> **How it went:** Great job! You gave a complete, professional meeting opening that would work well with any global team.
> 
> **What worked:**
> - "I'm Lee, the lead PM for the new app launch, and I'll manage the schedule" — Introductions: name, role, and contribution, all in one sentence.
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — Context: past, present, and future with a clear deadline.
> 
> **What to improve:**
> - Nothing major. If you want to strengthen it further, you could add one sequencing word to the future part, such as "so that we can officially start development once leadership signs off."
> 
> **Also worth noting:** "Please ask questions anytime, and this will be a detailed discussion" works, though "please feel free to interrupt if you have questions" is slightly more common for encouraging interaction.
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### C4 Menu path: greeting, then "1" · BLOCKING · PASS

**T1 [RP]** "Hello"
- ✓ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Hi there! I'm glad you reached out.
> 
> Let's practice a real workplace conversation. Reply with a number:
> 1. Start a meeting (easy)
> 2. Disagree with a coworker
> 3. Reject a late request
> Or describe your own situation.
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Hi everyone, thanks for joining. I'm looking forward to hearing what you've prepared for today's kickoff.
> 
> [You're the lead project manager at Apple, running the first meeting for a new mobile app launch. Over the past two weeks, the team exchanged emails about requirements and design. Today's goal is to align on the schedule and key features before development begins. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead meetings with international teams","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead meetings with international teams","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead meetings with international teams","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead meetings with international teams"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for having us on the call. The retail team in China is looking forward to hearing your plan for the holiday season.
> 
> [You are D, a PM at Apple, leading a kickoff meeting with Sarah and the China retail team. The goal is to align on the holiday sales plan. Start with your introduction.]
> 
> Want to try again without cues, doing all three steps in one go?

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for having us, D. We're looking forward to working through the holiday plan together.
> 
> [Apple retail team, Shanghai. Sarah is the regional retail lead. D is the lead PM for the holiday sales initiative. The goal is to align on the holiday sales plan and confirm next steps before the quarter begins.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="software" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> Hi D, great to meet you. As a PM at Google leading meetings with your US team, confidence often comes from a clear, structured opening. When people know exactly why they're there and what will happen, you naturally come across as in control.
> 
> A few tips:
> 
> • **Open with your purpose.** Start by stating the meeting topic and your role in it. For example: *"Today we're aligning on the CRM rollout timeline. I'm D, the PM leading this project, and I'll be tracking milestones and blockers."*
> 
> • **Give the context in three parts.** Briefly mention how you got here (past), what you'll cover today (present), and what happens next with a deadline (future). For example: *"We've had some back-and-forth on requirements over email. Today we'll lock down the phases and owners. After this, I'll send the finalized plan to leadership by Friday."*
> 
> • **Set expectations.** Tell people how to participate. For example: *"Feel free to jump in with questions, or save them for the end if you prefer."*
> 
> This is covered in the course:
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: software (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings with the ICE method in this order:
> 
> 1. **Introductions**
>    - One or two statements about the meeting topic.
>    - Then your name, role, and how you will contribute.
>    - Example: *"Hi everyone, today we're kicking off the CRM integration. I'm D, the lead PM, and I'll be managing the schedule and acting as the main point of contact for requirements."*
> 
> 2. **Context (past, present, future)**
>    - Past: how you got to today's meeting.
>    - Present: today's topics and goal.
>    - Future: next steps with a clear time.
>    - Example: *"We've had quite a few emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We hope to get written sign-off from the US team by next Monday so we can officially start development."*
> 
> 3. **Expectations**
>    - Level of interaction: *"Please hold questions for the end"* or *"Feel free to interrupt with comments."*
>    - Level of detail: *"We'll stay high level today"* or *"We're going to get into the technical details."*
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee first on the new store menu. It stays true to our brand identity, and customers expect to see it right away when they walk in.
> 
> [Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on the redesigned store menu. Your goal: share a different view and reach a decision together.]
> [Hint: Bob cares about brand identity, but there's also a sales angle you could bring up.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree politely:
> 
> 1. **Start positive** — partially agree with their view ("I understand", "I can see", "it makes sense that").
> 2. **State your opinion and why** — give a specific reason, with facts or data if possible.
> 3. **Keep it open** — ask a question about alternatives so the discussion continues.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 50 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on timing, but a trial still delays the full rollout. If we're not leading with traditional coffee, what would you put first instead?
> 
> [You partially agreed and raised a concern with a question — good start. Bob is asking what your alternative would be. What would you suggest?]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings with the ICE template, in this order:
> 
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – cover past, present, and future:
>    - Past: how you got to this meeting (emails, earlier discussions)
>    - Present: today's topics and goal
>    - Future: next steps, with a deadline ("by next Monday")
> 3. **Expectations** – set the level of interaction ("please hold questions for the end" or "feel free to interrupt") and the level of detail ("this will get technical" or "we'll stay high level").
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new app launch. I'm Danny, lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had a lot of emails back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned. We hope to get sign-off by next Monday. Please hold questions for the end, since we have a lot to cover."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play? Tap the mode menu at the top right and choose Role-play.

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I see your point about food safety, but washing eggs removes the natural protective coating. That coating keeps bacteria out. If we wash them, we have to refrigerate them immediately, and that changes our whole supply chain.
> 
> [You and Jordan are PMs at Google. Your team is exploring a partnership with an egg supplier for a new campus food program. Jordan wants to require washed eggs for consistent appearance and easier handling. You disagree. The goal is to reach a decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","goal":"discuss ML models with coworkers","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models with coworkers"/&gt;
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is a category B question — it's about workplace communication, but not covered by a specific lesson in the course. Here's how to approach discussing ML models with a coworker as a PM at an egg farm:
> 
> 1. **Start with shared goals.** Frame the conversation around what the model needs to achieve for the business, not technical details. Example: "We need this model to predict feed demand so we can reduce waste. What data do we have to work with?"
> 
> 2. **Ask clarifying questions.** You don't need to be the ML expert. Ask about tradeoffs: accuracy vs. speed, data quality, or maintenance effort.
> 
> 3. **Connect to business impact.** Translate technical points into farm outcomes — cost, yield, or risk. Example: "If the model is 90% accurate, what does that mean for our weekly feed orders?"
> 
> 4. **Close with clear next steps.** Agree on who does what by when.
> 
> Want to practice this conversation? Tap the mode menu at the top right and choose Role-play, or describe the specific situation you're facing.

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE template in this order:
> 
> 1. **Introductions** — Say one or two sentences about the meeting topic. Then introduce yourself: your name, role, and how you will help on the project.
> 2. **Context** — Explain why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, discussions, or work done)
>    - *Present:* today's topics and goal
>    - *Future:* next steps after the meeting, with a deadline ("by next Monday")
> 3. **Expectations** — Set two things:
>    - *Interaction:* when people should ask questions ("hold questions until the end" or "feel free to interrupt")
>    - *Detail:* how deep the discussion will go ("high level" or "very technical")
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line upgrade. I'm Alex, the lead PM on this project, and I'll manage the schedule and be your main contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through the timeline, confirm the budget, and flag any risks, so we're all aligned before work starts. We need sign-off from the US team by next Friday. There's a lot to cover, so please hold questions until the end and we'll keep this at a high level."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs actually strips the natural protective coating. That lets bacteria in through the shell, so we'd need to refrigerate them immediately and keep them cold the whole supply chain. That adds cost and complexity.
> 
> [You and Jordan are both PMs at Google in Mountain View. Your team is exploring a partnership with an egg supplier for the campus cafes. Jordan wants the supplier to wash all eggs before delivery. You disagree. The goal is to reach a team decision on the food safety standard.]
> 
> [Hint: you could say "I understand the concern about cleanliness, but..." or "That makes sense for appearance, yet..."]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the ICE template when you open any meeting, including a technical discussion about ML models:
> 
> 1. **Introductions** — State the topic and your role in it.
> 2. **Context** — Cover past, present, and future:
>    - *Past:* data collected, previous model performance, or business problem identified
>    - *Present:* what you'll review today (model metrics, features, or deployment plan)
>    - *Future:* next step with a deadline (e.g., "pilot test by end of month")
> 3. **Expectations** — Set interaction rules and detail level (e.g., "technical deep dive" or "high-level review")
> 
> Example for your situation:
> &gt; "Hi team, today we're reviewing the ML model for predicting egg quality from shell images. I'm the PM for this project, coordinating between our farm operations and the data science team. Over the past month, we've collected 50,000 labeled images and trained a first version. Today we'll look at accuracy and false-negative rates, then decide whether to expand to two more barns. I need a go or no-go from operations by Friday. This will get technical on image preprocessing, so please jump in with questions, and I'll pause for clarifications."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I need to be direct with you — we've had three shipments arrive late this month, and it's costing us. Our warehouse team is working overtime to cover the delays, and my boss is asking questions. What's going on?
> 
> [Scene: You are an account manager at a logistics company. Karen is the operations director at a retail client in Chicago. She has called this meeting because of repeated late deliveries. Your goal is to understand her concerns, explain the situation, and agree on a clear next step.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch? I'm especially interested in timeline and any blockers.
> 
> [Setting: your company, a cross-functional team meeting. Rachel is a senior stakeholder from marketing. You're the PM leading the mobile app launch. She wants a clear picture of progress before her team commits to the campaign timeline.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Rachel: Thanks for the clear picture. Two weeks is significant — our campaign assets are tied to the beta date, so any shift affects our side too. Before we decide on moving the beta or cutting payments, what's your sense of whether the API team can recover any of that time?
> 
> [Setting: your company, a cross-functional team meeting. Rachel is a senior stakeholder from marketing. You're the PM leading the mobile app launch. She wants a clear picture of progress before her team commits to the campaign timeline.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. Line 2's been running flat out since we added the new shift, but I didn't expect defect rates to spike. Walk me through what you're seeing."
> 
> [Setting: Your company supplies EV batteries to a major automaker. You are a quality engineer; Marcus is the production manager. Goal: Discuss the defect increase on Line 2 and agree on next steps.]
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 58 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent? That's a big jump, and right after the supplier change — that timing's hard to ignore. Holding the batches makes sense, but full inspection on every cell is going to slow Line 2 down by a lot. We're already behind on the Q3 volume target. What kind of timeline are you thinking for the 100% check?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated your position clearly with a specific reason, but you skipped partially agreeing with Marcus's concern and didn't invite discussion of alternatives.
> 
> **How it went:** Good directness and a clear ask, but the conversation felt one-sided rather than collaborative.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this is a strong, specific reason with data that supports your position.
> 
> **What to improve:**
> - You jumped straight to your solution without acknowledging Marcus's pressure on Q3 targets. The feedback sandwich step "start positive by partially agreeing" was missing, so your request came across as demanding rather than joint problem-solving.
> - You closed with "Can your team support that?" which is a yes/no question; this shuts down discussion rather than keeping it open to alternatives.
> 
> **Also worth noting:** "I'd like to hold" is softer than "we must hold," which is good. But "Can your team support that this week?" puts the burden on Marcus without showing you understand his constraints.
> 
> **Try this instead:**
> "I understand we're under pressure to hit Q3 volume, but with defect rates at 4% after the supplier change, I think we need to pause and inspect. Could we look at options — maybe a shorter inspection window, or pulling a few people from Line 1 to help? What would work best from your side?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now we're seeing some issues with the API responses that we didn't catch earlier.
> 
> [You're a project lead at your company, meeting with Sam from an external vendor. The project is a software integration. Goal: address the deadline risk and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the API response times. Under load, about fifteen percent of calls are timing out. We thought we had it handled, but the fix is more complex than our team first estimated.
> 
> To stay on schedule, we'd need two more backend engineers for the next three weeks. We don't have that capacity right now. The alternative is we ship with the current performance and patch it in the next release. What matters more to you right now: hitting the deadline, or getting the performance right before launch?

### S5 Clear switch: meeting opener to a project delay · BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're all looking forward to getting started.
> 
> [You are the lead PM at Apple, kicking off a project to launch a new fitness app feature. Over the past two weeks, the team has exchanged emails about requirements and design mockups. Today's goal is to align on the schedule, key features, and responsibilities before development begins. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> I appreciate you flagging this early. Two weeks is a significant slip — what's driving the extra time, and which parts of your recovery plan are you most confident about?
> 
> [You are a senior engineer at Apple. Your manager David is in a weekly 1:1 with you. The project is a new fitness app feature that leadership expects in the next quarterly review.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. I'm looking forward to getting aligned today.
> 
> [You're the lead PM at Apple. The team has exchanged emails about launching a new fitness app feature over the past two weeks. Today's goal is to confirm the schedule and key requirements so development can begin. The next step is to get written sign-off from the US team by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for flagging this early. Two weeks is significant — our launch event is already announced for March 15. Walk me through the bugs and how much time you think you can recover.
> 
> [You're a senior engineer at Apple. Your manager Linda is preparing to brief leadership on the iOS fitness app feature launch. She needs to understand the delay and your recovery plan before that briefing tomorrow morning.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need you to take another look at the Q3 budget report before Monday's leadership review. Can you have the revised numbers ready by end of day Friday?
> 
> [You are a team member at a mid-sized tech company. David is your manager. He has just added a last-minute task that wasn't in your original workload for the week.]
> 
> [Hint: you could say "I want to make sure I understand—what needs to change in the report?"]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> I know you've got a lot on your plate right now. Before we dive into the usual updates, I wanted to check in — how are you feeling about your current workload?
> 
> [Setting: A mid-sized tech company in San Francisco. You are a data analyst with three urgent projects running at once. Linda is your manager. Goal: Ask for help prioritizing without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would cause more problems if it went to January?
> 
> [Hint: you could say "The forecast feeds into the board deck, so delaying it would also affect the meeting."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a reasonable tradeoff, and invited collaboration — strong use of the rejecting/negotiating a request method.
> 
> **How it went:** Great job staying solution-focused and confident. You didn't apologize for being overloaded, which is exactly right.
> 
> **What worked:**
> - "I can finish two well" — this shows you assessed your capacity honestly and framed the limit as a quality issue, not a personal failure. It also restates the practical reality of your bandwidth, a key step in negotiating workload.
> 
> **What to improve:**
> - You named the three projects but didn't explicitly restate any original agreement or timeline that was set when you took them on. Adding this strengthens your position and shows you're managing commitments, not just complaining.
> - You could have asked for time to assess if you weren't sure which to delay, or offered a specific recommendation with reasoning rather than leaving it fully open.
> 
> **Also worth noting:** "Could we decide together" is collaborative, but pairing it with your own recommendation shows more ownership. Managers often want your judgment first.
> 
> **Try this instead:**
> "When these three projects were assigned, the plan was to spread them across Q4. With all three now due this month, I can deliver two with full quality. The pricing analysis and Q4 forecast both feed the board deck, so I'd recommend moving the dashboard migration to January. Does that work?"
> 
> Want to continue this convers…

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Mark" gender="male"/&gt;
> 
> Thanks for making the time today. We're about three months away from our current contract ending with our old vendor, so we're looking at options. I'm hoping you can walk me through how your platform would handle our situation.
> 
> [Setting: Your company, a mid-size software firm. Mark is the operations director at a retail chain based in Chicago. You're the customer success manager. Goal: understand their needs and challenges before product setup.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 60 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three separate tools for inventory, sales reporting, and staff scheduling. The inventory tool doesn't talk to the other two, so my team spends about six hours a week manually reconciling numbers. It's slow, and we've had two stockouts this quarter because the data was stale.
> 
> What does your platform do to keep everything in one place?

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: Hey, thanks for flagging this. I know the quarter-end deadline is tight. Before we dive in, can you walk me through which reports are off? I want to make sure we're fixing the right things first.
> 
> [You're a finance analyst at your company. Marcus is the IT lead. The goal: agree on which software bugs to prioritize before the quarter-end audit.]
> [You can describe a different situation anytime.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 54 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: The totals issue makes sense as top priority. But the formatting problems aren't just cosmetic—if the auditors can't read the reports properly, we'll still have problems. Can you tell me how much time your team needs the reports ready before the 15th? That'll help me see what we can realistically fit in.

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> I appreciate you reaching out. I've heard some teams are experimenting with AI tools, but I'm not sure how that would work for something as nuanced as a full manuscript. What made your team consider this?
> 
> [You are an editor at a publishing company. Marcus is an engineering lead at a tech firm you've been introduced to. You're discussing whether AI proofreading tools could be viable for your books. Goal: explore feasibility, concerns, and possible next steps.]
> [You can describe a different situation anytime.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 87 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are tricky because most AI models are trained on general text, so they often "correct" unusual spellings that are actually correct. For a pilot, we'd need to build a custom term list from your book and retrain or constrain the model. That takes about two weeks of engineering time, plus the compute cost for each run.
> 
> What kind of volume are we talking about for that one book—word count and how many unique names or terms?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on the date pressure, but I think we should cut the onboarding tutorial. It's the fastest way to get us back on track for launch. The core product works, and we can always add it in a later release.
> 
> [Scene: a mid-size SaaS company in San Francisco. You are the PM for a new product launch. Jordan is the engineering lead. The goal: resolve the scope disagreement and agree on a path forward.]
> 
> [Hint: you could say "I understand the date is tight, but..." or "I see why cutting the tutorial seems like the quickest fix..."]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 42 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's fair — user drop-off in the first week is a real risk. A simpler tutorial could work. What would "simpler" look like? Tooltips only? A single welcome screen? And how much time would that save us compared to the full version?

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-14 06:10 UTC

**PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | FAIL | T2: profile: company contains any of ["google"] (no profile line) |
| S1 Custom scene: client meeting | BLOCKING | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | BLOCKING | PASS | – |
| S3 Production defects: business level, feedback fits the scene | BLOCKING | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | BLOCKING | PASS | – |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | BLOCKING | PASS | – |
| S7 Manager 1:1: workload and priorities | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | PASS | – |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | PASS | – |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | – |  |
| D2 | FAIL | – |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 7 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Learn and observe**
> - Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> - Use this time to ask questions and understand your new environment.
> 
> **Stay humble and flexible**
> - Previous success does not automatically mean success in a new company. Listen more than you push.
> - Avoid being overly aggressive, but do ask questions boldly while you are new.
> 
> **Have a plan**
> - Focus first on learning and making a specific plan rather than worrying about performance ratings.
> - Decide where you want your career to go. Let that direction guide what you learn and the opportunities you pursue, even if your long-term goal is outside the company.
> 
> **Learn from multiple sources**
> - Learn from both coworkers and internal documents.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> What role and company are you joining? I can tailor this to your situation.

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're excited to get Project Hippo moving.
> 
> [You're the lead PM at Apple, kicking off a new app launch. The team has exchanged emails for two weeks. Today's goal is to align on requirements, schedule, and risks. The next step is written sign-off from the US team by next Monday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, Lee. That sounds good — we're all set to dig in.
> 
> **Course score: 5/5** — You covered all three ICE steps clearly and in order.
> 
> **How it went:** Great job! You gave a clear introduction, full context with past, present, and future, and you set both expectations in one go.
> 
> **What worked:**
> - "Please ask questions anytime, and this will be a detailed discussion" — this sets both the level of interaction and the level of detail. It tells people how to participate and how deep the meeting will go.
> 
> **What to improve:**
> - Nothing major. If you wanted to add even more clarity, you could separate the two expectations into two sentences: "Please feel free to interrupt if you have questions" for interaction, and "We're going to get into the details today" for detail. But combining them works fine too.
> 
> **Also worth noting:**
> - "We've had a lot of emails" is natural, but "We've had quite a few emails going back and forth" is a common set phrase native speakers use for this situation.
> 
> **Try this instead:**
> - "We've had quite a few emails going back and forth about the main features. Today we'll agree on the schedule and call out risks, so that everyone is aligned. We hope to share a timeline with leadership by next Friday. Please feel free to interrupt with questions, because we're going to get into the details."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### C4 Menu path: greeting, then "1" · BLOCKING · PASS

**T1 [RP]** "Hello"
- ✓ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Hello! Great to meet you.
> 
> Let's practice a real workplace conversation. Reply with a number:
> 1. Start a meeting (easy)
> 2. Disagree with a coworker
> 3. Reject a late request
> Or describe your own situation.
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Thanks for joining, everyone. We're looking forward to hearing how this project will come together.
> 
> [Setting: You're the lead PM at Apple, kicking off a new fitness app feature. The team has exchanged emails for two weeks. Today's goal is to align on requirements and schedule. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for having us, D. The retail team is looking forward to hearing your plan for the holiday season.
> 
> [Scene: Apple, Beijing. You are D, a PM leading a meeting with Sarah and the retail team. The goal is to align on the holiday sales plan.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up, D. The retail team in Shanghai is looking forward to hearing the plan. We've got reps from Beijing and Shenzhen on the call too.
> 
> [Apple — Shanghai. You are D, PM for Greater China retail. Sarah is the regional retail lead on your team. Goal: align on the Q4 holiday sales plan and confirm who does what by when.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="software" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> Great to meet you, D. As a PM at Google leading meetings with the US team, confidence often comes from having a clear structure and signaling control early.
> 
> Three quick tips:
> 
> 1. **Open with purpose.** State the meeting goal in your first sentence: *"Today we'll align on the rollout timeline and flag any blockers before we go to leadership on Thursday."*
> 
> 2. **Set expectations.** Tell people how to participate: *"I'll run through the three open items first, then I'd like your input on the priority order."*
> 
> 3. **Use "we" for shared goals, "I" for ownership.** *"We need to hit Q3" shows team alignment; "I'll own the follow-up email" shows you're driving it.*
> 
> Want to practice this? Describe a real meeting you're leading soon—who's on the call, what's the tension or decision—and we can work through your opening lines.
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: software (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings in three steps, in this order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you will contribute
> 
> *Example:* "Hi everyone, today we're kicking off the CRM integration. I'm D, the lead PM, and I'll be managing the schedule and requirements."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got to this meeting
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example:* "We've had emails going back and forth about the data migration. Today we'll walk through the rollout plan and flag risks. We need sign-off from the US team by next Monday so development can start."
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions for the end" or "Feel free to interrupt"
> - **Detail:** "This will stay high level" or "We'll get into technical details"
> 
> *Example:* "We have a lot to cover, so please hold questions until the end. We'll stay high level on architecture and focus on timeline and ownership."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the new store menu. It stays true to our brand identity, and customers expect that when they walk in.
> 
> [Scene: Starbucks headquarters, Seattle. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on the updated store menu. Goal: share your view on the menu layout and reach a decision together.]
> [Hint: Bob cares about staying true to the brand. You could partly agree with that.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. **Start positive** by partially agreeing with the other side. Show you understand their perspective: "I understand that…", "I can see that…", "It makes sense that…"
> 
> 2. **State your own opinion and why you disagree**, with a specific reason or data if possible.
> 
> 3. **Keep the discussion open** by asking about alternatives or next steps.
> 
> Example:
> &gt; "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> The key is honest partial agreement, not forced praise. Once a decision is made, the team moves forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 61 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the trial approach, but we're already behind on the menu refresh timeline. The design team needs final sign-off by Friday so we can hit the print deadline for next month's rollout.
> 
> [Bob is pushing back lightly: he sees your point but wants to keep moving. He's raised a new concern about timing. How do you respond?]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Start your meeting with the ICE template in this order:
> 
> 1. **Introductions** — one or two statements about the topic, then your name, role, and how you'll contribute.
> 2. **Context** — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** — level of interaction (e.g., hold questions until the end) and level of detail (high level or deep dive).
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new layer management system. I'm Danny, lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had a lot of emails back and forth, so today we'll walk through requirements, confirm the schedule, and call out risks. We hope to get sign-off by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I see your point about food safety, but washing eggs strips away the natural protective coating. That actually increases the risk of bacteria getting in. Our current dry-brushing method keeps the cuticle intact and meets all USDA standards.
> 
> [You're a PM at Google working on a sustainable food supply project. Jordan is your teammate, a supply chain specialist. You're discussing whether to switch to washed eggs for the new campus kitchen pilot. Goal: reach a team decision on the egg handling method.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Start your meeting with the ICE template in this order:
> 
> 1. **Introductions** — one or two statements about the topic, then your name, role, and how you'll contribute.
> 2. **Context** — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** — level of interaction (e.g., hold questions until the end) and level of detail (high level or deep dive).
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new layer management system. I'm Danny, lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had a lot of emails back and forth, so today we'll walk through requirements, confirm the schedule, and call out risks. We hope to get sign-off by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Start meetings with the ICE template — three steps in this order:
> 
> 1. **Introductions** — one or two statements about the topic, then your name, role, and how you'll contribute.
> 2. **Context** — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** — level of interaction (e.g., "hold questions until the end") and level of detail (deep dive or high level).
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new barn automation project. I'm Danny, lead PM. I'll manage the schedule and be the main contact for requirements. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We need sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;character name="Chris" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs strips away the natural protective coating. That means we need refrigeration right away, which drives up energy costs for our farm partners.
> 
> [You are a PM at Google. Chris is a product manager on your team. The company is exploring a new traceability feature for egg suppliers. The conversation goal is to agree on whether washed or unwashed eggs fit the platform's standards.]
> 
> [You can describe a different situation anytime.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> This is covered in the course:
> 
> Start your meeting with the ICE template:
> 
> 1. **Introductions** — state the topic, your name, role, and how you'll contribute.
> 2. **Context** — past (how you got here), present (today's goal), future (next steps with a deadline).
> 3. **Expectations** — set interaction style and detail level.
> 
> Example for your ML model discussion:
> &gt; "Hi everyone, today we're reviewing the ML model for egg quality grading. I'm [name], PM for this project. I'll coordinate between the data science team and operations. We've spent three weeks testing image recognition on sample batches. Today we need to decide if accuracy is high enough for a pilot on Line 3. Next, we'll present a go/no-go recommendation to operations by Friday. This will stay high level on the technical architecture, but I'll pause for questions after each section."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I'm Karen, the operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks, and it's starting to affect our store replenishment. I need to understand what's happening and what your team is doing to fix it.
> 
> [Scene: Westfield Retail, a major US retail chain. You are the account manager at a logistics company. Karen is their operations director. Goal: address her concerns about late deliveries and agree on a clear fix with next steps.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive in, I wanted to check in with you first — how are we looking on the app launch timeline? I heard there might be some risk on the iOS submission.
> 
> [Your team at a mid-size tech company is in your weekly status meeting. You are the PM leading the mobile app launch. Linda is your engineering lead. Goal: give your weekly status update and address any concerns.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see — two weeks is significant. The beta was supposed to give us real user feedback before the full launch, so launching without payments feels risky. Do you have a sense of how much longer the API integration would actually take if we kept the beta date?

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I've seen the numbers from Line 2 and they're up about 12% from last week. Before we dive in, I want to understand — are we looking at a specific batch of materials, or is this spread across all suppliers?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. The conversation is in your office. Goal: discuss the spike in defective cells on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 70 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "I can see the supplier change lines up with the jump, so holding those batches makes sense. But full inspection on 100% of cells — that's going to slow Line 2 down by at least two days. We're already behind on the Q3 volume target. What if we run a targeted sample check on the last three lots first, say 200 cells per lot, before we commit to full inspection?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific action, and asked for support — strong direct communication with a clear next step.
> 
> **How it went:** Great job leading with facts and a concrete request. You moved the conversation toward a decision quickly.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the purpose clearly early on with a specific reason and example, which builds credibility and helps Marcus understand the urgency.
> 
> **What to improve:**
> - You jumped to a solution without asking Marcus what he already knew or what constraints his team faces. Asking one question first ("How much delay can Line 2 handle this week?") would have let you tailor your proposal and show collaboration.
> - Your close was clear but didn't confirm a specific timeline for the next step. Adding "Can we decide by end of day?" would strengthen it.
> 
> **Also worth noting:** "I'd like to" is polite, but "I recommend" sounds more decisive in a quality issue where you're the expert.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after the supplier change. Before I propose next steps, how much delay can Line 2 handle this week? My recommendation is to hold the affected batches and inspect 100% of cells until we confirm the cause. Can we decide by end of day?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. The integration with your payment system is taking longer than we estimated—about two weeks longer. I'm not sure we can absorb that without pushing the go-live date.
> 
> [Your team at a fintech startup in San Francisco is meeting with Sam, a project lead from your vendor. He's just raised a delay risk on the payment integration you need for your product launch. Your goal: understand the problem, protect your timeline, and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is that your legacy API documentation doesn't match the current system—fields we expected aren't there, and the authentication flow is different from what we tested against. We had to rebuild our adapter from scratch.
> 
> To stay on schedule, we'd need two things: first, someone from your engineering team to pair with us for the next few days to clarify the live environment. Second, we'd need you to approve overtime for our team this weekend, which adds about eight thousand dollars to the sprint cost.

### S5 Clear switch: meeting opener to a project delay · BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're all looking forward to getting started.
> 
> [You are the lead project manager at Apple, kicking off a new mobile app launch. Over the past two weeks, your team has exchanged emails about requirements and timelines. Today's goal is to align everyone on the schedule and key features before development begins. Your next step is to send a summary to leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> I appreciate you flagging this early. Two weeks is a significant slip — can you walk me through the numbers? How many bugs are we talking about, and what's in your recovery plan?
> 
> [You are a senior engineer at Apple. David is your manager. The project is a new feature for the mobile app, originally due for handoff to the QA team next Monday. You discovered late-stage integration issues during regression testing. The conversation goal is to explain the delay, present options, and agree on a revised timeline.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're looking forward to getting aligned today.
> 
> [At Tesla, you're the lead PM for the launch of a new mobile app update. Over the past week, the team has exchanged several emails about feature priorities and timeline concerns. Today's goal is to confirm the schedule and assign owners so development can begin. The next step is to share the finalized plan with the US engineering team by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks is a real problem. We committed to the client for the end of this month. What does your recovery plan look like, and how much of that time can you actually get back?
> 
> [At Apple, you're a senior engineer reporting to David, your engineering manager. The project is a new feature for the Maps team, and the client is the product leadership group waiting for the quarterly review. David has not heard about the delay until now.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to run something by you. The quarterly review cycle is coming up, and I'd like to discuss my compensation. Based on the projects I've led this year—especially the client migration that came in under budget—I'm hoping we can talk about a raise that reflects that contribution."
> 
> [You're a senior team member at a mid-sized software company. David is your manager. The conversation is about asking for a raise, framed as a proportion of your current salary or a percentage increase.]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I appreciate you flagging this early. Three urgent projects at once is a lot for anyone. Walk me through what you're looking at and what you're thinking for order of priority.
> 
> [Maya is your manager at a tech company. You're a data analyst on her team. Goal: get support prioritizing three competing urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I hear you — finishing two well is better than rushing all three. The pricing analysis is tied to the board meeting on the 28th, so that can't slip. Between the Q4 forecast and the dashboard migration, which one do you think has more downstream impact if it waits?
> 
> [Maya is your manager at a tech company. You're a data analyst on her team. Goal: get support prioritizing three competing urgent projects without appearing overwhelmed.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, showed you could handle the workload, and invited collaboration on a tradeoff.
> 
> **How it went:** Great job — you came across as capable and solution-oriented, not overwhelmed.
> 
> **What worked:**
> - "I can finish two well" — this shows confidence in your capacity and frames the limit as a quality choice, not a personal failure. It also opens the door for your manager to help without you sounding helpless.
> 
> **What to improve:**
> - You didn't name which two you would choose or why. Offering your own recommendation first makes it easier for your manager to say yes and shows you're thinking strategically.
> - You could briefly mention what "well" looks like for each project, so the tradeoff is clearer.
> 
> **Also worth noting:** Your tone was appropriately direct. One small addition — "I've mapped out the timelines" — would signal even more control over the situation.
> 
> **Try this instead:** "I can finish two of these well this month. My recommendation is to keep the pricing analysis and the Q4 forecast on track, since the board meeting is fixed and finance needs the forecast for planning. The dashboard migration could move to early January without blocking other teams. Does that work, or do you see it differently?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> &lt;character name="Pat" gender="female"/&gt;
> 
> Thanks for making the time today. We're a mid-sized retail company, about 120 stores, and we're looking at your platform to help us manage inventory across all locations. Right now we're using spreadsheets and it's becoming unmanageable. I'm hoping you can walk me through how this would actually work for us.
> 
> [Pat is the operations director at a retail chain called Northgate Stores, based in Chicago. You're the customer success manager from a software company. Goal: understand their needs so you can configure the product correctly.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 85 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> The spreadsheet system is breaking down at two points: first, our store managers are updating stock numbers manually every evening, and second, our buying team in Chicago can't see real-time data when they place orders. Last month we had three situations where a popular item was sitting in one warehouse while another store had completely sold out. We're losing sales and frustrating customers.
> 
> [Hint: you could follow up with "How does that process work today?" or "What does 'real-time' mean for your team?"]

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I know the quarter-end deadline is tight, and we want to make sure you're getting clean numbers. Before we dive in, can you walk me through which reports are affected and how the totals are off? That'll help me understand the priority."
> 
> [You're a finance professional at a global firm. Marcus is the IT lead. The goal is to agree on which software bugs to fix first before your quarter-end audit.]
> [You can describe a different situation anytime.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 79 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: "I hear you on the auditor deadline — that's non-negotiable. The totals bug is in the export module, and my team can start on it Monday. But the formatting issues aren't just cosmetic; they break the report templates that the totals feed into. If we fix totals first and formatting second, we might need to rebuild the export twice. Would a two-day delay on the totals fix work if it lets us solve both in one pass?"

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. I've been looking into the AI proofreading tools you mentioned, and I have some thoughts. Before we go further, can you tell me what quality level you're aiming for? Academic texts and fiction need very different things.
> 
> [You're an editor at your publishing company. Maya is the engineering lead. Goal: discuss whether AI proofreading fits your books.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 113 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are actually the weakest spot for most AI proofreading tools right now. The model can flag spelling, but it won't know if a character name is intentionally unusual or if a medical term is correct in context. It might "correct" something that was already right.
> 
> For a pilot, we could run one manuscript through and have your team review every change. That would cost roughly two to three thousand dollars for setup and processing, depending on length. But honestly, I'd want to know more about your workflow first. Are your editors currently catching most errors, or are names and terms slipping through now?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> I hear you on the date, but the onboarding tutorial is a heavy lift right now. If we drop it, we can ship two weeks earlier and hit Q3. The core flow is solid, and users can figure it out.
> 
> [You are a PM at a tech company. Marcus is the engineering lead on your product team. You're discussing whether to cut the onboarding tutorial to meet the launch deadline.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 38 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's a fair point about drop-off. A simpler version might work if it still guides users through the core setup. What would "simpler" look like for you—fewer steps, or just the key actions without the walkthrough?

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-14 06:03 UTC

**PASS 17 · FAIL 2 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | FAIL | T3: sandwich steps < 2 (found partially agree, keep the discussion open, move forward together) |
| S1 Custom scene: client meeting | BLOCKING | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | BLOCKING | PASS | – |
| S3 Production defects: business level, feedback fits the scene | BLOCKING | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | BLOCKING | PASS | – |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | BLOCKING | PASS | – |
| S7 Manager 1:1: workload and priorities | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | PASS | – |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | PASS | – |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | – |  |
| D2 | FAIL | – |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Focus on learning before you try to change things. Here's how to use your first 90 days:
> 
> • **Map your place** — understand your role on the team, your team's role in the department, and the department's role in the company.
> 
> • **Learn the culture** — watch how fast decisions are made and whether they come from the top or from employees.
> 
> • **Find the right people** — identify who makes decisions, who can help you, and who might block progress. Build a good working relationship with your manager.
> 
> • **Seek mentors actively** — ask people for coffee or a short meeting. Don't wait for someone to assign you one.
> 
> • **Set a direction** — decide where you want your career to go, even if your long-term goal is outside this company. Let that guide what you learn.
> 
> A common mistake is trying to prove yourself too aggressively. Ask questions boldly while you're new, and learn from both coworkers and internal documents.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining, everyone. I'm looking forward to getting this project moving.
> 
> [This is a kickoff meeting at Tesla. You're the lead project manager for a new mobile app update. Over the past week, there have been emails going back and forth about requirements. Today's goal is to align on the schedule and main features before development begins. The team hopes to get sign-off from the US engineering team by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> **Course score: 5/5**: You covered all three ICE steps with specific details and a timed next step.
> 
> **How it went:** Strong, professional opening — the team knows who you are, why we're here, and how to take part.
> 
> **What worked:** Your context included past ("Over the past two weeks we've had a lot of emails"), present ("Today's goal is to agree on the schedule"), and future with a deadline ("send a timeline to leadership by next Friday"). Your expectations covered both interaction ("Please ask questions anytime") and level of detail ("this will be a detailed discussion").
> 
> **What to improve:** No major gap. One tiny refinement: naming your contribution beyond schedule — for example, "I'll manage the schedule and be the main point of contact for requirements" — helps people know who to reach for what.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this app launch. I'll manage the schedule and be your main point of contact for requirements. Over the past two weeks we've had a lot of emails about the main features. Today we'll align on the schedule and confirm the feature set, so that everyone is clear before development starts. The next step is to send a timeline to leadership by next Friday. Please ask questions anytime — this will be a detailed discussion."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new…

### C4 Menu path: greeting, then "1" · BLOCKING · PASS

**T1 [RP]** "Hello"
- ✓ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Let's practice a real workplace conversation. Reply with a number:
> 1. Start a meeting (easy)
> 2. Disagree with a coworker
> 3. Reject a late request
> Or describe your own situation.
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, thanks for setting this up. I'm looking forward to getting aligned on the new app project."
> 
> [You're leading a kickoff meeting at Apple in Cupertino. Sarah is on your cross-functional team. The project is a new internal app for tracking inventory. There were several email threads last week about requirements and timing. Today's goal is to confirm the schedule and main features so development can begin. The next step will be getting written sign-off from the US leadership team.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics / retail" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the retail operations lead for Greater China. I know we're all busy with Q4 prep, so let's make this count.
> 
> [Apple, Shanghai. You are D, a PM leading a kickoff with Sarah and the retail team. The goal: align on the holiday sales plan. Over the past two weeks, there have been emails going back and forth about inventory targets and promotional timing. Today you will confirm the schedule, align on key promotions, and identify any risks before the plan goes to leadership. The next step is to get written sign-off from the US team by next Monday so you can officially launch in stores.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Great, let's get started. I'm Sarah, the retail operations lead for Greater China. I've been with the team for four years and I'll be coordinating inventory and staffing across our stores for the holiday push. Looking forward to hearing your plan.
> 
> [You're a PM at Apple, leading a kickoff with the China retail team. Sarah is your retail operations counterpart. Goal: align on holiday sales planning and next steps.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> [I&amp;#039;ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> The ICE method gives you a clear structure to open meetings confidently:
> 
> **1. Introduction**
> - State the meeting topic
> - Say your name, role, and how you'll contribute
> 
> **2. Context**
> - Past: how you got here (emails, earlier work)
> - Present: today's topics and goal
> - Future: next step with a deadline
> 
> **3. Expectations**
> - How people should take part, or how detailed the meeting will be
> 
> Example for your CRM project:
> &gt; "Hi everyone, today we're kicking off the CRM integration for the sales team. I'm D, the PM, and I'll manage the schedule and requirements. We've had emails going back and forth for two weeks. Today we'll align on the rollout plan and key risks. Next, we'll send a timeline to leadership by next Friday. Please hold questions until the end — we'll go into detail on each phase."
> 
> As a PM at Google, your US team expects this structure. It shows control without sounding aggressive.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method to open with confidence and clarity:
> 
> **1. Introduction**
> - Meeting topic
> - Your name, role, and contribution
> 
> **2. Context**
> - Past: how you got here
> - Present: today's topics and goal
> - Future: next step with a deadline
> 
> **3. Expectations**
> - Level of interaction (questions now or later?)
> - Level of detail (high-level or deep dive?)
> 
> Example as a PM at Google:
> &gt; "Hi everyone, today we're reviewing the CRM rollout timeline. I'm D, the PM, and I'll guide us through the schedule and blockers. We've been iterating on requirements with the sales team for the past two weeks. Today we'll confirm the phases and flag any risks. After this, we'll share the final plan with leadership by Thursday. Let's keep this high-level — detailed specs are in the doc, and I'll take questions at the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee drinks first on the new menu redesign. It stays true to our brand heritage, and customers expect us to lead with what we're known for.
> 
> [At Starbucks headquarters. You're a product manager on the menu team. Bob is a senior marketing analyst. The team is deciding the order of items on the new in-store menu. Bob's proposal has a real strength—brand alignment—and a real weakness: iced frappuccinos are the summer best sellers. Your goal: disagree professionally and move toward a team decision.]
> 
> [Hint: you could honestly agree that brand heritage matters, then bring up the sales data.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich for disagreements:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand"
> 
> • **State your opinion with a reason** — use facts or data
>   - "but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales"
> 
> • **Keep it open** — invite alternatives
>   - "Are there other alternatives?"
> 
> Once the team decides, move forward together even if it wasn't your choice.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 114 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I appreciate that you're thinking about risk, but I'm not sure I follow—are you worried about the time to redesign the menu, or the time to roll it out? A smaller trial could work, though it might delay the launch by a few weeks. What kind of trial did you have in mind?
> 
> [At Starbucks headquarters. You're a product manager on the menu team. Bob is a senior marketing analyst. The team is deciding the order of items on the new in-store menu. Bob's proposal has a real strength—brand alignment—and a real weakness: iced frappuccinos are the summer best sellers. Your goal: disagree professionally and move toward a team decision.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** in this order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "This will be a detailed discussion" or "We'll keep this high level"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new logistics system. I'm Danny, lead PM, and I'll manage the schedule and be your main contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before development starts. We need sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, I wanted to flag something. The farm suppliers are pushing us to switch to pre-washed eggs for the whole supply chain. They say it'll cut our inspection time by 30% and reduce customer complaints about dirt. But I'm worried — washing removes the natural protective coating, so we might see more spoilage in transit. What do you think?"
> 
> [You're a PM at Google working on a food supply chain tool. Maya is a product analyst on your team. You're in a 1:1 in Mountain View, deciding whether to recommend pre-washed eggs to your cross-functional partners.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> • **Partially agree, honestly** — find something you can genuinely support
> • **State your own view with a specific reason** — use facts or data
> • **Keep it open** — friendly tone, ask about alternatives
> • **Move forward together** — once there's a decision, commit to next steps
> 
> Example:
> &gt; "I understand that the ML model could help us predict spoilage faster, and that would save labor costs. But our current data is mostly manual logs with inconsistent timestamps, so the model may give unreliable predictions at first. Could we run a pilot on one barn for two months before scaling?"
> 
> If the discussion gets tense, stay focused on tradeoffs (data quality, time, cost) rather than the person.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method to open meetings in three steps:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "This will be a detailed discussion" or "We'll keep this high level"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We hope to get written sign-off from the US team by next Monday. Please hold questions for the end, since we have a lot to cover."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play?

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> &lt;character name="Maria" gender="female"/&gt;
> 
> "So, I've been looking at the numbers from our suppliers. Washing eggs does reduce the risk of salmonella on the shell, but it also strips away the natural cuticle. That means the eggs spoil faster unless we refrigerate them immediately. For our operation, that adds a lot of cost and complexity. I'm leaning toward keeping the current dry-brushing process. What do you think?"
> 
> [You're a PM at Google working on a food-tech initiative. Maria is a food safety specialist on your team. You're in a conference room in Mountain View discussing whether to switch to washed eggs for a new smart-refrigerator pilot. The goal is to reach a team decision today.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** method when you disagree with a coworker's approach:
> 
> 1. **Partially agree, honestly**
>    - Find something you genuinely understand or accept in their view
> 
> 2. **State your own opinion with a specific reason**
>    - Use facts, data, or clear trade-offs
> 
> 3. **Keep the discussion open**
>    - Friendly tone, ask about alternatives
> 
> 4. **Move forward together once a decision is made**
> 
> Example for your situation:
> &gt; "I understand that an ML model could help us predict spoilage more precisely. But our current sensors already catch 94% of quality issues, and building a model would take at least two sprints we don't have before the harvest peak. Could we start with a simpler rule-based alert and revisit ML after the season?"
> 
> Tips for your context:
> - Lead with the business constraint (time, cost, or data availability)
> - Offer a concrete alternative, not just "no"
> - Ask a real question so your coworker can help solve it
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Rachel: "Thanks for making time today. I need to be direct — we've had three late deliveries in the past month, and it's affecting our production schedule. My manager is asking why we're still working with your company. I need to understand what's going wrong and what you're going to do about it."
> 
> [You're an account manager at a logistics firm. Your client is Rachel, operations lead at a mid-sized electronics manufacturer in Chicago. This is a video call; she's upset but hasn't cancelled the contract yet. Your goal: address the late deliveries, explain what happened, and keep the relationship.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;profile learner_role="PM" learner_industry="mobile apps / tech" learner_industry_source="inferred" learner_goal="give weekly status updates confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Hey — thanks for jumping on. I've got back-to-back meetings this afternoon, so let's make this quick. Where are we on the beta rollout?
> 
> [You're a PM at a tech company — likely a startup or a product team at a larger firm. Maya is a senior engineer on your mobile app launch. She's direct and busy, but she wants the project to succeed. This is your regular weekly sync; she expects clear progress, blockers, and what you need from her.]
> 
> ---
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
Profile sent: Role: PM. Industry: mobile apps / tech (guessed from the company). Learning goal: give weekly status updates confidently.
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Got it — 70% is solid. The payment API delay is rough though. Who's owning the follow-up with the vendor? And if we drop payments for the beta, what's the plan for handling transactions in the meantime?
> 
> [Hint: you could say "I'm following up with the vendor directly, and I'll have an answer by Thursday" or "If we launch without payments, we'll use a manual invoice process for the first two weeks."]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Hey, thanks for coming by. I've been looking at the numbers from Line 2 and they're not great — defect rate jumped from 2% to almost 6% since Monday. I'm under pressure to keep output up, but I also don't want to ship bad cells. What's your take on what's causing it?"
> 
> [You're a quality engineer at your company, an EV battery supplier. Marcus is the production manager. The conversation is in his office on Thursday afternoon. He knows the defect spike is real and wants to understand root cause and next steps, but he's worried about slowing production.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 72 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — okay, that's lower than what I saw, but still way above our line. A new supplier for which part, exactly? And when you say hold the batches, you're talking about everything from this week sitting in the warehouse, or also what's still on the line right now?"
> 
> [He wants specifics before committing resources. He's not pushing back yet, but he needs to know the scope to answer your request.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a clear action, and asked for specific support — strong quality-engineer communication.
> 
> **How it went:** You came in with facts and a concrete plan, which is exactly what a production manager needs to hear.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named the action, the scope, and the exit condition in one sentence.
> 
> **What to improve:** You didn't share which part changed or when, so Marcus had to ask for basic context he needs to decide. Also, "Can your team support that this week?" is a bit open — he doesn't know if you need people, line time, or overtime budget.
> 
> **Also worth noting:** Leading with the supplier change after he asked would feel more collaborative: "The timing lines up with the electrolyte supplier switch on Monday."
> 
> **Try this instead:** "The jump started right after we switched electrolyte suppliers on Monday. I'd like to hold all batches from Line 2 since then and run 100% inspection until we verify the root cause. That means pausing the line for two hours today to reallocate staff — can your team cover that shift?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> Yeah, so I need to flag something. The integration piece is taking longer than we estimated—about two weeks longer. That puts us at risk for the March 15th deadline.
> 
> [You're a project lead at a tech company in Seattle. Sam is your vendor's engineering manager. The goal: address the delay and agree on next steps.]
> 
> What do you want to know?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's mainly the API compatibility layer. We assumed your legacy system supported OAuth 2.1, but it's still on 2.0. Building the bridge is doable, just not work we scoped. To stay on schedule, we'd need either a two-week extension or someone from your team who knows that system inside out to work with us full-time for about ten days. Otherwise we're looking at March 29th.
> 
> What are you thinking?

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, UX designer on this project. Looking forward to hearing the plan.
> 
> [We're at Apple in Cupertino. You're the lead project manager kicking off a new fitness app feature. Over the past week, the product and engineering teams exchanged emails about user research findings. Today's goal is to align on the feature set and timeline. The next step is to get leadership sign-off by next Wednesday so development can start.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> Got it, new scene.
> 
> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the mobile app redesign. The leadership team is asking for an updated timeline for the marketing launch.
> 
> [We're at Tesla in Austin. You report to David, Senior Engineering Manager. The mobile app redesign was supposed to ship in three weeks for a marketing campaign. You've just learned the team needs two more weeks due to integration issues with the payment system. David doesn't know yet, and the marketing team has already booked ad spend.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks is a lot. The marketing team already committed the ad spend based on the original date. Walk me through what you're seeing and what recovery looks like.
> 
> [We're at Tesla in Austin. You report to David, Senior Engineering Manager. The mobile app redesign was supposed to ship in three weeks for a marketing campaign. You've just learned the team needs two more weeks due to integration issues with the payment system. David doesn't know yet, and the marketing team has already booked ad spend.]
> 
> [You can describe a different situation anytime.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need the GPS accuracy on the navigation module tightened from 2% error down to 1%. The integration testing starts in three weeks, and I need this locked in before then. Can you get that done?
> 
> [You're a senior engineer at Tesla in Palo Alto. David is your manager. The original spec was 2% error, which your team already hit. Now he wants 1% with the same deadline and no extra headcount. Goal: negotiate what you can actually deliver.]
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;profile learner_role="data analyst" learner_goal="ask for help prioritizing without sounding like I can't handle it"/&gt;
> 
> &lt;character name="Rachel" gender="female"/&gt;
> 
> Hey, come on in. I wanted to check in before the weekend — I know you've got a lot on your plate right now. How are things going with the customer churn model, the dashboard refresh, and that ad-hoc request from Sales?
> 
> [We're at a mid-size fintech company in Chicago. You report to Rachel, the analytics manager. She knows you're skilled but hasn't heard directly from you about workload tension. The goal: practice asking for prioritization help while showing you're proactive, not overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
Profile sent: Role: data analyst. Learning goal: ask for help prioritizing without sounding like I can't handle it.
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> That's exactly the kind of situation I want to hear about early — thanks for flagging it. The Q4 forecast is locked in with Finance, so that one can't slip. Between the dashboard migration and the pricing analysis, which one do you think has more downstream impact if it waits?
> 
> [Hint: you could say something like "The pricing analysis feeds into next month's strategy review, but the dashboard migration is blocking the marketing team's daily reporting."]

**T3 [RP]** "feedback"
Profile sent: Role: data analyst. Learning goal: ask for help prioritizing without sounding like I can't handle it.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You framed the problem clearly and proposed a collaborative solution that shows ownership.
> 
> **How it went:** Strong opening — you stated all three projects, showed you can handle two well, and asked to decide together rather than dumping the problem on Rachel.
> 
> **What worked:** "I can finish two well. Could we decide together which one can move to next month?" — this directly names your capacity honestly and invites shared prioritization without sounding helpless.
> 
> **What to improve:** You could strengthen the impact framing by briefly saying *why* the third project is the one to move, or what tradeoffs each delay would create. Rachel had to prompt you for that reasoning.
> 
> **Also worth noting:** "Could we decide together" is excellent — it positions you as a partner, not someone who needs rescue.
> 
> **Try this instead:** "I can deliver two of these with full quality this month. The pricing analysis has the most flexible timeline — it feeds January planning, so a two-week delay wouldn't block anyone. The dashboard migration is blocking Marketing's daily reports now. Would it make sense to push pricing to January so we keep the other two on track?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> 
> &lt;character name="Elena" gender="female"/&gt;
> 
> Thanks for setting this up. We're a mid-sized logistics company, about 400 people. We've been using spreadsheets and a few old tools to track shipments, but it's getting messy as we grow. Your sales team said your platform could help us get everything in one place, but I need to understand how that actually works for our team before I commit to a rollout timeline.
> 
> [Setting: You're the CSM at a SaaS company; Elena is the operations director at a regional logistics firm in Chicago. She has budget authority but needs team buy-in. Your goal: discover her current pain points, priorities, and constraints so you can propose a setup plan.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 114 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is juggling three different systems plus a shared spreadsheet for tracking shipments. Last month we had two cases where a client didn't get updated because someone forgot to copy the status over manually. That's the kind of thing that hurts our reputation. I'm hoping your platform can give us one place where everyone sees the same information in real time, without the manual copying.
> 
> The bigger picture is we're planning to expand to two more states next year, and I don't think our current setup can scale with that. But I also can't afford a six-month implementation—we need to be up and running before peak season starts.

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;profile learner_industry="finance" learner_industry_source="stated" learner_goal="lead audit software discussions with IT"/&gt;
> 
> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for flagging this. I've got three bug reports on my desk for the export module, and quarter-end is two weeks out. Walk me through what you're seeing—are the totals off by rounding, or are whole line items missing?"
> 
> [You're a finance manager at a mid-size firm in Chicago. Marcus runs the IT team supporting your audit tools. The goal is to agree on which bugs to fix first so your quarter-end numbers are clean.]
> 
> ---
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
Profile sent: Industry: finance. Learning goal: lead audit software discussions with IT.
- ✓ no feedback
- ✓ words ≤ 120: 86 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "I hear you on the auditor deadline. The totals bug is tricky—it's in the aggregation layer, so fixing it could break other export paths. The formatting fix is actually a quick win, maybe two days. If I pull my senior dev onto the totals bug now, we might not have time to test before the 15th. What if we run a parallel track: one person on formatting this week, and I find a contractor for the totals fix so we don't lose our own tester?"

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I think AI proofreading could save us a lot of time, but I'm worried about missing tone and nuance. What's your take as an editor?
> 
> [You're an editor at a publishing company. Maya is an engineering lead based in New York. Your goal: discuss whether AI proofreading tools could work for your books, weighing accuracy against quality.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 75 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are actually where most AI tools struggle—they're trained on common language patterns, so rare or proper nouns get flagged incorrectly or missed entirely. For a pilot, we'd need to budget about two weeks of my team's time to set up a custom dictionary and review the output against your team's corrections. What kind of error rate would you consider acceptable for a first test?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I think we need to cut the onboarding tutorial to hit the May 15 launch date. The core product is solid, but the tutorial still has bugs, and fixing them would push us out by at least two weeks. Users can figure out the basics without it.
> 
> [You're a PM at a tech company. Maya is the engineering lead. The product is a B2B SaaS platform launching May 15. She wants to cut the onboarding tutorial you believe is critical for adoption. Your goal: disagree and reach a team decision.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 57 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> I hear you on drop-off, but "simpler" still needs design, content, and QA time we don't have. What would you cut to make room for it? Or are you suggesting we move the date?
> 
> [Hint: keep the discussion open with a question, and be ready to suggest a specific alternative if she pushes back on scope.]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-14 06:19 UTC

**PASS 16 · FAIL 3 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | FAIL | T3: sandwich steps < 2 (found partially agree, keep the discussion open, move forward together) |
| S1 Custom scene: client meeting | BLOCKING | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | BLOCKING | PASS | – |
| S3 Production defects: business level, feedback fits the scene | BLOCKING | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | BLOCKING | PASS | – |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | BLOCKING | PASS | – |
| S7 Manager 1:1: workload and priorities | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | FAIL | T2: words ≤ 120 (124 words) |
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | PASS | – |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | PASS | – |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | – |  |
| D2 | FAIL | – |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 17 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • **Map your place in the organization**
>   - Your role in the team
>   - The team's role in the department
>   - The department's role in the company
>   - The company's place in its market
> 
> • **Be humble and learn proactively**
>   - Your past success doesn't guarantee success here
>   - Listen more than you push
>   - Ask questions boldly while you're new
>   - Read internal documents, not just talk to coworkers
> 
> • **Set a direction**
>   - Decide where you want your career to go
>   - Let that guide what you learn and which opportunities you pursue
>   - Even if your long-term goal is outside this company
> 
> • **Turn problems into goals**
>   - If networking or another skill is hard, make improving it a specific goal
>   - Practice consistently; experience builds mental frameworks
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah from the design team. I'm looking forward to hearing about the project kickoff.
> 
> [We're at Tesla headquarters in Austin. You're the lead project manager for a new mobile app for scheduling charging stations. Over the past week, there have been emails back and forth about requirements and timeline. Today's goal is to align on the schedule and main features so development can begin. The next step is to get sign-off from the US engineering team by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> **Course score: 5/5**: You covered all three ICE steps smoothly, with a timed next step and clear expectations for interaction and detail.
> 
> **How it went:** This was a strong, confident opening that gives the team exactly what they need to follow along.
> 
> **What worked:** Your context covered past ("a lot of emails about the main features"), present ("agree on the schedule"), and future ("send a timeline to leadership by next Friday"). You also set both parts of expectations well: "Please ask questions anytime" for interaction level, and "this will be a detailed discussion" for detail level.
> 
> **What to improve:** Nothing major. If you wanted to add one thing, you could briefly mention how you'll contribute beyond managing schedule— for example, "I'll also be the main point of contact for requirements."
> 
> **Also worth noting:** "Agree on" is fine; "align on" is slightly more common in US tech companies for this kind of meeting.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for the new app launch. I'll manage the schedule and be the main point of contact for requirements. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to align on the schedule. The next step is to send a timeline to leadership by next Friday. Please ask questions anytime—this will be a detailed discussion."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?
> 
> Watch th…

### C4 Menu path: greeting, then "1" · BLOCKING · PASS

**T1 [RP]** "Hello"
- ✓ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Let's practice a real workplace conversation. Reply with a number:
> 1. Start a meeting (easy)
> 2. Disagree with a coworker
> 3. Reject a late request
> Or describe your own situation.
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> "Hi everyone, thanks for joining. Today we're kicking off the new mobile app project. I'm Sarah, a product manager on the platform team, and I'll be coordinating between engineering and design."
> 
> [We're at Tesla in Austin. You're the lead project manager for a new in-car entertainment app. Over the past two weeks, the team exchanged emails about requirements and design mockups. Today's goal is to align on the schedule and main features before development begins. The next step is to get written approval from the Berlin team by next Friday. Sarah and three engineers are on the call.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for East China. I know we've got a lot of ground to cover before the holiday season kicks in.
> 
> [You're the lead PM running this kickoff at Apple. The retail team in Shanghai is joining to align on the holiday sales plan. Over the past two weeks, there have been emails going back and forth about inventory targets and promotional timing. Today's goal is to confirm the schedule, key markets, and any risks before the plan goes to leadership. The next step would be a written sign-off from the US team.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead meetings confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead meetings confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead meetings confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="tech" learner_industry_source="stated" learner_goal="lead meetings confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for East China. I know we're all busy with Q4 prep, so I'm glad we're getting aligned early on the holiday sales plan.
> 
> [Apple, Shanghai. You are D, a PM leading a kickoff with Sarah and the China retail team. The goal: align on the holiday sales plan. This is a meeting-opening practice.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"sound more confident leading meetings with US team","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"sound more confident leading meetings with US team","industry_source":"stated"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"sound more confident leading meetings with US team","industry_source":"stated"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"sound more confident leading meetings with US team","industry_source":"stated"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="stated" learner_goal="sound more confident leading meetings with US team"/&gt;
> 
> This is covered in the course:
> 
> The ICE method gives your opening a clear structure so you sound prepared and in control:
> 
> • **Introductions** — state the topic, your name and role, and how you'll contribute
> • **Context** — past (how you got here), present (today's goal), future (next step with a deadline)
> • **Expectations** — how people should participate, or how detailed the discussion will be
> 
> Example for your CRM project:
> 
> "Hi everyone, today we're kicking off the rollout plan for the internal CRM upgrade. I'm D, the PM for this project, and I'll be managing the schedule and requirements.
> 
> We've had a lot of email back and forth about priorities over the past two weeks. Today we need to agree on the phased rollout schedule and the training plan for each region. The next step is to send a summary to leadership by next Friday.
> 
> There are a lot of details, so please hold questions until the end of each section."
> 
> Tips:
> - Use sequencing words: "first… then… finally"
> - Name a deadline even if it's rough: "by end of week"
> - For expectations, either invite questions or set boundaries — both show confidence
> 
> Want to try this in a role-play where you lead the meeting opening?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I’ve saved your details to your profile …

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech. Learning goal: sound more confident leading meetings with US team.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method to open with clarity and confidence:
> 
> 1. **Introductions**
>    - One or two sentences on the meeting topic
>    - Your name, role, and how you'll contribute
> 
> 2. **Context**
>    - Past: how you got here (emails, earlier meetings, work done)
>    - Present: today's topics and goal
>    - Future: next steps with a deadline
> 
> 3. **Expectations**
>    - Level of interaction: "hold questions for the end" or "ask anytime"
>    - Level of detail: "this will be high level" or "we'll go deep into the data"
> 
> Example as a PM at Google:
> 
> "Hi everyone, today we're aligning on the CRM rollout timeline. I'm D, the PM, and I'll be driving schedule and requirements.
> 
> We've had email threads going back and forth for two weeks. Today we'll review the phased rollout and training plan, so we're all aligned before development starts. We need to send a summary to leadership by next Friday.
> 
> We have a lot to cover, so please hold questions until the end of each section."
> 
> Tips:
> - A deadline in the future step makes you sound prepared
> - Sequencing words ("first… then…") strengthen any step
> 
> Want to practice this in a role-play?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the new menu design. It stays true to our brand, and customers expect it when they walk in.
> 
> [At Starbucks headquarters in Seattle. You're a marketing manager on the menu redesign team. Bob is a senior product manager. The team is deciding how to order items on the new in-store menu boards. Bob's proposal has a real strength—brand identity—but there's also a real weakness you can point to. Hint: what can you honestly agree with about keeping traditional coffee prominent?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree while keeping the discussion open:
> 
> • **Partially agree honestly** — show you see their perspective
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a specific reason** — use facts or data when you can
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open with a question about alternatives**
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Once the team makes a decision, move forward together even if it wasn't your preference.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 72 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I appreciate that you see the brand value, but I'm not sure I follow—are you worried about the time to redesign the whole menu, or the time customers spend ordering? And what would a smaller trial look like?
> 
> [Bob sounds a bit defensive. He's asking for clarification, but he's still open. Keep the discussion moving: name the specific weakness in his proposal with data if you can, and suggest an alternative.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open a meeting in three steps:
> 
> **1. Introductions**
> - State the meeting topic in one or two sentences
> - Share your name, role, and how you'll contribute
> 
> *"Hi everyone, today we're kicking off the new egg-processing system rollout. I'm [name], the PM on this project, and I'll manage the schedule and be your main point of contact for requirements."*
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *"We've had emails going back and forth on the vendor options. Today we'll compare the two finalists and decide on equipment specs. We need to submit our choice to procurement by next Friday so installation stays on track."*
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions for the end" or "Feel free to interrupt"
> - **Detail level:** "We'll stay high level today" or "This will be a technical deep dive"
> 
> *"We have a lot to cover, so please hold questions until the final ten minutes."*
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","goal":"discuss whether or not we should wash eggs with a coworker","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss whether or not we should wash eggs with a coworker"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "I think we should wash all eggs before packaging. It looks more professional, and customers expect clean shells."
> 
> [You're a PM at Google working on a food-tech partnership with a major egg supplier. Maya is a food safety specialist on your team. You're in a 1:1 in Mountain View, deciding whether to require egg washing in the new supply chain standard. Goal: reach a decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming. Learning goal: discuss whether or not we should wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree or push back on a coworker's idea:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely understand or accept about their view
> 
> *"I understand that ML could help us predict demand more precisely, and it makes sense that the tech team wants to try it."*
> 
> **2. State your own opinion with a specific reason**
> - Use facts, data, or practical constraints
> 
> *"But we collect data manually right now, and the quality isn't consistent enough to train a reliable model. We'd need clean historical data for at least two seasons before ML adds real value."*
> 
> **3. Keep the discussion open**
> - Use a friendly tone and ask about alternatives
> 
> *"Are there simpler tools we could use first, like a basic forecasting spreadsheet, while we improve data collection?"*
> 
> **4. Move forward together**
> - Once you reach a decision, confirm next steps
> 
> *"So let's start with standardized data entry this quarter and revisit ML in six months. I'll draft the requirements by Friday."*

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> *"Hi everyone. Today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements."*
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> *"We've had emails going back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks. We hope to get sign-off from the US team by next Monday."*
> 
> **3. Expectations**
> - Level of interaction: *"Please hold questions for the end"* or *"Ask questions anytime"*
> - Level of detail: *"We'll keep this high level"* or *"This will be a detailed discussion"*
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","goal":"discuss whether or not we should wash eggs with a coworker","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="inferred" learner_goal="discuss whether or not we should wash eggs with a coworker"/&gt;
> &lt;character name="Priya" gender="female"/&gt;
> 
> "Hey, thanks for making time. I know we've both been looking at the egg-washing question for the new supplier contract. I'm leaning toward keeping the current unwashed standard — it's what our farms have always done, and the natural coating protects shelf life. But I heard you're thinking we should switch to washed? What's driving that?"
> 
> [You're a PM at Google working on a food-safety initiative with a supplier partner. Priya is a senior food-safety specialist on your team. The conversation is in San Francisco. Goal: reach a team decision on the egg-washing standard for the contract.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming (guessed from the company). Learning goal: discuss whether or not we should wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree productively with a coworker:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely understand or accept in their view
> 
> *"I understand that ML models could help us predict demand more precisely. That would reduce waste."*
> 
> **2. State your own opinion with a specific reason**
> - Use facts or data where possible
> 
> *"But our farm's data is limited — we only have two years of structured records. A simple regression might perform just as well and be easier to maintain. Do we have enough clean data to train a model properly?"*
> 
> **3. Keep the discussion open**
> - Friendly tone, ask about alternatives
> 
> *"Are there other ways to start smaller, like a pilot with one barn?"*
> 
> **4. Move forward together once decided**
> - Commit to the agreed path
> 
> *"Let's run the pilot for six weeks and compare accuracy."*

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Hi, I'm Rachel Chen, operations director at Westbridge Retail. I've got to be direct with you — we've had three late deliveries in the past month, and it's starting to affect our shelf stocking schedules. My regional manager is asking questions. I need to understand what's happening and what you're going to do about it.
> 
> [You are an account manager at a logistics company meeting with Rachel, a key client at Westbridge Retail in Chicago. She is unhappy about repeated late deliveries and wants answers and a fix.]
> 
> What would you like to say?

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> Hi, thanks for joining. I've got about twenty minutes before my next call, so let's hear where we stand.
> 
> [You're a PM at a tech company. Maya is a senior engineer on your mobile app launch team. She missed last week's sync and wants to know if the launch is still on track for March 15. Your goal: give your weekly status update and flag any blockers that need her attention.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Thanks for the update. 70% sounds right from our side. The payment API delay is frustrating—we've been waiting on their sandbox access since January.
> 
> On the beta date, what's your current thinking? Moving it gives us time to integrate properly, but marketing already announced March 1 to our pilot users. Launching without payments protects the date, but we'd need a fast-follow plan.
> 
> [You can describe a different situation anytime.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Maya" gender="female"/&gt;
> 
> Maya: Hey, thanks for coming by. I've been looking at the numbers from this week and they're not great. Line 2's defective cell rate jumped from 2% to almost 7%. That's way above our internal limit. What do you think is going on?
> 
> [You're a quality engineer at your EV battery supplier company. Maya is the production manager. The goal: discuss the defect spike on Line 2 and agree on next steps.]
> 
> ---
> 
> Want to try again, or pick a new scene?

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Maya: I hear you — a supplier change followed by a jump that big, that's a clear signal. Holding the batches makes sense to me. Full inspection on Line 2 though, that's going to pull people off the other lines. Can you tell me how long you think we need to run 100% check? And what kind of confirmation from the supplier side would let us go back to normal sampling?
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a clear action, and asked for support — strong structure for a quality escalation.
> 
> **How it went:** You came in with facts and a plan, which is exactly what a production manager needs to hear.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named the specific action and the condition for ending it, which shows you're managing risk without an open-ended commitment.
> 
> **What to improve:** You didn't share the timeline or resource estimate Maya would need to say yes. A production manager's first question is always "for how long and with how many people?"
> 
> **Also worth noting:** "Can your team support that this week?" is polite but slightly soft. In a defect escalation, you're asking for a commitment, not checking availability.
> 
> **Try this instead:** "Based on our past supplier changes, I'd like to run 100% inspection for five days. That means two extra inspectors on Line 2. Can you assign them starting tomorrow? I'll update you daily and we can drop back to normal sampling once we get three consecutive clean lots."
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, but I'm flagging it now so we can figure it out together. The integration testing is taking longer than we estimated—about thirty percent longer—and that's pushing everything back. We might miss next month's deadline unless we change something.
> 
> [You're a project manager at your company, running a weekly check-in with Sam's team, an external vendor. The project is a new customer portal. Goal: get Sam back on track or renegotiate the timeline.]
> 
> What do you want to know first?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main bottleneck is the API handoff with your internal billing system—your team's documentation was incomplete, so we spent two weeks reverse-engineering instead of building. To stay on schedule, we'd need two dedicated engineers from your side for the next three weeks, plus a signed-off requirements doc by this Friday. Otherwise, we're looking at a six-week slip.
> 
> [Hint: you could ask Sam about the documentation gap, push back on needing your engineers, or explore what a six-week slip would mean for the project.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, and I'll be supporting the marketing side on this project. Looking forward to working with you all.
> 
> [You're at Tesla in Austin. You're the lead project manager for the mobile app redesign. Over the past week, the team exchanged several emails about scope and timeline. Today's goal is to align on the feature list and delivery schedule. The next step is to present the plan to leadership for approval by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the mobile app redesign before I head to my next meeting.
> 
> [You're still at Tesla in Austin. David is your manager. He knows the project was supposed to ship in three weeks, but he hasn't heard any updates yet. He seems relaxed and open to conversation.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is significant, though. Walk me through what you're seeing in testing and what your recovery plan looks like.

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to run something by you before the end of the week."
> 
> [You're a senior engineer at Rivian. David is your manager. The conversation is in his office at the Irvine headquarters. You've been leading the battery thermal management module, and the team just finished Phase 1 two days ahead of schedule. You want to ask for a proportion of the saved time to be allocated to reducing technical debt that the team has flagged for months. Goal: get David to agree to a specific allocation, like 30% of the saved buffer.]
> 
> ---
> 
> What would you like to say to David?

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;profile learner_role="data analyst" learner_goal="ask for help prioritizing without sounding like I can't handle it"/&gt;
> 
> &lt;character name="Linda" gender="female"/&gt;
> 
> Hey, come on in. I wanted to check in before the weekend — I know you've been pulling a lot of weight lately. How are things feeling across your projects?
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Linda is your manager, two levels up, friendly but direct. She values ownership but also wants to prevent burnout. Goal: practice asking for help prioritizing three urgent projects without undermining your capability.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
Profile sent: Role: data analyst. Learning goal: ask for help prioritizing without sounding like I can't handle it.
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> That makes sense — I know the Q4 forecast came in from Finance last-minute, and the pricing analysis got bumped up because of the competitor move. The dashboard migration was already on the roadmap.
> 
> Here's my worry: if we push the pricing analysis to next month, Sales will be flying blind on the new tier. But the Q4 forecast has a hard board deadline. What's your read on where the risk is highest if something slips?
> 
> [You named the projects clearly, showed you can handle two, and asked to decide together — good start. Linda's testing whether you've thought through the business impact.]

**T3 [RP]** "feedback"
Profile sent: Role: data analyst. Learning goal: ask for help prioritizing without sounding like I can't handle it.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You framed the problem as a shared decision and showed ownership without pretending you can do it all.
> 
> **How it went:** This was a strong, professional opening — you came prepared with specifics and a clear ask.
> 
> **What worked:** "I can finish two well" — this signals capability and sets a realistic boundary. "Could we decide together which one can move to next month" — you invited collaboration rather than dumping the problem on Linda.
> 
> **What to improve:** You could strengthen it by adding a brief business impact or your own recommendation. Linda had to pull out the risk question herself. A small gap: you didn't name which two you'd prioritize or why, which would show strategic thinking.
> 
> **Also worth noting:** "All three are due this month" is factual, but pairing it with "and I'm concerned about quality if we try to hit all three" adds honest stakes without sounding overwhelmed.
> 
> **Try this instead:** "I'm confident I can deliver the Q4 forecast and the pricing analysis to standard this month. The dashboard migration has more flexibility on timing — would moving that to January work, or is there another way you'd want to sequence these?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="lead client discovery meetings confidently"/&gt;
> 
> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi there—thanks for making the time. I'm Priya, VP of Operations at Meridian Logistics. We signed up for your platform last month, and honestly, we're still figuring out exactly how it fits into our workflow. My team is spending a lot of time manually tracking shipments across three different systems, and our customer service reps are fielding complaints about delayed notifications. I know your product has automation features, but I'm not sure where to start or what we'd need to configure on our end.
> 
> [Meridian Logistics, based in Chicago. You are the customer success manager for a supply-chain software company. Priya is a new client with operational pain points and some uncertainty about implementation. Your goal: understand her needs through questions before recommending a setup.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✗ words ≤ 120: 132 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Good question. Right now, my operations team is pulling shipment data from our TMS, our carrier portals, and a shared Excel sheet that someone updates manually every morning. It's slow, and last week we sent a customer the wrong delivery window because two systems had different timestamps. 
> 
> The main thing I want is to stop the manual work and get one place where everyone sees the same information in real time. But I also need to understand what "real time" actually means on your platform—does that mean updates every hour, every minute? And what happens when a carrier's system goes down?
> 
> [You're doing well—open-ended questions help Priya explain the full picture. Keep following up on specifics: team size, who else is affected, and what "done" looks like for her.]

**Attempt 2**

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="lead client discovery meetings confidently"/&gt;
> 
> &lt;character name="Elena" gender="female"/&gt;
> 
> Hi there, thanks for making the time. I'm Elena — I head up operations at Northfield Logistics. We just signed with your platform last month, and honestly, we're still figuring out exactly how it fits into our day-to-day. Our old system was pretty manual, so the team has mixed feelings about switching. I'm hoping you can help me map out what we actually need before we go live.
> 
> [Northfield Logistics, a mid-size freight company based in Chicago. You're the customer success manager from the software vendor. Elena's goal: understand whether the product can handle her team's workflow without adding complexity. Your goal: ask questions to understand her needs and priorities before implementation.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✗ words ≤ 120: 124 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Good question. Right now, our dispatch team tracks shipments in three different places — a shared spreadsheet, email threads, and this old internal tool that crashes half the time. It's a mess. Last quarter, we had two major misroutes because someone was looking at the wrong version of the schedule.
> 
> What I'm hoping for is one place where everyone sees the same real-time status. But here's my worry — my dispatchers aren't exactly tech-savvy. If your platform adds steps or feels slower than what they know, they'll just go back to their spreadsheets on the side. So I need to know: can your system match or beat the speed they're used to, and what does training actually look like in the first two weeks?

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Hi there—thanks for flagging this. I know quarter-end is coming up fast, and I want to make sure we're fixing the right things first. Can you walk me through what you're seeing with the export totals? Which reports are affected, and how far off are the numbers?
> 
> [You're a finance manager at your company. Maya is the IT lead. You're in her office or on a video call. Goal: agree on a priority order for bug fixes before the audit deadline.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 64 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> That makes sense—the numbers have to be right before anyone looks at how pretty the report is. Just so I can scope this properly, which specific exports are showing the wrong totals? Is it all of them, or certain modules like AP, AR, or the consolidation?
> 
> [Hint: naming the affected areas helps her assess effort and confirm she's fixing the right thing first.]

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;profile learner_role="editor" learner_industry="publishing" learner_industry_source="stated" learner_goal="discuss AI proofreading for books with engineering lead"/&gt;
> &lt;character name="Maya" gender="female"/&gt;
> 
> I think we could save a lot of time, but I'm not sure the quality is there yet. What's your take?
> 
> [You're an editor at Penguin Random House in New York. Maya is the engineering lead for the internal tools team. She knows the tech but is cautious about book-quality standards. Goal: explore whether AI proofreading fits your workflow.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
Profile sent: Role: editor. Industry: publishing. Learning goal: discuss AI proofreading for books with engineering lead.
- ✓ no feedback
- ✓ words ≤ 120: 87 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a fair concern. Names and technical terms are exactly where these models trip up — they can "hallucinate" corrections that look right but change the meaning. For a pilot, we'd need to build a custom glossary and set up a review layer so your team checks flagged items, not the AI deciding alone. Rough estimate: two engineers for three weeks, plus API costs. Maybe $15K to get meaningful data on one title.
> 
> What level of accuracy would you need to see to consider rolling it out further?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I think we should drop the onboarding tutorial for launch. It's the biggest chunk of work left, and without it we hit the date with buffer. Users can figure out the basics from the UI.
> 
> [You're a PM at a SaaS company. Maya is the engineering lead in San Francisco. The product launches in three weeks. Goal: resolve the scope disagreement and decide what ships.]
> 
> ---
> 
> What do you think?

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 50 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> I hear you on drop-off, but "simpler version" still needs design, content, and QA — that's easily another week we don't have. The UI is clean enough that most users navigate it fine in our internal tests.
> 
> What would this simpler version actually look like, and who would build it?

</details>
