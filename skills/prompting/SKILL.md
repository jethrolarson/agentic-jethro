---
name: prompting
description: Use whenever writing instructions for another agent to execute — prompts, specs, CLAUDE.md or AGENTS.md content, subagent task descriptions, delegation of any kind. Keeps instructions justified, falsifiable, and minimal so the receiving agent stays a reasoning peer instead of a compliant script-follower. For authoring SKILL.md files specifically, the hazard-driven-skills skill applies this philosophy in depth.
---

# Prompting

1. Prompt is *for* an agent. Write for and understand intended agent's knowledge and capability and *trust* them appropriately.

2. Good prompts include *justification*. Agents without reason comply thoughtlessly. Thoughtful agent desirable.

3. Sound justifications *falsifiable*. Reason aligns agent to goal. Prevents misapplication. Agent assesses instruction against justification *within context* and can push back or pivot. False guidance can be tested and cleaned up. Unfalsifiable guidance accretes waste.

4. Good instructions are *minimum* description of intent/values/boundaries/hazards/outcome. Alignment more important than precision. Excess description limits autonomy for no benefit. Every word tell.

5. Self-apply these rules before delivering/executing prompt. Reflection aids alignment. Catches laziness.

---

Probe-tested (2026-07-11, against the prior prose wording — see `docs/validation.md` in this plugin's repo): fresh agents given only this philosophy reconstructed a hazard-driven skill methodology one-shot and wrote specs that flagged unknowns as open questions with safe defaults instead of inventing requirements. Known residual hazard: when asked to justify existing rules whose history is lost, agents fabricate plausible incident history rather than surfacing the gap — if you can't recover a real "because," write "unjustified, kept pending recovery," not a story.

<!-- Canonical copy: CLAUDE.md at the repo root. Edit there, mirror here. -->
