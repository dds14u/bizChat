# Golden set comparison: RED

Spec: z_Chat_Regression_Test_v1.8 · staging · 2 runs each · 2026-11-14 04:18 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | 2/2 |
| C4 Menu path: greeting, then "1" | 2/2 |
| C5 Custom scene with profile | 0/2 |
| **Total (first try)** | **4/6** |

## Runs
- staging-1: RED · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0
- staging-2: RED · PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 04:17 UTC

**PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone. I'm Sarah, the UX lead on this project. Looking forward to hearing what you have prepared.
> 
> [You're at Apple in Cupertino. You're the lead project manager kicking off a new internal app for store inventory. Over the past two weeks, there have been emails back and forth between the Cupertino team and the regional operations group. Today's goal is to align on requirements, confirm the schedule, and identify risks before development begins. The next step is to get written sign-off from the regional team by next Monday so development can start. Sarah and two other teammates are attending.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 4
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> [Now set expectations for the meeting.]
> 
> ---
> 
> **Feedback**
> 
> **Course score: 4/5**: You covered all three ICE steps clearly and in one go.
> 
> **How it went:** A strong, efficient opening that gave the team everything they needed to follow along.
> 
> **What worked:** "Please ask questions anytime, and this will be a detailed discussion" — this sets both the level of interaction and the level of detail in your Expectations step.
> 
> **What to improve:** Your Context step is solid, but the future step could be more specific about what the timeline is for — "send a timeline to leadership by next Friday" doesn't name the decision or outcome that timeline enables, such as getting sign-off to start development.
> 
> **Also worth noting:** "A lot of emails" is slightly informal; "quite a few emails" or "several email threads" fits a kickoff better.
> 
> **Try this instead:** "The next step is to share a timeline with leadership by next Friday so we can get sign-off and officially start development."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to try again without cues, doing all three steps in one go?

### C4 Menu path: greeting, then "1" · PASS

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

> "Hi everyone, thanks for joining. Today we're kicking off the new mobile app project for our store rollout."
> 
> I'm Sarah, a developer on the team. We've had some emails going back and forth about requirements and timing over the past two weeks, and we need to get aligned before development starts next month.
> 
> [You are the lead project manager for this app at Starbucks. The team is in Seattle. Sarah and three other teammates are attending. The goal is to agree on the schedule and main features so the team can start build next month.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

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
> Hi everyone, thanks for joining. I'm Sarah, the retail operations lead for Greater China. I know we're all busy with Q4 prep, so let's make this productive.
> 
> [You're the PM leading this meeting. The retail team is gathered to align on the holiday sales plan for China. Sarah is your key counterpart on the ground.]
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
> Hi D, thanks for setting this up. I'm Sarah, the regional retail lead for East China. I know the holiday quarter is always intense, so I'm glad we're getting aligned early.
> 
> We're launching the new product lineup in six weeks, and the marketing team in Cupertino just sent over their first draft of the holiday campaign. My concern is that the messaging feels very US-focused, and I'm not sure it'll resonate with shoppers here. I want to make sure our stores hit their targets.
> 
> [Apple retail team, Shanghai. You're the PM leading this kickoff. Goal: align on the China holiday sales plan. Start with your introduction.]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: RED

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 04:18 UTC

**PASS 2 · FAIL 1 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, and I'll be helping coordinate the testing phase once we get moving.
> 
> [This is a kickoff meeting at Apple for a new app project. You're the lead project manager. Over the past two weeks, the team exchanged emails about requirements and timing. Today's goal is to align on the schedule, key features, and risks before development begins. The next step will be getting written sign-off from the US team.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks, that's helpful. I can see where we're headed now.
> 
> **Course score: 5/5**: You covered all three ICE steps clearly and gave a timed next step.
> 
> **How it went:** A strong, complete opening that set a professional, organized tone for the meeting.
> 
> **What worked:** Your context was especially solid — "Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday" hit past, present, future, and a deadline.
> 
> **What to improve:** Nothing major. Your introduction named your role and contribution; your expectations covered both interaction and level of detail.
> 
> **Also worth noting:** "Please ask questions anytime" is friendly, though in a large or time-pressed meeting you might say "ask questions as we go" to keep it slightly shorter.
> 
> **Try this instead:** (Already strong — a minor polish:) "I'm Lee, the lead PM for this app launch, and I'll manage the schedule and be your main point of contact for requirements."
> 
> Want to try again without cues, doing all three steps in one go?

### C4 Menu path: greeting, then "1" · PASS

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

> "Hi everyone, thanks for joining. We're kicking off the new mobile app project today."
> 
> [You're the lead project manager at Apple in Cupertino, running a kickoff meeting with Sarah and the team. Over the past two weeks, there have been emails going back and forth about requirements and timing. Today's goal is to align on the schedule and main features so development can begin. The next step will be to share a timeline with leadership for sign-off.]
> 
> [Start with your introduction.]

### C5 Custom scene with profile · FAIL

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
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi everyone, thanks for joining. I'm Sarah, regional retail operations lead for Greater China. I know the holiday season is always intense for us, so I'm glad we're getting ahead of it early this year.
> 
> [Apple retail headquarters, Shanghai. You are D, a PM leading a kickoff with Sarah and the China retail team. Goal: align on the holiday sales plan and next steps.]
> 
> [Start with your introduction.]

**Attempt 2**

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"Consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"Consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="Consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> 
> &lt;character name="Sarah" gender="female"/&gt;
> 
> Hi D, thanks for setting this up. I'm looking forward to aligning on the holiday plan.
> 
> [Apple, Shanghai. You are the lead PM for Greater China retail. Sarah is a regional retail operations manager on your team. The goal of this meeting is to finalize the holiday sales plan for Q4. Over the past two weeks, there have been emails back and forth about inventory targets and promotional timing. Today you need to confirm the schedule, key promotions, and staffing model. The next step is to share the final plan with the US leadership team.]
> 
> [Start with your introduction.]

</details>
