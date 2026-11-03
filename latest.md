# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-03 14:09 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C2 Coach starter: first 90 days | 2/2 | 1/2 (1 flaky) |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 1/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 0/2 | 1/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 1/2 (1 flaky) |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **20/24** | **20/24** |

## Runs
- production-1: RED · PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0
- production-2: RED · PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-1: RED · PASS 9 · FAIL 1 · FLAKY 2 · ERROR 0
- staging-2: RED · PASS 11 · FAIL 1 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:52 UTC

**PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
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
> In your first 90 days, focus on learning rather than proving yourself right away:
> 
> • **Map your place in the organization.** Understand your role on the team, your team's role in the department, the department's role in the company, and the company's position in its market.
> 
> • **Stay humble and listen.** Past success at another company doesn't guarantee success here. Be flexible, avoid being overly aggressive, and ask questions boldly while you're still new.
> 
> • **Learn from multiple sources.** Talk to coworkers and read internal documents to understand how things actually work.
> 
> • **Set a learning plan.** Focus on making a specific plan for what you need to learn, rather than worrying immediately about performance ratings.
> 
> • **Keep your long-term direction in mind.** Decide where you want your career to go, and let that guide what you learn and which opportunities you pursue—even if your ultimate goal is outside the company.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining us today. We're looking forward to hearing how the new mobile app launch is shaping up.
> 
> [Setting: You're a project manager at Apple, leading a kickoff meeting with the iOS development team in Cupertino. Over the past week, there have been several email threads about feature priorities and timeline. Today's goal is to align everyone on the schedule and main deliverables before development begins. The next step will be to share a confirmed timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear — looking forward to working through the details with you.
> 
> **Course score: 5/5**: You covered all three ICE steps — Introductions, Context, and Expectations — with good detail and a clear deadline.
> 
> **How it went:** Great job! You opened the meeting professionally and gave the team everything they needed to follow along.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — this is strong Context: you included Past (emails), Present (agree on schedule), and Future (timeline to leadership by next Friday) with a clear sense of time.
> 
> **What to improve:**
> - Nothing major. One small addition could make your Expectations even clearer: you said "this will be a detailed discussion," which covers level of detail well. You also invited questions anytime, which covers level of interaction. Both parts of Expectations are present.
> 
> **Also worth noting:**
> - "Please ask questions anytime" is friendly and open. In a larger or more formal meeting, you might say "please feel free to interrupt if you have questions" — but your wording works well for a team kickoff.
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
> I think we should list traditional coffee first on the new store menu. It stays true to our brand, and customers expect it when they walk in.
> 
> [Setting: Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on a redesigned in-store menu launching next month. Bob wants traditional coffee listed first. Hint: you could partly agree with his point about staying true to the brand, or with the bigger-picture goal of customer trust.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. **Start positive** — partially agree with their point. Show you understand their perspective.
>    - "I understand that we want to stay true to our traditional coffee brand."
> 
> 2. **State your opinion with a reason** — explain why you disagree, using facts or data.
>    - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> 3. **Keep it open** — invite discussion of alternatives.
>    - "Are there other alternatives?"
> 
> This method encourages discussion and often leads to a better solution. Once the team makes a decision, move forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 45 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I appreciate that you see the brand benefit, but I'm not sure a smaller trial solves the core issue. The menu launches next month, so we don't have time to run a trial and still make the print deadline. What would the trial look like?

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
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** – level of interaction (e.g. hold questions or interrupt freely) and level of detail (deep dive or high level).
> 
> Example:
> - "Hi everyone, today we're kicking off the new website launch. I'm Danny, lead PM, and I'll manage the schedule and be the point of contact for requirements."
> - "We've had emails going back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned. We need sign-off by next Monday."
> - "Please hold questions for the end; we'll stay high level."
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
> "Hey, so I've been thinking we should definitely wash the eggs before they go into packaging. It makes the product look cleaner and more professional on the shelf. Customers expect that."
> 
> [Setting: Google, Mountain View. You are a PM on the food-tech team. Jordan is a product designer who joined last year. The team is deciding on standards for a new smart-farming partner's egg-processing line. Goal: agree on whether washing should be part of the process.]
> 
> [You can describe a different situation anytime.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> This is covered in the course:
> 
> Use the ICE template when you open the discussion:
> 
> 1. **Introductions** – state the topic, your name, role, and how you contribute.
> 2. **Context** – past (how you got here), present (today's goal), future (next steps with a deadline).
> 3. **Expectations** – level of interaction and level of detail.
> 
> Example for your situation:
> - "Hi everyone, today we're reviewing ML models for predicting egg quality. I'm [name], PM for quality systems, and I'll coordinate between the data science and operations teams."
> - "We've tested two models over the past month. Today we need to compare accuracy and decide which one to pilot. The goal is to choose by Thursday so we can schedule the farm trial for next week."
> - "This will get technical, so please jump in with questions. We'll stay focused on prediction accuracy and implementation effort."
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
> Open meetings with the ICE template in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 
> 2. **Context** — cover past, present, and future:
>    - *Past:* how you got to this meeting (emails, earlier discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps with a clear time ("by next Monday")
> 
> 3. **Expectations** — set the level of interaction and detail:
>    - "Please hold questions for the end" or "feel free to interrupt"
>    - "This will get technical" or "we'll stay high level"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new packaging line upgrade. I'm Jamie, lead PM on this project, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before work starts. We need sign-off from the operations director by Friday. There's a lot to cover, so please hold questions until the end."
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
> I hear you on food safety, but washing eggs actually removes the natural protective coating and can let bacteria in. The USDA requires it for commercial sale here, but most countries don't wash at all. If we switch to unwashed with a stronger shelf-life message, we cut water use and processing time. What do you think?
> 
> [Setting: Google, Mountain View. You are a PM on the sustainability team. Maya is a product operations lead. The goal is to decide whether your internal food program should switch to unwashed eggs.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models effectively at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models effectively at work"/&gt;
> 
> As a PM at an egg farm, you likely bridge technical and business teams. Here's how to approach discussions about ML models:
> 
> 1. **Start with the business problem**, not the technology. Frame what the model should solve: "We need to predict weekly demand so we reduce waste" or "We want to flag quality issues earlier in the supply chain."
> 
> 2. **Ask about data and accuracy in plain terms.** You don't need to code, but you do need to know: What data trains the model? How often is it right? What happens when it's wrong?
> 
> 3. **Clarify tradeoffs using the project triangle.** Better accuracy (quality) usually needs more data or more time. Faster deployment may mean simpler predictions (less scope). Ask what shifts if priorities change.
> 
> 4. **Set clear next steps with owners and deadlines.** "The data team will share a sample output by Thursday. I'll review it with operations and we'll decide whether to pilot by next Monday."
> 
> Example:
> &gt; "Before we build this, help me understand: what data do we have on flock health, and how accurate does the model need to be for us to trust it for inventory decisions? If we need 95% accuracy, what does that mean for timeline and data collection?"
> 
> [I saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Jennifer" gender="female"/&gt;
> 
> Thanks for making time today. I'm Jennifer, the operations director at our end. I need to be direct with you — we've had three shipments arrive late this quarter, and it's starting to affect our production schedule. My team is asking me whether we need to look at other logistics partners. What's going on?
> 
> [You are an account manager at a logistics company. Your client is Jennifer, operations director at a consumer goods company. The meeting is a video call. Goal: address her concerns about late deliveries, explain the situation, and keep the partnership.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, I'd like to hear where we stand on the mobile app launch. What's the latest on development and testing?
> 
> [You are the PM leading the weekly status meeting at a tech company. Your character is Linda, a senior engineer on your team. Goal: give a clear status update and keep the meeting on track.]
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Linda: I see. Two weeks is significant. What's the latest we could push the beta without affecting the full launch? And has the payments team given us a new delivery date?
> 
> [The learner is giving a status update. This is a custom scene, not Scene 1 (opening a meeting), so I use the general checklist: state purpose clearly, answer directly with reason/example, handle concerns calmly, close with next step and time. The learner stated purpose, gave status with a specific blocker, and proposed options. Good. I should push back lightly once as Linda, asking for more detail to keep the conversation moving.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. Line 2's been running flat out since the new order came in, so I'm not totally surprised, but I need the details. How bad is the spike, and do you know what's causing it?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on Thursday afternoon. You need to report the defect increase, explain what you've found, and agree on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 49 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent? That's a big jump, and 100% inspection will slow us down a lot. We're already behind on the new order. How long do you think we'll need to run that way?"
> 
> [Hint: you could say "I estimate three to five days to confirm the root cause."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated your opinion and a reason, but missed partially agreeing with Marcus's concern and didn't keep the discussion open with a question.
> 
> **How it went:** You were clear and direct, which is good, but the conversation felt one-sided because you didn't acknowledge the pressure Marcus is under.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this is a specific reason with data, which shows honest critical feedback with facts.
> 
> **What to improve:**
> - You jumped straight to your proposal without partially agreeing with Marcus's concern about the schedule. The feedback sandwich starts with honest positive feedback or acknowledgment, such as "I understand that 100% inspection will slow the line down."
> - You closed with a request rather than keeping the discussion open. Try asking about alternatives or his constraints, like "What would work for your team?" or "Could we borrow inspectors from Line 1?"
> 
> **Also worth noting:** "Can your team support that this week?" sounds a bit like an order. Softening it to "Would your team be able to support that this week?" invites more collaboration.
> 
> **Try this instead:** "I understand that 100% inspection will slow the line down and you're under pressure on the new order. The defect rate went from 1% to 4% after we changed suppliers, so I'd like to hold the affected batches and inspect 100% until we confirm the cause. I estimate three to five days. Could we borrow so…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping past the November deadline. Our QA team found some integration issues between the payment module and the inventory system that are taking longer to resolve than we estimated. We're exploring a few options, but I wanted to flag this now rather than surprise you later.
> 
> [Scene: You're the project lead at your company, managing a software implementation with a vendor. Sam is the vendor's project manager. You're in a virtual weekly status meeting. The goal is to understand the delay, discuss impact, and agree on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is in the payment-inventory integration. The API responses are slower than expected under load, and we need to refactor how the two systems handle concurrent transactions. We didn't catch this in earlier testing because our test data volume was much lower.
> 
> To stay on schedule, we'd need either:
> - More time — pushing the deadline out by about three weeks, or
> - More resources — if your team has a senior backend engineer who could join us for the next two weeks, that would speed up the refactoring significantly.
> 
> Which direction feels more realistic from your side?

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining. I'm Sarah, and we're all set to get started whenever you're ready.
> 
> [You're leading the kickoff for the new mobile app launch at Tesla. Over the past week, the team exchanged several emails about requirements and timelines. Today's goal is to align on the schedule and key features before development begins. The next step is to share a timeline with leadership by next Friday.]
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

> I appreciate you flagging this early. Two weeks is a significant slip, and I need to understand the full picture before we talk recovery. How many bugs are we looking at, and what's the severity breakdown?
> 
> [You're a senior engineer at your company. Your manager, Linda, has just asked for a status update on the API integration project that was due to ship in three weeks. The conversation is happening over a video call.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today. We're kicking off the new mobile app project, and I'm looking forward to getting everyone aligned.
> 
> [You are the lead project manager for a new mobile app launch at Apple in Cupertino. The team has exchanged emails about requirements for the past two weeks. Today's goal is to confirm the schedule and main features so development can begin. The next step is to share a timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is significant, and leadership was expecting the current timeline. Walk me through what you're seeing in testing and how much of that two weeks you think you can recover.
> 
> [You are a senior engineer at Microsoft in Seattle. Linda is your manager. Your team is building a new cloud feature, and the original launch date is four weeks away. The conversation goal is to explain the delay, show you have a plan, and agree on a revised timeline or resources.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, I was hoping we could talk before the weekend. The GPS accuracy issue came up again in the leadership review — we're still seeing about two percent bad data, and now they want us to get it down to one percent before integration testing. That's about three weeks away. I know this wasn't in the original scope, but can your team take it on?"
> 
> [You are a software engineer at a tech company. David is your manager. He is asking for extra work late on Friday with a tight Monday deadline.]
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
> Hi there. Before we dive in, I wanted to check in — I know you've got a lot on your plate right now. How are things going with the three projects you're juggling?
> 
> [You're a data analyst at a tech company. Linda is your manager. The goal: ask for help prioritizing three urgent projects without appearing overwhelmed.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board meeting on the 15th, so that one can't shift. Between the dashboard migration and the pricing analysis, which one do you think would lose the most value if it slipped?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated your situation, showed you could handle the workload, and proposed a specific solution together.
> 
> **How it went:** Great job — you came across as capable and collaborative, not overwhelmed.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows ownership of your capacity and invites your manager into the decision, which keeps you looking proactive rather than passive.
> 
> **What to improve:**
> - You didn't name which two you would prioritize or why. Adding your recommendation would strengthen your position and show strategic thinking.
> - You could have acknowledged the business impact more directly, e.g., noting which project serves the most urgent stakeholder need.
> 
> **Try this instead:**
> "I can deliver two of these with full quality. My recommendation is to prioritize the Q4 forecast and the pricing analysis, since both directly support leadership decisions this quarter. Could we move the dashboard migration to early next month?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for making the time. We're looking forward to getting this set up, but to be honest, we're not entirely sure where to start. Our team has been using spreadsheets and shared drives for years, and management finally approved a proper system.
> 
> [You are a customer success manager at a software company. You are meeting Priya, the operations lead at a mid-sized logistics firm in Chicago. She is evaluating your platform for her 40-person team. Goal: understand her current workflow, pain points, and what success looks like so you can configure the product.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 59 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, everything lives in about fifteen different spreadsheets. Three people update the master file, but versions get out of sync every week. Last month we sent a shipment to the wrong warehouse because someone was working off an old file. So the main problem is having one place where everyone sees the same information, updated in real time.

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:04 UTC

**PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
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
> In your first 90 days, focus on learning rather than proving yourself. Here are the key steps:
> 
> • **Understand your place in the bigger picture.** Learn your role in the team, your team's role in the department, the department's role in the company, and the company's position in its market.
> 
> • **Start with humility.** Your past success may not apply directly here. Be flexible, listen more than you push, and avoid being overly aggressive.
> 
> • **Ask questions boldly while you are new.** Learn from coworkers and internal documents. Use this window when people expect you to ask.
> 
> • **Decide your career direction.** Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside this company.
> 
> • **Turn problems into goals.** If networking or another skill is hard for you, make improving it a specific goal and practice consistently.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for joining today. We're looking forward to getting this project moving.
> 
> [Setting: Tesla. You're the lead project manager for the launch of a new mobile app update. Over the past week, there have been several email threads between the design and engineering teams about feature priorities. Today's goal is to align on the schedule and key features before development begins. The next step will be to share a finalized timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> That sounds great, Lee. Thanks for laying that out so clearly.
> 
> **Course score: 5/5** — You covered all three ICE steps with good detail.
> 
> **How it went:** Great job! You introduced yourself, gave the full context, and set expectations in one smooth opening.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday." — This shows **Context: past, present, and future** all together. The deadline "by next Friday" gives a clear sense of time.
> 
> **What to improve:**
> - Nothing major. Your expectations line combined interaction and detail naturally, which works well.
> 
> **Also worth noting:**
> - "Please ask questions anytime" is friendly, though it slightly conflicts with "this will be a detailed discussion." In a larger meeting, you might pick one: either invite interruptions or ask people to hold questions. Here with a small team it's fine.
> 
> **Try this instead:**
> - No change needed. For variety in future meetings: "Please feel free to interrupt if something isn't clear, because we'll be getting into the details today."
> 
> Want to try again without cues, doing all three steps in one go? Or pick a new scene?
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
> I think we should list traditional coffee first on the new store menu. It stays true to our brand, and customers expect that when they walk in.
> 
> [Setting: Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate. The team is deciding how to order items on the updated in-store menu. Goal: share your view on the menu layout and reach a team decision.]
> [Hint: Bob cares about staying true to the brand. The summer sales numbers might give you something honest to agree with.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich. Start by honestly agreeing with part of the other person's view, then state your own opinion with a specific reason, and keep the discussion open.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Then, once the team decides, move forward together even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 87 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I see your point about testing first, but I'm not sure a smaller trial gives us the full picture. If we list traditional coffee first in all stores, we send a clear brand message. What kind of trial did you have in mind, and how long would it run?
> 
> [Hint: you could say "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"]

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
> Start your meeting with the ICE method in this order:
> 
> 1. **Introductions** — Say one or two sentences about the meeting topic. Then introduce yourself: your name, role, and how you will contribute to the project.
> 
> 2. **Context** — Explain why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, discussions, or work done)
>    - *Present:* today's topics and goal
>    - *Future:* next steps after the meeting, with a clear time ("by next Monday")
> 
> 3. **Expectations** — Set two things:
>    - *Level of interaction:* when people should ask questions ("please hold questions until the end" or "feel free to interrupt")
>    - *Level of detail:* how deep the discussion will go ("this will stay high level" or "we'll get into technical details")
> 
> Example opening:
> &gt; "Hi everyone, today we're kicking off the new app launch. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had a lot of emails back and forth about this. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions for the end."
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
> I see your point about food safety standards, but washing eggs removes the natural protective coating. That coating keeps bacteria out. If we wash them, we might actually increase the risk of contamination during storage and transport.
> 
> [Setting: Google, Mountain View. You are a PM on the food services team. Jordan is a supply chain manager. You are discussing whether to add an egg-washing step to the new campus kitchen supplier requirements. The goal is to reach a team decision on the supplier standard.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> This is covered in the course:
> 
> Use the feedback sandwich when you disagree with your coworker:
> 
> 1. **Start positive** — Honestly agree with part of their view. Show you understand their position.
> 
> 2. **State your opinion with a specific reason** — Explain why you disagree, using facts or data where possible.
> 
> 3. **Keep the discussion open** — End on a friendly tone and ask about alternatives.
> 
> 4. **Move forward together** — Once a decision is made, commit to it as a team.
> 
> Example for your situation:
> &gt; "I understand that an ML model could help us predict egg quality faster than manual checks. But our current sorting line runs on simple weight and color sensors, and they work with 98% accuracy with almost no downtime. Adding ML would mean new hardware, training data collection, and maintenance support we don't have yet. Could we start with a small pilot on one line first?"
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]

**Attempt 2**

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings in three steps, in this order:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you will contribute
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got to today's meeting (emails, earlier discussions)
> - **Present:** today's topics and goal
> - **Future:** next steps with a clear sense of time ("by next Monday")
> 
> **3. Expectations**
> - Level of interaction: "please hold questions for the end" or "feel free to interrupt"
> - Level of detail: "this will get technical" or "we'll stay high level"
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new feed system rollout. I'm Alex, lead PM on this project, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks so we're aligned before development starts. We need sign-off from the US team by next Monday. There's a lot to cover, so please hold questions until the end."
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
> I hear you on food safety, but washing eggs removes the natural protective coating. That means they spoil faster and we risk more returns from our retail partners. Wouldn't it be safer to keep them unwashed and focus on clean collection instead?
> 
> [Setting: Google — Mountain View. You are a PM on the Google Food team. Jordan is a supply-chain colleague. The goal: decide whether Google's egg-sourcing guidelines should require washing.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> As a PM at an egg farm, you probably need to explain machine learning to colleagues who know eggs but not tech. Keep it simple and tied to their work.
> 
> 1. **Start with the problem, not the model.** Say what you want to predict or improve — for example, "We want to predict which hens are laying fewer eggs so we can catch health issues early."
> 
> 2. **Use plain words, not jargon.** Say "pattern-finding system" instead of "algorithm." Say "the system learns from past data" instead of "training the model."
> 
> 3. **Give a concrete example from your farm.** "Last month, temperature spikes in Barn C dropped production by 10%. An ML model could flag that risk in advance."
> 
> 4. **Be honest about limits.** "It won't be perfect. It needs clean data, and someone still needs to check the hens."
> 
> 5. **Ask what they need to trust it.** Invite questions so it feels like a tool, not a replacement for their experience.
> 
> Example:
> &gt; "We're testing a system that learns from past feed, temperature, and laying rates to warn us early about drops in production. It won't replace your morning checks, but it could give us a head start. What would you need to see to find it useful?"
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
> Thanks for making time today. I'm Rachel, the operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks — three to four days past the agreed window — and it's starting to affect our store replenishment. I need to understand what's happening and what you're going to do about it.
> 
> [You are an account manager at a logistics company. Rachel is the operations director at Westfield Retail, a major client. The goal is to address her concerns about late deliveries and agree on a solution.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, I'd like to hear how the mobile app launch is tracking. We're two weeks from the store submission deadline, and leadership is asking for a clear picture of what's done and what's still open.
> 
> [Setting: You're the PM leading the weekly status meeting for your mobile app launch. I'm Linda, a senior stakeholder from product leadership. The team is waiting for your update.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see. Two weeks late on the payment API with store submission coming up—that's a real problem. Moving the beta or cutting payments for launch are both big calls. What does the team think? And have you talked to the payments vendor about whether they can recover any of that time?
> 
> [Setting: You're the PM leading the weekly status meeting for your mobile app launch. I'm Linda, a senior stakeholder from product leadership. The team is waiting for your update.]
> 
> [Hint: you could say "Before I open it up for discussion, let me share where we stand on the original plan and what I'm recommending."]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Hey, thanks for coming by. I saw the numbers from Line 2 this morning — defect rate jumped from two percent to almost six percent since Monday. That's a big spike. What's your take on what's going on?"
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager at your facility. The conversation is in his office on Friday afternoon. Goal: discuss the defective cell spike on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 67 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — that's still a serious jump, and it lines up with the supplier change. Holding the batches makes sense to me. But full inspection on every cell? That would pull three or four people off the regular line, and we're already behind on the Q3 output target. What kind of timeline are you thinking for the 100% check?"
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific action, and asked for support — strong general checklist work.
> 
> **How it went:** Great job getting straight to the facts and making a clear request. You handled the concern professionally and kept the discussion open.
> 
> **What worked:**
> - "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you stated the purpose clearly early on and proposed a specific next step with a clear condition ("until we confirm the cause").
> 
> **What to improve:**
> - You jumped to your solution without first acknowledging Marcus's concern about output targets. A brief pause to show you heard his pressure would build more trust before asking for resources.
> - You didn't offer a timeline for the 100% inspection or suggest a tradeoff to ease the resource conflict.
> 
> **Also worth noting:** "Can your team support that this week?" is polite, but slightly soft. After acknowledging his concern, a more direct framing like "Here's what I'd need from your team" often lands better with production managers.
> 
> **Try this instead:** "I understand the Q3 target is tight. If we hold the affected batches and inspect 100% of cells for the next three days, we can catch the issue before it spreads. Could your team cover two people on the line for that period, or should we look at borrowing someone from Line 3?"
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
> I know this isn't what you wanted to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now we're seeing some issues with the data migration that we didn't catch earlier.
> 
> [You're in a weekly status meeting with your vendor, Sam from CloudBridge Solutions. He's just dropped a delay warning about your shared product launch. Your goal: understand the situation, protect your timeline, and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The data migration is the main blocker. We're seeing format mismatches between your legacy system and the new platform that our standard scripts can't handle. We'd need two of your backend engineers for about five days to help us map the fields correctly, or we push the deadline by three weeks.
> 
> [Hint: you could ask whether there's a way to split the work or protect part of the timeline]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're looking forward to getting aligned today.
> 
> [You're the lead PM at Apple, kicking off a project to redesign the company's mobile app. Over the past two weeks, your team and the design agency have exchanged several emails about requirements and timelines. Today's goal is to review the project scope, confirm the schedule, and identify any risks before development begins. The next step is to share a finalized timeline with leadership by next Friday.]
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
> Two weeks is a significant slip. Before we talk about recovery, I need to understand the situation better. How many bugs are we talking about, and which parts of the project are affected?

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Hi everyone, thanks for joining. I'm Sarah, the UX lead on this project. We're all set to hear your plan for the app launch.
> 
> [At Apple in Cupertino, you are the lead PM for a new fitness app launch. The team has exchanged several emails about features and timelines over the past two weeks. Today's goal is to kick off the project and align on the schedule and key deliverables. The next step is to confirm the roadmap with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, and leadership is expecting the current date. Walk me through the bugs and your recovery plan.
> 
> [At Apple in Cupertino, you are a senior PM reporting to David, the engineering director. Your team is building a new fitness app, and the original launch date was set based on a QA estimate that assumed fewer issues. David has a quarterly review next week where he needs to present the schedule.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to run something by you. The Q3 budget came in flat, but we're being asked to add the Europe market analysis to our scope. I need to know how you want to handle the tradeoffs."
> 
> [You are a team lead at a mid-sized tech company. David is your manager. The conversation is about reallocating resources for an expanded project scope.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Rachel: "Thanks for setting this up. I wanted to check in on where things stand — I know you've got a lot on your plate right now."
> 
> [You're a data analyst at a tech company. Rachel is your manager. This is your regular weekly 1:1. She knows you're busy but hasn't heard specifics yet. Goal: ask for help prioritizing three urgent projects without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> Rachel: "I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would cause more problems if it moved?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, named specific projects, proposed a solution, and invited collaboration — strong approach for a difficult conversation.
> 
> **How it went:** Great job being direct without sounding overwhelmed. You came with specifics and a clear ask, which makes it easy for your manager to help.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows ownership (you're not just dumping the problem) and invites partnership. It fits the feedback sandwich principle of keeping the tone open and solution-oriented.
> 
> **What to improve:**
> - You jumped straight to the projects without a brief positive opening. A short line like "I want to make sure I'm delivering quality on the most important work" would frame the ask more constructively before listing the crunch.
> - You didn't explicitly state what you've already done or checked, which helps show you're not just passing the problem upward. For example: "I've mapped out the timelines, and even with extra hours, all three by month-end isn't realistic."
> 
> **Also worth noting:** "I can finish two well" is clear, but "well" is slightly vague. "I can deliver two with full quality" is a touch stronger.
> 
> **Try this instead:**
> "Thanks for making time. I want to make sure I'm focused on the right priorities. I've mapped out the timelines for the Q4 forecast, the dashboard migration, and the pricing analysis, and even with extra hours, delivering all t…

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making the time. We're about two weeks away from our contract start date, and honestly, we're not sure what the first steps should look like. Our current onboarding process is pretty manual — spreadsheets, email threads, a lot of back-and-forth with customers. We need something that scales better as we grow.
> 
> [You are a customer success manager at a software company. Rachel is the operations director at a mid-sized fintech startup in Chicago. She signed a contract for your onboarding platform last month. Today's goal: understand her team's pain points and priorities so you can configure the product and set a rollout timeline.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 90 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, every new customer goes through the same ten-step setup, but it's all tracked in shared spreadsheets. My team spends about six hours per customer just on data entry and follow-up emails. Last quarter we onboarded forty customers, and two of them had a bad experience because someone missed a step. We need to cut that manual work and make sure nothing falls through the cracks.
> 
> [Hint: you could ask a follow-up about who on her team is involved, or what "a bad experience" cost them.]

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:57 UTC

**PASS 9 · FAIL 1 · FLAKY 2 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | FLAKY | passed on rerun; first try: T1: list items ≥ 2 |
| C3 Scene card: Start a meeting, then a full ICE opening | FAIL | T2: feedback score ≥ 4 (no score) |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | PASS | – |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | FLAKY | passed on rerun; first try: T3: feedback score ≥ 1 |
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
> Focus on learning, asking questions, and understanding your environment before trying to prove yourself. Start with humility: your past success may not apply directly here, so listen more than you push. Learn proactively by reading internal documents, observing how decisions are made, and asking bold questions while you're still new.
> 
> Set specific goals for this period. Use the SMART framework: make them Specific, Measurable, Achievable, Relevant, and Time-bound. For example, "Schedule 15-minute intro meetings with 10 people outside my direct team by the end of month two" is better than "get to know people."
> 
> Also understand your place in the bigger picture: your role on the team, the team's role in the department, and how the department serves the company. Let your long-term career direction guide what you choose to learn, even if you don't plan to stay at this company forever.
> 
> If a skill like networking feels difficult, turn that problem into a concrete practice goal rather than avoiding it.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

**Attempt 2**

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 6 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/, https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment. Here's a practical approach:
> 
> - **Map your place**: understand your role in the team, your team's role in the department, the department's role in the company, and the company's position in its market.
> - **Set a direction**: decide where you want your career to go. Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> - **Start with humility**: your previous success does not automatically transfer. Be flexible, listen, and avoid being overly aggressive.
> - **Learn proactively**: ask questions boldly while you are new. Learn from coworkers and internal documents. Focus first on learning and making a specific plan rather than worrying about performance ratings.
> - **Turn problems into goals**: if a skill like networking is difficult, make improving it a specific goal and practice consistently.
> - **Set SMART goals**: make them Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes, quantities, and deadlines.
> 
> Example: "Come up with five alternative product ideas for the June product launch by mid-February."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

### C3 Scene card: Start a meeting, then a full ICE opening · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, the UX lead on this project. I'm looking forward to getting started.
> 
> [We're at a kickoff for a new mobile app at Apple in Cupertino. You're the project manager leading this meeting. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to walk through the requirements, confirm the schedule, and identify risks so everyone is aligned. The target is to get written sign-off from the US team by next Monday to start development.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That helps — I can see how the schedule fits with what we've been discussing by email, and it's good to know we can jump in with questions.
> 
> [Now give the context: the past, the present, and the future.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi! I'm Sarah, UX designer on this project. Looking forward to working with you."
> 
> [We're at Tesla in Austin. You're the lead PM for a new mobile app update. The team has exchanged emails for two weeks about requirements. Today's goal is to align on scope and timeline before design starts. We need engineering sign-off by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Sarah nods and opens her notebook. "Great to have you leading this, Lee. The email threads were getting pretty long, so it'll be good to lock things down in person."
> 
> [Expectations covered clearly — open for questions and detailed. Context has past, present, and future with a deadline. Introductions covered your name, role, and contribution.]
> 
> Want to try again without cues, doing all three steps in one go?

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> Hey, I wanted to run something by you. I think we should list our traditional coffee drinks first on the new menu redesign. It keeps us true to our brand roots, and customers who come in for a real coffee experience will find what they want right away. What do you think?
> 
> [Starbucks headquarters, Seattle. You and Bob are on the menu team. He wants traditional coffee listed first. You know that iced frappuccinos are the summer best sellers by a wide margin. The team needs a decision today. Hint: you could honestly agree that brand tradition matters.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> 1. **Partially agree honestly** — show you understand their view
> 2. **State your opinion with a specific reason** — facts or data work best
> 3. **Keep it open** — ask about alternatives or next steps
> 
> Example:
> 
> &gt; "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Or offering a compromise:
> 
> &gt; "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> The key: don't jump straight to "no." Start with where you *do* agree, then explain your concern with something concrete.
> 
> Want to try this in a role-play? Tap the mode menu at the top right and choose **Role-play**.

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the trial idea, but I'm not sure I follow — are you saying the menu order itself would take too much time to implement, or that testing a new layout is the concern?
> 
> [You partially agreed with the benefit Bob wants. To complete the feedback sandwich, state your own view on the menu order with a specific reason, then keep the discussion open with a question about alternatives.]

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

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
> - Level of interaction: "Please hold questions for the end" or "Feel free to interrupt"
> - Level of detail: high-level overview or deep technical dive
> 
> Example as a PM kicking off a project:
> &gt; "Hi everyone, today we're kicking off the new layer management system. I'm Alex, lead PM for this project. I'll manage the schedule and be your main point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We need sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Bob" gender="male"/&gt;
> 
> "I think we should definitely wash the eggs before packaging. It makes the product look cleaner and more professional to customers."
> 
> [You're a PM at Google. Bob is a supply chain analyst on your team. You're discussing a new partnership with a sustainable egg farm. He wants to add an egg-washing step to the process. Your goal: decide whether to wash the eggs or not.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Technology (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Agriculture","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Agriculture" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> Use the **ICE** method in this order:
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
> - Level of interaction: "Please hold questions for the end" or "Feel free to interrupt"
> - Level of detail: high-level overview or deep technical dive
> 
> Example as a PM at an egg farm kicking off an ML model review:
> &gt; "Hi everyone, today we're reviewing the ML model for predicting egg quality. I'm Jordan, PM for quality systems. I'll coordinate between the data science team and operations. We've been testing this model for three weeks with mixed results. Today we'll review accuracy data, discuss the false positive rate, and decide whether to pilot it in Barn 4. We need a go or no-go decision by Thursday so we can brief the operations lead. This is a technical review, so please jump in with questions, but keep examples at a high level."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for making time today. I'm Rachel, VP of Operations at Westfield Retail. We've been a client for two years now, but the last three months have been rough — three late deliveries in a row, and our store managers are asking why we can't count on your trucks anymore. I need to understand what's going wrong and what you're going to do about it."
> 
> [You're an account manager at your logistics company. Rachel is frustrated but wants to stay with you if you can fix this. She's waiting for your response.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Elena" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I know we're all juggling a lot right now, so let's make this quick. Where do we stand on the beta release?"
> 
> [You're a PM at a tech company — likely a mobile or consumer app firm. Elena is your engineering lead. The team is mid-sprint, and the beta launch is two weeks away. She's looking for blockers and whether the timeline still holds.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Got it — 70% is solid, but the payment API delay is a real problem. Launching without payments means we'd have a broken checkout flow, which feels risky for a beta. What are you leaning toward?"
> 
> [You stated the purpose early and flagged a clear tradeoff with options. Elena wants to know which direction you recommend and what the impact is on users or the timeline.]

### S3 Production defects: business level, feedback fits the scene · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Rachel: "Thanks for coming by. I saw the daily report — Line 2's defect rate jumped from 2% to almost 7% on Tuesday and it's stayed there. That's three days now. What's your take on what's driving it?"
> 
> [You're a quality engineer at your company. Rachel is the production manager. The conversation is in her office. Goal: discuss the cause and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 72 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Rachel: "Four percent — okay, that's lower than what I saw in the report, but still well above our target. Let me ask: which part changed, and when exactly did the new supplier's batch hit the line? I need to know if we're looking at one batch or a steady flow before I commit my team to 100% inspection."
> 
> [She's asking for specifics to assess scope and workload. What details can you share?]

**T3 [RP]** "feedback"
- ✗ feedback score ≥ 1: no score
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> Before I score this, what were you trying to get better at in this scene — for example, stating the problem clearly, requesting action, handling pushback, or something else?
> 
> [This helps me judge your performance against the right criteria.]

**Attempt 2**

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Miguel" gender="male"/&gt;
> 
> Miguel: Hey, thanks for coming by. I saw your email about the defect data. Line 2's been running fine from my side — throughput's actually up 12% this week. What exactly are you seeing?
> 
> [You're a quality engineer at your company. Miguel is the production manager at the same EV battery supplier. You're in his office at the plant. Goal: discuss the jump in defective cells on Line 2 and agree on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 56 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Miguel: A four percent defect rate? That's a big jump. My team is already stretched thin with the new quarterly targets, but I understand we can't ship bad cells. How long do you think the 100% inspection would take, and how many batches are we talking about?
> 
> [He's asking for specifics before committing — scope and timeline.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific action, and asked for support — strong professional communication.
> 
> **How it went:** You came in prepared with facts and a concrete plan, which made the conversation productive rather than vague.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you gave the cause, the numbers, and the timing. "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you proposed a clear containment action with an exit condition.
> 
> **What to improve:** You could have added a timeline and acknowledged his capacity concern. Miguel asked how long and how many batches; answering directly would build more trust and speed up agreement.
> 
> **Also worth noting:** "Can your team support that this week?" is good, but pairing it with "I know this is a lot to ask" or "What would make this workable?" shows you're negotiating, not just requesting.
> 
> **Try this instead:** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause — I estimate three days for two batches. I know your team is stretched. What would make this workable this week?"
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
> "Yeah, so... I need to flag this. We're looking at a potential delay on our side. Might slip past next month's target."
> 
> [You're at a weekly project check-in at your company. Sam is the account manager from a key vendor. The project is a new customer portal, and his team handles the payment integration. He just dropped this delay warning mid-meeting. Your move.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "It's the third-party security audit. Turned up more issues than we expected. Fixing them is adding maybe two, three weeks."
> 
> He shifts in his seat.
> 
> "We're pulling overtime already, so honestly? Not sure more hours helps. What would help is if your team could take the user-acceptance testing in parallel instead of waiting for our handoff. That'd buy back some time on the overall schedule."
> 
> [He answered directly and offered a specific ask. Your turn.]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, UX designer on this project. Looking forward to working with you.
> 
> [You're the lead PM for a new mobile app at Apple in Cupertino. The team has exchanged emails for two weeks. Today's goal: align on requirements, schedule, and risks before development starts. You need sign-off from the US team by next Monday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, got a minute? I wanted to check in on the mobile app timeline. The leadership team is asking for a status update for the board meeting next week.
> 
> [You're a PM at Apple in Cupertino. David is your manager. He doesn't know about the delay yet. He needs good news for the board, but he also needs accurate information. The conversation is starting now.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks? That's going to be tight for the board update. Walk me through the bugs—are we talking critical issues or things we could fix post-launch? And what's your recovery plan?
> 
> [You can describe a different situation anytime.]

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
> "Hey, quick ask — the GPS algorithm is returning wrong data about 2% of the time. That was our original target, but the client just called and now they want it under 1%. Integration testing starts in three weeks. Can you get that done by Monday?"
> 
> [You're a software engineer at a mapping company in San Francisco. David is your manager. You need to push back on this late scope change and negotiate what is actually possible.]
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
> "Thanks for setting this up. I wanted to check in — you've got the customer churn model, the dashboard overhaul, and the Q3 forecast all moving at the same time. How are you feeling about the workload?"
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Linda, your manager, is direct but fair. She wants you to succeed and knows the deadlines are tight, but she also needs to hear your plan, not just the problem. Goal: get her help prioritizing without her taking over.]
> 
> What do you say?

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That makes sense — doing three at full quality by month-end isn't realistic. Walk me through the business impact of each one if it slips. Which deadline is fixed by another team, and which one is ours to move?"
> 
> [She's listening. She wants to see your analysis before she weighs in, and she's testing whether you've already thought through the dependencies.]
> 
> What do you say?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a practical path forward, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Linda engaged immediately because you came with structure, not just stress.
> 
> **What worked:** "I can finish two well. Could we decide together which one can move to next month?" — this shows ownership of the tradeoff and asks for partnership, not rescue.
> 
> **What to improve:** You could strengthen the opening by briefly showing you've already done some prioritization thinking yourself, which builds more confidence. For example, naming one project you believe should move and why.
> 
> **Also worth noting:** "All three are due this month" states facts without blame; good tone. "Decide together" is a strong phrase for peer-like problem-solving with a manager.
> 
> **Try this instead:** "I'm confident I can deliver two of these at high quality by month-end. My view is the pricing analysis has the most flexible deadline since Sales doesn't need it until mid-Q1. Does that match your understanding, or should we look at the dashboard migration instead?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi there. Thanks for making the time — I know we're both busy. I'm Priya, VP of Operations at Westfield Logistics. We've been growing fast, about forty percent year over year, and our current tools aren't keeping up. Your team said you'd walk me through how this works, but honestly I need to figure out if it's even the right fit before we get into features.
> 
> [Westfield Logistics, a mid-sized shipping company in Chicago. You're the customer success manager from a SaaS platform. Goal: understand Priya's business needs and priorities before implementation.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 118 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're running our entire dispatch and tracking through a mix of spreadsheets and an old TMS we bought back in 2017. It's not built for the volume we're doing now. Last quarter we had three major delays because a route change didn't reach the driver in time, and one of those cost us a six-figure contract with a retailer. My operations team is spending maybe fifteen hours a week just reconciling data between systems. I need to know if your platform can handle real-time updates across a fleet of about two hundred vehicles, and whether it actually reduces that manual work or just moves it somewhere else.
> 
> What else do you need to understand?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:09 UTC

**PASS 11 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
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
- ✓ list items ≥ 2: 3 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to **learn, ask questions, and understand your environment** before trying to prove yourself. Focus on three things:
> 
> 1. **Map the organization** — understand your role in the team, your team's role in the department, the department's role in the company, and the company's place in its market.
> 
> 2. **Decide your direction** — even if your long-term goal is outside the company, let that guide what you learn and which opportunities you pursue.
> 
> 3. **Stay humble and proactive** — your past success doesn't guarantee success here. Listen more than you push, ask bold questions while you're new, and study internal documents. Make a specific learning plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> ---
> 
> What's your new role and company? I can suggest what to learn first in your situation.

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, UX designer on this project. Looking forward to hearing the plan.
> 
> [We're at Tesla's Austin office. You're the lead PM kicking off a new mobile app for owners to schedule service appointments. The team exchanged emails for two weeks but hasn't met as a group. Today's goal is to align on requirements and timeline so engineering can start next month. Sarah is a supportive teammate.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Great to meet you, Lee. Two weeks of emails definitely built up some questions on my end, so I'm glad we're finally getting the team together.
> 
> [Now give the context: the past, the present, and the future.]
> 
> Wait — actually, you already covered that. Let me jump in with what I'm hoping to get out of today: I need to know how the service center availability data will feed into the app, since that affects my wireframes.
> 
> ---
> 
> **Course score: 5/5**: You hit all three parts of a strong meeting opening with clear, natural language.
> 
> **How it went:** This was a clean, professional start that gave the team confidence in your leadership.
> 
> **What worked:** Your context was especially strong — "Over the past two weeks we've had a lot of emails about the main features" covers the past, "Today's goal is to agree on the schedule" sets the present, and "send a timeline to leadership by next Friday" gives a concrete future step with a deadline. Your expectation — "Please ask questions anytime, and this will be a detailed discussion" — clearly invites interaction and signals the level of detail.
> 
> **What to improve:** Nothing major. If you wanted to add one thing, you could briefly mention how *you* specifically will contribute beyond "manage the schedule" — for example, "I'll be your main point of contact for requirements and will track blockers."
> 
> **Also worth noting:** "Please ask questions anytime" is friendly, but in a larger or more senior group you might need tighter control — "Please …

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> Hey, I've been thinking about how we structure the menu for the new store launch. I really think we should lead with our traditional coffee — it's who we are as a brand, and it sends the right message to longtime customers. What do you think?
> 
> [At Starbucks headquarters in Seattle. You and Bob are on the store operations team preparing for a flagship opening. Bob wants the printed menu to list traditional brewed coffee first. You have data showing iced frappuccinos drive 60% of summer revenue. The goal: reach a team decision on menu layout.]
> 
> [Hint: what can you honestly agree with about Bob's idea?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements at work:
> 
> 1. **Partially agree honestly** — show you understand their view with phrases like "I understand that…" or "It makes sense that…"
> 2. **State your opinion with a specific reason** — use facts or data where you can
> 3. **Keep it open** — ask a question about alternatives so the discussion continues
> 
> Example you could use with Bob:
> &gt; "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Then, once the team decides, move forward together — even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 76 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I get that — a smaller trial would definitely reduce risk. But here's my concern: we're launching in three weeks, and a trial would push the final print deadline into August. Our summer peak starts in June, so we'd miss the first month.
> 
> What if we go with the traditional coffee layout for the flagship, but run a digital-menu test at two other locations starting July? That way we keep the timeline and still get data.

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
> Use the ICE template to open meetings you lead:
> 
> 1. **Introductions** — state the meeting topic, then your name, role, and how you'll contribute.
> 2. **Context** — cover past (how you got here), present (today's topics and goal), and future (next steps with a deadline).
> 3. **Expectations** — set the level of interaction (e.g., "hold questions for the end") and detail (high level or technical).
> 
> Example:
> 
> "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements.
> 
> We've had emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned before we start. We hope to get written sign-off from the US team by next Monday.
> 
> We have a lot to cover and limited time, so please hold questions for the end."
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
> "Hey, I've been looking at the supplier data, and I'm actually leaning toward switching to washed eggs for our cafeteria program. The shells look cleaner, and I think it reduces the risk of contamination in the kitchen. What's your take?"
> 
> [You and Maya are both PMs at Google. The company runs a large internal food program that sources eggs from your farm partners. Maya wants to move to washed eggs; you disagree. The goal is to reach a team decision.]
> 
> [Hint: think about what you can honestly agree with in her view, then share your concern with a specific reason.]

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
> Use the feedback sandwich when you disagree with a coworker's idea:
> 
> 1. **Partially agree, honestly** — find something you genuinely accept ("I understand…", "it makes sense that…").
> 2. **State your opinion with a specific reason** — use facts or data where possible.
> 3. **Keep the discussion open** — friendly tone, ask about alternatives.
> 4. **Move forward together** — once a decision is reached, commit to it.
> 
> Example with your ML model discussion:
> 
> "I understand that the new ML model could help us predict egg quality faster, and that would save the team a lot of manual work. However, our current data is only labeled for about 60% of the flock, so the model might misclassify eggs from the newer barns. Could we run a pilot on just one barn first, and expand if the accuracy holds?"
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
> Use the **ICE template** to open meetings you lead:
> 
> 1. **Introductions** – State the meeting topic, then your name, role, and how you'll contribute.
> 2. **Context** – Cover past (how you got here), present (today's topics and goal), and future (next steps with a deadline).
> 3. **Expectations** – Set the level of interaction (questions now or later?) and detail (high level or technical).
> 
> **Example:**
> &gt; "Hi everyone, today we're kicking off the new supplier review. I'm Alex, PM on the procurement team, and I'll manage the timeline and requirements. We've had emails going back and forth for two weeks. Today we'll walk through the three shortlisted suppliers, confirm evaluation criteria, and align on next steps. We need a signed decision by Friday so we can issue the purchase order. There's a lot to cover, so please hold questions until the end."
> 
> As a PM in egg farming, you might say: "I'll be the main point of contact for feed quality standards and delivery schedules."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"technology","goal":"discuss whether or not we should wash eggs with a coworker","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="technology" learner_industry_source="inferred" learner_goal="discuss whether or not we should wash eggs with a coworker"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "Hey, I've been thinking about the egg-washing proposal you sent over. On one hand, it could help with shelf appeal and customer confidence. But I'm worried about the cost of the wash stations and whether it actually extends shelf life or just adds complexity. What's your take?"
> 
> [You're a PM at Google working on a food supply chain tool. Maya is a product analyst on your team. The team is deciding whether to recommend egg washing as a standard feature in your supplier guidelines. Goal: reach a decision together.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: technology (guessed from the company). Learning goal: discuss whether or not we should wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"agriculture","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="agriculture" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> 1. **Partially agree, honestly** – Find something you genuinely accept in their view.
> 2. **State your own opinion with a specific reason** – Use facts or data where possible.
> 3. **Keep the discussion open** – Friendly tone, ask about alternatives.
> 4. **Move forward together** – Once a decision is made, commit to it.
> 
> **Example for your situation:**
> &gt; "I agree the ML model could help us predict laying patterns more precisely. But our current data is only cleaned monthly, so the predictions may lag behind real flock changes. Could we test it on one barn first before we roll it out farm-wide?"
> 
> **If you're leading the discussion, not disagreeing:**
> - State the purpose early: "Today we need to decide if this model is ready for pilot."
> - Cover tradeoffs: data quality, maintenance cost, and who interprets alerts.
> - Close with a next step and deadline: "Let's review the test results by Thursday and decide then."
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
> Hi — thanks for making time today. I need to be direct with you: three of our last five shipments arrived late, and my operations team is asking why we're still working with your company. I'm looking at alternatives right now.
> 
> [You're an account manager at a logistics company. Rachel is the supply chain director at a mid-sized retailer in Chicago. This is a retention call — she wants a fix or she'll switch providers.]
> 
> What can you tell me about what's been going wrong?

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I've got about twenty minutes before my next call. Where are we on the launch timeline?"
> 
> [You're a PM at a tech company, leading a weekly sync. Rachel is your engineering lead. The app is scheduled to launch in six weeks. She's concerned about two features still in testing and wants to know if you're still on track for the original date.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Thanks for flagging that. Two weeks late on the API is significant. Before we decide on beta, can you walk me through what '70% complete' actually covers? Are the two features still in testing part of that 70%, or are they outside that number?"
> 
> [You're doing well — you stated the purpose, gave specific progress with a number, named a blocker, and proposed options. Rachel needs more detail to help you decide.]
> 
> [For more help, tap the mode menu and choose Coach. When you come back to Role-play, we'll continue this scene.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Elena" gender="female"/&gt;
> 
> "Thanks for coming by. I was just looking at this week's numbers and Line 2 is showing a spike in defective cells — up to 4.2% from our usual 1.8%. The timing's bad because we have the Hyundai shipment leaving Thursday. What's your take on what's driving this?"
> 
> [You're a quality engineer at CATL. Elena is the production manager in your Shenzhen plant. She wants to understand the root cause and protect the Thursday shipment.]
> 
> ---
> 
> [What were you hoping to practice in this conversation — presenting data, proposing containment actions, or pushing back if she wants to ship anyway?]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 56 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "That supplier change — was it the separator material we switched to last month, or something else? And when you say affected batches, are we talking everything from Tuesday onward, or do you have a narrower window?"
> 
> [She's listening, but she needs specifics before she'll commit her team to 100% inspection. She's also thinking about Thursday's deadline.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific containment plan, and asked for her team's support.
> 
> **How it went:** Elena engaged with your reasoning rather than pushing back hard — your direct link between the supplier change and the defect jump made your case credible.
> 
> **What worked:** "hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named the action, the scope, and the exit condition in one sentence. This is strong problem-solving language.
> 
> **What to improve:** You didn't explicitly say what you need from *her* team versus what your quality team will handle. Elena asked "Can your team support that?" but you framed it as a request without clarifying roles — she may still be unsure if you're asking for inspectors, line space, or schedule relief.
> 
> **Also worth noting:** Your opening was slightly abrupt; a brief context line like "I need to flag an issue on Line 2" before the data would help a production manager shift gears.
> 
> **Try this instead:** "I'd like to hold batches from Tuesday onward and inspect 100% of cells until we confirm the root cause. That would need two extra inspectors from your team on Line 2 for three days — can your shift cover that this week?"
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
> Look, I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. The integration with your CRM turned out to be more complex than their API documentation suggested, and we're still working through the edge cases.
> 
> [You're a project lead at your company, running a weekly status meeting with Sam's team as your vendor. The project is already at risk, and you need to understand the situation and decide next steps.]
> 
> What do you need from us to get a clearer picture of where things stand?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the CRM integration. Their API handles standard fields fine, but custom objects and historical data migration are throwing errors we didn't catch in the initial scope. We're talking about roughly 200 edge cases that need individual handling.
> 
> To stay on schedule, we'd need two things from your side. First, access to your CRM admin who knows those custom objects inside out — not just the standard documentation, but the actual setup. Second, we'd need a decision by Wednesday on whether historical data older than two years is a must-have or a nice-to-have. If we can archive that, we cut the edge cases by about sixty percent.
> 
> Can you get us that contact and that decision this week?

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, are we starting soon? I think a few people are still joining the call, but I'm ready when you are."
> 
> [You are the lead PM kicking off Project Hippo, a new mobile app for customer loyalty rewards. Your company is Starbucks, based in Seattle. Sarah is a senior engineer on your team. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on scope and schedule so development can begin. You need sign-off from the UK marketing team by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, do you have a minute? I wanted to check in on the Phoenix rollout before the leadership review next month."
> 
> [You are a project manager at Tesla in Austin. David is your direct manager. The Phoenix rollout — a new over-the-air update for energy management — was originally scheduled to finish internal testing by the end of this month. You have just learned that integration issues with the supplier's API will delay final delivery by about two weeks. David does not know yet. The leadership review is fixed and cannot move.]
> 
> [What do you say?]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks — that's going to be tight for the leadership review. Walk me through what you found and what your recovery plan looks like."
> 
> [You can describe a different situation anytime.]

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
> "Hey, quick question — the GPS algorithm is returning wrong data about 2% of the time. That was our original target, but the client just called and said they need it down to 1%. Integration testing starts in three weeks. Can you get that done by Monday?"
> 
> [You're a software engineer at Tesla in Palo Alto. David is your manager. You need to push back on this late scope change and negotiate what actually works.]
> 
> Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Elena" gender="female"/&gt;
> 
> Elena: "Hi, thanks for making time. I wanted to check in on how things are going with the customer churn model, the dashboard refresh, and the ad-hoc request from Sales. That's a lot at once. Where are you on each of those?"
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Elena is your manager, three years in the role, direct but fair. She wants the work done but also wants to keep you from burning out. Goal: practice asking for help prioritizing three urgent projects without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> Elena: "I appreciate you flagging this early. The Q4 forecast has a board deadline on the 15th, so that's fixed. Between the dashboard migration and the pricing analysis, which one would be harder to pause, and why?"
> 
> [You're doing well: you stated the problem clearly, showed you can handle the workload with limits, and asked for a joint decision. Elena is testing whether you've thought through the tradeoffs yourself.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, showed capacity with limits, and invited collaboration on the solution.
> 
> **How it went:** Elena was receptive because you came with specifics rather than just stress.
> 
> **What worked:** "I can finish two well" — this shows confidence and sets a realistic boundary. "Could we decide together" — you treated it as a shared problem, not a personal failure.
> 
> **What to improve:** You could have added a brief reason for your view on which project to delay, to show you've analyzed the tradeoffs. Elena had to prompt you with "which one would be harder to pause."
> 
> **Also worth noting:** "All three are due this month" is factual, but adding "with my current bandwidth" would subtly reinforce that the limit is resourcing, not ability.
> 
> **Try this instead:** "The pricing analysis depends on data I won't get until week three, so delaying it would have less impact than pausing the dashboard migration, which blocks the sales team now. Could we move pricing to early next month?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Great to finally meet you. I'm Priya, VP of Operations at Northfield Logistics. We signed up for your platform three weeks ago, but honestly, we're still figuring out how it fits into our daily workflow.
> 
> [Setup: You're a CSM at a software company. Priya runs operations at Northfield Logistics, a mid-size freight company in Chicago. She agreed to this call to explain what her team needs before implementation starts next month. She has some concerns about adoption.]
> 
> What should we cover first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 85 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, our dispatch team is juggling three different tools—spreadsheets, a legacy TMS, and a shared email inbox for exceptions. It's messy. Last month we missed a delivery window for one of our biggest retail clients because a route change got buried in email threads.
> 
> What I'm hoping your platform gives us is one place where dispatch, drivers, and customer service all see the same status in real time. No more "I thought you updated it" moments.
> 
> [You can describe a different situation anytime.]

</details>
