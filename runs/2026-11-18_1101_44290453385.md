# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 2 runs each · 2026-11-18 11:01 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C5 Custom scene with profile (non-blocking) | 0/2 (2 flaky) |
| S5 Clear switch: meeting opener to a project delay | 2/2 |
| S8 Discovery: customer success exploring client needs | 2/2 |
| **Total (first try)** | **4/6** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | staging |
|---|---|
| C5 | 0/2 · baseline 0% |

## Runs
- staging-1: GREEN · PASS 2 · FAIL 0 · FLAKY 1 · ERROR 0
- staging-2: GREEN · PASS 2 · FAIL 0 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 11:00 UTC

**PASS 2 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C5 Custom scene with profile | NON-BLOCKING | FLAKY | passed on rerun; first try: T1: doesn't contain any of ["Start with your introduction"] |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FLAKY | 0% (9 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FLAKY

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
> Thanks for organizing this. I'm ready when you are.
> 
> [You are a PM at Apple. Sarah is a retail operations lead on your team. You're kicking off a meeting about the holiday sales plan for China retail stores. The goal is to align on promotions, staffing, and inventory for November and December.]
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
> Thanks for pulling this together, D. I'm Sarah, the retail operations lead for Greater China. I've been looking at the Q4 numbers and there's a lot we need to align on before November hits.
> 
> [You're kicking off a meeting with Sarah and the China retail team at Apple. The goal is to align on the holiday sales plan. Sarah is ready for you to open the meeting.]

### S5 Clear switch: meeting opener to a project delay · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Control: the built-in opener starts as usual.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> "Thanks for organizing this kickoff. I'm ready when you are."
> 
> [You're the lead PM kicking off a new mobile app project at Apple in Cupertino. Sarah is an engineer on your team. Over the past week, there have been emails back and forth about requirements. Today's goal is to align on the schedule and main features so development can begin. The next step will be getting sign-off from the US leadership team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> "I was just about to ask you for a status update on the GPS accuracy project. Where do we stand?"
> 
> [You're a senior engineer at Tesla in Palo Alto. David is your manager. The project was supposed to hit 2% error rate by next Friday for integration testing, but your team just discovered a data pipeline issue that will delay you by two weeks. David doesn't know yet.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> "Two weeks is a significant slip. Walk me through what you found and what your recovery plan looks like."
> 
> [David listens, arms crossed. He has a quarterly review with leadership next week where this project is a key milestone.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Lisa" gender="female"/&gt;
> 
> Thanks for making the time. We've been looking forward to getting started, but to be honest, our current workflow is pretty messy and we're not totally sure what we actually need from your platform yet.
> 
> [You're a customer success manager at a software company. Lisa is the operations director at a mid-sized logistics firm in Chicago. This is your first discovery call. She has budget approval but her team is skeptical about switching tools again after a bad experience last year. Your goal is to understand her challenges and what success would look like so you can configure the product correctly.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 67 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Well, the biggest pain point is shipment tracking. Right now we're juggling three different spreadsheets and a shared email inbox, so when a customer calls asking where their order is, my team spends ten or fifteen minutes hunting for the answer. Last month we lost a $40,000 account because we gave them the wrong delivery date twice. 
> 
> [Your turn. What else do you want to know?]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 11:01 UTC

**PASS 2 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C5 Custom scene with profile | NON-BLOCKING | FLAKY | passed on rerun; first try: T1: doesn't contain any of ["Start with your introduction"] |
| S5 Clear switch: meeting opener to a project delay | BLOCKING | PASS | – |
| S8 Discovery: customer success exploring client needs | BLOCKING | PASS | – |

## Non-blocking cases
Reported only; they never turn the run red. Baseline = how often the case passed on the first try in the last 10 earlier runs of this app.

| Case | This run | Baseline | Note |
|---|---|---|---|
| C5 | FLAKY | 0% (9 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FLAKY

**Attempt 1 (failed, so it was rerun)**

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
> Thanks for setting this up, D. I'm Sarah, the retail operations lead for Greater China. I've got the regional store managers on the line with me. We're all curious what headquarters has in mind for the holiday push this year.
> 
> [You're the lead PM running a kickoff with Apple's China retail team. Sarah and the managers are ready for your opening. The goal: align on the holiday sales plan.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up, D. I'm ready when you are.
> 
> [You're a PM at Apple, meeting with Sarah, the retail lead for Greater China. The team has exchanged emails about the holiday sales plan for the past two weeks. Today's goal is to align on promotional timing, inventory targets, and staffing for the November–January period. Your next step after this meeting is to share a consolidated plan with the US retail team by next Monday.]

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
> [You're the lead project manager for a new mobile app at Apple. The team has exchanged several emails about requirements over the past two weeks. Today's goal is to align on the schedule and main features before development begins. The next step is to get written sign-off from the US team. Sarah is a teammate joining remotely from Cupertino.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the timeline for the mobile app. The leadership team is asking for an update before the board meeting next week.
> 
> [You're a project manager at Apple reporting to David, your engineering director in Cupertino. The app was scheduled for internal testing by March 15, but integration issues with the payment system will push that back by about two weeks. David has been supportive of the team but is under pressure to hit the original date. He doesn't know about the delay yet.]
> 
> What can you tell me?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Two weeks? That's going to be tight for the board meeting. Walk me through what you're seeing and what your recovery plan looks like.
> 
> [David leans forward, concerned but listening. He needs details to take upstairs.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> 
> &lt;character name="Priya" gender="female"/&gt;
> 
> Hi there, thanks for coming by. We're excited to get started, but I'll be honest — we've had some mixed experiences with software rollouts before, so I'm hoping this one goes more smoothly.
> 
> [You're meeting Priya, Operations Director at a mid-sized logistics company in Chicago. She's your new client's main point of contact. Your goal: understand her team's needs, concerns, and priorities before configuring the product.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 83 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're juggling three different tools to track shipments, and none of them talk to each other. My team spends about six hours a week just copying data between systems and fixing errors from manual entry. Last month we lost a client because a delivery went to the wrong warehouse — nobody caught it in time.
> 
> We need one place where everyone can see the same information in real time, especially our drivers and the warehouse floor. What else should I tell you?

</details>
