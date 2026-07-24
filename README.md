# agentic-jethro

```
> What is agentic-jethro?

• A small skills library aimed at improving autonomy of agents by focusing on
prompt alignment. Thesis is: Modern LLMs are smart but will comply thoughtlessly
if not given user motivation. They claim agents given falsifiable reasons rather
than just procedure more reliably do the right thing when instructions don't
exactly match the situation.

Three skills apply that: `prompting` (the philosophy itself),
`hazard-driven-skills` (applies it to SKILL.md authoring), `grill-me` (applies
it to gathering requirements before ambiguous work starts).

> Are they right?

• They claim to have tested it and there's records in the repo — fresh agents
given only the philosophy reconstructed the methodology unprompted. One test
caught the rules being gamed, which is why rule 5 exists. Held up since.

> When would I use it?

• Anytime you're writing instructions another agent. But you don't have to
invoke it manually — The `prompting` skill triggers when writing memories,
skills, specs, handoff docs, or delegating to sub agents. It self-applies too:
rule 6 has me check my own output against these rules before delivering it, not
just follow them once and move on.

> Why does self-application matter?

• It's the only rule that checks whether the other five actually happened,
instead of just sounding like they did. An agent can write a justified,
falsifiable, minimal-looking instruction that it never actually verified —
confident, plausible, wrong. Rule 6 is the pause that catches that before it
ships, not after.

> How do I install it?

• Give me the link to this README and I can take it from there!

✴ Skidaddling…
```

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

### grill-me

Interviews you exhaustively before starting ambiguous or open-ended work. Maps the request as a design tree, works it in dependency-ordered rounds (the "frontier"), dispatches subagents for anything discoverable instead of asking you for it, and won't start work until every branch is resolved.

Example prompts:
* `Grill me on this before you touch any code.`
* `Interview me first — I don't want you guessing at the API shape.`

Derived from Matt Pocock's [`batch-grill-me`](https://github.com/mattpocock/skills/blob/main/skills/in-progress/batch-grill-me/SKILL.md), which introduced the frontier/design-tree interview mechanic — see [skills/grill-me/LICENSE](skills/grill-me/LICENSE) for its original MIT notice. This version routes recommendations through `AskUserQuestion`'s structured `description` field instead of free text, so every recommendation carries a justification by construction.

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

1. Write for intended agent's knowledge/capability and *trust* them
appropriately. Prompt aligns agent to goal. Alignment is more important than
precision. Aligned agent acts toward goal; a precise but unaligned agent is
confidently wrong.

2. Good prompts include *justification*. Agents without reason comply
thoughtlessly; thoughtful agents desirable.

3. Sound justifications are *falsifiable*. Reasons align agent to goal,
preventing misapplication. Agents assess instruction against justification
*within context* and can push back or pivot. False guidance can be tested and
cleaned up; unfalsifiable guidance accretes waste.

4. Instructions should be a *minimum description* of
intent/values/boundaries/hazards/outcome. Every word should serve alignment;
excess description limits autonomy for no benefit.

5. Justifications need explicit provenance. An inferred reason stated as
observed is a lie and harms falsifiability. Observed beats inferred; honest
inference beats fake observation. Explicit inference can be upgraded when
evidence arrives.

6. Self-apply these rules before delivering/executing prompt. Reflection aids
alignment, catches laziness.
```
<!-- philosophy-sync-end -->

Why believe a few lines do anything? Fresh agents given only this philosophy reconstructed the skill's methodology one-shot, and wrote specs that flagged unknowns as open questions instead of inventing requirements. The trap earlier wordings fell into — fabricating plausible justifications for existing rules whose history was lost — is what rule 5 was added to close, and the rerun probes show it holding: every inferred reason marked at the claim, none dressed as history. Three rounds of transcripts and reproduction instructions in [docs/validation.md](docs/validation.md).
