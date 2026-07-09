---
name: hazard-driven-skills
description: Use this whenever writing, editing, or reviewing a Claude skill file (SKILL.md) intended for a competent, reasoning agent — especially skills meant to run with little or no human review of individual outputs. Prevents skills from collapsing into rigid step-by-step scripts that suppress the agent's judgment. Trigger this any time someone asks to "write a skill," "turn this workflow into a skill," "make this reusable for the agent," wants to update or clean up an existing skill, wants to encode a failure they just watched an agent make, or is reviewing a skill that feels overly prescriptive, bloated, or produces confident-looking output nobody has verified.
---

# Writing Skills That Inform Instead of Script

## The core failure mode

Skill files default toward becoming procedures: "always do X," "follow these steps in order," "never do Y." This reads as thorough and finished, so it's the easy failure to fall into — both for a human writing quickly and for Claude, which will produce this shape by default unless told otherwise.

Procedural instructions are thought-terminating. They give the executing agent an action but no reason, so there's nothing for the agent to check the action against. When the situation in front of it doesn't match the scripted case — and real situations frequently don't — the agent has two bad options: follow the instruction anyway (producing a confidently wrong result), or ignore it (producing an inconsistent one). Either way, the agent's actual judgment — the thing that makes it useful for anything beyond the exact cases anticipated — was never in the loop.

This gets more dangerous as skills get bigger and more autonomous. A short prescriptive skill that a human reviews line-by-line is self-correcting; a large one designed to run ticket-in, output-out with no review compounds every thought-terminating instruction across every run, and nobody finds out the error rate until something breaks in production.

## Write for a peer, not a script-follower

Assume the agent executing this skill is as capable of reasoning as you are. Its gap isn't intelligence — it's that it doesn't have your specific, hard-won context about this codebase, this domain, this team's scar tissue. The job of a skill is to transfer that context, not to substitute for the agent's judgment with your own pre-baked decisions.

A useful mental test: would you hand this to a competent new hire as "here's what we've learned the hard way, use your judgment," or as a checklist for someone you don't trust to think? If it's the second, rewrite it.

## The hazard test

For every instruction in a skill, ask: **does this include a checkable "because"?**

A hazard claim has three parts, and all three should be verifiable against the actual situation the agent is facing:

1. **What we observed** — the specific failure, not a generality
2. **Why it happens** — the causal mechanism, not "best practice" or "more maintainable" (those are unfalsifiable filler-becauses; they have the shape of a reason but give the agent nothing to check)
3. **What a correct judgment call looks like** — not a fixed action, but what the agent should weigh

If an instruction can't be rewritten this way — if the "because" is missing, decorative, or itself unfalsifiable — it's a procedure wearing a hazard's clothing, and the agent reading it can't tell the difference. That's the actual danger: a fake "because" is worse than an honest "always," because it looks checkable and isn't.

### Comparison

**Procedural (thought-terminating):**
> Always wrap async calls to the payments service in a try-catch using the standard error handler.

The agent can only comply or not. There's no situation-specific reasoning available — even if this case doesn't need it, or needs something different, the instruction gives no way to notice that.

**Hazard-driven (thought-informing):**
> The payments service silently drops errors in async context under load — we've had three incidents where a failed charge looked like a success because the exception never surfaced. Check whether this call path has a way for a silent failure to reach the user as a false positive; if so, it needs explicit failure handling. If this call can't silently fail (e.g., it's synchronous, or errors are already surfaced elsewhere), the risk doesn't apply.

The agent can verify: does this call path have the failure mode described? If yes, the risk transfers and the agent should act on it. If no, the agent has actual grounds — not a rule violation — to conclude it doesn't apply here.

## Which reference file to read next

This file covers the shared principles. Read one of the following based on what the user is actually doing — don't guess which applies without checking, and don't skip straight to drafting without reading the matching file:

- **Drafting a brand-new skill from scratch** (a workflow, team conventions, general guidance) → `references/authoring-new.md`. Covers interviewing the user for the causal mechanism rather than transcribing whatever they hand over, and when a fragile/exact-steps instruction is legitimately warranted instead of a hazard claim.
- **An agent just failed at something in this or a recent conversation, and the user wants it encoded so it doesn't repeat** → `references/distilling-from-failure.md`. Covers separating the generalizable hazard from the one-off fix, and attaching provenance so the entry can later be confirmed or pruned.
- **Editing, updating, or cleaning up a skill that already exists** → `references/maintenance.md`. Covers offering to reverify aging entries, pruning falsified ones, and keeping multi-file skills from drifting out of sync.

If a task spans more than one of these (e.g. distilling a new entry into a skill that already has others), read both relevant files — they're written to be used together, not as exclusive alternatives.

## Practical guardrails while drafting

- **Ban bare "always" / "never"** unless immediately followed by a checkable "because." If you catch yourself writing one without it, stop and ask what specifically goes wrong, and under what conditions.
- **Prefer "we observed / this happens because / watch for" over "you must / the correct approach is."** The first transfers knowledge; the second transfers obedience.
- **State the conditions under which a rule doesn't apply**, not just the rule. If you can't articulate when a hazard is absent, you probably don't understand the hazard well enough to encode it yet — go find out rather than writing the safe-sounding version.
- **Size is a warning sign, not a proxy for thoroughness.** A skill that's grown very large through repeated undirected iteration (adding more waves, more phases, more recipes) without anyone reading the output against reality is accumulating, not converging. If nobody closed the loop — checked actual output against actual intent — more text is not more rigor, it's more unverified surface area. This applies to reference files too: a skill can hide the same bloat one level down.
- **If the skill is meant to run without human review of individual outputs, the bar goes up, not down.** No-human-in-the-loop is a legitimate design choice, but it means every thought-terminating instruction in the skill ships uncaught, every time. Skills built for autonomous execution deserve more scrutiny for this pattern than skills a human will review anyway, not less.

## Self-check before finishing a skill

Reread each instruction and ask:

1. Is there a "because," and is it a real causal claim rather than an appeal to convention?
2. Could the executing agent, using this instruction, correctly decide the hazard *doesn't* apply in some case — or does the instruction only support "do it" / "don't do it"?
3. If I removed the specific observed failure and its mechanism, would this instruction still sound convincing? (If yes, it's probably filler dressed as guidance.)
4. Am I writing this the way I'd explain it to a colleague I respect, or the way I'd write a rule for someone I don't trust?
5. If this entry has provenance attached, could someone check it against current code and confidently either re-date it or delete it — or is the provenance buried where nobody will find it to act on?

If a skill passes these, it should end up shorter than the procedural version would have been — hazard knowledge is denser than step lists, because it doesn't need to enumerate every path, only the ones that actually bite.

If an instruction fails one of these checks, that's not necessarily Claude's error to silently fix — it may mean the underlying "because" still needs to come from the user. Surface the specific gap ("this rule doesn't say why yet, or when it wouldn't apply") and let the next round of the interview fill it in, rather than inventing a plausible-sounding mechanism to make the check pass.
