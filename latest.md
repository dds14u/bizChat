# Golden set comparison: GREEN

Spec: z_Chat_Regression_Test_v1.8 · staging · 2 runs each · 2026-11-14 04:39 UTC

Each cell = passed on the first try / runs. "Flaky" = failed, then passed on the automatic rerun.
When the cell counts differ between apps for the same prompt, that difference is run-to-run variation.

| Case | staging |
|---|---|
| C5 Custom scene with profile | 2/2 |
| **Total (first try)** | **2/2** |

## Runs
- staging-1: GREEN · PASS 1 · FAIL 0 · FLAKY 0 · ERROR 0
- staging-2: GREEN · PASS 1 · FAIL 0 · FLAKY 0 · ERROR 0

Full reports for each run, including failed replies and review items, follow below.

---

<details><summary><b>staging-1</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 04:39 UTC

**PASS 1 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C5 Custom scene with profile | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C5 Custom scene with profile · PASS

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead retail meetings confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead retail meetings confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"technology","goal":"lead retail meetings confidently","industry_source":"inferred"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="technology" learner_industry_source="inferred" learner_goal="lead retail meetings confidently"/&gt;
> &lt;character name="Mei" gender="female"/&gt;
> 
> Thanks for setting this up. I'm ready to hear the plan.
> 
> [You're leading a planning meeting at Apple. Mei is a retail operations manager based in Shanghai. The goal is to align on the holiday sales plan and confirm next steps.]

</details>

---

<details><summary><b>staging-2</b></summary>

### Golden set: GREEN

App: staging · Spec: z_Chat_Regression_Test_v1.8 · 2026-11-14 04:39 UTC

**PASS 1 · FAIL 0 · FLAKY 0 · ERROR 0**

| Case | Result | Failed checks (last attempt) |
|---|---|---|
| C5 Custom scene with profile | PASS | – |

## Every reply (passed and failed)
Each case shows every attempt. ✓ = check passed, ✗ = check failed. Review items are for you to judge.

### C5 Custom scene with profile · PASS

**T1 [RP]** "I'm D, a PM at Apple and I'm holding a meeting with the retail team in China to discuss the holiday sales plan."
- ✓ profile: name = "D": saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: role contains any of ["pm","product manager"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ profile: company contains any of ["apple"]: saved {"name":"D","role":"PM","company":"Apple","industry":"consumer electronics","goal":"lead client presentations confidently","industry_source":"inferred"}
- ✓ character line: present
- ✓ doesn't contain any of ["Start with your introduction"]
- ✓ no feedback
- ✓ global checks G1–G4
- [ ] Plays a fitting participant in the retail-team meeting and lets the learner lead. Any character name is fine.

> &lt;profile learner_name="D" learner_role="PM" learner_company="Apple" learner_industry="consumer electronics" learner_industry_source="inferred" learner_goal="lead client presentations confidently"/&gt;
> &lt;character name="Elena" gender="female"/&gt;
> 
> Thanks for getting us together. I'm looking forward to hearing the plan for the holiday push.
> 
> [You're leading a planning meeting at Apple. I'm Elena, a senior retail operations manager based in Shanghai. The team needs to align on the holiday sales plan for Greater China, including staffing, inventory, and promotional timing. Goal: agree on priorities and next steps before we brief the regional VP next week.]
> 
> [I can describe a different situation anytime.]

</details>
