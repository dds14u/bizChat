# Golden set: RED

App: production · Spec: z_Chat_Regression_Test_v1.6 · 2026-10-24 05:22 UTC

**PASS 3 · FAIL 5 · FLAKY 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C1 Out of scope (Coach) | PASS | – |
| C2 Coach starter: first 90 days | PASS | – |
| C3 Scene card: Start a meeting, then a full ICE opening | FAIL | T2: feedback score ≥ 4 (no score) |
| C4 Menu path: greeting, then "1" | PASS | – |
| C5 Custom scene with profile | FAIL | T1: doesn't contain any of ["Start with your introduction"] (found "Start with your introduction") |
| C6 Profile save, then use (Coach) | FAIL | T1: profile: name = "D" (no profile line); T1: profile: role contains any of ["pm","product manager"] (no profile line); T1: profile: company contains any of ["google"] (no profile line); T1: profile: fields present ["industry","goal"] (missing industry, goal); T1: profile: goal contains any of ["meeting","confident","lead"] (no profile line); T2: starts with "This is covered in the course:"; T2: link: lesson link |
| D1 Mode switch: Role-play → Coach → back | FAIL | T1: bracket line: present |
| D2 Background in passing, workplace change, and lessons applied only when they fit | FAIL | T1: starts with "This is covered in the course:"; T1: link: lesson link; T2: profile: company contains any of ["google"] (no profile line); T2: character line: present; T3: profile: industry or company contains any of ["egg","poultry","farm","agri"] (no profile line) |

## Failed replies

### C3 T2 (attempt 1) [RP] "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the sc…"
Profile sent: (empty)
- ✗ feedback score ≥ 4: no score

> Thanks, Lee. That all sounds good — looking forward to working with you on this.
> 
> [Now set expectations for the meeting.]

### C3 T2 (attempt 2) [RP] "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the sc…"
Profile sent: (empty)
- ✗ feedback score ≥ 4: no score

> 

### C5 T1 (attempt 1) [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
Profile sent: (empty)
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"

> <profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/>
> <character name="Sarah" gender="female"/>
> 
> Thanks for having us on the call, D. We're looking forward to hearing the plan for the holiday season.
> 
> [You're leading a kickoff with the retail team at Apple. Over the past two weeks, there have been emails back and forth about Q4 priorities. Today's goal is to align on the holiday sales strategy and key promotions. The next step is to share a finalized plan with regional leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 T1 (attempt 2) [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
Profile sent: (empty)
- ✗ doesn't contain any of ["Start with your introduction"]: found "Start with your introduction"

> <profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/>
> <character name="Sarah" gender="female"/>
> 
> Thanks for joining, everyone. We're excited to see what the holiday season looks like this year.
> 
> [You're the lead PM for Apple's retail team, meeting in Shanghai. Over the past two weeks, your team has exchanged emails about inventory targets and promotional timing for the holiday sales plan. Today's goal is to align on the sales forecast, key promotions, and staffing needs before Q4 begins. The next step is to share a finalized plan with regional leadership by next Friday.]
> [Start with your introduction.]

### C6 T2 (attempt 1) [QA] "How do I start a meeting with my team?"
Profile sent: First name: D. Role: PM. Company: Google. Industry: software (guessed from the company). Learning goal: lead meetings with US team confidently.
- ✗ starts with "This is covered in the course:"
- ✗ link: lesson link

> 

### C6 T1 (attempt 2) [QA] "I'm D, a PM at Google working on an internal company CRM. I want to sound more c…"
Profile sent: (empty)
- ✗ profile: name = "D": no profile line
- ✗ profile: role contains any of ["pm","product manager"]: no profile line
- ✗ profile: company contains any of ["google"]: no profile line
- ✗ profile: fields present ["industry","goal"]: missing industry, goal
- ✗ profile: goal contains any of ["meeting","confident","lead"]: no profile line

> 

### C6 T2 (attempt 2) [QA] "How do I start a meeting with my team?"
Profile sent: (empty)
- ✗ starts with "This is covered in the course:"
- ✗ link: lesson link

> 

### D1 T1 (attempt 1) [RP] "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Profile sent: (empty)
- ✗ bracket line: present

> 

### D1 T1 (attempt 2) [RP] "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
Profile sent: (empty)
- ✗ bracket line: present

> 

### D2 T1 (attempt 1) [QA] "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ starts with "This is covered in the course:"
- ✗ link: lesson link

> 

### D2 T2 (attempt 1) [RP] "I'm a PM at Google and discussing whether or not we should wash eggs with a cowo…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✗ character line: present

> 

### D2 T3 (attempt 1) [QA] "I'm now a PM at an egg farm and discussing ML models. How should I approach this…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: industry or company contains any of ["egg","poultry","farm","agri"]: no profile line

> 

### D2 T1 (attempt 2) [QA] "How do I start a meeting?"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ starts with "This is covered in the course:"
- ✗ link: lesson link

> 

### D2 T2 (attempt 2) [RP] "I'm a PM at Google and discussing whether or not we should wash eggs with a cowo…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: company contains any of ["google"]: no profile line
- ✗ character line: present

> 

### D2 T3 (attempt 2) [QA] "I'm now a PM at an egg farm and discussing ML models. How should I approach this…"
Profile sent: Role: PM. Industry: Egg farming.
- ✗ profile: industry or company contains any of ["egg","poultry","farm","agri"]: no profile line

> 

## For review (advisory)

### C1 T1 [QA] "What's for dinner?"
- [ ] Declines without giving any food or cooking advice.

> Sorry, that's outside what I can help with. I focus on Business English, so try asking about emails, meetings, or workplace situations.

### C2 T1 [QA] "What should I do in my first 90 days?"
- [ ] The actions are concrete and come from the first-90-days lesson.
- [ ] G1: no lesson list set (LESSON_VIDEO_IDS), so check these links by hand: https://www.bilibili.com/video/BV19z4y1U7yL/

> This is covered in the course:
> 
> • Learn first. Use your first 90 days to understand your new environment—your role in the team, the team's role in the department, and the company's place in its market.
> 
> • Be humble and proactive. Your past success does not guarantee success here. Listen more than you push, ask questions boldly while you are new, and study internal documents.
> 
> • Set SMART goals. Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound. Replace vague plans with concrete outcomes and deadlines.
> 
> • Turn problems into goals. If a skill like networking is hard for you, make improving it a specific goal and practice consistently.
> 
> Watch the lesson: ▶️ https://www.bilibili.com/video/BV19z4y1U7yL/
> 
> What is your role and company? I can tailor examples to your situation.

### C3 T1 [RP] "Start the role-play scene "Start a meeting". Difficulty: Easy."
- [ ] The character's opening is short and supportive; the setup gives enough to practice ICE.

> Hi everyone, thanks for joining. We're excited to get started.
> 
> [You're leading a kickoff meeting at Apple for a new customer support app. Over the past week, the team has exchanged emails about the project scope. Today's goal is to align on the timeline and key features. The next step is to share a project plan with leadership by next Friday.]
> 
> [Start with your introduction.]

### C3 T2 [RP] "Hi everyone, I'm Lee, the lead PM for the new app launch, and I'll manage the sc…"
- [ ] Doesn't ask the learner to redo a step they already covered.

> 

### C4 T2 [RP] "1"
- [ ] Starts the built-in meeting-opening scene with a character.

> Great, let's kick off a project meeting.
> 
> "Hi everyone, thanks for joining. I'm Sarah, the design lead on this. Looking forward to hearing how we move forward."
> 
> [You're the project lead at Apple, running a kickoff for the new mobile app update. The team has exchanged emails for two weeks about features and timing. Today's goal is to align on the schedule and main priorities before development starts next month. The next step will be to share a final timeline with leadership by next Friday.]
> 
> [Start with your introduction.]

### C5 T1 [RP] "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to …"
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> Thanks for joining, everyone. We're excited to see what the holiday season looks like this year.
> 
> [You're the lead PM for Apple's retail team, meeting in Shanghai. Over the past two weeks, your team has exchanged emails about inventory targets and promotional timing for the holiday sales plan. Today's goal is to align on the sales forecast, key promotions, and staffing needs before Q4 begins. The next step is to share a finalized plan with regional leadership by next Friday.]
> [Start with your introduction.]

### C6 T2 [QA] "How do I start a meeting with my team?"
- [ ] Fits the advice to the learner's background where it helps; invents no conflicting background.

> 

### D1 T1 [RP] "Start the role-play scene "Disagree with a coworker". Difficulty: Medium."
- [ ] The character's idea has a real strength and a real weakness; the hint names a point the learner could agree with.

> 

### D1 T2 [QA] "How can I politely disagree with the idea?"
- [ ] Coaching advice based on the character's actual proposal, not a line spoken as the character.

> 

### D1 T3 [RP] "I understand the benefit you're aiming for, but I'm concerned about the time thi…"
- [ ] Replies as the character and continues the same discussion (no restart, recap or mode note).

> 

### D2 T2 [RP] "I'm a PM at Google and discussing whether or not we should wash eggs with a cowo…"
- [ ] A natural custom coworker discussion about washing eggs, not the built-in disagreement scene.

> 

### D2 T3 [QA] "I'm now a PM at an egg farm and discussing ML models. How should I approach this…"
- [ ] Advice fits discussing ML models at an egg farm and doesn't assume a disagreement or a coworker.

> 
