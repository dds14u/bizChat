# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production · 2 runs each · 2026-11-03 11:29 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production |
|---|---|
| S1 Custom scene: client meeting | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 0/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 0/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 |
| S7 Manager 1:1: workload and priorities | 0/2 |
| S8 Discovery: customer success exploring client needs | 0/2 |
| **Total (first try)** | **6/16** |

## Runs
- production-1: RED · PASS 3 · FAIL 5 · FLAKY 0 · ERROR 0
- production-2: RED · PASS 3 · FAIL 5 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 11:25 UTC

**PASS 3 · FAIL 5 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | FAIL | T2: character line: present |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | FAIL | T2: character line: present |
| S5 Clear switch: meeting opener to a project delay | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | FAIL | T2: character line: present |
| S8 Discovery: customer success exploring client needs | FAIL | T2: character line: present |

## Failed replies

### S2 T2 (attempt 1) [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
Profile sent: (empty)
- ✗ character line: present

> Good to know design is wrapped. Two weeks late on the payment API is significant with only six weeks to launch. Can you walk us through what you've already tried to get it back on track, and what the risks would be if we launched without payments?

### S2 T2 (attempt 2) [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
Profile sent: (empty)
- ✗ character line: present

> Two weeks is a significant slip. The payment API was marked as a critical dependency from the start, so this puts us in a tough spot. Launching without payments means we'd have a functional gap that affects revenue tracking, and the leadership team specifically asked for end-to-end transactions in the beta.
> 
> What options have you looked at so far?

### S4 T2 (attempt 1) [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
Profile sent: (empty)
- ✗ character line: present

> It's the third-party API we need to connect to your billing system. Their documentation was outdated, so we burned almost two weeks just figuring out the right endpoints. Now we're looking at another three weeks of dev work, maybe four.
> 
> To stay on schedule, we'd need either a two-week extension or someone from your team who knows that billing system inside-out to pair with us. Even then, it's tight.
> 
> [Hint: you could say "Can you walk me through the specific blockers?" or "Let's look at what we can descope to protect the core deliverable."]

### S4 T2 (attempt 2) [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
Profile sent: (empty)
- ✗ character line: present

> The data migration delay is coming from two places: the legacy system has more duplicate records than we estimated, and our automated deduplication tool isn't handling the edge cases well. To stay on schedule, we'd need either an extra two weeks or a dedicated resource from your team who knows the legacy data structure to help us write custom rules. Your team built the original system, so that expertise would speed things up a lot.
> 
> [Hint: you could say "Two weeks isn't an option for us. What if we loan you one of our engineers for three days instead?"]

### S5 T2 (attempt 1) [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
Profile sent: (empty)
- ✗ character line: present

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S5 T2 (attempt 2) [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
Profile sent: (empty)
- ✗ character line: present

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S7 T2 (attempt 1) [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
Profile sent: (empty)
- ✗ character line: present

> I appreciate you flagging this early. The Q4 forecast and pricing analysis both feed into the board deck on the 15th, so those are locked. The dashboard migration was originally planned for January—what happened to the timeline?
> 
> [Hint: you could say "I want to make sure I'm focused on what matters most to you and the team."]

### S7 T2 (attempt 2) [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
Profile sent: (empty)
- ✗ character line: present

> I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would cause more problems if it waited?
> 
> [Hint: you could say "The forecast affects more teams, so I'd suggest keeping that one."]

### S8 T2 (attempt 1) [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
Profile sent: (empty)
- ✗ character line: present

> Right now our warehouse teams are on two different systems — one for inventory and one for shipping. Data doesn't flow between them, so the head office team spends about two hours every morning reconciling numbers by hand. It's slow, and we catch errors too late. We're hoping your platform can bring that into one system so we see real-time numbers without the manual work.
> 
> [Hint: you could ask about specific features, timelines, or who else is involved in the decision.]

### S8 T2 (attempt 2) [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
Profile sent: Role: Customer success manager. Company: a software company. Industry: software. Learning goal: understand client needs before product setup.
- ✗ character line: present

> Rachel: Right now we're managing everything through spreadsheets and a shared inbox, which worked fine when we had twenty clients. We've doubled in the past year, and last month we had two shipments go to the wrong warehouse because someone missed an email. So the core problem is visibility—my team can't see what's happening across all accounts in real time.
> 
> [Hint: you could ask about her team's daily workflow or what "visibility" looks like for them specifically.]

## For review (advisory)

### S1 T1 [RP] "I'd like to practice a client meeting. I'm an account manager at a logistics com…"
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> Thanks for making time today. I need to be direct with you — we've had three shipments arrive late this quarter, and it's costing us. Our production line sat idle for two days last month. We need to understand what's happening and see a real fix, not just another apology.
> 
> [You're an account manager at a logistics company. Rachel is the supply chain director at a manufacturing client in Chicago. The goal is to address her delivery concerns and keep the contract.]

### S2 T1 [RP] "I want to practice giving a weekly status update to my project team. I'm a PM on…"
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch this week? I'm especially curious about whether we're still on track for the beta release.
> 
> [Setting: Your company. You're the PM leading the weekly status meeting for your mobile app launch project. Linda is a senior stakeholder from the product team who joined to check progress. Goal: Give a clear, structured update on current status, risks, and next steps.]
> 
> [You can describe a different situation anytime.]

### S2 T2 [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Two weeks is a significant slip. The payment API was marked as a critical dependency from the start, so this puts us in a tough spot. Launching without payments means we'd have a functional gap that affects revenue tracking, and the leadership team specifically asked for end-to-end transactions in the beta.
> 
> What options have you looked at so far?

### S3 T1 [RP] "I'm a quality engineer at an EV battery supplier. I need to talk with the produc…"
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> Marcus: "Thanks for flagging this. I saw the numbers from Tuesday and Wednesday, but I didn't realize it was still climbing. What's your take on what's driving it?"
> 
> [You're a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on Thursday afternoon. Goal: discuss the spike in defective cells on Line 2 and agree on next steps.]

### S3 T2 [RP] "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd …"
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "I can support a short inspection period, but full 100% hold on all batches would idle Line 2 for most of the week. We have a delivery commitment to [major EV manufacturer] next Monday. What volume are you thinking, and how long do you need?"

### S3 T3 [RP] "feedback"
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Course score: 3/5: You stated your position clearly with data, but missed partially agreeing with Marcus's concern and didn't keep the discussion open with a question.
> 
> How it went: You came in direct and factual, which works in many cultures, but in this Western workplace scenario your response felt a bit closed — Marcus had to keep pushing for options.
> 
> What worked:
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this is a specific reason with data, which supports your own opinion well.
> 
> What to improve:
> - You didn't acknowledge Marcus's delivery pressure before making your ask. The feedback sandwich for disagreements starts with honest positive feedback or partial agreement, such as "I understand the Monday commitment is tight."
> - You also didn't end with a question about alternatives. Instead of "Can your team support that," try "What volume could your team handle without risking Monday?"
> 
> Also worth noting: "I'd like to hold" is polite, but "I recommend we hold" sounds more confident in a quality role where you're the expert.
> 
> Try this instead: "I understand the Monday delivery is critical. The defect rate jumped from 1% to 4% after the supplier change, so I recommend we hold the affected batches and inspect 100% until we confirm the cause. What volume could your team support without risking that deadline?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to continue this conversation, try again, or pick a new scen…

### S4 T1 [RP] "We're already halfway through our weekly project meeting. Sam from the vendor ju…"
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> I know this isn't what you want to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than expected, and now we're seeing some issues with the data migration that we didn't catch earlier.
> 
> [You are leading the weekly project meeting with Sam, your vendor contact at a software consultancy. The project is a platform upgrade for your company. Today's goal is to resolve the schedule risk and agree on next steps. Sam is being upfront about the delay but hasn't offered a solution yet.]
> 
> [Hint: you could say "Thanks for flagging this early. What specifically is causing the delay with the data migration?"]

### S4 T2 [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The data migration delay is coming from two places: the legacy system has more duplicate records than we estimated, and our automated deduplication tool isn't handling the edge cases well. To stay on schedule, we'd need either an extra two weeks or a dedicated resource from your team who knows the legacy data structure to help us write custom rules. Your team built the original system, so that expertise would speed things up a lot.
> 
> [Hint: you could say "Two weeks isn't an option for us. What if we loan you one of our engineers for three days instead?"]

### S5 T1 [RP] "Start the role-play scene "Start a meeting". Difficulty: Easy."
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today. We're kicking off the new mobile app project, and I'm looking forward to getting everyone aligned.
> 
> [Scene: Apple, Cupertino. You are the lead project manager for a new fitness app launch. Over the past week, the team has exchanged several emails about requirements and timelines. Today's goal is to confirm the schedule and identify key risks before development begins. The next step is to send a summary to leadership by next Wednesday.]
> 
> [Start with your introduction.]

### S5 T2 [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S5 T3 [RP] "Hi, I wanted to let you know the project will slip by about two weeks because te…"
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is significant—walk me through the bug count and where you think we can make up time.
> 
> [Scene: Your company. You are a senior engineer reporting to Linda, your engineering manager. The mobile app release was scheduled for end of quarter. Testing wrapped last week and uncovered critical issues in the payment flow. Today's goal is to agree on a revised timeline and any needed resources.]
> 
> [Hint: you could say "We found 14 bugs in the payment flow, 6 of them critical. I think we can recover 5 days by running QA and dev in parallel, but we'll still need an extra week."]

### S6 T1 [RP] "Ask my boss for a proportion"
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> "Hey, I need to talk to you about the Q3 budget. Marketing wants to increase their campaign spend by forty percent, and they're asking us to cover most of it from our team's reserve."
> 
> [You are a project lead at a mid-sized tech company. David is your manager. The conversation is about reallocating budget between teams for an upcoming product launch.]
> 
> [Hint: you could say "Before I agree, can I ask what percentage of that forty percent you're expecting from our team?"]

### S7 T1 [RP] "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projec…"
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> I know you've been juggling a lot lately. Before we get into updates, I wanted to check in—how are things going with the three projects you're running?
> 
> [Setting: A mid-sized tech company in Seattle. You are a data analyst. Linda is your manager. Goal: Ask for help prioritizing three urgent projects without appearing overwhelmed.]

### S7 T2 [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The pricing analysis is tied to the board meeting on the 28th, so that one can't slip. Between the Q4 forecast and the dashboard migration, which one do you think would cause more problems if it waited?
> 
> [Hint: you could say "The forecast affects more teams, so I'd suggest keeping that one."]

### S7 T3 [RP] "feedback"
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> Course score: 3/5: You used parts of the feedback sandwich approach—partially agreeing with the situation, stating your view with a reason, and keeping it open with a question—but skipped explicit honest positive feedback upfront.
> 
> How it went: You came across as organized and solution-oriented, which is good. The conversation stayed collaborative.
> 
> What worked:
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows you own the problem and invite discussion, similar to keeping the discussion open in the feedback sandwich method.
> 
> What to improve:
> - You jumped straight to the problem without starting positive. In the feedback sandwich, begin with honest positive feedback to set a constructive tone, e.g., "I know you've been juggling a lot lately" shows you recognize her perspective, but you didn't echo that back.
> - Your reason was thin: "I can finish two well" states capacity but doesn't explain *why* the third would suffer or what the business risk is.
> 
> Also worth noting: "Could we decide together" is polite, but framing it as "I'd like your input on prioritization" sounds more confident and less like you're asking permission.
> 
> Try this instead:
> "Thanks for checking in. I appreciate that we're pushing hard on three fronts right now. I want to make sure I deliver quality work, so I'd like to talk through which of these three projects should take priority. The Q4 forecast feeds into team planning, so keeping that on track feels most u…

### S8 T1 [RP] "I'm a customer success manager at a software company. I'm meeting a new client t…"
- [ ] Plays the client and leaves the questions to the learner.

> Thanks for making the time. We've been looking forward to getting started, but to be honest, we're not entirely sure what the setup process looks like on our end. Our team is pretty stretched right now.
> 
> [You are a customer success manager at a software company. Rachel is the operations director at a mid-sized logistics firm in Chicago. She has signed the contract but has not yet begun implementation. Your goal is to understand her team's needs, constraints, and priorities before configuring the product.]
> 
> [You can describe a different situation anytime.]

### S8 T2 [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Rachel: Right now we're managing everything through spreadsheets and a shared inbox, which worked fine when we had twenty clients. We've doubled in the past year, and last month we had two shipments go to the wrong warehouse because someone missed an email. So the core problem is visibility—my team can't see what's happening across all accounts in real time.
> 
> [Hint: you could ask about her team's daily workflow or what "visibility" looks like for them specifically.]

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 11:29 UTC

**PASS 3 · FAIL 5 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| S1 Custom scene: client meeting | PASS | – |
| S2 Status update: a brief opening is fine, a kickoff isn't | FAIL | T2: character line: present |
| S3 Production defects: business level, feedback fits the scene | PASS | – |
| S4 Mid-meeting: "We're already halfway through" | FAIL | T2: character line: present |
| S5 Clear switch: meeting opener to a project delay | FAIL | T2: character line: present |
| S6 Ambiguous request: "Ask my boss for a proportion" | PASS | – |
| S7 Manager 1:1: workload and priorities | FAIL | T2: character line: present |
| S8 Discovery: customer success exploring client needs | FAIL | T2: character line: present |

## Failed replies

### S2 T2 (attempt 1) [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
Profile sent: (empty)
- ✗ character line: present

> That's helpful, thanks. Two weeks is a real gap. Just to push back a little — if we launch without payments, we're basically shipping a product that can't make money. What's your read on how long it would take to get a basic version of payments in, even if it's not the full feature set?
> 
> [Scene: You're the PM leading a weekly status meeting for your mobile app launch at Apple in Cupertino. Rachel is a senior engineer on your team. Goal: practice giving a clear, structured weekly update that covers progress, risks, and next steps.]

### S2 T2 (attempt 2) [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
Profile sent: (empty)
- ✗ character line: present

> Rachel: Got it. Two weeks is significant. Do you have a sense of which option the leadership team would prefer, or should we decide that here?
> 
> [Hint: you could say "I want to get the team's input before I take a recommendation to leadership" or "Let me outline the tradeoffs for both options."]

### S4 T2 (attempt 1) [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
Profile sent: (empty)
- ✗ character line: present

> The main issue is the API documentation—your team sent it ten days late, so we had to reshuffle our engineers. Right now we're three developers short for the connector work.
> 
> We could stay on schedule if we had two senior engineers from your side join us for the next three weeks, or if you can accept a reduced scope—maybe we ship the core connectors first and add the reporting module in a follow-up release. What works better for you?

### S4 T2 (attempt 2) [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
Profile sent: (empty)
- ✗ character line: present

> The main issue is the data migration tool we built isn't handling the volume we expected—it's running about 40% slower in your production environment than in our test setup. We didn't have access to your full dataset earlier, so this only showed up last week.
> 
> To stay on schedule, we'd need either two more weeks for optimization, or your team could help us set up a pre-staging environment with a data sample that matches your production scale. That would let us parallelize the work.
> 
> What option works better for you?

### S5 T2 (attempt 1) [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
Profile sent: (empty)
- ✗ character line: present

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S5 T3 (attempt 1) [RP] "Hi, I wanted to let you know the project will slip by about two weeks because te…"
Profile sent: (empty)
- ✗ character line: present

> I appreciate you flagging this early. Two weeks is significant, and leadership is already asking about the launch date. Walk me through the bugs and your recovery plan.
> 
> [You are a senior engineer at Microsoft. Your manager, Rachel, has just received questions from leadership about the Q3 product launch timeline. She needs to understand the delay and your plan clearly to report upward.]
> 
> [Hint: you could say "We found 23 critical bugs in the payment module, which is more than the 8 we estimated."]

### S5 T2 (attempt 2) [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
Profile sent: (empty)
- ✗ character line: present

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S7 T2 (attempt 1) [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
Profile sent: (empty)
- ✗ character line: present

> "That makes sense. The Q4 forecast is locked in with leadership — that one can't move. Between the dashboard migration and the pricing analysis, which one has more flexibility on timing, and what's driving the deadline on each?"

### S7 T2 (attempt 2) [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
Profile sent: (empty)
- ✗ character line: present

> I hear you — finishing two well is better than rushing all three. The pricing analysis is tied to the board meeting on the 28th, so that one is fixed. Between the Q4 forecast and the dashboard migration, which one do you think has more flexibility, and what would moving it actually look like?

### S8 T2 (attempt 1) [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
Profile sent: (empty)
- ✗ character line: present

> Right now we're managing everything through spreadsheets and a shared inbox, which worked when we had fifteen people. Now we're at forty, and orders are getting missed. Last month we had three shipments go to the wrong address because someone updated the wrong row. My team is spending maybe two hours a day just chasing down which version is current.
> 
> What does your onboarding process look like? We don't have time for a three-month implementation.

### S8 T2 (attempt 2) [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
Profile sent: (empty)
- ✗ character line: present

> Right now we're juggling three different tools to track shipments, and none of them talk to each other. My team spends about six hours a week just reconciling data between systems. It's manual, it's error-prone, and it's getting worse as we add more carriers. We need one platform that pulls everything into one view, but I also need my team to actually adopt it — they pushed back hard last time because the training was basically a PDF and a prayer.

## For review (advisory)

### S1 T1 [RP] "I'd like to practice a client meeting. I'm an account manager at a logistics com…"
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> Thanks for making time today. I'm Rachel, the operations director at our end. I need to be direct with you — we've had three shipments arrive late this quarter, and it's starting to affect our production schedule. My team is asking me whether we need to look at other providers. What's going on?
> 
> [You are an account manager at a logistics company. Rachel is a client operations director. The goal: address her concern about late deliveries and keep the relationship.]
> 
> [You can describe a different situation anytime.]

### S2 T1 [RP] "I want to practice giving a weekly status update to my project team. I'm a PM on…"
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch? I'm especially interested in timeline and any blockers.
> 
> [Scene: You're the PM leading a weekly status meeting for your mobile app launch at Apple in Cupertino. Rachel is a senior engineer on your team. The goal is to share progress, flag risks, and align on next steps.]
> 
> [You can describe a different situation anytime.]

### S2 T2 [RP] "Hi all, quick update on the app launch. Design is done, and development is about…"
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> Rachel: Got it. Two weeks is significant. Do you have a sense of which option the leadership team would prefer, or should we decide that here?
> 
> [Hint: you could say "I want to get the team's input before I take a recommendation to leadership" or "Let me outline the tradeoffs for both options."]

### S3 T1 [RP] "I'm a quality engineer at an EV battery supplier. I need to talk with the produc…"
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> "Thanks for flagging this so quickly. I've seen the numbers too — defect rate on Line 2 went from two percent to nearly six percent since Monday. Before we decide on next steps, I need to understand what's driving it. What's your current thinking?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in your plant, and the goal is to agree on immediate containment and a root-cause plan for the spike in defective cells on Line 2.]

### S3 T2 [RP] "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd …"
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "Four percent — that's still a big jump, and it lines up with the supplier change. Holding the batches makes sense. Full inspection will pull people from the regular line though. How long are you thinking we'll need to run one-hundred percent check? And if it stretches past Friday, what's your plan for keeping the other lines staffed?"

### S3 T3 [RP] "feedback"
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> Course score: 3/5: You stated the problem with data and proposed a specific action, but the scene fits the feedback sandwich method for disagreeing or pushing back on a plan.
> 
> How it went: You were clear and direct with the data, which Marcus appreciated. The conversation stayed professional and focused on solutions.
> 
> What worked:
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this gives a specific reason tied to data, which supports your position with facts.
> 
> What to improve:
> - You moved straight to your proposal without first showing you understand Marcus's pressure (production targets, staffing). The feedback sandwich starts with honest positive feedback or partial agreement.
> - You didn't invite discussion or alternatives. Ending with "Can your team support that?" is close, but a more open question about options would keep the conversation collaborative.
> 
> Also worth noting: "hold the affected batches" is clear, but "inspect 100% of the cells" could be softer as "run full inspection on the affected batches" — "100%" can sound absolute or costly in a busy plant.
> 
> Try this instead:
> "I know the team is already stretched with the new supplier ramp-up, and I appreciate how fast production adjusted to the change. That said, the defect rate on Line 2 jumped from one percent to four percent right after the switch. I'd like to hold the affected batches and run full inspection until we confirm the root cause. What staffing options do you see this wee…

### S4 T1 [RP] "We're already halfway through our weekly project meeting. Sam from the vendor ju…"
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> I know this isn't what you want to hear, but we're looking at a real risk of slipping past the October deadline. The integration testing took longer than we estimated, and now we're seeing some issues with the data migration that we didn't catch earlier.
> 
> [You and Sam are on a weekly status call. Your company is the client. Sam is the project lead from a software vendor. Goal: address the delay risk and agree on next steps.]
> 
> [You can describe a different situation anytime.]

### S4 T2 [RP] "Thanks for flagging that, Sam. What's causing the delay, and what would you need…"
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the data migration tool we built isn't handling the volume we expected—it's running about 40% slower in your production environment than in our test setup. We didn't have access to your full dataset earlier, so this only showed up last week.
> 
> To stay on schedule, we'd need either two more weeks for optimization, or your team could help us set up a pre-staging environment with a data sample that matches your production scale. That would let us parallelize the work.
> 
> What option works better for you?

### S5 T1 [RP] "Start the role-play scene "Start a meeting". Difficulty: Easy."
- [ ] Control: the built-in opener starts as usual.

> Thanks for setting this up. I'm looking forward to getting aligned today.
> 
> [You're the lead PM at Tesla, kicking off a meeting with the team about launching a new mobile app for vehicle diagnostics. Over the past two weeks, there have been back-and-forth emails between engineering and design. Today's goal is to agree on the feature set and timeline so development can begin. The next step is to share a finalized roadmap with leadership by next Friday.]
> 
> [Start with your introduction.]

### S5 T2 [RP] "Let's stop the meeting practice. Instead, I want to practice telling my manager …"
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> To go back to coaching, tap the mode menu at the top right and choose Coach.

### S5 T3 [RP] "Hi, I wanted to let you know the project will slip by about two weeks because te…"
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate the heads-up. Two weeks is a real problem — the client demo is locked in for the 15th. Walk me through the plan. How much time can you actually recover?
> 
> [You're a senior engineer at Tesla. Your manager David is hearing that the infotainment update will be delayed. The client demo is fixed, and he's worried about losing credibility with the customer.]

### S6 T1 [RP] "Ask my boss for a proportion"
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> "Hey, got a minute? I wanted to run something by you about the Q3 budget."
> 
> [You are a senior analyst at Deloitte in New York. Your manager David has just walked by your desk. You want to ask him for a proportion of the training budget to attend an industry conference next month.]
> 
> [Hint: you could say "I'd like to request a portion of the training budget for..."]

### S7 T1 [RP] "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projec…"
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> I appreciate you flagging this early. Three urgent projects at once is a lot for anyone. Walk me through what you're facing and what you think the trade-offs are.
> 
> [You are a data analyst. Linda is your manager at a tech company. The goal of this conversation is to get help prioritizing three urgent projects without appearing overwhelmed.]
> 
> [You can describe a different situation anytime.]

### S7 T2 [RP] "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and…"
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I hear you — finishing two well is better than rushing all three. The pricing analysis is tied to the board meeting on the 28th, so that one is fixed. Between the Q4 forecast and the dashboard migration, which one do you think has more flexibility, and what would moving it actually look like?

### S7 T3 [RP] "feedback"
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> Course score: 3/5: You used a clear structure and proposed a tradeoff, but you agreed quickly to a constraint without pushing back or asking for resources.
> 
> How it went: You stated your situation clearly and offered a practical solution, which showed confidence. However, you accepted Linda's framing that the pricing analysis was fixed without questioning it, which weakened your negotiating position.
> 
> What worked:
> - "I can finish two well. Could we decide together which one can move to next month?" — This shows you are not simply dumping the problem on her; you own the solution and invite collaboration.
> 
> What to improve:
> - You did not ask about the original agreements or deadlines for each project before accepting that one was immovable. This is key to negotiating scope or timeline changes.
> - You did not suggest alternatives like extra support or partial delivery, which would show you are still committed to all three outcomes.
> 
> Try this instead:
> - "Before we decide, can you confirm which deadlines are hard and which have flexibility? If the pricing analysis is fixed, could someone from the BI team support the dashboard migration so we still hit a basic version this month?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 T1 [RP] "I'm a customer success manager at a software company. I'm meeting a new client t…"
- [ ] Plays the client and leaves the questions to the learner.

> Thanks for making the time today. We're about two months away from our current contract ending with our old vendor, so we're looking at options. I'll be honest — the last setup took way longer than we were told, and my team was pretty frustrated. I'm hoping this goes smoother, but I need to understand how your onboarding actually works before I commit to anything.
> 
> [You are a customer success manager at a software company. Michael is the operations director at a mid-sized logistics firm in Chicago. His team uses a legacy system that is being phased out. Goal: understand his needs, concerns, and timeline so you can propose a setup plan.]
> 
> [You can describe a different situation anytime.]

### S8 T2 [RP] "Thanks for your time today. What problem are you hoping our software will solve,…"
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three different tools to track shipments, and none of them talk to each other. My team spends about six hours a week just reconciling data between systems. It's manual, it's error-prone, and it's getting worse as we add more carriers. We need one platform that pulls everything into one view, but I also need my team to actually adopt it — they pushed back hard last time because the training was basically a PDF and a prayer.

</details>
