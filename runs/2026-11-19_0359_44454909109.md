# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v2.0 · production · 2 runs each · 2026-11-19 03:59 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production |
|---|---|
| C1 Out of scope (Coach) | 2/2 |
| C2 Coach starter: first 90 days | 2/2 |
| C6 Profile save, then use (Coach) | 2/2 |
| D1 Mode switch: Role-play → Coach → back | 1/2 (1 flaky) |
| **Total (first try)** | **7/8** |

## Runs
- production-1: GREEN · PASS 4 · FAIL 0 · FLAKY 0 · ERROR 0
- production-2: GREEN · PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 03:58 UTC

**PASS 4 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 13 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment. Focus on humility and proactive learning rather than proving yourself immediately.
> 
> • **Map the landscape**
>   - Understand your role in the team, your team's role in the department, and the department's role in the company.
>   - Learn where the company sits in its market.
> 
> • **Set your direction**
>   - Decide where you want your career to go.
>   - Let that guide what you learn and which opportunities you pursue, even if your long-term goal is outside the company.
> 
> • **Learn proactively**
>   - Ask questions boldly while you are new.
>   - Study internal documents and learn from coworkers.
>   - Avoid being overly aggressive; listen and stay flexible.
> 
> • **Make a specific plan**
>   - Focus on learning first, then build a concrete plan.
>   - Don't worry about performance ratings too early.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"stated"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="stated" learner_goal="lead client presentations confidently"/&gt;
> 
> This is covered in the course:
> 
> **ICE method for meeting openings**
> 
> 1. **Introductions**
>    - State the meeting topic, your name, role, and how you'll contribute
>    - *"Hi everyone. Today we're kicking off the CRM integration for the sales team. I'm D, the PM on this project, and I'll be managing the timeline and requirements."*
> 
> 2. **Context**
>    - Past: how you got here
>    - Present: today's topics and goal
>    - Future: next step with a deadline
>    - *"We've had emails going back and forth for two weeks. Today we'll align on the rollout plan and open issues. The goal is to get sign-off from the US leads by next Friday."*
> 
> 3. **Expectations**
>    - Interaction: *"Please hold questions for the end"* or *"Feel free to interrupt"*
>    - Detail level: *"We'll stay high level on technical architecture"*
> 
> **Quick tip for confidence:** Write your opening in advance and say it out loud twice. At Google, your US colleagues expect clarity more than perfect grammar.
> 
> Want to try this in a role-play, or do you want help with a specific meeting coming up?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
> 
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech. Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> **ICE method for meeting openings**
> 
> 1. **Introductions**
>    - State the meeting topic, your name, role, and how you'll contribute
>    - *"Hi everyone. Today we're kicking off the CRM integration for the sales team. I'm D, the PM on this project, and I'll be managing the timeline and requirements."*
> 
> 2. **Context**
>    - Past: how you got here
>    - Present: today's topics and goal
>    - Future: next step with a deadline
>    - *"We've had emails going back and forth for two weeks. Today we'll align on the rollout plan and open issues. The goal is to get sign-off from the US leads by next Friday."*
> 
> 3. **Expectations**
>    - Interaction: *"Please hold questions for the end"* or *"Feel free to interrupt"*
>    - Detail level: *"We'll stay high level on technical architecture"*
> 
> **Quick tip for confidence:** Write your opening in advance and say it out loud twice. At Google, your US colleagues expect clarity more than perfect grammar.
> 
> Want to try this in a role-play, or do you want help with a specific meeting coming up?
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · PASS

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I think we should list traditional coffee first on the menu. It stays true to our brand, and customers expect it when they walk in."
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team. I'm Bob, a senior marketing analyst. We're discussing the new in-store menu layout for summer. I want traditional coffee listed first. You know iced frappuccinos are our top sellers in summer and drive most revenue. Hint: you could honestly agree that brand consistency matters, or that traditional coffee is important to our identity.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the **feedback sandwich** to disagree while keeping the discussion open:
> 
> • **Partially agree** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand…"
> 
> • **State your opinion with a reason** — use facts or data
>   - "…but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> The goal: express your view during discussion, then move forward together once the team decides.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 66 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I appreciate that you're thinking about rollout time, but I'm not sure I follow — are you saying a trial would be faster, or that the full change itself takes too long to implement?"
> 
> [We're continuing the menu discussion at Starbucks headquarters. You partially agreed and raised a concern, but I need to understand your reasoning before I can engage. What data or priority should I consider?]

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v2.0 · 2026-11-19 03:59 UTC

**PASS 3 · FAIL 0 · FLAKY 1 · ERROR 0**

| Case | Label | Result | Failed checks (last attempt) |
|---|---|---|---|
| C1 Out of scope (Coach) | BLOCKING | PASS | – |
| C2 Coach starter: first 90 days | BLOCKING | PASS | – |
| C6 Profile save, then use (Coach) | BLOCKING | PASS | – |
| D1 Mode switch: Role-play → Coach → back | BLOCKING | FLAKY | passed on rerun; first try: T3: words ≤ 120 |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review notes are for you to judge.

### C1 Out of scope (Coach) · BLOCKING · PASS

**T1 [QA]** "What's for dinner?"
- ✓ contains "outside what I can help with"
- ✓ link: no link
- ✓ profile: no profile line
- ✓ words ≤ 60: 22 words
- ✓ global checks G1–G4
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 Coach starter: first 90 days · BLOCKING · PASS

**T1 [QA]** "What should I do in my first 90 days?"
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ list items ≥ 2: 13 items
- ✓ global checks G1–G4
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> Use your first 90 days to learn, ask questions, and understand your new environment before trying to change things.
> 
> • **Map your place in the organization**
>   - Your role in the team
>   - The team's role in the department
>   - The department's role in the company
>   - The company's place in its market
> 
> • **Decide your career direction**
>   - Let your long-term goal guide what you learn and which opportunities you pursue, even if that goal is outside the company
> 
> • **Stay humble and learn proactively**
>   - Previous success does not automatically transfer to a new company
>   - Listen more than you push
>   - Ask questions boldly while you are new
>   - Learn from coworkers and internal documents
>   - Focus on learning and making a specific plan rather than worrying about performance ratings
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C6 Profile save, then use (Coach) · BLOCKING · PASS

**T1 [QA]** "I'm D, a PM at Google working on an internal company CRM. I want to sound more confident when I lead meetings with our US team."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["google"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: fields present ["industry","goal"]
- ✓ profile: goal contains any of ["meeting","confident","lead"]: saved {"name":"D","role":"PM","company":"Google","industry":"tech","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ global checks G1–G4
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> &lt;profile learner_name="D" learner_role="PM" learner_company="Google" learner_industry="tech" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> [I’ve saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> The ICE method gives your opening a clear structure, so you sound prepared and in control.
> 
> 1. **Introductions**
>    - State the meeting topic, your name, role, and how you'll contribute.
>    - *"Today we're kicking off the CRM integration. I'm D, the PM, and I'll manage the timeline and be your main contact for requirements."*
> 
> 2. **Context**
>    - Past: how you got here.
>    - Present: today's topics and goal.
>    - Future: next step with a deadline.
>    - *"We've had emails going back and forth for two weeks. Today we'll confirm the data model and rollout phases. The goal is alignment before engineering starts. I'll send a written summary to leadership by next Monday."*
> 
> 3. **Expectations**
>    - Interaction: when to ask questions.
>    - Detail level: technical or high level.
>    - *"This will be a detailed discussion, so please hold questions until after each section."*
> 
> Practice tip: write your opening out once before the meeting. It takes two minutes and removes filler words like "um" and "maybe."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

**T2 [QA]** "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: tech (guessed from the company). Learning goal: lead client presentations confidently.
- ✓ starts with "This is covered in the course:"
- ✓ link: lesson link
- ✓ profile: no profile line
- ✓ doesn't contain any of ["what is your role","what's your role","which company","where do you work"]
- ✓ global checks G1–G4
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method to open with confidence and clarity.
> 
> **1. Introductions**
> - State the meeting topic, your name, role, and how you'll contribute.
> - *"Today we're reviewing the CRM rollout plan. I'm D, the PM, and I'll run the timeline and flag any blockers."*
> 
> **2. Context**
> - Past: how you got here.
> - Present: today's topics and goal.
> - Future: next step with a deadline.
> - *"We've had sync emails with the US team this week. Today we'll confirm the data model and the pilot schedule. We need written sign-off from leadership by next Friday so engineering can start."*
> 
> **3. Expectations**
> - Interaction: when should people ask questions?
> - Detail level: technical deep-dive or high-level?
> - *"We'll stay high-level on architecture and save technical details for the follow-up with the engineers. Feel free to interrupt if something doesn't make sense."*
> 
> **Quick tip:** As a PM at Google, your team expects you to own the flow. Ending Context with a specific deadline ("by next Friday") signals you're managing the project, not just the meeting.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 Mode switch: Role-play → Coach → back · BLOCKING · FLAKY

**Attempt 1 (failed, so it was rerun)**

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> "I think we should list the traditional coffee drinks first on the new menu. It stays true to our brand, and customers who come in for a classic experience will find them right away."
> 
> [We're at Starbucks headquarters in Seattle. You're a product manager on the menu team. Bob is a senior marketing analyst on your team. We're discussing the layout for the new digital menu boards rolling out next quarter.]
> 
> [Hint: you could honestly agree that brand consistency matters, or that traditional coffee has loyal customers.]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree while keeping the discussion open:
> 
> • **Partially agree first** — show you understand their view
>   - "I understand that we want to stay true to our traditional coffee brand."
> 
> • **State your opinion with a reason** — use facts or data if you have them
>   - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives rather than shutting down the idea
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> The goal is to encourage discussion, not win the argument. Once the team decides, move forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✗ words ≤ 120: 640 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> [RP mode is active. The learner is continuing the "Disagree with a coworker" scene with Bob. I need to stay in character as Bob and react to what they said.]
> 
> Let me check their message against the feedback sandwich method:
> 1. Partially agree first — they said "I understand the benefit you're aiming for" — this counts as partial agreement, though it's a bit thin/generic.
> 2. State their own opinion with a reason — they said "I'm concerned about the time this would take" — this is an opinion with a reason.
> 3. Keep the discussion open — they asked "Could we compare it with a smaller trial before deciding?" — this is an alternative suggestion, keeping it open.
> 
> Bob should respond to the quality of their reasoning. Their reasoning is decent — they partially agreed, gave a concern, and proposed an alternative. Bob should be engaged but maybe a bit defensive about "time" since he didn't mention time in his original point. Actually, let me re-read: Bob's original idea was about brand and customer experience. The learner introduced "time" as a concern, which is a new objection not directly related to Bob's stated reasoning. Bob might push back slightly or ask for clarification, while still being open to the trial idea.
> 
> Actually, looking at the scene rules: "Bob responds to the quality of the learner's reasoning: a little defensive at harsh disagreement, engaged with good reasons, open to alternatives." The learner wasn't harsh, they were reasonable. So Bob should be engaged, maybe as…

**Attempt 2**

**T1 [RP]** "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Scene sent: Disagree with a coworker
- ✓ doesn't contain any of ["Reply with a number"]
- ✓ bracket line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> &lt;character name="Bob" gender="male"/&gt;
> 
> I think we should list traditional coffee first on the new menu. It honors our brand heritage, and customers who come in for a classic espresso experience will find what they want right away.
> 
> [Setting: Starbucks headquarters, Seattle. You're a product manager on the menu team. Bob is your teammate. The team is finalizing the layout for the new in-store menu boards. Bob's proposal has a real strength—brand identity—but there's also data he's overlooking. Your goal: disagree professionally and steer the team toward a better decision. Hint: what can you honestly agree with in his point?]

**T2 [QA]** "How can I politely disagree with the idea?"
- ✓ global checks G1–G4
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV1rt4y1z7P6/

> This is covered in the course:
> 
> Use the feedback sandwich to disagree while keeping the discussion open:
> 
> • **Partially agree first** — show you understand their view:
>   - "I understand that we want to stay true to our traditional coffee brand."
>   - "It makes sense that regular customers would expect to see the classics first."
> 
> • **State your opinion with a reason** — use facts or data if you have them:
>   - "But our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales."
> 
> • **Keep it open** — invite alternatives rather than shutting down:
>   - "Are there other alternatives?"
>   - "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> The goal is to encourage discussion, not win the argument. Once the team decides, move forward together.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV1rt4y1z7P6/

**T3 [RP]** "I understand the benefit you're aiming for, but I'm concerned about the time this would take. Could we compare it with a smaller trial before deciding?"
- ✓ no feedback
- ✓ doesn't contain any of ["Reply with a number","Switched to"]
- ✓ words ≤ 120: 60 words
- ✓ global checks G1–G4
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I hear you on wanting to test first, but a smaller trial still means designing a second layout, running a pilot, and then reconvening—that's easily four to six weeks. The menu boards need to go to print by month-end for the summer rollout.
> 
> What data are you seeing that makes you think a trial would change the outcome?

</details>
