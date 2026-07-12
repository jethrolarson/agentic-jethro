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

The prompting philosophy that hazard-driven-skills is built on, packaged as a skill of its own. Fires whenever Claude writes instructions for another agent to execute — prompts, specs, subagent tasks, CLAUDE.md content — and keeps them justified, falsifiable, and minimal. Installed with the plugin; nothing extra to do.

## The philosophy

If you want the behavior ambient in every session rather than on-trigger — or you use a different coding agent entirely — append it to your project's `CLAUDE.md` or [`AGENTS.md`](https://agents.md/):

```
curl -s https://raw.githubusercontent.com/jethrolarson/agentic-jethro/main/CLAUDE.md >> CLAUDE.md
```

Or just tell Claude: `Add the # Prompting section from jethrolarson/agentic-jethro's CLAUDE.md to mine`.

What you're installing:

```markdown
# Prompting

1. Prompt is *for* an agent. Write for and understand intended agent's knowledge and capability and *trust* them appropriately.

2. Good prompts include *justification*. Agents without reason comply thoughtlessly. Thoughtful agent desirable.

3. Sound justifications *falsifiable*. Reason aligns agent to goal. Prevents misapplication. Agent assesses instruction against justification *within context* and can push back or pivot. False guidance can be tested and cleaned up. Unfalsifiable guidance accretes waste.

4. Good instructions are *minimum* description of intent/values/boundaries/hazards/outcome. Alignment more important than precision. Excess description limits autonomy for no benefit. Every word tell.

5. Self-apply these rules before delivering/executing prompt. Reflection aids alignment. Catches laziness.
```

Why believe a few lines do anything? Fresh agents given only this philosophy (in its earlier prose wording) reconstructed the skill's methodology one-shot, and wrote specs that flagged unknowns as open questions instead of inventing requirements. The one trap they still fell into — fabricating plausible justifications for existing rules whose history was lost — is exactly what the skill exists to guard. Transcripts and reproduction instructions in [docs/validation.md](docs/validation.md).
