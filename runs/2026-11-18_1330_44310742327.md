# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 3 runs each · 2026-11-18 13:30 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C1 Out of scope (Coach) | 3/3 |
| C2 Coach starter: first 90 days | 3/3 |
| C3 Scene card: Start a meeting, then a full ICE opening | 3/3 |
| C4 Menu path: greeting, then "1" | 3/3 |
| C5 Custom scene with profile (non-blocking) | 2/3 |
| C6 Profile save, then use (Coach) | 3/3 |
| D1 Mode switch: Role-play → Coach → back | 3/3 |
| D2 Background in passing, workplace change, and lessons applied only when they fit (non-blocking) | 3/3 |
| S1 Custom scene: client meeting | 3/3 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 3/3 |
| S3 Production defects: business level, feedback fits the scene | 3/3 |
| S4 Mid-meeting: "We're already halfway through" | 3/3 |
| S5 Clear switch: meeting opener to a project delay | 3/3 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 3/3 |
| S7 Manager 1:1: workload and priorities | 3/3 |
| S8 Discovery: customer success exploring client needs | 3/3 |
| O1 Optional: finance and IT on audit-software bugs | 3/3 |
| O2 Optional: editor exploring AI proofreading with engineering | 2/3 (1 flaky) |
| O3 Optional: PM and engineering disagree on launch scope | 3/3 |
| **Total (first try)** | **55/57** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | staging |
|---|---|
| C5 | 2/3 · baseline 0% |
| D2 | 3/3 · baseline 0% |

## Runs
- staging-1: GREEN · PASS 17 · FAIL 1 · FLAKY 1 · ERROR 0
- staging-2: GREEN · PASS 19 · FAIL 0 · FLAKY 0 · ERROR 0
- staging-3: GREEN · PASS 19 · FAIL 0 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 13:16 UTC

**PASS 17 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | PASS | – |
| S1 Custom scene: client meeting | BLOCKING | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | BLOCKING | PASS | – |
| S3 Production defects: business level, feedback fits the scene | BLOCKING | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | BLOCKING | PASS | – |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | BLOCKING | PASS | – |
| S7 Manager 1:1: workload and priorities | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | PASS | – |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | FLAKY | passed on rerun; first try: T2: words ≤ 120 |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | 0% (10 runs) |  |
| D2 | PASS | 0% (2 runs) |  |

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
- ✓ list items ≥ 2: 4 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> • **Learn first.** Focus on understanding your role, your team's role, and how the department fits the company. Ask questions while you're new — people expect it.
> 
> • **Study internal documents.** Read org charts, project plans, and past performance reviews to learn how things really work.
> 
> • **Decide your direction.** Think about where you want your career to go. Let that guide what skills you build and which opportunities you take, even if your long-term goal is outside the company.
> 
> • **Stay humble.** Don't assume what worked before will work here. Listen more than you push.
> 
> Example: "In my first month, I met with each teammate to understand their work, then mapped how our projects connect to the sales team's goals."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this kickoff. I'm ready when you are.
> 
> [We're at Apple. The team is launching a new app for store inventory. Over the past two weeks, there have been emails going back and forth about requirements and timing. Today's goal is to align on the schedule and main features before development begins. The next step will be getting sign-off from the US team. You're the lead project manager running this meeting.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, that's helpful.
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and gave a specific deadline for the next step.
> 
> **How it went:** This was a strong, complete meeting opening—your team would know exactly why they're here and how to take part.
> 
> **What worked:** Your context covered past ("we've had a lot of emails"), present ("agree on the schedule"), and future ("send a timeline to leadership by next Friday"). You also set both interaction ("ask questions anytime") and detail level ("detailed discussion") expectations.
> 
> **What to improve:** No major gap. Your introduction was slightly brief—you could add how long you've been on the team or what else you'll manage.
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails going back and forth" sounds a touch more natural.
> 
> **Try this instead:** "Hi everyone, I'm Lee. I've been with the team for two years and I'm the lead PM for this launch. I'll manage the schedule and be the main point of contact for requirements."
> 
> Want to try again without cues, doing all three steps in one go?

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
> 
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Thanks for organizing this. I'm ready when you are.
> 
> [You're a project manager at Apple, kicking off a new fitness app feature with the design and engineering leads. Over the past week, the team exchanged emails about user research findings. Today's goal is to align on the feature set and timeline. The next step is to share a proposal with the health team by next Wednesday.]
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
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this. I'm ready when you are.
> 
> [You are a PM at Apple. The meeting is in Shanghai with Sarah, a retail operations lead, and her team. You've asked them here to align on the holiday sales plan. Sarah knows last year's numbers but needs clarity on this year's priorities and timeline.]
> 
> [Start with your introduction.]

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
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this, D. I'm ready when you are.
> 
> [You're a PM at Apple, leading a kickoff with Sarah from the China retail team. Over the past two weeks, there have been emails about the holiday sales plan. Today's goal is to align on the promotional calendar and inventory targets. The next step is to share a finalized plan with regional leadership by next Friday.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE method** to open meetings with a clear structure. It gives you a script, so you sound prepared and in control.
> 
> • **Introductions**: state the topic, your name/role, and how you'll contribute  
>   *"Today we're aligning on the CRM rollout. I'm D, the PM, and I'll guide priorities and next steps."*
> 
> • **Context**: past, present, future with a deadline  
>   *"We've had emails going back and forth on requirements for two weeks. Today we'll confirm the timeline and flag blockers. The goal is to send leadership a signed-off plan by next Friday."*
> 
> • **Expectations**: set interaction and detail level  
>   *"Please hold questions until after each section so we stay on track. We'll keep this high level—detailed specs are in the doc."*
> 
> As a PM at Google, you can also add one line about why the meeting matters to the team or product area.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you want help with another part of leading meetings—like handling interruptions or closing with action items?

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech. Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open meetings with confidence and clarity.
> 
> • **Introductions**: one or two sentences on the topic, then your name, role, and contribution
>   *"Hi everyone, today we're kicking off the CRM integration. I'm D, the PM, and I'll be managing the schedule and requirements."*
> 
> • **Context**: past, present, future — always with a sense of time
>   *"We've had emails going back and forth on requirements for two weeks. Today we'll confirm the timeline and flag risks. The goal is to get leadership sign-off by next Friday."*
> 
> • **Expectations**: how people should participate and how detailed you'll get
>   *"Please hold questions until the end so we stay on track. We'll keep this high level — detailed specs are in the doc."*
> 
> As a PM at Google, your team expects a clear goal and a deadline. The ICE structure gives you both.
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
> I think we should list our traditional coffee first on the menu. It stays true to our brand, and a lot of our long-time customers come in specifically for the dark roast.
> 
> [At Starbucks headquarters in Seattle. You're a product manager on the menu team. Bob is a senior colleague who has been here for six years. The team is finalizing the new in-store menu layout before it goes to print next week.]
> 
> Hint: think about what you can honestly agree with—his brand point, or his customer point—before you share your own view.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.

> This is covered in the course:
> 
> Use the **feedback sandwich** method:
> 
> • **Partially agree honestly** — show you understand their view
>   - "I understand that…"
>   - "It makes sense that…"
>   - "I can see why…"
> 
> • **State your opinion with a specific reason** — use facts or data if you have them
>   - "but our iced frappuccinos are our best sellers during the summer"
> 
> • **Keep it open** — invite alternatives with a question
>   - "Are there other alternatives?"
>   - "What do you think about trying…?"
> 
> • **Move forward together** — once the team decides, support it
> 
> **Example:**
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Want to practice this? Tap the mode menu at the top right and choose Role-play.

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 65 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timing—next week is tight. But this isn't a new campaign, it's just the menu order. We've already tested the layout in two stores last quarter, and traditional-first performed okay, not great.
> 
> What kind of smaller trial did you have in mind? And what data are you seeing that makes you concerned about going with the traditional approach now?

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - State the meeting topic in one or two sentences
> - Share your name, role, and how you'll contribute
> 
> *Example:*
> &gt; "Hi everyone. Today we're kicking off Project Hippo. I'm Danny, the lead PM. I'll manage the schedule and be the main point of contact for requirements."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example:*
> &gt; "We've had emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks. We hope to get written sign-off from the US team by next Monday."
> 
> **3. Expectations**
> - **Interaction:** hold questions for the end, or invite them anytime
> - **Detail level:** high-level overview or detailed technical discussion
> 
> *Example:*
> &gt; "We have a lot to cover and limited time, so please hold questions until the end."
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
> "Thanks for setting this up. I've been looking at the data from our suppliers, and honestly, I'm leaning toward keeping the current no-wash policy. The shell's natural coating protects against bacteria, and the European suppliers we work with have lower contamination rates without washing. What's your take?"
> 
> [You and Maya are both PMs at Google. You're discussing a proposal for a new egg-sourcing standard for the company's food program. Maya favors the current no-wash approach. Your goal is to reach a team decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - State the meeting topic in one or two sentences
> - Share your name, role, and how you'll contribute
> 
> *Example:*
> &gt; "Hi everyone. Today we're reviewing ML models for predicting egg quality. I'm the lead PM. I'll guide us through the model options and gather your input on which to pilot."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (data collection, earlier tests)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example:*
> &gt; "We collected six months of grading data and tested two prototypes last quarter. Today we'll compare accuracy, cost, and integration effort. We need to choose one model to deploy by the end of next month."
> 
> **3. Expectations**
> - **Interaction:** hold questions for the end, or invite them anytime
> - **Detail level:** high-level overview or detailed technical discussion
> 
> *Example:*
> &gt; "This will be a detailed technical review, so feel free to interrupt if something isn't clear."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for taking this call on short notice. I'm Rachel, operations lead at Westbridge Retail. We've been seeing consistent delays on our Asia-Pacific shipments—three of the last four deliveries missed the committed window by two to three days. My store teams are having to explain this to customers, and it's starting to hurt our business. I need to understand what's going wrong and what you're going to do about it.
> 
> [You are an account manager at a logistics company. Rachel is a key client at Westbridge Retail, a mid-sized retail chain based in Chicago. She called this meeting after repeated late deliveries on her APAC routes. She wants accountability and a fix with a clear timeline.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Morning. Ready when you are — the team's on the call."
> 
> [You're a PM at a tech company. Rachel is your engineering lead. It's Monday, and the team is waiting for your weekly status update on the mobile app launch. The app is scheduled to go live in six weeks. Last week, the iOS beta testing started, but three critical bugs were found. The Android build is still in QA. Marketing wants final screenshots by Friday for the app store pages.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Thanks for the update. The payment delay is rough — the vendor committed to last Friday and now they're saying end of month. Before we talk options, where does that leave the iOS beta bugs? We had three critical ones, and QA was waiting on a new build."
> 
> [The learner is practicing a weekly status update. They're doing well: clear progress, a specific blocker, and a proposed agenda. Rachel is asking a natural follow-up to keep the update moving. No hint needed.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Hey, thanks for coming by. I've been looking at the numbers too, and honestly I'm not sure what's driving it yet. The line's been running the same parameters all month."
> 
> [You're a quality engineer at an EV battery supplier. Marcus runs production on Line 2. The conversation is in his office near the factory floor. Goal: understand the defect spike and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 52 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "Four percent? That's way beyond our acceptable threshold. Let me check the schedule... we're already behind on the Q3 contract, and 100% inspection would slow us down to maybe sixty percent of normal throughput. What exactly are you seeing in the defect data? Is it all the same failure mode, or mixed?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1er4y1Y7VC/

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific containment action, and asked for support with a time frame.
> 
> **How it went:** Marcus pushed back on throughput, which gave you a chance to negotiate, but the scene ended before you could address his concern or close with a next step.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you connected the change to the result with specific numbers, which builds credibility. "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named a clear action with an exit condition.
> 
> **What to improve:** You didn't address Marcus's throughput worry or offer a tradeoff. In situations with competing priorities, acknowledge the impact and propose a compromise or timeline. Also, you didn't set a specific follow-up time to review the inspection results.
> 
> **Also worth noting:** "Can your team support that this week?" is good, but pairing it with "I'll check in with you Thursday to see how the line is running" would show you're managing the risk together.
> 
> **Try this instead:** "I know 100% inspection will slow throughput to about sixty percent. If we limit it to the last three batches from the new supplier, we can keep the rest of the line moving. I'll review the data daily and update you by Thursday at 3 PM. If the defect rate stays above 2%, we expand the hold. Does that work?"
> 
> Watch the lesson: ▶️ https://www.bilibi…

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, but I'm looking at our current velocity and the remaining work, and I'm honestly not sure we'll hit the March 31st deadline. We've hit some integration issues with your API that we didn't estimate for.
> 
> [You're a PM at a tech company, meeting with Sam, a vendor team lead. The project is a platform integration, and you're already reviewing status updates. Sam has just dropped a delay warning and is waiting for your response.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The API rate limits are tighter than your documentation showed. We're having to batch requests differently, and that's added about forty hours of rework. We also need someone on your side to confirm the data mapping for the new fields in the user profile module— we've been waiting three days on that.
> 
> If we can get that mapping confirmed by tomorrow and maybe add one of your backend engineers to our Slack channel for real-time questions, I think we can claw back most of the time. Otherwise I'm looking at pushing the deadline to April 15th.
> 
> [He's answering directly and offering a path forward, but also anchoring an alternative deadline. What do you want to push on or offer?]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this kickoff. I'm ready when you are.
> 
> [You're the lead project manager at Tesla, joining a video call with Sarah (engineer, based in Austin) and the broader team. The project is a new mobile app for vehicle diagnostics. Over the past week, there have been several email threads about requirements and timing. Today's goal is to align on the schedule and key features before development begins. The team needs to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> I was just about to ask you for a status update on the Phoenix rollout. Perfect timing—what's the latest?
> 
> [You're a senior project manager at Tesla reporting to David, your engineering director in Palo Alto. The Phoenix rollout—a new diagnostic tool for service centers—was originally scheduled to go live in three weeks. You've just learned from your team that integration testing is taking longer than expected, and the realistic launch date is now five weeks out. David has a quarterly review with the VP next week and needs accurate dates.]
> 
> What can you tell me?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Two weeks. That's a significant slip, and the VP is expecting a firm date at the quarterly review. Walk me through the bugs and your recovery plan. How confident are you in these numbers?
> 
> [David sounds concerned but not angry. He wants specifics before he takes this upward.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, got a minute? I wanted to run something by you before the quarterly planning meeting tomorrow."
> 
> [You're a senior engineer at a mid-sized software company in Austin. David is your manager. The company just landed two major clients, and your team is already at capacity. You've been asked to lead a third initiative, but you want to negotiate for a proportion of the revenue or a bonus tied to the new client's success, since taking it on means delaying your current projects. David has budget pressure from above but also wants to keep you motivated.]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Thanks for setting this up. I wanted to check in—how are things going with the three projects you're on right now?"
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Maya is your manager, direct but fair. She values people who flag problems early with solutions. Goal: practice asking for help prioritizing while showing you can handle responsibility.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That makes sense. The Q4 forecast is locked in with Finance for the board review on the 22nd, so that one can't move. Between the dashboard migration and the pricing analysis, which one feels like it would lose the most if it slipped?"
> 
> [Maya is listening and open to your input. She wants to see you think through the tradeoffs, not just pass the decision to her.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific solution, and kept ownership of the work.
> 
> **How it went:** Strong opening—Maya had the information she needed and you sounded capable, not overwhelmed.
> 
> **What worked:** "I can finish two well" shows confidence and sets up the tradeoff honestly. "Could we decide together" frames her as a partner, not a rescuer.
> 
> **What to improve:** You could add a brief reason why two is the limit—e.g., "each needs about two weeks of focused work"—so she understands the constraint is real, not just preference.
> 
> **Also worth noting:** Naming which two you'd choose and why, then asking if she agrees, shows even more strategic thinking.
> 
> **Try this instead:** "I'm on the Q4 forecast, dashboard migration, and pricing analysis, all due this month. Each needs about two weeks of focused work to do well. My view is we keep the forecast and pricing analysis on track, and move the dashboard migration to January. Does that work for you?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_company="a software company" learner_industry="software" learner_industry_source="stated" learner_goal="lead client discovery meetings effectively"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. We're about two weeks away from our go-live date and honestly, we're not sure if we're ready. My team has been using spreadsheets for everything, and some people are worried the new system will slow them down.
> 
> [You're a customer success manager at a software company. Maya is the operations director at a mid-sized logistics firm in Chicago. She's meeting you for the first time. Her company bought your platform to replace manual tracking, but adoption is uncertain. Your goal: understand her team's real concerns and what success looks like so you can set up the product correctly.]
> 
> What would you like to know?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Company: a software company. Industry: software. Learning goal: lead client discovery meetings effectively.
- ✓ no feedback
- ✓ words ≤ 120: 108 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're tracking shipments through a shared spreadsheet that four people update daily. It's been fine for two years, but last month we had three misrouted deliveries because someone overwrote another person's entry. That cost us about twelve thousand dollars in penalties and one major client called to complain.
> 
> I'm hoping your platform gives us one place where everyone sees the same data in real time, so mistakes like that don't happen again. But I need to be honest — my warehouse supervisor, Tom, has been doing this his way for eight years. He's not excited about learning something new.
> 
> What else would help you understand our situation?

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for flagging this. I know quarter-end is tight. Before I pull my team into this, can you walk me through exactly what's going wrong with the exports and how it's blocking your audit timeline?"
> 
> [You're a senior finance analyst at your company. Marcus is the IT lead. You're in his office or on a video call. Goal: agree on which bugs to fix first and by when, so your audit numbers are clean before the deadline.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 101 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "I hear you on the auditor deadline. The wrong totals are definitely the bigger fire. Here's my concern though — the formatting issues and the totals bug might be tied to the same root cause in how the export module pulls from the database. If we fix totals now and formatting later, we might end up doing the work twice."
> 
> "What if we spend two days diagnosing first, then split the fixes? Or I could put two engineers on it full-time and try to knock out both before the 15th. What's your risk tolerance if we find out they're separate issues?"

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Alex" gender="male"/&gt;
> 
> Thanks for reaching out. I've been looking into AI proofreading tools for a while, so I'm glad we're having this conversation. Before I share my thoughts, can you tell me what made you consider this now? Are you looking at cost, speed, or quality issues with your current process?
> 
> [You're an editor at a publishing company. Alex is the engineering lead. The company is Penguin Random House in New York. The goal is to discuss whether AI proofreading could work for your books.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✗ words ≤ 120: 128 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are exactly where most AI tools struggle right now—they're great at catching grammar and consistency, but they can "correct" a proper name that looks unusual, or miss a term of art in a specialized field.
> 
> For a pilot on one book, I'd estimate two to four weeks of setup: choosing the tool, training it on your style guide, and building a feedback loop so your team can flag errors quickly. Cost depends on whether we use an API or a managed service, but roughly $5,000 to $15,000 for the first book, including my team's time. The real question is how you measure success. What accuracy rate would you need to see to consider expanding it?

**Attempt 2**

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;profile learner_role="editor" learner_industry="publishing" learner_industry_source="stated" learner_goal="discuss AI proofreading for books with engineering lead"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "Thanks for reaching out. I've been looking into NLP tools for text analysis, but I want to be upfront — I'm not sure how well they handle the kind of nuance you need for published books. What made your team consider AI proofreading?"
> 
> [You're an editor at Penguin Random House in New York. Maya leads the machine-learning platform team. She respects editorial craft but is skeptical that current models catch subtle tone and style issues. The goal: explore whether AI proofreading is viable for your books, and if so, on what terms.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
Profile sent: Role: editor. Industry: publishing. Learning goal: discuss AI proofreading for books with engineering lead.
- ✓ no feedback
- ✓ words ≤ 120: 86 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> "Names and technical terms are actually two different problems. Names are hard because models don't know your house style — is it 'Kafka' the author or 'Kafka' the system your team built? Technical terms depend on whether we retrain on your glossary or just use generic output. For a pilot on one book, rough estimate: two to three weeks of an ML engineer's time plus cloud compute, maybe eight to twelve thousand dollars. What does accuracy look like for you — fewer typos, or catching factual errors too?"

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on the date, but honestly, cutting the onboarding tutorial is the cleanest path. It saves us two weeks of dev and QA time, and power users don't need hand-holding anyway. The core product works—let's ship what we have.
> 
> [You're a PM at a mid-sized tech company. Jordan is the engineering lead for your mobile app launch. The product is feature-complete except for the onboarding tutorial. Launch is four weeks away. Jordan wants to cut the tutorial to protect the date; you think it's essential for activation metrics.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 66 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That makes sense—activation in the first week is hard to recover if we lose people upfront. A simpler tutorial could work. What did you have in mind? Static screens instead of the interactive walkthrough? Or cut it to three steps instead of seven?
> 
> [You're still in the meeting. Jordan is listening, but wants to see if your proposal actually saves the time he's worried about.]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 13:22 UTC

**PASS 19 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | PASS | – |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | PASS | – |
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
| C5 | PASS | 0% (10 runs) |  |
| D2 | PASS | 0% (2 runs) |  |

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
- ✓ list items ≥ 2: 6 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/, https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use your first 90 days to learn and understand before you try to change things.
> 
> • **Map your place**: understand your role in the team, your team in the department, your department in the company, and the company in its market.
> • **Set a career direction**: decide where you want your career to go, and let that guide what you learn and which opportunities you pursue.
> • **Stay humble and listen**: your past success doesn't guarantee success here. Be flexible, avoid being overly aggressive, and ask questions boldly while you're new.
> • **Learn proactively**: study internal documents and learn from coworkers. Focus on learning and making a specific plan rather than worrying about performance ratings.
> • **Turn problems into goals**: if a skill like networking is hard for you, make improving it a specific goal and practice consistently.
> • **Set SMART goals**: make them Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes and deadlines.
> 
> Example:
> "Come up with five alternative product ideas for the June product launch by mid-February."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the engineering lead on this project. I'll be working closely with the product team on the new mobile app we're building.
> 
> [We're at Apple in Cupertino. You're the lead project manager kicking off a new internal app for store inventory. Over the past two weeks, there have been emails back and forth between the design team and your engineering team about requirements and timeline. Today's goal is to align everyone on the schedule and main features before development begins. The next step will be to share a timeline with leadership for sign-off.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, Lee — that's helpful, and the timeline for leadership makes the next step clear.
> 
> **Course score: 5/5**: You covered all three ICE steps smoothly in one go.
> 
> **How it went:** This was a strong, professional opening that gives the team confidence in the meeting.
> 
> **What worked:** Your introduction named your role and contribution ("I'll manage the schedule"), your context covered past emails, today's goal, and a timed future step ("by next Friday"), and you set both interaction and detail expectations ("ask questions anytime," "detailed discussion").
> 
> **What to improve:** No major gap. If you wanted to add one thing, you could say how long you've been with the team or on similar projects to strengthen your introduction, but this was already complete.
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails back and forth" sounds slightly more natural in a kickoff.
> 
> **Try this instead:** "Over the past two weeks, we've had quite a few emails back and forth about the main features."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to try again, or pick a new scene?

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

> "Thanks for organizing this kickoff. I'm ready when you are."
> 
> [We're at Apple in Cupertino. You're the lead project manager for a new internal app, and I'm Sarah, one of the engineers on the team. We've had some back-and-forth emails about requirements, and today the goal is to align on scope and timeline so development can begin.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · PASS

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this. I'm ready when you are.
> 
> [You're D, a PM at Apple. Sarah is the regional retail lead for Greater China, joining from Shanghai. The team has exchanged emails about Q4 holiday promotions, but nothing is finalized. Today's goal is to align on the holiday sales plan and confirm who does what before execution begins.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> The ICE method gives your opening a clear structure so you sound prepared and in control.
> 
> - **Introductions**: state the topic, your name and role, and what you'll contribute
>   - "Today we're kicking off the CRM redesign. I'm D, the PM, and I'll guide us through requirements and next steps."
> 
> - **Context**: past, present, future
>   - Past: "We've had emails back and forth about pain points with the current tool."
>   - Present: "Today we'll align on the top three priorities and a rough timeline."
>   - Future: "By Thursday, I'll send the priority list to leadership for sign-off."
> 
> - **Expectations**: set how people should participate
>   - "We'll stay high level today—detailed specs come next week. Please jump in with questions anytime."
> 
> Tips for confidence with US teams:
> - Start on time, even if someone is missing
> - Name decisions explicitly: "So the decision is X—correct?"
> - End with who does what by when
> 
> Want to practice this? Tap the mode menu and choose Role-play, or ask me about a specific meeting type here.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: technology. Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method for a clear, confident opening.
> 
> **1. Introductions**
> - One line on the topic, then your name, role, and contribution
> - "Today we're reviewing the CRM rollout plan. I'm D, the PM, and I'll keep us on track and capture decisions."
> 
> **2. Context: past, present, future**
> - Past: "Last week the US team flagged three integration blockers."
> - Present: "Today we'll review fixes and confirm the go-live checklist."
> - Future: "We need to send the final timeline to leadership by Friday."
> 
> **3. Expectations**
> - Interaction: "Please challenge any timeline that feels tight."
> - Detail: "We're staying high level—deep dives happen in breakout sessions."
> 
> As a PM at Google, your team expects you to own the structure. A clear opening sets that tone immediately.
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
> I think we should list our traditional coffee first on the menu. It's what built our brand, and customers expect to see it right away when they walk in.
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team, and I'm Bob, a senior marketing specialist. We're discussing the layout for the new seasonal menu rollout. I want traditional coffee first; you have data that iced frappuccinos are our top summer sellers. Hint: think about what you can honestly agree with—maybe brand identity matters, or that traditional coffee has a place—before you share your view.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to keep the discussion open and professional:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
>   - "It makes sense that customers expect to see our core offering first…"
> 
> • **State your opinion with a reason** — use facts or data
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open with a question**
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season?"
> 
> The goal: disagree during discussion, then move forward together once a decision is made.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 106 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I appreciate that you're thinking about risk, but I'm not sure I follow—are you saying the menu change itself would take too long, or that testing a smaller trial would save us time? Either way, a full rollout feels safer to me since we already know traditional coffee performs well year-round.
> 
> [We're continuing the Starbucks menu discussion. Bob is asking for clarification on your concern about time, while restating his preference for a full rollout. He's open to hearing more, but you'll need to connect your point to the sales data or suggest a concrete alternative to move him toward a trial or compromise.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM. I'll manage the schedule and be the main point of contact for requirements."
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> Example:
> &gt; "We've had emails going back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks. We need a written sign-off from the US team by next Monday."
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "This will be a detailed discussion" or "We'll keep this high level"
> 
> Example:
> &gt; "We have a lot to cover, so please hold questions until the end."
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
> I still think washing the eggs before packaging is the right move. The retail partners have been asking for cleaner shells, and it would cut down on customer complaints. What's your take?
> 
> [You and Maya are both PMs on Google’s egg supply platform. The team is split on whether to add an automated washing step before packaging. Maya supports it; you have concerns. The goal is to reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> Example:
> &gt; "Hi everyone, today we're reviewing the ML model for egg quality detection. I'm the PM, and I'll guide our discussion on deployment priorities."
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> Example:
> &gt; "We tested the model last quarter. Today we'll review accuracy results and decide on the rollout plan. We need to present our recommendation to leadership by Friday."
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "This will be a detailed discussion" or "We'll keep this high level"
> 
> Example:
> &gt; "This will get technical, so feel free to stop me if something isn't clear."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for flagging this. Three of your shipments in the last month arrived two to four days past the committed window, and it's starting to affect your own customer commitments. I need to understand what's happening and what we can do to fix it.
> 
> [You're an account manager at a mid-sized logistics firm. Rachel is the operations director at a retail client in Chicago. This is your quarterly business review, but she's opened with the delivery issue. Your goal: address her concern, explain what happened, and agree on a plan to prevent it.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I'm juggling a few things this morning, so let's keep it tight. Where are we on the app launch?"
> 
> [You're a PM at a tech company. Maya is your engineering lead, joining your weekly status update call from Seattle. The team needs clarity on what's done, what's blocked, and what's next for the mobile app launch.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Got it. Two weeks on the API is rough. Before we dive into options, can you walk me through what that 70% covers and what's still open? I want to make sure I'm not missing any other dependencies before we talk about cutting scope or pushing the beta."
> 
> [You can describe a different situation anytime.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Carlos" gender="male"/&gt;
> 
> Carlos: "Thanks for flagging this so quickly. Line 2's been our most stable line for months, so a spike in defects is worrying. What does the data look like so far, and do you have a sense of what's changed?"
> 
> [You are a quality engineer at your real company, an EV battery supplier. Carlos is the production manager. The conversation is in his office on Thursday afternoon. You need to explain the defect increase, share what you know, and agree on next steps. He's concerned but not blaming you—he wants to fix it fast.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 98 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Carlos: "A supplier change on one part, and the defect rate jumps to four percent—that's a clear pattern. Holding the affected batches makes sense to me. Full inspection on Line 2 will slow us down, though. We're already behind on the Q3 contract for the European OEM. How long do you think we'll need to run one hundred percent inspection before we know if the new supplier is the root cause?"
> 
> [He's open to your plan but needs to understand the timeline and tradeoff with output. What do you need from him, and what's your best estimate?]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a clear action, and asked for specific support—strong professional structure.
> 
> **How it went:** This was a direct, well-organized escalation with a concrete ask and a reasonable containment plan.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named the problem, your proposed solution, and the condition for ending it, all in one sentence.
> 
> **What to improve:** You didn't mention when you could confirm the cause or when you'd update Carlos. A timeline helps him plan the production tradeoff he raised.
> 
> **Also worth noting:** "Can your team support that this week?" is a bit soft. In urgent quality issues, it's clearer to say what you need: "I need two technicians from your team for 100% inspection starting tomorrow."
> 
> **Try this instead:** "Based on the supplier change date, I need 72 hours to run correlation testing. I'll update you by Friday 5 p.m. I need two technicians from your team for 100% inspection starting tomorrow. Is that possible?"
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
> I know this isn't what anyone wants to hear, but I'm looking at our current velocity and the remaining tasks, and I think we need to talk about the timeline. We might miss next month's deadline.
> 
> [You're the project lead at a fintech company in Singapore. Sam is your main contact at a vendor building the payment integration. The meeting is already in progress—he just dropped this concern. Your goal: respond to the delay risk and move toward a clear next step.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's mainly two things. First, your compliance team sent over new KYC requirements three weeks ago, and that added about forty hours of rework we hadn't scoped. Second, our senior API engineer had to take unexpected leave, so the authentication module is moving slower than planned.
> 
> To stay on schedule, we'd need either a two-week extension or someone on your side to take on the KYC validation piece so our team can stay focused on the core integration. What are you thinking?

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi there! Thanks for setting this up. I'm Sarah from the design team. I'm ready when you are."
> 
> [This is a kickoff meeting for a new mobile app project at Apple. You're the lead project manager, and the team has just joined the call. Sarah is a senior designer who will work on the user interface. The goal is to align everyone on the project plan and next steps.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to check in on the timeline for the website redesign."
> 
> [This is a 1:1 at Tesla. You're a project manager reporting to David, the engineering director. The website redesign was supposed to launch in three weeks, but your team just discovered a security issue that will delay the project by two weeks. David doesn't know yet. The goal is to deliver the bad news and agree on next steps.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks is a significant slip. Walk me through what happened in testing and what your recovery plan looks like."
> 
> [David listens with a neutral expression, arms crossed. He hasn't reacted emotionally yet, but he's waiting to see if you've thought this through.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, got a minute? I wanted to run something by you. The design team just sent over the final mockups for the new landing page, and they look solid—but they want to add a video hero section that wasn't in the original scope. That would push my workload up by about thirty percent this sprint. I wanted to check in with you before I push back or say yes."
> 
> [You're a product manager at a mid-size SaaS company in Austin. David is your direct manager. The conversation starts mid-week; the sprint ends Friday. Your goal: ask David for a proportional adjustment to your responsibilities or timeline, given this new request.]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Thanks for setting this up. I wanted to check in anyway — I've noticed you've been pulled into a few different streams lately. How are you feeling about your workload?"
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Maya, your manager, has a reputation for being supportive but expects you to come with solutions, not just problems. She has budget to shift one project to a contractor if needed, but she won't offer — you have to ask the right way.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "I hear you — those are all high-visibility projects, and I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one's fixed. Between the Q4 forecast and the dashboard migration, which one do you think would hurt more if it slipped?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific tradeoff, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Maya engaged immediately and started problem-solving with you — that's exactly the response you want.
> 
> **What worked:** "I can finish two well" honestly showed capacity without sounding helpless, and "Could we decide together which one can move to next month?" turned a complaint into a joint decision.
> 
> **What to improve:** You could have added a brief reason why two is your limit — for example, hours per project or a dependency — so Maya doesn't have to probe. Also, you didn't name which two you'd prioritize if you had to choose; bringing a recommended option speeds up the decision.
> 
> **Also worth noting:** "I'm working on" lists tasks; "I'm currently responsible for" frames ownership more confidently.
> 
> **Try this instead:** "I'm currently responsible for the Q4 forecast, the dashboard migration, and the pricing analysis, all due this month. Based on the hours each needs, I can deliver two with full quality. My view is we keep the pricing analysis and the Q4 forecast, and move the dashboard migration to January. Does that work, or should we look at other options?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

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
> Thanks for making the time. We've been looking forward to getting started, but honestly, we're not entirely sure what the setup process looks like on your end. I'm Priya, I lead operations here at Northfield Logistics. We handle freight scheduling across three regional hubs, and our current system is mostly spreadsheets with some shared drives. It works, but it's getting hard to scale.
> 
> [Northfield Logistics, Chicago. You're the customer success manager from the software company. Priya is your new point of contact. Goal: understand their workflow, pain points, and what success looks like so you can configure the product. Ask your questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 98 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, our biggest headache is coordination between hubs. When a shipment gets delayed in one region, the other two often don't find out until they manually check a shared spreadsheet — sometimes hours later. Last month we had a container sit at our Memphis hub for two full days because the Chicago team didn't see the status update. That cost us a late-delivery penalty and a pretty tense call with our client.
> 
> So what we're hoping for is something that gives us real visibility across all three locations without people having to remember to check a file.

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Thanks for flagging this. I've got three bug reports on my desk already for the export module, and quarter-end is two weeks out. Walk me through what you're seeing—are the totals off by rounding, or is it pulling from the wrong data source entirely?"
> 
> [You're a finance manager at a mid-sized firm in Chicago. Maya is the IT lead. The goal: agree which bugs to fix first so your audit numbers are accurate and on time.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 92 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "That makes sense from the audit side. The wrong totals are a data integrity issue, and formatting is just presentation. But I need to be straight with you—my senior dev who knows that module is already halfway through a fix for the formatting bug, and switching her now costs us about three days. Can you live with the report looking rough if the numbers are right?"
> 
> [She's pushing back with a real constraint. What matters most to you, and what can you offer to make the switch worth her team's time?]

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for reaching out. I've been looking into some AI proofreading tools for documentation, but books are a different challenge. What's driving this conversation? Are you seeing quality issues with your current process, or is it more about speed and cost?
> 
> [You're an editor at a publishing company. Maya is a senior engineering lead at a tech firm you've partnered with before. She's skeptical but curious. The goal: explore whether AI proofreading fits your book production workflow, not get a yes/no today.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 112 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a fair concern. Names and technical terms are where these tools struggle most right now—they flag real words as errors, or worse, "correct" a proper noun into something common. For documentation, we catch about 15% false positives on specialized vocabulary. Books would likely be higher.
> 
> Cost depends on volume and whether you need custom training. A pilot on one book might run $2,000–$5,000 if we use an off-the-shelf tool with light setup. Custom training to protect your terminology pushes it higher.
> 
> What does your current proofreading process look like? That would help me gauge where AI fits and where your human editors still add value.

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;profile learner_role="PM" learner_industry="tech" learner_industry_source="inferred" learner_goal="disagree with engineering lead about launch scope"/&gt;
> &lt;character name="Alex" gender="male"/&gt;
> 
> I hear you on keeping the full feature set, but we're looking at two extra weeks of dev time for the tutorial, and marketing already announced the launch date. What's your take on that?
> 
> [You're a PM at a mid-sized SaaS company. Alex is the engineering lead. The team is two weeks from code freeze on a product launch. Alex wants to cut the onboarding tutorial to protect the date. You need to disagree and propose an alternative.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
Profile sent: Role: PM. Industry: tech (guessed from the company). Learning goal: disagree with engineering lead about launch scope.
- ✓ no feedback
- ✓ words ≤ 120: 82 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> I can see why you're worried about drop-off—that's a real risk. A simpler tutorial might work, but even a stripped-down version needs design and QA, and our designer is already fully booked on the billing flow fix. What would "simpler" look like in terms of hours?
> 
> [Hint: you could say something like "I understand that protecting the launch date is critical" to partially agree, then give your specific concern with data if you have it, then ask about alternatives.]

</details>

---

<details><summary><b>staging-3</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 13:30 UTC

**PASS 19 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | PASS | – |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | PASS | – |
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
| C5 | PASS | 0% (10 runs) |  |
| D2 | PASS | 0% (2 runs) |  |

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
- ✓ list items ≥ 2: 4 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment before trying to change things.
> 
> • **Map the organization:** understand your role in the team, your team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • **Decide your direction:** set a career goal, even if it's outside the company. Let that guide what you learn and which opportunities you pursue.
> 
> • **Stay humble and proactive:** your past success doesn't guarantee success here. Listen more than you push. Ask questions boldly while you're new. Learn from coworkers and internal documents.
> 
> • **Focus on learning first:** make a specific learning plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the engineering lead on this project. I'll be handling the technical architecture and coordinating with the offshore team. Looking forward to hearing from you.
> 
> [This is the kickoff for Project Hippo, a new mobile app for the company website. You're the lead project manager. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on schedule and features so development can begin. The next step after this meeting is to get written sign-off from the US team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee — that gives us a clear picture of where we are and where we're headed. Appreciate the detailed walkthrough.
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and gave the team a strong sense of direction.
> 
> **How it went:** This was a confident, complete meeting opening that set the right tone for a working session.
> 
> **What worked:** Your context was especially strong — "Over the past two weeks we've had a lot of emails about the main features" covers the past, "Today's goal is to agree on the schedule" the present, and "send a timeline to leadership by next Friday" the future with a clear deadline. You also set both interaction level ("Please ask questions anytime") and detail level ("this will be a detailed discussion") in your expectations.
> 
> **What to improve:** No major gap. If you wanted to add one thing, you could say how *you* specifically contribute beyond managing schedule — for example, "I'll also be the main point of contact for requirements."
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails going back and forth" sounds slightly more natural in a formal kickoff.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this project. I'll be managing the schedule and also acting as the main point of contact for requirements. Over the past two weeks we've had quite a few emails going back and forth about the main features. Today's goal is to agree on the schedule and confirm the key deliverables. The next step is to…

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
> 
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
Scene sent: Start a meeting
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Thanks for organizing this kickoff, I'm ready when you are."
> 
> [You're the lead project manager at Tesla, launching a new mobile app for owners to schedule service appointments. Over the past two weeks, there have been emails going back and forth between the design and engineering teams about requirements. Today's goal is to align everyone on the schedule and main features before development begins. The next step after this meeting is to get written sign-off from the US leadership team by next Monday so the project can officially start. Sarah is a senior engineer on your team.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · PASS

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this. I'm ready when you are.
> 
> [You're D, a PM at Apple. This is a kickoff meeting with Sarah and the China retail team in Shanghai. Over the past two weeks, there have been emails about the Q4 holiday sales plan. Today's goal is to align on promotional timing, inventory targets, and key messaging for the holiday season. The next step is to share a consolidated plan with the regional leadership team. You are leading the meeting.]

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
> Use the **ICE method** to open every meeting with structure and authority:
> 
> **1. Introduction**
> - State the topic, your name and role, and what you'll contribute
> - *Example:* "Today we're reviewing the CRM rollout plan. I'm D, the PM on this, and I'll be running the schedule and tracking blockers."
> 
> **2. Context (past, present, future)**
> - Past: how you got here
> - Present: today's goal and topics
> - Future: next step with a deadline
> - *Example:* "We've had async feedback on the requirements doc over the past two weeks. Today we'll align on the final scope and flag any risks. The target is to send the signed-off plan to leadership by next Friday."
> 
> **3. Expectations**
> - Set interaction level: "Please hold questions until the end" or "Feel free to jump in anytime"
> - Set detail level: "We'll stay high-level on technical architecture" or "We'll go deep into the integration timeline"
> 
> **Quick tips for confidence with US teams:**
> - Start on time, even if someone is missing
> - Use "I" when you own the decision: "I'm proposing we delay by one week"
> - End with who does what by when
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
> Use the **ICE method** to open with clarity and confidence:
> 
> **1. Introduction**
> - Meeting topic, your name and role, your contribution
> - *Example:* "Today we're aligning on the CRM rollout. I'm D, the PM, and I'll track decisions and next steps."
> 
> **2. Context**
> - Past: how you got here
> - Present: today's goal and topics
> - Future: next step with a deadline
> - *Example:* "We've exchanged feedback on requirements for two weeks. Today we'll confirm scope and flag risks. We need leadership sign-off by next Friday so development can start."
> 
> **3. Expectations**
> - Interaction: "Please hold questions until the end" or "Jump in anytime"
> - Detail level: "We'll stay high-level" or "We'll go deep on the timeline"
> 
> **For your US team specifically:**
> - Start exactly on time
> - Use "I" when you own something: "I'm proposing we delay by one week"
> - End with who does what by when
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
> "I think we should list traditional brewed coffee first on the new menu. It stays true to our brand identity, and a lot of our longtime customers still come in for that classic experience."
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team, and I'm Bob, a marketing analyst. We're discussing the layout for the new digital menu boards rolling out next quarter. I want traditional coffee first; you have data that might suggest a different order.]
> 
> [Hint: you could honestly agree that brand identity and loyal customers matter, then bring up what the sales data shows about seasonal trends.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements:
> 
> • **Partially agree honestly** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a specific reason** — use facts or data
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives with a question
>   - "Are there other alternatives?"
> 
> • **Move forward together** — once the team decides, commit
>   - "Let's go with the digital display option, then."
> 
> **Why this works:** You show respect first, so the other person stays open. The question turns a clash into a problem-solving conversation.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 63 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I appreciate that you're thinking about risk, but a smaller trial feels like we're not committing. The quarterly menu refresh is already locked in, and the team needs a direction now. What does your data actually show about customer behavior?"
> 
> [We're still at Starbucks headquarters. I want a decision today, and I'm asking you to bring out the numbers that support your view.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · NON-BLOCKING · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two sentences about the meeting topic
> - Your name, role, and how you'll contribute
> 
> Example:
> &gt; "Hi everyone. Today we're kicking off the new supply-chain system. I'm Alex, the lead PM, and I'll manage the schedule and be the main point of contact for requirements."
> 
> **2. Context (past, present, future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> Example:
> &gt; "We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks. We need sign-off from the US team by next Monday so we can start development."
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions for the end" or "Feel free to interrupt anytime"
> - **Detail level:** "We'll keep this high level" or "We'll go into technical details"
> 
> Example:
> &gt; "We have a lot to cover, so please hold questions until the end. We'll stay high level on technical architecture today."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","goal":"discuss workplace decisions in English","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss workplace decisions in English"/&gt;
> 
> &lt;character name="Jordan" gender="male"/&gt;
> 
> "Hey, thanks for making time. So I've been looking at the numbers, and I think we should definitely move to washed eggs for all our retail cartons. The consumer perception data is pretty clear—people see washed eggs as cleaner and safer. What's your take?"
> 
> [You're a PM at Google working on a food-safety initiative with a farming partner. Jordan is a product specialist on your team. You're discussing whether to require egg washing for retail cartons. He supports it; you may agree or disagree.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming. Learning goal: discuss workplace decisions in English.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","goal":"discuss workplace decisions in English","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss workplace decisions in English"/&gt;
> 
> This sounds like a custom workplace discussion, not a specific course lesson. Here's a direct way to approach it:
> 
> **Frame the decision clearly**
> - State the problem and why ML is being considered
> - Name the stakeholders and constraints
> 
> Example:
> &gt; "We're looking at ML to predict egg quality before packaging. The operations team needs 99% accuracy to avoid waste, and we need to integrate with our existing sensors."
> 
> **Present tradeoffs**
> - Data availability vs. model complexity
> - Implementation time vs. accuracy gains
> - Cost of false positives vs. false negatives
> 
> **Drive to a next step**
> - Propose a pilot, timeline, or owner
> 
> Example:
> &gt; "Let's run a two-week pilot with last quarter's data. I'll own the vendor comparison, and we can review results next Friday."
> 
> As a PM, your job is to surface risks and keep the team moving. What part feels hardest—opening the discussion, handling pushback, or closing with a decision?

### S1 Custom scene: client meeting · BLOCKING · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for making time today. I need to be direct with you — we've had three late deliveries in the past month, and it's affecting our production schedule. My manager is asking why we're still working with your company."
> 
> [You're an account manager at a logistics firm. Rachel is the operations director at a manufacturing client in Chicago. The meeting is a video call. She opened with a specific complaint and pressure from her boss. Your goal is to understand the issue, take responsibility where appropriate, and protect the relationship while working toward a fix.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Morning. I know we're all busy, so I wanted to check in before the standup — where are we on the beta testing timeline? I'm hearing different things from design and engineering."
> 
> [You're the PM leading a weekly sync for a mobile app launch at a mid-size tech company. Rachel is your engineering lead. The team is three weeks from beta release. She's concerned about conflicting updates between departments and wants clarity before she commits her team's weekend hours.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Thanks for flagging that — the payment API delay is exactly what I was worried about. Just to make sure I'm not missing something: when you say development is 70% complete, is that 70% of the original scope, or 70% of what's actually left now that payments are off the table?"
> 
> [Rachel leans forward, concerned about scope clarity before her team plans their weekend work.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;profile learner_role="quality engineer" learner_company="EV battery supplier" learner_industry="automotive / EV" learner_industry_source="inferred" learner_goal="discuss quality issues with production manager"/&gt;
> 
> &lt;character name="Miguel" gender="male"/&gt;
> 
> "Hey, thanks for flagging this. I've been watching the numbers climb since Tuesday and I'm worried we're going to miss our shipment target for Hyundai if we don't get ahead of it. What's your read on what's causing the spike?"
> 
> [You're a quality engineer at your company. Miguel is the production manager for Line 2. The conversation is in his office on Thursday afternoon. Your goal is to get his buy-in to investigate and fix the root cause before the weekend.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV (guessed from the company). Learning goal: discuss quality issues with production manager.
- ✓ no feedback
- ✓ words ≤ 120: 102 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "Four percent? That's way past our threshold. I can see why you're asking for 100% inspection, but I need to be straight with you—we're already running two shifts flat out to cover the Hyundai order. Pulling people for full inspection means we lose at least thirty percent of our throughput, maybe more while people get trained on the protocol."
> 
> "What if we narrow it down first? Do you know which specific part from the new supplier is suspect, or is it the whole batch? If it's one component, we might spot-check by supplier lot number instead of checking every cell."

**T3 [RP]** "feedback"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV (guessed from the company). Learning goal: discuss quality issues with production manager.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a specific action, and asked for support—strong quality-issue communication.
> 
> **How it went:** You came in prepared and made a clear request; Miguel engaged seriously because your reasoning was solid.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you named the problem, the data, and the likely cause in one line. "Can your team support that this week?" — you asked directly for what you needed with a clear timeline.
> 
> **What to improve:** You could strengthen the request by briefly acknowledging the impact on his operation before asking for resources, and you didn't offer a fallback if 100% inspection proves impossible — this would show you're partnering on the solution, not just handing him a problem.
> 
> **Also worth noting:** "I'd like to hold the affected batches" is clear; in some cultures "I'd like to" sounds softer than intended. "I recommend we hold the affected batches" carries more authority for a quality decision.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after the supplier change. I recommend we hold the affected batches and do 100% inspection until we confirm the root cause. I know this hits your throughput hard — if thirty percent is too much, can we start with the last three lots and reassess Friday?"
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
> I know this isn't what anyone wants to hear, but I'm looking at our delivery schedule and I'm honestly not sure we can hit the March deadline. Our QA team found some integration issues last week that are taking longer to fix than we estimated. I wanted to bring it up now rather than surprise you later.
> 
> [You're the project lead at your company, in a video call with Sam, your main vendor contact. The project is a custom software build. Sam has just dropped this concern midway through your weekly status meeting. Respond however you would in this moment.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's mainly the API handshake with your legacy system — we tested against the specs you sent in January, but the live environment is behaving differently. To stay on schedule, we'd need two things: access to a staging environment that mirrors your production setup more closely, and a decision from your team by this Friday on whether we can drop the custom reporting module for phase one and add it later.
> 
> [Your turn. You asked for cause and needs; Sam answered with specifics and is pushing for a quick decision. He's also offering a scope tradeoff.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, thanks for setting this up. I'm Sarah, on the product team. I'll be contributing the UX perspective today."
> 
> [We're at Tesla, in Palo Alto. You're the lead project manager for a new mobile app update. Over the past two weeks, there have been emails back and forth about this kickoff. Today's goal is to align on the schedule and main features before development begins. The next step will be getting sign-off from the US team. Sarah and two other teammates are joining remotely.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, thanks for catching me. I saw your calendar block — what's up?"
> 
> [We're at Apple, in Cupertino. You're a senior project manager reporting to David, the engineering director. Your team is building a new payment feature for the Wallet app. You just learned from the lead developer that integration testing will take two weeks longer than planned because of unexpected API issues with a banking partner. You need to tell David today; the original deadline was next month, and other teams are waiting on your delivery.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks — that's a real hit. Which bugs are we talking about, and how much time does your recovery plan actually save us?"
> 
> [David leans back, concerned but listening. He has a quarterly review with the VP next week and was counting on this feature for the roadmap presentation.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need you to take on the GPS accuracy project for the next sprint. Right now we're at 2% error rate, which was the original target, but the client just called and they want it down to 1% before integration testing in three weeks. Can you handle that?
> 
> [You're a senior engineer at a mapping tech company in Berlin. David is your manager. The team is already at full capacity for the sprint. You need to push back on scope without refusing outright.]
> 
> ---
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for coming in. I wanted to check in on the pipeline automation project—leadership is asking for an update. How are things going on your end?
> 
> [You're a data analyst at a retail company in Chicago. Lisa is your manager, three months new to the team. She has a full plate herself and is still learning the team's workload. The goal: get her help prioritizing three urgent projects without undermining your credibility.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I hear you—those are all high-visibility projects. The pricing analysis came straight from the VP, and the Q4 forecast has a hard deadline for the board meeting. The dashboard migration was supposed to be done last month.
> 
> What would moving something out mean for the other teams waiting on it?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, showed you could handle the workload, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Strong opening—Lisa saw you as capable and solution-oriented, not complaining.
> 
> **What worked:** "I can finish two well" honestly showed your capacity, and "Could we decide together" treated her as a partner and kept ownership shared.
> 
> **What to improve:** You could add a brief reason why two is the limit—team resources, data dependencies, or your current hours—so Lisa doesn't have to guess. Also, naming which project you think should move, with a reason, would show more strategic thinking.
> 
> **Also worth noting:** "All three are due this month" is factual; even stronger would be "all three need significant work this month" to signal the real conflict.
> 
> **Try this instead:** "I can deliver two of these with full quality. The dashboard migration has the most flexible stakeholders, and the new platform won't be live until January anyway. Could we move that to next month so the Q4 forecast and pricing analysis stay on track?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_company="software company" learner_industry="software" learner_industry_source="inferred" learner_goal="lead client discovery meetings confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. We're a mid-size logistics company, about 120 people, and we just signed on last month. Honestly, we're still figuring out what this platform can really do for us. Our operations team is the one who'll use it day-to-day, but I'm the VP who approved the budget, so I want to make sure we get value fast.
> 
> [You're meeting Maya Patel, VP of Operations at a regional logistics firm in Chicago. She has budget authority but isn't the daily user. Your goal: understand her priorities, concerns, and what success looks like so you can configure the product and prove early value.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Company: software company. Industry: software (guessed from the company). Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 84 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is basically running on spreadsheets and WhatsApp groups. It's messy. A driver misses a pickup, and it takes twenty minutes of phone calls to figure out what happened. Last quarter we had three major delays that cost us a key client review. So the problem is visibility — I need to know where things are breaking before a customer calls me angry.
> 
> [Hint: you could follow up on what "visibility" means to her, or ask who else feels this pain.]

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for flagging this. I know quarter-end is tight. Before we dive in, can you walk me through which exports are off and how you're catching the errors?"
> 
> [You're a senior finance analyst at a mid-sized firm. Marcus is the IT lead. You're in a conference room; the audit deadline is two weeks away. The goal is to agree on which bugs to fix first and who does what next.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 91 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "I hear you on the 15th deadline, and wrong totals are definitely a red flag for auditors. Here's my concern: the formatting issues are actually tied to the same export module, so fixing totals without touching formatting might mean doing the work twice. What if we scope it so the team fixes totals first, then does a lightweight pass on formatting right after—would that still work for your timeline?"
> 
> [Marcus is pushing back slightly but offering a compromise. He's testing whether you've thought about dependencies and whether you can negotiate.]

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for reaching out. I've been looking into AI proofreading tools for a couple of months now, and I have some thoughts, but I want to understand your workflow first. What does your current proofreading process look like, and where are you hitting problems?
> 
> [You're an editor at a publishing company. Maya is the engineering lead. The conversation is a 1:1 in her office at a mid-size publisher in New York. Goal: explore whether AI proofreading fits your books, with Maya sharing technical constraints and you sharing editorial needs.]
> 
> ---
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 104 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are exactly where these tools struggle most right now—they're trained on common language patterns, so rare or specialized words get flagged incorrectly or missed entirely. For one book, we could run a pilot with a tool like Grammarly Enterprise or a custom LLM setup. Rough estimate: $2,000–$5,000 for setup and review, depending on how much manual checking we add. What volume of names and technical terms are we talking about per book? And would your team have time to review every AI suggestion, or do you need near-automated output?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;profile learner_role="PM" learner_industry="tech" learner_industry_source="inferred" learner_goal="disagree about launch scope confidently"/&gt;
> &lt;character name="Alex" gender="male"/&gt;
> 
> I hear you on the date, but the onboarding tutorial is a lot of engineering hours we don't have. Two weeks of work, minimum, and we're already at risk on backend performance. Cutting it gets us back on track.
> 
> [You're a PM at a SaaS company. Alex is the engineering lead. Your product is launching in six weeks. He just proposed cutting the onboarding tutorial to protect the timeline. Your goal: disagree and keep the discussion open.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
Profile sent: Role: PM. Industry: tech (guessed from the company). Learning goal: disagree about launch scope confidently.
- ✓ no feedback
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's a fair point—drop-off in week one would hurt us. A simpler version could work if it actually saves time. What did you have in mind? Would it still need the interactive walkthrough, or are you thinking static tooltips we can build in a few days?
> 
> [Hint: good partial agreement and a clear reason. Now he's asking for specifics. Keep the discussion open by responding to his question, or ask about trade-offs he'd accept.]

</details>
