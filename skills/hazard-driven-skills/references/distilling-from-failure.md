# Distilling a skill from a failure you just watched

Read this when an agent (this one or another) spent a long time doing the wrong thing in the current or a recent conversation, and the user wants that failure encoded into a skill so it doesn't repeat.

Before drafting, re-read the hazard test in the main SKILL.md — everything here assumes it.

## Separate the hazard from the fix

One failed session actually contains two different things, and it's easy to write down only the second one:

1. **The hazard** — what made the wrong path look right, and what was actually true that the agent didn't account for. This generalizes.
2. **The fix** — what worked this time, in this specific instance. This might not generalize.

If you skip straight to encoding the fix ("when X, do Y"), you've written a new procedure, just one sourced from a real failure instead of an abstract guess. The next agent will apply Y reflexively, including in cases where Y isn't actually the right response to the underlying hazard — because the skill never told it what the hazard was, only what happened to work last time.

So before writing the skill entry, pull apart the failed conversation:

- **What did the agent believe that was false, or fail to check that mattered?** This is the actual hazard — state it the way you'd state any other: what was observed, why it happened, and what a correct judgment call requires checking for.
- **What was specific to this instance versus general to the failure class?** If the fix involved a particular file, a particular error message, a particular tool call — ask whether that's incidental detail or the actual mechanism. Encode the mechanism; leave the incidental detail as an example, not the rule itself.
- **Would a differently-shaped version of this same problem need a different fix?** If yes, the skill entry needs to describe the hazard and the space of correct responses, not just the one response you happened to land on. It's fine — often better — for a skill entry to end in "check for X" rather than "do Y," if Y was really only right for this specific case.

A quick gut check before finalizing: if you handed the skill entry to someone who hadn't seen the failed conversation, could they figure out *why* the fix worked from the entry alone? If the entry only makes sense with the failed session as context, it hasn't been generalized yet — it's still a memory of one incident, not a hazard claim the next agent can check against its own situation.

## Attach provenance — for pruning, not for the agent's reasoning

The point of provenance isn't to help the executing agent reason about the hazard mid-task — a dated conditional sitting inside live instructions is clutter the agent has to parse every run, and it doesn't need to know *when* a hazard was discovered to check whether it applies now. The point is to make the claim falsifiable later, by someone other than the agent in the moment: a hazard entry without provenance can only ever be added to, never confidently removed, because nobody can tell whether it's still true or just still present.

So keep the two separate:

- **The hazard, stated timelessly**, for the agent: what happens, why, how to check if it applies. No dates, no commit references, nothing that requires historical context to parse.
- **Provenance, as metadata**, for whoever maintains the skill: when this was observed, what commit or version, ideally a line for when it was last reverified and by what result. This can live in a trailing note, a table, or `provenance.md` alongside the other reference files — a file the executing agent never needs to open, but a reviewer can scan on its own.

The test for whether provenance is doing its job: can someone, without reading the whole skill, find the entries old enough to warrant a recheck, confirm the underlying code hasn't changed, and either date-stamp them as re-verified or delete them? If the answer is no — if provenance is buried inline and there's no way to scan for staleness without rereading everything — it's decoration, not falsifiability, and the skill will only grow. See `maintenance.md` for the reverify/prune workflow this feeds into.
