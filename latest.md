# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-04 11:06 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| C2 Coach starter: first 90 days | 2/2 | 2/2 |
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 | 0/2 |
| D1 Mode switch: Role-play → Coach → back | 2/2 | 1/2 (1 flaky) |
| D2 Background in passing, workplace change, and lessons applied only when they fit | 0/2 | 2/2 |
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 | 2/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **20/24** | **21/24** |

## Runs
- production-1: RED · PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0
- production-2: RED · PASS 10 · FAIL 2 · FLAKY 0 · ERROR 0
- staging-1: RED · PASS 11 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 10:52 UTC

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
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • **Map your place in the organization.** Understand your role in the team, the team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • **Decide your career direction.** Let that direction guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Start with humility.** Your previous success does not automatically mean success here. Be flexible, listen, and avoid being overly aggressive.
> 
> • **Ask questions boldly while you are new.** Learn from coworkers and internal documents.
> 
> • **Focus on learning first, not ratings.** Make a specific learning plan rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining us today. We're looking forward to hearing your plan for the project kickoff.
> 
> [Scene: You're the lead project manager at a mid-sized software company. Your team has exchanged several emails about launching a new customer app. Today's goal is to align everyone on the schedule and main features before development begins. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee. That all sounds clear — we're ready when you are.
> 
> **Course score: 5/5**: You covered all three ICE steps smoothly in one go.
> 
> **How it went:** Great job! You introduced yourself, gave full context with past, present, and future, and set both interaction and detail expectations.
> 
> **What worked:**
> - "Please ask questions anytime, and this will be a detailed discussion" — Expectations: you covered both interaction (ask anytime) and level of detail (detailed discussion) in one natural sentence.
> 
> **What to improve:**
> - Nothing major. One tiny optional addition: saying your name and how long you've been with the team can strengthen the introduction. For example, "I'm Lee, and I've been with the team for two years."
> 
> **Try this instead:**
> "Hi everyone, I'm Lee. I've been with the team for two years and I'm the lead PM for this app launch. I'll be managing the schedule and also the main point of contact for requirements."
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
> I think we should list the traditional coffee first on the new store menu. It stays true to our brand, and customers expect to see it right away when they walk in.
> 
> [Setting: Starbucks headquarters, Seattle. You're a product manager on the store experience team. Bob is your teammate. The team is deciding how to redesign the in-store menu board for the summer rollout. Bob's proposal: lead with traditional hot coffee. Your goal: share your view on what should go first.]
> [Hint: Bob cares about brand identity, but there's also a sales angle you could partly agree with.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to keep the discussion open:
> 
> 1. **Start positive** — partially agree with Bob's concern.
> 2. **State your view** — explain why you disagree, with a specific reason.
> 3. **Keep it open** — ask about alternatives.
> 
> Example:
> &gt; "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> You could also suggest a compromise:
> &gt; "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Once the team decides, move forward together — even if it's not your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the timing concern, but a smaller trial still means extra design and approval cycles we didn't plan for. If we're already stretched, wouldn't that push the whole rollout back?
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
> Use the ICE template in this order:
> 
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – cover past, present, and future:
>    - Past: how you got to this meeting (earlier emails, discussions).
>    - Present: today's topics and goal.
>    - Future: next steps with a clear time ("by next Monday").
> 3. **Expectations** – set the level of interaction and detail:
>    - Interaction: "Please hold questions for the end" or "Feel free to interrupt."
>    - Detail: "We'll stay high level" or "This will get technical."
> 
> Example:
> &gt; "Hi everyone, today we're kicking off the new website launch. I'm Danny, the lead PM. I'll manage the schedule and be the main contact for requirements. We've had emails back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned. We need sign-off from the US team by next Monday. Please hold questions until the end — we have a lot to cover and not much time."
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
> I hear you on food safety, but washing eggs removes the natural protective coating. That means they spoil faster and we risk more returns from our retail partners. We could save on grading labor, but I'm not sure the tradeoff is worth it.
> 
> [You are a PM at Google, and Jordan is your operations teammate. The company is exploring a new automation line for egg handling. Jordan wants to skip the wash step to preserve the natural bloom on the shell. You disagree. Goal: reach a decision on the process together.]
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
> Use the ICE template to open the meeting:
> 
> 1. **Introductions** – state the topic, your name, role, and contribution.
> 2. **Context** – past, present, future:
>    - Past: how you got here (data collection, earlier tests, stakeholder requests).
>    - Present: today's goal (review model performance, decide on deployment).
>    - Future: next steps with a deadline (pilot timeline, report due).
> 3. **Expectations** – set interaction and detail level.
> 
> Example for your situation:
> &gt; "Hi everyone, today we're reviewing the ML model for egg quality detection. I'm the PM for this project, and I'll coordinate between the data science team and operations. We've collected labeling data for three months and ran two test versions. Today we need to decide if the current accuracy is good enough for a farm pilot. Next, we'll present a go/no-go recommendation to leadership by Friday. This will stay high level — we'll dig into precision metrics in a follow-up. Please save detailed questions for the end."
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
> Open meetings with the **ICE template** in this order:
> 
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, previous discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a sense of time ("by next Monday")
> 3. **Expectations** – how people should take part:
>    - *Interaction:* "please hold questions for the end" or "feel free to interrupt"
>    - *Detail:* "we'll stay high level" or "this will get very technical"
> 
> Example opening:
> &gt; "Hi everyone, today we're kicking off the new packaging line project. I'm Alex, the PM, and I'll manage the schedule and be your main point of contact. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the timeline, and call out risks, so we're aligned before work starts. We need sign-off from the operations lead by Friday so we can begin next Monday. We have a lot to cover, so please hold questions until the end."
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
> I hear you on keeping the natural coating, but our retail partners are pushing back hard. Three major chains have flagged dirty shells as their top customer complaint this quarter.
> 
> [You are a PM at Google in Mountain View, discussing a product decision with your coworker Jordan, a senior product manager. The goal is to agree on whether to add an automated shell-cleaning step to your egg-handling process before packaging.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" /&gt;
> 
> This is covered in the course:
> 
> Open meetings with the **ICE template** in this order:
> 
> 1. **Introductions** – one or two statements about the meeting topic, then your name, role, and how you will contribute.
> 2. **Context** – why you're meeting, in three parts:
>    - *Past:* how you got here (earlier emails, previous discussions)
>    - *Present:* today's topics and goal
>    - *Future:* next steps, with a sense of time ("by next Monday")
> 3. **Expectations** – how people should take part:
>    - *Interaction:* "please hold questions for the end" or "feel free to interrupt"
>    - *Detail:* "we'll stay high level" or "this will get very technical"
> 
> Example opening for your ML model discussion:
> &gt; "Hi everyone, today we're reviewing the ML model for egg quality grading. I'm the PM for this project, and I'll coordinate between the data science team and operations. We've been testing the prototype for three weeks. Today we'll look at accuracy rates, compare them to manual grading, and decide whether to expand the pilot to the second facility. We need a go or no-go decision by Thursday so we can plan next quarter's budget. This will get technical at times, so please jump in if anything is unclear."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> Thanks for making time today. I need to be direct with you — we've had three shipments arrive late this month, and it's costing us. Our production line was down for half a day last week because of it. What is your team doing to fix this?
> 
> [Scene: You are an account manager at a logistics company. Karen is the operations director at your client, a mid-sized manufacturer in Chicago. She has called this meeting because of repeated late deliveries. Your goal is to address her concerns, explain what happened, and agree on a clear next step.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, I'd like to hear where we stand on the mobile app launch. What's the latest on our timeline and any blockers?
> 
> [At Apple in Cupertino, you are the PM leading the mobile app launch. Your team lead Linda has asked for a weekly status update in your team stand-up. Goal: give a clear, concise update on progress, risks, and next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see the payment API delay is putting pressure on the beta. Moving the beta or launching without payments are both big decisions. What does the team think, or do you have a preference?
> 
> [At Apple in Cupertino, you are the PM leading the mobile app launch. Your team lead Linda has asked for a weekly status update in your team stand-up. Goal: give a clear, concise update on progress, risks, and next steps.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. I'm seeing the numbers too — defect rate on Line 2 went from two percent to almost five percent since Monday. Before we alert the customer, I want to understand what's happening. What do you think is driving the spike?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. Goal: discuss the cause of the defect jump on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 72 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "I can support a short-term hold, but a full 100% inspection is going to slow us down significantly. We're already behind on the Q3 orders. Is there a way to narrow it down — maybe just the batches from the new supplier's first delivery, or a specific cell type?"
> 
> [Hint: you could say "The first two deliveries from the new supplier are the highest risk, so I'd like to start there."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific action, and invited collaboration — strong general workplace communication.
> 
> **How it went:** Great job getting straight to the point with data and a concrete request. You handled Marcus's concern professionally and kept the discussion open.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — you stated the purpose early with a clear reason and example, which builds credibility immediately.
> 
> **What to improve:**
> - When Marcus pushed back on scope, you didn't yet narrow your request or offer a compromise. The general checklist values handling concerns calmly and closing with a clear next step and time.
> - You could also have asked Marcus for his input on risk level before proposing the full inspection, which would strengthen the collaborative tone.
> 
> **Also worth noting:** "Can your team support that this week?" is polite, but slightly soft. In urgent quality situations, "I need your team's support on Line 2 starting tomorrow — can you confirm capacity?" is more direct while still respectful.
> 
> **Try this instead:**
> "The first two deliveries from the new supplier are the highest risk. I'd like to hold those batches and do a full inspection on them first. If the defect rate stays high, we'll expand from there. Can your team cover Line 2 for this starting tomorrow, and should we check in again on Thursday?"
> 
> Want to continue this conversation, try again, or pick…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you want to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now the QA team has flagged some issues we didn't catch earlier.
> 
> [You're a project lead at your company, meeting with Sam, a vendor project manager. The conversation is about a delayed deliverable. Goal: address the delay professionally and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is that the third-party API we depend on changed their data format without warning, so our integration broke in three places. We had to rebuild our mapping layer from scratch. To stay on schedule, we'd need either an extra two weeks to finish properly, or your team could take on the final round of user acceptance testing so our QA can stay focused on the fix.
> 
> [Hint: you could say "Two weeks would push us past the commitment we made to leadership. Let's look at what we can do together."]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. We're all here and ready when you are.
> 
> [You are the lead PM for a new mobile app launch at your company. Over the past two weeks, the team has exchanged emails about requirements and timing. Today's goal is to align everyone on the schedule and main features before development begins. The next step is to share a timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, and I need to understand the impact before we talk recovery. Which milestones are affected, and how much of that time do you think you can realistically get back?
> 
> [You are a senior engineer reporting to David, your engineering manager at a software company. Your team is building a new customer dashboard, and the original launch date was promised to the sales team for a client demo. The conversation goal is to align on a revised timeline and next steps.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining us today. We're all set to hear your plan for the project kickoff.
> 
> [You are the lead project manager for a new mobile app launch at your company. Over the past two weeks, your team has exchanged several emails about requirements and timeline. Today's goal is to align everyone on the schedule and key features before development begins. The next step will be to send a written summary to leadership for sign-off by next Monday.]
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

> Thanks for flagging this early. Two weeks is significant — walk me through what you're seeing in testing and where you think we can make up time.
> 
> [You are a senior engineering manager at Microsoft. Your direct report, a project lead, needs to update you that their software release will be delayed. The conversation goal is to understand the delay, assess the recovery plan, and agree on next steps.]
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
> "Hey, I need to talk to you about the Q3 budget. Marketing wants to shift forty percent of the engineering sprint time to a new campaign launch, and they want it locked in by Monday. I told them I'd check with you first."
> 
> [You are a senior engineer at a tech company. David is your manager. The conversation is about protecting your team's sprint capacity while staying cooperative.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> "Thanks for setting this up. I wanted to check in on your plate right now—how are the three projects going?"
> 
> [You're a data analyst at a tech company. Rachel is your manager. She has just opened your weekly 1:1. Goal: ask for help prioritizing three urgent projects without sounding overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "That makes sense. The Q4 forecast has a hard deadline because leadership reviews it on the 15th. The dashboard migration was already pushed once. What makes you think the pricing analysis could wait?"
> 
> [You're a data analyst at a tech company. Rachel is your manager. She has just opened your weekly 1:1. Goal: ask for help prioritizing three urgent projects without sounding overwhelmed.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, proposed a tradeoff, and invited collaboration—strong use of the general workplace checklist.
> 
> **How it went:** Great job staying solution-focused and confident. You showed you could handle the work and asked for partnership, not rescue.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This states your capacity honestly and invites joint decision-making, which shows ownership while asking for help.
> 
> **What to improve:**
> - You didn't mention the business impact of each project to help Rachel prioritize. Adding why one matters more than another would strengthen your case.
> - You agreed somewhat quickly that two could finish "well" without confirming if all three were actually possible with more resources or support.
> 
> **Also worth noting:** "I can finish two well" is clear and confident. A slightly softer version like "I want to make sure I deliver quality on the two most critical ones" keeps the same strength with slightly more collaborative tone.
> 
> **Try this instead:**
> "The Q4 forecast drives next year's budget, the dashboard migration unblocks the sales team, and the pricing analysis supports a decision that's still two months out. Given that, could we move the pricing analysis to January so I can deliver the first two with full quality?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="Customer success manager" learner_industry="software" learner_industry_source="stated" /&gt;
> 
> &lt;character name="Pat" gender="female"/&gt;
> 
> Thanks for making the time. We're about three weeks away from our go-live date, and honestly, I'm a little worried about how much of our existing workflow we'll need to change. Our sales team has been using spreadsheets and a basic CRM for years, and they're used to working a certain way.
> 
> [You're a customer success manager meeting Pat, VP of Sales at a mid-sized logistics company in Chicago. Pat's team is switching to your software. Goal: understand her concerns and needs before implementation.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: Customer success manager. Industry: software.
- ✓ no feedback
- ✓ words ≤ 120: 56 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Pat: Good questions. Right now, our sales reps are spending maybe two or three hours a week just moving data between spreadsheets and the old CRM. It's manual, it's error-prone, and our forecasting is basically guesswork. My goal is to cut that busywork in half and get forecasts I can actually take to the board.

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 11:01 UTC

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
> Use your first 90 days to learn, ask questions, and understand your new environment.
> 
> • **Map your place in the organization.** Understand your role in the team, your team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • **Decide your career direction.** Let that direction guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Stay humble and learn proactively.** Your past success does not guarantee success here. Be flexible, listen, and avoid being overly aggressive. Ask questions boldly while you are new, and learn from both coworkers and internal documents.
> 
> • **Set SMART goals.** Make them Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague intentions with concrete outcomes, quantities, and deadlines.
> 
> • **Introduce yourself clearly.** When meeting coworkers, explain when you started, where you are based, and your role and team.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> What role are you starting in? I can tailor the advice to your situation.

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining us today. We're all looking forward to getting this project moving.
> 
> [Your team at Apple is launching a new mobile app feature. You are the lead project manager, and this is the first kickoff meeting with the design and engineering teams. Over the past week, there have been several email threads about requirements and timing. Today's goal is to align everyone on the scope and schedule. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, Lee. That all sounds clear — looking forward to working with you on this.
> 
> [All three ICE steps are covered: introduction with name, role, and contribution; context with past, present, and future; and expectations for both interaction and detail. Want to try again without cues, doing all three steps in one go?]
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and in order.
> 
> **How it went:** Great job — your opening was professional and complete, and the team knows exactly where things stand.
> 
> **What worked:**
> - "Please ask questions anytime, and this will be a detailed discussion" — this sets both expectations in one smooth line: level of interaction (questions welcome) and level of detail (technical depth). That shows strong control of the meeting.
> 
> **What to improve:**
> - Nothing major. If you wanted to add even more clarity, you could separate the two expectations into two sentences, but combining them is also natural.
> 
> **Also worth noting:**
> - "A lot of emails" is fine, but "quite a few emails going back and forth" sounds slightly more standard for a kickoff.
> 
> **Try this instead:**
> - "Over the past two weeks, we've had quite a few emails going back and forth about the main features. Today we'll agree on the schedule and confirm the scope, and the next step is to send a timeline to leadership by next Friday. Please feel free to ask questions anytime — this will be a detailed discussion."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7P…

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
> [Setting: Starbucks headquarters, Seattle. You are a product manager on the store experience team. Bob is your teammate. The goal: decide how to order items on the updated store menu before the summer launch. Bob's key point you could agree with: staying true to the brand's traditional coffee identity.]
> 
> ---
> 
> Want to try again on Hard? Bob will push back a bit more.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree politely:
> 
> 1. **Start positive** by partially agreeing with the other side. Show you understand their perspective:
>    - "I understand that we want to stay true to our traditional coffee brand..."
> 
> 2. **State your own opinion and why you disagree**, with a specific reason:
>    - "...but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> 3. **Keep the discussion open** by asking about alternatives:
>    - "Are there other alternatives?"
> 
> This approach encourages discussion rather than shutting it down. Once the team makes a decision, move forward together — it's OK to disagree during the discussion, but commit after the decision.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 79 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on wanting to test first, but a smaller trial still means building a separate menu system and training staff on two versions. That adds cost and delays the summer launch by at least a month. What if we run a digital A/B test in a few stores instead? We could get data in two weeks without changing the printed menus.
> 
> [Hint: you could say "I can see why staying true to the brand matters, but..."]

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
> 2. **Context** — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. **Expectations** — level of interaction (e.g. "hold questions until the end") and level of detail (e.g. "this will stay high level").
> 
> Example:
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, lead PM. I'll manage the schedule and be the point of contact for requirements. We've had emails back and forth about this kickoff. Today we'll walk through requirements, confirm the schedule, and call out risks, so everyone is aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions for the end."
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
> "I hear you on food safety, but washing eggs strips away the natural protective coating. That leaves the shell porous and actually increases the risk of bacteria getting in. The USDA already requires washed eggs for commercial sale here, so if we're selling in the US market, we have to comply. What alternatives are you thinking?"
> 
> [You and Jordan are PMs at Google in Mountain View. Your team is deciding on standards for a new smart farming data platform. Jordan thinks unwashed eggs are safer for shelf life. You need to agree on a recommendation for the egg farming clients.]
> 
> [You can describe a different situation anytime.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models at work","industry_source":"stated"}
- ✗ sandwich steps &lt; 2: found partially agree, keep it open
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/&gt;
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** when you disagree with a coworker:
> 
> 1. **Start positive** — partially agree with their view ("I understand why you'd want…").
> 2. **State your opinion with a specific reason** — use facts or data.
> 3. **Keep it open** — end friendly and ask about alternatives.
> 
> Example for your ML model discussion:
> &gt; "I understand that a simpler model is easier to maintain, but our data shows that image recognition accuracy drops by 15% with the basic approach. That means more manual grading and higher labor costs. Could we test a hybrid approach first?"
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
> 2. **Context** — why you're meeting, in three parts:
>    - *Past*: how you got here (earlier emails, discussions, or work done).
>    - *Present*: today's topics and goal.
>    - *Future*: next steps, always with a sense of time ("by next Monday").
> 3. **Expectations** — how people should take part:
>    - *Interaction*: "please hold questions for the end" or "feel free to interrupt."
>    - *Detail*: "we'll stay high level" or "this will get technical."
> 
> Example opening:
> &gt; "Hi everyone, today we're kicking off the new layer management system. I'm Alex, lead PM for this project, and I'll manage the schedule and be your main point of contact for requirements. We've had a lot of emails back and forth over the past two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We hope to get written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
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
> I hear you on food safety, but washing eggs actually removes the natural protective coating. That leaves pores open to bacteria, which is why most countries don't do it. Wouldn't keeping the bloom intact be safer overall?
> 
> [Setting: Google, Mountain View. You are a PM on the sustainability team. Jordan is a product analyst on your team. The team is deciding whether to recommend washed or unwashed eggs for the new corporate catering program. Goal: reach a team decision.]

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
> Use the **ICE template** to open your ML model discussion:
> 
> 1. **Introductions** — state the topic, then your name, role, and contribution.
> 2. **Context** — past, present, future:
>    - *Past*: how you got here (data collection, previous model performance, or stakeholder requests).
>    - *Present*: today's goal (e.g., review model accuracy, decide on features).
>    - *Future*: next step with a deadline (e.g., "deploy by end of quarter").
> 3. **Expectations** — interaction level and depth of detail.
> 
> Example for your situation:
> &gt; "Hi team, today we're reviewing the ML model for egg quality grading. I'm the PM for this project, and I'll coordinate between the data science team and operations. Over the past month, we've collected labeled images from three farms and trained a first version. Today we want to review accuracy results and decide whether to expand to all twelve locations. Our target is to pilot live grading in Barn 4 by March 15. This will be a technical review, so please save broader business questions for the last ten minutes."
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
> Thanks for making time today. I need to be direct with you — we've had three late deliveries in the past month, and it's costing us. Our production line shut down twice. What is your team doing to fix this?
> 
> [Scene: A quarterly business review at your office in Chicago. You are the account manager for a mid-sized logistics firm. Rachel is the supply chain director for a manufacturing client. Goal: address her concerns, explain what happened, and agree on next steps.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch this week? I'm especially curious about any blockers we should know about.
> 
> [Scene: You're the PM leading a weekly status meeting for your mobile app launch at Apple in Cupertino. Linda is a senior engineer on your team. The goal is to share progress, flag risks, and align on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> That's helpful, thanks. The payment API delay is definitely a concern for us on the engineering side. If we move the beta date, how much extra time are you thinking? And if we launch without payments, what's the plan for adding them later—would that push our full launch too?

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. I'm seeing the numbers too — reject rate on Line 2 is up to 4.2% this week, nearly double our target. Walk me through what your team has found so far."
> 
> [Scene: Your company supplies EV battery cells to a major automaker. You are the quality engineer; Marcus is the production manager. Goal: discuss the spike in defective cells on Line 2, agree on immediate containment and root-cause next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 50 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "That jump lines up with the supplier switch — we moved to the new vendor on Monday. Holding the batches makes sense, but full inspection means pulling people off Line 3, and we're already behind on next week's order. How long are you thinking we'd need to run 100% check?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose clearly, gave a specific reason with data, proposed a clear next step, and asked for support — strong general checklist coverage.
> 
> **How it went:** Great job — you came in with facts, a concrete containment plan, and directly asked for what you needed.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the purpose with a clear cause-and-effect reason and specific data, which builds credibility and helps Marcus act fast.
> 
> **What to improve:**
> - You didn't give Marcus a timeframe for the 100% inspection, so he can't weigh the tradeoff against his Line 3 schedule. Add a specific duration or review point.
> - You could also acknowledge his pressure before asking for resources: this shows you understand his constraints and makes the request easier to accept.
> 
> **Also worth noting:** "Can your team support that this week?" is clear, but slightly abrupt after his pushback. A softer bridge like "I know this is a big ask given your schedule" would land better.
> 
> **Try this instead:**
> "I know this pulls resources from Line 3, which is tight. I'm proposing 100% inspection for 48 hours while we run a root-cause analysis with the new supplier. If we find nothing by Thursday noon, we can revisit. Does that timeline work for your team?"
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
> "Yeah, so about that timeline — we're looking at a possible slip. The integration with your API is taking longer than we scoped. We might need another two to three weeks to hit the quality bar we agreed on."
> 
> [You're a project lead at your company in a weekly status call with Sam, your main vendor contact. The goal is to address the delay without damaging the relationship or blindly accepting the new timeline.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> "It's mainly the authentication layer — your API docs had a few gaps we didn't catch during the technical review, so our senior engineer had to spend extra time reverse-engineering the flow. To stay on schedule, we'd need either a dedicated technical contact from your side for the next ten days, or we push the deadline to mid-July."
> 
> [Hint: you could say "Let's look at what we originally agreed..." or "Before we talk about extending, I want to understand if there's another way."]

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
> [You're the lead PM at Apple, kicking off a project to redesign the company's mobile app homepage. Over the past week, there have been several email threads between the design and engineering teams about priorities. Today's goal is to agree on the feature set and timeline before development begins. The next step will be to share a finalized roadmap with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, though. Walk me through what you're seeing in testing and how much of that time you think you can recover.
> 
> [You're a senior engineer at Apple. Your manager David asked for a status update on the new mobile app homepage redesign. The original deadline to hand off to the marketing team is in three weeks. You just learned from QA that cross-browser testing uncovered more compatibility issues than planned.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining, everyone. I'm Sarah, the marketing lead on this project. We're looking forward to hearing how the team is going to approach this launch.
> 
> [Your company is Apple. You're the lead PM for a new fitness app feature. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and main risks before development begins. The next step is to share a timeline with leadership by next Friday.]
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
> Two weeks? That's a significant slip. Walk me through what you're seeing in testing and what your recovery plan looks like.
> 
> [You're a PM at Apple. David is your engineering director. The project is a new fitness app feature originally scheduled to ship in three weeks. The conversation goal is to align on realistic delivery and what resources or scope changes you need.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> Hi, got a minute? I wanted to talk about the workload on the new client dashboard project. The team is already at capacity with the three active sprints, and I just got a request to add real-time analytics by the end of the month. I'm wondering if we could get another frontend developer assigned to us, at least through the release.
> 
> [You are a team lead asking your manager, David, for additional resources on a project. He has budget concerns but wants to help if the case is strong.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for flagging this. I've noticed you've been pulled into the customer churn model, the Q3 dashboard, and the ad-hoc sales request all in the same week. Before we dive in—walk me through what you're seeing on your end.
> 
> [You're a data analyst meeting with Rachel, your manager at a tech company in San Francisco. The goal: ask for help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you laying that out clearly. The Q4 forecast is locked in for the board meeting on the 22nd, so that one can't shift. Between the dashboard migration and the pricing analysis, what's your read on which one would hurt more if it slipped?
> 
> [Hint: you could say "The pricing analysis feeds into the forecast, so delaying it would create a downstream problem."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific tradeoff, and invited collaboration—strong use of the general checklist for difficult conversations.
> 
> **How it went:** Great job staying solution-focused and confident. You framed the ask as a joint decision, not a complaint about workload.
> 
> **What worked:**
> - "I can finish two well. Could we decide together which one can move to next month?" — This states your capacity honestly and invites your manager into the prioritization. It shows "handles concerns calmly" by offering a concrete option rather than just dumping the problem.
> 
> **What to improve:**
> - You named three projects but didn't briefly flag which one you think is most critical or most at risk. Adding your recommendation would strengthen your position and show you're driving the decision, not just passing it upward.
> - The pricing analysis actually connects to the Q4 forecast—you could have noted that dependency to make your case stronger.
> 
> **Also worth noting:** "I can finish two well" is clear and confident. A slightly softer alternative like "I want to make sure I deliver quality on the two most time-sensitive ones" frames it as care for outcomes rather than capacity limits.
> 
> **Try this instead:** "I can deliver two of these with full quality this month. My view is the Q4 forecast and the pricing analysis are linked, so I'd suggest we keep those together and move the dashboard migration to early next month. Does that work, or is there anothe…

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="Customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for making the time. We're about six months into using your platform, but honestly, the rollout has been slower than we expected. My team is still doing a lot of manual work on the side, and I'm not sure we're getting the value we were promised.
> 
> [You are a customer success manager at a software company. Priya is the operations director at a mid-sized retail company in Chicago. She agreed to this call to discuss why the product rollout is behind schedule and what her team actually needs. Your goal is to understand her situation and agree on clear next steps.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: Customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 54 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, our inventory team is tracking stock across three warehouses in separate spreadsheets. We bought your platform to centralize that, but the data migration got complicated and my team fell back to their old process. What I'm hoping is that we can finally get one source of truth without them working double hours.

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 10:56 UTC

**PASS 11 · FAIL 1 · FLAKY 0 · ERROR 0**

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
| S8 Discovery: customer success exploring client needs | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C2 Coach starter: first 90 days · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 7 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Your first 90 days are for learning, not proving. Focus on these areas:
> 
> • **Map the organization** — understand your role, your team's role, the department's role, and the company's place in its market.
> 
> • **Set your direction** — decide where you want your career to go. Let that guide what you learn and which opportunities you pursue.
> 
> • **Stay humble and listen** — previous success doesn't guarantee success here. Avoid being overly aggressive.
> 
> • **Ask questions boldly** — while you're new, people expect it. Learn from coworkers and internal documents.
> 
> • **Make a learning plan** — focus on learning first, not performance ratings.
> 
> • **Introduce yourself clearly** — share your start date, where you're based, your role, and your team.
> 
> • **Find mentors actively** — don't wait to be assigned. Invite people for coffee and build relationships with decision makers.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi there—looking forward to this. I saw the calendar invite but didn't catch much detail beyond 'Project Hippo kickoff.'"
> 
> [You're the lead PM at Tesla, launching a new in-car app. The team has exchanged emails for two weeks. Today's goal is to align on requirements and schedule. Your next step is to get sign-off from the US team by next Monday. Sarah is a friendly engineer on your team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee—that's really helpful context. Two weeks of emails, so it's good to finally get everyone in one place. And Friday deadline for leadership keeps us moving."
> 
> [Now set expectations for the meeting.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi, I'm Sarah. I'm on the engineering team and I'll be working on the mobile app features. Looking forward to getting started.
> 
> [We're at Tesla in Palo Alto. You're the lead project manager for a new in-car navigation app. The team has exchanged emails for two weeks about requirements and design. Today's goal is to align on the schedule and main features before development begins. The next step is to get sign-off from the US leadership team by next Monday. You're leading this kickoff meeting with five people in the room and two joining remotely.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, Lee — good to have that background. Two weeks of emails definitely built up, so it's helpful to get everyone in one room. I'm sure the remote folks feel the same.
> 
> [Now give the context: the past, the present, and the future.]

### D1 Mode switch: Role-play → Coach → back · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list the traditional coffee drinks first on the new menu redesign. It keeps us true to our brand roots, and customers who come in for a classic espresso experience will find what they want right away.
> 
> [At Starbucks headquarters in Seattle, you are a product manager on the menu team. Bob is a senior marketing analyst. The team is deciding how to order drinks on the upcoming store menu refresh. Bob's idea has a real strength: brand consistency. It also has a real weakness: iced frappuccinos are the summer best sellers. Your goal: disagree with Bob's idea using the feedback sandwich method.]
> 
> Hint: you can honestly agree that brand consistency matters, or that traditional coffee has loyal customers.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> • **Partially agree, honestly** — show you see their perspective
>   - "I understand that we want to stay true to our traditional coffee brand."
>   - "It makes sense that loyal customers expect to find classic options easily."
> 
> • **State your own opinion with a reason** — use facts or data
>   - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives
>   - "Are there other ways to highlight both?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Once the team decides, move forward together — even if it wasn't your idea.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 87 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on the trial idea, but I'm not sure I follow — are you worried about the time to redesign the whole menu, or something else? A smaller trial could work, though it might not give us real sales data if customers don't see the full menu in context.
> 
> [Hint: you could say something like "I understand that brand consistency matters, but our iced frappuccinos are our best sellers in summer. Listing them first would likely increase sales. Could we look at a seasonal layout instead?"]

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

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
> - One or two sentences on the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Feel free to interrupt"
> - Level of detail: high-level or technical
> 
> **Example:**
> &gt; "Hi everyone, today we're kicking off Project Hippo. I'm Danny, the lead PM, and I'll manage the schedule and be the point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We need written sign-off from the US team by next Monday. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [RP]** "I'm a PM at Google and discussing whether or not we should wash eggs with a coworker."
Profile sent: Role: PM. Industry: Egg farming.
- ✓ profile: company contains any of ["google"]: saved {"role":"PM","company":"Google","industry":"Egg farming","goal":"discuss whether or not to wash eggs with a coworker","industry_source":"inferred"}
- ✓ character line: present
- ✓ sandwich steps &lt; 2
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> &lt;profile learner_role="PM" learner_company="Google" learner_industry="Egg farming" learner_industry_source="inferred" learner_goal="discuss whether or not to wash eggs with a coworker"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> "We should definitely start washing the eggs before they go to packaging. The retail team keeps getting complaints about dirt and feathers on the shells, and clean eggs just look more professional on the shelf."
> 
> [You're both product managers at a vertically integrated egg company. Maya is on the operations side. She wants to introduce an egg-washing step to the supply chain. Your role is to evaluate the impact and decide together.]
> 
> What do you think?

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming (guessed from the company). Learning goal: discuss whether or not to wash eggs with a coworker.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","goal":"discuss ML models with a coworker","industry_source":"stated"}
- ✓ sandwich steps &lt; 2: found keep it open
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models with a coworker"/&gt;
> 
> This depends on what you're trying to do in the conversation. A few common situations:
> 
> **If you're explaining your ML work to a non-technical colleague:**
> - Start with the business problem, not the model type
> - Use one comparison they know ("Like how we sort eggs by size, but automated")
> - Mention one clear impact: speed, cost, or accuracy
> - Offer to go deeper only if they ask
> 
> **If you're disagreeing about using an ML model:**
> - Find something you honestly agree with first ("I see why automation would help with scale")
> - State your concern with a specific reason: data quality, maintenance cost, or a past failure
> - Keep it open: "What alternatives have we considered?"
> 
> **If you're asking for resources or time:**
> - State the current state and the gap
> - Name the tradeoff: more accuracy needs more data or more time
> - Ask for time to assess, or offer a smaller first test
> 
> Which of these fits your situation?

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Karen" gender="female"/&gt;
> 
> "Mr. Chen, I need to be direct with you. Three of our last five shipments arrived two days late, and my warehouse team is now questioning whether we can rely on your routes. I'm looking at other providers. What is your team going to do about this?"
> 
> [You're an account manager at a logistics firm. Karen runs operations for a retail client in Chicago. She agreed to this call after sending two complaint emails. Your goal: address her concern, explain what happened, and keep the contract.]
> 
> What do you say?

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Elena" gender="female"/&gt;
> 
> "Hey, thanks for setting this up. I know we're all juggling a lot right now, so let's keep this focused. Where do we stand on the app launch?"
> 
> [You're a PM at a tech company, leading a weekly sync with your project team. Elena is your lead engineer. The app is scheduled to launch in six weeks. Goal: practice giving a clear, structured status update that covers progress, blockers, and next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Thanks for the clarity on where we are. Two weeks on the payment API is significant—who's owning the follow-up with the vendor? And if we did move the beta, what date are you thinking?"
> 
> [You're doing well: purpose early, progress with numbers, a specific blocker, and options framed. Keep going: what decision or next step do you want from the team?]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Rachel" gender="female"/&gt;
> 
> The defect rate on Line 2 jumped from 2% to 7% this week. I need to know if we're holding shipments or releasing them with extra screening. My team is already working Saturday to keep up.
> 
> [You're a quality engineer at your EV battery company. Rachel is the production manager. She needs a decision today because a truck is scheduled to leave at 6 PM.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Rachel crosses her arms and looks at the schedule on her tablet.
> 
> "Four percent is already above our customer limit. If we hold everything from this week, that's 12,000 cells sitting in the warehouse. My weekend crew can handle extra screening, but I need to know—how long until you confirm the cause? The customer delivery is Tuesday, and if we miss it, we're looking at a $200,000 penalty."

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the problem clearly, proposed a specific action, and asked for support with a time constraint.
> 
> **How it went:** Strong opening with data and a concrete plan; Rachel engaged with the real tradeoff instead of pushing back hard.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — you named the problem, your proposed solution, and the condition for ending it, all in one sentence. This is direct and actionable.
> 
> **What to improve:** You didn't give Rachel a timeline for confirming the cause. She had to ask, and in a real situation that delay costs you leverage. Also, "Can your team support that this week?" is a bit soft — you're asking permission rather than aligning on a shared need.
> 
> **Also worth noting:** Leading with the supplier change as the likely cause helped focus the conversation, but be ready if Rachel asks how sure you are before she commits her weekend crew.
> 
> **Try this instead:** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of cells. I need three business days to confirm the cause with the new supplier. Can your weekend crew handle the extra screening through Tuesday so we protect the customer delivery?"
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
> Yeah, so I wanted to flag this before we get too far into the rest of the agenda. We're looking at a possible delay on our end — maybe two weeks past the deadline we agreed on. It's not certain yet, but I didn't want to spring it on you last minute.
> 
> [You're a project manager at your company, meeting with Sam, a vendor account lead. The call is about a software integration project. Sam is being cautious but also testing whether you'll push back or accept the delay easily.]
> 
> What does this mean for the overall timeline on your side?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> It's mainly a staffing gap — two of our senior engineers got pulled onto another client project that got escalated. We're backfilling now, but the new people need about ten days to get up to speed on your codebase.
> 
> What would help most is if we could get your technical lead on two or three knowledge-transfer sessions this week. That would cut the ramp-up time in half. Otherwise we're looking at that slip to mid-July.
> 
> [Is that something you can commit to, or do you want to explore other options?]

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, glad you could all make it. I'm Sarah, I'll be handling the design side of this project.
> 
> [This is a kickoff for a new company app at Tesla in Austin. You're the lead project manager running this meeting. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on schedule and features. The next step is to get sign-off from the US leadership team by next Monday so development can start.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got a minute? I wanted to check on the timeline for the GPS accuracy project. The integration testing date is coming up fast, and I need to give the leadership team an update this afternoon.
> 
> [This is at your company. You're a project lead meeting with David, your manager. The GPS algorithm project was supposed to finish development in three weeks, with integration testing starting right after. You've just learned from the engineering team that the work will be two weeks late. David needs to report to leadership today and is expecting good news.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks? That's a problem. The leadership team is expecting us to hit the original date, and I've been telling them we're on track. What kind of bugs are we talking about, and how much of that two weeks can you actually recover?
> 
> [He sounds concerned but not angry. He's waiting for specifics before he decides how to present this upward.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, quick favor — I need you to jump in on the Q3 report. The numbers are messy and I promised Finance we'd have it Monday morning. Can you take it from here?"
> 
> [At Tesla's Austin office, you are a senior analyst on the data team. David is your manager. He just dropped this on you at 4 PM Friday. The original plan was for him to handle the report himself. You want to ask for a proportion — either split the work, get someone else involved, or adjust the deadline. The conversation goal is to negotiate a fair share without simply saying yes or no.]
> 
> What do you say?

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Priya" gender="female"/&gt;
> 
> "Thanks for coming in. I wanted to check in on the Q3 dashboard, the customer churn model, and the ad-hoc request from sales — all three seem active right now. Walk me through where you are on each one."
> 
> [At TechFlow in Austin. You report to Priya, Director of Analytics. Goal: get her help prioritizing three urgent projects without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> "Okay, so Q4 forecast, dashboard migration, pricing analysis — all due this month, and you're confident two of them get done well. That's useful clarity. What I'm hearing is the third one slips, not that it disappears. Before I weigh in, which of the three feels most at risk if it waits, and why?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, proposed a realistic tradeoff, and invited collaboration without sounding overwhelmed.
> 
> **How it went:** Priya engaged immediately because you led with facts and a concrete option rather than just stress.
> 
> **What worked:** "I can finish two well. Could we decide together which one can move to next month?" — this shows ownership, sets a limit, and asks for partnership rather than rescue.
> 
> **What to improve:** You named three projects but didn't briefly state where each stands or what "well" requires. Priya had to ask which is most at risk. A one-line snapshot of each project's status would have let her prioritize faster.
> 
> **Also worth noting:** "Could we decide together" is strong — it frames her as a partner, not a fixer.
> 
> **Try this instead:** "The Q4 forecast needs three more days of data cleaning, the dashboard migration is 60% done and needs testing, and the pricing analysis is waiting on Finance's input. I can deliver two of them fully by month-end. My view is the pricing analysis could move to early November since Finance is the blocker anyway — does that work, or do you see a different priority?"
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
> Hi there, thanks for making the time. I'm Priya — I run operations at a mid-size logistics company. We signed up for your platform last month, and honestly, we're not sure where to start. Our team is still using spreadsheets to track shipments, and the delay in getting real-time updates is costing us deals with retailers who expect faster turnaround.
> 
> [You're a customer success manager at the learner's software company. Priya is a new client at a logistics firm in Chicago. Goal: understand her needs so you can configure the product. She has a pain point and is waiting for your questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 113 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, every morning my team pulls data from three different carriers into spreadsheets, then someone manually checks which shipments are delayed. It takes about two hours, and by the time we spot a problem, the customer has already called us angry. We're losing about fifteen percent of our repeat business to competitors who can give live updates.
> 
> What I need is to stop reacting and start preventing — but I'm not sure what your system can actually see in real time, or how much setup work it'll take from my team.
> 
> [Hint: you could follow up on "preventing" — ask what an ideal early warning looks like, or who needs to see alerts first.]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-04 11:06 UTC

**PASS 10 · FAIL 1 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FAIL | T2: feedback score ≥ 4 (no score) |
| D1 Mode switch: Role-play → Coach → back | FLAKY | passed on rerun; first try: T3: doesn't contain any of ["Reply with a number","Switched to"]; T3: words ≤ 120 |
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
> Use your first 90 days to learn, ask questions, and understand your new environment before trying to prove yourself.
> 
> • Map your place in the organization:
>   - Your role in the team
>   - The team's role in the department
>   - The department's role in the company
>   - The company's place in its market
> 
> • Decide where you want your career to go. Let that direction guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • Be humble and listen. Previous success does not automatically mean success here. Avoid being overly aggressive.
> 
> • Ask questions boldly while you are new. Learn from coworkers and internal documents.
> 
> • Focus first on learning and making a specific plan, rather than worrying about performance ratings.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 Scene card: Start a meeting, then a full ICE opening · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Morning! Looking forward to getting this kickoff rolling."
> 
> [You're a product manager at Tesla, leading your first kickoff for a new mobile app update. The team has been emailing back and forth for two weeks about feature priorities. Today's goal is to align on the core feature set and timeline. Your next step after this meeting is to share a locked timeline with the San Francisco leadership team by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Thanks, Lee — good to have you leading this. Two weeks of emails definitely built up some questions, so getting aligned today will help."
> 
> [Now give the context: the past, the present, and the future.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, thanks for setting this up. I'm looking forward to getting everyone aligned."
> 
> [You're the lead PM at Apple, kicking off a new app project with the US and Shanghai teams. Over the past two weeks, there have been long email threads about requirements and timeline. Today's goal is to confirm the schedule and main features so development can start. Sarah is a supportive engineer on the team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✗ feedback score ≥ 4: no score
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> "Great to have you leading this, Lee. The email threads have been pretty intense, so it's good to get everyone in one place."
> 
> [Now give the context: the past, the present, and the future.]

### D1 Mode switch: Role-play → Coach → back · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "Hey, thanks for making time. I've been thinking about how we structure the new product page for the launch next month. I think we should put the technical specs front and center — detailed charts, benchmark comparisons, the full data sheet. Customers buying enterprise software want to see the numbers first."
> 
> [You're both product managers at Salesforce in San Francisco, preparing for a major platform launch. Bob is a teammate with strong opinions about the go-to-market approach. You disagree with his proposal. Hint: you could honestly agree that enterprise buyers care about data, or that technical credibility matters — but the design team's user research showed decision-makers spend 80% of their time on the benefits and ROI sections, and your last two launches with specs-first pages had 30% lower conversion.]
> 
> Want to try again on Hard? Bob will push back a bit more.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich:
> 
> • **Partially agree honestly**
>   - "I understand that enterprise buyers want to see the technical details."
>   - "It makes sense that we need to show credibility with data."
> 
> • **State your view with a specific reason**
>   - "But our user research showed decision-makers focus 80% of their time on benefits and ROI, and our last two specs-first launches had 30% lower conversion."
> 
> • **Keep it open with a question**
>   - "Could we test a benefits-first layout with specs available one click down?"
>   - "What if we lead with ROI and keep the full data sheet linked?"
> 
> The goal is discussion, not winning — once the team decides, move forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✗ doesn't contain any of ["Reply with a number","Switched to"]: found "Switched to"
- ✗ words ≤ 120: 612 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> [The user is in RP mode and has given a line in a role-play. I need to respond as Bob, the character in the "Disagree with a coworker" scene. 
> 
> Let me check the scene details:
> - Scene 2: Disagree with a coworker (Feedback Sandwich)
> - Bob proposed putting technical specs front and center on the product page
> - The learner's response: "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
> 
> Wait, I need to check - did I already give feedback on this scene? Looking back at the conversation:
> 1. User asked to start Scene 2, Medium
> 2. I (as Bob) gave my opening line and setup
> 3. User switched to [QA] and asked how to politely disagree
> 4. I gave coaching answer in QA mode
> 5. Now user is back in [RP] with their line
> 
> The user didn't actually continue the role-play after my first Bob line - they went to QA. Now they're back with their first actual role-play line. According to the rules: "If they return from Coach mode without a new request, continue the scene with your character's next line, with no setup, recap, or note about the break."
> 
> So I should continue as Bob, reacting to their line. The learner said:
> - "I understand the benefit you're aiming for" → partial agreement (step 1 of feedback sandwich)
> - "but I'm concerned about the time this would take" → their opinion with a reason, though "time" wasn't really the issue I raised (I was talking about page structure, not time). But Bob s…

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> Hey, I've been thinking about the menu redesign for the new store launch. I really think we should lead with our traditional coffee — the dark roast, the pour-overs, the classics that built this brand. Customers come to us for quality coffee, not dessert drinks.
> 
> [At Starbucks headquarters in Seattle, you're a product manager working with Bob on the menu for a new flagship store opening next month. Bob wants traditional coffee listed first on all printed menus. The goal of this conversation is to reach a team decision on the menu order.]
> 
> Hint: you could honestly agree that brand heritage and coffee quality matter — that's a real strength of Bob's idea.

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> 1. **Partially agree, honestly**
>    - "I understand that we want to stay true to our traditional coffee brand."
>    - "It makes sense that our core customers value quality coffee."
> 
> 2. **State your opinion with a specific reason**
>    - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
>    - Use facts or data when you have them.
> 
> 3. **Keep the discussion open**
>    - "Are there other alternatives?"
>    - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> 4. **Once a decision is made, move forward together**
>    - "Okay, let's go with the seasonal approach — I'll update the team."
> 
> **Key phrases to start with:** "I understand…", "I can see…", "It makes sense that…"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 67 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on wanting to test first, but I'm not sure I follow — are you saying the menu redesign itself takes too long, or that rolling it out to all stores is risky?
> 
> [Bob is asking for clarification. He wants to understand whether your concern is about implementation time or about scale of commitment.]
> 
> ---
> 
> Want to continue this conversation, try again, or pick a new scene?

### D2 Background in passing, workplace change, and lessons applied only when they fit · PASS

**T1 [QA]** "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the **ICE** template to open any meeting you lead:
> 
> **1. Introductions**
> - One or two statements about the meeting topic
> - Your name, role, and how you'll contribute
> 
> **2. Context (Past, Present, Future)**
> - **Past:** how you got here (emails, earlier meetings)
> - **Present:** today's topics and goal
> - **Future:** next steps with a deadline ("by next Monday")
> 
> **3. Expectations**
> - Level of interaction: "Please hold questions for the end" or "Feel free to interrupt"
> - Level of detail: very technical or high level
> 
> **Example:**
> &gt; "Hi everyone, today we're kicking off the new website project. I'm Jamie, the lead PM, and I'll manage the schedule and be your point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through requirements, confirm the schedule, and call out risks so we're aligned before we start. We need written sign-off from the US team by next Monday. There's a lot to cover, so please hold questions until the end."
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
> "I think we should wash all the eggs before they go to packaging. It makes the product look cleaner and more professional to buyers."
> 
> [You and Bob are both PMs at Google in Mountain View. You're discussing whether to add an egg-washing step to the supply chain for a new farm-to-table initiative. Bob supports washing; your view may differ. The team needs a decision today.]
> 
> [Hint: think about what you could honestly agree with before you share your own view.]

**T3 [QA]** "I'm now a PM at an egg farm and discussing ML models. How should I approach this?"
Profile sent: Role: PM. Company: Google. Industry: Egg farming.
- ✓ profile: industry or company contains any of ["egg","poultry","farm","agri"]: saved {"role":"PM","company":"an egg farm","industry":"Egg farming","industry_source":"stated"}
- ✓ sandwich steps &lt; 2
- ✓ global checks G1–G4
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> &lt;profile learner_role="PM" learner_company="an egg farm" learner_industry="Egg farming" learner_industry_source="stated"/&gt;
> 
> This is a general workplace discussion, not a specific course lesson. Here's how to handle it:
> 
> • **State your purpose early** — "I want to align on how we'll use ML for grading."
> 
> • **Ask their view first** — "What's your take on accuracy versus speed for the model?"
> 
> • **Share your position with a reason** — "I'd prioritize accuracy because misgraded eggs lead to returns, which cost more than slower processing."
> 
> • **Offer a tradeoff or next step** — "If we need both, we could pilot two approaches and compare results by March 15."
> 
> • **Close with ownership** — "I'll draft the test plan and send it by Thursday."
> 
> As a PM at an egg farm, tie the discussion to business impact: spoilage rates, throughput, or buyer contracts. That keeps the conversation focused on decisions, not just technical preferences.
> 
> What specifically are you and your coworker disagreeing about — the model's goal, the timeline, or the data source?

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Hi, I'm Rachel Chen, the operations director at Westfield Retail. We've been working with your team for about eight months now, and I need to be direct with you — three of our last five shipments arrived two to three days late. That's affecting our shelf stocking and our relationship with our own buyers. I'm looking for a clear explanation of what's happening and a plan to fix it.
> 
> [Westfield Retail is a mid-sized retail chain based in Chicago. You're the account manager at your logistics firm, managing this relationship. Rachel has called this meeting because the late deliveries are becoming a pattern, and she's considering whether to renew the contract. Your goal: address her concern, explain the situation, and keep the business.]
> 
> What can you tell me about these delays?

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Elena" gender="female"/&gt;
> 
> "Hey, thanks for joining. I wanted to check in before we get into the full agenda — where are we on the iOS submission timeline? The app store review is still showing two weeks, right?"
> 
> [You are a PM at a tech company in San Francisco. Elena is your engineering lead. The team is preparing a mobile app launch, and this is your weekly sync. She seems concerned about whether marketing assets and the app store listing will be ready in time. Give your status update.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> "Got it — 70% is solid, and I saw the designs signed off yesterday. On the payment API, do we know if the vendor committed to a new date, or is it still unclear? Because if we're looking at moving the beta, marketing needs to know by Thursday to adjust the campaign spend."
> 
> [You can describe a different situation anytime.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> The defect rate on Line 2 hit 4.2% this week, up from our usual 1.8%. I need to decide by tomorrow whether we slow the line or keep running and risk a bigger recall. What's your take?
> 
> [You're a quality engineer at your company. Marcus is the production manager. The conversation is in his office on Thursday afternoon. Goal: agree on a plan for Line 2 and who communicates it to whom.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 77 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus crosses his arms and leans back.
> 
> "Hold up — you're talking about stopping delivery on batches we've already promised to the OEM. That's 2,000 units scheduled to ship Friday. If we hold them, we miss the window and they put us on supplier watch. Can you narrow down which part changed and how fast you can confirm? Because 'inspect everything' means pulling six people off the other lines, and my weekend overtime budget is already gone."

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose early, gave a clear reason with data, proposed a specific action, and asked for support — strong quality-engineer communication.
> 
> **How it went:** Marcus pushed back on schedule and resources, and you gave him exactly what he needed to negotiate: cause, containment scope, and a time-bound ask.
> 
> **What worked:** "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this states your recommendation with a clear boundary ("until we confirm") and makes your request collaborative ("Can your team support that").
> 
> **What to improve:** You didn't name the next step or who decides by when. Marcus has to ship or not ship by tomorrow; offering a decision timeline and owner would move this to closure faster.
> 
> **Also worth noting:** "The defect rate went from 1% to 4%" is good data, but "after we changed suppliers for one part" buries the cause. Lead with it: "The new separator supplier is linked to the jump."
> 
> **Try this instead:** "The defect rate jumped after we changed separator suppliers. I'd like to hold affected batches and run 100% inspection until we confirm the root cause by Friday noon. Can your team support that this week? If not, what's the latest we could start and still protect Friday's shipment?"
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
> Yeah, so I wanted to flag this before we get deeper into the agenda. We're looking at a possible delay on our end—maybe two weeks past the June deadline. The firmware integration is taking longer than our team estimated, and we're hitting some compatibility issues with the new hardware spec you sent over last month.
> 
> [We're at a mid-project weekly sync. You're the internal project lead at a consumer electronics company; I'm Sam, a vendor engineering manager. We need to decide whether to accept the delay, negotiate, or find another path forward.]
> 
> What do you want to know?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The firmware team underestimated the handshake protocol between the new sensor module and our base stack. It's not just porting code—we're rewriting part of the middleware layer. The hardware spec change you sent in April added a second communication bus we hadn't scoped for.
> 
> To stay on schedule, we'd need two things: one, sign-off by Wednesday on rolling back to the single-bus architecture, or two, three more senior embedded engineers for the next four weeks. We don't have those engineers free right now. The rollback would save us about ten days, but I know your product team wanted the redundancy for reliability.
> 
> What's your take?

### S5 Clear switch: meeting opener to a project delay · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi, are we ready to get started? I've got back-to-back meetings today, so I'm hoping we can keep this one focused.
> 
> [We're at Tesla in Austin. You're the lead project manager for the new mobile app update. The team has exchanged several emails about features and timeline over the past two weeks, but nothing is confirmed yet. Today's goal is to align on the scope and schedule so engineering can begin. The next step is to get written approval from the US leadership team by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got it. I just got out of a leadership review, and the board is asking why our Q3 roadmap doesn't show the new dashboard feature yet. I told them we'd have it live by September 1st. What's going on?
> 
> [We're still at Tesla in Austin. You report to me, David, the director of product. The dashboard feature was promised to leadership three weeks ago. You just learned from engineering that the backend integration is more complex than expected. You need to deliver the delay news and propose a path forward.]
> 
> [Hint: be direct about the delay, explain the cause briefly, and come with options or a revised timeline.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Two weeks? That's going to put us past the board's September 1st commitment. Walk me through what you found and what your recovery plan looks like.
> 
> [We're at Tesla in Austin. I'm David, your director of product. The dashboard feature was promised to leadership three weeks ago. Testing just revealed more bugs than expected, and you need to explain the delay and propose a path forward.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> I'm glad you brought this up. The team in Singapore just landed a major client, and they want our full support starting Monday. I need you to take the lead on the integration — it's about forty percent more work than we scoped for this sprint. Can you make that happen?
> 
> [You're a senior engineer at Salesforce in San Francisco. David is your manager. The goal: negotiate scope, time, or resources so the extra work is manageable.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Hey, come on in. I wanted to check in before the quarter gets away from us. How are things going on your end?
> 
> [You're a data analyst at a mid-sized tech company in Seattle. Rachel is your manager, direct but fair. She values proactive problem-solving. Goal: practice asking for help prioritizing three urgent projects without undermining yourself.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board meeting on the 15th, so that one can't move. Between the dashboard migration and the pricing analysis, which one do you think is more at risk if it slips?
> 
> [Hint: you could say which project has the most flexible deadline or the smallest business impact if delayed.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You stated the problem clearly, showed you could handle the workload, and proposed a specific solution together.
> 
> **How it went:** Strong opening—you named all three projects and immediately offered a workable path forward instead of just dumping the problem on Rachel.
> 
> **What worked:** "I can finish two well" showed confidence and set up the tradeoff. "Could we decide together" invited collaboration without sounding helpless.
> 
> **What to improve:** You didn't name which two you'd prioritize or why. Rachel had to pull that out of you. A brief reason—like "the forecast feeds directly into the board deck"—would show you're thinking strategically, not just passing the decision up.
> 
> **Also worth noting:** "All three are due this month" is factual, but adding "and I'm seeing overlap in the final two weeks" would strengthen the urgency without sounding overwhelmed.
> 
> **Try this instead:** "I can deliver two of these with full quality. My view is we keep the forecast and pricing analysis this month, since the dashboard migration doesn't have a client deadline yet. Does that work, or is there a business reason to accelerate the dashboard?"
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
> Hi, thanks for making the time. I'm Priya, VP of Operations at Northfield Logistics. We signed on three weeks ago and honestly, we're still figuring out how your platform fits into our daily workflow.
> 
> [Northfield Logistics, Chicago. You are the customer success manager from the software company. Priya is your new client contact. Goal: understand her team's needs so you can configure the product correctly.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 93 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our dispatch team is juggling three different tools — spreadsheets, a legacy TMS, and WhatsApp groups — just to track shipments. It's messy. Last month we had two trucks show up at the same dock because someone updated the spreadsheet but not the group chat.
> 
> We're hoping your platform can bring everything into one place. But I need to be honest: my team is skeptical. They've been through two "all-in-one" tools before, and both times they ended up back in spreadsheets within six months.
> 
> [You can describe a different situation anytime.]

</details>
