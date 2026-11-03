# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-03 13:25 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| S1 Custom scene: client meeting | 2/2 | 2/2 |
| S2 Status update: a brief opening is fine, a kickoff isn't | 2/2 | 2/2 |
| S3 Production defects: business level, feedback fits the scene | 2/2 | 2/2 |
| S4 Mid-meeting: "We're already halfway through" | 2/2 | 2/2 |
| S5 Clear switch: meeting opener to a project delay | 0/2 (1 flaky) | 0/2 |
| S6 Ambiguous request: "Ask my boss for a proportion" | 2/2 | 2/2 |
| S7 Manager 1:1: workload and priorities | 2/2 | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 | 2/2 |
| **Total (first try)** | **14/16** | **14/16** |

## Runs
- production-1: GREEN · PASS 7 · FAIL 0 · FLAKY 1 · ERROR 0
- production-2: RED · PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-1: RED · PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:15 UTC

**PASS 7 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
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

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. I'm Rachel, operations lead at the client side. We've been seeing consistent delays on the Shanghai route—three shipments in the past month arrived two to three days late. That's affecting our production schedule, and my manager is asking for answers. What can you tell me about what's going on?
> 
> [Scene: You're an account manager at a logistics firm. Rachel is your client's operations lead. The meeting is a video call from your office. Goal: address her concerns about late deliveries and agree on next steps.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive in, I wanted to check in on where we stand with the beta testing phase. The leadership team is asking for an update by end of day.
> 
> [Scene: A mid-sized tech company in San Francisco. You are the PM leading the mobile app launch. Linda is the engineering lead on your project team. The goal of this conversation is to give your weekly status update and address her concern about leadership pressure.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> That helps, thanks. Just to be clear — are you saying the payment API delay puts the whole beta at risk, or could we still hit the original date if we scope down? Leadership is pushing hard for the timeline we committed to last month.

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: Thanks for flagging this. I've been seeing the numbers climb since Tuesday — it's already 12% above our weekly target and the root cause isn't clear yet. What's your take on where we should start?
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. The conversation is in your office. Goal: agree on immediate containment and next steps for the Line 2 defect spike.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 92 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: That jump lines up with the supplier change — good catch. Full inspection will slow us down, though. We're already behind on the Q3 order for Rivian. If we pull people to inspect 100%, we'll lose maybe two days of output. Is there a way to narrow it down first, or do you need the full hold?
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. The conversation is in your office. Goal: agree on immediate containment and next steps for the Line 2 defect spike.]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated your position clearly with data, but missed partially agreeing with Marcus's concern and didn't keep the discussion open with a question.
> 
> **How it went:** You identified the cause and proposed a solid containment plan, but the conversation stalled because Marcus raised a real tradeoff and you moved straight to asking for support without engaging with it.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this is a strong, specific reason for your position, which shows you came prepared with facts.
> 
> **What to improve:**
> - You didn't partially agree with Marcus's point about the Q3 delay risk before pressing your plan. In the feedback sandwich for disagreements, start by acknowledging the other side's valid concern.
> - You also didn't keep the discussion open with a question about alternatives. This would help you and Marcus find a compromise together.
> 
> **Also worth noting:** "Can your team support that this week?" is a bit direct after Marcus just explained the cost. A softer bridge like "I understand the timing is tight" before your ask would land better.
> 
> **Try this instead:** "I understand we can't afford to fall behind on the Rivian order. The defect rate went from 1% to 4% after the supplier change, so I think we need to contain the risk. Could we start with a smaller sample inspection, or borrow two people from Line 1 for two days to cover both the hold and the schedule?"
> 
> Want to continue …

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now we're seeing some issues with the data migration that we didn't catch earlier.
> 
> [You're a PM at your company, meeting with Sam's team at their office in Chicago. Goal: understand the delay and agree on a path forward.]
> 
> [Hint: you could ask "What specific issues are you seeing with the data migration?" or "How much extra time do you think you need?"]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The data migration issues are mostly around format mismatches between your legacy system and our platform. We underestimated the cleanup needed. To stay on schedule, we'd need either two more weeks or an extra engineer from your side who knows the legacy schema well.
> 
> [Hint: you could push back on the extra engineer request, or ask what happens if neither option works.]

### S5 Clear switch: meeting opener to a project delay · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today. I'm Sarah, the marketing lead on this project. We're all looking forward to hearing how the website refresh is going to work.
> 
> [You are the project lead kicking off a meeting with the marketing and engineering teams at Tesla in Austin. The goal is to align everyone on the timeline for the new company website launch. Over the past two weeks, there have been long email threads about design requirements and technical constraints. Today you need to confirm the schedule, review the main features, and identify risks before development starts. The next step is to share a final timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is significant, and the client demo is already scheduled. Walk me through what you're seeing in testing and where you think we can make up time.
> 
> [You are a senior project manager at your company reporting to David, your engineering director in Seattle. The mobile app launch for your retail client is at risk. The goal of this conversation is to agree on a revised timeline and any resources or scope changes needed.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up, everyone. We're looking forward to getting started.
> 
> [You're leading the kickoff for Project Hippo, a new mobile app launch. Your team has exchanged several emails over the past two weeks to prepare for today. The goal is to align on requirements, confirm the schedule, and identify risks before development begins. You need to get written sign-off from the US team by next Monday to officially start development.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> I just got your message about the schedule. That's not what I wanted to hear before the weekend. Walk me through what happened.
> 
> [You are a project lead at your company. Your manager David asked for a status update on the new client platform. The original deadline was end of this month. You discovered this week that integration testing will take two weeks longer than planned because a third-party API changed their data format.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Two weeks is a big slip. What's driving the delay, and how much of that time do you think you can actually recover?
> 
> [Hint: you could say "The third-party API changed their data format, so our integration tests need more work."]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> "Hey, got a minute? I wanted to run something by you. The Q3 product roadmap came out this morning, and I noticed our team is down for three major deliverables. That's about forty percent more work than we scoped in the original plan, with the same deadline."
> 
> [You're a team lead at a software company. David is your manager. He just added significant scope to your team's plate without adjusting timeline or resources. Your goal: push back professionally and negotiate a realistic path forward.]
> 
> ---
> 
> Want to continue this conversation, try again, or pick a new scene?

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for flagging this. I know you've got a lot on your plate right now, and I want to make sure we're focusing on the right things. Walk me through the three projects and where you see the biggest tension.
> 
> [You're a data analyst at a tech company. Rachel is your manager. Goal: prioritize three urgent projects together without losing credibility.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you laying that out clearly. The Q4 forecast is locked in — leadership needs it for the board meeting on the 15th. Between the dashboard migration and the pricing analysis, which one feels harder to delay, and what would break if we pushed it?

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 3/5**: You used parts of the general checklist — clear purpose, direct answer with specifics — but missed key steps for negotiating workload.
> 
> **How it went:** You came across as capable and organized, which is great. The conversation stayed professional, but you moved quickly to a solution without fully exploring Rachel's view or the tradeoffs.
> 
> **What worked:**
> - "I can finish two well" — this shows ownership and sets a realistic boundary without sounding overwhelmed. It directly supports your credibility.
> 
> **What to improve:**
> - You named the projects and proposed moving one, but you didn't ask Rachel which she sees as highest priority or explain the risk of doing all three poorly. The general checklist for negotiating requests includes understanding the other person's view first, then naming the tradeoff.
> - You also didn't suggest what "finishing two well" means for the third — would it start late, get less depth, or need handoff?
> 
> **Also worth noting:** "Could we decide together" is polite, but slightly softens your ownership. "I'd like your input on which to prioritize" keeps the collaboration while showing you're driving the decision.
> 
> **Try this instead:** "I want all three to land well, but doing all three this month means each gets less depth. The Q4 forecast is clearly fixed. Between the dashboard migration and pricing analysis, which one matters more to you right now? If we push the pricing analysis to early next month, I can still deliver a rough …

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. We're about two weeks away from our go-live date, and honestly, we're not sure if the onboarding timeline still makes sense for us. Our internal team structure changed last month, and now we have different people involved who weren't part of the original discussions.
> 
> [You are a customer success manager at a software company. You are meeting Rachel, the operations lead at a mid-sized logistics firm in Chicago. She is a new client, and your goal is to understand her team's current needs and concerns before the product setup.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 82 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're managing everything through spreadsheets and a shared email inbox. It's been fine for two years, but last quarter we hit a point where orders were getting lost between shifts. We need one place where everyone can see status in real time, especially since we now have three people in different cities who all need to update the same records.
> 
> What does your onboarding process actually look like? Our previous vendor promised a lot and delivered a two-page PDF.

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:22 UTC

**PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
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

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Jennifer" gender="female"/&gt;
> 
> Thanks for making time today. I'm Jennifer, the operations director at Westfield Retail. We've been seeing consistent delays on our east coast shipments — three of the last four deliveries arrived two to three days late, and it's starting to affect our store stocking schedule. We need to understand what's happening and what you're going to do about it.
> 
> [Scene: You're an account manager at a logistics company meeting with Jennifer, operations director at Westfield Retail, a major retail client. The conversation goal is to address her concerns about late deliveries and agree on a clear fix or next step.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Let's hear how the app launch is tracking this week.
> 
> [You are a PM leading a weekly status meeting at your company. Linda is a senior stakeholder on the project. She wants to know what's on track, what's at risk, and whether you're still hitting the mid-July launch date.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I see — so the payment API delay is putting pressure on both the beta and the final launch. What's your current thinking on which option protects the mid-July date better?
> 
> [You are a PM leading a weekly status meeting at your company. Linda is a senior stakeholder on the project. She wants to know what's on track, what's at risk, and whether you're still hitting the mid-July launch date.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. Line 2's been running the new cathode coating process since Monday, and the defect rate's climbed from two percent to nearly seven. I'm pulling the batch records now, but I wanted to hear your take first—are you seeing a pattern in the failures?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The conversation is in his office on the factory floor. Goal: discuss the spike in defective cells on Line 2 and agree on next steps.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 85 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent is still below our internal alert threshold, and we're already behind on this month's output target. Stopping the line for full inspection would cost us maybe two hundred units a day. Are you sure it's the new supplier and not just normal variation? We ran similar numbers when Line 2 started up last year."
> 
> [Hint: you could say "The data from the past three days shows a clear correlation with the supplier change, and here's what I'd need to verify it further."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated your position clearly with a specific reason and a proposed action, but didn't partially agree with Marcus's concern or keep the discussion open with a question.
> 
> **How it went:** You came in direct and data-focused, which is good for urgency, but the conversation stalled because Marcus felt pushed rather than heard.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this shows a specific reason for your position, which is the second part of disagreeing effectively. Naming the supplier change and the numbers makes your case concrete.
> 
> **What to improve:**
> - You jumped straight to your solution without acknowledging Marcus's pressure on output. Partial agreement builds trust: you could validate that hitting targets matters before asking for the pause.
> - You closed with a yes/no request ("Can your team support that?") rather than inviting alternatives. This makes it harder for Marcus to collaborate if he can't give you exactly what you asked for.
> 
> **Also worth noting:** "I'd like to hold" is polite, but in a quality issue, "I recommend we hold" shows clearer ownership of the decision.
> 
> **Try this instead:**
> "I understand we're under pressure to hit the monthly target, and I don't want to slow production unnecessarily. The data shows the defect rate climbed right after the supplier change, so I recommend we hold the affected batches and do full inspection until we confirm the cause. If two hundred …

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what anyone wants to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now the handoff to QA is running about two weeks behind.
> 
> [You're a PM at your company, meeting with Sam's team from an outside vendor. The project is a software rollout. Sam just dropped the delay news midway through your weekly status meeting. Respond as you would in the meeting.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The integration issues were mostly around the API compatibility with your legacy system—our team underestimated the data mapping complexity there. To stay on schedule, we'd need either an extension on the QA window or your team to take on the data validation piece internally. Either way, we need a decision by Friday so we can reallocate people.
> 
> [Hint: you could say "Before we commit to either option, let's look at what the original contract says about scope changes."]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Hi everyone, thanks for joining. We're here to kick off the new mobile app project, and I'm looking forward to working with you all.
> 
> [Setting: You're a project manager at Google, leading a kickoff meeting for a new internal mobile app. Your team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features. The next step is to share a timeline with leadership by next Friday.]
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
> Two weeks? That's a significant slip. Walk me through what happened in testing and what your recovery plan looks like.
> 
> [Setting: You're a senior engineer at Google. David is your engineering manager. You're in a 1:1 update about the internal mobile app project, which leadership expects to ship on time for a company-wide launch.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining. We're here to kick off the new mobile app project, and we're looking forward to getting everyone aligned today.
> 
> [You're the lead project manager for a new mobile app launch at Apple. Over the past two weeks, the team has exchanged several emails about requirements and timeline. Today's goal is to confirm the schedule and main features so development can begin. The next step is to share a timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is significant — our client presentation is already scheduled for the 15th. Walk me through what you're seeing in testing and where you think we can make up time.
> 
> [You are a senior project manager at Microsoft. Your manager Linda leads a cloud services team in Seattle. You've just discovered a delay in the API migration project. Goal: explain the situation, show you've assessed options, and agree on next steps.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, do you have a minute? I wanted to run something by you. The Q3 product launch is coming up, and I've been thinking about how we split the bonus pool for this one. I'd like to propose a different proportion for the team allocation—something closer to 60/40 between engineering and marketing instead of the usual 50/50. What do you think?"
> 
> [You work at a mid-sized software company in Austin. Your character is David, your direct manager. You're a senior team lead. The goal: ask your boss for a change in how budget or credit is divided, and see how he responds.]
> 
> [Hint: you could say "I appreciate you bringing this up, but..." or "Can you walk me through the reasoning?"]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> I know you've been juggling a lot lately. Before we dive into updates, I wanted to check in — how are things feeling with your current workload?
> 
> [You're a data analyst meeting with Rachel, your manager at a tech company. She knows you've been busy but hasn't heard specifics yet. Your goal: ask for help prioritizing three urgent projects without undermining yourself.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in for the board review on the 15th — that one can't move. Between the dashboard migration and the pricing analysis, what's your sense of which one has more flexibility on timing?
> 
> [Hint: you could say "The pricing analysis depends on data I don't have until next week, so that one naturally fits later."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You used the core steps well — stated the situation clearly, proposed a tradeoff, and invited collaboration rather than just dumping the problem.
> 
> **How it went:** Strong opening. You came with specifics, showed you could handle the work, and framed the ask as a joint decision.
> 
> **What worked:**
> - "I can finish two well" — this shows ownership and confidence, not helplessness. It frames the limit as quality-focused, not a personal failure.
> 
> **What to improve:**
> - You didn't briefly explain *why* all three landed at once or what you've already tried. Adding one line like "I mapped out the timelines and there's a real overlap in the final two weeks" would show you've done the analysis before escalating.
> - You named the projects but didn't give Rachel a starting point for the decision. Offering your own view on which could shift (with a reason) makes the conversation faster and shows judgment.
> 
> **Also worth noting:** "Could we decide together" is polite, but "I'd like your input on prioritizing" sounds slightly more like you're driving the process.
> 
> **Try this instead:** "I've mapped out the timelines and I can deliver two of these with high quality. The pricing analysis depends on data I won't have until week three, so my suggestion is to move that to early next month. Does that work, or do you see a different priority?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making the time today. We've been looking for a better way to handle our customer data, but our current setup is pretty scattered—different teams using different tools, and nothing talks to each other. I'm hoping you can help us figure out if your platform actually fits how we work.
> 
> [You're a customer success manager at a software company. You're meeting Rachel, operations director at a mid-sized logistics firm in Chicago. She needs a unified customer data platform, and your goal is to understand her pain points and priorities before proposing a setup plan.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 109 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our sales team lives in Salesforce, support uses Zendesk, and finance tracks billing in a custom tool they built years ago. When a customer calls, nobody can see the full picture without jumping between three systems. Last month we lost a renewal because support didn't know the client had already flagged billing issues twice. So the core problem is visibility—we need one place where any team member can see a complete customer history in about ten seconds.
> 
> [Hint: you could follow up with "How is that affecting your team day-to-day?" or "What does 'complete customer history' mean for you—what data points matter most?"]

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:19 UTC

**PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
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

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. I'm Rachel, the operations director at Westfield Retail. We've been seeing consistent delays on our east coast shipments over the past three weeks, and it's starting to affect our store replenishment schedule. I need to understand what's happening and what your team is doing to fix it.
> 
> [Westfield Retail, a national retail chain based in Chicago. You are the account manager at your logistics company. Rachel is frustrated about repeated late deliveries and wants a clear explanation and a fix.]
> 
> [You can describe a different situation anytime.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for joining, everyone. Before we dive in, I'd like to hear how the mobile app launch is tracking. What's the latest on our timeline and any blockers?
> 
> [Scene: You're the PM leading the weekly status meeting for your mobile app launch at Apple. Linda is a senior stakeholder from the product leadership team who has dropped in to listen. She wants a clear picture of progress and any risks that need escalation. Goal: Give a concise, confident update that covers progress, issues, and next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> &lt;character name="Linda" gender="female"/&gt;
> 
> Thanks for that, and good to hear design is wrapped. The payment API delay is concerning — two weeks puts us right up against the beta window. What does the development team need to hit the original date, and what's the risk if we launch without payments?
> 
> [Scene: You're the PM leading the weekly status meeting for your mobile app launch at Apple. Linda is a senior stakeholder from the product leadership team who has dropped in to listen. She wants a clear picture of progress and any risks that need escalation. Goal: Give a concise, confident update that covers progress, issues, and next steps.]

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "Thanks for flagging this so quickly. I'm seeing the numbers too — defect rate on Line 2 is up to 4.2% this week, and that's well above our 2% target. Before we escalate, I want to understand what's driving it. What's your current thinking — is it a material issue, a calibration drift, or something on the assembly side?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is your production manager. The conversation is in your plant's quality office. Goal: agree on the root cause and next steps for the Line 2 defect spike.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 66 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> "I hear you — a new supplier right before a jump like that is a strong lead. Holding the batches makes sense to protect our customers. Full inspection is going to pull people off other lines though, and we're already tight on headcount with the Model X ramp. What kind of volume are we talking about, and how long do you think we'll need the extra coverage?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 4/5**: You stated the purpose clearly, answered with a specific reason and example, and proposed a clear next step with a time frame.
> 
> **How it went:** Solid work — you came in with data, linked it to a likely cause, and asked for concrete support with a specific action.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the purpose and gives a clear reason with data. It helps Marcus understand the urgency without extra explanation.
> 
> **What to improve:**
> - "I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause" — this is a good action, but you could strengthen it by acknowledging the tradeoff Marcus raised (headcount, other lines) and offering a fallback if full inspection isn't feasible. The general checklist values handling concerns calmly.
> - You didn't close with a clear time for the next step. Adding something like "Can we decide by Thursday so I can notify the supplier?" would make it easier for Marcus to commit.
> 
> **Also worth noting:** "Can your team support that this week?" is direct and clear. A slightly softer version like "Would your team be able to support that this week?" sounds more collaborative when asking for a favor across teams.
> 
> **Try this instead:** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause — I estimate three to f…

### S4 Mid-meeting: "We're already halfway through" · PASS

**T1 [RP]** "We're already halfway through our weekly project meeting. Sam from the vendor just said they might miss next month's deadline. Please play Sam."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Sam picks up mid-meeting; no introductions or meeting opening.

> &lt;character name="Sam" gender="male"/&gt;
> 
> I know this isn't what you wanted to hear, but we're looking at a real risk of slipping into next month. The integration testing took longer than we estimated, and now the QA team is flagging some issues we didn't catch earlier.
> 
> [You're in a weekly project meeting at your company. Sam is a project manager from an external vendor team. The goal is to discuss the schedule risk and agree on next steps.]
> 
> ---
> 
> Want me to make this easier or harder?

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the API integration with your legacy system. We estimated two weeks, but the documentation was outdated, so our team spent a lot of time troubleshooting. To stay on schedule, we'd need either another backend engineer from your side for the next ten days, or we push the deadline by two weeks. What works better for you?

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today. We're all set on our side and looking forward to hearing how the website refresh is shaping up.
> 
> [You are the lead project manager for the website refresh at Microsoft. Over the past two weeks, there have been long email threads between the Redmond and Beijing teams about design direction and timelines. Today's goal is to align on the final design mock-ups and confirm the launch schedule. The next step is to share the approved timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, and leadership is expecting the current timeline. Walk me through the bugs and your recovery plan—what's the root cause, and how much time can you actually get back?
> 
> [You are a senior PM at Microsoft. David is your manager. The project is a cloud feature launch with a hard deadline tied to a customer conference. He needs details to decide whether to cut scope, add resources, or push the date.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Hi everyone, thanks for joining today. We're looking forward to hearing how this project will come together.
> 
> [You're the lead PM kicking off a new mobile app launch at Tesla. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features before development begins. The next step is to get sign-off from the US engineering team by next Friday.]
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

> I appreciate you flagging this early. Two weeks is significant, and the client demo is already scheduled for the 15th. Walk me through what you're seeing in testing and what your recovery plan looks like.
> 
> [You're a senior PM at Microsoft reporting to your manager Raj. Your team is building a new internal tool, and integration testing finished last Friday with 23 critical bugs, up from the 8 you had budgeted for. The original ship date is March 15, and Raj has already promised a demo to the leadership team on that date.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to run something by you. The Q3 roadmap review came back from leadership, and they want us to add real-time analytics to the dashboard before the client demo on the 15th. That wasn't in our original scope. How do you see us handling that?"
> 
> [You are a PM at a tech company. David is your manager. He is asking your team to take on extra work with a tight deadline. You need to push back professionally and negotiate.]
> 
> [Hint: think about the project triangle: cost (resources), quality (scope), and time (schedule). If David wants more, something else has to give.]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Linda" gender="female"/&gt;
> 
> Linda: "Hi, thanks for setting this up. I wanted to check in on how things are going with the three projects we have running right now — the dashboard refresh, the Q3 forecast, and the customer segmentation work. Where do you see us on each of those?"
> 
> [Your manager Linda, at a tech company in San Francisco. You're a data analyst reporting to her. Goal: ask for help prioritizing three urgent projects without sounding overwhelmed.]
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> Linda: "I appreciate you flagging this early. The Q4 forecast is locked in for the board review on the 15th, so that one can't move. Between the dashboard migration and the pricing analysis, which one do you think would be easier to delay without blocking other teams?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You used the feedback sandwich approach well — you started with what you can do, stated the problem clearly, and invited collaboration.
> 
> **How it went:** Great job sounding capable while asking for help. You came across as organized and solution-oriented, not overwhelmed.
> 
> **What worked:**
> - "I can finish two well" — This shows honest positive framing (the "bread" of the sandwich). It signals capability before raising the concern, which keeps the tone confident.
> 
> **What to improve:**
> - You could strengthen the middle layer with a brief reason: why finishing all three would hurt quality. For example, mention that spreading across three projects means less depth on each.
> - You named a tradeoff (move one to next month) but didn't explicitly ask for Linda's input on *which* one. Your "Could we decide together" was good, but following with your own analysis of the options would show more ownership.
> 
> **Also worth noting:** "All three are due this month" is clear, but adding one concrete detail — like "the forecast needs board-ready numbers" — would help your manager assess faster.
> 
> **Try this instead:**
> "I can deliver two of these projects to a high standard this month. The third would need more time for quality checks. My view is that the pricing analysis could shift to early next month since the sales team doesn't need it until the 20th. What do you think?"
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
> Thanks for making the time today. We're a mid-sized logistics company, and we've been using spreadsheets to track our fleet and deliveries. It's getting hard to manage as we grow, so we're looking for a better way to keep everything visible and on schedule.
> 
> [Scene: You're a customer success manager at a software company. Marcus is the operations director at a growing logistics firm in Chicago. He has 45 minutes to explain his team's current workflow and biggest pain points before your product demo next week.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 72 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, every dispatcher has their own spreadsheet for routes and driver schedules. When a customer calls for an update, we have to hunt through three or four files to find where their shipment is. Last month we lost a repeat client because we gave them the wrong delivery window twice in one week.
> 
> What does your onboarding process look like? We can't afford to have our whole team offline for training.

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-03 13:25 UTC

**PASS 7 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
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

### S1 Custom scene: client meeting · PASS

**T1 [RP]** "I'd like to practice a client meeting. I'm an account manager at a logistics company, and the client is unhappy about late deliveries."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Starts a client-meeting scene with a fitting client character, or asks at most one short question to set it up. No fixed scene menu.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> Thanks for making time today. I need to be direct with you — we've had three shipments arrive late this month, and it's costing us. Our production line was down for half a day last week because of it. What is your team doing to fix this?
> 
> [You are an account manager at a logistics company. Rachel is your client, a supply chain manager at a consumer goods company in Chicago. She is frustrated about repeated late deliveries and wants a clear explanation and plan. Your goal is to address her concern, explain the situation, and agree on next steps.]

### S2 Status update: a brief opening is fine, a kickoff isn't · PASS

**T1 [RP]** "I want to practice giving a weekly status update to my project team. I'm a PM on a mobile app launch."
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker"]
- ✓ global checks G1–G4
- [ ] Sets up a status meeting. A short greeting or one-line intro is fine; it isn't run as a kickoff (full Introductions, Context, Expectations exercise or Sarah's kickoff scene).

> &lt;character name="Alex" gender="male"/&gt;
> 
> Thanks for joining, everyone. Before we dive into the details, could you walk us through where we stand on the mobile app launch this week? I'm especially interested in whether we're still on track for the beta release.
> 
> [Scene: Your company. You are the PM leading the weekly status meeting for your mobile app launch. Alex is a senior stakeholder attending remotely. Goal: give a clear, confident update on progress, risks, and next steps.]

**T2 [RP]** "Hi all, quick update on the app launch. Design is done, and development is about 70% complete. The blocker is that the payment API is two weeks late, so I'd like to discuss whether we move the beta date or launch without payments first."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character responds to the blocker and the decision; doesn't ask the learner to start over with introductions.

> I appreciate the transparency on the payment API delay—that's exactly the kind of thing we need to flag early. Just to make sure I understand the full picture before we decide: what's driving the two-week delay, and do we have any confidence that the vendor will hit a new date if we give them more time?

### S3 Production defects: business level, feedback fits the scene · PASS

**T1 [RP]** "I'm a quality engineer at an EV battery supplier. I need to talk with the production manager about a jump in defective cells on Line 2 this week."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a production manager in plain business language (impact, schedule, staffing, next steps).

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this so quickly. Line 2's been running smooth until now — what's changed?"
> 
> [You are a quality engineer at an EV battery supplier. Marcus is the production manager. The goal is to discuss the spike in defective cells on Line 2 and agree on next steps.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The defect rate went from 1% to 4% after we changed suppliers for one part. I'd like to hold the affected batches and inspect 100% of the cells until we confirm the cause. Can your team support that this week?"
- ✓ no feedback
- ✓ words ≤ 120: 49 words
- ✓ global checks G1–G4
- [ ] Stays at business level, not engineering detail (no chemistry, failure analysis or test specs).

> Marcus: "Four percent — that's a big jump. My team is already stretched thin with the end-of-quarter push. If we hold those batches and do full inspection, we'll lose at least two days of output. Are you sure it's the new supplier and not something on our line?"

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 3
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about how clearly the learner explained the cause, the containment plan and the request, not the ICE meeting-opening criteria.

> **Course score: 3/5**: You stated the problem clearly with data and proposed a specific action, but the conversation stayed one-sided without building toward a joint decision.
> 
> **How it went:** You came in with facts and a clear ask, which is good. The conversation didn't yet reach a shared next step because Marcus raised a resource concern and you hadn't responded to it.
> 
> **What worked:**
> - "The defect rate went from 1% to 4% after we changed suppliers for one part" — this states the problem with specific data and a likely cause, which helps Marcus understand quickly.
> 
> **What to improve:**
> - You proposed your solution without acknowledging Marcus's pressure first. In disagreements or resource conflicts, partially agreeing with the other person's concern builds trust before you push your view.
> - You didn't invite alternatives or ask what partial support might look like. This keeps the discussion more open and collaborative.
> 
> **Also worth noting:** "Can your team support that" is a bit vague on what you need from them specifically — people, time, or line access? More detail helps Marcus respond.
> 
> **Try this instead:** "I know the end-of-quarter push is tough. The defect rate jumped from 1% to 4% after the supplier change, so I want to be sure before we release more cells. Could we start with holding just the last two batches and spot-checking fifty percent? What would work with your schedule this week?"
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
> I know this isn't what we wanted to hear, but we're looking at a potential delay. Our lead engineer just left, and the replacement needs at least two weeks to get up to speed. That puts us at risk for the March delivery.
> 
> [Setting: You are the project lead at your company, managing a software rollout with an external vendor. Sam is the vendor's account manager on a video call. The goal: understand the delay, protect your timeline, and agree on next steps.]

**T2 [RP]** "Thanks for flagging that, Sam. What's causing the delay, and what would you need from us to stay on schedule?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Answers as Sam with a cause and a concrete ask; the meeting continues.

> The main issue is the handoff. Our lead engineer took another offer, and the new person won't be fully productive for about two weeks. We could bring in a contractor, but that adds cost we didn't budget for. Alternatively, we could reduce the scope for the first release and push some features to April.
> 
> [What do you think?]

### S5 Clear switch: meeting opener to a project delay · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> Thanks for joining today. We're here to kick off the redesign of the company website, and I'm looking forward to getting everyone aligned.
> 
> [Your team is at Apple, in Cupertino. You're the lead project manager for the website redesign. Over the past two weeks, there have been long email threads about the scope and timeline. Today's goal is to confirm the schedule and key features so the team can start design work. The next step is to share a timeline with leadership by next Friday.]
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
> I appreciate you flagging this early. Two weeks is a significant slip, and leadership is expecting the current timeline. Walk me through the bugs and your recovery plan.
> 
> [You are a senior engineer at Apple in Cupertino. Your manager David is responsible for reporting to leadership on the mobile app launch. The original deadline is firm because marketing has booked campaign slots. Today's goal is to agree on a realistic path forward.]

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. We're all set when you are.
> 
> [You're leading a kickoff meeting at Apple for a new app launch. Your team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and key features before development begins. The next step is to share a timeline with leadership by next Friday.]
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
> I appreciate you flagging this early, but two weeks is a real problem. We committed to the client for the end of the month. Walk me through what you're seeing in testing and how much of that time you think you can get back.
> 
> [You're a project lead at Apple. Your manager David is asking for details on a delay to a client delivery. The conversation is about explaining the situation and negotiating a realistic path forward.]

### S6 Ambiguous request: "Ask my boss for a proportion" · PASS

**T1 [RP]** "Ask my boss for a proportion"
- ✓ doesn't contain any of ["Reply with a number","Disagree with a coworker","Start a meeting"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Asks one clarifying question (proposal, raise, share of the budget?) or makes a reasonable guess and starts that scene. No fixed scene menu.

> &lt;character name="David" gender="male"/&gt;
> 
> David: "Hey, got a minute? I wanted to run something by you. The Q3 budget review came back, and leadership approved an extra 15% for our project. I was thinking we should put most of that into expanding the pilot program, but I wanted to get your take first."
> 
> [You're a team lead at a tech company. David is your manager. You want to ask for a proportion of the extra budget to go to your team's professional development instead.]
> 
> [Hint: you could say "I appreciate you bringing this up. Before we decide, could we allocate a portion of that increase to..."]

### S7 Manager 1:1: workload and priorities · PASS

**T1 [RP]** "I have a 1:1 with my manager. I'm a data analyst, and I have three urgent projects at once. I want to ask for help prioritizing without sounding like I can't handle it. Please play my manager."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Acts as a manager in a 1:1, not someone running a meeting.

> &lt;character name="Rachel" gender="female"/&gt;
> 
> I know you've got a lot on your plate right now. Before we dive into the usual updates, I wanted to check in — how are you feeling about your current workload?
> 
> [You're a data analyst meeting with Rachel, your manager. Three urgent projects landed at the same time, and you need her help deciding what to tackle first without appearing overwhelmed.]

**T2 [RP]** "Thanks for meeting. I'm working on the Q4 forecast, the dashboard migration, and the pricing analysis, and all three are due this month. I can finish two well. Could we decide together which one can move to next month?"
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Engages with the tradeoff (asks about deadlines or impact, or helps pick one to move).

> I appreciate you flagging this early. The Q4 forecast is locked in with leadership — that can't slip. Between the dashboard migration and the pricing analysis, which one do you think would hurt more if we delayed it?
> 
> [Hint: you could say "The pricing analysis feeds into next quarter's strategy, so delaying it would affect planning."]

**T3 [RP]** "feedback"
- ✓ feedback score ≥ 1: score 4
- ✓ doesn't contain any of ["introductions, context","introduce yourself","start with your introduction","self-introduction"]
- ✓ global checks G1–G4
- [ ] Feedback is about stating capacity clearly, offering options and asking confidently, not meeting structure.

> **Course score: 4/5**: You clearly stated the problem, showed you could handle the work, and invited collaboration — strong general checklist skills.
> 
> **How it went:** Great job! You came prepared with specifics and proposed a solution rather than just dumping the problem on Rachel.
> 
> **What worked:**
> - "I can finish two well" — this shows confidence and helps Rachel see you're not overwhelmed, just realistic. It answers the "can you handle it?" concern before she has to ask.
> 
> **What to improve:**
> - You named three projects but didn't briefly state why two is your limit. Adding one sentence about your capacity (e.g., hours, dependencies, or your current pace) would strengthen your case.
> - The ask "Could we decide together" is good, but you could also suggest your own priority to make it easier for Rachel to say yes.
> 
> **Try this instead:**
> "The pricing analysis feeds into next quarter's strategy, so delaying it would affect planning. I'd suggest we move the dashboard migration to January, since the current dashboard still works. Does that work for you?"
> 
> Want to continue this conversation, try again, or pick a new scene?

### S8 Discovery: customer success exploring client needs · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Pat" gender="female"/&gt;
> 
> Thanks for making the time today. We're about two weeks from our go-live date, and honestly, we're not sure if the onboarding timeline still makes sense for us. Our internal team structure changed last month, and the person who was going to own this on our side left the company.
> 
> [You are a customer success manager at a software company. You are meeting Pat, the operations director at a mid-sized logistics firm in Chicago. Her company signed up for your platform three months ago. The goal of this conversation is to understand their current situation and needs before product setup.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 70 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three different tools to track shipments and coordinate with our warehouse partners, and nothing talks to each other. My team spends maybe two hours a day just copying data between systems and fixing errors from manual entry. We signed on with you because we need one platform that actually connects the whole chain, but with our team change, I'm worried we're not ready to implement properly.

</details>
