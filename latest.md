# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · production · 2 runs each · 2026-11-19 03:21 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production |
|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 |
| C4 Menu path: greeting, then "1" | 2/2 |
| C5 Custom scene with profile (non-blocking) | 0/2 (2 flaky) |
| S5 Clear switch: meeting opener to a project delay | 2/2 |
| **Total (first try)** | **6/8** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | production |
|---|---|
| C5 | 0/2 · baseline 0% |

## Runs
- production-1: GREEN · PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0
- production-2: GREEN · PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 03:19 UTC

**PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FLAKY | passed on rerun; first try: T1: doesn't contain any of ["Start with your introduction"] |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FLAKY | 0% (2 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi! Thanks for setting this up. I'm ready when you are."
> 
> [You're the lead PM kicking off a new mobile app project at Tesla in Austin. Over the past two weeks, the team exchanged emails about requirements and timelines. Today's goal is to align on the schedule and key features before development begins. The next step will be getting written sign-off from the US leadership team. Sarah is a teammate joining remotely.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> "Thanks, Lee — that's helpful. I like that we have a clear deadline for leadership."
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait — let me re-check. Looking at all of your messages so far:
> 
> Your first message covered: introduction (name, role, contribution), past (emails about features), present (agree on schedule), future (timeline to leadership by next Friday), and expectations (ask questions anytime, detailed discussion).
> 
> That's all three ICE steps. Here's your feedback:
> 
> **Course score: 5/5**: You covered all three steps clearly and included a timed next step.
> 
> **How it went:** This was a strong, complete opening — your team would know exactly why they're here and how to take part.
> 
> **What worked:** Your expectations line "Please ask questions anytime, and this will be a detailed discussion" set both the level of interaction and the level of detail in one go.
> 
> **What to improve:** Nothing major. Your context was slightly thin on the present — you named "agree on the schedule" but could briefly mention what topics you'll walk through first.
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails going back and forth" sounds a touch more natural.
> 
> **Try this instead:** "Over the past two weeks we've had quite a few emails going back and forth about the main features. Today we'll first walk through the requirements, confirm the schedule, and then call out any risks, so that everyone is aligned before we start development. The nex…

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
> [You're the lead project manager at Apple, kicking off a new iOS feature called "Focus Flow." Over the past two weeks, the team has exchanged emails about requirements and design mockups. Today's goal is to align on the schedule, key features, and risks before development begins. The next step is to get written sign-off from the US leadership team.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FLAKY

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
> [Apple, Beijing. You're the lead PM for Greater China retail, kicking off a planning meeting with Sarah, the regional retail operations manager. Goal: align on the holiday sales plan and confirm next steps.]
> 
> [Start with your introduction.]

**Attempt 2**

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
> [You are a PM at Apple. Sarah is a retail operations lead on your team. You're kicking off a planning meeting with the China retail team to align on the holiday sales plan. The meeting is over video call. Sarah is waiting for you to open.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, and I'll be supporting the project from the engineering side. Looking forward to hearing what you have to share.
> 
> [We're at Tesla's Palo Alto office. You're the lead project manager kicking off a new mobile app for vehicle diagnostics. Over the past two weeks, the team has exchanged several emails about requirements and timeline. Today's goal is to align on the schedule and key features before development begins. The next step will be to share a finalized timeline with leadership.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> I just got your message asking for a quick chat. What's going on with the project?
> 
> [We're at Apple in Cupertino. You're a senior project manager on the iOS team. I'm David, your director. The quarterly release is coming up, and I've been asking for status updates all week. You need to tell me that the new feature integration will be delayed by two weeks.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is significant — it puts us past the quarterly release window. Walk me through the bugs and your recovery plan. I need to understand if we're looking at a full delay or if we can still hit something close to the original date.
> 
> [We're at Apple in Cupertino. You're a senior project manager on the iOS team. I'm David, your director. The quarterly release is coming up, and I've been asking for status updates all week.]

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 03:21 UTC

**PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | BLOCKING | PASS | – |
| C4 Menu path: greeting, then "1" | BLOCKING | PASS | – |
| C5 Custom scene with profile | NON-BLOCKING | FLAKY | passed on rerun; first try: T1: doesn't contain any of ["Start with your introduction"] |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FLAKY | 0% (2 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C3 Scene card: Start a meeting, then a full ICE opening · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this kickoff. I'm ready when you are.
> 
> [You're the lead project manager at Apple, in Cupertino. Sarah is a senior engineer on your team. The team has spent two weeks emailing about a new app feature, and today you need to align everyone on requirements and schedule so development can start. Sarah will react positively to whatever you say.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> [Now give the context: the past, the present, and the future.]
> 
> ---
> 
> Wait — let me check again. You actually did cover past (emails about features), present (agree on schedule), and future (timeline to leadership by next Friday). And you set expectations too: ask questions anytime, detailed discussion.
> 
> So this triggers rule 1: feedback time.
> 
> ---
> 
> **Course score: 5/5**: You covered all three ICE steps clearly in one go.
> 
> **How it went:** Strong, professional opening — your team would know exactly where things stand and how to take part.
> 
> **What worked:** Your context was complete: "Over the past two weeks we've had a lot of emails about the main features" (past), "Today's goal is to agree on the schedule" (present), "send a timeline to leadership by next Friday" (future with a deadline). You also set both interaction and detail expectations: "Please ask questions anytime, and this will be a detailed discussion."
> 
> **What to improve:** Nothing major. If you wanted to add one thing, you could say how *you* specifically contribute beyond managing schedule — for example, "I'll also be the main point of contact for requirements."
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails going back and forth" sounds slightly more natural in a formal kickoff.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this new app launch. I've been with the team for two years and I'll be managing the schedule a…

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

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Hi, thanks for setting this up. I'm ready when you are."
> 
> [You're the lead project manager at Apple, kicking off a new iOS feature project. The team has exchanged emails for the past two weeks. Today's goal is to align on requirements and schedule. Sarah is a senior engineer on the team. She'll respond positively to whatever you say.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · NON-BLOCKING · FLAKY

**Attempt 1 (failed, so it was rerun)**

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
> Hi D, thanks for setting this up. I'm ready when you are.
> 
> [You're a PM at Apple headquarters. Sarah is the retail lead for Greater China, joining remotely from Shanghai. The team has exchanged emails about the holiday sales plan for the past two weeks. Today's goal is to align on promotional timing, inventory targets, and marketing support. You need a written sign-off from regional leadership by next Friday to lock in supplier orders. Start with your introduction.]
> 
> [Start with your introduction.]

**Attempt 2**

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
> Thanks for setting this up, D. I know the holiday season is always intense for retail. I'm ready when you are.
> 
> [Apple, Shanghai. You are the PM leading a kickoff with Sarah, the retail operations lead for Greater China. Goal: align on the holiday sales plan, including staffing, inventory, and promotions. Sarah has data from last year and concerns about supply chain timing.]

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
> [You're the lead PM for a new mobile app project at Apple. The team has exchanged emails about requirements for the past two weeks. Today's goal is to align on the schedule and main features before development starts. Your next step after this meeting is to get written sign-off from the US team. Sarah and three engineers are attending.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the timeline for the mobile app project. The leadership team is asking for a firm delivery date for the beta release.
> 
> [You're a senior developer at Apple reporting to David, your engineering manager. The beta was originally promised to leadership by March 15. You've just learned that integration testing will take at least two weeks longer than planned due to unexpected issues with the payment gateway API. David values early warnings and practical solutions, but he also needs to manage expectations upward.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David: I appreciate you flagging this early. Two weeks is significant—leadership was expecting that March 15 date. What's your plan to recover time, and what's the new target you're looking at?
> 
> [You're still in the conversation with David. He wants to understand the full picture before he updates his own manager.]

</details>
