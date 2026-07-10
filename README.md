# hazard-driven-skills

A Claude Code plugin for writing skills that inform the agent's judgment instead of scripting it.

Agent-written skills collapse into procedure — "always do X," fixed steps — which reads as thorough but is thought-terminating: the executing agent complies without checking whether the case in front of it matches. This skill makes Claude write and review `SKILL.md` files as **falsifiable hazard claims** (what we observed, why it happens, what to weigh) so the next agent can verify whether a risk actually applies — and so stale guidance can be proven dead and pruned instead of accumulating forever.

## Install

```
/plugin marketplace add jethrolarson/agentic-jethro
/plugin install hazard-driven-skills@agentic-jethro
```

That's it — the skill triggers automatically whenever you ask Claude to write, update, review, or distill a skill.

## What it covers

- **The hazard test** — every instruction needs a checkable "because"; filler-becauses ("best practice") get caught
- **Authoring** — interviews you for the causal mechanism instead of transcribing vague rules
- **Distilling from failure** — separates the generalizable hazard from the one-off fix, with provenance
- **Maintenance** — reverify, prune falsified entries, keep multi-file skills in sync
