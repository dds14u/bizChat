# Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 04:40 UTC

**PASS 2 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C3 Scene card: Start a meeting, then a full ICE opening · PASS

**T1 [RP]** "Start the role-play scene "Start a meeting". Difficulty: Easy."
Scene sent: Start a meeting
- ✓ global checks G1–G4
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Thanks for joining. I'm looking forward to hearing how we'll move this forward.
> 
> [We're at Apple in Cupertino. You're the lead PM kicking off a new app project. I'm Sarah, a teammate. Our goal is to align on the plan and next steps.]
> 
> [Start with your introduction.]

**T2 [RP]** "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the schedule. Over the past two weeks we've had a lot of emails about the main features. Today's goal is to agree on the schedule, and the next step is to send a timeline to leadership by next Friday. Please ask questions anytime, and this will be a detailed discussion."
- ✓ feedback score ≥ 4: score 5
- ✓ global checks G1–G4
- [ ] Doesn't ask the learner to redo a step they already covered.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> Thanks, that's helpful. I appreciate the clear timeline.
> 
> **Course score: 5/5**: You covered all three ICE steps with specific details and a timed next step.
> 
> **How it went:** A strong, complete opening that gives the team confidence in the plan.
> 
> **What worked:** Your Context covered past ("a lot of emails about the main features"), present ("agree on the schedule"), and future ("send a timeline to leadership by next Friday") with a clear deadline. Your Expectations set both interaction level ("ask questions anytime") and detail level ("detailed discussion").
> 
> **What to improve:** No major gap. If you wanted to add one thing, you could say how *you* specifically will contribute beyond managing schedule — for example, "I'll also be the main point of contact for requirements."
> 
> **Also worth noting:** "A lot of emails" is fine; "quite a few emails going back and forth" sounds slightly more natural for a kickoff.
> 
> **Try this instead:** "Hi everyone, I'm Lee, the lead PM for this app launch. I'll manage the schedule and be the main point of contact for requirements. Over the past two weeks we've had quite a few emails going back and forth about the main features. Today we'll agree on the schedule and call out any risks. The next step is to send a timeline to leadership by next Friday. Please ask questions anytime — this will be a detailed discussion."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> Want to try again, or pick a new scene?

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

> &lt;character name="Sarah" gender="female"/&gt;
> 
> Thanks for setting this up. I'm looking forward to getting aligned today.
> 
> [We're at Tesla in Austin. You're the lead project manager kicking off a new mobile app for tracking charging station availability. Over the past week, there have been emails back and forth between the design and engineering teams. Today's goal is to agree on the feature set and timeline so development can begin. Your next step after this meeting is to get leadership sign-off. Sarah is a senior engineer attending to help finalize the technical scope.]
> 
> [Start with your introduction.]
