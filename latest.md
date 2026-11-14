# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-14 02:38 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C1 Out of scope (Coach) | 2/2 | 2/2 |
| C2 Coach starter: first 90 days | 2/2 | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 2/2 |
| C4 Menu path: greeting, then "1" | 1/2 (1 flaky) | 2/2 |
| C5 Custom scene with profile | 2/2 | 0/2 |
| C6 Profile save, then use (Coach) | 2/2 | 2/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 0/2 | 1/2 (1 flaky) |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 1/2 | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **28/32** | **29/32** |

## Runs
- production-1: RED · PASS 14 · FAIL 1 · FLAKY 1 · ERROR 0
- production-2: RED · PASS 14 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-1: RED · PASS 15 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 14 · FAIL 1 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 02:22 UTC

**PASS 14 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | FLAKY | passed on rerun; first try: T1: contains "Start a meeting" |
| C5 Custom scene with profile | PASS | – |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T2: profile: company contains any of ["google"] (no profile line); T3: sandwich steps < 2 (found partially agree, keep it open, move forward together) |
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
- ✓ list items ≥ 2: 6 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Learn and understand your new environment**
> • Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> • Decide where you want your career to go. Let that direction guide what you learn and the opportunities you pursue, even if your long-term goal is outside the company.
> 
> **Start with humility and learn proactively**
> • Be flexible and listen. Avoid being overly aggressive.
> • Ask questions boldly while you are new.
> • Learn from coworkers and internal documents.
> • Focus first on learning and making a specific plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> What's your new role, and what feels most challenging so far?

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're excited to get Project Hippo moving.
> 
> [Setting: You're a project manager at Apple, leading a kickoff meeting with Sarah and the cross-functional team in Cupertino. The project is launching a new fitness app feature. There have been several email threads over the past two weeks about scope and timeline. Today's goal is to align on the schedule and key deliverables. The next step will be to share a timeline with leadership for sign-off by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, Lee. That sounds like a clear plan — looking forward to seeing the timeline.
> 
> **Course score: 5/5** — You covered all three ICE steps smoothly.
> 
> **How it went:** Great job! You introduced yourself and your role, gave full context with past, present, and future, and set both interaction and detail expectations.
> 
> **What worked:**
> - "Please ask questions anytime, and this will be a detailed discussion" — this sets Expectations for both level of interaction and level of detail in one clean sentence.
> 
> **What to improve:**
> - Nothing major. One small polish: "agree on the schedule" is fine, but "align on the schedule" is more common in global teams.
> 
> **Also worth noting:**
> - Your introduction was efficient. In larger meetings, some PMs add one line about how they'll contribute, e.g. "I'll be the main point of contact for requirements" — optional, not required.
> 
> **Try this instead:**
> - "Hi everyone, I'm Lee, the lead PM for this launch. I'll be managing the schedule and also the main point of contact for requirements. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to align on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime — this will be a detailed discussion."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### C4 Menu path: greeting, then "1" · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Hello"
- ✗ contains "Start a meeting"
- ✓ contains any of ["describe","your own"]
- ✓ character line: absent
- ✓ no feedback
- ✓ global checks G1–G4

> Hi there! Nice to meet you. I'm Alex, a project manager on the product team here at Tesla.
> 
> [We're at Tesla headquarters in Palo Alto. You're a new team member joining the product team, and I'm giving you a quick welcome before our weekly sync. I want to hear a bit about your background and what you'll be working on.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "1"
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Great, let's practice opening a meeting.
> 
> Hi everyone, thanks for joining. I'm Sarah, the marketing lead on this project.
> 
> [We're at Apple in Cupertino. You're the project manager for a new fitness app launch. The team has exchanged several emails about features and timeline over the past two weeks. Today's goal is to align on the launch schedule and marketing plan. After this meeting, you'll send a summary to leadership by next Friday.]
> 
> [Start with your introduction.]

**Attempt 2**

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

> Great, let's kick off this meeting. We're all here.
> 
> [You're the lead project manager at Apple, running a kickoff meeting for a new mobile app feature. Over the past two weeks, the team has exchanged emails about requirements and design mock-ups. Today's goal is to align on the schedule and key deliverables before development begins. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · PASS

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="Technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for having us on the call. We're looking forward to hearing your plan for the holiday season.
> 
> [Scene: Apple. You are D, a PM leading a meeting with Lisa, a retail operations manager based in Shanghai, and her team. Goal: align on the holiday sales plan and confirm next steps before execution.]
> 
> [You can describe a different situation anytime.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident leading meetings with US team","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident leading meetings with US team","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident leading meetings with US team","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"software","goal":"sound more confident leading meetings with US team","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="software" learner_industry_source="inferred" learner_goal="sound more confident leading meetings with US team"/&gt;
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Start with a short introduction: your name, role, and how you'll help with the project. Then give context in three parts — past (how you got here), present (today's goal), and future (next steps with a deadline). Finally, set expectations: say how people should take part and how detailed the discussion will be.
> 
> Example for your CRM kickoff:
> - "Hi everyone, I'm D, the PM for our internal CRM. I'll be managing the schedule and keeping requirements clear across teams."
> - "We've had a lot of email threads these past two weeks. Today we need to align on the rollout phases and who owns each one. After this, we'll share a timeline with leadership by next Friday."
> - "There's a lot to cover, so please hold questions until the end. We'll stay high level today and get into details in the next session."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you have questions about any part?

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: software (guessed from the company). Learning goal: sound more confident leading meetings with US team.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method: Introductions, Context, Expectations.
> 
> **Introductions**
> Give one or two sentences about the meeting topic, then introduce yourself: name, role, and how you'll contribute.
> 
> **Context (Past, Present, Future)**
> - Past: how you got to this meeting ("We've had emails going back and forth...")
> - Present: today's topics and goal
> - Future: next steps with a deadline ("by next Monday")
> 
> **Expectations**
> Say how people should participate and how detailed the discussion will be:
> - Interaction: "Please hold questions until the end" or "Feel free to interrupt"
> - Detail: "We'll stay high level" or "This will get technical"
> 
> Example as a PM at Google:
> "Hi everyone, today we're kicking off the internal CRM rollout. I'm D, the lead PM, and I'll manage the schedule and requirements. We've had threads going back and forth for two weeks. Today we'll align on phases and owners, then share a timeline with leadership by next Friday. There's a lot to cover, so please hold questions until the end. We'll stay high level today."
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
> I think we should list the traditional coffee first on the new store menu. It stays true to our brand identity, and customers expect to see it right away when they walk in.
> 
> [Setting: Starbucks headquarters, Seattle. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to redesign the in-store menu boards for the summer rollout. Goal: share your view on the menu order and reach a decision together.]
> [Hint: Bob cares about brand identity. What do you think about his key point, and what data might matter for summer sales?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich method. Start by partially agreeing with the other person's view, then state your own opinion with a specific reason, and keep the discussion open by asking about alternatives.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Then you can suggest a compromise, such as testing a digital display that changes by season.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to go back to the role-play with Bob? Tap the mode menu and choose Role-play, and we'll continue where you left off.

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 47 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timing, but a smaller trial still means extra design and approval cycles we didn't plan for. If we're launching in four weeks, even a limited test pushes us close to the deadline.
> 
> What kind of timeline are you thinking for this trial?

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
> Use the ICE template in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — three parts:
>    - Past: how you got to this meeting (emails, earlier discussions)
>    - Present: today's topics and goal
>    - Future: next steps with a deadline ("by next Monday")
> 3. **Expectations** — level of interaction ("hold questions for the end" or "feel free to interrupt") and level of detail ("high level" or "we'll get technical")
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line project. I'm Jamie, lead PM, and I'll manage the schedule and be your main contact. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before we start. We need sign-off from the US team by next Monday. There's a lot to cover, so please hold questions until the end."
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

> &lt;character name="Maya" gender="female"/&gt;
> 
> I see your point about food safety standards, but washing eggs removes the natural protective coating. That coating keeps bacteria out. If we wash them, we have to refrigerate them immediately, and that changes our whole supply chain.
> 
> [You are a PM at Google, in Mountain View. Maya is a product manager on the food services team. You are discussing whether Google's campus cafes should switch to washed eggs. Goal: reach a team decision on the egg sourcing policy.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> As a PM at an egg farm, you'll need to bridge the gap between your operations team and technical stakeholders. Here's how to approach ML model discussions:
> 
> 1. **Start with the business problem**, not the technology. For example: "We need to reduce cracked-egg rates in sorting" or "We want to predict weekly demand more accurately."
> 
> 2. **Ask about data availability and quality.** Agricultural data can be messy—sensors fail, weather varies, flock cycles differ. Ask what data the model needs and how reliable it is.
> 
> 3. **Clarify success metrics in farm terms.** "Higher accuracy" is vague. Push for specifics like "reduce false positives in grade-A classification by 15%" or "cut forecast error to under 5% of weekly volume."
> 
> 4. **Discuss maintenance and drift.** Models degrade as conditions change—new feed, different breeds, seasonal shifts. Ask how often the team retrains and who owns that.
> 
> 5. **Set realistic timelines.** Farm operations run on biological cycles, not software sprints. Make sure project milestones match your production reality.
> 
> Example: "Before we commit to this model, can you walk me through what data we're using and how often we'll need to retrain it? Our flock conditions change seasonally, so I want to make sure the model stays accurate year-round."
> 
> [I’ve saved your details to your profile…

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
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** – level of interaction (e.g. "hold questions until the end" or "feel free to interrupt") and level of detail (high level or deep into specifics).
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new barn automation project. I'm Danny, lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before work starts. We need sign-off from the US team by next Monday so we can begin development. We have a lot to cover, so please hold questions until the end."
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
> "I hear the safety team thinks washing eggs before packing reduces bacteria risk. What's your take on that?"
> 
> [You're a PM at Google. Your coworker Jordan is on the operations side. You're discussing whether to add an egg-washing step to the packing process. The goal is to reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker:
> 
> 1. **Start positive** – partially agree with their view honestly ("I understand why the safety team wants this").
> 2. **State your opinion with a specific reason** – use facts or data ("but our data shows unwashed eggs have lower moisture loss and longer shelf life").
> 3. **Keep it open** – end friendly and ask about alternatives ("Would a spot-check system work instead?").
> 4. **Move forward together** – once decided, support the team choice.
> 
> Example:
> &gt; "I understand the safety concern, but our current process keeps moisture loss below 3% and extends shelf life by two weeks. A washing step could reverse that. Could we test a small batch first, or use UV instead?"
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
> Thanks for making time today. I'm Rachel, the operations director at our end. I need to be direct with you — we've had three delayed shipments in the past month, and it's starting to affect our own customer commitments. Walk me through what's happening on your side.
> 
> [You are an account manager at a logistics company. Rachel is a client operations director in Chicago. The goal is to address her concerns about late deliveries and agree on next steps.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch this week? I'm especially curious about any blockers we should know about.
> 
> [Scene: You're the PM leading the weekly status meeting for your mobile app launch. Maya is a senior stakeholder from the product team who joined to stay aligned. The team is remote, spread across US and European time zones. Goal: give a clear update and surface anything that needs decisions today.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Maya: Thanks for flagging that. Two weeks is significant — what does the development team think? Are they confident we could still hit the original beta date if the API lands by, say, next Friday?
> 
> [You're doing well — clear purpose, specific numbers, and a decision point. Keep going.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. I've seen the numbers too — defect rate on Line 2 is up to 4.2% this week, almost double our target. Before we escalate to the plant director, I want to understand what's driving it. What's your current read on the root cause?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. You're in a meeting room at the plant. Goal: report the quality issue, explain your analysis, and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 63 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "That jump lines up with the supplier switch — the timing is hard to ignore. Holding the batches makes sense to me. Full inspection is going to pull people off other lines though. What kind of volume are we talking about, and how long do you think you'll need before you can give me a clear yes or no on the new supplier?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose clearly, answered with a reason and specific data, and proposed a clear next step with a request for support.
> 
> **How it went:** Strong, professional report — you connected the defect spike to a specific change and came in with a concrete plan rather than just a problem.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the purpose and gives a specific reason with data, which builds credibility and helps Marcus act quickly.
> 
> **What to improve:**
> - You didn't mention when you need the production team's support to start, or when you'll have results from the 100% inspection. A clear timeline helps the production manager plan resources and set expectations with other stakeholders.
> - Your request "Can your team support that this week?" is good, but slightly open-ended. Naming the tradeoff your plan involves (extra labor, delayed output) shows you understand production pressure.
> 
> **Also worth noting:** "I'd like to hold" is polite, but in urgent quality situations, "I recommend we hold" sounds more decisive — appropriate when you're the quality expert flagging risk.
> 
> **Try this instead:** "I recommend we hold the affected batches and run 100% inspection starting tomorrow. Based on the volume, I estimate we'll need four days to clear the backlog and confirm whether the new part is the root cause. Can your team free up two people from Line 3 on Tuesday and Wednesday?"
> 
> Want to co…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you want to hear, but I'm looking at our current capacity and the remaining work, and I'm not confident we can hit the March deadline. We've had two key engineers out sick this week, and the integration testing is taking longer than we estimated.
> 
> [Your company: Apple. You are a PM leading a weekly status meeting with a vendor team. Sam is the vendor's project lead. Goal: address the delay risk and agree on a path forward.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the integration testing—it's running about 30% longer than we planned because your API documentation had some gaps we had to work through. As for what we need, honestly, we're stretched thin. We could use either an extension of two weeks or an extra engineer from our side for the next three weeks. Either way works, but we can't absorb the extra cost ourselves.
> 
> [Your company: Apple. You are a PM leading a weekly status meeting with a vendor team. Sam is the vendor's project lead. Goal: address the delay risk and agree on a path forward.]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining us today. We're all looking forward to getting this project moving.
> 
> [Setting: Tesla, Fremont. You are the lead project manager for the launch of a new mobile app for vehicle diagnostics. Over the past two weeks, there have been several email threads between the engineering team in California and the design team in Austin. Today's goal is to align on the feature set and development timeline. The next step is to share a finalized roadmap with senior leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> I just got your message about the project status. Walk me through what's going on.
> 
> [Setting: Tesla, Fremont. You are a project manager reporting to David, your engineering director. You are leading the vehicle diagnostics app launch. The original deadline was August 15 for internal testing, but integration issues with the legacy system will push this to August 29. David has a board update scheduled for August 20.]
> 
> [Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If you need more time, something else may need to give, or you should explain what caused the delay and what you've done to limit the impact.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks is a lot. The board update is on August 20, so this puts us in a difficult position. What's your recovery plan?

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need the error rate down to one percent before integration testing. That's three weeks from now. Can your team handle that?
> 
> [You are a software engineer at a tech company. Your manager, David, has just asked you to improve the accuracy of a GPS algorithm beyond the original target. The original spec allowed a two percent error rate, and the deadline is fixed.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> "Thanks for setting this up. I wanted to check in on your workload — I know the Q3 dashboard, the customer churn model, and the ad-hoc sales request all landed around the same time. How are you feeling about getting everything done?"
> 
> [You are a data analyst at a tech company. Lisa is your manager. The goal is to ask for help prioritizing three urgent projects without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "I appreciate you flagging this early. The Q4 forecast is tied to the board meeting on the 15th, so that one is fixed. Between the dashboard migration and the pricing analysis, which one do you think would cause more problems if it slips?"
> 
> [Hint: you could say "The pricing analysis supports the product launch, so delaying it would affect marketing's timeline."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated your situation, showed you could handle the workload, and invited collaboration on prioritization.
> 
> **How it went:** Strong opening — you came prepared with specifics and a solution-oriented frame.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows ownership and invites your manager into the decision without sounding overwhelmed. It mirrors the feedback sandwich principle of keeping the tone constructive and open.
> 
> **What to improve:**
> - You named three projects but swapped two of them from the original list (Q4 forecast and pricing analysis replaced customer churn model and ad-hoc sales request). In a real 1:1, sticking to the same names keeps the conversation clear.
> - You didn't briefly explain *why* two is the limit — for example, "each needs about two weeks of focused work, and we have three weeks left." A short reason helps your manager understand the constraint.
> 
> **Try this instead:**
> "I'm working on the Q3 dashboard, the customer churn model, and the ad-hoc sales request, and all three are due this month. Each needs about two weeks of focused work, so I can finish two well. Could we decide together which one can move to next month?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making the time. We're about two months away from our current contract ending with our old vendor, so we're looking at options. Our sales team has been complaining that the CRM is too slow, and our support tickets are piling up because customer data doesn't sync properly between systems.
> 
> [You are a customer success manager at a software company. Karen is the operations director at a mid-sized logistics firm in Chicago. She is evaluating your product as a replacement for her aging CRM. Goal: understand her pain points and priorities before the product setup.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 85 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three separate tools that don't talk to each other. Our sales reps manually copy customer info between the CRM and our support platform, and it eats up maybe two hours a day per person. Last quarter we lost a big account because a rep didn't see an open support ticket before a renewal call. So the main thing is getting everything in one place with real-time sync.
> 
> What does your typical setup process look like for a company our size?

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 02:32 UTC

**PASS 14 · FAIL 2 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | PASS | – |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T2: profile: company contains any of ["google"] (no profile line) |
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
- ✓ list items ≥ 2: 4 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> In your first 90 days, focus on learning and observation rather than trying to prove yourself immediately.
> 
> • **Map your place in the organization.** Understand your role on the team, your team's role in the department, the department's role in the company, and where the company sits in its market.
> 
> • **Decide your career direction.** Even if your long-term goal is outside the company, let that direction guide what you learn and which opportunities you pursue.
> 
> • **Stay humble and listen.** Previous success does not guarantee success in a new environment. Be flexible, avoid being overly aggressive, and ask questions boldly while you are still new.
> 
> • **Learn proactively.** Study both what coworkers tell you and what internal documents show you. Focus first on learning and making a specific plan, rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining today. I'm looking forward to hearing how we should move forward with this project.
> 
> [This is a kickoff meeting at Apple. You're the lead PM for a new app launch. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear — looking forward to working with you on this.
> 
> [Course score: 5/5]: You covered all three ICE steps smoothly in one go.
> 
> **How it went:** Great job! You opened with a strong introduction, gave full context, and set clear expectations.
> 
> **What worked:**
> - "I'm Lee, the lead PM for the new app launch, and I'll manage the schedule" — Introductions: you named yourself, your role, and how you'll contribute to the project.
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — Context: past, present, and future with a clear deadline.
> - "Please ask questions anytime, and this will be a detailed discussion" — Expectations: you set both level of interaction and level of detail.
> 
> **Also worth noting:** "A lot of emails" is fine, but "quite a few emails going back and forth" sounds slightly more natural for a kickoff.
> 
> **Try this instead:** "We've had quite a few emails going back and forth about the main features."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?

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

> Thanks for joining, everyone. We're looking forward to getting this project moving.
> 
> [You are the lead PM for a new mobile app launch at Apple. Over the past week, there have been several email threads about requirements and timing. Today's goal is to align the team on the schedule and key features before development starts next month. The next step is to share a confirmed timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · PASS

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
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for having us. We're looking forward to hearing the plan for the holiday season.
> 
> [You are leading a meeting with the Apple retail team in Shanghai. Sarah is a regional retail manager. Goal: align on the holiday sales plan and confirm next steps.]

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
> 
> This is covered in the course:
> 
> The key to sounding confident when you lead meetings is using a clear structure. As a PM at Google, try the ICE method for your kickoffs:
> 
> • **Introduction** – state the meeting topic, then your name, role, and how you'll help.  
> *Example: "Today we're aligning on the CRM rollout. I'm D, the lead PM, and I'll manage the schedule and be your main contact for requirements."*
> 
> • **Context** – cover past, present, and future in one flow.  
> *Example: "We've had a lot of email threads about this over the past two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone is aligned before development starts. The next step is to share a written timeline with leadership by next Monday."*
> 
> • **Expectations** – tell people how to take part and how deep you'll go.  
> *Example: "We have a lot to cover and limited time, so please hold questions until the end. This will stay high level—we're covering major phases, not implementation details."*
> 
> Bonus: add quantifiable details ("Phase 2," "three proposals") and sequencing words ("first... then... next").
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play, or do you have questions about a specific meeting coming up? [I've saved…

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
> Open meetings with the ICE method — three steps in order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> *Example: "Hi everyone, today we're kicking off the CRM integration. I'm D, the lead PM, and I'll manage the schedule and be the main point of contact for requirements."*
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got to this meeting
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example: "We've had quite a few emails going back and forth about this rollout. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone is aligned before we start. We hope to get a written sign-off from the US team by next Monday."*
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions for the end" or "Feel free to interrupt"
> - **Detail:** "This will get very technical" or "We'll stay high level"
> 
> *Example: "We have a lot of content and not much time, so please hold questions for the end of the meeting."*
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
> I think we should list the traditional coffee first on the new store menu. It's what we're known for, and it keeps the brand consistent across all locations.
> 
> [Setting: Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate from brand marketing. The goal: decide how to order items on the updated store menu before the summer launch.]
> [Hint: Bob cares about staying true to the brand. You might partly agree with that.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely while keeping the discussion open:
> 
> 1. Start positive by partially agreeing. Show you understand their perspective with phrases like "I understand," "I can see," or "it makes sense that."
> 
> 2. State your own opinion and why you disagree, with a specific reason or data if possible.
> 
> 3. Keep the discussion open by asking a question about alternatives.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> This encourages discussion and often leads to a better team solution. Once a decision is made, the team moves forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 53 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timeline, but a trial still delays the launch. Our competitors are already rolling out summer menus. What if we use a digital display so we can update the order seasonally without a full redesign?
> 
> [Hint: you could say "I understand that staying true to the brand matters, but..."]

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
> Open meetings with the **ICE** method, in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a deadline ("by next Monday")
> 3. **Expectations** — how people should participate and how detailed the discussion will be.
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new barn automation project. I'm Alex, the PM, and I'll manage the schedule and be your main contact. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and flag risks, so we're aligned before build starts. We need sign-off from the US team by next Friday. There's a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✓ character line: present
- ✓ sandwich steps &lt; 2: found partly agree
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs removes the natural protective coating. That coating is what keeps bacteria out. If we wash them, we have to refrigerate immediately, and that changes our whole supply chain.
> 
> [You and Jordan are PMs at Google in Mountain View, discussing a proposal for an internal food program pilot. Jordan wants to source unwashed eggs to simplify storage and cut costs. You disagree. The goal is to reach a team decision.]
> 
> [Hint: you could partly agree with Jordan's point about supply chain complexity, then share your concern with a specific reason.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming"/&gt;
> 
> This is covered in the course:
> 
> Open meetings with the **ICE** method, in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a deadline ("by next Monday")
> 3. **Expectations** — how people should participate and how detailed the discussion will be.
> 
> Example for your ML model discussion:
> &gt; "Hi everyone, today we're reviewing the ML model for egg grading accuracy. I'm the PM, and I'll coordinate between the data science team and operations. We've had two weeks of back-and-forth on the training data. Today we'll review the latest accuracy results, identify gaps in the labeling process, and agree on a path to 95% precision. The target is to finalize the model spec by Friday so we can start integration next Monday. This will get technical, so feel free to jump in with questions."
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
> Start your meeting with the ICE template in this order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you will contribute
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got to this meeting (emails, earlier discussions)
> - Present: today's topics and goal
> - Future: next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - Level of interaction: "please hold questions for the end" or "feel free to interrupt"
> - Level of detail: "this will be high level" or "we're getting into technical details"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line upgrade. I'm Alex, lead PM on this project, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before work starts. We need sign-off from the operations director by Friday so we can order equipment. There's a lot to cover, so please hold questions until the end."
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

> &lt;character name="Maya" gender="female"/&gt;
> 
> I hear you on food safety, but washing eggs removes the natural protective coating. That means they spoil faster and we risk more returns from retailers. Our current dry-brushing process keeps the cuticle intact.
> 
> [You're a PM at Google, talking with Maya, a sustainability lead on your team. The company is exploring a pilot program for a smart farming partner in Iowa. Your goal: decide whether the partner should switch to washed eggs for the US market.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> As a PM at an egg farm, you'll need to bridge farming operations and data science. Here's how to approach discussions about ML models:
> 
> 1. **Start with the business problem, not the technology.** Frame the conversation around a clear farm outcome: "We need to reduce early mortality in Layer 3 by 10%." This keeps the team focused on what the model must deliver.
> 
> 2. **Ask about data quality and availability.** ML models need clean, labeled data. Ask: "What data do we have from the sensors? How far back does it go? Are there gaps during equipment failures?"
> 
> 3. **Clarify how the model's output will be used.** Will it alert barn managers in real time, or generate weekly reports? The answer changes the model's design and accuracy requirements.
> 
> 4. **Discuss maintenance and drift.** Farm conditions change with seasons. Ask: "How will we retrain the model when new flocks arrive or when we upgrade ventilation?"
> 
> 5. **Set success metrics together.** Agree on precision, recall, or error rates that actually matter for your operation, not just technical benchmarks.
> 
> Example: "Our goal is to predict feed conversion spikes 24 hours early. What data streams do we need, and how often will the model need retraining as we rotate flocks?"
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.…

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I'm Karen, the operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks, and it's starting to affect our store replenishment. I need to understand what's happening and what your team is doing to fix it.
> 
> [Westfield Retail, a US-based retail chain. You are the account manager at their logistics provider. Karen is frustrated about late deliveries and wants answers and a plan.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch? I'm especially interested in whether we're still on track for the beta release.
> 
> [Project: mobile app launch. Your role: PM leading the weekly status meeting. Character: Linda, senior stakeholder attending. Goal: practice giving a clear, structured weekly status update to your team.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see. Two weeks is a significant delay, and payments are a core feature for the beta. What options have you looked at so far?
> 
> [Hint: you could say "We've identified two paths..." or "Let me walk you through the tradeoffs..."]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: Hey, thanks for flagging this. I've been seeing the numbers climb since Tuesday and I was about to reach out myself. What's your read on what's driving the spike?
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in your facility, likely early Friday. Goal: discuss the defective cell increase on Line 2 and agree on next steps.]
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: I hear you on holding the batches — that makes sense. But full 100% inspection is going to slow us down a lot. We're already behind on the Q3 orders. Is there a way to narrow it down, like just the cells from the new supplier's first two delivery lots?
> 
> [Hint: you could say "The first two lots are exactly where we're seeing the 4%. If we sample those specifically, we could reduce the inspection load while still catching the issue."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated your position clearly and proposed a specific action, but you didn't partially agree with Marcus's concern or keep the discussion open with a question.
> 
> **How it went:** You moved straight to your proposal without acknowledging the production pressure he raised, which made the conversation feel one-sided rather than collaborative.
> 
> **What worked:**
> - "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this is a clear, specific request with a reason, which helps Marcus understand your thinking.
> 
> **What to improve:**
> - You didn't partially agree with Marcus's point about 100% inspection slowing production. Acknowledging his concern builds trust before you push back.
> - You closed with a yes/no question ("Can your team support that?") rather than inviting alternatives. This can feel like pressure rather than problem-solving together.
> 
> **Also worth noting:** Your opening data point ("from 1% to 4%") was strong — quantifiable details make your case more convincing.
> 
> **Try this instead:** "I understand that 100% inspection will slow production, especially with Q3 orders behind. The spike is only in the first two lots from the new supplier. Could we start with targeted sampling on those lots, and scale up only if the defect rate stays high? What would work for your schedule?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping past the November deadline. The integration testing took longer than we estimated, and now the API documentation review is backing everything up.
> 
> [You are in a weekly project meeting with Sam, a project lead from your vendor. He just dropped news about a potential delay. Respond as yourself—your role, your company, your project.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The API documentation review is the main bottleneck right now. Our senior engineer had to step away for two weeks, and the replacement needs more time to get up to speed. To stay on schedule, we'd need either an extension on the documentation review or someone from your team who knows our system to pair with us through the next sprint.

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Hi everyone, thanks for joining. We're here to kick off the new mobile app project, and we're looking forward to hearing how you'll be leading us through this.
> 
> [Project: launching a new mobile app for customer orders. You are the lead project manager. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features before development begins. Next step: share a timeline with leadership by next Friday.]
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
> Two weeks? That's a significant slip. We committed to the client for the end of next month. Walk me through the bugs and how much time you think you can recover.
> 
> [You are a project lead. Your manager David is concerned about a client deadline. The conversation goal: agree on a realistic delivery date and any resources or scope changes needed.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining, everyone. I'm Sarah, and I'm excited to get Project Hippo moving. I'll be handling the design work, so I'll be looking at user flows and making sure we stay on brand. Looking forward to hearing how we'll all work together on this.
> 
> [Project Hippo: a new mobile app launch. You're the lead project manager running the kickoff. The team has exchanged emails for the past two weeks. Today's goal is to align on requirements, schedule, and risks. The next step is written sign-off from the US team by next Monday.]
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
> Two weeks? That's a significant slip, and the client demo is already scheduled. Walk me through what happened in testing and what your recovery plan looks like.
> 
> [You're a senior engineer at a software company. David is your manager. The project is a customer-facing analytics dashboard with a hard deadline tied to a client presentation.]
> 
> [Hint: you could say "We found 14 critical bugs in the payment module, which is more than the 5 we budgeted for."]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I know it's late on Friday, but I need your team to tighten the accuracy on the GPS algorithm before integration testing. The current error rate is about two percent, and I need it down to one percent. Can you have that ready by Monday morning?
> 
> [You are a project lead at a tech company. Your manager, David, has just added new scope to your project with a fixed deadline. You need to push back professionally.]
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
> I know you've got a lot on your plate right now. Before we dive into the usual updates, I wanted to check in — how are things going with the three projects you're juggling?
> 
> [You are a data analyst. Your manager Lisa has just opened your weekly 1:1. She knows about your workload and wants to hear how you're managing. Your goal: ask for help prioritizing without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would cause more problems if it moved?
> 
> [Hint: you could say "The forecast affects more teams, so I'd prefer to keep that on track. The migration has more flexible stakeholders."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, showed you could handle the workload, and invited collaboration on the tradeoff.
> 
> **How it went:** Strong opening—you came prepared with specifics and framed the request as a joint decision, not a complaint.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows you own the solution and want alignment, which fits the "keep the discussion open" step from the feedback sandwich approach applied to upward communication.
> 
> **What to improve:**
> - You didn't name which two you'd prioritize or why. Lisa had to pull that out of you. Stating your recommendation upfront saves her time and shows your judgment.
> - You also didn't acknowledge the business impact of each project, which would strengthen your case for why one can wait.
> 
> **Also worth noting:** "I can finish two well" is good—it signals competence. "Finish two well" is slightly informal; "deliver two of them fully" is crisper.
> 
> **Try this instead:**
> "The Q4 forecast and pricing analysis both have firm deadlines with external stakeholders. The dashboard migration is important but has more internal flexibility. I'd recommend keeping the first two on track and moving the migration to early next month. Does that work for you?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Thanks for making the time today. We're about two weeks from our go-live date and honestly, we're not sure if the current onboarding plan is going to work for our team. We've got forty people across three offices, and they all work differently.
> 
> [Setting: Your company, a mid-sized logistics firm in Chicago. You are the customer success manager. Marcus is the operations director. Goal: understand the client's challenges and define what success looks like before setup.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 69 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling everything in spreadsheets and a shared inbox. It's manageable when we have ten shipments a day, but last month we hit two hundred and things started falling through the cracks. Two orders went to the wrong warehouse, and one client got billed twice. My team is working overtime just to catch errors.
> 
> What does your onboarding process actually look like for a team our size?

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 02:27 UTC

**PASS 15 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | PASS | – |
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
- ✓ list items ≥ 2: 22 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/, https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment. Here's how to approach it:
> 
> • **Map the organization**
>   - Understand your role in the team
>   - Understand the team's role in the department
>   - Understand the department's role in the company
>   - Understand the company's place in its market
> 
> • **Set your direction**
>   - Decide where you want your career to go
>   - Let that direction guide what you learn and which opportunities you pursue
>   - This applies even if your long-term goal is outside the company
> 
> • **Stay humble and learn proactively**
>   - Your previous success does not automatically transfer to a new company
>   - Listen more than you push
>   - Ask questions boldly while you are new
>   - Learn from coworkers and internal documents
>   - Focus on learning and making a specific plan rather than worrying about performance ratings
> 
> • **Turn problems into goals**
>   - If a skill like networking is difficult, make improving it a specific goal
>   - Practice consistently
> 
> • **Set SMART goals**
>   - Specific, Measurable, Achievable, Relevant, Time-bound
>   - Replace vague intentions with concrete outcomes, quantities, and deadlines
>   - Example: "Come up with five alternative product ideas for the June product launch by mid-February"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, on the design team. I'm here to represent UX for this project.
> 
> [You're at Tesla in Palo Alto. You're the lead project manager for the new mobile app redesign. Over the past week, the product and engineering leads have been emailing back and forth about priorities and timeline, but the team hasn't met yet. Today's goal is to align on the scope and schedule so development can start. The next step will be to share a finalized roadmap with leadership by next Friday. Sarah and two other teammates are waiting for you to open the meeting.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline—next Friday gives us a real target to work toward.
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and gave us a specific deadline to work with.
> 
> **How it went:** Strong, complete opening that set the tone for a productive meeting.
> 
> **What worked:** "I'm Lee, the lead PM for the new app launch, and I'll manage the schedule" shows Introductions with your role and contribution. "Over the past two weeks we've had a lot of emails about the main features" gives the past; "Today's goal is to agree on the schedule" gives the present; "the next step is to send a timeline to leadership by next Friday" gives the future with a time—solid Context. "Please ask questions anytime, and this will be a detailed discussion" covers both level of interaction and level of detail in Expectations.
> 
> **What to improve:** No major gap. The sequencing ("Over the past two weeks... Today's goal... the next step") made the context easy to follow.
> 
> **Also worth noting:** "Please ask questions anytime, and this will be a detailed discussion" combines two ideas smoothly; some speakers prefer to separate them for clarity, but together works fine too.
> 
> **Try this instead:** Already strong. For variety, you could say: "Please hold questions until the end of each section, since we'll go into technical detail and I want to stay on track."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to try again without cues, doing …

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
> 
> [Tip: describe your real role and a situation you're facing at work. The conversation will be more realistic and more challenging.]

**T2 [RP]** "1"
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ global checks G1–G4
- [ ] Starts the built-in meeting-opening scene with a character.

> Great, let's kick off a project meeting. You're leading this.
> 
> "Hi everyone — thanks for joining. I'm excited to finally get this moving."
> 
> [You're a project manager at Apple, running the kickoff for a new internal app called "Project Hippo." The team has exchanged emails for two weeks about requirements and scheduling. Today's goal is to align on the schedule and main features so everyone can start work. Your next step after this meeting is to send a written summary to the US leadership team by next Monday.]
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
> Great, let's kick this off. 
> 
> Hi everyone, thanks for joining. I'm Sarah, regional operations lead for Greater China retail. I know we've got a lot to cover before the holiday rush, so I'm looking forward to hearing the plan.
> 
> [Apple, Beijing / Shanghai retail hub. You are the PM leading this kickoff. Sarah is on the retail operations team. Goal: align on holiday sales strategy and next steps.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics / retail" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, regional retail operations lead here in Shanghai. I know we've all been looking forward to getting aligned on the holiday season.
> 
> [You are D, a PM at Apple, leading a kickoff with the China retail team. The project: holiday sales plan for Q4. Before this meeting, there were several email threads between Cupertino and the Shanghai team about inventory targets and promotional timing. Today's goal: confirm the promotional calendar, staffing model, and inventory allocation across flagship stores. Next step: send a consolidated plan to the US leadership team for sign-off by next Friday.]
> 
> [Start with your introduction.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> **ICE method for meeting openings**
> 
> • **Introductions** — state the topic, your name, role, and how you'll help
>   - "Today we're aligning on the CRM rollout. I'm D, the PM, and I'll manage the timeline and flag any blockers."
> 
> • **Context** — past, present, future
>   - Past: "We've had emails going back and forth with the US team about data migration."
>   - Present: "Today we'll confirm the phases and who owns each one."
>   - Future: "Next step is to share the final plan with leadership by next Friday."
> 
> • **Expectations** — set interaction and detail level
>   - "Please hold questions for the end — we have a lot to cover and only 30 minutes."
>   - Or: "Feel free to jump in — I want to make sure we surface any concerns today."
> 
> **Quick tip for confidence:** Write your opening in a short script beforehand. As a PM at Google, your team expects you to own the structure, not have perfect English.
> 
> Want to try it out? Tap the mode menu and choose Role-play, then pick "Start a meeting." Or ask me about a specific meeting type here.
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
> **ICE method**
> 
> 1. **Introductions** — topic, then your name, role, contribution
>    - "Today we're reviewing the CRM rollout. I'm D, the PM, and I'll track decisions and flag risks."
> 
> 2. **Context** — past, present, future
>    - Past: "We've had emails going back and forth with the US team on data migration."
>    - Present: "Today we'll confirm the phases and owners."
>    - Future: "We'll share the final plan with leadership by next Friday."
> 
> 3. **Expectations** — interaction and detail level
>    - "Please hold questions for the end — we have 30 minutes."
>    - Or: "Jump in anytime — I want to surface concerns early."
> 
> **Tip:** Write a short script beforehand. As a PM at Google, your team expects clear structure.
> 
> Want to practice? Tap the mode menu and choose Role-play, then pick "Start a meeting."
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
> Bob: "Hey, so I've been thinking about the menu redesign for the app. I really think we should put the traditional coffee section first — it's what built our brand. People come to us for the craft, not the sugar."
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the digital team. Bob is a senior marketing manager who joined last year. The goal: decide how to order the menu in the new app launch.]
> 
> [Hint: you could honestly agree that brand heritage matters, or that traditional coffee has loyal customers.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand."
> 
> • **State your opinion with a reason** — use facts or data
>   - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives with a question
>   - "Are there other alternatives?"
> 
> • **Move forward together** — once the team decides, support it even if it wasn't your choice
> 
> Example full line: "I can see why brand heritage matters here, but our data shows iced drinks drive summer revenue. Could we test a seasonal layout?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 74 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> Bob: "A smaller trial — like what, an A/B test on just a few stores? I like that you're thinking about data, but I'm worried a limited test won't show the brand impact. If customers open the app and don't see our signature roasts first, what does that say about who we are?"
> 
> [Bob seems engaged with your reasoning, but he's defending the brand angle. He's asking for more detail on your trial idea.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** method for the first 8 minutes:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (past, present, future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "We'll keep this high level" or "This will be a detailed discussion"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned. We need sign-off from the US team by next Monday. Please hold questions until the end — we have a lot to cover."
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
> "So, I've been looking at the numbers, and honestly, I think we should start washing every egg before it goes to packaging. It just feels cleaner, and customers will trust the product more. What's your take?"
> 
> [You're a PM at Google working on a food supply chain tool. Maya is a product specialist on your team. She wants to add automated egg-washing as a default step for all farm partners. You're discussing whether this is the right approach. Goal: reach a team decision.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is a general workplace discussion, not a specific method from the course. Here's how to approach it:
> 
> **State your purpose early**
> - "I want to align on whether we need an ML model for this, or if a simpler rule-based system works."
> 
> **Clarify the problem first**
> - What decision are you trying to make? What's the cost of being wrong?
> - "Before we build anything, what's the business outcome we're trying to improve?"
> 
> **Share your view with a reason**
> - "My concern is that we don't have enough labeled data yet. A basic threshold might get us 80% there with no training time."
> 
> **Invite specifics**
> - "What data do we have, and what's the timeline?"
> 
> **Close with a next step**
> - "Can you send me the dataset size and accuracy requirements by Wednesday? Then we can decide."
> 
> As a PM at an egg farm, you can also ask: "Are we solving a grading problem, a spoilage prediction problem, or something else?" This keeps the conversation grounded in your operation, not abstract ML talk.
> 
> Want me to help you practice this as a role-play, or do you need a different situation?

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="James" gender="male"/&gt;
> 
> James: "Thanks for making time today. I need to be direct with you — three of our last five shipments arrived two days late, and my warehouse team is getting complaints from their own customers. This isn't sustainable for us. What's going on?"
> 
> [You work at DHL. James runs operations for a mid-sized retail client in Chicago. His contract is up for renewal in six weeks. The goal: address his concern, explain what happened, and protect the relationship.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Elena" gender="female"/&gt;
> 
> Sure, let's run this. Here's the scene:
> 
> ---
> 
> Got it. Quick question before we dive in — are we waiting on anything from design for the login flow, or is that fully with engineering now?
> 
> [You're the PM leading the weekly standup for the Nova mobile app launch at a fintech startup in Singapore. Elena is your tech lead. The team is three weeks from beta release. She's asking about a handoff that was supposed to happen last Tuesday.]
> 
> ---
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> &lt;character name="Elena" gender="female"/&gt;
> 
> Thanks for flagging that — 70% is solid, and I agree the API delay is the real risk right now. From engineering, the checkout module is basically ready to wire up, so we're not stuck on our side. But I need to know: if we launch without payments, what's the plan for adding them later? A second release, or a patch?
> 
> [You can describe a different situation anytime.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Rachel: "Thanks for coming by. I saw the report — defective cells on Line 2 are up to 4.2% this week, from 1.8% last week. That's a big jump. What's your take on what's driving it?"
> 
> [At your company's battery plant in Detroit, you are a quality engineer. Rachel is the production manager for Line 2. She has a daily production target to meet and is worried about slowing the line. Your goal: explain the quality issue, propose how to investigate it, and agree on next steps without letting defective cells ship.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 68 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Rachel: "I hear you on the supplier change — that lines up with the timing. But we're already behind on this month's output, and 100% inspection means pulling people off the line. That's going to hurt our numbers. Is there a way to narrow it down? Maybe just the batches from the new supplier's first delivery?"
> 
> [She's open to action but needs to protect production. What would you propose?]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific action, and asked for her team's support — strong advocacy with a collaborative close.
> 
> **How it went:** Rachel pushed back on resources, and you gave her a clear root cause to work with; the conversation was ready for a negotiated next step.
> 
> **What worked:** You connected the supplier change to the defect jump and proposed holding batches plus 100% inspection — that shows ownership of the quality risk and a concrete containment plan.
> 
> **What to improve:** You didn't acknowledge her production pressure before asking for her support. A brief "I know this month's target is tight" would build more partnership and make your ask easier to accept.
> 
> **Also worth noting:** "Can your team support that this week?" is a bit soft for a safety-critical issue. As quality engineer, you own the stop-ship decision; frame it as "I need your help to make this work" rather than asking permission.
> 
> **Try this instead:** "I know this month's target is tight, and I don't want to slow the line more than we have to. The defect rate jumped right after the supplier change. I'd like to hold the affected batches and do 100% inspection until we confirm the cause. Can we pull two people from Line 3 this week to cover it?"
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
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. Our lead engineer went on unexpected medical leave, and the replacement needs another two weeks to get up to speed on your codebase.
> 
> [You're a project manager at a tech company, meeting with Sam, a vendor team lead. The project is a platform integration. Goal: address the delay and agree on next steps.]
> 
> What does this mean for the features we already committed to for the release?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main cause is the handoff — our engineer had deep knowledge of your API structure, and bringing someone new in means at least ten days of shadowing before they can work independently. To stay on schedule, we'd need either a two-week extension or your team to take on the API mapping module, which is about forty hours of work on your side.
> 
> [Hint: you could say "Let's look at what's actually at risk" or "Before we commit to either option, I need to understand the impact on the full timeline."]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'll let you take it from here.
> 
> [You are the lead project manager at Apple, kicking off Project Hippo, a new internal app for tracking supply-chain shipments. Your team of five engineers and designers is in Cupertino, with two people joining remotely from Shanghai. Over the past two weeks, there have been long email threads about requirements and scheduling conflicts. Today's goal is to align everyone on the project scope and timeline so development can begin. The next step after this meeting is to get written sign-off from the US operations team by next Monday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the Alpha project timeline before the leadership review on Thursday.
> 
> [You are a senior software engineer at Tesla. Your manager, David, has just stopped by your desk in Palo Alto. The Alpha project — a firmware update for the charging network — was supposed to finish internal testing this Friday and ship to the vehicle team by Monday. You've just learned from the QA lead that two critical bugs will push testing back by about two weeks. David doesn't know yet, and the leadership review is where he needs to present the updated roadmap.]
> 
> What can I do for you?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks? That's a significant slip. The leadership review is Thursday, and I was planning to show them a Monday handoff to the vehicle team. 
> 
> What bugs are we looking at, and what's your plan to recover time?

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I need to get this GPS accuracy issue resolved before integration testing. Right now the algorithm returns wrong data 2% of the time, which was our original target, but the client just called and now they want it down to 1%. I need you to make that adjustment and have it ready by Monday morning.
> 
> [You're a software engineer at Tesla in Palo Alto. David is your manager. The conversation is about a scope change with a fixed deadline.]
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Priya" gender="female"/&gt;
> 
> "Thanks for coming in. I wanted to check in—how are things going with the customer churn model? I know we also have the quarterly dashboard and the A/B test analysis running in parallel."
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Your manager Priya has just opened your weekly 1:1. She knows all three projects are active but hasn't heard your take on the workload yet.]
> 
> [What would you like to say?]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That's a fair question. The pricing analysis is tied to the board meeting on the 28th, so that one is fixed. Between the Q4 forecast and the dashboard migration, which one do you think would suffer more if we pushed it out?"
> 
> [She's listening and not pushing back—she wants to see how you think about tradeoffs before she commits.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a realistic boundary, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Priya engaged with your framing and asked for your reasoning, which shows you came across as capable and solution-oriented.
> 
> **What worked:** "I can finish two well" — this shows ownership and sets a clear limit without apologizing. "Could we decide together" — you treated it as a shared business decision, not a personal failure.
> 
> **What to improve:** You didn't name the impact of taking on all three. Adding why it matters helps her justify the reprioritization to her own manager or stakeholders. Also, you didn't suggest which one to move — offering a recommendation, even tentatively, strengthens your position as the expert on the work.
> 
> **Also worth noting:** Your tone was confident and direct. "I can finish two well" is stronger than "I don't think I can handle three."
> 
> **Try this instead:** "I can deliver two of these with full quality. If I take all three, the dashboard migration would be at risk because I'm still learning the new tool. My recommendation is to move the migration to January and keep the forecast and pricing analysis. Does that work, or is there another factor I should consider?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated"/&gt;
> 
> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi, thanks for making the time. I'm Priya, VP of Operations at Meridian Logistics. We signed up for your platform last month, and honestly, we're still figuring out how it fits into our workflow.
> 
> [Meridian Logistics is a mid-sized freight company based in Chicago. You are the customer success manager assigned to their account. Priya is new to your software and slightly skeptical about whether it will actually reduce the manual work her team currently does. Your goal: understand her needs well enough to configure the product for her team's daily use.]
> 
> What would you like to know?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software.
- ✓ no feedback
- ✓ words ≤ 120: 102 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now my team spends about six hours every Monday just pulling data from three different systems and building status reports in Excel. It's not hard work, but it's tedious, and by the time the reports reach our clients on Tuesday, the data is already a day old.
> 
> Our operations manager tried to automate some of it with scripts, but they break whenever one of the systems updates, so he's back to doing most of it manually. I'm hoping your platform can replace that whole process—or at least cut it down to under an hour.
> 
> What else should I tell you?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 02:38 UTC

**PASS 14 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FLAKY | passed on rerun; first try: T2: profile: company contains any of ["google"]; T3: sandwich steps < 2 |
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
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • Map your place in the organization: your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • Stay humble and listen. Previous success at another company doesn't automatically transfer. Avoid being overly aggressive; focus on learning first.
> 
> • Ask questions boldly while you're new. Learn from coworkers and internal documents.
> 
> • Set SMART goals: Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes and deadlines.
> 
> • Decide where you want your career to go. Let that direction guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, on the product team. Looking forward to this kickoff.
> 
> [You're the lead PM for a new mobile app project at Apple in Cupertino. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features before development begins. Your next step is to get written sign-off from the US leadership team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> **Course score: 5/5**: You covered all three ICE steps with specific details and a clear sense of time.
> 
> **How it went:** A strong, complete opening that gave the team exactly what they needed to follow along.
> 
> **What worked:** Your context was excellent—"Over the past two weeks we've had a lot of emails about the main features" for the past, "Today's goal is to agree on the schedule" for the present, and "send a timeline to leadership by next Friday" for the future with a deadline. You also set both expectations: "Please ask questions anytime" for interaction level, and "this will be a detailed discussion" for detail level.
> 
> **What to improve:** Nothing major. If you wanted to add one thing, you could briefly mention how you'll contribute beyond managing schedule—e.g., "I'll also be the main point of contact for requirements."
> 
> **Also worth noting:** "Agree on the schedule" is clear; "align on the schedule" is slightly more common in US tech companies.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this project. I've been with the team for two years and I'll manage the schedule and be the main point of contact for requirements."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?

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

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi everyone, thanks for joining. I'm looking forward to hearing what you have to share today."
> 
> [You're the lead project manager at Tesla in Austin. The team is kicking off a new mobile app for service appointments. Over the past two weeks, there have been emails going back and forth about requirements and timing. Today's goal is to align on the schedule and main features so engineering can start build next week. You need to get a written sign-off from the Shanghai team by next Friday.]
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
> Thanks for that, D. I'm looking forward to hearing how we can make this holiday season strong. [Apple retail team, Shanghai. Sarah Chen, regional retail operations lead. You're the PM running this kickoff. Goal: align on holiday sales plan and next steps.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics / retail","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics / retail" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. Thanks for joining — I know we're all busy heading into Q4.
> 
> I'm Sarah, regional operations lead for Greater China retail. I'll be coordinating inventory and staffing numbers with you on this. Looking forward to working together.
> 
> [Apple retail headquarters, Shanghai. You're the PM leading this kickoff. Sarah is on the retail operations team. The goal: align on the holiday sales plan for China. Before this meeting, there were several email threads between your team and retail about target numbers and key product focus. Today you need to agree on the schedule, promotional tiers, and risk factors. The next step will be getting written sign-off from the US marketing team.]
> 
> [Start with your introduction.]
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]

### C6 Profile save, then use (Coach) · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead meetings with the US team confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead meetings with the US team confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead meetings with the US team confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead meetings with the US team confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="inferred" learner_goal="lead meetings with the US team confidently"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE method** to open meetings you lead. It gives you a clear structure so you sound prepared and in control.
> 
> • **Introductions** — state the topic, your name/role, and what you'll contribute
>   *"Hi everyone. Today we're kicking off the CRM integration for the sales team. I'm D, the PM, and I'll manage the schedule and requirements."*
> 
> • **Context** — past, present, future
>   *"We've had emails going back and forth with the US team for two weeks. Today we'll align on the rollout plan and flag any blockers. Next, we'll send leadership a timeline by next Friday."*
> 
> • **Expectations** — how people should participate
>   *"We'll keep this high level. Please hold detailed questions for the end so we stay on track."*
> 
> As a PM at Google, you can also add one line about why the meeting matters to both teams.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play where you open a meeting with my character? Tap the mode menu at the top right and choose Role-play.
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech (guessed from the company). Learning goal: lead meetings with the US team confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE method** to open meetings you lead. It gives you a clear structure so you sound prepared and in control.
> 
> • **Introductions** — state the topic, your name/role, and what you'll contribute
>   *"Hi everyone. Today we're kicking off the CRM integration for the sales team. I'm D, the PM, and I'll manage the schedule and requirements."*
> 
> • **Context** — past, present, future
>   *"We've had emails going back and forth with the US team for two weeks. Today we'll align on the rollout plan and flag any blockers. Next, we'll send leadership a timeline by next Friday."*
> 
> • **Expectations** — how people should participate
>   *"We'll keep this high level. Please hold detailed questions for the end so we stay on track."*
> 
> As a PM at Google, you can also add one line about why the meeting matters to both teams.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to practice this in a role-play where you open a meeting with my character? Tap the mode menu at the top right and choose Role-play.

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> Hey, I've been thinking about the menu redesign for the new store launch. I think we should list our traditional hot coffees first — espresso, americano, cappuccino. That's what defines us as a brand, and it sends the right message to customers who care about craft coffee.
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team; I'm Bob, a senior brand strategist. We're deciding the final menu layout before the summer rollout.]
> 
> [Hint: you could honestly agree that brand identity matters, or that traditional coffee is important to loyal customers.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.

> This is covered in the course:
> 
> Use the feedback sandwich for disagreements at work:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that…"
>   - "It makes sense that…"
>   - "I can see why…"
> 
> • **State your own opinion with a reason** — use facts or data if you have them
>   - "…but our iced frappuccinos are our best sellers during the summer."
> 
> • **Keep it open** — invite alternatives with a question
>   - "Are there other alternatives?"
>   - "What do you think about trying…?"
> 
> • **Move forward together** — once the team decides, support it even if it wasn't your idea
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> This approach encourages discussion and often leads to a better solution.

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 112 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I appreciate that you're thinking about implementation time — that's fair. But I'm not sure I follow: are you saying the menu redesign itself would take too long, or that changing the order later would be hard if we get it wrong?
> 
> [We're still in the menu layout discussion. Bob is asking for clarification because your response mentioned time, which wasn't part of his original concern.]
> 
> [Hint: you could say something like "I understand that brand identity matters, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. What do you think about a digital display so we can update the order depending on the season?"]

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
> Use the **ICE** method to open a meeting you lead:
> 
> **1. Introductions**
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - **Interaction:** hold questions for the end, or invite them anytime
> - **Detail level:** technical deep dive or high-level overview
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new app rollout. I'm Danny, lead PM, and I'll manage the schedule and be your contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before development starts. We need sign-off from the US team by next Monday. Please hold questions until the end — we have a lot to cover and this will stay high level."
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
> "Hey, so I've been looking at the numbers from our farms in Iowa and California. The Iowa facility washes and sanitizes every egg, and their salmonella rate is basically zero. California doesn't wash — they just dry-brush and rely on the bloom — and their rate is still under one percent, but it's not zero. I'm starting to think we should mandate washing across all our supplier farms. What's your take?"
> 
> [You're a PM at Google working on food supply chain data. Your coworker Priya is on the sustainability team. She wants to mandate egg washing company-wide. You disagree or see another angle. The goal is to reach a team decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> 1. **Partially agree, honestly**
>    - Find something you genuinely accept about their view
> 
> 2. **State your own opinion with a specific reason**
>    - Use facts or data where possible
> 
> 3. **Keep the discussion open**
>    - Friendly tone, ask about alternatives
> 
> 4. **Move forward together once a decision is made**
> 
> Example for your situation:
> &gt; "I agree the ML model could help us predict laying patterns more accurately. But our current data is mostly manual farm logs, and cleaning it will take two quarters. Could we pilot this on one barn with automated sensors first?"
> 
> Tips for your context:
> - Lead with the business outcome, not the technology
> - Name the gap: data quality, farm infrastructure, or integration with existing systems
> - Offer a smaller first step if the full proposal feels premature
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
> Use the **ICE** method to open meetings you lead:
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
> - Level of interaction: "Please hold questions for the end" or "Ask questions anytime"
> - Level of detail: "This will be a detailed discussion" or "We'll keep this high level"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging rollout. I'm Jamie, the lead PM, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through the timeline and flag risks so we're aligned before production starts. We need sign-off from the quality team by next Friday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, so I've been looking at the supplier data, and I'm actually thinking we should start washing the eggs before they go into the cartons. It seems cleaner, and a lot of consumers expect it."
> 
> [You're a PM at Google working on a food supply chain transparency tool. Maya is a product analyst on your team. You're discussing whether your platform should recommend egg-washing as a best practice for partner farms. The goal is to reach a team decision.]
> 
> [Hint: you could honestly agree that consumer expectations matter, but you may disagree on whether washing is the right recommendation for all farms.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Technology. Learning goal: lead client presentations confidently.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Agriculture","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Agriculture" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> This sounds like a general workplace discussion, not a specific method from the course. Here's how to approach it:
> 
> • **State your purpose early** — "I want to align on how the ML model fits our farm's operations."
> 
> • **Connect to their expertise** — Ask what they need from the model: "What outputs would actually change how you work day to day?"
> 
> • **Flag constraints openly** — Egg farms have tight margins and seasonal cycles. Mention these so the technical discussion stays grounded.
> 
> • **Close with a next step and time** — "Let me confirm the data sources with the vendor and get back to you by Thursday."
> 
> As a PM at an egg farm, your value is translating farm realities into requirements the ML team can act on. Focus on decisions, impact, and follow-up.
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for making time today. I need to be direct with you — three of our last five shipments arrived late, and my team is getting pressure from our own customers. This can't keep happening. What's going on?"
> 
> [You're an account manager at a logistics company. Rachel is the operations director at a mid-sized retail firm in Chicago. She's frustrated about repeated late deliveries and wants answers and a fix. The goal of this conversation is to calm the situation, explain what happened, and agree on next steps.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. Before we dive in — just to level-set, where are we on the beta testing timeline? I heard some mixed signals last week."
> 
> [You're the PM leading the weekly status meeting for a mobile app launch at a fintech startup in Singapore. Maya is your senior engineer. The team needs clarity on beta progress, marketing handoff, and whether you're still targeting a March release. Goal: give your update and keep the meeting on track.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Got it — thanks for flagging that upfront. Two things on my mind: first, if we launch without payments, what's our plan for handling user expectations? And second, do we have a revised date from the API vendor, or are we still waiting on them?"
> 
> [Maya leans forward, concerned but open to options. She needs specifics before she can reassure her engineers or adjust their sprint plan.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;profile learner_role="quality engineer" learner_industry="EV battery manufacturing" learner_industry_source="stated" learner_goal="discuss production defects with production manager"/&gt;
> 
> &lt;character name="Marcus" gender="male"/&gt;
> 
> We've got a real problem. Line 2 shipped 340 defective cells this week — that's an 80% jump from last week. My team traced most of it to a temperature variance in the curing oven, but the line is still running at full speed. I need to know if we're going to slow it down or if I'm supposed to just keep flagging them after the fact.
> 
> [You're a quality engineer at your company. Marcus is the production manager. This is your regular weekly quality review in Detroit. Your goal: get agreement on stopping or slowing Line 2 until the oven is fixed, or get another workable plan from him.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
Profile sent: Role: quality engineer. Industry: EV battery manufacturing. Learning goal: discuss production defects with production manager.
- ✓ no feedback
- ✓ words ≤ 120: 69 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus crosses his arms and exhales sharply.
> 
> "Four percent? That's 12,000 cells if we run the full schedule. And 100% inspection means pulling three people off the pack assembly line — we're already behind on the Q3 contract. What exactly changed with the new supplier? Is it the separator material or the electrolyte formulation? I need to know what I'm trading before I tell my team to stop everything."

**T3 [RP]** "feedback"
Profile sent: Role: quality engineer. Industry: EV battery manufacturing. Learning goal: discuss production defects with production manager.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem with data, proposed a specific action, and asked for his support clearly.
> 
> **How it went:** Strong opening — you gave Marcus the cause, the impact, a concrete request, and a timeline, which kept the conversation focused on solutions.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this is a clear purpose with a specific next step and a condition for ending it.
> 
> **What to improve:** You didn't name the tradeoff or acknowledge his pressure. Marcus is worried about the Q3 contract and staffing; showing you understand that makes your request easier to accept.
> 
> **Also worth noting:** "Can your team support that this week?" is polite but slightly soft. In a quality issue this size, it's okay to state what you need and ask how to make it work together.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after the supplier change. I want to hold the affected batches and do 100% inspection until we confirm the root cause. I know this pulls resources from the Q3 line — can we look at where to borrow staff, or should I escalate to ask for an extension?"
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
> "Yeah, so about that timeline — I'm looking at our current backlog and I'm not confident we'll hit the March delivery. We ran into some integration issues with the API that weren't in the original scope, and fixing them is taking longer than we estimated."
> 
> [You're the project lead at a fintech company in Singapore. Sam is your main contact at a software vendor. The meeting is already in progress; you're discussing the rollout of a new payment feature. Your goal is to understand the delay and agree on a path forward.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "The API integration issues are the main thing — the documentation we got from your team didn't cover the error-handling flow for declined transactions, so we had to build that from scratch. That's about two weeks of unplanned work."
> 
> "As for what we need — honestly, if you could get us a technical contact on your side who knows that flow inside out, that would speed things up. Or if the deadline is fixed, we'd need to descope something. The reporting dashboard was always labeled 'nice to have' in our backlog. We could move that to a Phase 2 and keep the core payment flow on track for March."
> 
> [He's offering two options: your technical help, or cutting the dashboard. Which direction do you want to explore?]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining, everyone. I'm looking forward to hearing how we'll kick this off.
> 
> [You're the lead PM for a new mobile app project at Apple in Cupertino. Your team is gathered for the kickoff meeting. Sarah is a developer on the team. Over the past week, you and the design lead exchanged several emails about features and timeline. Today's goal is to align on the schedule and main deliverables. The next step after this meeting is to share a timeline with leadership.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> Got it, let's switch.
> 
> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the Phoenix rollout. The leadership team is asking for an update for the board meeting next Tuesday.
> 
> [You work at Tesla in Austin. You're a senior project manager reporting to David, your director. Phoenix is the new in-car navigation update. You need to tell David that the rollout will be delayed by two weeks. David has not heard about any problems yet.]
> 
> What can you tell me about where we stand?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> That's not what I wanted to hear. The board is expecting to report the launch date next Tuesday. Two weeks puts us into the next quarter.
> 
> What kind of bugs are we talking about, and how much of that two weeks can your recovery plan actually get back?

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to run something by you. The Q3 budget review came back, and my team delivered 40% of the company's revenue this quarter, but we're still allocated the same headcount as last year. I'm asking for a proportional increase in our budget—something closer to our actual contribution. What do you think?"
> 
> [You're a senior manager at a fintech company in Singapore. David is your director. The conversation is about getting your team's budget aligned with its revenue share before next quarter's planning deadline.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Hey, thanks for making time. I wanted to check in—how are things going with the three projects we have running right now? The leadership dashboard, the customer churn model, and the pricing analysis. I know they've all landed at the same time."
> 
> [You're a data analyst at a mid-sized fintech company in New York. Rachel is your manager, three months in the role, direct but fair. She wants the team's output to stay strong and doesn't want anyone burned out. Goal: help her understand the workload conflict and agree on priorities together.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That lines up with what I'm seeing too. The Q4 forecast has a hard deadline—leadership presents to the board on the 15th. The dashboard migration was supposed to wrap by month-end, and the pricing analysis... honestly, that one came in from Sales faster than I expected. What do you think the risk is if we push each one out by a few weeks?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly with specific projects and proposed a concrete solution together.
> 
> **How it went:** This was a strong, professional ask—you named the workload conflict without complaining and invited collaboration.
> 
> **What worked:** "I can finish two well. Could we decide together which one can move to next month?" — this directly states your capacity limit and frames the decision as shared, which keeps you from sounding overwhelmed or unilateral.
> 
> **What to improve:** You could have added a brief reason for your capacity limit (e.g., hours or complexity) to strengthen the case, and you didn't name which two you'd recommend keeping—offering a starting point speeds up the decision.
> 
> **Also worth noting:** "All three are due this month" is factual; even stronger would be "all three need about 40 hours each" or similar detail.
> 
> **Try this instead:** "I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis. Each needs roughly 40 hours, and I have about 80 available this month. I can deliver two on time with quality. My suggestion is to keep the forecast and the migration, since the board deadline is fixed and the dashboard has downstream dependencies. Could we move pricing to early next month, or is there another option you'd prefer?"
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
> Hi there, thanks for making the time. I'm Priya, VP of Operations at Meridian Logistics. We signed up for your platform about two weeks ago, and honestly, we're still figuring out how it's going to fit into our day-to-day. Our current process is pretty manual—spreadsheets, email chains, the usual mess—so I'm hoping this moves us forward. But I should say, my team is skeptical about another new tool. They'll need to see real value fast, or they'll just work around it.
> 
> [Meridian Logistics, a mid-sized freight company based in Chicago. You're the customer success manager from the software vendor. Goal: understand Priya's needs and concerns so you can configure the product successfully.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 117 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our biggest pain point is shipment tracking across multiple carriers. I have six people on my ops team, and each of them spends roughly two hours a day just gathering updates from different portals and copying them into a master spreadsheet. It's slow, and by the time we spot a delay, the customer has usually already called us angry. We tried automating some of this with basic API connections last year, but they kept breaking and my IT team doesn't have bandwidth to maintain custom scripts. So we're looking for something that just works out of the box, with real-time visibility and alerts we can actually trust.
> 
> What else do you need to understand?

</details>
