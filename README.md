# marketing-council

> Adversarial 3-round marketing review with discipline foreman. Pitcher argues the asset works. Skeptic argues it fails with a cheapest disconfirming test under 72 hours. Hormozi judges round 3 with SHIP / EDIT / KILL. Foreman applies four discipline checks and ships an amended edit list. Output target under 1,700 tokens.

A Claude Code skill for asset-level critique: page, copy, offer, hook, ad, email. Replaces the prior 12-seat panel architecture with named adversaries to kill diffuse responsibility, filler output, fake-distinct headlines, and recommendations for assets that do not exist.

## What it produces

A single markdown verdict with:

1. **Substrate echo** — live? customers? proof assets? (3 questions, mandatory)
2. **3 rounds of Pitcher vs Skeptic** — claim, mechanism, evidence, edit, counter, failure, test
3. **Hormozi raw verdict** — SHIP / EDIT / KILL, max 5 numbered edits, restated Skeptic test, highest-leverage move
4. **Foreman pass** — 4 discipline checks (surfaced assumptions / minimum edits / surgical traceability / verifiable test threshold)
5. **Foreman-amended final edit list** — KEEP / NARROWED / SEQUENCED / DEFERRED labels per edit

Token budget: ~1,600 target, 1,700 hard cap.

## Install

### Option 1: npm (recommended)

```bash
npx @ojesusmp/marketing-council
```

### Option 2: git clone

```bash
git clone https://github.com/ojesusmp/Marketing-Council ~/.claude/skills/marketing-council
```

### Option 3: download SKILL.md only

```bash
mkdir -p ~/.claude/skills/marketing-council
curl -fsSL https://raw.githubusercontent.com/ojesusmp/Marketing-Council/main/SKILL.md -o ~/.claude/skills/marketing-council/SKILL.md
```

After install, restart Claude Code. Invoke with `/marketing-council "<asset to review>"`.

## Invocation patterns

```
/marketing-council "https://truepoint.example/agents"
/marketing-council "review my landing page"
/marketing-council "audit this offer: <pasted terms>"
/marketing-council "is this hook good: <pasted copy>"
```

## When to use

Asset-level critique only — review of something that already exists.

## When NOT to use

- **Pre-asset strategy** (which offer first, which channel to enter, 30-day plan before any page exists). The prior 12-seat version mixed strategy and critique, which produced filler. Asset critique and pre-asset strategy belong in separate skills.
- Multi-decade brand-building, Coca-Cola-tier mass-distribution, SpaceX-tier founder-mission.
- Regulated industries (medical / financial / legal advice — no FTC / compliance check).
- Harmful or fraudulent products.
- Pure ideation with no asset in hand → use `forge-council`.
- Pure validation of a multi-option decision → use `council-of-12`.

## Architecture changelog

### v2.0.0 (current) — adversarial loop + Foreman

- **DELETED** 12 seats (Copywriter, DR, SEO, Brand, YouTube, TikTok, IG, Sales-Psych, Funnel/CRO, Email, Paid-Ads, PR/Community), 30-day launch sequence, Channel Mix priority, SEO Foundation, email welcome / launch sequence, Tensions log.
- **REPLACED** Hormozi as 12-seat integrator → Hormozi as judge between 2 named adversaries.
- **PROMOTED** Skeptic from post-verdict challenger → peer adversary across all 3 rounds.
- **ADDED** substrate intake (3 questions), cheapest disconfirming test ≤72h ≤$50 per Skeptic round, SHIP / EDIT / KILL triple verdict, asset-existence check, generic-phrase blocklist, hard token budget with failure thresholds, Foreman discipline pass (4 checks).

Validation evidence: `v3-test-results.md` (TruePoint pre-launch landing page). v2 vs v2.0.0 measurement: tokens dropped from ~2,500 to ~1,600, flaws caught rose from 3 to 8, hallucinated-asset count dropped from ≥1 to 0.

### v1.1.0 (deprecated, kept as rollback anchor)

12-seat panel + Hormozi + post-hoc Skeptic. Shipped Q2 2026. Self-audit on 2026-05-09 measured filler output, fake-distinct headline angles, and Hormozi rubber-stamping.

Pin to v1.1.0 if needed:
```bash
git checkout v1.1.0 -- SKILL.md
```

## Ethical floor

The skill enforces: no false scarcity, no fake testimonials, no manufactured urgency, no bait-and-switch. Bold claims allowed only when proof-backed. Hormozi cuts violations from the edit list before Foreman pass.

## Related skills

- `forge-council` — 12-seat creative ideation with Musk coordinator (pure idea generation, no asset required)
- `council-of-12` — universal 12-lens analysis with Solomon coordinator (multi-option validation)
- `marketing-strategy` *(planned)* — pre-asset strategy: offer selection, channel entry, 30-day plan
- [silex](https://github.com/ojesusmp/silex) — per-project timeline journal that survives reboots

## Documentation

- [SKILL.md](./SKILL.md) — canonical reference (4 roles, execution flow, output template, token budget, success criteria)
- [v3-test-results.md](./v3-test-results.md) — empirical validation: TruePoint Agents pre-launch page, v2 vs v3 vs v3.1 measurement table

## License

MIT — see [LICENSE](./LICENSE).
