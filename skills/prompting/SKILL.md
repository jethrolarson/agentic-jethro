---
name: prompting
description: Use when writing for another agent to execute or a future agent to rely on — prompts, specs, CLAUDE.md or AGENTS.md content, subagent task descriptions, memory entries, decision records, delegation of any kind. Improves agent alignment without suppressing intelligence. See agentic-jethro/hazard-driven-skills for skill authoring specifically.
---
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
