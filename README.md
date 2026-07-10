# agentic-jethro

Jethro's collection of Claude Code skills, packaged as a plugin.

## Install

```
/plugin marketplace add jethrolarson/agentic-jethro
/plugin install agentic-jethro@agentic-jethro
```

Skills trigger automatically once installed.

## Skills

### hazard-driven-skills

Makes Claude write and review `SKILL.md` files as **falsifiable hazard claims** instead of scripts.

Agent-written skills collapse into procedure — "always do X," fixed steps — which reads as thorough but is thought-terminating: the executing agent complies without checking whether the case in front of it matches. This skill enforces a checkable "because" on every instruction (what we observed, why it happens, what to weigh) so the next agent can verify whether a risk actually applies — and so stale guidance can be proven dead and pruned instead of accumulating forever. Covers authoring new skills, distilling skills from watched failures, and maintaining existing ones.
