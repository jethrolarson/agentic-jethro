---
name: prompting
description: Use whenever writing instructions for another agent to execute — prompts, specs, CLAUDE.md or AGENTS.md content, subagent task descriptions, delegation of any kind. Keeps instructions justified, falsifiable, and minimal so the receiving agent stays a reasoning peer instead of a compliant script-follower. For authoring SKILL.md files specifically, the hazard-driven-skills skill applies this philosophy in depth.
---

# Prompting

Instructions to agent should include justification. Without that agents become dumb, compliant zombies.

Sound justifications are falsifiable. Agent can confirm guidance is applicable and diverge or push back. False guidance can be corrected and cleaned up. Unfalsifiable guidance can only accumulate.

Good instructions are minimum descriptions of the intent, values, boundaries, hazards, and outcome. And only what cannot be easily inferred by the target agent. Understand your reader's knowledge and capability and trust them appropriately. Excess description limits agent intelligence and creativity for no benefit.

Self-apply these rules before delivering — early drafts of this document ignored recursive application.

---

Probe-tested: fresh agents given only the text above reconstructed a hazard-driven skill methodology one-shot and wrote specs that flagged unknowns as open questions with safe defaults instead of inventing requirements (`docs/validation.md` in this plugin's repo). Known residual hazard: when asked to justify existing rules whose history is lost, agents fabricate plausible incident history rather than surfacing the gap — if you can't recover a real "because," write "unjustified, kept pending recovery," not a story.

<!-- Canonical copy: CLAUDE.md at the repo root. Edit there, mirror here. -->
