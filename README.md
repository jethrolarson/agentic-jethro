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

If you want the behavior ambient in every session rather than on-trigger — or you use a different coding agent entirely — append it to your project's `CLAUDE.md` or [`AGENTS.md`](https://agents.md/) (the pipe strips the skill file's frontmatter):

```
curl -s https://raw.githubusercontent.com/jethrolarson/agentic-jethro/main/skills/prompting/SKILL.md | awk 'c==2;/^---$/{if(c<2)c++}' >> CLAUDE.md
```

Or just tell Claude: `Add the rules from jethrolarson/agentic-jethro's skills/prompting/SKILL.md to my CLAUDE.md`.

What you're installing (canonical copy lives in [skills/prompting/SKILL.md](skills/prompting/SKILL.md); this block is display only and CI-checked against it):

<!-- philosophy-sync-start -->
```markdown
# Prompting

1. Write for intended agent's knowledge/capability and *trust* them appropriately. Prompt aligns agent to goal. Alignment > precision. Aligned agent acts toward goal; precise but unaligned agent confidently wrong.

2. Good prompt include *justification*. Agent without reason comply thoughtlessly. Thoughtful agent desirable.

3. Sound justification *falsifiable*. Reason aligns agent to goal. Prevents misapplication. Agent assess instruction against justification *within context* and can push back or pivot. False guidance can be tested and cleaned up. Unfalsifiable guidance accretes waste.

4. Good instructions are *minimum description* of intent/values/boundaries/hazards/outcome. Excess description limits autonomy for no benefit. Every word should serve alignment.

5. Justifications need explicit provenance. An inferred reason stated as observed is a lie and harms falsifiability. Observed beats inferred; honest inference beats fake observation. Explicit inference can be upgraded when evidence arrives.

6. Self-apply these rules before delivering/executing prompt. Reflection aids alignment. Catches laziness.
```
<!-- philosophy-sync-end -->

Why believe a few lines do anything? Fresh agents given only this philosophy reconstructed the skill's methodology one-shot, and wrote specs that flagged unknowns as open questions instead of inventing requirements. The trap earlier wordings fell into — fabricating plausible justifications for existing rules whose history was lost — is what rule 5 was added to close, and the rerun probes show it holding: every inferred reason marked at the claim, none dressed as history. Three rounds of transcripts and reproduction instructions in [docs/validation.md](docs/validation.md).
