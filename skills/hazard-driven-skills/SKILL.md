---
name: hazard-driven-skills
description: Use this whenever writing, editing, or reviewing a Claude skill file (SKILL.md) intended for a competent, reasoning agent — especially skills meant to run with little or no human review of individual outputs. Prevents skills from collapsing into rigid step-by-step scripts that suppress the agent's judgment. Trigger this any time someone asks to "write a skill," "turn this workflow into a skill," "make this reusable for the agent," wants to update or clean up an existing skill, wants to encode a failure they just watched an agent make, or is reviewing a skill that feels overly prescriptive, bloated, or produces confident-looking output nobody has verified.
---

# Skills That Inform Instead of Script

Skills written by agents default toward procedure: "always do X," fixed steps, "never do Y." This looks thorough, but it's thought-terminating — executing agents given imperative instructions diligently complete them without consideration. Treat the executing agent as a peer that lacks only the specific context that led to the skill's inception; compress that context to the minimum and let the agent use its own intelligence.

## The hazard test

Every instruction needs a checkable "because." A hazard claim has three parts, each verifiable against the situation the agent is actually facing:

1. **What we observed** — the specific failure, not a generality
2. **Why it happens** — the causal mechanism ("best practice" / "more maintainable" are filler-becauses: reason-shaped, nothing to check)
3. **What a correct judgment call looks like** — what to weigh, not a fixed action

A fake "because" is worse than an honest "always" — it looks checkable and isn't. If you can't supply the mechanism, you don't understand the hazard well enough to encode it: go find out, or surface the gap to the user rather than inventing something plausible.

> 👎 **Procedural:** "Always wrap async calls to the payments service in a try-catch." Comply or don't; nothing to reason about.
>
> ✅ **Hazard-driven:** "The payments service silently dropped errors in async context under load — failed charges have looked like successes. Check whether this call path lets a silent failure reach the user as a false positive; if it can't (synchronous, errors surfaced elsewhere), the risk doesn't apply."

Falsifiability pays twice: in the moment, the executing agent can check whether the risk applies; over time, a maintainer can re-test the claim and delete it when the mechanism no longer holds. Unfalsifiable guidance can never be proven dead, so it only accumulates.

Size is a warning sign, not thoroughness. A skill grown by accumulation, with nobody reading output against reality, is unverified surface area — we watched a 200-reference-file skill rot exactly this way, reference files included. A skill passing the hazard test ends up *shorter* than the procedural version, because hazards are denser than step lists.

## Which reference to read

- **Drafting a new skill** → `references/authoring-new.md` — interviewing for the mechanism; when exact steps are legitimately warranted
- **Encoding a failure an agent just made** → `references/distilling-from-failure.md` — separating the hazard from the fix; attaching provenance
- **Editing an existing skill** → `references/maintenance.md` — reverifying, pruning, multi-file sync

If the task spans modes, read both files.
