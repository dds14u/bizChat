# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 2 runs each · 2026-11-18 10:54 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C5 Custom scene with profile (non-blocking) | 0/2 |
| S5 Clear switch: meeting opener to a project delay | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 |
| **Total (first try)** | **4/6** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | staging |
|---|---|
| C5 | 0/2 · baseline 0% |

## Runs
- staging-1: GREEN · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: GREEN · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:53 UTC

**PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | 0% (5 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FAIL

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
> Hi D, thanks for setting this up. I'm Sarah, the retail operations lead for the region. I know the holiday quarter is always intense, so I appreciate getting ahead of it.
> 
> [Apple, Shanghai. You're the PM leading this kickoff. Sarah is on the retail operations team. Goal: align on the holiday sales plan, including inventory targets and key promotions.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="tech" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for China. I know we're all busy heading into Q4, so I appreciate you pulling this together.
> 
> [You and Sarah are at Apple. The meeting is a kickoff for the holiday sales plan in China. Sarah manages retail operations across the region and needs alignment on timing, staffing, and product mix before she briefs her store managers. Your goal is to open the meeting with a clear introduction, context, and expectations using the ICE method.]
> 
> [Start with your introduction.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm looking forward to hearing what you have to say today.
> 
> [You're the lead PM kicking off a new mobile app project at Apple in Cupertino. Sarah is an engineer on your team. Over the past week, there have been emails back and forth about requirements and timeline. Today's goal is to align the team on scope and schedule so development can begin. The next step is to get sign-off from the design lead by next Wednesday. Sarah is ready to listen.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> Got it. Here's your manager.
> 
> &lt;character name="David" gender="male"/&gt;
> 
> Hey, I wanted to check in on the mobile app before the status review tomorrow. Leadership is expecting us to hit the original date. Where do we stand?
> 
> [You're a project manager at Apple in Cupertino. David is your direct manager. The app was supposed to ship in three weeks, but testing found integration issues that will delay release by about two weeks. You need to deliver the news and propose how to handle it. David has a quarterly review coming up and was counting on this launch.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> David: Two weeks is a significant slip. The quarterly review is in four weeks, and I was planning to show this launch as closed. Walk me through what you found and what your recovery plan looks like.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

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
> Thanks for setting this up. We're a mid-sized logistics company, about 400 people. We've been using spreadsheets and a legacy system to track shipments, and it's getting hard to manage as we grow. Your team reached out last quarter, and now we're evaluating whether your platform can actually handle our workflow.
> 
> [You work for a SaaS company; Elena is the Operations Director at a logistics firm in Chicago. She has budget authority but needs her team's buy-in. Goal: help Elena decide if your product fits, while she tests whether you understand her business.]
> 
> What would you like to ask first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 97 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now our operations team spends about six hours every Monday just reconciling shipment data across three different spreadsheets and our old TMS. Last month we had two cases where a container sat at port for four extra days because someone didn't see an update in one of the sheets. That's roughly twelve thousand dollars in detention fees each time, plus the client relationships.
> 
> I'm looking for one place where my team can see real-time status, set automated alerts, and run reports without exporting everything to Excel. What does your platform actually cover in that workflow?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:54 UTC

**PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C5 Custom scene with profile | NON-BLOCKING | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FAIL | 0% (5 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FAIL

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
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for East China. I know the holiday quarter is always critical for us, so I'm glad we're getting aligned early this year.
> 
> [You are a PM at Apple. Sarah is the East China retail lead. The meeting is a kickoff for the holiday sales plan. Over the past two weeks, there have been emails between Cupertino and the China retail team about inventory targets and promotional timing. Today's goal is to agree on the sales forecast, promotional calendar, and staffing plan for the holiday season. The next step is to finalize the plan and share it with the global retail VP by next Friday.]
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
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for Shanghai and Beijing. I've been looking at last year's numbers, and I think we need to make some big moves for the holiday season. What's on your mind for today's discussion?
> 
> [You are a PM at Apple. Sarah is the regional retail lead for China. The meeting is about the holiday sales plan for retail stores in Shanghai and Beijing. Your goal is to align on strategy and next steps.]
> 
> [Start with your introduction.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi, I'm Sarah. I'm looking forward to hearing what you have to say today.
> 
> [We're at Tesla's Shanghai office. You're the project lead for a new mobile app update that lets owners schedule service appointments. Over the past week, the team exchanged several emails about feature requirements and design mockups. Today's goal is to align on the final scope and timeline before development begins. The next step is to get sign-off from the US product team. You're leading this kickoff meeting with Sarah and three other teammates on the call.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the Alpha project timeline. The leadership team is asking for a status update for the board meeting next week, and I need to know if we're still on track for the original delivery date.
> 
> [We're at a mid-sized software company in Singapore. You're a senior engineer reporting to David, the engineering director. The Alpha project is a backend migration that other teams are waiting for. You need to tell David that the project will be delayed by two weeks due to unexpected integration issues. This is the first time you're raising the delay with him.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Thanks for flagging this early. Two weeks is a significant slip, and the mobile team is already scheduling their launch around our handoff. Walk me through what you're seeing in testing and what your recovery plan looks like.
> 
> [David listens, arms crossed, concerned but not angry. He needs details to take to the leadership team.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Hi there. Thanks for making the time to meet. I'm Maya, VP of Operations at Northbridge Logistics. We signed up for your platform about two weeks ago, but honestly, we're not sure where to start. Our team is still using spreadsheets for most of our shipment tracking, and the switch feels overwhelming.
> 
> [You're a customer success manager at a software company, meeting Maya at Northbridge Logistics in Chicago. She needs help moving from spreadsheets to your platform, and she's unsure about priorities. Your goal: understand her situation and guide her toward a clear setup plan. Ask your questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 78 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, our biggest pain point is visibility. I have twelve people across three warehouses entering shipment data into shared spreadsheets, and by Tuesday every week, no one trusts the numbers anymore. Version conflicts, manual errors, delays in updating—we're basically flying blind on inventory in transit. I need one place where my team can see real-time status without calling each other or scrolling through email threads.
> 
> What does your platform need from us to replace that?

</details>
