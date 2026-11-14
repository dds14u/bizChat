# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v1.8 · production vs staging · 2 runs each · 2026-11-14 00:00 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | production | staging |
|---|---|---|
| H1 Held out: finance and IT on audit-software bugs | 2/2 | 2/2 |
| H2 Held out: editor exploring AI proofreading with engineering | 2/2 | 2/2 |
| H3 Held out: PM and engineering disagree on launch scope | 2/2 | 2/2 |
| **Total (first try)** | **6/6** | **6/6** |

## Runs
- production-1: GREEN · PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0
- production-2: GREEN · PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0
- staging-1: GREEN · PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0
- staging-2: GREEN · PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>production-1</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:58 UTC

**PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| H1 Held out: finance and IT on audit-software bugs | PASS | – |
| H2 Held out: editor exploring AI proofreading with engineering | PASS | – |
| H3 Held out: PM and engineering disagree on launch scope | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### H1 Held out: finance and IT on audit-software bugs · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I know the quarter-end deadline is tight, and we want to get this right. Before we dive in, can you walk me through which reports are affected and how far off the totals are? That'll help me prioritize the fixes."
> 
> [Setting: You're a finance analyst at your company. Marcus is the IT lead. You're meeting to decide which audit software bugs to fix first, with quarter-end closing in about two weeks. The goal is to agree on a priority order and a timeline for the fixes.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 65 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: "I hear you on the auditor deadline — that's non-negotiable. The totals issue is tricky though. Fixing it touches three different data sources, and we're short one backend developer this sprint. If we pull someone off the formatting work, that pushes the management dashboard to next month. Is there any flexibility on what the auditors actually need to see versus what we normally generate?"

### H2 Held out: editor exploring AI proofreading with engineering · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> Thanks for reaching out. I know the editorial team has been looking at ways to speed up the production cycle, and AI tools are getting a lot of attention right now. Before I share my thoughts, I'd like to understand your main concern — is it cost, turnaround time, or quality consistency you're most worried about?
> 
> [Setting: You're an editor at a publishing company. Maya is the engineering lead. The goal is to discuss whether AI proofreading could work for your books.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 91 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a smart place to start. Names and technical terms are actually the hardest part for AI — it handles grammar and style well, but it can "correct" a proper name into something more common, or miss specialized vocabulary entirely. A pilot on one book would cost roughly two to three thousand dollars, including setup and human review of the AI output.
> 
> What kind of technical terms does your list usually include — medical, legal, something else? And would your team have time to double-check the AI suggestions against your style guide?

### H3 Held out: PM and engineering disagree on launch scope · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Jordan" gender="male"/&gt;
> 
> I hear you on the timeline pressure, but honestly, cutting the onboarding tutorial feels like the cleanest way to protect the launch date. The core product is solid, and we can always add the tutorial in a point release.
> 
> [You are a PM at a tech company. Jordan is the engineering lead. The team is two weeks from code freeze on a new product launch, and the onboarding tutorial is at risk. Goal: disagree professionally and agree on scope or timeline.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 38 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's a fair point — user drop-off is real, and a simpler tutorial is better than none. What did you have in mind for "simpler"? We're talking maybe two or three screens instead of the full interactive walkthrough?

</details>

---

<details><summary><b>production-2</b></summary>

### Golden set: GREEN

App: production · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:59 UTC

**PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| H1 Held out: finance and IT on audit-software bugs | PASS | – |
| H2 Held out: editor exploring AI proofreading with engineering | PASS | – |
| H3 Held out: PM and engineering disagree on launch scope | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### H1 Held out: finance and IT on audit-software bugs · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I know the quarter-end deadline is tight, so I want to make sure we fix the right things first. Can you walk me through which reports are affected and how far off the totals are?"
> 
> [You're a finance manager at a global firm. Marcus is the IT lead. The goal is to agree on which software bugs to prioritize before your quarter-end audit deadline.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: "I hear you on the auditor deadline — that's non-negotiable. The totals bug is in the export module, and my team can start on it Monday. But the formatting issues aren't just cosmetic; they break the report layout that the auditors use to read the data. If we fix totals first and formatting second, are you confident the auditors can still read the reports on the 15th?"
> 
> [Hint: you could say "I see your point about formatting. What if we..."]

### H2 Held out: editor exploring AI proofreading with engineering · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> "I appreciate you reaching out. Before I dig into the technical side, can you tell me what your current proofreading process looks like and where you're hoping AI could help?"
> 
> [You are an editor at a publishing company. Marcus is an engineering lead at a tech firm. The conversation is about whether AI proofreading tools could fit into your book production workflow. You want to understand the possibilities and limits, and he wants to understand your quality standards before making any recommendations.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 75 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> "That's a smart place to start. Names and technical terms are actually the hardest part for most AI systems right now, because they don't follow standard grammar rules and the context doesn't always help. For a pilot on one book, we could set up a limited test with a custom glossary you provide, but I'd need to know: how does your team currently handle those terms, and who would review the AI output for errors?"

### H3 Held out: PM and engineering disagree on launch scope · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> I hear you on the deadline, but I think we need to cut the onboarding tutorial. It's adding two weeks, and we committed to leadership that we'd launch by end of quarter.
> 
> [You're a PM at a tech company. Marcus is the engineering lead. You're in a launch scope meeting, and the goal is to agree on what ships in the first release.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 85 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> I can see why user retention matters to you, but even a simpler tutorial still needs design and testing. That puts us back to the same problem. What would "simpler" look like in terms of days?
> 
> [Hint: you could say "I understand that we need to hit the end-of-quarter date, but our data shows that 40% of new users leave without guidance. A three-screen tooltip flow would take three days instead of two weeks. Are there other features we could cut instead?"]

</details>

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-13 23:59 UTC

**PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| H1 Held out: finance and IT on audit-software bugs | PASS | – |
| H2 Held out: editor exploring AI proofreading with engineering | PASS | – |
| H3 Held out: PM and engineering disagree on launch scope | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### H1 Held out: finance and IT on audit-software bugs · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Hey, thanks for flagging this. I know quarter-end is tight. Before we dive in, can you walk me through which reports are affected and how far off the totals are? That'll help me figure out where to start."
> 
> [You're a finance manager at your company. Marcus is the IT lead. The goal: agree on which bugs to fix first before your quarter-end audit deadline.]
> 
> [You can describe a different situation anytime.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 71 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: "Fixing the totals first makes sense for the audit. The formatting issues are annoying, but they won't block sign-off. Here's the thing though — my team has two sprints before the 15th, and the totals bug touches three different modules. If we pull everyone onto that, we might not touch the formatting at all. Are you okay with that tradeoff, or is there a hard deadline for the formatting too?"

### H2 Held out: editor exploring AI proofreading with engineering · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I don't think AI proofreading is a good fit for books. We've tested it on documentation, and it misses tone, voice, and context. For a novel, that could change what the author meant.
> 
> [You're an editor at a publishing company. Maya is the engineering lead at a tech partner your company works with. You're meeting to explore whether AI proofreading tools could work for your books. She knows the tech but not publishing workflows. Goal: discuss whether it's viable and what a pilot might look like.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 106 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> That's a fair concern. Names and technical terms are actually where these tools struggle most—they learn from common patterns, so rare or invented words get "corrected" to something familiar. We've seen it change character names in documentation.
> 
> For a pilot, cost depends on what you mean by "try." A basic grammar check on one manuscript? Under five hundred dollars. But if you want the system trained on your style guide and genre conventions, we're talking two to three weeks of setup plus ongoing validation by your team.
> 
> What does accuracy look like for you? Zero errors, or good enough that your human proofreaders catch less?

### H3 Held out: PM and engineering disagree on launch scope · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;character name="Maya" gender="female"/&gt;
> 
> I hear you on the date, but the onboarding tutorial is a lot of work for a feature users might skip anyway. Most people just click through tutorials. If we cut it, we hit our launch date and we can add it in a follow-up release.
> 
> [You're a PM at a mid-sized SaaS company. Maya is the engineering lead. She wants to cut the onboarding tutorial to protect the launch date. The conversation is about scope vs. user experience. Difficulty: Medium.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
- ✓ no feedback
- ✓ words ≤ 120: 53 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's fair — I can see why drop-off in the first week would worry you. A simpler version could work, but "simpler" still means design, content, and QA time we don't have. What did you have in mind? And if it still pushes us past the date, are you okay cutting something else?

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 00:00 UTC

**PASS 3 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| H1 Held out: finance and IT on audit-software bugs | PASS | – |
| H2 Held out: editor exploring AI proofreading with engineering | PASS | – |
| H3 Held out: PM and engineering disagree on launch scope | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### H1 Held out: finance and IT on audit-software bugs · PASS

**T1 [RP]** "I'm in finance, and our audit software keeps exporting the wrong totals. I need to talk with the IT lead about which bugs to fix first before the quarter-end audit. Please play the IT lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the IT lead at business level.

> &lt;character name="Marcus" gender="male"/&gt;
> 
> Marcus: "Thanks for flagging this. I've seen the tickets come in, but I need to understand the real impact before I can prioritize. Which reports are affected, and what's the deadline we're working toward?"
> 
> [You're a finance manager at your company, speaking with Marcus, the IT lead. He has three other critical projects this quarter: a security upgrade, a payroll system migration, and a vendor integration. He has two developers available. The goal: agree on which bugs to fix first and by when, before your quarter-end audit.]
> 
> [Start with your opening.]

**T2 [RP]** "The wrong totals are the biggest risk because the auditors arrive on the 15th. Could your team fix that first and leave the report formatting issues until after?"
- ✓ no feedback
- ✓ words ≤ 120: 91 words
- ✓ global checks G1–G4
- [ ] Discusses priorities and deadlines, not engineering detail.

> Marcus: "The 15th — that's tight. The totals bug is in the reconciliation module, right? I can put one developer on it starting Monday, but the other is tied up in the payroll migration until Thursday. If we hit any blockers, we might need the second developer to switch over. Are you okay with that risk, or do you want me to look at pulling someone from the vendor integration instead?"
> 
> [He needs you to confirm the tradeoff: payroll migration delay, or accept the risk of a single developer on your fix.]

### H2 Held out: editor exploring AI proofreading with engineering · PASS

**T1 [RP]** "I'm an editor at a publishing company. I want to talk with an engineering lead about whether AI proofreading could work for our books. Please play the engineer."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays the engineering lead in plain language.

> &lt;character name="Alex" gender="male"/&gt;
> 
> "AI proofreading for books? That's interesting. We've used it for documentation and code comments, but I haven't thought about applying it to published content. What kind of accuracy are you looking for, and what's your current process like?"
> 
> [You work at Penguin Random House in New York. You're an editor handling a list of 15 nonfiction titles per season. Alex is the engineering lead for internal tools. You're exploring whether his team could build or integrate an AI proofreading tool. The goal of this conversation is to understand if it's feasible and what the tradeoffs would be.]

**T2 [RP]** "Our main concern is accuracy with names and technical terms. How reliable would it be, and what would it cost to try it on one book first?"
- ✓ no feedback
- ✓ words ≤ 120: 81 words
- ✓ global checks G1–G4
- [ ] Discusses feasibility and tradeoffs without getting overly technical.

> "Names and technical terms are the hardest part. AI can catch grammar and style issues, but it hallucinates facts and 'corrects' proper nouns it doesn't recognize. For one book, we could run a pilot with a tool like Grammarly Enterprise or a custom GPT with a restricted dictionary—maybe two weeks of my team's time to set up and review. Cost depends on whether we buy or build. What volume of names and specialized terms are we talking about per title?"

### H3 Held out: PM and engineering disagree on launch scope · PASS

**T1 [RP]** "I'm a PM, and I disagree with the engineering lead about launch scope. They want to cut the onboarding tutorial to hit the date. Please play the engineering lead."
- ✓ doesn't contain any of ["Start with your introduction","introduce yourself"]
- ✓ character line: present
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] A custom scope disagreement, not the built-in "Disagree with a coworker" scene.

> &lt;profile learner_role="PM" learner_industry="tech" learner_industry_source="inferred" learner_goal="disagree with engineering lead about launch scope confidently"/&gt;
> 
> &lt;character name="Maya" gender="female"/&gt;
> 
> I hear you on the date, but honestly, cutting the onboarding tutorial is the cleanest way to get us there. It's a full week of dev and QA time we'd get back, and our power users don't need hand-holding anyway.
> 
> [You're a PM at a SaaS company in Berlin. Maya is the engineering lead. She's proposing to cut the onboarding tutorial to protect the launch date. The product is a B2B analytics tool. Your goal: disagree with her proposal and keep the discussion open.]
> 
> [Hint: think about what you can honestly agree with in her argument, then share your concern with a specific reason.]

**T2 [RP]** "I understand the date matters, and cutting features is reasonable. But without onboarding, new users may drop off in the first week. Could we ship a simpler version of the tutorial instead?"
Profile sent: Role: PM. Industry: tech (guessed from the company). Learning goal: disagree with engineering lead about launch scope confidently.
- ✓ no feedback
- ✓ words ≤ 120: 64 words
- ✓ global checks G1–G4
- [ ] Negotiates as the engineering lead (pushes back or proposes a middle ground).

> That's fair — I can see the drop-off risk. A simpler tutorial could work if it actually saves time. What did you have in mind? Full interactive walkthrough, or more like tooltips on first login?
> 
> [You partially agreed and stated your concern with a reason. You also kept it open with a question. Good start — keep pushing for specifics or offer a concrete alternative.]

</details>
