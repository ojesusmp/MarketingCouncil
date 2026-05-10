# marketing-council

> 12-seat marketing/sales/copy council with Alex Hormozi as 13th-seat coordinator and a Skeptic post-verdict challenger. Produces an integrated playbook for digital products, AI agents, web pages, courses, and indie services.

A Claude Code skill modeled on `council-of-12` and `forge-council`, specialized for selling. Twelve marketing disciplines analyze the product, Hormozi integrates via the value equation, and a Skeptic seat challenges the signed playbook to kill confirmation bias.

## Install

### Option 1: git clone

```bash
git clone https://github.com/ojesusmp/Marketing-Council ~/.claude/skills/marketing-council
```

### Option 2: download SKILL.md only

```bash
mkdir -p ~/.claude/skills/marketing-council
curl -fsSL https://raw.githubusercontent.com/ojesusmp/Marketing-Council/main/SKILL.md -o ~/.claude/skills/marketing-council/SKILL.md
```

After install, restart Claude Code (or run `/skills reload` if your harness supports it). Invoke with `/marketing-council "<product to sell>"`.

## What it produces

A single integrated playbook with:

1. **Positioning** — brand promise, enemy, leveraged Cialdini principles, multi-year story arc
2. **Hook & Headlines** — 3 distinct angles (pain / outcome / curiosity) + CTA + risk reversal
3. **Channel Mix** — priority order WITH stated reason
4. **SEO Foundation** — primary keyword + 3-5 long-tail + title tag + meta description
5. **Funnel + Email** — landing page structure + welcome sequence + launch sequence
6. **PR / Community** — 3-5 named outreach targets + founder voice + spectacle plan + crisis-response template
7. **Offer Twist** — Hormozi value-equation lens applied
8. **30-Day Launch Sequence** — week-by-week
9. **Tensions Log** — where seats disagreed and how Hormozi resolved
10. **Hormozi's Sign-Off** — offer in one sentence + 4x-value verdict + single highest-leverage move
11. **Skeptic's Counter-Argument** — load-bearing assumption + cheap disconfirming test + failure signal + clarification questions

## Invocation patterns

```
/marketing-council "sell my AI agent to coders"
/marketing-council "launch my SaaS landing page"
/marketing-council "promote my new course"
/marketing-council --web "TikTok hook for current trend"
```

`--web` opt-in lets the SEO and social-trend seats fetch fresh data. Default runs entirely from training-data expertise (~30 sec, ~$0.10).

## Ethical floor

The skill enforces: no false scarcity, no fake testimonials, no manufactured urgency, no bait-and-switch. Bold claims allowed only when proof-backed.

## When NOT to use

This skill is built for digital-first, 30-day-horizon, indie-launch marketing. It is NOT built for:

- Coca-Cola-tier mass-distribution brands (no distribution-as-marketing seat)
- SpaceX-tier founder-led mission brands (no 30-year mission narrative)
- Multi-decade brand-building plays
- Regulated industries (medical / financial / legal — no FTC check)
- Harmful or fraudulent products

See SKILL.md `## When NOT to Use This Skill` for the full audit.

## How it was built

3-stage pipeline: Socratic deep-interview (6 rounds, ambiguity gated at 17%) → ralplan consensus (Planner / Architect / Critic, APPROVE) → autopilot execution. Then audited by Council of 12 against Coca-Cola and SpaceX playbooks; Skeptic seat + 4 council recommendations applied (long-arc narrative, founder-voice + spectacle + crisis-response, buyer-POV check, out-of-scope notice).

## Related skills

- `council-of-12` — universal 12-lens analysis with Solomon coordinator (the audit framework that verified this skill)
- `forge-council` — 12-seat creative ideation with Musk coordinator
- [silex](https://github.com/ojesusmp/silex) — per-project timeline journal that survives reboots

## Documentation

- [SKILL.md](./SKILL.md) — canonical reference (all 12 disciplines + Hormozi + Skeptic + execution flow + output template)

## License

This repository ships without an explicit license (all rights reserved by default). To make it freely reusable, the maintainer can add an MIT or Apache-2.0 LICENSE file.
