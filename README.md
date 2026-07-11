# agentic-jethro

A collection of useful skills for agentic programming.

## Install

```
/plugin marketplace add jethrolarson/agentic-jethro
/plugin install agentic-jethro@agentic-jethro
```

## Skills

### hazard-driven-skills

Makes Claude write and review `SKILL.md` files as **falsifiable hazard claims** instead of scripts.

By default skills written by agents are overspecified, procedural, and thought-terminating. Claude will give the next agent a confident but wrong instruction that it will often thoughtlessly execute without considering the context fully. This skill guides the agent to work with you to write skills that are hazard-driven to prevent pitfalls while still letting the executing agent use its intelligence. This skill will help you create, update and maintain skill files that minimize accretion and discourage creating zombie agents.

Example prompts:
* `Can you use hazard driven skills to prevent that last screw-up next time?`
* `Can you audit my-unit-testing-guide skill using hazard-driven-skills?`
* `Seems like you wasted a lot of tokens there, can you update the oncall-ops skill so the next agent doesn't do the same?`

### prompting

The nine-line philosophy that hazard-driven-skills is built on, packaged as a skill of its own. Fires whenever Claude writes instructions for another agent to execute — prompts, specs, subagent tasks, CLAUDE.md content — and keeps them justified, falsifiable, and minimal. Installed with the plugin; nothing extra to do.

## The philosophy

If you want the behavior ambient in every session rather than on-trigger — or you use a different coding agent entirely — append it to your project's `CLAUDE.md` or [`AGENTS.md`](https://agents.md/):

```
curl -s https://raw.githubusercontent.com/jethrolarson/agentic-jethro/main/CLAUDE.md >> CLAUDE.md
```

Or just tell Claude: `Add the # Prompting section from jethrolarson/agentic-jethro's CLAUDE.md to mine`.

What you're installing:

```markdown
# Prompting

Instructions to agent should include justification. Without that agents become dumb, compliant zombies.

Sound justifications are falsifiable. Agent can confirm guidance is applicable and diverge or push back. False guidance can be corrected and cleaned up. Unfalsifiable guidance can only accumulate.

Good instructions are minimum descriptions of the intent, values, boundaries, hazards, and outcome. And only what cannot be easily inferred by the target agent. Understand your reader's knowledge and capability and trust them appropriately. Excess description limits agent intelligence and creativity for no benefit.

Self-apply these rules before delivering — early drafts of this document ignored recursive application.
```

Why believe nine lines do anything? Fresh agents given only this text reconstructed the skill's methodology one-shot, and wrote specs that flagged unknowns as open questions instead of inventing requirements. The one trap they still fell into — fabricating plausible justifications for existing rules whose history was lost — is exactly what the skill exists to guard. Transcripts and reproduction instructions in [docs/validation.md](docs/validation.md).
