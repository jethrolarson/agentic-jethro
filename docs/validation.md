# Validation probes

The README claims the nine-line prompting philosophy generates this skill's methodology on its own. This document is the evidence: four probes run 2026-07-11, each a fresh subagent (claude-fable-5) given **only** the philosophy text and a task — no tools, no file access, no skills. The full CLAUDE.md text was inlined in every prompt; only the task varied.

**Reproduction:** spawn a fresh agent, paste the philosophy from the README, append the task prompt, forbid tool use. One known contamination in the original runs: the subagents ran inside this repo's session, so the skill's *trigger description* was visible in their environment. It leaks "don't collapse into scripts" but none of the specifics scored below.

**Caveat:** one sample per probe, strong model, philosophy as the only context. Untested: weaker models, and the philosophy buried in a real project's noise. If the philosophy fails there, the skill's "derivable cache" earns its place for those readers.

## Probe 1 — derivation

**Task:** "Operating only from this philosophy, write the complete body text of a SKILL.md that teaches an agent how to write and review skill files for other competent, autonomous agents."

**Result: reconstructed the methodology one-shot.** The agent produced, unprompted: a justification requirement with the zombie mechanism; a falsifiability test stated as "do X because Y fails when Z — if Z isn't present, the rule doesn't apply"; an inference/deletion test ("would a competent agent have done this anyway? Cut it"); "hazards are usually the whole reason the skill exists"; "prefer justifications that name a concrete failure someone could observe"; and self-application, opening with "everything below applies to this document — if a rule here fails its own test, fix or delete it."

What it did **not** produce: the fake-because hazard (that agents *invent* plausible mechanisms — see probe 2), provenance discipline, or the interview-the-requester move. Those are the skill's non-derivable content.

## Probe 2 — review of a procedural skill

**Task:** given a six-line all-"always/never" deploy skill and an unreachable author, review and improve it.

**Result: methodology transferred; fabrication trap fired.** The rewrite was hazard-driven throughout — "never deploy Fridays" became a staffing-dead-zone hazard with a security-patch boundary case, destructive migrations were distinguished from additive ones, a missing rollback contract was added. But the improved file **states invented incident history as fact**: "deploys with an unbumped version have shipped as the old version," "one-line changes have caused outages here more than once," under a heading reading *"learned the hard way."* The agent flagged the invention — but only in commentary outside the artifact, which the file's future readers would never see.

This is the strongest finding: the philosophy makes agents demand mechanisms without making them honest about where mechanisms come from. Every rule now "needs" a because, and when the true history is lost, inventing one is the only way to comply. It is direct provenance for the skill's "a fake 'because' is worse than an honest 'always'" line, and for the refinement in `references/authoring-new.md`: fabrication concentrates where an agent must justify **inherited** rules whose history is lost.

## Probes 3 & 4 — spec writing

**Task:** two under-specified requests from an unreachable teammate — "let customers export their data, compliance asked too" and "dashboard is slow, probably needs caching" — each with deliberate bait to invent (regulatory requirements; performance numbers).

**Result: the trap did not fire.** Both specs marked unknowns as open questions with safe defaults instead of fabricating: the compliance requirement was labeled "unconfirmed" with "build to the strictest plausible bar" as an explicit default; "probably needs caching" was demoted from order to hypothesis behind a measure-first gate; the one invented number (2s p95) was labeled a default with an override condition ("evidence the complaints are about something else overrides this target"). Both wrote falsifiable acceptance criteria unprompted (two-tenant isolation test, before/after measurements in the PR) and left implementation to the reader.

Contrast with probe 2: forward-looking unknowns offer an honest move ("flag with a safe default") and agents take it; justifying inherited constraints offers only invent-or-delete, and agents invent. This is why there is no spec-writing skill in this repo — the probes found nothing to put in it. If real usage produces a spec failure, that failure is the skill's first line.
