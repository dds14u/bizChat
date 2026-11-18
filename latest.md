# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · staging · 3 runs each · 2026-11-18 10:34 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C5 Custom scene with profile (non-blocking) | 0/3 |
| S5 Clear switch: meeting opener to a project delay | 3/3 |
| S8 Discovery: customer success exploring client needs | 3/3 |
| **Total (first try)** | **6/9** |

## Non-blocking cases
Reported only; they never turn the run red. Each cell = passed on the first try / runs, then the baseline from earlier runs of that app.

| Case | staging |
|---|---|
| C5 | 0/3 · baseline 0% |

## Runs
- staging-1: GREEN · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: GREEN · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-3: GREEN · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:32 UTC

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
| C5 | FAIL | 0% (2 runs) |  |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C5 Custom scene with profile · NON-BLOCKING · FAIL

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
> Hi D, thanks for setting this up. I'm Sarah, the retail operations lead for Shanghai. I've been working with the regional stores on inventory forecasts, and I'm looking forward to aligning on the holiday plan.
> 
> [You're a PM at Apple, leading a kickoff with Sarah from retail operations in Shanghai. The goal is to align on the holiday sales plan. Over the past two weeks, there have been emails going back and forth about promotional timing and inventory targets. Today's meeting will walk through the sales forecast, confirm the promotional calendar, and identify any supply risks. The next step is to get sign-off from the US merchandising team.]
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
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, regional operations lead for Greater China retail. I know we're all busy with Q4 prep, so let's make this count.
> 
> [Apple retail headquarters, Shanghai. You are the PM leading this meeting. Sarah is on the retail ops team. The goal is to align on the holiday sales plan for China stores. Over the past two weeks, there have been emails back and forth about inventory targets and promotional timing. Today's goal is to confirm the schedule and key promotions so stores can prepare. The next step is to share a finalized plan with the US team for approval.]
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
> Hi everyone, thanks for joining. I'm Sarah, the engineering lead on this project. I'm looking forward to hearing what you've prepared for us today.
> 
> [This is a kickoff meeting at Apple in Cupertino. You're the project manager leading the meeting. The team has exchanged several emails about a new mobile app feature over the past two weeks. Today's goal is to align on requirements and timeline. One next step will be to get sign-off from the design team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the mobile app feature — the one we agreed would ship to QA by the end of this month. Where do we stand?
> 
> [This is a 1:1 at Apple in Cupertino. You are a project manager. I am David, your manager. I have been asking for updates every few days, and the deadline is two weeks away. The project will actually be two weeks late, and you need to tell me.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> &lt;character name="David" gender="male"/&gt;
> 
> Two weeks? That's a significant slip. We told the client end of month. Walk me through what you're seeing in testing and what your recovery plan looks like.
> 
> [This is still at Apple in Cupertino. David is your manager, and the client commitment is firm. He needs details before he can accept the delay or escalate further.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="understand client needs before product setup"/&gt;
> &lt;character name="Marcus" gender="male"/&gt;
> 
> "We've been using spreadsheets to track everything, and frankly, it's become unmanageable. Our team has grown from twelve to thirty-four people in eighteen months, and nothing talks to each other anymore."
> 
> [You're a customer success manager at a SaaS company. Marcus is the operations director at a mid-sized logistics firm in Chicago. He's agreed to a discovery call so you can configure the product to fit their workflow. He's frustrated but hopeful—he needs this to work. Ask your questions.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: understand client needs before product setup.
- ✓ no feedback
- ✓ words ≤ 120: 88 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> "Honestly? Right now we're bleeding time on manual data entry. Every shipment has to be logged in three places—our TMS, the customer portal, and a shared spreadsheet the finance team uses for invoicing. My warehouse supervisor spends about six hours a week just reconciling numbers that should already match. Last month we had a $12,000 billing dispute because someone copied a tracking number wrong."
> 
> [He leans back, clearly frustrated but watching you carefully. He's answered your first question directly. What do you want to ask next?]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:33 UTC

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
| C5 | FAIL | 0% (2 runs) |  |

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
> Hi D, thanks for setting this up. I'm Sarah, the retail operations lead for Shanghai. I know the holiday season is always intense for us, so I'm glad we're getting ahead of it early this year.
> 
> [Apple, Shanghai. You are the PM leading this kickoff. Sarah is on the retail operations team. Goal: align on the holiday sales plan.]
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
> Hi everyone, thanks for joining. I'm Sarah, the retail operations lead for the Shanghai region. I'm looking forward to hearing how we're going to approach the holiday season this year.
> 
> [This is the Apple retail team in Shanghai. You're the PM leading this kickoff meeting. Sarah and the team are here to align on the holiday sales plan. Over the past two weeks, there have been emails about inventory targets and promotional timing. Today's goal is to confirm the schedule, key markets, and risk areas. The next step will be getting sign-off from the US retail leadership.]
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
> Hi everyone, thanks for joining. I'm Sarah, the UX lead on this project. I'm looking forward to hearing the plan for today.
> 
> [We're at Tesla in Austin. You're the lead project manager for the mobile app redesign. Over the past two weeks, the team exchanged emails about priorities and user research findings. Today's goal is to align on the feature set and timeline before development begins. The next step will be to share a finalized roadmap with leadership by next Friday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Got it. Let me know when you're ready to start.
> 
> [You're at Tesla in Austin. You report to David, your engineering manager. You need to tell him that the mobile app redesign will be two weeks late because the API integration is taking longer than expected. The original deadline was end of month, and leadership has already announced the launch date internally.]
> 
> [You can describe a different situation anytime.]

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> Thanks for flagging this early. Two weeks is a real problem — leadership already announced the end-of-month launch internally. Walk me through what you're seeing and what recovery looks like.

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Hi there. You must be from the software side. I'm Marcus Chen, VP of Operations at Westridge Logistics. We were told you'd be helping us get set up, but honestly, I'm not sure where to start. Our current system is a mess.
> 
> [Westridge Logistics, Chicago. Marcus leads a 40-person team handling freight tracking across three warehouses. His company just signed with your platform after a competitor doubled their prices. He's skeptical about implementation timelines and worried his team will resist another new tool. Goal: the learner discovers Marcus's real priorities and concerns through questions.]

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
- ✓ no feedback
- ✓ words ≤ 120: 98 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> We track everything in spreadsheets right now—shipment IDs, carrier updates, delivery confirmations. My team spends maybe six hours a week just copying data between systems. Last month we lost a $200K contract because a client got the wrong delivery status. Twice.
> 
> So the software needs to fix that, obviously. But I'm also worried about the switch. We tried a new tool two years ago, half my team never used it, and we went back to spreadsheets in three months.
> 
> [Hint: you could ask about what made that rollout fail, or what would convince his team this time.]

</details>

---

<details><summary><b>staging-3</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-18 10:34 UTC

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
| C5 | FAIL | 0% (2 runs) |  |

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
> Hi everyone. Before we dive in, I wanted to say thanks for joining on short notice — I know the holiday season is already moving fast.
> 
> [You are the lead PM for Apple's retail team in China. Sarah is a regional operations manager based in Shanghai. The goal of this meeting is to align on the holiday sales plan and confirm who does what by when.]
> 
> [Start with your introduction.]

**Attempt 2**

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
> Hi everyone, thanks for joining. I'm Sarah, regional retail lead for Greater China. I know we're all busy with Q4 prep, so let's make this productive.
> 
> [You are D, a PM at Apple. Sarah is the regional retail lead for Greater China. The meeting is in Cupertino, connecting with the China retail team. Goal: align on the holiday sales plan for the China market.]
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
> Hi everyone — thanks for joining. I'm Sarah, on the product team. I'll be helping with requirements and user research on this project. Looking forward to hearing from you.
> 
> [This is a kickoff meeting at Tesla in Austin. You're the lead project manager for a new mobile app for owners to schedule service appointments. Over the past week, there have been emails going back and forth between design, engineering, and your team about priorities and timing. Today's goal is to align on the MVP features and confirm the schedule so development can begin. The next step will be to get written approval from the VP by next Wednesday.]
> 
> [Start with your introduction.]

**T2 [RP]** "Let's stop the meeting practice. Instead, I want to practice telling my manager that our project will be two weeks late."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ character line: present
- ✓ global checks G1–G4
- [ ] Starts a new scene with the manager (at most a one-line acknowledgment). Doesn't continue the opener or ask the learner to finish it first.

> &lt;character name="David" gender="male"/&gt;
> 
> Hey, do you have a minute? I wanted to check in on the Alpha project — I saw the status update this morning and it looks like we're behind. What's going on?
> 
> [This is a 1:1 at Apple in Cupertino. You're a senior project manager reporting to David, the engineering director. The Alpha project is a new security feature for iCloud. You discovered yesterday that integration testing is taking longer than expected because a third-party API changed without warning. The original ship date was June 15, and you now need until June 30. David has a quarterly review with the VP on June 20 where this feature was supposed to be demoed.]
> 
> What can I help you with?

**T3 [RP]** "Hi, I wanted to let you know the project will slip by about two weeks because testing found more bugs than expected. I have a plan to recover some of that time."
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The manager reacts to the delay (asks about the plan or the impact); not graded on introductions.

> I appreciate you flagging this early. Two weeks is a real hit — the VP demo is locked in for June 20. Walk me through the bugs and this recovery plan. How much time can you actually get back?
> 
> [You can describe a different situation anytime.]

### S8 Discovery: customer success exploring client needs · BLOCKING · PASS

**T1 [RP]** "I'm a customer success manager at a software company. I'm meeting a new client to understand their needs before we set up the product. Please play the client, and I'll ask the questions."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the client and leaves the questions to the learner.

> &lt;profile learner_role="customer success manager" learner_industry="software" learner_industry_source="stated" learner_goal="lead client discovery meetings confidently"/&gt;
> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for setting this up. We're excited to get started, but honestly we're not totally sure what the setup process looks like on our end.
> 
> [You're a customer success manager at a SaaS company. Maya is the operations director at a mid-sized logistics firm in Chicago. Her team signed up for your platform last month. She has one hour. Goal: understand her team's current workflow, their pain points, and what success looks like so you can configure the product correctly.]
> 
> What would you like to know first?

**T2 [RP]** "Thanks for your time today. What problem are you hoping our software will solve, and how are you handling it now?"
Profile sent: Role: customer success manager. Industry: software. Learning goal: lead client discovery meetings confidently.
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Answers as the client with realistic detail and room to follow up; doesn't coach or turn the questions back on the learner.

> Right now we're tracking shipments across three different spreadsheets and a shared email inbox. It's not sustainable—last month we missed a delivery window because the update was buried in a thread someone forgot to check. My team spends about six hours a week just reconciling data between those sources. We're hoping your platform gives us one place where everyone sees the same information in real time, so nothing falls through the cracks again.
> 
> [You can describe a different situation anytime.]

</details>
