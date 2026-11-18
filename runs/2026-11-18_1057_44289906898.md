# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 2 runs each · 2026-11-18 10:57 UTC

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

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:56 UTC

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
| C5 | FAIL | 0% (7 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FAIL

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
> Thanks for organizing this. I'm ready when you are.
> 
> [You are a PM at Apple headquarters. Sarah is a retail operations lead on your team. You're kicking off a meeting to align on the China holiday sales plan. Over the past two weeks, there have been emails back and forth with the China retail team about promotional timing and inventory levels. Today's goal is to agree on the holiday promotion schedule and confirm inventory targets. The next step is to share a written plan with regional leadership by next Friday.]
> 
> [Start with your introduction.]

**Attempt 2**

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
> Thanks for organizing this. I'm ready when you are.
> 
> [You're a PM at Apple, leading a kickoff with Sarah and the retail team in Shanghai. Over the past two weeks, there have been emails back and forth about the Q4 holiday sales plan. Today's goal is to align on promotional timing, inventory targets, and key product focus for Greater China. The next step is to get written sign-off from the US retail leadership by next Friday so local teams can lock in store displays and staffing.]
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
> Thanks for organizing this kickoff. I'm ready when you are.
> 
> [You're the lead PM for a new mobile app project at Apple. The team is gathered for the first kickoff meeting. Over the past two weeks, there have been emails going back and forth about requirements and timing. Today's goal is to align on the schedule and main features so development can begin. The next step will be to share a timeline with leadership.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got it. Here's the situation.
> 
> [You work at Apple as a PM on a new mobile app. David is your direct manager. The project was supposed to ship in three weeks, but integration testing is taking longer than expected. You need to tell him the timeline is slipping by two weeks. David values early warning and a clear plan forward.]
> 
> I just got the latest test report. Everything on track for the original ship date?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Two weeks is a significant slip. Walk me through what you're seeing in testing and what your recovery plan looks like.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Priya" gender="female"/&gt;
> 
> Thanks for making the time. We're about two weeks from go-live and honestly, I'm not sure we've been clear enough about what we actually need. Your team sent over the standard onboarding checklist, but our setup is more complicated than that.
> 
> [You're a Customer Success Manager at the learner's software company. Priya is the Operations Director at a mid-sized logistics firm in Chicago. This is your first meeting with her. She has specific concerns about how the product will handle multi-warehouse inventory tracking, and she's skeptical that the default setup will work. Your goal: ask good discovery questions, understand her real constraints, and agree on a clear next step.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 102 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're running inventory across four warehouses using spreadsheets and a legacy system that doesn't talk to anything else. My team spends about six hours every Monday just reconciling numbers that don't match. Last month we had a $40,000 order ship from the wrong location because someone looked at outdated stock levels.
> 
> I'm hoping your platform gives us one place where every warehouse sees the same data in real time. But I need to understand how that actually works when our Chicago and Dallas locations use different barcode formats.
> 
> [She's answered your first question directly. What would you ask next?]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:57 UTC

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
| C5 | FAIL | 0% (7 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FAIL

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="tech" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this, D. I'm ready when you are.
> 
> [You are the PM leading a kickoff meeting with Sarah, the retail operations lead for Greater China, and her team in Shanghai. The goal is to align on the holiday sales plan. Over the past two weeks, there have been emails about inventory targets and promotional timing. Today you need to confirm the schedule, key markets, and staffing. The next step is to share a consolidated plan with the US retail team.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Technology","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="Technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for organizing this, D. I'm ready when you are.
> 
> [Apple, Beijing. You are the PM leading a kickoff with Sarah and the retail team. Over the past two weeks, there have been emails about the holiday sales plan. Today's goal is to align on promotions, staffing, and inventory for the China retail stores. The next step is to finalize the plan and get sign-off from the US team by next Friday so stores can prepare.]
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
> Thanks for organizing this. I'm ready when you are.
> 
> [We're at Tesla's Austin office. You're leading a kickoff meeting for a new mobile app project. Over the past two weeks, the team exchanged emails about requirements and timelines. Today's goal is to align on the schedule and key features so development can begin. The next step will be to get written approval from the US leadership team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the mobile app timeline before I update leadership.
> 
> [We're at Tesla's Austin office. You're a project manager on the new mobile app. I'm David, your manager. I just asked about the timeline because the quarterly review is coming up, and I need to know if we're still on track for the launch.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks? That's a significant slip. How many bugs are we talking about, and which areas are most affected? And what's your recovery plan—are we talking overtime, cutting scope, or pulling in more people?
> 
> [We're at Tesla's Austin office. You're a project manager reporting to me, David. The mobile app launch is key for the quarterly review, and leadership has already announced the date externally.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="inferred" learner_goal="lead client discovery meetings confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. We're about to roll out your platform company-wide, and honestly, we're not sure if the current configuration is going to work for all our teams. Some departments have very different workflows.
> 
> [You're a customer success manager at a software company. Maya is the operations director at a mid-sized logistics firm in Chicago. Her company just bought your platform. She needs to feel heard about her team's concerns before she commits to a full rollout. Ask your questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software (guessed from the company). Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 102 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now, our dispatch and warehouse teams are working off two separate systems that don't talk to each other. Dispatch plans routes in one tool, then warehouse staff manually re-enter everything into their inventory system to prepare shipments. It's slow, and we get mismatched data almost every day—wrong quantities, wrong delivery windows. Last month we had a shipment go to the wrong state because someone copied a zip code incorrectly.
> 
> We're hoping your platform can connect those two workflows so we stop doing double work and cut down on these errors.
> 
> [Your turn. What do you want to ask next?]

</details>
