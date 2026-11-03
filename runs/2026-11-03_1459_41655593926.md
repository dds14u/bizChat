# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-03 14:59 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C2 Coach starter: first 90 days | 2/2 | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 1/2 (1 flaky) | 1/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 2/2 |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 1/2 (1 flaky) | 1/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 (1 flaky) | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 0/2 (2 flaky) |
| **Total (first try)** | **20/24** | **20/24** |

## Runs
- production-1: GREEN · PASS 10 · FAIL 0 · FLAKY 2 · ERROR 0
- production-2: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0
- staging-1: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0
- staging-2: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:43 UTC

**PASS 10 · FAIL 0 · FLAKY 2 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FLAKY | passed on rerun; first try: T2: feedback score ≥ 4 |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | PASS | – |
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
- ✓ list items ≥ 2: 5 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • **Map your place in the organization.** Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • **Decide your career direction.** Let that direction guide what you learn and the opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Start with humility.** Your previous success does not automatically mean success here. Be flexible, listen, and avoid being overly aggressive.
> 
> • **Learn proactively.** Ask questions boldly while you are new, and learn from both coworkers and internal documents.
> 
> • **Focus on learning first.** Make a specific plan for what you need to learn rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. I'm looking forward to hearing what you have in mind for the project.
> 
> [You're the lead project manager at Apple, kicking off a new mobile app launch. Over the past two weeks, your team and the design team have exchanged several emails about requirements and timelines. Today's goal is to align everyone on the schedule and key features before development begins. The next step will be to share a timeline with leadership for sign-off by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear, and it's helpful to know we can jump in with questions.
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining today. We're looking forward to hearing how the website redesign is going to come together.
> 
> [You are the lead PM for a website redesign at Apple. The team has exchanged several emails about the project scope over the past two weeks. Today's goal is to align on the schedule and key features before development begins. The next step is to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 4
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. Sounds like a clear plan — looking forward to the detailed walkthrough.
> 
> **Course score: 4/5**: You covered all three ICE steps, with strong context and expectations.
> 
> **How it went:** Great job! You introduced yourself, gave the full past-present-future context, and set both interaction and detail expectations in one go.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday." — This shows **Context: past, present, and future** with a clear deadline, exactly as the method teaches.
> 
> **What to improve:**
> - Your introduction blended the topic and self-introduction smoothly, but it could be even clearer if you separate them: first one or two statements about the meeting topic, then your name, role, and contribution. Here the topic ("the new app launch") and your role came in one sentence, which is fine but slightly compressed.
> - You said "Please ask questions anytime" for interaction level, which is good. For detail level, you added "this will be a detailed discussion" — clear and direct.
> 
> **Also worth noting:** "Agree on the schedule" is slightly softer than "align on the schedule"; both work, but "align" is more common in global teams when the goal is shared understanding rather than formal approval.
> 
> **Try this instead:**
> "Hi everyone, today we're kicking off the new app launch. I'm Lee, the lead PM, and I'll be m…

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee first on the new store menu. It stays true to our brand, and customers expect to see it right away when they walk in.
> 
> [You and Bob are both product associates at Starbucks headquarters in Seattle. The team is redesigning the in-store menu board for the summer launch. Bob wants traditional hot coffee listed first. You believe a different order would work better.]
> [Hint: you could partly agree with Bob about brand identity or customer expectations.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. Start positive by partially agreeing with the other side. Show you understand their perspective with phrases like "I understand," "I can see," or "it makes sense that."
> 2. State your own opinion and why you disagree, using a specific reason or data if possible.
> 3. Keep the discussion open by asking a question about alternatives.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> A discussion like this often leads to a better solution, and once the team makes a decision, everyone moves forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 52 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I see your point about testing first, but a smaller trial might not give us real sales data. The summer season is short, and we need the full menu live by June 1st to hit peak traffic. What kind of trial did you have in mind, and how long would it run?

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

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
> 2. **Context** – why you're meeting and the goal, in three parts:
>    - *Past:* how you got here (earlier emails, threads, or work done)
>    - *Present:* today's topics and goal
>    - *Future:* next steps with a sense of time ("by next Monday")
> 3. **Expectations** – how people should take part:
>    - *Interaction:* "please hold questions for the end" or "feel free to interrupt"
>    - *Detail:* "this will get very technical" or "we'll stay high level"
> 
> Example opening:
> &gt; "Hi everyone, today we're kicking off the new app launch. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had quite a few emails going back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone is aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot of content and not much time, so please hold questions for the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2: found partly agree
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="inferred" learner_goal=""/&gt;
> &lt;character name="Bob" gender="male"/&gt;
> 
> I hear you, but keeping the natural coating intact is what keeps our eggs shelf-stable and on brand for quality. If we wash them, we need refrigeration the whole way, and that changes our distribution costs and partner setup.
> 
> [You are a PM at Google. Bob is a supply chain analyst on your team. You are in a meeting room in Mountain View. The goal is to decide whether to change the egg-handling process for a new farming-data tool you are launching together.]
> 
> [Hint: you could partly agree with Bob's point about brand quality or distribution complexity, then share your concern.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming (guessed from the company).
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> As a PM at an egg farm, you'll want to align the ML discussion with business outcomes your team cares about: flock health, feed efficiency, grading accuracy, or supply forecasting.
> 
> Here's how to approach it:
> 
> 1. **Start with the problem, not the model.** Ask what decision the model will improve and how you'll measure success.
> 2. **Translate technical tradeoffs into business terms.** For example, a more complex model might improve accuracy by 2% but need daily retraining—explain that as engineering time and downtime risk.
> 3. **Set clear stages.** Agree on a pilot with a small dataset or one barn first, then define what "good enough" looks like before scaling.
> 4. **Name your stakeholders early.** Operations, veterinarians, and sales may all have different data needs. Get them involved before the model is built.
> 
> Example:
> &gt; "Before we choose the model, let's confirm the business goal. Is this about predicting laying rates or detecting early signs of illness? Once we're aligned, we can compare accuracy against how often we can retrain given our data pipeline."
> 
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I'm Karen, the operations director at Westfield Retail. We've been seeing consistent delays on our east coast shipments—three of the last four deliveries arrived two to three days late, and it's starting to affect our store stocking. I need to understand what's happening and what your team is going to do about it.
> 
> [You are an account manager at a logistics company. Your client, Karen at Westfield Retail, is upset about repeated late deliveries and wants answers and a fix.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive in, I wanted to check in on the mobile app launch timeline. Marketing mentioned the app store submission is still set for next Friday, but QA flagged three open bugs yesterday. How are we looking from your side?
> 
> [Your team is at Apple. You are the lead PM for a new fitness app launch. Your manager Linda runs the weekly status meeting. She wants a clear picture of where things stand before she reports to leadership.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Linda: Thanks for the clear picture. Moving the beta or launching without payments are both big decisions, and leadership will want to know we've looked at all the angles. What are you leaning toward, and what would each option mean for the app store submission date?
> 
> [Your team is at Apple. You are the lead PM for a new fitness app launch. Your manager Linda runs the weekly status meeting. She wants a clear picture of where things stand before she reports to leadership.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. Line 2's been running the new cathode recipe since Monday, and I'm seeing the defect rate climb from two percent to almost six. What do you need from me right now?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on Thursday afternoon. Goal: agree on immediate containment and a root-cause plan with clear owners and deadlines.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — that's a big jump, and I appreciate you catching it early. Holding the batches makes sense, but full inspection on every cell is going to slow us down a lot. We're already behind on the Q3 customer samples. How long do you think we'd need to run at one hundred percent?"
> 
> [Hint: you could say "I estimate three to five days" or "Until we complete the root-cause analysis, which I expect by [day]."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated the problem clearly and proposed a specific action, but you did not partially agree with Marcus's concern or keep the discussion open with a question about alternatives.
> 
> **How it went:** You came in with facts and a clear ask, which is good. The conversation stayed professional, but it felt more like a directive than a collaborative discussion.
> 
> **What worked:**
> - "I'd like to hold the affected batches and inspect one hundred percent of the cells until we confirm the cause" — this shows a specific reason and a clear solution, which matches the small-issue feedback method of giving a reason and a specific fix.
> 
> **What to improve:**
> - You did not acknowledge Marcus's pressure on Q3 samples before pushing your plan. In disagreements or pushback, start by partially agreeing with the other person's concern.
> - You closed with "Can your team support that?" rather than inviting discussion. End on a friendly tone and ask about alternatives or his view.
> 
> **Also worth noting:** "I'd like to hold" is polite, but "I recommend we hold" sounds more decisive in a quality issue where you own the technical decision.
> 
> **Try this instead:** "I understand the Q3 samples are tight, but the defect rate jumped from one percent to four percent after the supplier change. I recommend we hold the affected batches and inspect one hundred percent until we confirm the cause, which I expect will take three to five days. If that timeline is too long, what other options do y…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but our engineering team just flagged a risk with the API integration. We're looking at a potential two-week delay, which would push us past the November deadline.
> 
> [Setting: You're the project lead at your company, meeting with Sam, a senior account manager from a software vendor. The conversation is about a product launch your teams are working on together. Sam has just dropped news about a possible delay.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's the third-party payment API — it's more complex than their documentation suggested. We've had to build custom middleware, and that's eating up time.
> 
> To stay on schedule, we'd need two more backend engineers for about three weeks. Your team has people with that exact experience. Would your company be open to lending us one or two engineers?

### S5 Clear switch: meeting opener to a project delay · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining us today. We're looking forward to hearing how the new mobile app project is shaping up.
> 
> [You are the lead PM for a new mobile app launch at Google. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features before development begins. The next step is to get written sign-off from the US leadership team by next Friday.]
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

> I appreciate you flagging this early. Two weeks is a real concern — we have the integration testing deadline with the client at the end of the month. Walk me through what you're seeing and what recovery looks like.
> 
> [You are a senior PM at Microsoft reporting to Linda, your engineering director. Your team is building a cloud migration tool for a major retail client. Integration testing was scheduled to start in three weeks. The client has a hard go-live date tied to their holiday season.]
> 
> [Hint: you could say "We found 47 critical bugs in the authentication module, which is more than we estimated for the whole system."]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. We're all set on our side.
> 
> [You're the lead PM kicking off the launch of a new mobile app for customer orders at Starbucks. Over the past two weeks, the team has exchanged several emails about requirements and timelines. Today's goal is to align on the project schedule and key features. The next step is to get leadership sign-off by next Friday so development can begin.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the GPS accuracy project before the weekend.
> 
> [You are a senior engineer at Apple reporting to David, your engineering manager. The team is three weeks away from integration testing for a new location algorithm. David has just heard from another manager that your team may miss the deadline. He wants to understand the situation and what it means for the launch.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is a significant slip with integration testing so close. Walk me through what you're seeing and how much of that time you think you can recover.
> 
> [Hint: you could say "We originally planned for a 2% error rate, but we're seeing closer to 5% in the latest tests."]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> Hi, do you have a minute? I wanted to check in about the Q3 budget. I've been looking at the numbers, and I think we should allocate a larger proportion to the marketing campaign. The current split feels tight given the targets we agreed on.
> 
> [You are a senior manager at a mid-sized tech company. Your boss David has just called you over to discuss budget planning for next quarter. He wants to shift more funds toward marketing, but you believe the engineering team needs a bigger share to hit the product roadmap. Goal: negotiate a fair proportion without damaging the relationship.]
> 
> [Hint: you could say "I see why marketing needs more support, but..." or "Can we look at the data on where we actually spent last quarter?"]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for setting this up. I wanted to check in on your bandwidth — I know you've got a lot on your plate right now. How are things going with the three projects you're juggling?"
> 
> [You're a data analyst at a tech company. Marcus is your manager. The goal of this conversation is to ask for help prioritizing three urgent projects without appearing overwhelmed.]
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "I appreciate you flagging this early. The Q4 forecast is locked in with leadership — that one can't slip. Between the dashboard migration and the pricing analysis, which one do you think has more risk if we push it out?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a tradeoff, and invited collaboration — strong use of the rejecting/negotiating a request method.
> 
> **How it went:** Great job staying solution-focused and confident. You didn't sound overwhelmed; you sounded like someone managing scope carefully.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This is excellent. You restated your capacity honestly (the original agreement with your time), named a tradeoff (time: one project moves), and offered a collaborative path forward. It shows you own the work while asking for input.
> 
> **What to improve:**
> - You skipped one helpful step: briefly showing you understand the business impact before proposing the tradeoff. For example, acknowledging why all three matter would strengthen your position and show strategic thinking.
> - Also, you didn't ask for time to assess if needed — though here your assessment was clear, so that's minor.
> 
> **Also worth noting:** "I can finish two well" is clear and confident. A slightly softer version might be "I want to make sure I deliver quality on all three, and realistically two this month is the right pace."
> 
> **Try this instead:**
> "I've looked at the timeline for all three. The Q4 forecast, dashboard migration, and pricing analysis are all important, and I want to deliver quality on each. Realistically, I can do two well this month. Could we look at which one has the most flexibility on …

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Michael" gender="male"/&gt;
> 
> Thanks for making the time today. We're about six weeks away from our planned launch, and to be honest, we're not sure if the current setup is going to support the volume we're expecting. I'd rather flag this now than scramble later.
> 
> [You are a customer success manager at a software company. Michael is the operations director at a mid-sized logistics firm in Chicago. This is your first meeting with him. His team is preparing to go live with your platform next month, and he wants to make sure the system can handle their peak shipping season.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 56 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're running everything through spreadsheets and a legacy system that crashes when we hit about ten thousand transactions a day. During peak season we process closer to thirty thousand. My team is doing manual workarounds at 2 AM to keep things moving. We need your platform to handle that volume without us babysitting it.

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:55 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
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
> 1. **Learn and observe.** Use your first 90 days to understand your new environment: your role in the team, your team's role in the department, the department's role in the company, and the company's place in its market.
> 
> 2. **Stay humble and proactive.** Your past success does not guarantee success here. Listen more than you push, ask questions boldly while you are new, and study both coworkers and internal documents.
> 
> 3. **Turn problems into goals.** If a skill like networking feels difficult, make improving it a specific goal and practice consistently.
> 
> 4. **Set SMART goals.** Make them Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes, quantities, and deadlines.
> 
> 5. **Plan your own work.** Estimate time realistically, including meetings and other responsibilities. This prepares you to plan other people's work later.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining us today, everyone. We're looking forward to hearing how the new mobile app project is shaping up.
> 
> [Setting: You're a project manager at Google, leading a kickoff meeting with your team and a few stakeholders from the Search team. Over the past week, there have been several email threads about requirements and timeline. Today's goal is to align on the schedule and main features before development begins next month. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear, and the timeline for leadership makes sense.
> 
> **Course score: 5/5**: You covered all three ICE steps smoothly and in order.
> 
> **How it went:** Great job! You introduced yourself and your role, gave full context with past, present, and future, and set both expectations in one go.
> 
> **What worked:**
> - "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" — this shows **Context: past, present, and future** with a clear deadline, exactly what the method calls for.
> 
> **What to improve:**
> - Nothing major. Your line "Please ask questions anytime, and this will be a detailed discussion" covers both **Expectations** well. If you wanted to be even clearer, you could separate them: "Please feel free to interrupt with questions" and "We'll be getting into the details today."
> 
> **Also worth noting:** "Hi everyone, I'm Lee" is friendly and natural. In a larger meeting with senior people, you might add how long you've been on the team or your relevant experience for this project.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this app launch. I've been with the Search team for two years and I'll be managing the schedule and requirements. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next…

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the new store menu. It keeps us true to our brand identity, and customers expect that classic experience when they walk in.
> 
> [You and Bob are both product managers at Starbucks headquarters in Seattle. The team is redesigning the store menu for the summer rollout. Bob wants traditional coffee listed first. You believe another approach would work better.]
> [Hint: Bob does care about brand identity. Is there a bigger goal or data point you can partly agree with?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich method. Start by partially agreeing with something in Bob's idea, then state your own view with a specific reason, and keep the discussion open with a question.
> 
> Example:
> - "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Key steps:
> 1. **Partially agree** — show you see their perspective ("I understand", "I can see", "it makes sense that")
> 2. **State your opinion and why** — use facts or data if you have them
> 3. **Keep it open** — ask about alternatives or suggest a compromise
> 
> Once the team decides, move forward together even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 62 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timing concern, but a smaller trial still keeps traditional coffee first. Our summer sales data shows iced frappuccinos outsell hot drinks three to one in July and August. If we lead with those, we capture that demand right when customers walk in. What if we used a digital display so we could adjust the order by season?

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
> Open meetings with the ICE template — three steps in this order:
> 
> 1. **Introductions** — one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** — cover past (how you got here), present (today's topics and goal), and future (next steps with a deadline).
> 3. **Expectations** — set the level of interaction and the level of detail.
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the main point of contact for requirements. We've had quite a few emails going back and forth. Today we'll walk through requirements, confirm the schedule, and call out risks so everyone is aligned. We hope to get sign-off by next Monday. We have a lot to cover, so please hold questions for the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> As a PM in egg farming, you might say you're "the main point of contact for production planning and supply chain coordination." Want to practice this in a role-play?

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
> &lt;character name="Chris" gender="male"/&gt;
> 
> "I see your point about food safety standards, but washing eggs removes the natural protective coating. That coating is what keeps bacteria out. If we wash them, we have to refrigerate them immediately, and that changes our entire supply chain."
> 
> [You and Chris are both PMs at Google. The team is deciding whether to require washed eggs for a new meal program. Chris thinks unwashed eggs are safer and simpler. Your goal is to reach a decision together.]
> 
> [Hint: you could say "I understand that keeping the natural coating makes storage easier, but..."]

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
> Use the feedback sandwich when you disagree with a coworker:
> 
> 1. **Start positive** — partially agree with their view honestly ("I understand that…", "I can see why…").
> 2. **State your opinion with a specific reason** — use facts or data where possible.
> 3. **Keep it open** — end on a friendly tone and ask about alternatives.
> 4. **Move forward together** — once a decision is made, commit to it.
> 
> Example:
> &gt; "I understand that keeping the natural coating makes storage simpler and cuts refrigeration costs. But our data shows washed eggs have 40% fewer customer complaints about dirt and stains, and that affects our retail partnerships. Could we test both approaches with two distributors and compare results?"
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
> Start your meeting with the ICE template: Introductions, Context, Expectations.
> 
> **1. Introductions**
> - Say one or two sentences about the meeting topic.
> - Introduce yourself: name, role, and how you will contribute.
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got to this meeting (emails, earlier discussions).
> - **Present:** today's topics and goal.
> - **Future:** next steps, with a deadline.
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions until the end" or "Feel free to interrupt."
> - **Detail:** "We'll stay high level" or "We'll go into technical details."
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new feed system rollout. I'm Jamie, lead PM, and I'll manage the schedule and be your main contact. We've had emails going back and forth for two weeks. Today we'll confirm requirements and flag risks, so we're aligned before development starts. We'd like sign-off from the US team by next Monday. There's a lot to cover, so please hold questions until the end."
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
> &lt;character name="Jordan" gender="male"/&gt;
> 
> I see your point about food safety standards, but washing eggs removes the natural protective coating. That means they spoil faster and we'd need refrigeration from farm to shelf. It could add real cost and complexity for our suppliers.
> 
> [You are a PM at Google working on a food-tech partnership with an egg farming cooperative. Your teammate Jordan is proposing that all eggs in the program be washed and graded to meet retail packaging standards. The goal is to agree on a processing approach that balances shelf life, cost, and partner feasibility.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="" learner_role="PM" learner_company="" learner_industry="Egg farming" learner_industry_source="stated" learner_goal=""/&gt;
> 
> This is covered in the course:
> 
> Start your meeting with the ICE template: Introductions, Context, Expectations.
> 
> **1. Introductions**
> - Say one or two sentences about the meeting topic.
> - Introduce yourself: name, role, and how you will contribute.
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got to this meeting (emails, earlier discussions).
> - **Present:** today's topics and goal.
> - **Future:** next steps, with a deadline.
> 
> **3. Expectations**
> - **Interaction:** "Please hold questions until the end" or "Feel free to interrupt."
> - **Detail:** "We'll stay high level" or "We'll go into technical details."
> 
> Example for your ML model discussion:
> &gt; "Hi everyone, today we're reviewing the yield prediction ML model for our grading line. I'm the lead PM, and I'll coordinate between our data team and farm operations. We've had two weeks of back-and-forth on data quality. Today we'll review the model's accuracy on dirty eggs and decide whether to proceed to a live trial. We need a go or no-go decision by Thursday so we can brief the operations lead on Friday. This will get technical, so feel free to jump in with questions."
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
> Thanks for making time today. I'm Rachel, the operations director at Westfield Retail. We've been seeing consistent delays on our shipments over the past three weeks — three of our last five deliveries arrived a day or more late, and it's starting to affect our store replenishment. I need to understand what's happening and what your team is going to do about it.
> 
> [You are an account manager at a logistics company meeting with Rachel from Westfield Retail, a major client. The goal is to address her concerns about late deliveries, explain the situation, and agree on a solution and next steps.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for joining, everyone. Let's hear from you first — how's the mobile app launch looking this week?
> 
> [You're the PM leading the weekly status meeting at your company. Maya is a senior engineer on your team. She wants to hear your update before she shares her team's progress.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Good to know where we stand. The payment API delay is frustrating — we've been waiting on their team since early March. 
> 
> On our side, iOS is ready for testing, but Android still has some stability issues. We can't really commit to a beta date until we know which direction you're taking on payments. What are you leaning toward?

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I've seen the numbers too — defect rate on Line 2 went from 2% to almost 5% since Monday. That's a big jump. What do you think is driving it?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. The conversation is about the spike in defective cells on Line 2 this week. Goal: discuss the issue, identify likely causes, and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 49 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "A new supplier — that timing lines up. My team can support the inspection, but we're already behind on the Q3 ramp schedule. If we pull people to inspect 100%, we'll lose about two days of output. Can we narrow it down to specific batch numbers instead of everything?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific action, and asked for support — strong general checklist work.
> 
> **How it went:** Great job staying direct and solution-focused. You handled Marcus's pushback professionally and kept the conversation moving toward a decision.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — states the purpose clearly early on with a specific reason and example, which builds credibility immediately.
> 
> **What to improve:**
> - When Marcus raised the tradeoff (two days of lost output), you didn't yet respond. The general checklist includes handling concerns calmly and closing with a clear next step and a time. Try acknowledging his constraint before pushing your solution further.
> - You also didn't ask Marcus for his input on narrowing the scope — inviting his expertise could get you to a faster agreement.
> 
> **Also worth noting:** "Can your team support that this week?" is clear, but slightly direct. Softening with "Would your team be able to support..." keeps the same meaning with a more collaborative tone.
> 
> **Try this instead:**
> "I understand the Q3 pressure. Could we start with the three most recent batch numbers and reassess Thursday? That would limit the output hit while we confirm if it's isolated to the new supplier."
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
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping past the November deadline. Our QA team just flagged three integration issues that are going to take longer to fix than we estimated.
> 
> [Your team at a US-based software company is in a weekly status call with Sam, a project lead from an external vendor. Sam's team is building a payment module for your platform. The goal of this conversation is to understand the delay and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The three integration issues are all around how our module talks to your user authentication system. Two of them we can handle internally, but the third one needs your API team to change how session tokens are passed back to us. We didn't catch this earlier because your test environment was using a simpler setup than production.
> 
> If your API team can give us a revised endpoint by next Wednesday, we can probably recover about half the lost time. Otherwise we're looking at a two-week slip, maybe three.
> 
> [Hint: you could say "Can you walk me through the three issues so I can brief our API team accurately?"]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today's kickoff. I'm Sarah, the marketing lead on this project. We're excited to get started and hear your plan.
> 
> [You're the project lead at Apple, kicking off a new app launch with the marketing and engineering teams in Cupertino. Over the past week, there have been a few email threads about scope and timeline. Today's goal is to align everyone on the schedule and key features before development begins. The next step is to send a written summary to leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, though. Walk me through what you're seeing in testing and what recovery options you have in mind.
> 
> [You're a senior engineer at Apple reporting to David, your engineering manager, in Cupertino. Your team is building a new feature for the Maps app, and integration testing with the hardware team is scheduled in three weeks. David has already shared a preliminary timeline with the executive team.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're all looking forward to getting started.
> 
> [You are the lead project manager for the launch of a new mobile app at Google. Over the past two weeks, your team and the design team have exchanged several emails about requirements and timelines. Today's goal is to align everyone on the schedule and main features before development begins. The next step will be to share a timeline with leadership by next Friday.]
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
> Two weeks is a big slip, and we're already tight on the overall timeline. Walk me through what you're seeing and how much of that time you think you can realistically recover.
> 
> [You are a senior engineer at Apple. Your manager David asked for a status update on the new payment feature you're leading. The original deadline was end of quarter for the board demo. Testing wrapped up last week and the bug count came in higher than the team estimated.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, do you have a minute? I wanted to run something by you. The Q3 budget came in flat, but the product team just added two new features to the roadmap. I'm going to need more headcount to hit those dates."
> 
> [You're a senior engineer at a mid-sized software company. Your manager David just dropped by your desk on Thursday afternoon. You were planning to ask him for a raise and a better project allocation ratio—more time on core infrastructure, less on ad-hoc client requests. He's opened with his own resource problem, which puts pressure on you.]
> 
> [Hint: you could say "I hear you on the budget pressure. Before we get into that, I did want to discuss my own role and how my time is split right now."]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> I know you've got a lot on your plate right now. Before we dive into updates, how are you feeling about your current workload?
> 
> [You're a data analyst meeting with Linda, your manager at a tech company in San Francisco. She knows you're busy but hasn't heard specifics yet. Goal: ask for help prioritizing three urgent projects without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board review on the 15th, so that one can't move. Between the dashboard migration and the pricing analysis, which one do you think would have more impact if it slipped?
> 
> [Hint: you could say "If the pricing analysis feeds into the forecast, I'd want to keep them together and push the dashboard migration, since that doesn't have a hard deadline."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a solution, and invited collaboration—strong use of the general checklist for handling a request and negotiating workload.
> 
> **How it went:** Great job staying solution-focused and confident. You didn't sound overwhelmed; you sounded like someone managing priorities carefully.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows **handling concerns calmly**: you owned your capacity honestly and invited your manager into the decision, which frames you as proactive, not struggling.
> 
> **What to improve:**
> - You skipped **stating the purpose clearly early on**. A brief opener like "I wanted to use this 1:1 to align on priorities" would set the frame before listing projects.
> - You didn't **name a reason or consequence** for your preference. Even a quick "the dashboard migration doesn't have a hard deadline" would strengthen your case.
> 
> **Also worth noting:** "I can finish two well" is clear and confident. Avoid softening it with "maybe" or "I think"—you didn't, which is good.
> 
> **Try this instead:** "I wanted to align on priorities. I'm on three projects due this month, and I can deliver two with full quality. The Q4 forecast and pricing analysis both feed the board review, so I'd suggest moving the dashboard migration to next month. Does that work?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="James" gender="male"/&gt;
> 
> Thanks for making the time today. We've been looking forward to getting started — our current setup is becoming a real headache, and we're hoping your platform can help us streamline things. I'll be straight with you, though: we've looked at a few vendors already, and the last one overpromised and underdelivered. So we're coming in a bit cautious.
> 
> [Your company is a mid-sized logistics firm in Chicago. You are James, the operations director. The learner is a customer success manager from a software company. Goal: understand the client's pain points, current workflow, and what success looks like so the product can be configured correctly.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 96 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're managing everything through a mix of spreadsheets and email chains. It's not pretty. When a shipment hits a delay, our team has to dig through three different inboxes to figure out who needs to know and what to tell them. Last month we had a $40,000 penalty because a client didn't get notified in time about a customs hold. So the main thing we need is visibility — one place where everyone can see status updates in real time, and where alerts go out automatically before a small issue becomes a big one.

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:50 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
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
| S8 Discovery: customer success exploring client needs | FLAKY | passed on rerun; first try: T2: words ≤ 120 |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 8 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> **Understand your starting point**
> - Learn how your team fits into the department, and how the department fits into the company
> - Understand the company's place in its market
> 
> **Be humble and learn proactively**
> - Your past success doesn't guarantee success here — stay flexible and listen
> - Ask questions boldly while you're new; people expect it
> - Read internal documents and learn from coworkers
> - Focus on learning first, not on performance ratings
> 
> **Set your direction**
> - Decide where you want your career to go
> - Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> What's your new role, and are you joining a large company or a smaller one?

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, I'm Sarah. I'm on the marketing side for this project. Looking forward to getting aligned today."
> 
> [We're at Tesla's Austin office. You're the project lead for a new mobile app update that lets owners schedule service appointments. The team has exchanged emails for two weeks, but this is the first kickoff meeting. Your goal: open the meeting with a strong introduction, context, and expectations. Sarah is a supportive teammate ready to help you practice.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 4
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee — that's really clear. Two weeks of back-and-forth on features, and now we lock down the schedule. I'm ready to dig in."
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait — let me check again. You did cover past (emails about features), present (agree on schedule), and future (timeline to leadership by Friday). You also gave expectations (questions anytime, detailed discussion). Let me re-read...
> 
> Actually, your introduction could be stronger on your role and contribution, but you did say "lead PM" and "manage the schedule." The context step is present. And expectations are there.
> 
> Since all three steps are at least partially covered, let me give Sarah's reaction and move to feedback:
> 
> "That works for me, Lee. Should I pull up the feature list so we can start walking through dependencies?"
> 
> ---
> 
> **Course score: 4/5**: You covered all three ICE steps and gave a clear next step with a deadline.
> 
> **How it went:** A solid opening that moved the meeting forward naturally.
> 
> **What worked:** "Over the past two weeks we've had a lot of emails about the main features" — this shows past context and explains how you got here.
> 
> **What to improve:** Your introduction named your role but didn't say how you'll contribute beyond "manage the schedule." Also, "Please ask questions anytime, and this will be a detailed discussion" combines two ideas awkwardly — interaction and detail level are both expectations, but they clash slightly.
> 
> **Also worth noting:…

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "Hey, thanks for making time. So I've been thinking about the menu redesign for the summer rollout. I want us to list the traditional hot coffees first — espresso, americano, cappuccino, right at the top. It stays true to our brand, and I think customers expect that when they walk in. What do you think?"
> 
> [Starbucks headquarters, Seattle. You're a product manager on the food and beverage team. Bob is a senior brand strategist. The team needs to finalize the summer menu layout by Thursday.]
> 
> [Hint: you could honestly agree that brand consistency matters, or that traditional coffee is core to the identity.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **feedback sandwich** for disagreements at work:
> 
> • **Partially agree, honestly** — show you understand their view before you oppose it
>   - "I understand that we want to stay true to our traditional coffee brand"
> 
> • **State your opinion with a specific reason** — use facts or data when you can
>   - "but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales"
> 
> • **Keep the discussion open** — ask about alternatives so it feels like teamwork
>   - "Are there other alternatives?"
> 
> • **Move forward together once a decision is made** — even if it isn't your idea
> 
> Example full line:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 117 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> "I hear you on the timing — a full rollout does feel like a big commitment. But honestly, I'm not sure a smaller trial would tell us much. The real question is what customers see first when they walk in. Our data from last summer shows iced frappuccinos outsold hot espresso drinks by almost three to one in July and August. If we lead with traditional coffee, we're hiding our strongest performer. What would a trial need to show you to change your mind?"
> 
> [You're doing well — you partially agreed and stated a concern. To fully use the feedback sandwich, add a specific reason tied to the business impact, then keep it open with a question about alternatives.]

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
> Use the **ICE** template to open a meeting you lead:
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
> - Interaction level: "Please hold questions for the end" or "Feel free to interrupt"
> - Detail level: very detailed or high level
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM. I'll manage the schedule and be the main point of contact for requirements. We've had emails going back and forth, so today we'll walk through requirements, confirm the schedule, and call out risks. We hope to get sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
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
> "Hey, thanks for making time. So I've been looking at the USDA processing guidelines, and honestly, I think we should start washing all the eggs before they go to packaging. It reduces the risk of salmonella contamination, and most large-scale farms already do this. What's your take?"
> 
> [You're a PM at Google working on a food supply chain transparency tool. Priya is a product designer on your team. You're in a meeting room in Mountain View discussing a feature for egg farm suppliers. She just proposed adding a mandatory egg-washing checkpoint to your platform. The goal of this conversation is to decide whether this feature belongs in your MVP.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models effectively at work","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep the discussion open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models effectively at work"/&gt;
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker's idea:
> 
> **1. Partially agree, honestly**
> - Find something you genuinely understand or accept
> - "It makes sense that…" or "I understand why…"
> 
> **2. State your opinion with a specific reason**
> - Use facts or data where possible
> - Be direct about your concern
> 
> **3. Keep the discussion open**
> - Friendly tone, ask about alternatives
> - "Are there other ways we could…?"
> 
> **4. Move forward together**
> - Once you decide, commit clearly
> 
> Example:
> &gt; "I understand that ML could help us predict laying patterns, but our current data is mostly manual logs with inconsistent timestamps. That means the model's predictions may not be reliable enough for daily operations. Are there other ways we could improve forecasting first, like standardizing the data collection process?"
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
> Open meetings with **ICE**: Introductions, Context, Expectations.
> 
> **1. Introductions**
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> *"Hi everyone, today we're kicking off the new supplier review. I'm Alex, the PM on this, and I'll be tracking deadlines and coordinating with the quality team."*
> 
> **2. Context (Past, Present, Future)**
> - Past: how you got here (emails, earlier meetings, work done)
> - Present: today's topics and goal
> - Future: next steps with a deadline
> 
> *"We've exchanged specs with three suppliers over the past two weeks. Today we'll compare their proposals and pick a shortlist. I'll send the final recommendation to procurement by Thursday."*
> 
> **3. Expectations**
> - Interaction level: questions now or at the end?
> - Detail level: high-level or deep dive?
> 
> *"This is a working session, so please jump in with questions as we go."*
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
> "I think we should wash every egg before it goes to packaging. It looks more professional, and customers expect clean shells."
> 
> [You're a PM at Google working on a food supply chain tool. Bob is a product designer who wants to add a mandatory egg-washing step to your farm-to-retail workflow. The team is split on whether this helps or hurts shelf life. Goal: reach a decision together.]
> 
> Hint: think about what you could honestly agree with — maybe food safety standards, or customer expectations — before you share your own view.

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open, move forward together
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is about disagreeing with a coworker's idea. Here's a direct approach:
> 
> **The feedback sandwich**
> 
> • **Partially agree, honestly** — find something real you can support
>   - *"I agree that clean shells matter for retail buyers."*
> 
> • **State your view with a specific reason** — use facts or data
>   - *"But washing removes the natural coating, and studies show it cuts shelf life by 40%. That increases waste and costs."*
> 
> • **Keep it open with a question**
>   - *"Could we test a brush-cleaning option instead?"*
> 
> • **Move forward together** once you decide
>   - *"Let's run a two-week trial with both methods and compare spoilage rates."*
> 
> General tips:
> - Lead with their concern, not your rejection
> - "But" or "However" works fine — just keep the tone friendly
> - Offer an alternative; don't just block
> 
> As a PM at an egg farm, you can bring real operational data into these discussions. That strengthens your position more than general arguments.
> 
> Want to practice this? Tap the mode menu and choose Role-play.

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for making time today. I need to be direct — we've had three shipments arrive late this month, and it's costing us. Our warehouse had to pay overtime last week because a delivery came in after the cutoff. What is your team doing to fix this?"
> 
> [You are an account manager at a logistics firm. Rachel is the operations director at a retail client in Chicago. She scheduled this call after the third late delivery. Your goal: address her concern, explain what happened, and agree on a plan to prevent it.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Maya" gender="female"/&gt;
> 
> "We're still seeing a 12% crash rate on the checkout flow in beta. That's blocking our App Store submission. What's the latest from your side?"
> 
> [You're the PM leading the weekly sync for a fintech app launch at Stripe. Maya is your senior engineer in San Francisco. The team is remote across three time zones. Goal: give your update and keep the project on track.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Maya nods, taking notes.
> 
> "Seventy percent is solid, but that API delay is rough. Our checkout crash is tied to the payment flow, so launching without payments doesn't solve the beta blocker. What does the vendor say about the two-week slip? And if we move beta, what's the new date you're looking at?"
> 
> [You stated the situation clearly and proposed two options. Maya's pushing for more detail before she'll buy into either path.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Hey, thanks for coming by. I was just looking at this week's numbers and Line 2 is showing a spike in defective cells — from 2% up to almost 5%. That's our highest line in the plant right now. What's your take on what's driving it?"
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. He's concerned about output targets and doesn't want to slow the line without a clear reason. Your goal: discuss the defect jump, explain what you've found, and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 58 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus crosses his arms and exhales. "Four percent — that's a big jump, and right after a supplier change. I get it. But holding batches and 100% inspection means pulling people off other lines and maybe missing Thursday's shipment to the OEM. How sure are you that it's the new supplier part and not something else on Line 2?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly with data, proposed a specific action, and asked for support — strong structure for a difficult conversation.
> 
> **How it went:** You came in with facts and a plan, which kept the discussion professional and focused on solutions rather than blame.
> 
> **What worked:** "The defect rate went from 1% to 4% after we changed suppliers for one part" — you gave a clear cause with numbers, and "I'd like to hold the affected batches and inspect 100% of the cells" named a specific, time-bound action.
> 
> **What to improve:** You moved straight to your solution without acknowledging Marcus's pressure (output targets, Thursday shipment). A brief pause on his constraints would build more trust before asking for resources.
> 
> **Also worth noting:** "Can your team support that this week?" is a bit direct. Softening to "What would that look like for your team this week?" invites collaboration.
> 
> **Try this instead:** "The defect rate went from 1% to 4% after we changed suppliers for one part. I know Thursday's shipment is tight. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause — what capacity do you have this week, or should we look at borrowing from Line 1?"
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
> I know this isn't what anyone wants to hear, but I'm looking at our delivery schedule and I think we need to talk about the timeline. We've hit some integration issues with the API layer that are taking longer than we estimated, and honestly, I'm not sure we can make the March deadline without cutting corners on testing. I wanted to flag this now rather than surprise you later.
> 
> [You're the project lead at your company, in a mid-meeting discussion with Sam, your main vendor contact. The goal: address the delay risk and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The API integration is the main blocker. The documentation we got from your team didn't cover the newer endpoints, so our engineers had to reverse-engineer some of the data flows. That's burned about two weeks already.
> 
> To stay on schedule, we'd need two things. First, someone from your engineering side to walk us through the endpoint specs, ideally this week. Second, we'd need to either reduce the custom reporting scope or add two more developers to our side. Otherwise, we're looking at a four-to-six-week slip.
> 
> [What do you want to do with this information?]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi, I'm Sarah. I'm on the marketing team and I'll be handling the campaign assets for this project.
> 
> [You're the project lead for a new mobile app launch at Apple. The team is in Cupertino. Over the past two weeks, there have been emails back and forth between design, engineering, and marketing about feature priorities. Today's goal is to agree on the final feature set so engineering can start build next week. You need to send the locked plan to the VP by Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I just got off a call with the client and they're asking about our timeline.
> 
> [You're a project manager at Tesla. David is your manager, based in Austin. The battery management software project you lead is running behind because two key engineers were out sick last month. The original delivery date was June 15. You need to tell him it'll be June 29. The goal: deliver the news, explain why, and agree on what to tell the client.]
> 
> [Hint: state the delay clearly early, give a brief reason with facts, and come with a proposed next step.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks puts us past the client's quarterly review. How many bugs are we talking about, and what's your recovery plan?
> 
> [You're a project manager at Tesla. David is your manager in Austin. The battery management software project you lead was due June 15; you're now telling him June 29. Testing found more bugs than expected. Goal: explain the delay, handle his concern, and agree on what to tell the client.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to check in about the Q3 budget. The leadership team just approved a 15% increase for the marketing campaign, but they want the same launch date. That means pulling three engineers off their current sprint. How do you see us handling that?"
> 
> [Setting: You're a senior project manager at a fintech startup in Singapore. David is your direct manager. The conversation goal: negotiate a fair allocation of resources so your core product roadmap doesn't collapse.]
> 
> [Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, thanks for coming in. I wanted to check in—how's everything going with the dashboard rebuild, the Q3 forecast, and that ad-hoc request from Sales? I know all three landed at once."
> 
> [You're a data analyst at a mid-sized tech company in Austin. David is your manager, friendly but stretched thin himself. Goal: get help prioritizing three urgent projects without appearing overwhelmed.]
> 
> ---
> 
> What would you like to say?

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That's helpful to know. The Q4 forecast has to go to the board on the 15th, so that one's fixed. Between the dashboard migration and the pricing analysis, which one do you think would slip more if we pushed it?"
> 
> [He wants your input, but he's also testing whether you've thought through the tradeoffs. What matters most to the business?]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a realistic limit, and invited collaboration—exactly what a manager wants to hear.
> 
> **How it went:** David engaged immediately because you came with a plan, not just a complaint.
> 
> **What worked:** "I can finish two well" — this shows ownership and sets a clear boundary. "Could we decide together" — you made him a partner in the solution, not the source of your stress.
> 
> **What to improve:** You didn't name the impact of doing all three. Adding why it matters helps him advocate for you. For example: doing all three would mean rushing the forecast or delivering incomplete analysis.
> 
> **Also worth noting:** Your opening was direct and calm. No apology for needing help, which is the right tone.
> 
> **Try this instead:** "I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. If I take all three, I'll need to cut corners on at least one. I can finish two with full quality. Could we decide together which one can move to next month, or if another analyst can take one?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi, thanks for making the time. I'm Priya, VP of Operations at Northfield Logistics. We finally got the green light to replace our old tracking system, and your platform came up in every conversation I had with peers.
> 
> So, you're from the success team — what does that mean for how we'll work together?
> 
> [Northfield Logistics, Chicago. You are the CSM from the software company. Goal: understand Priya's needs, current pain points, and success criteria before implementation. She has budget approval but is cautious after a bad experience with her last vendor.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✗ words ≤ 120: 142 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Good question — and honestly, it's why I wanted this meeting.
> 
> Right now we're running our fleet tracking on three different tools that don't talk to each other. Dispatch uses one system, drivers use another app, and finance pulls data manually into spreadsheets for billing. Last month we had a shipment go to the wrong warehouse because dispatch saw one status and the driver saw something else. Cost us twelve hours and a penalty fee.
> 
> I'm hoping your platform gives us one place where everyone sees the same thing in real time. But I need to be straight with you — our last vendor promised the same thing and it took eight months to get basic reporting working. So I'm going to push hard on implementation timelines and what "real time" actually means.
> 
> What does your onboarding look like for a company our size?

**Attempt 2**

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Hi, thanks for making the time. I'm Maya, VP of Operations at Northfield Logistics. We reached out because our current system isn't keeping up — our team is still doing a lot of manual tracking, and we're losing visibility once shipments leave our warehouse.
> 
> [You're a customer success manager at a software company. Maya is a new client at Northfield Logistics, a mid-sized supply chain firm in Chicago. She wants to reduce manual work and get real-time shipment visibility. Your goal: understand her needs so you can configure the product. Ask away.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're using spreadsheets and email threads to track shipments across three warehouses. It's fine when volume is low, but last quarter we hit a bottleneck — a major retail client expanded their contract, and we missed two delivery windows because no one saw the delay coming. We had to pay penalties and nearly lost the account.
> 
> So the main thing I need is earlier warning when something's going off track, not just a record of where it already went wrong.

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 14:59 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FAIL | T2: feedback score ≥ 4 (no score) |
| D1 Mode switch: Role-play → Coach → back | PASS | – |
| D2 Background in passing, workplace change, and lessons applied only when they fit | PASS | – |
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | PASS | – |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | PASS | – |
| S5 Clear switch: meeting opener to a project delay | PASS | – |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | PASS | – |
| S8 Discovery: customer success exploring client needs | FLAKY | passed on rerun; first try: T2: words ≤ 120 |

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
> **First 90 days: learn and observe**
> 
> • **Map the organization** — understand your role in the team, the team's role in the department, and the department's role in the company. Also learn where the company sits in its market.
> 
> • **Set your direction** — decide where you want your career to go. Use that to guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Stay humble and ask questions** — your past success doesn't guarantee success here. Listen more than you push. Ask questions boldly while you're new.
> 
> • **Learn from documents and people** — read internal documents, talk to coworkers, and focus on learning before worrying about performance ratings.
> 
> • **Make a specific plan** — set concrete learning goals for your first 90 days rather than just trying to look busy.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'll hand it over to you.
> 
> [You're the project lead for a new mobile app at Tesla. The team is in Austin. Over the past two weeks, you've exchanged emails with design and engineering about user flow. Today's goal is to agree on the core features for the MVP. After the meeting, you'll send the feature list to the VP by Thursday. Sarah is a supportive teammate on the call.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. Good to have that clarity. I'm looking forward to locking this down.
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait — let me check what you've covered so far. You gave your introduction and your expectations. The context you shared mentions emails and today's goal, but it's missing a clear "past, present, future" structure with a sense of time for the next step. Try adding that in.

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, I'm Sarah. I think we're all here now."
> 
> [You're the project lead for a new mobile app at Tesla in Austin. The team has been exchanging emails about the app for two weeks, but this is the first formal meeting. Your goal today is to agree on the core features and timeline, then send a summary to the design team by Wednesday. Sarah is a supportive teammate ready to help you practice the opening.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Great to meet you formally, Lee. Two weeks of emails — I'm glad we're finally getting everyone in one place. Agreeing on the schedule sounds like the right next step, and Friday gives us a clear target."
> 
> [Now give the context: the past, the present, and the future.]
> 
> [Hint: you covered your introduction well — name, role, and contribution are clear. For Context, try adding how you got here, what exactly you'll cover today, and a specific next step with a deadline. The "past, present, future" structure helps the team follow along.]

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "Hey, I've been thinking about our menu redesign for the new app launch. I really think we should put the traditional coffee section right at the top — it's what defines us as a brand, and loyal customers expect to see it first. What do you think?"
> 
> [You're on the product team at Starbucks headquarters in Seattle. Bob is your teammate. He wants traditional coffee listed first on the menu. You know that iced frappuccinos have been the summer best sellers for three years running. The goal is to disagree professionally and reach a team decision.]
> 
> Hint: what can you honestly agree with in Bob's idea?

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> • **Partially agree, honestly** — show you see their point  
> "I understand that we want to stay true to our traditional coffee brand."
> 
> • **State your opinion with a specific reason** — use facts or data  
> "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives  
> "Are there other alternatives?"
> 
> • **Move forward together** — once the team decides, commit  
> "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 66 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> "I hear you on wanting to test first, but I'm not sure I follow — are you saying the menu order itself would take too much time to change, or that you're worried about something else?"
> 
> [Hint: you named a concern, but Bob isn't clear what "this" refers to. Try naming the specific issue directly: "Listing traditional coffee first" or "Moving away from our top-selling items."]

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE template** for the first 8 minutes:
> 
> 1. **Introductions**
>    - One or two sentences about the meeting topic
>    - Your name, role, and how you'll contribute
> 
> 2. **Context (Past, Present, Future)**
>    - Past: how you got here (emails, earlier meetings)
>    - Present: today's topics and goal
>    - Future: next steps with a deadline ("by next Monday")
> 
> 3. **Expectations**
>    - Interaction level: "Please hold questions for the end" or "Feel free to interrupt"
>    - Detail level: high-level overview or deep dive
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had emails going back and forth, so today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
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
> &lt;character name="Rachel" gender="female"/&gt;
> 
> "I think we should wash every egg before it goes into the carton. It looks cleaner, and customers expect it."
> 
> [You and Rachel are PMs at a Google-backed ag-tech startup in Chicago. You're discussing quality standards for a new egg-sorting system. Rachel wants to add an automated wash step to the line. Your goal: share your view and reach a decision together.]
> 
> Hint: think about what you can honestly agree with, then share your concern with a specific reason.

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"Egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="Egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is about communicating at work, not a specific course skill. Here's a direct way to approach it:
> 
> • **State the purpose early** — "I want to align on how the ML model fits our operation."
> 
> • **Bridge their world to yours** — Use terms they know. Egg farming: "grading accuracy," "throughput per hour," "rejection rate." Avoid ML jargon unless they use it first.
> 
> • **Lead with impact, not technique** — "If we hit 95% grading accuracy, we cut manual inspection by half" beats explaining neural networks.
> 
> • **Offer a concrete next step** — "Can we run a two-week pilot on Line 3? I'll share results by Friday."
> 
> Example:
> &gt; "The model we're testing could sort eggs by grade faster than our current setup. My concern is whether it handles dirty shells as well as clean ones. Before we commit, I'd like to test it on Line 3 for two weeks and compare rejection rates. I can have numbers for you by next Friday."
> 
> [I saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Maya" gender="female"/&gt;
> 
> "Thanks for making time today, Mark. I need to be direct — we've had three delayed shipments in the past month, and my warehouse team is now questioning whether we can rely on your routes. What's going on?"
> 
> [You're an account manager at a logistics firm. Maya is the operations director at a mid-sized retail client in Chicago. She agreed to this call after the third late delivery. Her goal: understand the root cause and get confidence your service will improve.]
> 
> What do you say?

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Elena" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I've got back-to-back meetings today, so let's keep it focused. Where are we on the beta rollout?"
> 
> [You're the PM leading the weekly status for your mobile app launch at a fintech startup in Singapore. Elena is your engineering lead. The beta was supposed to ship to 1,000 users last Tuesday, but you hit a blocker with push notifications on Android. The marketing team is waiting for a green light to announce. Goal: update Elena, align on where things stand, and agree on next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Got it — 70% and the payment API slip is the main issue. Two questions: do we have a fallback if the API comes in another week late, and what's your read on launching without payments? Marketing's been asking me for a firm date."
> 
> [You stated the purpose early and named a specific blocker with options — good. Elena's pushing for your assessment so the team can decide.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Miguel" gender="male"/&gt;
> 
> "Hey, thanks for coming by. I've been looking at the numbers and they're not great — Line 2 is showing a 4% defect rate this week, up from our usual 1.2%. That's almost 200 extra cells flagged. Before I escalate this to the plant director, I want to understand what's driving it. What's your take?"
> 
> [You're a quality engineer at CATL, speaking with Miguel, the production manager at your battery plant in Detroit. The weekly quality report just landed, and both of you need to align on cause and next steps before the director's review on Friday.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "That timing lines up — we switched to the new anode supplier on Monday. But holding all affected batches and going to 100% inspection? That's basically stopping our normal output for Line 2. We're already behind on the Q3 order for GM. If we divert that much labor to inspection, I need to know what you're asking my team to stop doing instead."
> 
> [He wants to help, but needs to understand the tradeoff and how long this lasts. What do you propose?]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose early, backed your request with a specific cause, and proposed a clear next step with a time boundary.
> 
> **How it went:** Strong opening — you connected the defect jump to the supplier change and moved straight to a concrete ask, which kept the conversation focused on solutions.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this states your recommendation, defines the scope, and includes an exit condition.
> 
> **What to improve:** You didn't fully address Miguel's concern about the tradeoff. When he pushed back on labor and the GM order, the next step would be to acknowledge the impact and offer a limited trial or phased approach rather than repeating the same ask.
> 
> **Also worth noting:** "Can your team support that this week?" is polite but slightly soft for a quality hold situation. A quality engineer typically owns the hold decision and informs production of the plan.
> 
> **Try this instead:** "I understand the GM order is tight. To limit the impact, I propose we hold just the batches from Monday to Wednesday and run 100% inspection on those first. If the data confirms the supplier link by Thursday, we can decide whether to expand or release. I'll own the inspection protocol and report back to you daily."
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
> Yeah, so I need to flag something. The integration testing is taking longer than we estimated, and honestly? We're looking at a two-week slip. That puts us past the deadline you have with your client.
> 
> [We're at Tesla's Austin office. You're the internal PM running this weekly sync. Sam is the vendor lead. The goal: understand the delay and agree on a path forward.]
> 
> What's our move here?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's the third-party API we depend on for real-time vehicle data. Their sandbox environment keeps timing out, so our team can't run the full test suite. We raised a ticket two weeks ago, but their support is slow.
> 
> What would help? Dedicated access to their staging server instead of sandbox, and honestly, someone from your side to escalate with the API vendor. Your contract with them carries more weight than ours. If we get that by end of week, we might recover a few days, but not the full two weeks.

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, from the marketing team. I'll be helping with the launch plan once we lock the direction.
> 
> [We're at Apple in Cupertino. You're the lead PM for a new fitness app feature. The team has exchanged emails for two weeks about user research findings. Today's goal is to agree on the top three features for the MVP. You'll send the prioritized list to the engineering lead by next Tuesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> [You can describe a different situation anytime.]
> 
> Hi, do you have a minute? I wanted to check in on the Phoenix rollout.
> 
> [We're at Apple in Cupertino. You report to David, the senior director for product operations. The Phoenix project — a new supplier onboarding system — was due to go live on March 15. You've just learned from the vendor that integration testing will take two weeks longer than planned. David has a quarterly review with the VP next Thursday and is counting on Phoenix being on track.]
> 
> I saw the green status in yesterday's report. What's going on?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David leans back, frowning slightly.
> 
> Two weeks. That's a problem — I told the VP we'd be live by March 15. What kind of bugs are we talking about, and how much time does your recovery plan actually save us?
> 
> [He's concerned but listening. What's your plan?]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to check in about the Q3 budget. The product team is asking for more headcount, and I need to know what percentage of the engineering budget we can actually allocate to them. What's your take on a fair split?"
> 
> [You're a team lead at a mid-sized software company in Austin. David is your manager. The product team wants 40% of your engineering budget for new hires, but you need to protect resources for infrastructure work. Your goal: negotiate a proportion that works for both sides.]
> 
> [Hint: state your position clearly and bring data if you have it.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> Hey, come on in. I wanted to check in before the weekend—how's everything looking on your end?
> 
> [You're a data analyst at a mid-sized fintech company in Chicago. Linda is your manager, three months in the role. She has a direct but fair style. Goal: get her help prioritizing three urgent projects without undermining yourself.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board review on the 22nd, so that one can't move. Between the dashboard migration and the pricing analysis, which one feels like it would slip first if you had to choose?
> 
> [Hint: you could say something like "The pricing analysis has the most unknowns, so it would benefit from more time, and delaying it by two weeks wouldn't miss a client deadline."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly with specifics and proposed a collaborative solution.
> 
> **How it went:** Linda engaged immediately because you came with facts, not complaints, and you invited her into the decision rather than dumping the problem on her.
> 
> **What worked:** "I can finish two well" — this shows ownership and sets a realistic boundary without sounding overwhelmed. "Could we decide together which one can move to next month?" — this frames the ask as partnership, not inability.
> 
> **What to improve:** You didn't name the business impact of each option or suggest which one to delay. Linda had to ask you to choose first, which puts the work back on her.
> 
> **Also worth noting:** "Finish two well" is strong phrasing — it signals quality matters to you.
> 
> **Try this instead:** "I can deliver two of these with full quality. My view is the pricing analysis has the most unknowns, so pushing it to next month carries the least risk — no client deadline would be missed. Does that work, or is there another factor I should consider?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · FLAKY

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
> Hi, thanks for making the time. I'm Priya, VP of Operations at Meridian Logistics. We just signed with your platform last month, and honestly, we're still figuring out exactly how it fits into our workflow. Our team is spread across three warehouses, and right now everything runs on spreadsheets and WhatsApp groups—it's messy.
> 
> [Meridian Logistics, Chicago. You're the CSM, first discovery call. Goal: understand Priya's operational pain points and priorities before implementation.]
> 
> What should we start with?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✗ words ≤ 120: 122 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Good opening—let me answer that.
> 
> Right now, our biggest headache is inventory visibility. I have 200 SKUs moving across three locations, and my warehouse managers update a shared spreadsheet every evening. By the time I see a stockout, it's already happened. Last quarter we lost a $40,000 contract because we promised inventory we didn't actually have.
> 
> We've tried Slack alerts and even a basic barcode system, but nothing talks to each other. I'm hoping your platform gives us real-time stock levels across all sites, and ideally some kind of low-stock alert before we hit zero.
> 
> [She's answered directly. Natural follow-up: dig deeper into one area, or broaden to team/process.]
> 
> What else would you like to know?

**Attempt 2**

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi there, thanks for making the time. I'm Priya, VP of Operations at Northfield Logistics. We finally got the green light to move off our old system, so we're looking at your platform for our three main distribution centers.
> 
> [Northfield Logistics, a mid-size freight company in Chicago. You're the customer success manager from the software vendor. Priya has budget approval but is cautious after a bad experience with a previous vendor. She needs the new system live before their Q4 peak season. Your goal: understand her needs and concerns so you can configure the product correctly.]
> 
> What would you like to know?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 99 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Good question. Right now we're running our dispatch and inventory on a legacy system we built in-house about eight years ago. It worked fine when we had one warehouse, but since we expanded to three centers, the data doesn't sync in real time. That means our planners are calling each other to confirm stock levels, and we still get customer complaints about delayed shipments.
> 
> I'm hoping your platform gives us one view across all three locations, with automated alerts when inventory drops below our reorder points. What does your typical setup look like for a company our size?

</details>
