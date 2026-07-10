---
name: hazard-driven-skills
description: Use this whenever writing, editing, or reviewing a Claude skill file (SKILL.md) intended for a competent, reasoning agent — especially skills meant to run with little or no human review of individual outputs. Prevents skills from collapsing into rigid step-by-step scripts that suppress the agent's judgment. Trigger this any time someone asks to "write a skill," "turn this workflow into a skill," "make this reusable for the agent," wants to update or clean up an existing skill, wants to encode a failure they just watched an agent make, or is reviewing a skill that feels overly prescriptive, bloated, or produces confident-looking output nobody has verified.
---

# Skills That Inform Instead of Script

Skills written by agents default toward procedure: "always do X," fixed steps, "never do Y." This looks thorough, but it's thought-terminating — executing agents given imperative instructions diligently complete them without consideration. Well-written skills prevent mistakes by giving good context on what works or where the pitfalls lie concretely and falsifiably. The skills should treat the executing agent like a peer that can be trusted but lacks the specific knowledge that led to the skill's inception. Good skills compress a massive amount of context into the minimum necessary to lead to the desired outcome for the next agent while letting that agent use its intelligence.

## The hazard test

Every instruction needs a checkable "because." A hazard claim has three parts, each verifiable against the situation the agent is actually facing:

1. **What we observed** — the specific failure, not a generality
2. **Why it happens** — the causal mechanism ("best practice" / "more maintainable" are filler-becauses: reason-shaped, nothing to check)
3. **What a correct judgment call looks like** — what to weigh, not a fixed action

A fake "because" is worse than an honest "always" — it looks checkable and isn't.

> 👎 **Procedural:** "Always wrap async calls to the payments service in a try-catch." Comply or don't; nothing to reason about.
>
> ✅ **Hazard-driven:** "The payments service silently dropped errors in async context under load — failed charges have looked like successes. Check whether this call path lets a silent failure reach the user as a false positive; if it can't (synchronous, errors surfaced elsewhere), the risk doesn't apply."

The second is verifiable: if the failure mode is present, the risk transfers; if absent, the agent has real grounds — not a rule violation — to set it aside. Falsifiability pays twice: in the moment, the executing agent can check whether the risk applies; over time, a maintainer can re-test the claim against current code and delete it when the mechanism no longer holds. Unfalsifiable guidance can never be proven dead, so it only accumulates.

## Which reference to read

- **Drafting a new skill** → `references/authoring-new.md` — interviewing for the mechanism; when exact steps are legitimately warranted
- **Encoding a failure an agent just made** → `references/distilling-from-failure.md` — separating the hazard from the fix; attaching provenance
- **Editing an existing skill** → `references/maintenance.md` — reverifying, pruning, multi-file sync

If the task spans modes, read both files.

## Guardrails

- **No bare "always"/"never."** If you can't say what specifically breaks and under what conditions it doesn't, you don't understand the hazard well enough to encode it — go find out.
- **State when the hazard is absent**, not just the rule. An instruction that only supports "do it / don't" fails the test.
- **Size is a warning sign, not thoroughness.** A skill grown by accumulation, with nobody reading output against reality, is unverified surface area — we watched a 200-reference-file skill rot exactly this way. Applies to reference files too.
- **No human review of outputs raises the bar.** Every thought-terminating line in an autonomous skill ships uncaught, every run.

A skill passing these ends up *shorter* than the procedural version — hazards are denser than step lists. If an instruction fails the test and you can't supply the "because," surface the gap to the user rather than inventing a plausible mechanism to make it pass. Skills should not be scar tissue but institutional knowledge distilled.
