# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 2 runs each · 2026-11-19 02:58 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C1 Out of scope (Coach) | 2/2 |
| C2 Coach starter: first 90 days | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 |
| C4 Menu path: greeting, then "1" | 2/2 |
| C5 Custom scene with profile (non-blocking) | 1/2 |
| C6 Profile save, then use (Coach) | 2/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit (non-blocking) | 0/2 |
| S1 Custom scene: client meeting | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 |
| O1 Optional: finance and IT on audit-software bugs | 1/2 (1 flaky) |
| O2 Optional: editor exploring AI proofreading with engineering | 2/2 |
| O3 Optional: PM and engineering disagree on launch scope | 2/2 |
| **Total (first try)** | **34/38** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | staging |
|---|---|
| C5 | 1/2 · baseline 20% |
| D2 | 0/2 · baseline 60% |

## Runs
- staging-1: GREEN · PASS 17 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-2: GREEN · PASS 17 · FAIL 1 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 02:51 UTC

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
| D2 Background in passing, workplace change, and lessons applied only when they fit | NON-BLOCKING | FAIL | T2: sandwich steps < 2 (found partially agree, keep the discussion open) |
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
| C5 | FAIL | 20% (10 runs) |  |
| D2 | FAIL | 60% (5 runs) |  |

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
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • **Map the organization:** understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • **Decide your direction:** know where you want your career to go, and let that guide what you learn and which opportunities you pursue — even if your long-term goal is outside the company.
> 
> • **Stay humble and proactive:** your past success doesn't guarantee success here. Listen more than you push, ask questions while you're new, and learn from coworkers and internal documents.
> 
> • **Focus on learning first:** make a specific learning plan rather than worrying about performance ratings too early.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi everyone, thanks for joining. I'm Sarah, the engineering lead on this project. I'll be handling the technical roadmap and coordinating with the design team."
> 
> [We're at Tesla. You're the lead project manager kicking off a new mobile app for owners to schedule service appointments. Over the past two weeks, there have been emails back and forth between the product, engineering, and design teams about priorities and timelines. Today's goal is to align everyone on the schedule and key features before development begins. The next step after this meeting is to get written sign-off from the US leadership team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee—that's helpful. I appreciate the clear timeline, and I'm ready to dive into the details."
> 
> **Course score: 5/5**: You covered all three ICE steps with clear details and a specific deadline.
> 
> **How it went:** A strong, professional opening that gave the team exactly what they needed to follow along.
> 
> **What worked:** Your context included past ("a lot of emails about the main features"), present ("agree on the schedule"), and future ("send a timeline to leadership by next Friday") with a timed next step. You also set both interaction level ("ask questions anytime") and level of detail ("detailed discussion") for expectations.
> 
> **What to improve:** Nothing major. If you wanted to add one thing, you could briefly mention how you'll contribute as PM—though "manage the schedule" already does this.
> 
> **Also worth noting:** "A lot of emails" is natural; in more formal settings you might say "quite a few emails back and forth," but your version sounds perfectly natural at Tesla.
> 
> **Try this instead:** Your line is already strong. A slight refinement: "Over the past two weeks, we've had quite a few emails back and forth about the main features and priorities."
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

> "Hi everyone, thanks for joining. I'm Sarah, the design lead on this project. I know we've all been getting up to speed, so I'm looking forward to hearing how you'll be running today's kickoff."
> 
> [You're the project lead at Apple in Cupertino. Sarah and the team are here for the kickoff of a new app feature. Over the past week, there have been emails back and forth about requirements. Today's goal is to align on the schedule and main features. The next step will be to share a timeline with leadership.]
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
> Thanks for organizing this. I'm ready when you are.
> 
> [You're a PM at Apple, leading a kickoff with Sarah, a retail operations manager in Shanghai. Over the past two weeks, your teams have exchanged emails about the holiday sales plan for Greater China. Today's goal is to align on promotional timing, inventory targets, and staffing for the peak weeks. The next step is to finalize the plan with the regional leadership team by next Friday so store teams can prepare.]
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
> Thanks for organizing this, D. I'm ready when you are.
> 
> [You're the lead PM at Apple, meeting with Sarah and the China retail team in Shanghai. The goal is to align on the holiday sales plan. You've sent several emails about Q4 priorities over the past two weeks. Today you need to confirm the promotional calendar, staffing model, and inventory targets, then get sign-off from the regional VP by next Friday to lock the plan.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> **ICE method for meeting openings**
> 
> 1. **Introductions**
>    - State the meeting topic
>    - Say your name, role, and how you'll contribute
> 
> 2. **Context**
>    - Past: how you got here (emails, earlier meetings, work done)
>    - Present: today's topics and goal
>    - Future: next step with a deadline
> 
> 3. **Expectations**
>    - Interaction: "Please hold questions for the end" or "Ask questions anytime"
>    - Detail level: "We'll keep this high level" or "This will be a detailed discussion"
> 
> **Example for your CRM project:**
> 
> "Hi everyone, today we're kicking off the CRM upgrade. I'm D, the PM for internal tools, and I'll manage the schedule and requirements.
> 
> We've had emails going back and forth about data migration issues for two weeks. Today we'll confirm the timeline and the main features for rollout. The next step is to share a written plan with leadership by next Friday.
> 
> We have a lot to cover, so please hold questions until the end. This will be a high-level discussion."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: technology (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> **ICE method for meeting openings**
> 
> 1. **Introductions**
>    - State the meeting topic
>    - Say your name, role, and how you'll contribute
> 
> 2. **Context**
>    - Past: how you got here (emails, earlier meetings, work done)
>    - Present: today's topics and goal
>    - Future: next step with a deadline
> 
> 3. **Expectations**
>    - Interaction: "Please hold questions for the end" or "Ask questions anytime"
>    - Detail level: "We'll keep this high level" or "This will be a detailed discussion"
> 
> **Example for your CRM project at Google:**
> 
> "Hi everyone, today we're kicking off the CRM upgrade. I'm D, the PM for internal tools, and I'll manage the schedule and requirements.
> 
> We've had emails going back and forth about data migration issues for two weeks. Today we'll confirm the timeline and the main features for rollout. The next step is to share a written plan with leadership by next Friday.
> 
> We have a lot to cover, so please hold questions until the end. This will be a high-level discussion."
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
> I think we should list traditional coffee first on the new menu redesign. It honors our brand heritage, and customers expect it when they walk in.
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team, and I'm Bob, your teammate. We're deciding how to order items on the flagship store's new digital menu boards. My view: lead with traditional coffee. The meeting goal is to agree on the menu order before we hand off designs to the vendor by end of week.]
> 
> Hint: what could you honestly agree with about putting traditional coffee first?

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree while keeping the discussion open:
> 
> • **Partially agree first** — show you understand their view:
>   - "I understand that we want to stay true to our traditional coffee brand."
>   - "It makes sense that customers expect to see our classic options when they walk in."
> 
> • **State your opinion with a specific reason** — use facts or data:
>   - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives:
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Once the team decides, move forward together even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 53 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on timing, but honestly, a smaller trial feels like we're just delaying the decision. The vendor needs our final direction by Friday, and we've already spent two weeks going back and forth on this.
> 
> What data are you looking at that makes you think a trial would change the outcome?

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
> Use the **ICE** method to open any meeting:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier discussions)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: hold questions or invite them anytime
> - Level of detail: deep technical discussion or high-level overview
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new inventory system. I'm Jamie, the PM, and I'll manage the schedule and requirements. We've had emails going back and forth for two weeks. Today we'll walk through the plan and flag risks, so we're aligned before development starts. We need sign-off from the US team by next Monday. Please hold questions until the end — we'll go into detail on the timeline."
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

> &lt;character name="Priya" gender="female"/&gt;
> 
> "Hey, thanks for making time. I've been looking at the numbers, and honestly, I think we should move to washed eggs for the North America supply chain. The salmonella risk drops significantly, and that's a big liability issue for us. What's your take?"
> 
> [You're a PM at Google working on food-safety standards for a partner program. Your teammate Priya is advocating for requiring egg suppliers to wash eggs. The team needs a decision today. You wanted to practice disagreeing with a coworker.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models effectively at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models effectively at work"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE** method to open any meeting:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier discussions)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: hold questions or invite them anytime
> - Level of detail: deep technical discussion or high-level overview
> 
> Example for your situation:
> &gt; "Hi everyone, today we're reviewing the ML model for predicting egg quality. I'm the PM, and I'll keep us focused on deployment readiness and business impact. The data science team shared initial results two weeks ago. Today we need to validate accuracy against our grading standards and decide if we move to pilot next month. I'll keep this high level on the math — save detailed questions for the team Slack, and jump in if something doesn't match what you're seeing in production."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

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
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new inventory system. I'm Alex, the project manager, and I'll be managing the schedule and requirements."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> Example:
> &gt; "We've had emails going back and forth for two weeks. Today we'll walk through requirements and confirm the schedule. We need sign-off from the US team by next Monday so we can start development."
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions until the end" or "Feel free to interrupt anytime"
> - **Detail:** "We'll keep this high level" or "This will be a detailed technical discussion"
> 
> Example:
> &gt; "We have a lot to cover, so please hold questions for the end. We'll keep this high level today."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> &lt;character name="Priya" gender="female"/&gt;
> 
> "Hey, so I've been looking at the data from our suppliers. The farms that wash eggs have lower salmonella rates, but the shelf life drops by about two weeks. I'm leaning toward requiring washing for all retail eggs, especially since we're pushing the new freshness guarantee. What do you think?"
> 
> [You're a PM at Google working on a food safety initiative with a grocery delivery partner. Priya is a product analyst on your team. You're discussing whether to require egg washing for suppliers. She wants to move forward. You need to disagree using the feedback sandwich: partially agree, state your concern with a reason, and keep the discussion open.]

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
> Use the **ICE method** to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> Example:
> &gt; "Hi everyone, today we're reviewing the ML model for predicting egg quality. I'm the PM, and I'll be coordinating between the data science team and operations."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> Example:
> &gt; "We've tested two models over the past month. Today we'll compare accuracy and decide which one to pilot. We need to present our recommendation to leadership by Friday so we can start the rollout next week."
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions until the end" or "Feel free to interrupt anytime"
> - **Detail:** "We'll keep this high level" or "This will be a detailed technical discussion"
> 
> Example:
> &gt; "This will be a technical discussion, but I'll pause for questions after each section so we stay aligned."
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
> Thanks for flagging this. I've got three shipments from last month that arrived two to four days late, and my operations team is asking me for answers. What can you tell me about what's been going on?
> 
> [You're an account manager at a mid-sized logistics firm. Rachel is the supply chain director at a retail client in Chicago. She's frustrated but hasn't escalated to her executives yet—she wants to understand the problem and see a fix before her next quarterly review. Your goal: acknowledge the issue, explain what happened, and offer a concrete next step.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;profile learner_role="PM" learner_industry="mobile app / tech" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for joining. I've got fifteen minutes before my next call, so let's hear it—where are we on the launch this week?
> 
> [You lead the status update. Maya is a senior engineer on your mobile app team. The launch is six weeks away. She's waiting to hear progress, blockers, and what you need from the team.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
Profile sent: Role: PM. Industry: mobile app / tech (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Got it. Two weeks on the API is rough. Before we talk options—what's the latest from the payments team? Is it a firm two weeks, or could it slip more? And if we launched without payments, what's the actual impact on users?
> 
> [She's engaged but wants more detail before weighing in. Keep going with your update.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for flagging this so quickly. Line 2 is our highest-volume line right now, so any spike in defects gets my attention fast. Walk me through what you're seeing — is it a specific batch, a particular shift, or spread across the board?"
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. You're in his office at the plant. Your goal: report the defect jump, explain what you've found so far, and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 60 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "Four percent — that's a big jump, and right after a supplier change. That timing is hard to ignore. Holding the batches makes sense to me, but full inspection on Line 2 is going to pull people off their regular stations. We're already behind on the Q3 ramp-up schedule. How long are you thinking we'd need to run 100% inspection?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific action, and asked for resources — strong quality-engineer communication.
> 
> **How it went:** You came in prepared and made a reasonable request that balanced safety with speed.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you gave the metric, the timeline, and the likely cause in one line. That let Marcus focus on solutions, not discovery.
> 
> **What to improve:** Your ask was slightly open-ended. Marcus had to ask "how long" instead of you setting the scope. Also, you didn't confirm his constraint (the Q3 ramp-up) before asking for his team's support.
> 
> **Also worth noting:** Leading with "I'd like to" is polite, but "I recommend" sounds more decisive in a quality issue where you're the expert.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after the supplier change on Tuesday. I recommend we hold the affected batches and run 100% inspection for 48 hours while we confirm the root cause. I know Q3 ramp-up is tight — can your team cover two shifts this week, or should I ask for overtime approval?"
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
> "Yeah, so I need to flag something. We're looking at the remaining integration work, and honestly, I think we might miss next month's deadline. The API changes from your side took longer than we scoped for, and now we're playing catch-up."
> 
> [You're a PM at a tech company in San Francisco, running a weekly check-in with Sam, your main contact at a vendor building a customer portal. The project was supposed to ship in four weeks. Sam just dropped the delay warning mid-meeting. Your goal: understand the real risk, protect your timeline, and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "Thanks for hearing me out. The main thing is those API changes—version 2.3 had new authentication flows we didn't see coming. My two backend engineers spent almost three weeks just getting the handshake right. Now the reporting module is behind, and that's on the critical path for your go-live."
> 
> [He's answering your question directly, but he's also shifting some responsibility to your team. You asked what he'd need—he hasn't answered that part yet. Good opening: you acknowledged the flag and asked two clear questions. Keep probing on what he actually needs, and whether the deadline is truly at risk or if there's a recovery plan.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the engineering lead on this project. I'll be handling the technical architecture and coordinating with the offshore team.
> 
> [You're the project manager kicking off a new mobile app for Tesla. The team has had two weeks of back-and-forth emails about requirements. Today's goal is to align on the schedule and main features so development can begin. The next step will be getting sign-off from the US leadership team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the integration timeline before I update leadership.
> 
> [You're a senior engineer at your company. David is your manager. He asked for a status update on the API integration project that was supposed to finish next Friday. He has a quarterly review with the VP on Thursday and needs accurate dates.]
> 
> ---
> 
> Want to continue this conversation, try again, or pick a new scene?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David pauses, then leans back. "Two weeks is a lot. The VP is expecting this wrapped for the quarterly review. How many bugs are we talking about, and which ones are blockers versus nice-to-fix?"

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "I need you to take on the GPS accuracy fix. The algorithm is returning wrong data 2% of the time. That was acceptable before, but now the client wants it under 1%. Can you get that done before integration testing?"
> 
> [You're a software engineer at a mapping company in Berlin. David is your manager. He dropped this request late on Friday afternoon. Integration testing starts in about three weeks. You need to push back because your current workload already matches the original scope.]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Thanks for coming in. I wanted to check in—I've noticed you've been pulling long hours, and I saw three different project leads cc'd you on status updates this week. Before I say more, how are you seeing your workload right now?
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Marcus is your manager, two levels up from you, generally supportive but focused on team output. He brought up the topic first, which gives you an opening to ask for prioritization help without having to raise it yourself.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you laying it out like that. The Q4 forecast is locked in for the board meeting on the 22nd, so that's fixed. Between the dashboard migration and the pricing analysis, which one feels like it would lose the most momentum if it waited?
> 
> [Marcus is engaged and treating this as a joint decision, not a test of your capacity. He's signaling one immovable deadline and asking for your input on the other two.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific solution, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** You came across as organized and solution-oriented—Marcus saw someone managing complexity, not drowning in it.
> 
> **What worked:** "I can finish two well" honestly set your capacity, and "Could we decide together which one can move to next month?" turned a potential weakness into a joint planning conversation.
> 
> **What to improve:** You didn't name the business impact of delaying each project. Without that, Marcus had to supply the reasoning himself.
> 
> **Also worth noting:** "Working on" is vague—"actively tracking" or "leading" would signal ownership more strongly.
> 
> **Try this instead:** "The dashboard migration affects the sales team's daily workflow, but the pricing analysis only feeds into Q1 planning. If we push the pricing analysis to January, the sales team gets their tool on time and Q1 planning still has room."
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
> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for setting this up. We're excited to get started, but honestly, we're not entirely sure what the setup process looks like on our end. Our team has used a few different tools before, and they all promised similar things—so I'm hoping this one actually fits how we work.
> 
> [You work at a mid-sized logistics company in Chicago. Priya is the operations director. She leads a team of 15 that coordinates freight across three regions. Her company signed up two weeks ago after a demo, but the previous vendor's implementation dragged on for months. She's cautious but open. Your goal: understand her workflow, pain points, and what success looks like so you can configure the product properly.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 79 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling everything in spreadsheets and a shared inbox. It's not pretty. When a shipment gets delayed, my team has to manually check carrier updates, then email or call the client. By the time we notify them, they already know—or worse, they don't, and they're angry. Last month we had three major clients complain about late communication. We need visibility in one place, and we need our clients to see updates without us babysitting every shipment.

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for flagging this. I know quarter-end is tight. Before we dive in, can you walk me through which exports are off and how you're catching the errors right now?"
> 
> [You're a finance manager at a mid-sized firm. Rachel leads the IT team supporting your audit software. The quarter-end audit is in ten days. She has two other critical projects running and limited developer hours. Your goal: agree on which bugs to fix first and confirm a timeline.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "I hear you on the auditor deadline. The totals bug is tricky though — it's tied to how the database handles multi-currency conversions, and that same module feeds into the report formatting. Fixing one without the other could break something else. How much flexibility do you have on the formatting? If it's just visual, we might patch the totals first and come back to clean up the layout after the 15th."

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;profile learner_role="editor" learner_industry="publishing" learner_industry_source="stated" learner_goal="discuss AI proofreading with engineering lead"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> I appreciate you setting this up. I've been looking at the proofreading pipeline, and I have some thoughts on where AI could help and where it might create problems. What's driving this conversation right now—are you looking at cost, speed, or quality issues?
> 
> [You're an editor at a publishing company. Maya is the engineering lead for the tools team. She knows the tech but not publishing workflows in detail. The goal is to explore whether AI proofreading fits your books, not to decide today.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
Profile sent: Role: editor. Industry: publishing. Learning goal: discuss AI proofreading with engineering lead.
- ✓ no feedback
- ✓ words ≤ 120: 93 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are actually the weakest spot for most AI proofreading tools right now—they flag correctly spelled but uncommon words as errors, or they "correct" names to something more common. For a trial, I'd suggest one genre with consistent terminology, maybe a textbook or a series title you already know well. Cost would be mostly my time to set up the pipeline and your time to review the output against your current process. What genre or series were you thinking of for the pilot?

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> I hear you on the timeline pressure, but honestly, cutting the onboarding tutorial is the cleanest way to protect the launch date. The core features are solid, and we can always add it in a point release.
> 
> [You're a PM at a mid-sized SaaS company. Marcus is the engineering lead. He just proposed dropping the onboarding tutorial from the upcoming launch to stay on schedule. The team is two weeks from code freeze. He wants to hear your response.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 58 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's a fair point on user drop-off, and I appreciate you bringing data into it. A simpler tutorial could work if we scope it tightly — maybe three tooltips instead of the full walkthrough. But even that needs design time and QA, and we're already at risk on the performance fixes. What would you cut to make room?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 02:58 UTC

**PASS 17 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | PASS | – |
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
| O1 Optional: finance and IT on audit-software bugs | BLOCKING | FLAKY | passed on rerun; first try: T2: words ≤ 120 |
| O2 Optional: editor exploring AI proofreading with engineering | BLOCKING | PASS | – |
| O3 Optional: PM and engineering disagree on launch scope | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | PASS | 20% (10 runs) |  |
| D2 | FAIL | 60% (5 runs) |  |

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
> Your first 90 days are for learning, not proving yourself immediately.
> 
> • **Map your place in the organization** — understand your role on the team, your team's role in the department, the department's role in the company, and the company's position in its market.
> 
> • **Decide your career direction** — let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Stay humble and listen** — past success doesn't guarantee success here. Avoid being overly aggressive.
> 
> • **Ask questions boldly** — while you're new, people expect it. Learn from coworkers and internal documents.
> 
> • **Make a specific learning plan** — focus on that first, rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, thanks for setting this up. I'm ready when you are."
> 
> [You're the lead project manager at Apple, kicking off a new mobile app project. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features. The next step will be getting written sign-off from the US team. Sarah and three teammates are on the call.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee. That's really helpful — I feel clear on where we are and what we're here to do."
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and in your own words.
> 
> **How it went:** Strong, professional opening that gave the team exactly what they needed to follow along.
> 
> **What worked:** Your introduction named your role and contribution ("I'll manage the schedule"). Your context covered past ("a lot of emails about the main features"), present ("agree on the schedule"), and future with a deadline ("send a timeline to leadership by next Friday"). Your expectations set both interaction ("ask questions anytime") and detail level ("detailed discussion").
> 
> **What to improve:** No major gap. If you wanted to add one thing, you could say how long you've been with the team, but that's optional.
> 
> **Also worth noting:** "Agree on the schedule" is clear; "align on the schedule" is also common in global teams.
> 
> **Try this instead:** Already strong. For variety: "I've been with the team for two years, and I'll be managing schedule and requirements for this launch."
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

> Thanks for organizing this. I'm ready when you are.
> 
> [You're the lead project manager kicking off a new mobile app project at Apple. The team has exchanged emails for the past two weeks. Today's goal is to align on requirements and schedule. Your next step is to share a timeline with leadership by next Monday.]
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
> Thanks for organizing this, D. I'm ready when you are.
> 
> [You're a PM at Apple. Sarah is a senior retail operations manager on your team. You're in a video call with the China retail team to align on the holiday sales plan. The team needs to know the background, today's goal, and how to participate.]

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
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> The ICE method gives your opening a clear structure so you sound prepared and in control.
> 
> 1. **Introductions**
>    - State the meeting topic, your name, role, and how you'll contribute.
>    - Example: *"Today we're kicking off the CRM integration for the sales team. I'm D, the PM, and I'll be managing the schedule and requirements."*
> 
> 2. **Context**
>    - Past: how you got here.
>    - Present: today's topics and goal.
>    - Future: next step with a deadline.
>    - Example: *"We've had emails going back and forth for two weeks. Today we'll align on requirements and the rollout plan. We'll send a written summary to leadership by next Friday."*
> 
> 3. **Expectations**
>    - Set how people should take part, or how detailed the meeting will be.
>    - Example: *"We have a lot to cover, so please hold questions until the end."* Or: *"Feel free to interrupt if anything is unclear."*
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

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
> Use the ICE method to open with confidence and clarity.
> 
> **1. Introductions**
> - One or two sentences on the topic, then your name, role, and contribution.
> - Example: *"Today we're reviewing the CRM rollout timeline. I'm D, the PM, and I'll be tracking decisions and next steps."*
> 
> **2. Context**
> - **Past:** how you got here
> - **Present:** today's topics and goal
> - **Future:** next step with a deadline
> - Example: *"The US team sent feedback last week. Today we'll go through their priorities and agree on the final scope. We'll share the updated plan with stakeholders by Thursday."*
> 
> **3. Expectations**
> - How people should participate, or how detailed you'll be.
> - Example: *"This will be a high-level discussion. If we need to go deeper on any item, we'll schedule a follow-up."*
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
> "I think we should list traditional coffee first on the new menu. It stays true to our brand, and customers expect it when they walk in."
> 
> [At Starbucks headquarters in Seattle, you're on the menu design team with Bob. He's proposing the menu order for the upcoming summer rollout. You know the data: iced frappuccinos are the top sellers from June through August. The goal is to agree on a menu layout that balances brand identity with sales performance.]
> 
> [Hint: you could honestly agree that brand tradition matters, then bring in the sales data.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements:
> 
> • **Partially agree** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a reason** — use facts or data
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives
>   - "Are there other alternatives?"
> 
> • **Move forward together** — once there's a decision, commit to it
>   - "Let's go with the seasonal approach. I'll update the design team."
> 
> **Try this instead:**
> "I can see why traditional coffee feels right for the brand, but frappuccinos drive 60% of summer revenue. Could we test a seasonal layout?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 91 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I appreciate that you're thinking about time — that's fair. But this isn't a major redesign, just the order of items on one menu. What kind of trial did you have in mind, and how long would that take?"
> 
> [At Starbucks headquarters in Seattle, you're on the menu design team with Bob. He's proposing the menu order for the upcoming summer rollout. You know the data: iced frappuccinos are the top sellers from June through August. The goal is to agree on a menu layout that balances brand identity with sales performance.]

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
> Use the **ICE** method to open a meeting in three steps:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> *Example:*
> &gt; "Hi everyone, today we're kicking off the new inventory system. I'm Alex, the PM, and I'll manage the schedule and be the point of contact for requirements."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example:*
> &gt; "We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks. We need sign-off from the US team by next Monday so we can start development."
> 
> **3. Expectations**
> - **Interaction:** hold questions for the end, or invite them anytime
> - **Detail level:** deep technical discussion or high-level overview
> 
> *Example:*
> &gt; "We have a lot to cover, so please hold questions until the end. We'll keep this high level today."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","goal":"discuss whether or not to wash eggs with a coworker","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss whether or not to wash eggs with a coworker"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "I've been looking at the data, and honestly, I'm leaning toward washing them. The customer complaints about dirty shells are up 12% this quarter, and the retail partners are asking about it. What's your take?"
> 
> [You're a PM at Google working on a new smart farming initiative. Maya is a product analyst on your team. You're discussing whether to add an automated egg-washing feature to the sensor system you're building for egg farms. She just stated her position. The goal of this conversation is to reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming. Learning goal: discuss whether or not to wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** method to disagree productively with a coworker:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely understand or accept in their view
> 
> *Example:*
> &gt; "I understand that ML could help us predict laying patterns more precisely, and that would be useful for planning."
> 
> **2. State your own opinion with a specific reason**
> - Use facts, data, or a concrete concern
> 
> *Example:*
> &gt; "But our farms have very inconsistent data quality right now. The sensors fail 15% of the time, so the model's predictions won't be reliable. We'd get better ROI from fixing the data pipeline first."
> 
> **3. Keep the discussion open**
> - Friendly tone, invite alternatives
> 
> *Example:*
> &gt; "Are there other ways to improve forecasting without relying on ML yet?"
> 
> **4. Move forward together**
> - Commit to a shared next step once you decide
> 
> *Example:*
> &gt; "Let's pilot the data fixes on one barn and revisit ML in Q3."
> 
> [I saved your details to your profile (if enabled). See more: top-right menu → About.]

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open any meeting:
> 
> **1. Introductions**
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions until the end" or "Feel free to interrupt"
> - Level of detail: "We'll stay high level" or "This will be a detailed technical discussion"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new ordering system. I'm Jamie, the lead PM, and I'll manage the schedule and requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before development starts. We need written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want me to tailor this to a meeting you're actually running?

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
> "I think washing the eggs is the right move for food safety. The USDA requires it for commercial sales, and it reduces Salmonella risk. But I know you're concerned about the coating. What's your take?"
> 
> [You're both PMs at Google working on a new smart farming data platform. Maya is your teammate. The team is deciding whether to recommend automated egg washing as a feature for large-scale egg farm clients. The goal of this conversation is to reach a decision together.]

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
> Use the **feedback sandwich** when you disagree with a coworker's approach to ML models:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely support in their view
> 
> **2. State your own opinion with a specific reason**
> - Use facts, data, or project constraints
> 
> **3. Keep the discussion open**
> - Friendly tone, ask about alternatives
> 
> **4. Move forward together**
> - Commit to a decision once reached
> 
> Example:
> &gt; "I understand why you want to use the complex neural network — the accuracy numbers look impressive. But our egg grading line needs predictions in under 50 milliseconds, and that model runs at 200ms. A lighter gradient-boosting model hits 95% accuracy at 30ms. Could we test both on the production line next week and compare?"
> 
> As a PM at an egg farm, tie every technical choice to business outcomes: throughput, shelf life, or food safety compliance.
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
> "Thanks for making time today. I need to be direct with you — we've had three late deliveries in the past month, and it's affecting our production schedule. My manager is asking why we're still working with your team."
> 
> [You are an account manager at a logistics firm. Rachel is the operations director at a manufacturing client in Chicago. The meeting is a video call. She agreed to this meeting after escalating through your customer success team. Her goal: get a reliable fix or explore other providers.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · BLOCKING · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I know we're mid-sprint, so I wanted to check in—how are we looking for the app launch timeline?"
> 
> [You're the PM leading a weekly standup for a mobile app launch at a mid-sized tech company. Rachel is your lead engineer. The team is two weeks from the soft launch deadline, and she's been flagging some backend delays. She wants to know if the timeline is still realistic.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Thanks for laying that out so clearly. The payment API delay is my biggest concern too—we're seeing some timeout errors in staging that I didn't expect. If we launch without payments, how would that affect the user onboarding flow? We built the whole first-run experience around that checkout step."
> 
> [Rachel leans forward, waiting for your take on the tradeoffs.]

### S3 Production defects: business level, feedback fits the scene · BLOCKING · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I've seen the numbers too — defect rate on Line 2 went from 1.2% to 3.8% since Monday. That's well above our threshold. What do we know so far about what's causing it?"
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on Thursday afternoon. Your goal: explain what you've found, propose next steps, and agree on a timeline to get Line 2 back under control.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 49 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Which part, and when exactly did the switch happen? My team can support 100% inspection, but I need to know the timeline — we're already behind on the Model X order, and pulling people to inspect means pausing or slowing another line. What's your estimate for confirming the cause?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific containment action, and asked for support with a timeline — strong quality-engineer communication.
> 
> **How it went:** You moved straight to the point with data and a practical request; Marcus had what he needed to negotiate resources.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you gave the cause, scale, and trigger in one line. "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this is a clear containment plan with an exit condition.
> 
> **What to improve:** You didn't name the specific part or the switch date when Marcus asked for it; in a real escalation, having those details ready builds trust and speeds the decision. Also, you didn't offer a time estimate for confirming the cause — "this week" was vague, and Marcus pushed back on that.
> 
> **Also worth noting:** Leading with "I'd like to" is polite, but "I recommend" or "My recommendation is" sounds more decisive in a quality issue.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after we switched to the new separator supplier on Monday. I recommend we hold all batches from Monday onward and run 100% inspection on Line 2. My team can confirm the root cause by Friday. Can your team free up two people for inspection through Thursday?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a …

### S4 Mid-meeting: "We're already halfway through" · BLOCKING · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you want to hear, but I'm flagging it now so we can figure it out together. The integration testing is taking longer than we estimated, and honestly, I'm not confident we'll hit the March 15th deadline unless something changes.
> 
> [You're a project lead at a tech company, running a weekly sync with Sam, your main contact at a vendor firm in Austin. The project is a platform migration that's been running for three months. Sam just dropped this delay warning mid-meeting. Your goal: respond to the delay, understand the root cause, and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's mainly two things. First, your legacy API documentation was incomplete, so our team spent the first two weeks reverse-engineering endpoints we thought were already mapped. Second, the security review queue at our end got backed up, and we just got feedback yesterday that requires changes to the authentication flow.
> 
> To stay on schedule, we'd need two things: your team to prioritize answering our integration questions within 24 hours instead of the usual two-day turnaround, and we'd need to add one senior engineer to our side for the next four weeks. That would cost about $18,000, but it would get us back on track.
> 
> [What's your response?]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi everyone, thanks for joining. I'm Sarah, the design lead on this project. Looking forward to hearing how we kick things off."
> 
> [We're at Tesla in Palo Alto. You're the project manager for a new mobile app update. The team has exchanged emails about features and timeline for the past two weeks. Today's goal is to align on priorities before development starts. Your next step is to get sign-off from the Shanghai engineering team by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to check in on the Alpha project timeline."
> 
> [We're at Tesla in Palo Alto. You report to David, the senior engineering manager. The Alpha project was due to ship in three weeks. You've just learned that integration testing is taking longer than expected, and you need to tell him the project will be delayed by two weeks. David has a quarterly review with leadership next Monday and is counting on this date.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks? That's going to hit the quarterly review. Walk me through what you found and what you're thinking for recovery."
> 
> [David listens, but he's clearly concerned about the leadership meeting. He wants specifics: how many bugs, which areas, and how much time your recovery plan actually saves.]

### S6 Ambiguous request: "Ask my boss for a proportion" · BLOCKING · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> Hi, got a minute? I wanted to check in about the team allocation for the Q3 product launch. With the new features we're adding, I'm stretched pretty thin between the roadmap planning and the vendor negotiations. I think I need some of Priya's time on my workstream, but I wanted to run it by you first.
> 
> [You're a senior product manager at a mid-sized software company in Chicago. David is your manager. The Q3 launch is six weeks away. You want to ask him for a proportion of Priya's time—she's a business analyst who currently reports to another PM. You need to make your case with specific reasoning and be ready for pushback on team priorities.]

### S7 Manager 1:1: workload and priorities · BLOCKING · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Hey, thanks for setting this up. I wanted to check in before the quarter gets away from us. How are things going on your end?
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Marcus is your direct manager, three years your senior, generally supportive but focused on team output. This is a regular 1:1. Goal: get help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I hear you — that's a heavy load, and I appreciate you flagging it early. The Q4 forecast is locked in for the board review on the 22nd, so that one can't slip. Between the dashboard migration and the pricing analysis, which one feels like it would lose the most if it waited?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, named all three projects, proposed a specific solution, and kept ownership of your capacity.
> 
> **How it went:** This was a strong, professional ask — you came with context, a realistic assessment, and a collaborative way forward.
> 
> **What worked:** "I can finish two well" directly owns your limit without sounding helpless, and "Could we decide together which one can move to next month?" invites partnership rather than dumping the problem on Marcus.
> 
> **What to improve:** You could strengthen it by briefly stating the business impact of each project to help Marcus prioritize — for example, "the pricing analysis affects next quarter's revenue targets" or "the dashboard migration unblocks the sales team." This gives him data to make the call, not just the timeline.
> 
> **Also worth noting:** Your tone was confident and solution-oriented. You never apologized for having limits, which is exactly right.
> 
> **Try this instead:** "I can deliver two of these to full quality this month. The Q4 forecast is fixed for the board. Between the dashboard migration and the pricing analysis, the pricing work directly affects next quarter's revenue targets. Would it work to move the dashboard migration to early January, or is there another option you'd prefer?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_company="software company" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. We're about six weeks away from our current contract ending with our old vendor, so we're hoping to move fast—but honestly, we're not sure what your platform can actually do for us yet.
> 
> [You're a CSM at a mid-size software company. Maya is the operations director at a growing e-commerce firm in Chicago. She's evaluating your product against at least one competitor. Your goal: discover her current pain points, timeline, decision criteria, and who else is involved.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Company: software company. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 104 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three separate tools—one for inventory, one for orders, and a spreadsheet for customer returns. It's not pretty. Last month we had two situations where we oversold items because the inventory count didn't sync fast enough. Cost us about $12,000 in refunds and a lot of angry customers.
> 
> We've looked at a couple of platforms that claim to do everything in one place, but the demos felt too generic. I'm hoping your setup can actually match how we work, not force us to rebuild our process around you.
> 
> What's your typical onboarding look like for a company our size?

### O1 Optional: finance and IT on audit-software bugs · BLOCKING · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Hi there, thanks for reaching out. I saw your tickets about the export totals being off. Before we dive into priorities, can you walk me through which reports are affected and how far back the issue goes?"
> 
> [You're a finance manager at a mid-sized firm. Rachel is the IT lead. The quarter-end audit is in ten days. She has two other critical releases running and limited developer hours. Your goal: agree on which bugs to fix first and get a timeline you can trust.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✗ words ≤ 120: 124 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> "I hear you on the 15th deadline, and I agree the totals are the most urgent. Here's the thing — the totals bug is in the core calculation engine, and our senior developer who knows that module is fully tied up on the compliance release until the 10th. We could pull her off, but that release has a hard regulatory deadline. What if we brought in a contractor for the calculation engine and had our junior dev handle the formatting in parallel? That would hit both, but it would add cost."
> 
> [Rachel is pushing back with a real constraint — competing priorities and limited senior staff. She's offering a workaround with a tradeoff. Your move: accept, push for something else, or ask more about the risks.]

**Attempt 2**

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Hey, thanks for flagging this. I know quarter-end is coming up fast, and audit accuracy is critical. I've got the bug list from your team, but I need to understand the business impact to prioritize correctly. Walk me through which discrepancies are blocking your work right now.
> 
> [You're a finance manager at a mid-sized company. Priya is the IT lead. The conversation is happening mid-week, two weeks before quarter-end. Your goal: agree on which bugs to fix first and by when.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 116 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> That makes sense — wrong totals directly hit audit readiness, and formatting won't fail a compliance check. I can pull two engineers onto the totals bug starting tomorrow. The formatting fixes need a different skill set, so that timeline works.
> 
> One thing, though: the totals bug might be two separate issues. One looks like a rounding error in the export module, the other like missing rows when a filter is active. Do both show up in your audit reports, or is one more urgent than the other?
> 
> [You're a finance manager. Priya is the IT lead. Quarter-end audit starts on the 15th, about two weeks away. Goal: agree which bugs to fix first and by when.]

### O2 Optional: editor exploring AI proofreading with engineering · BLOCKING · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;profile learner_role="editor" learner_industry="publishing" learner_industry_source="stated" learner_goal="discuss AI proofreading for books with engineering leads"/&gt;
> 
> &lt;character name="Marcus" gender="male"/&gt;
> 
> I appreciate you reaching out. AI proofreading for books is an interesting idea, but I want to make sure I understand what you're actually looking for before we go too far. Are we talking about catching typos and grammar issues, or are you hoping it can handle style, tone, and consistency across a whole manuscript?
> 
> [You're an editor at a publishing company. Marcus is a senior engineering lead at a tech firm your company is considering partnering with. The goal of this conversation is to explore whether AI proofreading is viable for your books and what it would realistically take.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
Profile sent: Role: editor. Industry: publishing. Learning goal: discuss AI proofreading for books with engineering leads.
- ✓ no feedback
- ✓ words ≤ 120: 120 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to focus. Names and technical terms are actually where most AI systems struggle, because they don't have enough context to know if "Chen" is a character name or a typo for "chin." 
> 
> For reliability, I'd say we're at about 85-90% accuracy on standard prose, but that drops to maybe 60-70% on specialized vocabulary unless we build a custom dictionary for your house style. Cost for a pilot on one book—probably two to three weeks of setup plus the run itself, so roughly fifteen to twenty thousand dollars. 
> 
> What does your current proofreading workflow look like? That would help me see where AI fits and where your human editors still need to own it.

### O3 Optional: PM and engineering disagree on launch scope · BLOCKING · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Alex" gender="male"/&gt;
> 
> "I hear you on the date, but honestly, cutting the onboarding tutorial is the cleanest way to get us to launch. It'll save us two weeks of dev and testing time, and the core features are what users actually signed up for."
> 
> [You're the PM at a mid-size SaaS company in San Francisco. Alex is the engineering lead on your product. The launch is six weeks away. He wants to cut the onboarding tutorial to protect the deadline. You disagree. This is a medium-difficulty conversation.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 64 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> "That makes sense — user drop-off in the first week is a real risk, and I hadn't looked at it that way. A simpler tutorial could work. What did you have in mind for 'simpler'? Fewer steps, or just one guided flow instead of the full interactive walkthrough?"
> 
> [Alex is engaged. He's asking for specifics so he can assess feasibility. What do you propose?]

</details>
