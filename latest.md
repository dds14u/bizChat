# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-13 23:57 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C1 Out of scope (Coach) | 2/2 | 2/2 |
| C2 Coach starter: first 90 days | 2/2 | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 1/2 |
| C4 Menu path: greeting, then "1" | 2/2 | 2/2 |
| C5 Custom scene with profile | 0/2 | 0/2 |
| C6 Profile save, then use (Coach) | 2/2 | 2/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 0/2 (1 flaky) | 0/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **26/32** | **27/32** |

## Runs
- production-1: RED · PASS 13 · FAIL 2 · FLAKY 1 · ERROR 0
- production-2: RED · PASS 13 · FAIL 3 · FLAKY 0 · ERROR 0
- staging-1: RED · PASS 14 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 13 · FAIL 3 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:43 UTC

**PASS 13 · FAIL 2 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FLAKY | passed on rerun; first try: T3: sandwich steps < 2 |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C1 Out of scope (Coach) · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> • **Learn and observe.** Use your first 90 days to ask questions and understand your new environment—your role in the team, your team's role in the department, and the company's place in its market.
> 
> • **Decide your direction.** Think about where you want your career to go. Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Start with humility.** Your past success does not guarantee success here. Be flexible, listen, and avoid being overly aggressive.
> 
> • **Ask questions boldly.** While you are new, ask freely and learn from both coworkers and internal documents.
> 
> • **Focus on learning first.** Make a specific learning plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're looking forward to getting aligned today.
> 
> [You're the lead PM kicking off a project to launch a new mobile app for the customer loyalty program at Starbucks. Over the past two weeks, the team has exchanged emails about requirements and timing. Today's goal is to confirm the schedule and main features so development can begin. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 4
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear — looking forward to the detailed walkthrough.
> 
> **Course score: 4/5** — You covered all three ICE steps: Introductions, Context, and Expectations.
> 
> **How it went:** Great job getting all three steps in smoothly and in a natural order.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — This shows strong Context: you included past (emails), present (agree on schedule), and future (timeline by next Friday with a clear deadline).
> 
> **What to improve:**
> - Your introduction was brief: "I'm Lee, the lead PM for the new app launch, and I'll manage the schedule." The ICE model suggests adding how long you've been with the team or company, and one more detail about your contribution — for example, being the main contact for requirements or stakeholders.
> - "Please ask questions anytime, and this will be a detailed discussion" combines interaction and detail, which works. A slightly clearer split can help listeners process: for example, "please feel free to interrupt with questions" for interaction, then "we're going to get into the details" for detail level.
> 
> **Try this instead:**
> "Hi everyone, I'm Lee. I've been with the team for two years and I'm the lead PM for this launch. I'll be managing the schedule and also the main point of contact for requirements. We've had quite a few emails going back…

### C4 Menu path: greeting, then "1" · PASS

**T1 [RP]** "Hello"
- ✓ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Hello! Let's practice a real workplace conversation. Reply with a number:
> 1. Start a meeting (easy)
> 2. Disagree with a coworker
> 3. Reject a late request
> Or describe your own situation.
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Great, let's kick off this meeting. We're all set up in Conference Room B.
> 
> "Thanks for joining, everyone. We're looking forward to hearing how this launch is going to come together."
> 
> [Setting: Apple, Cupertino. You are the lead project manager for a new fitness app launch. Over the past two weeks, the team has exchanged several emails about feature requirements and timeline conflicts. Today's goal is to align on the final schedule and assign owners to each workstream before development begins. The next step is to share a consolidated timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="Technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining, everyone. We're looking forward to hearing your plan for the holiday season.
> 
> [Apple retail headquarters, Cupertino. Sarah leads the China retail operations team. D is the PM running today's meeting. Goal: align on the holiday sales plan and confirm next steps.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"tech","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="tech" learner_industry_source="stated" /&gt;
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining, everyone. I'm Sarah, retail operations lead for Greater China. We're looking forward to hearing your plan for the holiday quarter.
> 
> [Apple, Shanghai — Sarah leads retail operations for Greater China. D is the PM running today's meeting. Goal: align on the holiday sales plan and confirm next steps.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="software" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> When you open a meeting, use three steps:
> 
> 1. **Introduction** — say your name, role, and how you'll help
> 2. **Context** — past (how you got here), present (today's goal), future (next step with a deadline)
> 3. **Expectations** — interaction level and detail level
> 
> Example for your CRM kickoff:
> 
> "Hi everyone, I'm D. I'm the PM for our internal CRM, and I'll be managing the schedule and requirements. We've had a lot of email threads about this over the past two weeks. Today we'll walk through the rollout plan and confirm the timeline, so we're all aligned before development starts. The next step is to share a written timeline with leadership by next Monday. We have a lot to cover, so please hold questions for the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you have questions about any of the three steps?

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
> Use the ICE method — three steps in order:
> 
> 1. **Introductions** — one or two sentences about the meeting topic, then your name, role, and how you'll contribute
> 2. **Context** — why you're meeting, in three parts:
>    - Past: how you got here (emails, earlier discussions)
>    - Present: today's topics and goal
>    - Future: next steps, always with a deadline ("by next Friday")
> 3. **Expectations** — how people should participate:
>    - Interaction: "please hold questions for the end" or "feel free to interrupt"
>    - Detail level: "this will get technical" or "we'll stay high level"
> 
> Example as a PM at Google:
> 
> "Hi everyone, today we're kicking off the internal CRM rollout. I'm D, the lead PM, and I'll manage schedule and be your main point of contact for requirements. We've had quite a few emails going back and forth these past two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone's aligned before we start. We hope to get written sign-off from the US team by next Monday. There's a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee drinks first on the new store menu. It keeps us true to our brand roots, and customers expect that classic Starbucks experience when they walk in.
> 
> [Setting: Starbucks headquarters, Seattle. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on the redesigned in-store menu. Bob's point about brand tradition is valid, but iced frappuccinos are the summer best sellers. Your goal: share a different view and reach a team decision.]
> 
> [Hint: you could partly agree with Bob's focus on brand identity, or with the bigger goal of customer experience.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. Start positive by partially agreeing with the other side. Show you understand their view with phrases like "I understand," "I can see," or "it makes sense that."
> 
> 2. State your own opinion and why you disagree. Use facts or data if you can.
> 
> 3. Keep the discussion open. Ask a question about alternatives so the conversation continues.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Once the team makes a decision, move forward together. It's okay to disagree during discussion, but after the decision, everyone commits.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on timing — but we're aiming for a full rollout before summer peak. A smaller trial might not give us the sales data we need in time. What kind of timeline were you thinking for that trial?
> 
> [Hint: you could say "I understand that we want solid data, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"]

### D2 Background in passing, workplace change, and lessons applied only when they fit · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Start meetings with the ICE method — three steps in this order:
> 
> 1. **Introductions**
>    - One or two statements about the meeting topic
>    - Your name, role, and how you will contribute
> 
> 2. **Context** (past, present, future)
>    - **Past:** how you got to this meeting (emails, earlier discussions)
>    - **Present:** today's topics and goal
>    - **Future:** next steps with a clear time ("by next Monday")
> 
> 3. **Expectations**
>    - Level of interaction: "please hold questions until the end" or "feel free to interrupt"
>    - Level of detail: "this will be high level" or "we'll go deep into technical details"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new project. I'm Danny, lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had emails back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone is aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions for the end."
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
> &lt;character name="Bob" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs removes the natural protective coating. That means we need to refrigerate them immediately and the shelf life drops. If we skip washing, we save on refrigeration costs and the eggs stay fresh longer on store shelves. What do you think?
> 
> [You're a PM at Google working on a new smart-farming initiative with a partner egg supplier. Your teammate Bob wants to skip the washing step to cut cold-chain costs. You disagree. The goal: reach a team decision on the processing standard.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the feedback sandwich when you disagree with a coworker:
> 
> 1. **Start positive** — honestly agree with part of their view ("I understand why cutting cold-chain costs matters for margins")
> 2. **State your opinion with a specific reason** — use facts or data ("but unwashed eggs carry a higher salmonella risk, and FDA guidance recommends washing for retail")
> 3. **Keep it open** — end with a question about alternatives ("Would a partial wash or faster chill cycle work instead?")
> 4. **Move forward together** — once the team decides, commit even if it wasn't your idea
> 
> Example:
> &gt; "I can see why skipping the wash step would reduce refrigeration costs, but our retail partners require washed eggs for food safety certification. Could we test a lower-temperature wash that uses less energy?"
> 
> As a PM at an egg farm, you'll often balance operational cost with buyer requirements — frame your pushback around what the data and your partners actually need.
> 
> Want to practice this? Switch to Role-play and describe the situation again.

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE template** in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, discussions, or work done)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a deadline ("by next Monday")
> 3. **Expectations** — how people should participate:
>    - *Interaction:* "Please hold questions for the end" or "Feel free to interrupt"
>    - *Detail:* "We'll stay high level" or "This will get technical"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new feed system rollout. I'm Jamie, lead PM on this project, and I'll manage the schedule and be your main point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before development starts. We need written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
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

> &lt;profile learner_name="" learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> &lt;character name="Maya" gender="female"/&gt;
> 
> I see your point about food safety, but washing eggs removes the natural protective coating. That could actually increase the risk of bacteria getting in, and we'd need to refrigerate them immediately after. Have you looked at what our competitors do?
> 
> [Setting: Google, Mountain View. You are a PM on the food systems team. Maya is a supply chain analyst on your team. The two of you are deciding whether to require egg washing for a new supplier partnership. Goal: reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> As a PM at an egg farm, when you're discussing ML models with colleagues, approach it like any cross-functional technical discussion: be clear on the business problem first, then bridge to the technical solution.
> 
> 1. **State the business goal early.** For example: "We need to predict which hens are likely to drop in production so we can adjust feed early."
> 2. **Ask about data and feasibility.** "What data do we have? How accurate is the current manual tracking?"
> 3. **Clarify tradeoffs.** "If the model needs more labeled data, how long would that take? What's the cost of a false positive versus a false negative?"
> 4. **Define success together.** "Let's agree on the metric. Is it reducing feed waste by 10%, or catching 90% of drops before they happen?"
> 5. **Set next steps with owners.** "Can your team share a data sample by Friday? I'll check with operations on whether we can run a two-week pilot."
> 
> This keeps you credible without needing to code, and it moves the conversation from "interesting technology" to "project we can scope."
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. I'm Rachel, the operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks, and it's starting to affect our store replenishment. I need to understand what's happening and what your team is doing to fix it.
> 
> [Westfield Retail, a mid-sized retail chain in Chicago. You are the account manager at a logistics company. Rachel, their operations director, is concerned about repeated late deliveries and wants answers and a plan.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Alex" gender="male"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the app launch? Marketing is asking for an updated timeline and I want to make sure we're all aligned before I respond.
> 
> [Scene: Your company is launching a new mobile app. You are the project manager leading the weekly status meeting. Alex is a senior stakeholder from the marketing team who needs to report upward. The goal is to hear your update and confirm next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see the payment API delay is putting real pressure on the beta. Moving the beta or launching without payments are both big calls — they affect how we position this to early users and what marketing can promise. What are you leaning toward, and what do you need from the team to decide?
> 
> [Hint: you could say "I recommend we delay the beta by two weeks so we can include payments, because early user trust is critical for retention."]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: Hey, thanks for flagging this so quickly. Line 2's been my biggest headache all week. What are we looking at in terms of numbers?
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. You're in the production office in Detroit. Goal: discuss the spike in defective cells on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 84 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: Four percent? That's a big jump. I hear you on holding the batches, but we're already behind on this month's output target. If we stop to inspect every cell, we'll miss the Friday ship date to the OEM. What else can we do?
> 
> [Hint: you could say "I understand the pressure on output, but shipping defective cells carries a bigger risk. Could we run a smaller 100% inspection on the most recent batch first, while your team continues normal flow on earlier lots?"]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You used the feedback sandwich structure partially: you stated the problem with data, but skipped honest positive agreement and didn't fully keep the discussion open with a question.
> 
> **How it went:** You came in with clear facts and a concrete proposal, which is strong. The conversation needed more collaboration to balance quality and production pressures.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this gives a specific reason with data, which helps Marcus understand the cause and shows you're problem-solving, not just blaming.
> 
> **What to improve:**
> - You moved straight to your solution without first acknowledging Marcus's pressure or finding common ground. In the feedback sandwich for disagreements, start with honest positive agreement: "I understand hitting the OEM deadline is critical" or "I know Line 2 has been running hard."
> - Your close was a direct request ("Can your team support that?") rather than inviting alternatives together. End with an open question like "What options do you see?" or "Could we pilot a smaller inspection first?"
> 
> **Also worth noting:** "I'd like to hold" is polite, but "I recommend we hold" sounds more decisive in a quality issue where you own the technical call.
> 
> **Try this instead:** "I know the OEM deadline is tight and this month's target matters. The 4% defect rate traces to the new supplier part, so I recommend we hold the affected batches and do 100% inspection…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, but we're looking at a real risk of slipping into next month. Our lead engineer had to take unexpected leave, and the handoff is taking longer than we planned.
> 
> [Your company is working with a software vendor on a product launch. You're in a virtual weekly status meeting. You are Sam, the vendor's project lead. The learner is the client-side project manager. Goal: discuss the delay and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the knowledge transfer. Our senior developer was the only one who knew that module inside out, and bringing the backup person up to speed is taking about two extra weeks. To stay on schedule, we'd need either to extend the deadline by three weeks or to bring in an external specialist. That second option would add roughly fifteen thousand to the budget, but it would keep us on track.
> 
> [Hint: you could say "Before we discuss options, let me confirm what we agreed in the original scope..."]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Hi everyone, thanks for joining. We're here to kick off the new mobile app project, and I'm looking forward to getting started.
> 
> [You are the lead project manager for a new mobile app launch at Apple in Cupertino. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features before development begins. The next step is to get sign-off from the US leadership team by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, and I need to understand the full picture before we talk recovery. How many bugs are we talking about, and which features are most at risk?
> 
> [You are a senior engineer at Microsoft in Seattle. Linda is your manager. The project is a cloud security update that was supposed to ship to enterprise clients by month-end. The conversation goal is to agree on a realistic path forward.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining us today. We're looking forward to hearing your plan for this project.
> 
> [You're the lead PM for the launch of a new mobile app at Microsoft. The team has exchanged several emails over the past two weeks about requirements and timelines. Today's goal is to align everyone on the schedule and key features before development begins. Your next step will be to share a finalized timeline with leadership by next Friday.]
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

> I appreciate you flagging this early. Two weeks is significant, and leadership is expecting the current timeline for the client demo. Walk me through what you're seeing and what recovery looks like.
> 
> [You're a senior developer at your company. Your manager, Greg, has just asked for a status update on the dashboard redesign you've been leading. The original deadline is three weeks away, and the client demo is already scheduled.]
> 
> &lt;character name="Greg" gender="male"/&gt;

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> Hi, do you have a minute? I wanted to run something by you before the weekend.
> 
> [You are a senior engineer at a tech company. Your manager, David, has just walked over to your desk on Friday afternoon. He needs to discuss a last-minute change to your team's project.]
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for coming in. I wanted to check in on your workload this week—how are things going with the three projects you're juggling right now?
> 
> [You're a data analyst at a tech company. Lisa is your manager. Goal: ask for help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board review on the 15th, so that one can't move. Between the dashboard migration and the pricing analysis, which one do you think would lose more if we pushed it out?
> 
> [Hint: you could say "The pricing analysis feeds into the forecast, so delaying it would mean revising the board numbers later."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a solution, and kept the discussion collaborative.
> 
> **How it went:** Great job—you didn't just dump the problem on Lisa; you came with a clear framing and a specific ask.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows ownership and invites partnership. It follows the feedback sandwich principle of keeping the tone open and solution-oriented, even though this is a request scene.
> 
> **What to improve:**
> - You didn't name the tradeoff or explain why one project matters more. Lisa had to ask you to compare them. In a 1:1, briefly stating the impact helps your manager decide faster.
> - You also didn't mention any steps you've already taken, which would strengthen your credibility.
> 
> **Also worth noting:** "I can finish two well" is honest and direct. A slightly fuller version might be "I want to be realistic about quality—two done well is better than three rushed."
> 
> **Try this instead:**
> "The Q4 forecast is due the 15th and the pricing analysis feeds into it, so those two are linked. The dashboard migration has more flexibility on timing. Could we move that to next month so I can deliver the first two properly?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for making the time. We're about two weeks away from our go-live date and honestly, we're not sure if we're fully prepared on our end.
> 
> [You're a customer success manager at a software company. Maya is the operations director at a mid-sized logistics firm in Chicago. She recently signed a contract for your platform. Today's goal: understand her team's readiness, concerns, and what success looks like so you can tailor the onboarding.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 64 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is juggling three different tools to track shipments, and none of them talk to each other. We're spending maybe six or seven hours a week just reconciling data by hand. The goal is to get everything in one place so our drivers and warehouse staff see the same information in real time.
> 
> [You can describe a different situation anytime.]

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:52 UTC

**PASS 13 · FAIL 3 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T3: sandwich steps < 2 (found partially agree, keep it open) |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C1 Out of scope (Coach) · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Learn and observe**
> - Understand your role in the team, the team's role in the department, and the department's role in the company. Also learn where the company stands in its market.
> - Be humble and flexible. Your past success does not automatically apply here, so listen more than you push.
> 
> **Ask questions boldly**
> - Use your "new employee" status to ask questions freely. Learn from coworkers and from internal documents.
> 
> **Plan your direction**
> - Decide where you want your career to go. Let that goal guide what you learn and which opportunities you pursue, even if your long-term plan is outside the company.
> 
> **Focus on learning first**
> - Make a specific learning plan rather than worrying about performance ratings early on.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're all set on this side.
> 
> [Starbucks headquarters, Seattle. You are leading the kickoff for the summer menu update project. The team has exchanged emails about priorities for the past two weeks. Today's goal is to align on the launch timeline and the top three menu changes. The next step is to share a draft plan with the regional directors by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear and well-organized. Looking forward to working with you on this.
> 
> **Course score: 5/5**: You covered all three ICE steps—introduction, context, and expectations—clearly and in order.
> 
> **How it went:** Great job! You introduced yourself and your role, gave full context with past, present, and future, and set both interaction and detail expectations.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday." — This shows strong **Context**: you covered past (emails), present (agree on schedule), and future (send timeline by next Friday with a clear deadline).
> 
> **What to improve:**
> - Nothing major. If you wanted to add more detail to **Expectations**, you could say explicitly how deep the discussion will go, for example "we'll get into the details of each phase" or "this will stay high level." You already invited questions, which covers interaction well.
> 
> **Also worth noting:** "Please ask questions anytime" is friendly and clear. A slightly more formal alternative in some cultures is "feel free to interrupt if you have questions," but your version is perfectly natural.
> 
> **Try this instead:** To add a little more precision to expectations, you could say: "We'll be getting into the details of each development phase, so please feel free to interrupt if you have questions."
> 
> Want to try again without…

### C4 Menu path: greeting, then "1" · PASS

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
> 
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Thanks for joining, everyone. We're looking forward to getting aligned on this today.
> 
> [You're the lead project manager at Apple, kicking off a meeting to launch a new fitness app feature. Your team has exchanged several emails about requirements over the past two weeks. Today's goal is to confirm the schedule and main features so development can begin. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

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
> Thanks for joining, everyone. We're here to support the retail team through the holiday season, so we're looking forward to hearing your plan and how we can align.
> 
> [Scene: Apple. Sarah leads the retail operations team in China. You are D, a PM, opening a meeting with Sarah's team to discuss the holiday sales plan. Goal: align on strategy and next steps.]
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
> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for joining, D. We're looking forward to hearing the plan for this holiday season—retail's been asking for clarity on timing and inventory for a while now.
> 
> [You are a PM at Apple, leading a meeting with Lisa, the retail operations lead based in Shanghai. The goal is to align on the holiday sales plan, including launch timing and store-level inventory targets.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident when leading meetings with US team","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident when leading meetings with US team","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident when leading meetings with US team","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident when leading meetings with US team","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="software" learner_industry_source="inferred" learner_goal="sound more confident when leading meetings with US team"/&gt;
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> Great to meet you, D. As a PM at Google, leading cross-border meetings is a key skill.
> 
> This is covered in the course:
> 
> To open meetings with confidence, use the **ICE** structure:
> 
> 1. **Introductions** — state the meeting topic, your name, role, and how you'll contribute
> 2. **Context** — cover past (how you got here), present (today's goal), and future (next step with a deadline)
> 3. **Expectations** — set the level of interaction ("hold questions until the end" or "feel free to interrupt") and detail ("high level" or "deep dive")
> 
> Example opening:
> &gt; "Hi everyone, today we're kicking off the CRM integration. I'm D, the PM on this project, and I'll be managing the schedule and requirements. We've had a lot of back-and-forth emails about the scope. Today we'll align on the timeline and key features, and then I'll send a written summary to leadership by Friday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you have questions about a specific meeting situation?

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: software (guessed from the company). Learning goal: sound more confident when leading meetings with US team.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** structure to open with clarity and confidence:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you'll contribute to the project
> 2. **Context (Past, Present, Future)** — why you're meeting and what you want to achieve
> 3. **Expectations** — how people should participate and how detailed the discussion will be
> 
> Example for your CRM project:
> &gt; "Hi everyone, today we're reviewing the CRM rollout plan. I'm D, the lead PM, and I'll be managing the schedule and acting as the main point of contact for requirements. We've had quite a few emails going back and forth about the timeline and feature priorities. Today we'll walk through the current schedule, confirm the key milestones, and call out any risks, so that everyone is aligned before we move into development. We need to send a written sign-off to the US team by next Monday. We have a lot of content and not much time, so please hold questions for the end of the meeting."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the new store menu. It stays true to our brand, and customers expect to see our classic roasts at the top.
> 
> [Setting: Starbucks headquarters. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on the new digital menu boards launching next quarter. Bob's proposal: put traditional hot coffee first. Hint: you could partly agree with Bob about brand identity or customer expectations.]
> 
> [Start with your response to Bob's idea.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. **Start positive** — partially agree with the other person's view. Show you understand their perspective.
> 2. **State your opinion** — explain why you disagree, with a specific reason or data if possible.
> 3. **Keep it open** — ask a question about alternatives to continue the discussion.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> This approach encourages discussion rather than shutting it down, which often leads to a better team decision. Once the team decides, everyone moves forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timeline, but a smaller trial might not give us enough data. Summer is our peak season for cold drinks, and we need the full menu live by May 1st to capture that. What if we run both versions side by side in select stores instead?
> 
> [Hint: you could say "I understand that staying true to the brand matters, but..." to show honest agreement with part of Bob's point before raising your concern.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings with the **ICE template** — three steps in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — why you're meeting and what you want to achieve:
>    - *Past:* how you got here (earlier emails, previous meetings)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a deadline ("by next Monday")
> 3. **Expectations** — how people should take part:
>    - *Interaction:* "Please hold questions for the end" or "Feel free to interrupt"
>    - *Detail:* "We'll stay high level" or "This will get technical"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new barn automation project. I'm Alex, lead PM, and I'll manage the schedule and be your main point of contact. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before build starts. We need sign-off from the US team by next Friday. There's a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you have a specific meeting coming up?

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> &lt;character name="Jordan" gender="male"/&gt;
> 
> I see your point about food safety standards, but washing eggs removes the natural protective cuticle. That actually increases the risk of bacteria getting in later, especially if the eggs aren't kept cold afterward. In most of Europe they don't wash eggs at all, and their salmonella rates are lower. Shouldn't we look at how the eggs are stored and handled instead of adding an extra step?
> 
> [Setting: Google, Mountain View. You are a PM on the sustainability team. Jordan is a supply-chain analyst who wants to skip the wash step to reduce water use and align with European suppliers. The goal is to decide on the egg-handling standard for a new vendor program launching next quarter.]
> 
> [Hint: you could say "I understand the water-saving goal, but..." or "That makes sense for Europe, yet in the US..."]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker — the same method from the disagreeing lesson applies to technical discussions like ML model choices:
> 
> 1. **Start positive** — partially agree with their view ("I understand", "That makes sense")
> 2. **State your opinion with a specific reason** — use facts, data, or tradeoffs
> 3. **Keep it open** — end with a question about alternatives or next steps
> 
> Example for your situation:
> &gt; "I understand that a complex model could give us more detailed predictions about egg quality. But with our current data volume, a simpler model will be faster to train and easier to maintain. Are there specific features you think we'd miss with the lighter approach?"
> 
> Or if you're defending the complex model:
> &gt; "It makes sense to keep costs down with a simpler model. However, we've seen 15% more false negatives on crack detection with the baseline, and that directly impacts food safety ratings. Could we test both on last quarter's data before deciding?"
> 
> Once the team decides, move forward together even if it wasn't your preference.
> 
> Want to practice this exact conversation in a role-play, or do you need help with another part of the discussion?

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE template** in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — cover past, present, and future:
>    - *Past*: how you got to this meeting (emails, earlier discussions)
>    - *Present*: today's topics and goal
>    - *Future*: next steps, always with a sense of time ("by next Monday")
> 3. **Expectations** — set the level of interaction and detail:
>    - Interaction: "Please hold questions for the end" or "Feel free to interrupt"
>    - Detail: "We'll stay high level" or "This will get technical"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line upgrade. I'm Jordan, lead PM on this project, and I'll manage the schedule and be your main point of contact. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and flag risks so we're aligned before work starts. We need sign-off from the operations director by Friday so we can begin next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> As a PM in egg farming, what kind of meetings do you lead most often — internal team updates or calls with external partners?

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="egg farming"/&gt;
> 
> &lt;character name="Jordan" gender="female"/&gt;
> 
> I hear you, but washing eggs removes the natural protective coating. That leads to faster spoilage and more refrigeration costs down the line. We could end up with a shorter shelf life and higher energy bills.
> 
> [You are a PM at Google. Jordan is your teammate on the food systems team. You're discussing whether Google should require egg suppliers to wash eggs. Jordan wants the company to mandate washing for brand safety and consumer trust, but she hasn't addressed the cost and spoilage tradeoff. Goal: reach a team decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="egg farming"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker:
> 
> 1. **Start positive** — partially agree with their view honestly ("I understand why you'd want that...")
> 2. **State your opinion with a specific reason** — use facts or data where possible
> 3. **Keep it open** — end friendly and ask about alternatives
> 
> Example for your ML model discussion:
> &gt; "I can see why a complex model would give us more detailed predictions on egg quality. But our farm has limited data from just two barns, so a simpler model will be more reliable and easier to maintain. Could we start with a basic version and add complexity once we have more data?"
> 
> As a PM at an egg farm, are you usually pushing back on engineering to keep things simple, or is your coworker the one wanting to scale down?

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I'm Karen, the operations director at our end. I need to be direct with you — we've had three shipments arrive late this quarter, and it's starting to affect our own customer commitments. I want to understand what's happening and what we can do to fix it.
> 
> [You are an account manager at a logistics company. Karen is the operations director at a client company. The meeting is a video call from her office in Chicago. Goal: address her concerns about late deliveries and agree on next steps.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive in, I wanted to check in on the mobile app launch — we're three weeks out from the store submission deadline, and I heard the beta testing phase hit some snags. Can you walk us through where things stand?
> 
> [You're the PM leading this weekly status meeting for your mobile app launch at Apple in Cupertino. Linda is your engineering lead. Goal: give a clear status update and align the team on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I hear you on the payment API delay — that's a real problem with the timeline this tight. But launching without payments feels risky. We'd be releasing a core feature later, which means two separate launches and more work for the team. Is there another option we haven't looked at?
> 
> [You're the PM leading this weekly status meeting for your mobile app launch at Apple in Cupertino. Linda is your engineering lead. Goal: give a clear status update and align the team on next steps.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Hey, thanks for coming by. I saw the numbers from Line 2 this morning — defect rate jumped from two percent to almost six. That's a big spike. What's your take on what's causing it?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in your facility. Goal: discuss the defective cell spike on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 66 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — that's still a big jump, and it lines up with the supplier change. Holding the batches makes sense. But we're running at full capacity this week to meet the quarterly target. If we stop to do one hundred percent inspection, we'll lose about two days of output. Can we narrow it down to just the cells from the new supplier's first two deliveries?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated your purpose clearly, gave a specific reason with data, proposed a concrete next step, and handled the pushback calmly.
> 
> **How it went:** Strong start — you came in with facts and a clear ask, then stayed solution-focused when Marcus raised the capacity concern.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the purpose early with a specific reason and example, which is the first step in the general checklist. It gave Marcus exactly what he needed to engage.
> 
> **What to improve:**
> - When Marcus pushed back, you didn't yet answer his question about narrowing the scope. The general checklist expects you to answer concerns directly with a reason or example, or offer a modified next step. Try acknowledging the target pressure and then explain why the broader hold is still needed, or propose a compromise.
> - You also didn't close with a clear next step and a time — for example, when you'll confirm the cause or when you'll check back with him.
> 
> **Also worth noting:** "Can your team support that this week?" is a good direct ask, though "support" is slightly vague. More specific: "Can your team free up two people for inspection starting tomorrow?"
> 
> **Try this instead:**
> "I understand the quarterly target is tight. Based on our data, the defect shows up across all batches since the switch, not just the first two. Could we start with one hundred percent on the newest batches and I'll report …

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what we wanted to hear, but we're looking at a potential delay. The integration testing is taking longer than expected because the API documentation we received had some gaps we didn't catch early on.
> 
> [Setting: You're a project lead at your company, meeting with Sam, a vendor account manager. The weekly check-in is halfway through. Sam's team is building a module for your product. Today's goal: confirm whether the vendor will hit the March deadline.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the API documentation—there were missing fields in the authentication flow that we only found once we started building. To stay on schedule, we'd need your team to assign someone to walk us through the auth layer by Thursday, and we'd probably need to push the user-acceptance testing window back by about a week. Otherwise, we're looking at a slip into early April.
> 
> [Hint: you could say "If we extend the UAT window, what else on your side would need to change?"]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining, everyone. I'm Sarah, the design lead. We're excited to get Project Atlas moving.
> 
> [You're the project manager at Apple, kicking off a new app launch. The team has exchanged emails for two weeks. Today's goal is to align on the schedule and key features. The next step is to send a timeline to leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is significant—what's driving the delay, and what does your recovery plan look like?
> 
> [You're a PM at Apple. Your manager David is in a 1:1 with you about the Atlas app launch. He needs to brief leadership on Friday.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining us today. We're all looking forward to hearing how this project will take shape.
> 
> [You're the lead project manager kicking off a new mobile app launch at Apple. Over the past two weeks, the team has exchanged emails about requirements and timelines. Today's goal is to align on the schedule and key features. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> I see. That's a difficult conversation, but I'm glad you're bringing it to me directly. Walk me through what happened.
> 
> [You're a senior engineer at Google reporting to your engineering manager. Your team is building a new search feature, and integration testing has taken longer than expected because of unexpected compatibility issues with the legacy system. The original deadline was the end of this month, and you need to reset expectations.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is significant, though. Walk me through the bugs and what recovery looks like.

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, do you have a minute? I wanted to run something by you about the Q3 budget."
> 
> [You work at a mid-sized tech company. Your character is David, your direct manager. You're a team lead asking for a larger share of the department budget for your project. The conversation goal: make a clear, reasonable request and be ready to explain why your project deserves it.]
> 
> [You can describe a different situation anytime.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> Linda: "Hi, thanks for setting this up. I wanted to check in on how things are going with the three projects we have running right now. How are you feeling about the workload?"
> 
> [You're a data analyst at a tech company. Linda is your manager. Goal: ask for help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> Linda: "I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't move. Between the Q4 forecast and the dashboard migration, which one do you think would be easier to hand off or delay?"
> 
> [Hint: you could say "The dashboard migration is mostly technical work that [colleague] could support, while the Q4 forecast needs my direct input."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a specific solution, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Great job—you framed the issue as a joint decision and showed you could handle two projects well.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows ownership and invites your manager into the prioritization, rather than dumping the problem on her. It follows the "reason and solution" approach: you gave a clear reason (three projects, one month) and a specific, actionable solution (move one to next month).
> 
> **What to improve:**
> - You didn't name which two you would prioritize or why. Adding your recommendation would show you've thought it through and make the decision easier for Linda.
> - You could also briefly mention what support you'd need if one project were delayed, so Linda sees you've considered the full picture.
> 
> **Also worth noting:** "I can finish two well" is a strong, confident line. It subtly signals capability rather than overload.
> 
> **Try this instead:** "I can finish the Q4 forecast and the pricing analysis well, since both need my direct input. The dashboard migration is mostly technical work that Priya could support. Could we move that to next month and have her take the lead on the data mapping?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Marco" gender="male"/&gt;
> 
> Thanks for making the time. We're about six months into using your platform, but honestly, we're not sure we're getting the value we expected. Our customer support team is still spending a lot of time on manual work, and the reporting isn't giving us what we need for our weekly leadership reviews.
> 
> [You are a customer success manager at a software company. Marco is the operations director at a mid-sized e-commerce firm in Chicago. He agreed to this call to discuss why the product isn't delivering results. Your goal is to understand his needs and identify what success looks like for his team.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 88 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our support team is copying data between three different tools just to close a single ticket. We bought your platform to centralize everything, but the integrations we were promised still aren't pulling the right fields. So my team is doing double work, and I'm the one explaining the delays to leadership every Monday.
> 
> What I'd really like is automated reporting that shows ticket volume, resolution time, and customer satisfaction in one view. Right now I have someone spending four hours every Friday pulling that together manually.

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:47 UTC

**PASS 14 · FAIL 2 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T3: sandwich steps < 2 (found partially agree, keep the discussion open, move forward together) |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C1 Out of scope (Coach) · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 9 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn and observe before pushing for big changes.
> 
> **Understand your place in the organization**
> - Learn your role in the team, your team's role in the department, and where the company sits in its market.
> - Let your long-term career direction guide what you focus on, even if you don't stay at this company forever.
> 
> **Start with humility and learn proactively**
> - Your past success may not transfer directly. Listen more than you push.
> - Ask questions while you're new — people expect it.
> - Read internal documents and learn from coworkers.
> - Make a specific learning plan instead of worrying about performance ratings right away.
> 
> **Observe the culture**
> - **Pace:** how fast decisions and projects move
> - **Decision style:** top-down or bottom-up, and whether different opinions are welcome
> - Be flexible. You can't reshape an established culture quickly.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, are we starting soon? I think everyone's on the call."
> 
> [You're a project manager at Tesla. The team is kicking off a new mobile app for scheduling service appointments. Over the past week, there have been emails back and forth about requirements and timing. Today's goal is to align on the schedule and key features so development can begin. The next step will be getting written approval from the US engineering lead by next Wednesday. Sarah is a supportive teammate on the call.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee — good to have the background laid out. I'm looking forward to finally getting aligned on this."
> 
> [You've covered all three ICE steps: introduction, context with past/present/future, and expectations for interaction and detail. Here's your feedback.]
> 
> **Course score: 5/5**: You delivered a clear, complete opening that set up the meeting professionally.
> 
> **How it went:** You jumped straight in with confidence and covered every part of ICE without needing any cues.
> 
> **What worked:** Your line "Please ask questions anytime, and this will be a detailed discussion" set both the interaction level and the detail level — that's a strong Expectations step.
> 
> **What to improve:** No major gap. If you want to strengthen it further, you could add one line about how you personally contributed to the pre-work, such as "I've also been reviewing the requirements with the design team."
> 
> **Also worth noting:** "A lot of emails" is fine, but "quite a few emails going back and forth" sounds slightly more natural for a kickoff.
> 
> **Try this instead:** "Over the past two weeks, we've had quite a few emails going back and forth about the main features. I've also reviewed the requirements with the design team to prepare for today."
> 
> Want to try again, or pick a new scene?

### C4 Menu path: greeting, then "1" · PASS

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
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> "Hi everyone, thanks for joining. I'll let you take it from here."
> 
> [You're the lead PM kicking off a new mobile app project at Apple in Cupertino. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features before development starts. You need to get written sign-off from the design lead by next Monday. Sarah is a supportive teammate on the call.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

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
> "Thanks for pulling this together, D. The retail team has a lot of questions about inventory and staffing for the holiday push. I'm Sarah, I manage regional store operations for Greater China. What's the plan for today's discussion?"
> 
> [Apple, Shanghai. You are D, a PM leading a meeting with Sarah and the China retail team. Goal: align on the holiday sales plan.]
> 
> [Start with your introduction.]

**Attempt 2**

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
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the retail operations lead for Greater China. I know the holiday season is always intense for us, so I'm glad we're getting ahead of it.
> 
> We're at Apple in Shanghai. You're the PM running this meeting with the China retail team. The goal is to align on the holiday sales plan.
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> **The ICE method for opening a meeting you lead:**
> 
> • **Introductions** — State the topic, your name/role, and how you'll help:  
> "Today we're aligning on the CRM rollout. I'm D, the PM, and I'll keep us on track for decisions by the end of the hour."
> 
> • **Context** — Past, present, future:  
> "We've had emails back and forth on requirements for two weeks. Today we'll review the US team's priorities and flag any blockers. Next, we'll send a timeline to leadership by Friday."
> 
> • **Expectations** — Set how people should participate:  
> "Please hold detailed questions for the last ten minutes so we cover all priorities first."
> 
> **Quick tip:** Add numbers and sequencing ("first… then…") to sound prepared and in control.
> 
> Want to practice this now? Tap the mode menu at the top right and choose **Role-play**, or ask me about a specific meeting type.
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
> **The ICE method for opening a meeting you lead:**
> 
> • **Introductions** — One or two statements on the topic, then your name, role, and how you'll contribute:
> "Today we're reviewing the Q3 roadmap for our internal CRM. I'm D, the PM, and I'll be guiding us through priorities and capturing decisions."
> 
> • **Context** — Past, present, future with a sense of time:
> "We've had async comments in the doc over the past week. Today we'll confirm the top three deliverables and identify owners. We'll share the final plan with the US leads by next Thursday."
> 
> • **Expectations** — How people should take part and how detailed you'll get:
> "Feel free to jump in with questions, but let's keep this high level—detailed specs are for the follow-up with engineering."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I think we should list our traditional coffee drinks first on the menu. It stays true to our brand identity, and our long-time customers expect that when they walk in."
> 
> [Starbucks headquarters, Seattle. You're a product manager on the menu team. Bob is a senior marketing colleague. The team is deciding the layout for the new summer menu rollout. Bob's proposal has a real strength—brand loyalty—but there's also data he isn't focusing on.]
> 
> **Hint:** You can honestly agree that brand tradition matters to Starbucks. Then share what the sales data suggests.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to keep the discussion open and productive:
> 
> • **Partially agree** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a reason** — use facts or data if you have them
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives rather than shutting down the idea
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> The goal: express your view during discussion, then move forward together once the team decides.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 89 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> "I hear you on the trial approach, but I'm not sure time is the main issue here—we're talking about a menu layout change, not a new product launch. The real question is what drives summer sales. Our iced frappuccinos outsell traditional coffee three to one from June through August. If we lead with tradition, we're leading with our weakest performer in peak season."
> 
> [Bob seems open to alternatives but wants to see data behind your reasoning. He's waiting to hear if you have a specific compromise in mind.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open any meeting you lead:
> 
> **1. Introductions**
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (past, present, future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - Interaction: hold questions for the end, or invite them anytime
> - Detail level: deep technical discussion or high-level only
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new supplier process. I'm Jamie, the operations lead, and I'll coordinate the rollout. We've had emails back and forth for two weeks. Today we'll review the timeline and flag risks, so we're aligned before go-live. We'll send the signed plan to the US team by next Friday. Please hold questions until the end — we have a lot to cover and only thirty minutes."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> As a PM in egg farming, would you like an example for a farm operations or supply-chain kickoff?

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_name="" learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, so I've been looking at the data from our pilot farms. Washing eggs definitely cuts down on salmonella risk, but it also strips the natural cuticle and shortens shelf life. I'm leaning toward keeping them unwashed and doubling down on farm hygiene instead. What do you think?"
> 
> [You're a PM at Google working on a food-safety initiative with Maya, a food scientist on your team. The goal is to decide whether to require washed or unwashed eggs in your supplier standards.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="" learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> • **Partially agree, honestly** — find something you genuinely accept ("I understand why…", "It makes sense that…")
> • **State your own view with a specific reason** — use facts or data where possible
> • **Keep it open** — friendly tone, ask about alternatives
> • **Move forward together** — once there's a decision, commit to next steps
> 
> Example:
> &gt; "I understand that the ML model could help us predict egg quality faster. But our current sorting line is accurate enough, and adding ML would need six months of labeled data we don't have. Could we pilot it on one barn first and measure the error rate?"
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
> Use the **ICE method** to open a meeting you lead:
> 
> **1. Introductions**
> - One or two statements on the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Interaction: hold questions or invite them anytime
> - Detail level: technical discussion or high-level overview
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line. I'm Jamie, the lead PM, and I'll manage the schedule and be your point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through the timeline, confirm resource needs, and flag risks, so we're aligned before build starts. We need sign-off from operations by next Friday. There's a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> ---
> 
> Want me to tailor this to a specific meeting you're running?

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_name="" learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> So you're saying washing actually strips the natural coating? That could change our shelf-life numbers completely.
> 
> [You're a PM at Google working on a smart-farming data tool. Maya is a product analyst on your team. The team is deciding whether to recommend egg-washing as a feature in your supplier-guidance module. She just read a report suggesting unwashed eggs last longer, but your largest pilot partner currently washes all eggs. Goal: reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_name="" learner_role="PM" learner_company="" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely understand or accept in their view
> 
> **2. State your own opinion with a specific reason**
> - Use facts, data, or clear trade-offs
> 
> **3. Keep the discussion open**
> - Friendly tone, ask about alternatives
> 
> **4. Move forward together**
> - Commit to a team decision once reached
> 
> Example:
> &gt; "I understand why the ML team wants a complex model — accuracy matters for predicting yield. But our farm partners have limited connectivity, so a lighter model deploys faster and fails less often. Could we test both on edge devices first?"
> 
> If you're leading the discussion, not disagreeing, use the **ICE method** instead:
> - **Introductions**: topic, your role, contribution
> - **Context**: past work on ML, today's goal, next step with deadline
> - **Expectations**: questions now or later, technical depth
> 
> Want me to tailor this to whether you're disagreeing or leading?

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Maria" gender="female"/&gt;
> 
> "Thanks for making time today. I need to be direct with you — three of our shipments this month arrived two to four days late, and my warehouse team is getting complaints from their customers. This is costing us money and credibility. What is your team doing to fix this?"
> 
> [You're an account manager at a logistics firm. Maria runs operations for a mid-sized retail client in Chicago. This is a quarterly review call that just started, and she opened with frustration. Your goal: acknowledge the issue, understand specifics, and move toward a concrete solution with a timeline.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I know we're all juggling a lot right now, so let's keep this tight. Where are we on the push notification feature? The marketing team is asking for a date."
> 
> [You're a PM at a mobile app company. Maya is your lead iOS developer. The team is two weeks from launch. Today's goal: align on blockers and confirm what's still at risk.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Payment API is two weeks late — that's rough. Do we know if it's a firm two weeks, or is there still room to negotiate with their team? Because if we launch without payments, we're looking at a second release cycle just for that, plus the user trust issue."
> 
> [You're doing well — you've stated the purpose, shared status, and proposed options. Maya is pushing for more detail before she'll back either option. What do you need from her to make this call?]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;profile learner_role="quality engineer" learner_company="EV battery supplier" learner_industry="automotive / EV" learner_industry_source="stated" learner_goal="discuss quality issues with production manager"/&gt;
> 
> &lt;character name="Miguel" gender="male"/&gt;
> 
> Miguel: "Thanks for coming by. I saw your email about the defect numbers, but I need more details. What exactly are we seeing on Line 2, and when did it start?"
> 
> [You're a quality engineer at your company. Miguel is the production manager. His team runs Line 2, and he's protective of his output numbers. He wants to understand if this is a real process problem or a measurement issue, and he's worried about slowing production. Your goal: explain the defect jump clearly, get agreement on a containment plan, and agree on next steps with a timeline.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV. Learning goal: discuss quality issues with production manager.
- ✓ no feedback
- ✓ words ≤ 120: 74 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Miguel: "Four percent—that's a big jump, and the timing with the new supplier is hard to ignore. But holding batches and 100% inspection means pulling people off the line and hitting our weekly output target. How long are we talking? And do we know for sure it's the supplier part, or could it be something else?"
> 
> [He's asking for specifics before committing. What evidence do you have, and what tradeoff are you proposing?]

**T3 [RP]** "feedback"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV. Learning goal: discuss quality issues with production manager.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a clear containment action, and asked for specific support with a timeline.
> 
> **How it went:** Strong opening—you connected the defect jump to a change and moved straight to a practical request.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" shows you brought a solution, not just a problem, and "Can your team support that this week?" asked for commitment with a deadline.
> 
> **What to improve:** You didn't fully address Miguel's concern about output targets or offer a tradeoff. He needs to know what he'd tell his own manager. Also, you stated the supplier change as fact rather than showing your evidence—he may need more to defend the decision.
> 
> **Also worth noting:** "After we changed suppliers" sounds like correlation, not confirmed cause. A phrase like "The defect rate jumped right after the supplier change, and initial checks point to the new part" keeps you accurate while still urgent.
> 
> **Try this instead:** "The defect rate went from 1% to 4% starting Monday, right after the supplier change. Initial data points to the new separator material, but I need two days to confirm. I'd like to hold the three affected batches and do 100% inspection for now—that protects our customers and gives us time to verify without stopping the whole line. Can your team cover the extra inspection through Thursday? If the cause checks out, we can release the hold; if…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, and I should have flagged it sooner. The integration with your payment gateway is taking longer than we estimated—about two extra weeks. That puts us at mid-July instead of end of June.
> 
> [You're the project lead at a fintech startup in Singapore. Sam is your main contact at a software vendor. The meeting is already in progress; you're discussing the rollout timeline for a new customer portal.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's the 3D Secure authentication flow—your bank partners each have slightly different requirements, and we've had to rebuild the adapter twice already. To stay on schedule, we'd need two things: your team to assign a dedicated API liaison who can get us same-day answers from your partners, and a two-week extension on the UAT window so we can run full regression tests without cutting corners.
> 
> [You're still the project lead; Sam has just asked for extra resources and more time. The deadline he mentioned was mid-July, but now he's saying "stay on schedule"—though his actual proposal would still mean a delay. He may be testing whether you'll accept fuzzy language.]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'll hand it over to you.
> 
> [You're the lead PM for Project Hippo, a new mobile app for Tesla. The team is in Austin. Over the past two weeks, there have been emails going back and forth about requirements and timeline. Today's goal is to align on the schedule and main features before development starts. The next step is to get written sign-off from the US leadership team. Sarah is a supportive teammate here to help you practice the opening.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got it. Thanks for the heads up. Walk me through what's going on.
> 
> [You're a senior engineer at Tesla in Austin. David is your manager. You need to tell him that the mobile app project you own will be two weeks late. He has a board update next Friday and needs accurate numbers. He doesn't know about the delay yet.]
> 
> [Goal: practice delivering bad news clearly, with a reason, and a proposed next step.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David leans back, listening.
> 
> Two weeks. That's going to push us past the board update. How many bugs are we talking about, and what's your plan to recover the time?
> 
> [Hint: give a specific number if you have one, and walk through your recovery option clearly.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David stops by your desk late Friday afternoon.
> 
> "Hey, I need to ask you a favor. The leadership team just reviewed the Q3 numbers, and they want the customer churn report split by enterprise vs. SMB before Monday's board meeting. I know you already have the full report ready for Tuesday. How hard would it be to add that breakdown?"
> 
> [You're a data analyst at a SaaS company in San Francisco. David is your manager. The conversation goal: ask for something proportionate in return for this extra weekend work, or push back if the request is unreasonable.]
> 
> What do you say?

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> I know you've got a lot on your plate right now. The product team just asked for the churn analysis, marketing needs the campaign attribution model by Thursday, and finance is still waiting on those quarterly forecasts. I'm looking at the timeline and honestly wondering if we need to push something out or bring in support. Walk me through what you're seeing.
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Lisa is your manager, direct but fair. She wants the work done but also wants to keep you from burning out. Goal: agree on priorities and, if needed, get resources or deadline relief.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in with finance — that one can't slip. Between the dashboard migration and the pricing analysis, which one feels like it would lose the most momentum if it waited? And if we do push one out, what would you need from me to make sure the other two still land cleanly?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific solution, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** You came across as organized and solution-oriented — exactly the tone that builds trust with a manager.
> 
> **What worked:** "I can finish two well" honestly showed capacity without self-criticism, and "Could we decide together" framed Lisa as a partner, not a rescuer.
> 
> **What to improve:** You named three projects but didn't say which two you would choose or why. Offering a recommendation, even tentative, would show you've thought it through and make the decision easier for Lisa.
> 
> **Also worth noting:** "All three are due this month" is a strong fact; adding one line of impact ("so I'm splitting focus across all three") would strengthen the case without sounding like complaining.
> 
> **Try this instead:** "I can finish the Q4 forecast and the pricing analysis well. The dashboard migration has more flexible stakeholders — could that move to early next month?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Great to finally meet you. I'm Priya, VP of Operations at Meridian Logistics. We signed the contract two weeks ago, but honestly, we're still figuring out what this rollout is going to look like on our end.
> 
> [Meridian Logistics, a mid-sized freight company in Chicago. You're the customer success manager from the software vendor. Priya is your main contact; the goal is a discovery conversation so you can configure the platform correctly.]
> 
> What should we start with?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 101 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is juggling three different spreadsheets and a shared email inbox to track shipments. It's messy—last month we had two trucks double-booked because someone edited the wrong file, and we lost a client over a missed delivery window. 
> 
> We're hoping your platform can give us one place where dispatch, drivers, and our customers all see the same information in real time. But I need to be honest, our drivers aren't all tech-savvy, and some of our dispatchers have been doing this the same way for fifteen years.
> 
> What else do you need to know?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:57 UTC

**PASS 13 · FAIL 3 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FAIL | T2: feedback score ≥ 4 (no score) |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T3: sandwich steps < 2 (found partially agree, keep it open, move forward together) |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C1 Out of scope (Coach) · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 4 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **First 90 days: learn before you act**
> 
> • **Map your place** — understand your role in the team, your team's role in the department, and the department's role in the company. Also learn where the company sits in its market.
> 
> • **Set your direction** — decide where you want your career to go. Use that to guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Stay humble and ask questions** — your past success doesn't guarantee success here. Listen more than you push. Ask questions boldly while you're new.
> 
> • **Learn from documents and people** — read internal documents, talk to coworkers, and focus on building a specific learning plan rather than worrying about performance ratings too early.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, UX designer on this project. I think we're all here?
> 
> [You're leading the kickoff for a new mobile app feature at Tesla. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the design direction and timeline. The next step will be to share a prototype with the US engineering team. Sarah is ready and supportive.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Great to meet you, Lee. Three years on the team — that's solid experience for this. I'm glad we'll have someone keeping the schedule tight.
> 
> The email threads were getting pretty long, so it's good we're finally sitting down together. I noticed there was still some back-and-forth about whether the charging-station finder or the home-energy dashboard should come first. Did you want to start with that, or walk us through the full timeline first?
> 
> [All three ICE steps are covered: introduction with role and contribution, context with past emails and present goal plus a timed next step, and expectations with inviting questions and noting the detailed level. Ready for feedback.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Morning! I'm Sarah, UX lead on this. Looking forward to hearing the plan."
> 
> [We're at Tesla in Austin. You're the project manager kicking off a meeting about a new mobile app for tracking home energy use. Over the past two weeks, the team exchanged emails about requirements and scope. Today's goal is to align on the schedule and main features. The next step is to share a timeline with leadership by next Friday. I'm Sarah, a supportive teammate.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee — good to have the timeline clear. Two weeks of emails definitely piled up, so it'll help to get everything in one place today."
> 
> [Now set expectations for the meeting.]

### C4 Menu path: greeting, then "1" · PASS

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
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> "Hi, thanks for joining. I'm Sarah, the UX lead on this project. Before we dive in, I'll hand it over to you to kick us off."
> 
> [You're the project lead at Apple, running a kickoff for a new fitness app feature. The team has exchanged emails about user research for the past two weeks. Today you need to align on the feature set and timeline. The next step is to share a proposal with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

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
> "Thanks for pulling this together, D. The retail team in China has been asking for clarity on the holiday plan since early October, so it's good we're finally sitting down. I'm Sarah, regional retail operations. I'll be tracking inventory targets and making sure our stores can actually deliver whatever we decide."
> 
> [You are a PM at Apple. Sarah is on your retail team. The meeting is in Shanghai. Your goal: open this meeting with a clear introduction, context, and expectations using the ICE method.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="Technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, the retail operations lead for Greater China. I know the holiday season is always intense for us, so I'm glad we're getting ahead of it.
> 
> [You're the PM leading this kickoff at Apple. The team has exchanged emails about Q4 priorities over the past two weeks. Today's goal is to align on the holiday sales plan and flag any supply risks before we finalize store allocations. You need to get sign-off from the US merchandising team by next Friday to lock the plan.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · PASS

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
> The ICE method gives your opening a clear structure so you sound prepared and in control:
> 
> • **Introductions** — state the topic, your name, role, and how you'll contribute
> • **Context** — past (how you got here), present (today's goal), future (next step with a deadline)
> • **Expectations** — how people should participate, or how detailed the discussion will be
> 
> Example for your CRM project:
> 
> "Hi everyone, today we're aligning on the rollout plan for the internal CRM. I'm D, the PM leading this, and I'll be driving timeline and cross-team coordination."
> 
> "We've had a lot of back-and-forth on requirements over the past two weeks. Today we need to confirm the pilot group and the launch date, so we can move to build next week. The target is to share the final plan with leadership by Friday."
> 
> "To keep us on track, I'll run through three topics and then we'll open it up for questions at the end."
> 
> Tips:
> • Name a specific day for the next step — "by Friday" sounds more decisive than "soon"
> • Set expectations early so people know when to jump in
> 
> Want to try a practice opening, or should we move to role-play so you can test it out?
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
> Use the ICE method to open with confidence and clarity:
> 
> • **Introductions** — topic, your name, role, and what you'll contribute
> • **Context** — past (how you got here), present (today's goal), future (next step with a deadline)
> • **Expectations** — how people should participate, or how detailed the discussion will be
> 
> Example for your CRM project:
> 
> "Hi everyone, today we're aligning on the rollout plan for the internal CRM. I'm D, the PM leading this, and I'll be driving timeline and cross-team coordination."
> 
> "We've had a lot of back-and-forth on requirements over the past two weeks. Today we need to confirm the pilot group and the launch date, so we can move to build next week. The target is to share the final plan with leadership by Friday."
> 
> "To keep us on track, I'll run through three topics and then we'll open it up for questions at the end."
> 
> Tips:
> • Name a specific day for the next step — "by Friday" sounds more decisive than "soon"
> • Set expectations early so people know when to jump in
> 
> Want to try a practice opening, or should we move to role-play so you can test it out?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> Bob: "Hey, thanks for making time. So I've been thinking about the menu redesign for the summer launch. I really think we should list our traditional hot coffees first — it's core to our brand identity, and loyal customers expect that structure when they walk in. What's your take?"
> 
> [At Starbucks headquarters in Seattle, you're a product manager on the menu team. Bob is a senior marketing colleague. The summer menu launches in six weeks. Your goal: disagree with Bob's idea and propose a better approach.]
> 
> [Hint: what part of Bob's idea can you honestly agree with?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements:
> 
> • **Partially agree honestly** — show you understand their view
>   - "I understand that…"
>   - "It makes sense that…"
>   - "I can see why…"
> 
> • **State your opinion with a reason** — use facts or data if you have them
>   - "but our data shows…"
>   - "however, the numbers suggest…"
> 
> • **Keep it open** — invite alternatives
>   - "Are there other options?"
>   - "What if we tried…?"
> 
> • **Move forward together** — once decided, support the team choice
> 
> **Example:**
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 68 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> Bob: "A smaller trial — that's interesting. What kind of trial are you thinking? Like a single store, or a digital A/B test on the app? And just to push back a little — we do have hard data from last summer that iced frappuccinos outsold hot drinks by thirty percent. So if we're worried about time, wouldn't moving forward now actually save us from a rushed change later?"

### D2 Background in passing, workplace change, and lessons applied only when they fit · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method in this order:
> 
> • **Introductions** — one or two statements about the meeting topic, then your name, role, and how you'll contribute
>   - *"Hi everyone. Today we're kicking off the new logistics system. I'm Danny, the lead PM, and I'll manage the schedule and be your main point of contact for requirements."*
> 
> • **Context** — past, present, future
>   - *Past:* how you got here (emails, earlier meetings)
>   - *Present:* today's topics and goal
>   - *Future:* next steps with a deadline
>   - *"We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned. We need written sign-off from the US team by next Monday."*
> 
> • **Expectations** — how people should take part, and how detailed the discussion will be
>   - *"Please hold questions until the end — we have a lot to cover and not much time."*
>   - *Or:* *"Feel free to interrupt with questions. This will be a detailed technical discussion."*
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
> "Washing eggs actually increases the risk of salmonella if the cuticle gets damaged. The EU bans it, and most of our suppliers are in Europe. Why would we change now?"
> 
> [You're a PM at Google working on food safety standards for Google Food. Maya is a food safety specialist on your team. You're in a meeting room in Mountain View. The goal: decide whether to require egg washing for all campus suppliers.]

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
> Use the **feedback sandwich** when you disagree with a coworker's idea about the ML approach:
> 
> • **Partially agree, honestly** — find something you genuinely accept
>   - *"I understand why an off-the-shelf image classifier seems faster to deploy."*
> 
> • **State your own view with a specific reason** — use facts or data
>   - *"But our barn conditions change with humidity and lighting. A generic model mislabeled 12% of eggs in last month's pilot. We need a model trained on our own data, even if it takes two more weeks."*
> 
> • **Keep it open** — friendly tone, ask about alternatives
>   - *"Are there other ways to speed this up? Maybe we could start with the pre-trained model and retrain it on our data in parallel?"*
> 
> • **Move forward together** — once you decide, show commitment
>   - *"Let's go with the custom model. I'll draft the timeline and share it by Thursday."*
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
> Use the **ICE method** to open a meeting you lead:
> 
> **1. Introductions**
> - State the meeting topic in one or two sentences.
> - Give your name, role, and how you'll contribute.
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings).
> - Present: today's topics and goal.
> - Future: next steps with a deadline.
> 
> **3. Expectations**
> - Interaction: hold questions or invite them anytime.
> - Detail level: technical discussion or high-level only.
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We need written sign-off from the US team by next Monday. Please hold questions until the end because we have a lot to cover."
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
> 
> &lt;character name="Bob" gender="male"/&gt;
> 
> "I think we should wash all the eggs before packaging. It looks more professional, and customers expect clean eggs on the shelf."
> 
> [You and Bob are PMs at a supplier partnership team in Mountain View. You're discussing a new process for an egg-farming partner. Bob wants washed eggs; you have data showing unwashed eggs stay fresher longer and meet FDA standards. The goal is to reach a team decision.]
> 
> [Hint: think about what you can honestly agree with before you share your view.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming (guessed from the company). Learning goal: discuss whether or not we should wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> • **Partially agree, honestly** — find something you genuinely accept in their view.
> • **State your opinion with a specific reason** — use facts or data where possible.
> • **Keep it open** — friendly tone, ask about alternatives.
> • **Move forward together** — once there's a decision, commit to next steps.
> 
> Example:
> &gt; "I understand that washing the eggs looks more professional on the shelf. But our data shows unwashed eggs stay fresher 30% longer, and that matches FDA standards. Could we test a small batch of each and compare customer feedback?"
> 
> If you need to push back on scope or timeline changes later, the same course covers a method for rejecting unreasonable requests.
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Maria" gender="female"/&gt;
> 
> "Thank you for making time today. I'm Maria, the operations director on your account. I need to be direct with you — three of your shipments arrived late this month, and two of them missed your customers' delivery windows. My team is looking into it, but I wanted to hear from you first. How is this affecting your business right now?"
> 
> [You're an account manager at a logistics firm. Maria is the operations director at your client, a mid-sized electronics retailer in Chicago. She's frustrated but hasn't cancelled the contract yet. She wants to understand the impact and see a credible plan. Your goal: acknowledge the issue, learn the full picture, and agree on a fix with a clear timeline.]
> 
> [Difficulty: Medium]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, thanks for pulling everyone together. I know we're all juggling a lot right now, so I'll keep this tight. Where do we stand on the iOS build?"
> 
> [You're the PM leading the weekly sync for your mobile app launch at a fintech startup in Singapore. Maya is your senior engineer. The team is behind on the beta timeline, and she's waiting to hear your update before she shares her blockers.]
> 
> [What's your opening?]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Maya nods, taking notes on her laptop.
> 
> "Seventy percent—got it. The payment API delay is rough. Our vendor committed to June 10th, then June 24th, and now they're saying July 8th. Before we talk about cutting payments or pushing beta, I need to flag something: if we launch without payments, we can't run the user incentive program marketing already announced. What's your take on that tradeoff?"
> 
> [This is a Medium difficulty custom scene. She's testing whether you've weighed the downstream impact before bringing options to the team.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Miguel" gender="male"/&gt;
> 
> Miguel: "Thanks for flagging this so quickly. I'm seeing the numbers too — defect rate on Line 2 went from 1.2% to 4.8% since Monday. That's above our customer threshold. What do you think is driving it?"
> 
> [You are a quality engineer at CATL's Michigan plant. Miguel is the production manager for Line 2. The conversation goal: agree on the likely cause and next steps to contain the issue.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 76 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Miguel: "A new supplier — that timing lines up. Which part exactly, and when did the first batch from them hit the line?"
> 
> He pauses, checking his tablet.
> 
> "Full inspection on every cell is going to slow us down. We're already behind on the Q3 backlog. If I pull people for 100% inspection, I need to know how long we're talking — a day, three days, a week? And what's the fallback if the part checks out fine?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose early, gave a clear reason with data, proposed a specific action, and asked for support — all with a professional, collaborative tone.
> 
> **How it went:** This was a strong, direct conversation that moved quickly toward a decision.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you named the problem, the data, and the likely cause in one line. "I'd like to hold the affected batches and inspect 100% of the cells" — you proposed a concrete containment step with a clear scope.
> 
> **What to improve:** You didn't set a timeline for the 100% inspection or offer a fallback if the part checks out, which Miguel specifically asked about. This left him with uncertainty about resource planning.
> 
> **Also worth noting:** "Can your team support that this week?" is polite, but framing it as "What support would you need from my team to make this work?" can feel more like shared ownership.
> 
> **Try this instead:** "I'd like to hold the affected batches and inspect 100% of cells for the next 72 hours. If the part checks out, we can release the hold and return to normal sampling. What would you need from my team to make the inspection schedule work?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear right now, but we're looking at a real risk of slipping into next month. The integration with your CRM turned out to be more complex than their documentation suggested, and we're still working through some edge cases.
> 
> [We're at GreenTech Solutions in Denver. You're the project lead for a solar panel installation project, and Sam is the account manager from your software vendor. The goal: resolve the delay without derailing the overall timeline.]
> 
> What do you need from us to get back on track?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The CRM integration is the main blocker. Their API doesn't handle bulk updates the way we expected, so we're writing a custom middleware layer. That's adding about two weeks we didn't plan for.
> 
> From your side, two things would help. First, can you confirm whether the CRM data format is locked? If your team is still cleaning fields, every change forces us to rebuild the mapping. Second, would you be open to a phased delivery? We could ship the core reporting module on time and add the CRM sync two weeks later.
> 
> What are your priorities here — keeping the original date with fewer features, or keeping the full scope with a short delay?

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, from the marketing side. I'll be coordinating the campaign assets for this launch.
> 
> [You are the lead PM at Apple, kicking off Project Hippo — a new app feature. The team has exchanged emails for two weeks. Today's goal is to align on requirements and schedule. Your next step is to get sign-off from the US team by next Monday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got it. I saw the new timeline you shared this morning. Walk me through what happened.
> 
> [You are a senior engineer at Tesla. David is your manager. The battery management software update is now projected to ship two weeks past the committed date. He has a quarterly review with leadership on Thursday and needs to understand the delay.]
> 
> [Your goal: explain the delay, take responsibility where appropriate, and propose how to minimize the impact.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. How many bugs are we talking about, and which areas are hit the hardest?
> 
> [Your plan to recover time — I need to hear the specifics before I can take this to leadership on Thursday.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need to ask you for something, and I know the timing isn't great. We're three weeks from integration testing, and I just got word from the client that the GPS algorithm accuracy needs to come down from 2% error to 1%. That's a significant scope increase this late in the cycle.
> 
> [You work at a mapping tech company in San Francisco. You're an engineer or project lead. David is your manager. The conversation starts now—he's asking you to take on more work with the same deadline.]
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> I need to talk to you about the workload on your plate right now. Three projects landing at the same time is a lot, and I want to make sure we're setting you up to succeed rather than just survive. Walk me through what you're seeing.
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Linda is your manager, direct but fair. She wants the team's output to stay high and doesn't want anyone burned out, but she also needs to hear your thinking before she'll reshuffle anything.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in with Finance — that's not moving. The dashboard migration was promised to Operations by month-end, and the pricing analysis is tied to the product launch review.
> 
> That said, I don't want you rushing all three and doing none of them well. Which of the three feels most at risk if you had to push it, and what would you need to keep the other two on track?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly with specific projects, proposed a collaborative solution, and showed ownership by offering to finish two well.
> 
> **How it went:** Strong opening — you came prepared with names and deadlines, and you framed the ask as a joint decision rather than a complaint.
> 
> **What worked:** "I can finish two well" showed accountability and set up the tradeoff conversation. "Could we decide together" invited partnership without sounding helpless.
> 
> **What to improve:** You could have added a brief reason why the third project is the most movable — for example, which stakeholder has the most flexibility, or what the downstream impact would be. This gives your manager something concrete to negotiate with.
> 
> **Also worth noting:** Your tone was confident and solution-oriented. "I can finish two well" is a phrase that works in many prioritization conversations.
> 
> **Try this instead:** "I can finish two well. The pricing analysis has the most flexible stakeholder — the product launch review could move to the first week of next month without blocking engineering. Would that work, or should I look at another option?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

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
> Thanks for making time today. We're a mid-sized logistics company, about 400 people, and we signed up for your platform three weeks ago. Honestly, we're still not sure how much of it we'll actually use. My operations team is on spreadsheets now, and my CEO wants us "fully digital" by Q3, but no one's defined what that means.
> 
> [You're a customer success manager at your software company. Elena is the operations director at a logistics firm in Chicago. Your goal: understand their needs so you can configure the product. Ask your questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 92 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Elena: Right now, our dispatch team is juggling five different spreadsheets to track shipments, driver schedules, and customer notifications. When something goes wrong, like a delayed delivery, it takes them twenty minutes just to figure out which driver and which customer are affected. Last month we had three complaints escalate to me because the right person didn't get updated in time. My CEO reads those complaints, so now there's pressure to fix it fast.
> 
> [She's given you a specific pain point. What follow-up would help you understand what "fixed" looks like?]

</details>
