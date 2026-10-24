# Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.6 · 2026-10-24 05:25 UTC

**PASS 5 · FAIL 2 · FLAKY 1 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | PASS | – |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | PASS | – |
| D1 Mode switch: Role-play → Coach → back | FLAKY | passed on rerun; first try: T1: reply received |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T2: profile: company contains any of ["google"] (no profile line); T3: sandwich steps < 2 (found keep it open, move forward together) |

## Failed replies

### C5 T1 (attempt 1) [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
Profile sent: (empty)
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"

> <profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/>
> <character name="Sarah" gender="female"/>
> 
> Thanks for joining everyone. We're here to talk about the holiday sales plan for China retail. I'm Sarah, regional retail lead for Greater China. Looking forward to hearing your direction on this.
> 
> [Apple retail headquarters, Shanghai. You're D, a PM leading a kickoff with Sarah's regional retail team. There have been emails back and forth about Q4 priorities. Today's goal is to align on the holiday sales plan and key promotions. Next step is to share a consolidated plan with the US merchandising team by next Friday.]
> 
> [Start with your introduction.]

### C5 T1 (attempt 2) [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
Profile sent: (empty)
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"

> <profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="stated" learner_goal="lead client presentations confidently"/>
> 
> <character name="Sarah" gender="female"/>
> 
> Thanks for having us on the call. The retail team in China is looking forward to hearing your plan for the holiday season.
> 
> [You're the lead PM at Apple, kicking off a meeting with the China retail team about the holiday sales plan. Over the past two weeks, there have been emails back and forth about inventory targets and promotional timing. Today's goal is to align on the sales forecast, key product focus, and store staffing for the holiday rush. The next step is to share a consolidated plan with the US leadership team by next Friday.]
> 
> [Start with your introduction.]

### D1 T1 (attempt 1) [RP] "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Profile sent: (empty)
- ✗ reply received: Dify: workflow failed: you have reached the knowledge base request rate limit of your subscription.

> 

### D2 T1 (attempt 1) [QA] "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ reply received: Dify: workflow failed: you have reached the knowledge base request rate limit of your subscription.

> 

### D2 T2 (attempt 2) [RP] "I'm a PM at Google and discussing whether or not we should wash eggs with a cowo…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line

> <character name="Jordan" gender="male"/>
> 
> I hear you on food safety, but washing eggs removes the natural protective coating. That could actually increase the risk of bacteria getting in. Shouldn't we keep them unwashed and just make sure storage conditions are clean?
> 
> [You and Jordan are PMs at Google in Mountain View. You're discussing a proposal for a new smart-farming data product. Jordan wants the platform to recommend unwashed egg handling to all farm clients. Your goal is to reach a team decision on the product's default guidance.]

### D2 T3 (attempt 2) [QA] "I'm now a PM at an egg farm and discussing ML models. How should I approach this…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ sandwich steps < 2: found keep it open, move forward together

> <profile learner_role="PM" learner_company="egg farm" learner_industry="Egg farming" learner_industry_source="stated" learner_goal="discuss ML models at work"/>
> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Use the **feedback sandwich** method when you disagree with a coworker:
> 
> 1. **Start positive** — honestly agree with part of their view.
> 2. **State your opinion and why** — give a specific reason, with data if possible.
> 3. **Keep it open** — end friendly and ask about alternatives.
> 4. **Move forward together** — once decided, support the team choice.
> 
> Example as a PM at your farm:
> 
> > "I understand that unwashed eggs keep their natural coating, which matters for smaller farms. But our data shows that 80% of our large-scale clients already wash eggs to meet retail standards. Recommending unwashed handling as the default could make the product irrelevant for most buyers. Could we make it configurable by farm size or region instead?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

## For review (advisory)

### C1 T1 [QA] "What's for dinner?"
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 T1 [QA] "What should I do in my first 90 days?"
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> • Learn first. Use this time to ask questions and understand your new environment, not to rush for quick results.
> 
> • Map your place. Understand your role in the team, your team's role in the department, the department's role in the company, and the company's place in its market.
> 
> • Stay humble. Your past success may not apply here in the same way. Listen more than you push, and avoid being overly aggressive.
> 
> • Learn proactively. Read internal documents, talk to coworkers, and ask bold questions while you are still new.
> 
> • Plan before worrying about ratings. Focus on making a specific learning plan rather than obsessing over early performance ratings.
> 
> • Set your direction. Decide where you want your career to go, even if your long-term goal is outside the company. Let that guide what you learn and which opportunities you pursue.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/

### C3 T1 [RP] "Start the role-play scene "Start a meeting". Difficulty: Easy."
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're here to kick off the new mobile app project, and I'm looking forward to getting us all aligned.
> 
> [You're the project lead at Tesla, running a kickoff meeting for a team of engineers and designers in Austin. Over the past week, there have been a few email threads about features and timelines. Today's goal is to confirm the schedule and key features so development can begin. The next step will be to share a timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C3 T2 [RP] "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the sc…"
- [ ] Doesn't ask the learner to redo a step they already covered.

> Thanks Lee, that sounds like a solid plan. We're all set to follow your lead.
> 
> Course score: 5/5 — You covered all three ICE steps clearly and in order.
> 
> How it went: Great job! You gave a clear introduction, full context with past, present, and future, and set both expectations in one go.
> 
> What worked:
> - "I'm Lee, the lead PM for the new app launch, and I'll manage the schedule" — Introduction: you named yourself, your role, and how you'll contribute to the project.
> 
> What to improve:
> - Nothing major. One tiny refinement: "Please ask questions anytime, and this will be a detailed discussion" works well together, but you could make the interaction expectation even clearer with something like "please feel free to interrupt if you have any questions."
> 
> Also worth noting: "A lot of emails" is fine, but "quite a few emails going back and forth" sounds slightly more natural for describing ongoing discussion.
> 
> Try this instead:
> "Hi everyone, I'm Lee, the lead PM for this app launch. I'll be managing the schedule and also the main point of contact for requirements. We've had quite a few emails going back and forth about the main features. Today we'll agree on the schedule and confirm the key features, so that everyone is aligned before development starts. We hope to share a timeline with leadership by next Friday. Please feel free to interrupt if you have any questions or comments — this will be a detailed discussion."
> 
> Want to try again without cues, doing all three steps in one go?…

### C4 T2 [RP] "1"
- [ ] Starts the built-in meeting-opening scene with a character.

> Great, let's kick this off.
> 
> Hi everyone, thanks for joining. I'm Sarah, on the marketing side. We're excited to hear your plan for getting this website update moving.
> 
> [Your team at Apple is launching a refreshed customer support website. Over the past two weeks, there have been long email threads between your group and the design team about priorities and timelines. Today's goal is to align on the main features and the schedule so development can start. The next step is to share a timeline with leadership by next Friday. You are leading this kickoff meeting.]
> 
> [Start with your introduction.]

### C5 T1 [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> Thanks for having us on the call. The retail team in China is looking forward to hearing your plan for the holiday season.
> 
> [You're the lead PM at Apple, kicking off a meeting with the China retail team about the holiday sales plan. Over the past two weeks, there have been emails back and forth about inventory targets and promotional timing. Today's goal is to align on the sales forecast, key product focus, and store staffing for the holiday rush. The next step is to share a consolidated plan with the US leadership team by next Friday.]
> 
> [Start with your introduction.]

### C6 T2 [QA] "How do I start a meeting with my team?"
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Open meetings in three steps, in this order:
> 
> 1. Introductions
>    - One or two statements about the meeting topic
>    - Your name, role, and how you will contribute
> 
> 2. Context (past, present, future)
>    - Past: how you got to today's meeting
>    - Present: today's topics and goal
>    - Future: next steps with a sense of time
> 
> 3. Expectations
>    - Level of interaction: when people should ask questions
>    - Level of detail: high-level or deep into specifics
> 
> Example for your CRM project:
> "Hi everyone, today we're kicking off the CRM integration with the US team. I'm D, the lead PM, and I'll manage the roadmap and be your main point of contact for requirements. We've had quite a few emails going back and forth about the rollout. Today we'll walk through the timeline, confirm the feature set, and call out any risks, so we're aligned before development starts. We need sign-off from the US team by next Monday so we can start the sprint. We have a lot to cover, so please hold questions until the end."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 T1 [RP] "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> I think we should list traditional coffee first on the store menu. It stays true to our brand, and customers expect to see it there.
> 
> [Setting: Starbucks headquarters, Seattle. You and Bob are on the product team discussing a menu redesign for the summer rollout. Bob wants to prioritize traditional coffee on the menu. You are a product manager on the team. The goal is to reach a decision on the menu order. Hint: you could partly agree with Bob's point about brand identity, or with the bigger-picture goal of customer trust.]

### D1 T2 [QA] "How can I politely disagree with the idea?"
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the feedback sandwich to keep the discussion open and productive.
> 
> 1. Start positive by partially agreeing with the other side. Show you understand their perspective with phrases like "I understand," "I can see," or "it makes sense that."
> 2. State your own opinion and why you disagree, using facts or data if possible.
> 3. Keep the discussion open by asking a question about alternatives.
> 
> Example:
> "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"
> 
> You can also suggest a compromise: "Maybe we could try a digital display so that we can update the menus depending on the season."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D1 T3 [RP] "I understand the benefit you're aiming for, but I'm concerned about the time thi…"
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> I see your point about testing first. But a smaller trial still pushes our launch back by at least a month, and the summer season is our biggest sales window. If we wait, we miss it entirely.
> 
> [Hint: you could say "I understand that we want to stay true to our traditional coffee brand, but our iced frappuccinos are our best sellers during the summer. Listing them first will increase sales. Are there other alternatives?"]

### D2 T1 [QA] "How do I start a meeting?"
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> This is covered in the course:
> 
> Use the ICE method — three steps in this order:
> 
> 1. Introductions — one or two statements about the meeting topic, then your name, role, and how you'll contribute.
> 2. Context — past (how you got here), present (today's topics and goal), future (next steps with a deadline).
> 3. Expectations — level of interaction (e.g. "hold questions until the end" or "feel free to interrupt") and level of detail (high-level or technical).
> 
> Example opening as a PM:
> 
> > "Hi everyone, today we're kicking off the new tracking system for the farm. I'm Alex, the lead PM, and I'll manage the schedule and be your main point of contact for requirements. We've had emails going back and forth for two weeks. Today we'll walk through the requirements, confirm the timeline, and flag any risks, so we're aligned before work starts. We need sign-off from the operations team by next Monday so we can begin development. There's a lot to cover, so please hold questions until the end — we'll have time for discussion then."
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/

### D2 T2 [RP] "I'm a PM at Google and discussing whether or not we should wash eggs with a cowo…"
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> I hear you on food safety, but washing eggs removes the natural protective coating. That could actually increase the risk of bacteria getting in. Shouldn't we keep them unwashed and just make sure storage conditions are clean?
> 
> [You and Jordan are PMs at Google in Mountain View. You're discussing a proposal for a new smart-farming data product. Jordan wants the platform to recommend unwashed egg handling to all farm clients. Your goal is to reach a team decision on the product's default guidance.]

### D2 T3 [QA] "I'm now a PM at an egg farm and discussing ML models. How should I approach this…"
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV17j411b7Pg/

> [I've saved your details to your profile (if enabled). See more: top-right menu → About.]
> 
> This is covered in the course:
> 
> Use the feedback sandwich method when you disagree with a coworker:
> 
> 1. Start positive — honestly agree with part of their view.
> 2. State your opinion and why — give a specific reason, with data if possible.
> 3. Keep it open — end friendly and ask about alternatives.
> 4. Move forward together — once decided, support the team choice.
> 
> Example as a PM at your farm:
> 
> > "I understand that unwashed eggs keep their natural coating, which matters for smaller farms. But our data shows that 80% of our large-scale clients already wash eggs to meet retail standards. Recommending unwashed handling as the default could make the product irrelevant for most buyers. Could we make it configurable by farm size or region instead?"
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV17j411b7Pg/
