# Distilling a skill from a failure you just watched

A failed session contains two things, and it's easy to write down only the second:

1. **The hazard** — what made the wrong path look right; what was actually true that the agent didn't account for. This generalizes.
2. **The fix** — what worked this time, in this instance. This might not.

Encoding only the fix ("when X, do Y") produces a new procedure, just one sourced from a real failure — the next agent applies Y reflexively, including where Y is wrong, because it was never told the hazard. Before writing the entry, pull the session apart:

- **What did the agent believe that was false, or fail to check that mattered?** That's the hazard — state it as any other: observed failure, mechanism, what to check for.
- **Instance-specific vs. general to the failure class?** A particular file, error message, or tool call is usually incidental — keep it as an example, encode the mechanism as the rule.
- **Would a differently-shaped version of the problem need a different fix?** Then describe the hazard and the space of correct responses. "Check for X" often beats "do Y."

Gut check: could someone who never saw the failed conversation tell *why* the fix worked from the entry alone? If not, it's still a memory of one incident, not a hazard claim the next agent can check against its own situation.

## Provenance is for pruning, not for the agent's reasoning

The executing agent doesn't need dates or commit references mid-task — that's clutter it must parse every run. The *maintainer* needs them: an entry without provenance can only ever be added to, never confidently removed, because nobody can tell whether it's still true or just still present. Keep the two separate:

- **The hazard, stated timelessly**, in the entry: what happens, why, how to check.
- **Provenance, as metadata** (trailing note, table, or a `provenance.md` the agent never opens): when observed, what commit/version, when last reverified.

Test: can a reviewer find the stale entries and re-date or delete them *without rereading the whole skill*? If not, provenance is decoration and the skill will only grow. See `maintenance.md` for the reverify/prune workflow this feeds.
