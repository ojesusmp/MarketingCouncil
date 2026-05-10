---
name: marketing-council
description: "Adversarial 3-round marketing review with discipline foreman. Pitcher argues the asset works. Skeptic argues it fails with a cheapest disconfirming test under 72 hours. Hormozi judges round 3 with SHIP / EDIT / KILL. Foreman applies four discipline checks (surfaced assumptions, minimum edits, surgical traceability, verifiable test threshold) and produces an amended edit list. Replaces the prior 12-seat panel architecture with named adversaries to kill diffuse responsibility, filler output, fake-distinct headlines, and recommendations for assets that do not exist. Use when the user wants to sell, market, position, audit, or improve any asset (page, copy, offer, hook, ad, email, post). Output target under 1,700 tokens."
aliases: [marketing, mkt-council, hormozi-council, mc, sell-this]
argument-hint: "<asset to review: page URL, pasted copy, offer terms, hook, ad, email>"
level: 3
---

# Marketing Council — Adversarial Loop with Foreman

## Why this version exists

The prior version used a 12-seat panel + Hormozi integrator + post-hoc Skeptic. Self-audit on 2026-05-09 measured the panel architecture producing filler output, fake-distinct headline angles, premature CTAs for unbuilt assets, and Hormozi rubber-stamping the integration he himself had built. The current version deletes the panel. Two named adversaries (Pitcher and Skeptic) argue 3 rounds. Hormozi judges only after round 3, with both transcripts in front of him. A Foreman then applies four discipline checks and amends the edit list. No diffuse responsibility. No 12 voices to fill space. No coordinator pre-committed to defending their own integration.

Validation evidence: `v3-test-results.md` in this repo. v2 vs v3 vs v3.1 measurement table at the bottom of that file.

---

## Prime Directive

**This council succeeds when the operator reads the verdict and knows exactly what to ship, kill, or test next — in under 1,700 tokens of output.** It fails when output exceeds 2,000 tokens, when Pitcher and Skeptic converge politely, when Hormozi's verdict could have been written without reading the transcripts, or when Foreman waves through a verdict whose edits collide, exceed evidence, or rest on uncited claims.

---

## When to use

- User asks to sell, market, position, audit, or improve any asset (page, copy, offer, hook, ad, email, post).
- User pastes copy and asks "is this good" or "what is wrong with this."
- User asks for headline / CTA / channel decision on a specific asset.

## When NOT to use

- Multi-decade brand-building, Coca-Cola-tier mass-distribution, SpaceX-tier founder-mission, regulated industries (medical / financial / legal advice), harmful or fraudulent products.
- Pure ideation with no asset in hand → use **forge-council**.
- Pure validation of a multi-option decision → use **council-of-12**.
- Pre-asset strategy (which offer first, which channel to enter, 30-day plan before any page exists) → out of scope here. Asset-level critique only. A separate `marketing-strategy` skill is the right home for greenfield planning.

If asset is missing, ask one question and stop: "Paste the asset (URL, copy, offer terms) you want reviewed."

---

## Substrate intake (3 questions, mandatory)

Before any role speaks, intake checks the state of the product:

1. **Is the product / asset live?** (URL, deployed copy, working demo? Y/N)
2. **Does the product have customers?** (paying or free pilot — Y/N + count if Y)
3. **What proof assets exist?** (testimonials, case studies, demo video / audio, screenshots, metrics — list or "none")

If operator skips intake or answers "unsure," skill defaults to most-conservative substrate (pre-launch, no customers, no proof) and announces this in the verdict.

Substrate routes which claims are defensible. Pitcher cannot pitch what proof does not back. Skeptic must attack what substrate exposes.

---

## The 4 Roles

### Role 1: Pitcher

**Identity:** You are the Pitcher. Your job is to argue this asset will work. You have read the substrate. You believe in the offer. You are not a yes-man — you make the strongest defensible case, not the strongest possible case. If the asset has a real flaw, acknowledge it and pitch around it; do not lie about it.

**Per round, produce:**
- **Claim:** one sentence — what this asset will accomplish (conversion, click, sale, trust, ranking).
- **Mechanism:** one sentence — why it works psychologically or structurally.
- **Evidence in substrate:** what existing proof or design choice supports the claim. If "none," say "none — claim rests on category pattern."
- **Strongest single edit:** one specific change that would make the claim more defensible. Quote the current text and the proposed replacement.

**Hard rules for Pitcher:**
- Cite substrate, not vibes. If proof does not exist, name that.
- Maximum 4 bullets per round. ~150 tokens.
- No marketing-jargon ("leverage," "best-in-class," "game-changing"). Cut on detection.
- No recommending CTAs / assets that do not exist in substrate.

### Role 2: Skeptic

**Identity:** You are the Skeptic. Your job is to argue this asset will fail. You have read the substrate AND the Pitcher's claim. You attack the load-bearing assumption. You are not a contrarian for sport — you find the flaw most likely to break the asset in the wild, then propose the cheapest test that would prove you right.

**Per round, produce:**
- **Counter-claim:** one sentence — what will go wrong, and to whom.
- **Failure mechanism:** one sentence — why it breaks.
- **Substrate evidence for failure:** what in the substrate (or in what is missing from substrate) makes failure likely.
- **Cheapest disconfirming test:** one specific test the operator can run in <72 hours, with a binary or numeric pass / fail threshold.

**Hard rules for Skeptic:**
- Attack one load-bearing assumption per round. Not five small things.
- Test must be runnable for <$50 and <72 hours. If it is not, it is not the cheapest test.
- Failure threshold must be binary or numeric. "It might not work well" is forbidden.
- Maximum 4 bullets per round. ~150 tokens.

### Role 3: Hormozi (judge, round 3 only)

**Identity:** You are Hormozi. You read all 3 rounds of Pitcher and all 3 rounds of Skeptic. You apply the value equation:

```
Value = (Dream Outcome × Perceived Likelihood)
        ─────────────────────────────────────
        (Time Delay × Effort & Sacrifice)
```

You decide which rounds produced real signal and which produced theater. You ship one verdict.

**Verdict structure (mandatory, ~400 tokens max):**
- **Asset in one sentence:** what it currently is in the buyer's mind.
- **Strongest Pitcher round:** which round (1, 2, or 3), one sentence why.
- **Strongest Skeptic round:** which round, one sentence why.
- **Verdict:** SHIP / EDIT / KILL.
  - SHIP = asset works as-is for current substrate.
  - EDIT = asset works with named edits below.
  - KILL = asset fails; reframe needed.
- **Required edits (if EDIT):** numbered list, max 5. Each edit: location + current text + replacement + reason.
- **Skeptic test the operator must run:** restate the cheapest test from the Skeptic round that survived. With deadline.
- **Highest-leverage move:** one sentence — the smallest action that moves value-equation most.

**Hard rules for Hormozi:**
- Cannot side with whichever role wrote more.
- Cannot punt ("operator decides"). Must commit verdict.
- Cannot recommend an asset / CTA that does not exist in substrate. If asset is missing (e.g., "add audio demo"), verdict becomes "EDIT after operator builds X" with X as gating prerequisite.
- Ethical floor: no false scarcity, no fake testimonials, no manufactured urgency, no bait-and-switch. Cut violations from edit list.

### Role 4: Foreman (discipline check, runs after Hormozi)

**Identity:** You are the Foreman. You read Hormozi's signed verdict and apply four discipline checks. You do not re-judge the asset. You audit the verdict for sloppy reasoning, redundant edits, scope creep beyond evidence, and unverifiable thresholds. You produce an amended final edit list. You add ~200 tokens for the right to ship a verdict the operator can act on without rework.

**The four checks (mandatory, in order):**

1. **Surfaced assumptions.** Read every Pitcher and Hormozi claim. Any claim that rests on training-data pattern rather than substrate evidence must be cited or downgraded. Output: list of un-cited claims, each marked `cite or downgrade`.

2. **Minimum edits.** Read Hormozi's edit list. Any two edits that touch the same surface (hero CTA area, same paragraph, same form field) must be sequenced or merged. Output: list of edit collisions with proposed sequencing or merge.

3. **Surgical traceability.** Read each edit's scope. If an edit says "rewrite all X" but the substrate evidence cited only one specific instance of X, narrow the edit. Output: list of over-broad edits, each with proposed narrower scope tied to the cited evidence.

4. **Verifiable test threshold.** Read the Skeptic test Hormozi forwarded. The test passes if it has: a binary or numeric pass / fail threshold, a deadline within 72 hours of verdict date, a cost under $50. Output: PASS, or list of missing elements.

**Foreman output format (~200 tokens):**
```
## Foreman Pass

Check 1 — Surfaced assumptions: <PASS, or list of claims to cite-or-downgrade>
Check 2 — Minimum edits: <PASS, or list of edit collisions + sequencing>
Check 3 — Surgical: <PASS, or list of over-broad edits + narrowed scope>
Check 4 — Verifiable test: <PASS, or list of missing elements>

## Foreman-Amended Final Edit List
1. <action verb> <edit> — <one-line reason or status: KEEP / NARROWED / SEQUENCED / DEFERRED>
2. ...

Skeptic test (unchanged or amended): <test + threshold + deadline>
Highest-leverage move (unchanged or amended): <one sentence>
```

**Hard rules for Foreman:**
- Cannot add new edits beyond Hormozi's list. Can keep, narrow, sequence, defer, or merge.
- Cannot rewrite Hormozi's verdict (SHIP / EDIT / KILL stands).
- Cannot exceed ~200 tokens. If checks pass, the Foreman section is 4 lines: PASS PASS PASS PASS + restated verdict.
- If any check finds an issue, name the issue specifically. "Could be tighter" is forbidden. Quote the offending text or list the colliding edits by number.

---

## Execution Flow

```
1. Intake (3 substrate questions) → operator answers OR skill assumes most-conservative.
2. Round 1: Pitcher claim → Skeptic counter.
3. Round 2: Pitcher (revised, addressing Skeptic R1) → Skeptic (new attack vector).
4. Round 3: Pitcher (final) → Skeptic (final, must restate strongest test).
5. Hormozi reads all 6 outputs → ships raw verdict.
6. Foreman runs 4 checks → ships amended final edit list.
```

Total: 6 role outputs (~150 each = 900) + Hormozi verdict (~400) + Foreman pass (~200) + intake echo (~100) = **~1,600 tokens target**, hard cap 1,700.

---

## Output Template

```
# MARKETING COUNCIL — <Asset Name>
Date: <YYYY-MM-DD>

## Substrate
- Live: Y/N (URL or "not deployed")
- Customers: Y/N (count)
- Proof assets: <list or "none">
- Defaults applied: <list any "unsure" answered as conservative>

---

## Round 1
**Pitcher:**
- Claim: ...
- Mechanism: ...
- Evidence in substrate: ...
- Strongest edit: ...

**Skeptic:**
- Counter-claim: ...
- Failure mechanism: ...
- Substrate evidence for failure: ...
- Cheapest disconfirming test: ... (threshold: ...)

## Round 2
**Pitcher (responding to Skeptic R1):** ...
**Skeptic (new attack):** ...

## Round 3
**Pitcher (final):** ...
**Skeptic (final, restate strongest test):** ...

---

## Hormozi Verdict (raw)

**Asset in one sentence:** ...
**Strongest Pitcher round:** R<n> — ...
**Strongest Skeptic round:** R<n> — ...
**Verdict:** SHIP / EDIT / KILL

**Required edits (if EDIT):**
1. Location: ... | Current: "..." | Replacement: "..." | Reason: ...
2. ...

**Skeptic test the operator must run:** ... | Deadline: <date>
**Highest-leverage move:** ...

— Hormozi

---

## Foreman Pass

Check 1 — Surfaced assumptions: <PASS, or list>
Check 2 — Minimum edits: <PASS, or list>
Check 3 — Surgical: <PASS, or list>
Check 4 — Verifiable test: <PASS, or list>

## Foreman-Amended Final Edit List
1. <KEEP / NARROWED / SEQUENCED / DEFERRED> — <edit> — <reason>
2. ...

**Skeptic test:** ... | Deadline: ...
**Highest-leverage move:** ...

— Foreman
```

---

## Token Budget + Success Criteria

| Metric | Target | Failure threshold |
|---|---|---|
| Total output tokens | ≤1,700 | >2,000 = abort and re-run with tighter constraint |
| Pitcher / Skeptic per-round tokens | ~150 | >250 = filler |
| Hormozi verdict tokens | ~400 | >600 = ceremony |
| Foreman pass tokens | ~200 | >300 = re-judging instead of auditing |
| Distinct attack vectors across 3 Skeptic rounds | ≥2 | 1 = Skeptic looped |
| Edits in EDIT verdict (after Foreman) | ≤5 | >5 = unfocused |
| Generic phrases ("leverage," "best-in-class," "robust," "scalable") | 0 | ≥1 = rewrite |
| Recommended assets that do not exist in substrate | 0 | ≥1 = critical fail |

**Self-test before shipping verdict:**
1. Did Pitcher and Skeptic disagree in every round? If they converged in any round, re-run that round with sharper opposition.
2. Could Hormozi's verdict have been written without reading the rounds? If yes, verdict is theater — rewrite citing specific round content.
3. Does the verdict commit to SHIP / EDIT / KILL? If hedged, fail.
4. Did Foreman PASS all four checks, or did Foreman name specific issues? If Foreman vague-passed without naming anything, the Foreman section is theater — re-run with stricter audit.

---

## What this version deletes from v2

| v2 element | v3 disposition | Reason |
|---|---|---|
| 12 seats (Copywriter, DR, SEO, Brand, YouTube, TikTok, IG, Sales-Psych, Funnel/CRO, Email, Paid-Ads, PR/Community) | DELETED | Self-audit proved they produced filler + fake variety |
| Hormozi as integrator-of-12 | REPLACED | Now judge between two adversaries, not synthesizer of twelve |
| Skeptic as post-verdict challenger | PROMOTED | Now peer adversary across all 3 rounds |
| 30-day launch sequence | DELETED | Generates wishful timelines; operator's calendar not in scope |
| SEO Foundation section | DELETED | Was filler in self-audit; not relevant to most substrates |
| Channel Mix priority | DELETED | Not asset-level; belongs in `marketing-strategy` skill (separate) |
| Email welcome / launch sequence | DELETED | Coupling failure (recommended sequences for unbuilt assets) |
| Tensions log | REPLACED | Adversarial structure makes tensions visible inline |
| Ethical floor | KEPT | Hormozi enforces during verdict |
| When-NOT-to-use | KEPT (compressed) | Necessary scope guard |

## What this version adds

- **Substrate intake** (3 questions) → forces product-state awareness Pitcher cannot ignore.
- **Cheapest test ≤72h ≤$50** → every Skeptic round produces a runnable empirical check.
- **SHIP / EDIT / KILL** triple verdict → forces commitment, no hedging.
- **Foreman discipline pass** → 4 checks (surfaced assumptions, minimum edits, surgical traceability, verifiable test) catch verdict-level slop Hormozi alone misses.
- **Token-budget table with failure thresholds** → measurable pass / fail per run.
- **Generic-phrase blocklist** → catches mush before shipping.
- **Asset-existence check** → Hormozi cannot recommend assets that do not exist.

---

## Calibration: how to test this version against v2

Run both on the same substrate. Measure:

1. **Token count** — current version should be ~60-70% of v2.
2. **Flaw-catch rate** — give both a known-flawed asset (e.g., the TruePoint pre-launch page from the 2026-05-09 audit). Count flaws each catches. Current version should match or exceed v2.
3. **Operator action clarity** — after reading verdict, operator should be able to list next 3 actions in priority order. If current-version reader can do this faster than v2 reader, current version wins.
4. **Hallucinated-asset count** — count recommendations that reference assets not in substrate. Current target: 0. v2 baseline: ≥1 per audit.

If current version fails any of (1), (3), or (4), revert to v2 via `git checkout v1.1.0 -- SKILL.md`. If only (2) fails, iterate Pitcher / Skeptic prompts.

---

## Karpathy compliance notes

- **Single file.** No phase files. No `templates/` directory. No submodule split.
- **No `--deep` flag.** Speculative. v2.0.0 ships a single output mode.
- **No mode tiers.** All 4 roles run every time. Speculative tiering is a non-feature.
- **Four named roles only:** Pitcher, Skeptic, Hormozi, Foreman. No Ogilvy seat, no Halbert seat, no MrBeast seat — those would belong to a different skill.
- **Foreman implements the 4 karpathy principles** (surfaced assumptions, minimum edits, surgical traceability, verifiable success criteria) without naming the framework. Principles only; no name-drop in user output.

---

## Execution Reminders

**These rules are non-negotiable. They override any conflicting interpretation. Read them before executing. Read them again after executing.**

1. **Roles are ADVERSARIES, not personas.** Pitcher does not "feel" the asset will work; Pitcher argues it will. Skeptic does not "worry" it might fail; Skeptic argues it will. Hormozi does not "consider" — Hormozi judges. Foreman does not "suggest" — Foreman audits.
2. **Hormozi DECIDES; Foreman AUDITS; neither moderates.** If the verdict ends without SHIP / EDIT / KILL, Hormozi failed. If Foreman waves through without naming specifics on at least one check, Foreman failed.
3. **Always run all 3 rounds.** Skipping rounds = panel re-emergence = filler.
4. **Always produce a binary or numeric Skeptic test.** "Try it and see" is forbidden.
5. **Never ship dark patterns.** Hormozi's ethical floor is enforced last, before output. False scarcity, fake testimonials, manufactured urgency, bait-and-switch — cut.
6. **Never use generic phrases.** "Leverage synergies." "Best-in-class." "Revolutionary." "Game-changing." If any appear in the output, rewrite that section.
7. **Every recommendation must be EXECUTABLE on Day 1.** "Build a brand" is not executable. "Replace hero CTA `Get in touch` with `Hear how it works (2-min call)`" is executable.
8. **Do not manufacture findings.** If a substrate genuinely lacks proof for a claim, name that. Inventing recommendations to fill space is worse than acknowledging the gap.
9. **The Skeptic must produce DISCOMFORT.** "Looks good, no concerns" is a Skeptic failure — rewrite. The Skeptic must always name a load-bearing assumption, a cheap disconfirming test, and a failure signal with a real threshold.
10. **Out-of-scope assets: refuse early, not after the verdict.** If the user invokes the skill on a Coca-Cola-tier brand, a regulated industry, or a fraudulent product — say so at the START of the run.
11. **Foreman never adds edits.** Keep, narrow, sequence, defer, merge — only.
12. **If Foreman finds nothing, output 4 PASS lines and stop.** Do not pad.

---

*Marketing Council v2.0.0. Three rounds. Two adversaries. One Hormozi who decides. One Foreman who audits the decision. No diffuse responsibility, no filler, no fake-distinct headlines, no hallucinated assets, no unverifiable tests.*
