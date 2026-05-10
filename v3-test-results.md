# Marketing Council v3 — Test Results
Date: 2026-05-10
Status: v3 + Foreman draft validated; swap pending operator approval
Companion files: `marketing-council-v3.md` (spec), `v3-explainer.html` (ELI10), `v3-swap-decisions.md` (4 decisions)

---

## Substrate tested: TruePoint Agents pre-launch landing page

- **Live:** N (index.html drafted local in 5/9 session, not deployed)
- **Customers:** N (zero, pre-launch)
- **Proof assets:** NONE (no testimonials, no audio demo, no metrics)
- **Page contents:** headline B "Staff your business 24/7 without hiring", subheadline with role catalog + $400/mo, $2000/mo missed-call anchor, 4 role cards (Receptionist/Sales Rep/Marketing Rep/Web Designer), promise list (refund block already stripped per 5/9 ruling), founder pricing block ($150 setup, "first 3 customers"), bilingual EN/ES toggle, contact form (5 fields), footer.

---

## v3 Dry-Run (3 rounds, ~1,500 tokens)

### Round 1

**Pitcher:**
- Claim: page converts cold SMB owners to discovery-call requests because action-verb headline + role-clarity subheadline match SMB mental model.
- Mechanism: buyer thinks "I need someone to..." → page answers "Receptionist · Sales Rep · Marketing Rep" in one line.
- Evidence in substrate: subheadline carries 4 differentiators (roles, never-miss, never-quote, bilingual, price).
- Strongest edit: form has 5 fields incl. open-ended Message. Cut Message → 4 role checkboxes.

**Skeptic:**
- Counter-claim: page promises "never quote price you didn't approve" + "$500 sign-off" with zero proof. Un-backed claim.
- Failure mechanism: SMB owner burned by one bad chatbot asks "prove it." Page can't.
- Substrate evidence: proof assets = NONE.
- Cheapest test: deploy to free Netlify URL + cold-message 5 LinkedIn SMB owners for headline feedback. Threshold: ≥3 of 5 substantive replies = headline lands. Cost: $0, 48h.

### Round 2

**Pitcher:**
- Claim revised: page captures interest, doesn't close sales. Discovery call closes. Promise IS the discovery-call hook.
- Mechanism: "$500 sign-off" creates curiosity → form fill → call answers question.
- Evidence: form CTA is "Tell us about your business," not "Buy now." Funnel matches stage.
- Strongest edit: hero CTA "Get in touch" weak. Replace with "Hear how it works (2-min call)."

**Skeptic:**
- Counter-claim: $2,000/month missed-call anchor uses fake-specific math. SMB owner mentally compares to own rate, finds own rate lower, anchor erodes trust on every claim downstream.
- Failure mechanism: invented number > buyer's reality = brand reads as "tries too hard."
- Substrate evidence: operator has zero data on real missed-call rates.
- Cheapest test: A/B anchor block. A = current "$2,000/mo." B = "What did you miss last week?" (no math). Track scroll-depth past anchor in 50 sessions. Cost: $0, 5d post-deploy.

### Round 3

**Pitcher:**
- Claim: even with proof gap + weak anchor, page passes "real company doing real things" minimum bar.
- Mechanism: bilingual + role catalog + price = 3 specificities competitors omit.
- Evidence: substrate confirms most AI-agent LPs hide pricing. **[FLAGGED by Foreman as uncited training-data claim, not substrate.]**
- Strongest edit: add "Listen to a 90-sec walkthrough →" below hero pointing to Loom of operator using own platform UI. Loom = today-buildable, no audio polish required.

**Skeptic:**
- Counter-claim: page burns bilingual moat with machine-translated Spanish ("Atiende tu negocio 24/7 sin contratar" reads dubbed). ES-native buyer detects translation in 5 seconds.
- Failure mechanism: page claims bilingual fluency. Spanish reads translated. Buyer concludes agent will sound translated too.
- Substrate evidence: proof assets = NONE. No ES-native reviewer audit.
- Cheapest test (RESTATED strongest from all 3 rounds): send page URL to 3 ES-native SMB owners in operator's network. One question: "Does this Spanish read like a person or a translation?" Threshold: ≥2 of 3 say "translation" → reject all ES copy, rewrite ES-first. Cost: $0, 48h.

---

## Hormozi Verdict (v3 raw, before Foreman)

**Asset in one sentence:** pre-launch landing page promising bilingual AI staffing with $500 numeric guardrail at $400/mo, ships zero proof and machine-translated Spanish.

**Strongest Pitcher round:** R3 — Loom platform walkthrough is today-buildable proof asset.
**Strongest Skeptic round:** R3 — ES-native review test is cheapest ($0, 48h) and attacks load-bearing brand differentiator.
**Verdict:** EDIT

**Required edits (raw, 5 items):**
1. Hero CTA: "Get in touch" / "Contáctanos" → "Hear how it works (2 min)" / "Escucha cómo funciona (2 min)"
2. KILL $2,000/mo anchor block, OR replace with "What did your team miss last week?" no math
3. Add "Listen to a 90-sec walkthrough →" below hero linking to Loom of operator using platform
4. Rewrite ALL ES copy — ES-first by ES-native
5. Strip founder-pricing section, replace with waitlist

**Skeptic test (mandatory):** ES-native review by 3 native speakers. Threshold ≥2 of 3 say "translation" → reject all ES, rewrite. Deadline: 2026-05-12 (48h from verdict).
**Highest-leverage move:** record 90-second Loom of operator using own platform TODAY.

---

## Foreman Pass (v3.1 test, +200 tokens)

Four discipline checks applied to the raw verdict above:

### Check 1 — Surfaced assumptions
Pitcher R3 claim "most AI-agent LPs hide pricing" is uncited training-data claim, not substrate evidence. **Action:** cite source or downgrade to "common pattern, not measured."

### Check 2 — Minimum edits
Edits 1 and 3 both modify hero CTA area. Edit 1 swaps text; Edit 3 adds Loom link. They collide — if Edit 3 ships, Edit 1's CTA becomes redundant. **Action:** sequence them. Ship Edit 3 first. Reconsider Edit 1 only if 7 days of analytics show people scrolling past the Loom without clicking.

### Check 3 — Surgical
Edit 4 says "rewrite ALL ES copy." Substrate evidence cited = one specific phrase ("Atiende tu negocio 24/7 sin contratar"). "ALL" is broader than evidence. **Action:** narrow to "ES-native reviewer audits all ES copy. Rewrite ONLY phrases reviewer flags. Do not rewrite preemptively."

### Check 4 — Verifiable test
Skeptic test: "≥2 of 3 say translation" — binary, numeric, 48h deadline. Clean. **PASS.**

---

## Foreman-Amended Edit List (FINAL — what operator should actually do)

1. **DEFER** original Edit 1 (hero CTA wording rewrite). Re-evaluate after 7 days of analytics post Loom-link deploy.
2. **KEEP** original Edit 2: strip $2,000/mo anchor block.
3. **PROMOTE to #1** original Edit 3: add Loom walkthrough link below hero. This is now primary CTA.
4. **NARROW** original Edit 4: ES-native reviewer audits all ES copy. Rewrite ONLY flagged phrases.
5. **KEEP** original Edit 5: strip founder-pricing section, replace with waitlist.

**Note on Pitcher R3:** "Most AI-agent LPs hide pricing" was uncited training-data claim. Treat as pattern-hint, not evidence when deciding whether to keep page pricing.

**Skeptic test (unchanged):** 3 ES-native reviewers, ≥2 of 3 say "translation" → reject all ES, rewrite. Deadline 2026-05-12.

**Highest-leverage move (unchanged):** record 90-second Loom TODAY.

---

## Comparison: v2 vs v3 vs v3.1 (with Foreman)

| Metric | v2 (12-seat) | v3 (3-role) | v3.1 (+Foreman) |
|---|---|---|---|
| Total tokens | ~2,500 | ~1,500 | ~1,700 |
| Critical flaws caught | 3 | 5 | 5 + 3 verdict-level catches |
| Hallucinated assets recommended | 1 (audio demo CTA on unbuilt asset) | 0 (Loom = today-buildable) | 0 |
| ES quality flagged in main run | NO (only in self-audit) | YES | YES |
| Anchor math attack vector | NO | YES | YES |
| Verdict commitment | LOW (3 options A/B/C) | EDIT (5 specific edits) | EDIT (4 final + 1 deferred) |
| Operator post-verdict edits to do | unclear | 5 | 4 (1 narrower, 1 deferred) |
| Issues caught per token | ~1 per 833 | ~1 per 300 | ~1 per 213 |

**Foreman conclusion:** +200 tokens, -1 redundant edit, -1 over-broad edit, +1 caught uncited claim. Operator does LESS work, not more.

---

## What this file is for

If new chat starts, this file + STATE.md auto-load + `marketing-council-v3.md` spec are enough to:
- Resume the v3.1 design conversation without losing the dry-run details
- Know exactly which edits to apply to TruePoint page (Foreman-amended list above)
- Have the Skeptic test ready to run (ES-native review by 5/12)
- Decide whether to add Foreman to v3 final spec (see `v3-swap-decisions.md`)
