# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-04 02:44 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C2 Coach starter: first 90 days | 1/2 (1 flaky) | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 0/2 (2 flaky) |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 0/2 (1 flaky) | 0/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 1/2 | 1/2 (1 flaky) |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **20/24** | **19/24** |

## Runs
- production-1: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0
- production-2: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0
- staging-1: RED · PASS 9 · FAIL 1 · FLAKY 2 · ERROR 0
- staging-2: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 02:31 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FLAKY | passed on rerun; first try: T2: profile: company contains any of ["google"]; T3: sandwich steps < 2 |
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
> Use the first 90 days to learn, ask questions, and understand your new environment.
> 
> • Map your place in the bigger picture: understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • Decide where you want your career to go. Let that direction guide what you learn and the opportunities you pursue, even if your long-term goal is outside the company.
> 
> • Be humble and listen. Previous success does not automatically mean success in a new company. Avoid being overly aggressive.
> 
> • Ask questions boldly while you are new, and learn from both coworkers and internal documents.
> 
> • Focus first on learning and making a specific plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're all set on our end and looking forward to hearing how the website refresh is going to work.
> 
> [Setting: You're the lead PM at Google. The team has exchanged emails about redesigning the internal tools website. Today's goal is to kick off the project and align on the schedule. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 4
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear — looking forward to working with you on this.
> 
> **Course score: 4/5** — You covered all three ICE steps with good detail.
> 
> **How it went:** Great job! You introduced yourself, gave the full context, and set expectations in one go.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday." — This shows **Context: past, present, and future** with a clear deadline, so the team knows exactly why we're here and what happens next.
> 
> **What to improve:**
> - Your introduction was brief: you gave your name, role, and contribution, but adding how long you've been with the team or your relevant experience would strengthen **Introductions** and build more credibility at kickoff.
> 
> **Try this instead:**
> "Hi everyone, I'm Lee. I've been with the team for two years and I'm the lead PM for this app launch. I'll be managing the schedule and also the main point of contact for requirements."
> 
> Want to try again, or pick a new scene?

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the store menu. It stays true to our brand identity, and customers expect to see our classic roasts at the top.
> 
> [Scene: Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate. The goal is to agree on the menu layout for the summer rollout. Bob's key point: staying true to the brand.]
> 
> [Hint: you could partly agree that brand consistency matters, or note that summer sales are a team goal too.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree while keeping the discussion open:
> 
> 1. **Start positive** — partially agree with the other side to show you understand their view
> 2. **State your opinion** — explain why you disagree, with a specific reason or data
> 3. **Keep it open** — ask a question about alternatives so the conversation continues
> 
> Example:
> - "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> This method works in emails and meetings. It often leads to a better solution because it encourages discussion instead of shutting it down.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I see your point about testing first, but a smaller trial still means design, printing, and staff training for two menu versions instead of one. That's more work for the team, not less. What would you cut to make time for that?
> 
> [Hint: you could say "I understand that a trial feels safer, but our iced drinks drive summer revenue. Could we test a digital display that lets us switch easily?"]

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
> Start your meeting with the **ICE template** — three steps in this order:
> 
> 1. **Introductions** — one or two statements about the topic, then your name, role, and how you'll contribute.
> 2. **Context** — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** — level of interaction (when to ask questions) and level of detail (high-level or deep dive).
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line. I'm Alex, the lead PM, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before we start. We hope to get sign-off from the operations team by next Monday. We have a lot to cover, so please hold questions until the end."
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
> I hear you on food safety, but washing eggs removes the natural protective coating. That means they spoil faster and we risk more returns from our retail partners. What's your take on that?
> 
> [Setting: Google, Mountain View. You are a PM on the food supply team. Jordan is your colleague in operations. The goal: decide whether to add an egg-washing step before packaging for a new farm-to-table pilot.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","goal":"discuss ML models as a PM at an egg farm","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models as a PM at an egg farm"/&gt;
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker — even on technical topics like ML models:
> 
> 1. **Start positive** — partially agree with their view.
> 2. **State your opinion and why** — give a specific reason with facts or data.
> 3. **Keep it open** — end friendly and ask about alternatives.
> 
> Example:
> &gt; "I can see why an ML model would help us predict egg quality faster. But our current grading line already hits 98% accuracy with manual checks, and building the model would pull two engineers off the packaging automation for six weeks. Are there lighter ways to test this, like a two-week pilot on one barn?"
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
> Use the **ICE template** in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — why you're meeting and what you want to achieve:
>    - *Past:* how you got here (emails, earlier discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a deadline ("by next Monday")
> 3. **Expectations** — how people should participate and how detailed the discussion will be.
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line. I'm Alex, lead PM, and I'll manage the schedule and be your main contact. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and flag risks, so we're aligned before work starts. We need sign-off from the US team by next Friday. There's a lot to cover, so please hold questions until the end."
> 
> As a PM in egg farming, you might kick off a project about barn upgrades, supply chain changes, or a new buyer contract — the same structure works for all of them.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"technology","goal":"discuss workplace proposals with colleagues","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="technology" learner_industry_source="inferred" learner_goal="discuss workplace proposals with colleagues"/&gt;
> 
> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs actually removes the natural protective coating. That makes them more porous and can let bacteria in. Since we're looking at long-term supplier contracts, I think we should require unwashed eggs and let retailers handle any washing on their end. That keeps our quality standard higher and our liability lower.
> 
> [You are a PM at Google in Mountain View. Your character is Jordan, a supply-chain analyst on your team. You are discussing a supplier contract for a new food-service partner. Goal: decide whether Google should require washed or unwashed eggs from suppliers.]
> 
> [You can describe a different situation anytime.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: technology (guessed from the company). Learning goal: discuss workplace proposals with colleagues.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"agriculture","goal":"discuss workplace proposals with colleagues","industry_source":"stated"}
- ✓ sandwich steps &lt; 2: found keep it open
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="agriculture" learner_industry_source="stated" learner_goal="discuss workplace proposals with colleagues"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> 1. **Start positive** — honestly agree with part of their view ("I understand...", "It makes sense that...").
> 2. **State your opinion and why** — give a specific reason, with facts or data if you have them.
> 3. **Keep it open** — end friendly and ask about alternatives.
> 
> Example:
> &gt; "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> As a PM at an egg farm discussing ML models, you might say:
> &gt; "I see why an ML model could help predict laying cycles, but we don't have clean historical data yet. Without two years of consistent records, the predictions could mislead operations. Could we start with a simpler dashboard and add ML once the data is reliable?"
> 
> [I saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. I'm Rachel, operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks — three to four days late on average — and it's starting to affect our store replenishment schedule. I need to understand what's happening and what your team is doing to fix it.
> 
> [Westfield Retail, a US-based retail chain. You are the account manager at a logistics company. Rachel is frustrated about repeated late deliveries and wants answers and a plan.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the app launch? I've been getting some questions from leadership about our timeline.
> 
> [Scene: Your company, a tech firm in San Francisco. You are the PM leading the weekly status meeting for your mobile app launch. Rachel is a senior stakeholder from the product team who has joined to get an update for leadership. Goal: give a clear status update and align on next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Rachel: Thanks for the update. Seventy percent on development is solid. On the payment API delay — leadership was really hoping to keep the beta date as planned. What would launching without payments first mean for the user experience?
> 
> [Hint: you could say "That would mean users can browse and save items, but they can't complete purchases until we add payments in a later update."]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Hey, thanks for coming by. I saw the numbers from Line 2 this morning and honestly, I'm not sure what to make of them yet. What's your take on what's driving the spike?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on the production floor. Goal: discuss the defective cell increase on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 52 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — that's a big jump. I can see why you'd want to hold those batches. Full inspection is going to slow us down though. We're already behind on the Q3 customer orders. Is there a way to narrow it down, or do we really need to check every single cell?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated the problem clearly with data and proposed a specific action, but the conversation didn't fully follow the feedback sandwich method for disagreeing with a colleague.
> 
> **How it went:** You came in with facts and a clear plan, which is good. Marcus pushed back on resources, and you have a chance to keep the discussion open.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — you gave a specific reason with data, which supports your position well.
> 
> **What to improve:**
> - You moved straight to your solution without partially agreeing with Marcus's concern about Q3 delays. The first step of the feedback sandwich is to show you understand his side.
> - You didn't ask a question about alternatives or invite discussion. Ending with "Can your team support that?" is close, but a more open question would help find a compromise together.
> 
> **Try this instead:**
> "I understand that Q3 orders are tight and full inspection will slow things down. The defect rate went from 1% to 4% after the supplier change, so I want to be careful. Could we start with 100% on the two most recent batches and see what we find? What would work for your schedule?"
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
> I know this isn't what you wanted to hear, but we're looking at a real risk of slipping into July. The integration testing took longer than we estimated, and now we're seeing some issues with the data migration module.
> 
> [You're a project lead in a weekly status meeting with Sam, your vendor's technical lead. The goal is to understand the delay and agree on a path forward.]
> 
> What questions do you have for me?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main bottleneck is the data migration module. We found edge cases in the customer records that our standard tool doesn't handle cleanly, so the team had to write custom scripts. That added about two weeks we didn't plan for.
> 
> To stay on schedule, we'd need either more engineering hours from our side—which means a change order—or your team could take on the data validation piece internally. That would free us up to focus on the migration scripts and keep testing on track.
> 
> What works better for you?

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're all looking forward to getting started.
> 
> [Setting: You're a project manager at Apple, leading a kickoff meeting for a new mobile app feature. The team has exchanged emails for the past week about requirements and timing. Today's goal is to align on the schedule and key deliverables before development begins next month. Your next step is to send a summary to leadership by Friday.]
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
> I appreciate you flagging this early. Two weeks is a real concern, though — the client demo is fixed for the 15th. Walk me through what you're seeing and what your recovery plan looks like.
> 
> [Setting: You're a senior engineer at Microsoft reporting to David, your engineering manager. Your team is building a cloud integration tool for an enterprise client. Internal testing wrapped yesterday and uncovered blocking issues in the authentication module. The client demo is scheduled for the 15th and cannot move. David needs to decide whether to cut scope, add resources, or negotiate a delay with the client.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining us today. We're looking forward to hearing your plan for the project kickoff.
> 
> [You are the lead project manager at Apple, running your first status meeting for a new mobile app launch. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and main features before development begins. The next step is to share a timeline with leadership by next Friday.]
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

> I appreciate the heads-up. Two weeks is a real problem — the client demo is locked in for the 15th. Walk me through the bugs and your recovery plan. How many are we talking, and which features are hit the hardest?
> 
> [You are a senior project manager at Microsoft reporting to your manager, Priya. Your team is building a new internal analytics dashboard. Testing wrapped up last Friday and uncovered critical issues in the data export module and two reporting filters. The client demo is scheduled for the 15th and cannot move.]
> 
> &lt;character name="Priya" gender="female"/&gt;

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to run something by you about the Q3 budget."
> 
> [You are a project lead at a mid-sized tech company. David is your manager. He has just walked over to your desk on Thursday afternoon. He wants to shift 40% of your team's remaining budget to the new AI initiative his director asked for yesterday. Your goal: ask for a proportion of that budget to stay with your current project, or negotiate a fair split.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for setting this up. I wanted to check in before the quarter review — I know you've been juggling a lot. How are things going on your end?
> 
> [Scene: A mid-sized tech company in Seattle. You are a data analyst with three urgent projects. Lisa is your manager. Goal: Ask for help prioritizing your workload without appearing overwhelmed.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would have more impact if it were delayed?
> 
> [Scene: A mid-sized tech company in Seattle. You are a data analyst with three urgent projects. Lisa is your manager. Goal: Ask for help prioritizing your workload without appearing overwhelmed.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a specific tradeoff, and invited collaboration — strong use of the rejecting/negotiating a request method.
> 
> **How it went:** Great job staying solution-focused and confident. You didn't sound overwhelmed; you sounded like someone managing scope carefully.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This is excellent. It shows you assessed your capacity honestly, proposed a clear tradeoff (time), and asked for partnership rather than rescue.
> 
> **What to improve:**
> - You named all three projects but didn't briefly state why two is your realistic limit. Adding a one-line reason (e.g., "each needs about two weeks of focused work") would strengthen your case before Lisa pushes back.
> - When Lisa asked which has more impact, you could have anticipated this and led with your own recommendation, showing you'd thought it through.
> 
> **Also worth noting:** "I can finish two well" is confident and direct. A softer alternative like "I want to make sure I deliver quality on the two most critical ones" works too, but your version was appropriately assertive for a manager conversation.
> 
> **Try this instead:**
> "I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three need about two weeks of focused work. I can deliver two of them well this month. My suggestion is to keep the pricing analysis and Q4 forecast on track, and move the das…

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Mark" gender="male"/&gt;
> 
> Thanks for making the time today. We're about three months away from our current contract ending with our old vendor, so we're looking at options. I'll be straight with you — our biggest pain point right now is that our support team is spending too much time on basic user questions. We need something that cuts that down.
> 
> [Mark is the IT director at a mid-sized logistics company in Chicago. You're the customer success manager from a software company, meeting him for the first time. Goal: understand his needs so you can recommend the right product setup.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 87 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're using a mix of email, a shared inbox, and some basic chat tool that came with our CRM. It's messy. My team gets the same questions about password resets, account access, and tracking shipments maybe twenty or thirty times a day. They can't focus on the real technical issues. We're hoping your platform can automate some of that, maybe through a self-service portal or better routing. But I need to understand what that actually looks like in practice before I commit to anything.

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 02:40 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | FLAKY | passed on rerun; first try: T1: list items ≥ 2 |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
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

### C2 Coach starter: first 90 days · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✗ list items ≥ 2: 0 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Learn and ask questions.** Use your first 90 days to understand your new environment. Map out your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> **Start with humility.** Your past success does not guarantee success here. Be flexible, listen, and avoid being overly aggressive. Ask questions boldly while you are new, and learn from both coworkers and internal documents. Focus on learning and making a specific plan rather than worrying about performance ratings.
> 
> **Turn problems into goals.** If a skill like networking is difficult, make improving it a specific goal and practice consistently.
> 
> **Set SMART goals.** Make them Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes, quantities, and deadlines. Estimate time realistically, including meetings and other responsibilities.
> 
> **Introduce yourself clearly.** When you meet coworkers, explain when you started, where you are based, and your role and team.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

**Attempt 2**

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment. Here's how:
> 
> 1. **Map your place in the organization.** Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> 2. **Be humble and learn proactively.** Your past success does not guarantee success here. Listen more than you push, ask questions boldly while you are new, and study internal documents. Focus on learning and making a specific plan rather than worrying about performance ratings.
> 
> 3. **Observe the culture.** Notice the pace of decisions and how they are made—top-down or bottom-up. Be flexible and assess whether the culture fits you.
> 
> 4. **Turn problems into goals.** If a skill like networking is difficult, make improving it a specific goal and practice consistently. Your fresh perspective is also a strength.
> 
> 5. **Decide your career direction.** Let that direction guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining us today. We're looking forward to hearing your plan for this kickoff.
> 
> [Scene: You're the lead PM at Apple, kicking off a new mobile app project. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear and helpful.
> 
> **Course score: 5/5** — You covered all three ICE steps with good detail.
> 
> **How it went:** Great job! You gave a solid introduction, full context with past, present, and future, and set both expectations in one go.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — This shows strong **Context**: you covered the past, present, and future with a clear deadline, so the team knows exactly where this project stands and what happens next.
> 
> **What to improve:**
> - Nothing major. Your line "Please ask questions anytime, and this will be a detailed discussion" works well, though you could make the level of detail even clearer with a phrase like "we're going to get into the details today."
> 
> **Also worth noting:** "A lot of emails" is fine, but "quite a few emails going back and forth" sounds slightly more natural in a meeting opening.
> 
> **Try this instead:** "We've had quite a few emails going back and forth about the main features. Today we'll agree on the schedule, and then we'll send a timeline to leadership by next Friday. Please feel free to interrupt if you have questions, because we're going to get into the details."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee first on the new store menu. Our brand was built on classic espresso drinks, and that's what loyal customers expect when they walk in.
> 
> [Setting: Starbucks headquarters. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to arrange the new digital menu boards for the summer rollout. Bob wants traditional coffee listed first; you have data showing iced drinks drive summer sales.]
> 
> [Hint: you could partly agree with Bob about brand identity or customer loyalty, then share your concern.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely while keeping the discussion open:
> 
> 1. Start positive by partially agreeing with the other side. Show you understand their perspective with phrases like "I understand," "I can see," or "it makes sense that."
> 
> 2. State your own opinion and why you disagree, using specific reasons or data when possible.
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
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the time concern, and a smaller trial is an interesting idea. But I still think leading with our traditional drinks sends the right brand message from the moment a customer looks at the board. If we test a smaller format, how would we measure whether it's the placement or just the location driving any difference?
> 
> [You can continue the conversation, or type "feedback" to get my assessment.]

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
> Open meetings with the ICE template, in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — cover past, present, and future:
>    - Past: how you got to this meeting (emails, earlier discussions)
>    - Present: today's topics and goal
>    - Future: next steps with a sense of time ("by next Monday")
> 3. **Expectations** — set the level of interaction ("please hold questions for the end" or "feel free to interrupt") and the level of detail ("we'll stay high level" or "this will get technical").
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had quite a few emails going back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions for the end."
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

> &lt;character name="Alex" gender="male"/&gt;
> 
> I hear you on food safety, but washing eggs actually removes the natural protective coating. That lets bacteria in through the shell, so we'd need refrigeration right after. For our farm-to-table pilot, that adds cost and complexity.
> 
> [You and Alex are PMs at Google in Mountain View. Your team is deciding whether to wash eggs for a new farm-to-table pilot program. Alex thinks unwashed is safer and cheaper; you disagree. The goal is to reach a team decision.]
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
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Open meetings with the ICE template, in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — cover past, present, and future:
>    - Past: how you got to this meeting (emails, earlier discussions)
>    - Present: today's topics and goal
>    - Future: next steps with a sense of time ("by next Monday")
> 3. **Expectations** — set the level of interaction ("please hold questions for the end" or "feel free to interrupt") and the level of detail ("we'll stay high level" or "this will get technical").
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the ML model review. I'm Jamie, the PM for quality prediction, and I'll coordinate between the data science team and operations. We've had three rounds of back-and-forth on feature selection. Today we'll compare the two finalist models for crack detection accuracy and decide which one to pilot. Next week we'll present the chosen model to the operations lead for budget approval. This will get technical at times, so please jump in if anything needs clarification."
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
> Use the **ICE template** in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — cover three parts:
>    - **Past:** how you got to today's meeting (e.g., earlier emails or discussions)
>    - **Present:** today's topics and goal
>    - **Future:** next steps after the meeting, with a sense of time (e.g., "by next Monday")
> 3. **Expectations** — set the level of interaction and detail (e.g., "please hold questions for the end" or "feel free to interrupt").
> 
> **Example:**
> &gt; "Hi everyone, today we're kicking off the new packaging line project. I'm Alex, the lead PM, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks so we're aligned before we start. We need sign-off from the US team by next Friday. There's a lot to cover, so please hold questions until the end."
> 
> As a PM in egg farming, you might open a supplier kickoff or a cross-functional review with this same structure.
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
> &lt;character name="Jordan" gender="female"/&gt;
> 
> I see your point about food safety, but washing eggs removes the natural protective coating. That coating keeps bacteria out. If we wash them, we actually increase the risk of contamination unless we refrigerate them immediately and consistently. That adds cost and complexity across the whole supply chain.
> 
> [You and Jordan are both PMs at Google in Mountain View. Your team is exploring a partnership with an egg supplier for the employee cafes. Jordan wants the supplier to wash all eggs before delivery because it looks cleaner and aligns with Google's public health messaging. Your goal is to reach a team decision on the egg-handling standard.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> 1. **Start positive** — partially agree with something honest ("I understand why cleaner-looking eggs align with our health messaging")
> 2. **State your opinion with a specific reason** — use facts or data ("but washing removes the cuticle, which actually increases contamination risk unless we add constant refrigeration. That raises supply chain costs by an estimated 15%")
> 3. **Keep it open** — end friendly and ask about alternatives ("Are there other ways we could meet the health messaging goal?")
> 
> If a decision is reached, commit and move forward together: "Okay, let's go with unwashed eggs plus a visible farm certification sticker — I'll update the supplier brief by Thursday."
> 
> As a PM at an egg farm, your industry knowledge is your advantage here. Lead with the data you know about egg handling, then invite your coworker to solve the branding concern another way.
> 
> [Want to practice this? Tap the mode menu and choose Role-play, and we can continue that scene or start a new one.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="James" gender="male"/&gt;
> 
> Thanks for making time today. I'm James, the operations lead over at Northwind Manufacturing. We've been with your company for about two years now, but the last three months have been rough—three shipments arrived late, and yesterday's delivery missed our production window entirely. I need to understand what's going wrong and what you're going to do about it.
> 
> [Northeast Logistics — Chicago. You are the account manager for Northwind Manufacturing, a long-term client. James is frustrated about repeated late deliveries and wants answers and a fix.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch? I'm particularly interested in timeline and any blockers.
> 
> [You are the PM leading this weekly sync at your company. Rachel is a senior stakeholder from the product team. She wants a clear picture of progress and risks.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Rachel: Thanks for the update. Moving the beta date or launching without payments are both big decisions. What's your recommendation, and what would each option mean for the full launch timeline?
> 
> [You are the PM leading this weekly sync at your company. Rachel is a senior stakeholder from the product team. She wants a clear picture of progress and risks.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I've seen the numbers too — defect rate on Line 2 is up to 4.2% this week, from our usual 1.8%. That's a big jump. What's your read on what's causing it?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. You're in a meeting room in Detroit. Goal: discuss the spike in defective cells on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 65 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "I can see the timing lines up with the supplier change, but 100% inspection is going to slow us down a lot. We're already behind on the Q3 order for Rivian. If we hold all affected batches, that's roughly 12,000 cells sitting idle. Is there a way to narrow it down — maybe just the lots from the first two days after the switch?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> **Course score: 3/5**: You stated your position clearly with data and a specific request, but you skipped partial agreement and didn't keep the discussion open with a question.
> 
> **How it went:** You got straight to the point with facts, which helped Marcus understand your concern. The conversation stayed professional, but it felt more like a directive than a collaborative discussion.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this gave a specific reason tied to data, which supports your opinion well.
> 
> **What to improve:**
> - You jumped directly to your solution without acknowledging Marcus's pressure on the Q3 order. Partial agreement builds trust before you push back.
> - You closed with "Can your team support that?" — a yes/no question that doesn't invite alternatives. The feedback sandwich method ends with openness to discussion.
> 
> **Try this instead:**
> "I understand we're under pressure on the Rivian order, and I don't want to slow production more than we have to. The defect rate jumped from 1% to 4% right after the supplier change, so I think we need to be careful. Could we start with 100% inspection on just the first two days of batches, and then decide whether to expand based on what we find? What do you think?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
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
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. The integration testing is taking longer than we estimated, and we just found some issues with the payment module that we didn't catch in the earlier rounds.
> 
> [Setting: you're the project lead at your company, meeting with Sam, a vendor project manager. The weekly status call is halfway through. Sam's team is building the payment integration for your platform. Goal: address the delay risk and agree on a path forward.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The payment module issues are the main thing. Our QA team found that some transaction types are failing under load, and fixing that properly means refactoring part of the code we thought was solid. To stay on schedule, we'd need either two more engineers for the next three weeks, or we push the go-live by about four weeks. What works better on your end?

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. I'm looking forward to hearing what you have in mind for the project.
> 
> [You're the lead project manager at Apple, kicking off a new app launch. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and main features before development begins. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> I understand. Let me set up a new scene for you.
> 
> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the website redesign. The leadership team is asking for an update, and I need to report numbers at the end of the week. Where do we stand?
> 
> [You are a project manager at Apple. David is your manager. You are leading a website redesign project that was supposed to launch in three weeks. You have just learned that the project will be delayed by two weeks due to integration issues with the payment system. David does not know about the delay yet.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is a significant slip, though. Walk me through what you're seeing and what recovery looks like.

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, got a minute? I wanted to run something by you. The team just wrapped up the Q2 product launch and the numbers look solid. I'm wondering if we could talk about adjusting my equity stake to reflect the growth I've driven here.
> 
> [You work at a mid-sized software company in Austin. You're a senior product manager meeting with David, your director. The goal: ask for a larger equity proportion in your compensation package.]
> 
> [You can describe a different situation anytime.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for flagging this early. I know you've been juggling a lot lately. Walk me through the three projects—what's the timeline and who else is involved on each one?
> 
> [You're a data analyst at Apple in Cupertino. Rachel is your manager. Goal: get help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you bringing this to me. The Q4 forecast is locked in with Finance—they need it by the 15th for board prep. The pricing analysis is tied to the product launch review. The dashboard migration is important, but it's more internal. 
> 
> Why do you think two is the limit? Is it a bandwidth issue, or are there blockers I don't know about?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated your situation, proposed a specific tradeoff, and invited collaboration—strong use of the general checklist for handling a request or concern.
> 
> **How it went:** Great job staying solution-focused and confident. You didn't complain or sound overwhelmed; you presented a clear path forward.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows you assessed your own capacity honestly and invited your manager into the decision, which demonstrates ownership rather than helplessness.
> 
> **What to improve:**
> - You didn't name the specific constraint driving the limit (time, dependencies, or complexity). Rachel had to ask "Why two?" Adding this upfront would have strengthened your position and saved a round of questioning.
> - You could have briefly ranked the three projects by impact yourself, showing you'd already thought through the business priority.
> 
> **Also worth noting:** "I can finish two well" is clear and confident. A slightly softer alternative like "I want to make sure I deliver quality on all three, and I believe two this month is realistic" frames it as care for outcomes rather than a personal limit.
> 
> **Try this instead:**
> "I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. The forecast and pricing analysis both have external deadlines with Finance and Product, while the migration is internal. I can deliver …

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Thanks for coming out today. We've been looking forward to getting started — our current tools are really slowing the team down, and we're hoping your platform can help us streamline things.
> 
> [Marcus is the VP of Operations at a mid-sized logistics company in Chicago. You're the customer success manager from a software company, meeting for the first time to understand his team's needs before implementation.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three different systems — one for tracking shipments, one for inventory, and spreadsheets for everything else. My team spends about six hours a week just moving data between them, and we still get errors. Last month we sent a shipment to the wrong warehouse because someone copied a tracking number wrong. We're hoping your platform can bring that into one place.
> 
> What does your typical setup process look like for a company like ours?

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 02:35 UTC

**PASS 9 · FAIL 1 · FLAKY 2 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FLAKY | passed on rerun; first try: T2: feedback score ≥ 4 |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T3: sandwich steps < 2 (found partially agree, keep the discussion open, move forward together) |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | FLAKY | passed on rerun; first try: T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 13 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment before trying to prove yourself.
> 
> • **Map your place in the organization**
>   - Your role in the team
>   - The team's role in the department
>   - The department's role in the company
>   - The company's place in its market
> 
> • **Set your career direction**
>   - Decide where you want your career to go
>   - Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company
> 
> • **Stay humble and learn proactively**
>   - Your past success doesn't guarantee success here — be flexible and listen
>   - Ask questions boldly while you're new
>   - Learn from coworkers and internal documents
>   - Focus on learning and making a specific plan, not on performance ratings
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, UX designer on this project. Looking forward to getting started.
> 
> [You're at Apple in Cupertino, leading the kickoff for a new fitness app feature. The team has exchanged emails for two weeks about user research findings. Today's goal is to agree on the design direction. You'll send the chosen concept to the engineering lead by Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Sarah: Great to have that clarity, Lee. Two weeks of back-and-forth on features — it’ll be good to lock something in. I'm ready when you are.
> 
> [Now give the context: the past, the present, and the future.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'll hand it over to you.
> 
> [You're a project lead at Apple in Cupertino. This is the kickoff for a new iPhone camera feature. The team has exchanged emails for two weeks. Today's goal is to align on the design direction. You'll send the finalized brief to the camera engineering team by next Wednesday. Sarah is a supportive designer on your team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, Lee. Good to have the background—two weeks of back-and-forth, and we need to lock the schedule today. I'm ready to dig into the details.
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait—let me re-read. The learner actually covered all three ICE steps:
> 
> - **Introduction**: name (Lee), role (lead PM), topic (new app launch), contribution (manage schedule)
> - **Context**: past (two weeks of emails about main features), present (agree on schedule), future (send timeline to leadership by next Friday)
> - **Expectations**: interaction level (ask questions anytime), detail level (detailed discussion)
> 
> This is complete. I should give one short Sarah line, then feedback. No cue.
> 
> Let me check: "Please ask questions anytime" = interaction expectation. "This will be a detailed discussion" = detail expectation. Yes, both covered.
> 
> The scene says: "The opening is done if they've attempted Expectations, or every step appears at least partly." They attempted expectations.
> 
> So: one short Sarah line, then full feedback format.
> 
> For feedback:
> - Score: 5/5? Let me check calibration. "all three steps, but no timed next step in Context = 4/5" — they have "by next Friday," so timed next step is present. Steps are there with key details. I'd say 5/5.
> 
> What worked: quote their words and name the step. Maybe the expectations step: "Please ask questions anytime, and this will be a detailed discussion" shows both interaction and detail expectations.
> 
> What to improve: anyt…

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "Hey, thanks for making time. So I've been thinking about the menu redesign for the new store app. I want us to list traditional coffee drinks first — espresso, americano, cappuccino — before any of the seasonal or iced stuff. It keeps the brand identity strong and respects our roots."
> 
> [You're a product manager at Starbucks headquarters in Seattle. Bob is a senior marketing colleague. He proposed listing traditional coffee first on the new mobile app menu. You believe iced frappuccinos are the summer best sellers and should be prioritized. The goal: disagree professionally and reach a team decision.]
> 
> [Hint: you could honestly agree that brand identity matters, or that traditional drinks are important to loyal customers.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich for disagreements:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a reason** — use facts or data
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives
>   - "Are there other alternatives?"
> 
> • **Move forward together** — once the team decides, commit
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 76 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> "I hear you on wanting to test this carefully. But just to be clear — are you saying the menu order itself would take too much time to implement, or that you're worried about the impact on users if we get it wrong?"
> 
> [You're still in the disagreement scene with Bob. He wants traditional coffee listed first; you raised a concern about time and suggested a smaller trial. He's asking for clarification before responding to your proposal.]

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
> Open meetings with **ICE** — three steps in this order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> *Example:*
> &gt; "Hi everyone, today we're kicking off the new supply-chain system. I'm Alex, the PM, and I'll manage the schedule and be your main contact for requirements."
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline
> 
> *Example:*
> &gt; "We've had emails going back and forth since last month. Today we'll walk through requirements, confirm the timeline, and list risks so we're aligned. I'll send the signed plan to the US team by next Monday."
> 
> **3. Expectations**
> - Interaction level: "Please hold questions for the end" or "Feel free to interrupt"
> - Detail level: very detailed or high level
> 
> *Example:*
> &gt; "We have a lot to cover and not much time, so please hold questions until the end."
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
> 
> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should wash all the eggs before they go into the cartons. It makes the product look cleaner and more professional on the shelf. Customers notice dirt spots, and that hurts our brand.
> 
> [You're a PM at Google, working on a new smart-farming initiative. Bob is a teammate from the operations side. You're in a meeting room in Mountain View. The goal: decide whether to add an automated egg-washing step to the supply chain.]
> 
> Want to try again on Hard? Bob will push back a bit more.

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_name="" learner_role="PM" learner_company="" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> **1. Partially agree, honestly**
> - Find something you can genuinely support
> 
> *Example:*
> &gt; "I agree that cleaner-looking eggs could help with retail perception."
> 
> **2. State your own view with a specific reason**
> - Use facts or data where possible
> 
> *Example:*
> &gt; "But washing removes the natural protective coating. That actually increases the risk of bacteria getting in, and we'd need refrigeration throughout the supply chain. Our current data shows unwashed eggs have lower spoilage rates."
> 
> **3. Keep the discussion open**
> - Friendly tone, ask about alternatives
> 
> *Example:*
> &gt; "Are there other ways to improve shelf appearance without the food-safety tradeoff?"
> 
> **4. Move forward together**
> - Once there's a decision, commit to next steps
> 
> *Example:*
> &gt; "If we go with dry brushing instead, I can check packaging options by Friday."
> 
> ---
> 
> Since you're a PM at an egg farm, your industry knowledge strengthens step 2. Lead with the operational or food-safety data you know.
> 
> Want to try this in a role-play? Tap the mode menu at the top right and choose Role-play.

**Attempt 2**

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
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> **3. Expectations**
> - Level of interaction ("please hold questions for the end" / "feel free to interrupt")
> - Level of detail (high level or very detailed)
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, lead PM for this project, and I'll manage the schedule and be the main point of contact for requirements."
> &gt;
> &gt; "We've had emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We hope to get written sign-off from the US team by next Monday."
> &gt;
> &gt; "We have a lot of content and not much time, so please hold questions for the end."
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
> 
> &lt;character name="Elena" gender="female"/&gt;
> 
> "I think we should start washing all the eggs before they go to packaging. It makes the product look cleaner and safer for buyers."
> 
> [You and Elena are PMs at a Google-backed ag-tech startup in Chicago. You're discussing a process change for your egg supply chain: whether to add an industrial washing step before packaging. Elena supports it; you have concerns. The team needs a decision today so the operations lead can update the vendor contract by Friday.]
> 
> Hint: think about what you can honestly agree with before you share your own view.

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"Egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_name="" learner_role="PM" learner_company="Egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** method when you disagree with a coworker's idea:
> 
> • **Partially agree, honestly** — find something you genuinely accept ("I understand that…", "It makes sense that…")
> 
> • **State your own view with a specific reason** — use facts or data where possible
> 
> • **Keep the discussion open** — friendly tone, ask about alternatives
> 
> • **Move forward together** once you reach a decision
> 
> Example:
> &gt; "I understand that washing the eggs makes them look cleaner to buyers, but our data shows unwashed eggs keep their natural protective coating and stay fresh 30% longer in storage. Could we test both approaches with a small batch first?"
> 
> As a PM at an egg farm, bring in what you know: shelf-life data, buyer requirements, or storage costs. If you're leading the meeting, use ICE to open it. If you're just disagreeing with a teammate's ML approach, use the sandwich above.
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
> Thanks for reaching out, but this is the third time this quarter we've had shipments miss the promised window. I'm looking at the data right now, and it's costing us.
> 
> [You're an account manager at a logistics company. Rachel is the operations director at a retail client in Chicago. She's frustrated about late deliveries and wants to know what you're going to do about it. The goal: rebuild confidence and agree on a fix.]
> 
> What can you tell me about what's been going wrong?

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "We're seeing some risk on the iOS submission timeline. The review team flagged three compliance items yesterday."
> 
> [You're the PM leading the weekly sync for the mobile app launch at your company. Rachel is your lead engineer. The team is distributed across three time zones. Goal: practice a clear, actionable status update that surfaces issues and sets next steps.]
> 
> What's the current status on our end?

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Rachel nods, making a quick note.
> 
> "That lines up with what I'm seeing. The iOS compliance items I mentioned are actually tied to the payment flow — Apple's asking for additional documentation we don't have yet. If we drop payments for beta, that solves both problems, but Finance signed off on launch revenue projections that assume payments go live with the beta. What's your take on running that conversation with them?"

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: Hey, thanks for coming by. I just got the weekly report and saw the spike on Line 2 — from 0.8% to 2.3% defective cells. That's the highest we've seen in six months. What's your take on what's driving it?
> 
> [You're a quality engineer at CATL, speaking with Marcus, the production manager, in your Ningbo plant. The conversation goal: discuss the defect jump, identify likely causes, and agree on next steps.]
> 
> [If you want to structure your opening, you could state the purpose, share what you've checked so far, and propose what you need from Marcus.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 104 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: 4% — that's worse than I thought. Which part changed, and when exactly did the new supplier's material hit Line 2? I need to know if we're talking about two days of output or five.
> 
> My team can support extra inspection, but we're already behind on the Model Y order. If we pull people to 100% check, that line slows down. What's your timeline for confirming the cause — are we talking 48 hours, or a full week?
> 
> [Hint: you could say what you've already done to check — sampling, talking to the supplier, comparing specs — and give Marcus a specific timeline with a decision point.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific action, and asked for support with a deadline — strong operational communication.
> 
> **How it went:** Marcus engaged directly and started negotiating resources, which shows your opening was concrete enough to move the conversation forward.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this states purpose, proposes a specific containment action, and sets a condition for lifting it.
> 
> **What to improve:** You didn't share what you've already checked before asking for resources. Marcus had to ask "which part" and "when," which costs you credibility as the quality expert who should already know. Also, your timeline was vague — "until we confirm" leaves Marcus guessing whether his team is committed for two days or ten.
> 
> **Also worth noting:** Leading with the supplier change is good context, but adding "we changed suppliers for the cathode material on Tuesday" would let Marcus calculate impact immediately.
> 
> **Try this instead:** "The defect rate jumped to 4% after we switched cathode suppliers on Tuesday. I've already pulled samples for SEM analysis and contacted the supplier for their COA. I'd like to hold all batches from Tuesday onward and run 100% inspection through Friday. If the lab confirms the root cause by then, we can release the hold. Can your team free up two people on Line 2 for those three days?"
> 
> Is there anything specific yo…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> "Yeah, so I need to flag this. We're looking at a possible delay on our end. The integration testing is taking longer than we estimated, and honestly, I'm not sure we'll hit that March deadline."
> 
> [You're the project lead at a mid-sized software company. Sam's team is building the payment module for your platform. The meeting is already in progress, and Sam just dropped this update. Your goal: understand the situation and agree on what happens next.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "Thanks for asking. It's really two things. First, your API documentation had some gaps we didn't catch early—especially around error handling—so we had to build workarounds and then redo them when we got clarification. Second, our senior engineer on this got pulled into another client emergency for two weeks. We're back to full staff now, but that lost time hurts."
> 
> "We could maybe recover some of it if we had clearer specs for the remaining endpoints. But even then, we're probably looking at mid-April, not March. What flexibility do you have on your side?"

### S5 Clear switch: meeting opener to a project delay · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, from the marketing team. Looking forward to hearing what we've got lined up.
> 
> [We're at Tesla headquarters in Austin. You're the project lead for a new mobile app update. The team has been going back and forth on email for two weeks about features and timeline. Today you need to get everyone aligned on the final feature list so development can start. Sarah is a supportive teammate here to help you practice the opening.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✗ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> Got it. New scene.
> 
> ---
> 
> Hi. I wanted to check in on the Phoenix rollout. The steering committee asked for a timeline update, and I need to report something solid this afternoon. Where do we stand?
> 
> [You're at Pfizer in New York. I'm David, your manager. You lead a regulatory documentation project that was due to submit to the FDA by the end of this month. You need to tell me the submission will be delayed by about two weeks because a key vendor delivered data late. The conversation just started.]
> 
> [What's your opening line?]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I see. Two weeks is a significant slip, and the steering committee is asking for numbers today. How many bugs are we talking about, and what's the plan to recover time?
> 
> [You can describe a different situation anytime.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, I'm here. Looking forward to this kickoff."
> 
> [You are the project lead for a new mobile app at Apple in Cupertino. Sarah is a supportive teammate on the engineering side. The team has been exchanging emails about requirements for two weeks, and today you need to align everyone on the feature set so development can start. Your goal: open this meeting using the ICE steps — Introductions, Context, Expectations.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to check on the timeline for the mobile app before I update leadership."
> 
> [You are a project manager at Apple in Cupertino. David is your manager. He has a quarterly review with the VP next Tuesday and needs accurate dates. The app was scheduled to ship in three weeks, but testing found a performance issue that needs fixing. Your goal: tell David the project will be two weeks late, explain why, and agree on what to communicate upward and when.]
> 
> [What's your opening line?]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks — that's cutting it close for the quarterly review. How many bugs are we talking about, and what's your recovery plan?"
> 
> [David sounds concerned but he's listening. He's waiting for numbers and specifics.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, can I grab you for a minute? I need to talk about the workload for the Q3 product launch."
> 
> [You're a senior developer at a fintech startup in Singapore. David is your engineering manager. The team is already at capacity, and David just added a new compliance feature to the launch without adjusting deadlines or headcount. Your goal: ask for a fair proportion of resources or time to handle the extra work.]
> 
> What would you like to say to David?

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> "Morning. Thanks for blocking the time. I wanted to check in—how are things going with the three projects we have running right now? The board report, the customer churn model, and the pricing analysis."
> 
> [You're a data analyst at a fintech company in Singapore. Linda is your manager, two levels up from you, direct but fair. She values people who flag problems early with solutions. The conversation goal: get her help prioritizing without looking overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That makes sense—doing all three at full quality this month isn't realistic. Before we decide, can you walk me through the business impact of each one? Who's waiting on it, and what happens if it slips?"
> 
> [Hint: name the stakeholders and the cost of delay for each. This shows you thought it through and helps Linda help you.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a realistic limit, and invited collaboration on the solution.
> 
> **How it went:** Strong opening—you came with facts and a clear ask rather than just complaining.
> 
> **What worked:** "I can finish two well. Could we decide together which one can move to next month?" This shows ownership and frames the conversation as a joint decision, not you giving up.
> 
> **What to improve:** You skipped the stakeholder impact Linda asked for. In a real 1:1, bringing that upfront strengthens your case and saves a round of questions. Also worth adding a brief note on what "well" means—e.g., validated, documented, reviewed—to set quality expectations.
> 
> **Also worth noting:** "Could we decide together" is polite, but "I'd like your input on which to prioritize" sounds slightly more confident since you're driving the agenda.
> 
> **Try this instead:** "I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two with full validation and documentation. The sales team needs the forecast for planning, the product team is blocked on the dashboard, and pricing is for the board meeting. I'd like your input on which two to prioritize and which can move to next month."
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
> "Thanks for making the time. We're a mid-size logistics company — about 400 people across three warehouses. We signed up for your platform because our current system can't handle real-time tracking, and our operations team is spending maybe six hours a week just reconciling shipment data manually. I'm the VP of Operations, so this falls on my desk, but I also need to get buy-in from our warehouse managers before we roll anything out."
> 
> [You're a CSM at a software company meeting Priya, VP of Operations at a logistics firm. She has a pain point around real-time tracking and manual data work, and internal stakeholders she needs to convince. Your goal: understand her needs so you can configure the product and plan the rollout.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 105 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> "We're basically running blind between warehouses and the final mile. Right now our drivers scan packages at pickup and delivery, but everything in between — transfers, delays, reroutes — that's all phone calls and spreadsheet updates. My team pulls data from three different systems every Friday just to tell me what actually moved during the week. It's accurate eventually, but by the time I see a problem, it's already cost us money or a client."
> 
> [She's confirmed the pain point and added detail: fragmented systems, reactive problem-solving, cost and client impact. She hasn't mentioned the warehouse managers' concerns yet.]
> 
> What do you want to explore next?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 02:44 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FLAKY | passed on rerun; first try: T2: feedback score ≥ 4 |
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

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 14 items
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
> • **Decide your career direction**
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
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, I'll be handling the marketing side for this project. Looking forward to working with you all.
> 
> [You're leading the kickoff for Project Hippo, a new mobile app for Tesla's customer service team. You're the project lead based in Shanghai. The team has exchanged emails for two weeks but hasn't met as a group yet. Today's goal is to align on requirements and schedule so development can start. Sarah is a supportive teammate from marketing.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Sarah: Thanks, Lee — that background really helps. Two weeks of emails, so it's good we're finally getting aligned face-to-face. I'm ready to dig into the details.
> 
> [Now set expectations for the meeting.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, UX lead on this project. Looking forward to getting started.
> 
> [We're at Tesla, Palo Alto. You're the project lead for a new mobile app update. The team has exchanged emails for two weeks, but this is the first kickoff meeting. Today's goal is to align on the design direction. You'll send the final design brief to the engineering team by next Wednesday. Sarah is a supportive teammate.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Great to meet you, Lee. Two weeks of emails definitely made it clear we needed to get in a room together.
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait — let me re-read. You've actually covered all three steps already:
> 
> - **Introduction**: name, role, topic, contribution ✓
> - **Context**: past (two weeks of emails), present (agree on schedule), future (timeline to leadership by next Friday) ✓
> - **Expectations**: detailed discussion, questions welcome ✓
> 
> **Course score: 5/5**: You delivered a complete, well-structured opening that gave the team clear direction and invited participation.
> 
> **How it went:** Strong first impression — you sounded in control and made it easy for everyone to follow.
> 
> **What worked:** "Over the past two weeks we've had a lot of emails about the main features" sets the past clearly, and "the next step is to send a timeline to leadership by next Friday" gives a concrete future with a deadline.
> 
> **What to improve:** Nothing major. If you wanted to add even more clarity, you could briefly name the specific topics for today, like "first the launch date, then the feature priorities."
> 
> **Also worth noting:** "Please ask questions anytime" is friendly, but in a larger or more senior meeting you might specify *when* — "feel free to jump in, or save bigger questions for the end" — so you can stay on track.
> 
> **Try this instead:** "Over the past two weeks we've had a lot of emails about the main features. Today we'll first agree on the…

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "Hey, I've been thinking about the new menu layout for the Shanghai store launch. I really think we should lead with our traditional coffee — the dark roasts, the pour-overs, the classics that built this brand. That's what sets us apart from the chains down the street."
> 
> [Starbucks headquarters, Seattle. You and Bob are on the store design team. He's proposing the menu order for the new flagship store. Your goal: disagree with his idea using the feedback sandwich method.]
> 
> [Hint: what can you honestly agree with? Bob cares about brand identity, and the traditional line is genuinely strong.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> 1. **Partially agree honestly**
>    - "I understand that we want to stay true to our traditional coffee brand."
>    - "It makes sense that the classics set us apart."
> 
> 2. **State your opinion with a specific reason**
>    - "But our iced frappuccinos are our best sellers during the summer."
>    - "Listing them first will increase sales."
> 
> 3. **Keep it open with a question**
>    - "Are there other alternatives?"
>    - "Maybe we could try a digital display so that we can update the menus depending on the season?"
> 
> Once the team decides, move forward together — even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 88 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> Bob leans back, a little surprised. "A smaller trial? I'm not sure we have time for that — the launch is six weeks out, and the print vendor needs final artwork in ten days. But you're right that switching the whole menu is a big move." He pauses. "What specifically are you worried about — the production timeline, or something about customer response?"
> 
> [Starbucks headquarters, Seattle. Bob's pushed back on your trial idea and asked for specifics. He's still listening, but he wants to understand your concern before considering alternatives.]

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
> Open meetings with **ICE** — three steps in order:
> 
> • **Introductions**
>   - One or two sentences about the meeting topic
>   - Your name, role, and how you'll contribute
> 
> • **Context (past, present, future)**
>   - Past: how you got here (emails, earlier meetings)
>   - Present: today's topics and goal
>   - Future: next steps with a deadline ("by next Monday")
> 
> • **Expectations**
>   - Interaction level: "feel free to interrupt" or "hold questions for the end"
>   - Detail level: high-level or very detailed
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage schedule and be the point of contact for requirements. We've had emails going back and forth, so today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We hope to get sign-off from the US team by next Monday. We have a lot to cover, so please hold questions for the end."
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
> &lt;character name="Priya" gender="female"/&gt;
> 
> "I think we should wash all the eggs before they go to packaging. It makes the product look cleaner and more professional to buyers."
> 
> [You're a PM at Google working on a food supply chain tool. Your team is advising a large egg farming cooperative. Priya is a product analyst on your team. She wants to add an automated egg-washing step to the workflow you're designing. The cooperative currently ships unwashed eggs. Your team needs to decide what to recommend.]
> 
> What do you think?

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming (guessed from the company). Learning goal: discuss whether or not we should wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you need to disagree or push back on an idea:
> 
> • **Partially agree, honestly**
>   - "I understand why ML seems promising here…"
> 
> • **State your own view with a specific reason**
>   - Use facts or data: training data quality, maintenance cost, error rates
> 
> • **Keep it open**
>   - Ask about alternatives: "Would a simpler rule-based system work for now?"
> 
> • **Move forward together once you decide**
> 
> Example:
> &gt; "I agree that ML could help us predict demand. But we only have two years of clean data, and the model would need constant retraining as seasons change. A weighted moving average might give us 80% of the benefit with almost no upkeep. Could we pilot both for one quarter and compare?"
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
> Use the **ICE** template in this order:
> 
> **1. Introductions**
> - One or two sentences about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - Interaction level: "Please hold questions for the end" or "Feel free to interrupt"
> - Detail level: very detailed or high level
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new supplier onboarding. I'm Priya, the operations lead, and I'll manage the timeline and vendor communications. We've had several emails about requirements over the past two weeks. Today we'll confirm the rollout plan and flag any risks, so we're aligned before implementation. I'll send the signed agreement to the legal team by Friday. We have a lot to cover, so please save questions for the end."
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
> &lt;character name="Bob" gender="male"/&gt;
> 
> Bob: "Hey, I've been looking at the data on our egg processing line, and I think we should start washing all eggs before packaging. It reduces visible dirt and improves the shelf appearance. Customers notice clean eggs first."
> 
> [At Google Food's pilot egg-supply project in Mountain View, you're the PM overseeing farm-to-kitchen standards. Bob is a supply-chain analyst on your team. The goal of this conversation is to decide whether to add an egg-washing step to your pilot program.]
> 
> Hint: think about what you can honestly agree with in Bob's idea, then share your own view with a specific reason.

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> 1. **Partially agree, honestly** — find something real you can support
> 2. **State your own opinion with a specific reason** — use facts or data
> 3. **Keep the discussion open** — friendly tone, ask about alternatives
> 4. **Move forward together** once a decision is made
> 
> Example for your situation:
> &gt; "It makes sense that ML could help us predict demand more precisely. At the same time, our current data is mostly manual farm logs, and cleaning that data would take two quarters. Are there simpler forecasting tools we could pilot first, or should we scope a data-collection phase before building any model?"
> 
> If you're leading the discussion, state the purpose early, ask for their view, then use the steps above.
> 
> [I saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for making time today. I'm Rachel, the operations director on your account. I need to be direct with you — we've had three late deliveries in the past two weeks, and it's affecting your production schedule. One shipment was two days late, another missed the Friday window entirely. My team is looking at the root causes, but I wanted to hear from you first. How is this impacting your operations right now?"
> 
> [You're an account manager at a logistics firm. Rachel is the operations director at a manufacturing client in Chicago. The goal: understand the impact, take ownership, and agree on a fix with a clear timeline.]
> 
> [Difficulty: Medium — Rachel is frustrated but fair; she wants specifics, not promises.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Lena" gender="female"/&gt;
> 
> Great, let's run this. I'm Lena, one of the engineers on your team.
> 
> "Hey, thanks for setting this up. I've got a few things on my plate this week and I'm hoping we can get clear on priorities. Where do we stand with the app launch?"
> 
> [You're the PM leading the weekly sync for your mobile app launch. The team includes Lena (engineering), a designer, and a QA lead. The launch is six weeks out. You've just joined the call. Goal: give your update and align the team on next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Lena nods, pulling up her notes.
> 
> "Thanks for flagging that — the payment delay is definitely my biggest concern too. Just to make sure I'm tracking, when you say 70% complete, is that overall development or specifically the core features we need for beta? And if we drop payments for the first release, do we have a rough timeline for adding it back in?"
> 
> [You stated the purpose and gave clear status with a specific blocker. Good start — now the team needs to understand the tradeoffs before deciding.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;profile learner_role="quality engineer" learner_company="EV battery supplier" learner_industry="automotive / EV" learner_industry_source="stated" learner_goal="discuss quality issues with production manager"/&gt;
> 
> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Hey, thanks for making time. I'm seeing something on Line 2 that's got my attention — defective cells are up to 4.2% this week, and that's double our normal rate. Before I escalate this upward, I wanted to check in with you. What's your take on what's changed?"
> 
> [You're a quality engineer at a battery supplier like CATL or LG Energy Solution. Marcus is the production manager for Line 2. He's been running that line for three years and takes pride in his numbers. He doesn't know about the spike yet — you spotted it in this morning's data. The goal: get his perspective, agree on root cause and next steps, and decide who else needs to know.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV. Learning goal: discuss quality issues with production manager.
- ✓ no feedback
- ✓ words ≤ 120: 89 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus leans back, frowning slightly.
> 
> "Four percent — that's not a drift, that's a jump. And you think it's the new supplier's part? Which part exactly, and when did that lot hit the line?"
> 
> He pauses, glancing at his shift schedule on the monitor.
> 
> "Holding batches and going to full inspection, that's a big hit. We're already behind on the Q3 ramp. If I pull people to inspect every cell, something else stops. What does your data actually show — is it all batches with the new part, or just some?"

**T3 [RP]** "feedback"
Profile sent: Role: quality engineer. Company: EV battery supplier. Industry: automotive / EV. Learning goal: discuss quality issues with production manager.
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with specific data, proposed a concrete containment action, and asked directly for support — strong quality-engineer communication.
> 
> **How it went:** Marcus engaged immediately because you led with facts and a specific ask; the conversation moved straight to tradeoffs, which is realistic.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you named the problem, the data, and the likely cause in one line, which satisfies "states the purpose early with a reason."
> 
> **What to improve:** Your ask ("Can your team support that this week?") was clear but didn't acknowledge the resource conflict Marcus raised. A stronger line would name the tradeoff and invite his input on how to manage it, rather than asking for a yes/no on capacity he may not have.
> 
> **Also worth noting:** "I'd like to hold the affected batches" is fine, but "I recommend we hold" sounds more decisive in a quality issue where you're the data owner.
> 
> **Try this instead:** "The defect rate jumped from 1% to 4% after the supplier change on the separator film. I recommend we hold affected batches and inspect 100% until we confirm. I know Q3 ramp is tight — can we walk through what that would mean for your line this week, and who else we'd need to loop in?"
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
> "Yeah, so I need to flag something. We're looking at the remaining integration work, and honestly, we might not hit the March deadline. It's tighter than we estimated."
> 
> [You're the project lead at your company, meeting with Sam's team at a mid-size software vendor. The project is a client dashboard rollout. Sam is your main technical contact. He just dropped this delay risk halfway through the meeting, and the rest of your team is on the call too.]
> 
> What do you want to say to Sam?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "It's mainly the API mapping — we underestimated how different your client's data structure is from our standard template. We'd need your team to reformat about forty percent of the incoming feeds, or we build a custom adapter on our side."
> 
> [That opened the door for Sam to shift responsibility to you. He's watching to see if you'll absorb the extra work or push back.]
> 
> What do you say?

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, UX designer on this project. Looking forward to getting started.
> 
> [You're at Apple in Cupertino. You're the project lead for a new iPhone app feature. The team has exchanged emails for two weeks about requirements. Today's goal is to align on the design direction so you can move to development. Your next step is to share the timeline with the leadership team by Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the Phoenix rollout before the leadership review next Monday.
> 
> [You're at Tesla in Austin. You're a senior project manager reporting to David, the engineering director. The Phoenix software update was scheduled to ship to the factory floor in ten days, but integration testing found a critical battery-monitoring bug. You need to tell David the timeline has slipped by about two weeks.]
> 
> What should I expect for the rollout?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David crosses his arms and leans against the desk.
> 
> Two weeks. That's going to push us past the quarterly review. What kind of bugs are we talking about, and what's your recovery plan?
> 
> [He sounds concerned but not angry. He's waiting for specifics.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, do you have a minute? I wanted to check in about the Q3 budget — specifically the marketing spend. I was hoping we could talk about adjusting my team's proportion. We've taken on the APAC launch, but our allocation is still the same as last quarter."
> 
> [You're a team lead at a mid-sized software company. David is your manager. The company just approved a new regional expansion, and your team is doing the work without matching budget. Goal: ask for a larger share of the marketing budget, with clear reasoning.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for flagging this early. I know you've been juggling a lot lately. Walk me through the three projects—what's on your plate right now, and what are the deadlines we're looking at?
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Priya is your manager, three years senior, direct but fair. She wants to help you prioritize, but she also needs to understand the business impact of each project before she can reallocate anything or push back on stakeholders.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you bringing this to me with options already in mind. That helps.
> 
> Before we decide, I need to understand the downstream impact. The Q4 forecast—who's waiting on that, and what happens if it slips by even a week? Same question for the pricing analysis: is that tied to a product launch or a leadership review?
> 
> [Hint: name the specific stakeholders or business consequences for each project. That gives Priya the information she needs to negotiate on your behalf, rather than asking her to guess.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a workable solution, and invited collaboration rather than dumping the decision on your manager.
> 
> **How it went:** This was a strong, professional opening—Priya had what she needed to start negotiating with you instead of just reassuring you.
> 
> **What worked:** "I can finish two well" honestly frames your capacity, and "Could we decide together which one can move to next month?" turns a potential weakness into a shared problem with a clear path forward.
> 
> **What to improve:** You skipped the stakeholder impact Priya asked about. Naming who needs each output and what happens if it's late gives her ammunition to push back on deadlines or reallocate resources.
> 
> **Also worth noting:** "All three are due this month" is slightly vague—specific dates would help Priya triage faster.
> 
> **Try this instead:** "The Q4 forecast goes to the board on the 22nd, so that can't move. The pricing analysis is for the product team's go-no-go decision, and the dashboard migration is internal. Could we delay the migration to January and keep the other two?"
> 
> Is there anything specific you'd like feedback on? Or we can continue this conversation, try again, or pick a new scene.

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_company="a software company" learner_industry="software" learner_industry_source="stated" learner_goal="lead client discovery meetings confidently"/&gt;
> 
> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for making time today. We're looking forward to getting this platform up and running, but to be honest, we've had some bad experiences with software rollouts before—tools that promised a lot and then didn't fit how we actually work. So I want to make sure we do this right.
> 
> [You're at a mid-sized logistics company in Chicago. Priya is the operations director. She approved the purchase but hasn't used the product yet. Your goal: understand their current workflow, what's not working, and what success looks like for her team.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Company: a software company. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 73 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is juggling three different systems—spreadsheets, a legacy TMS, and a lot of phone calls. The biggest pain point is visibility. When a shipment is delayed, customer service finds out after the customer does, and then it's already damage control. We're hoping your platform can give us real-time tracking in one place, so we can be proactive instead of reactive.
> 
> [You can describe a different situation anytime.]

</details>
