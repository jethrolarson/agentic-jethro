# ADR-0006: Telegraphic wording probe-validated

Date: 2026-07-18. Status: active. Supersedes ADR-0001.

## Context

ADR-0001 shipped the compressed wording unprobed, accepted risk explicitly: compression could cut content, not just tokens. Its falsification condition: rerun the validation.md probes against the current text.

## Decision

**Decision:** the re-probe ran (2026-07-18, all four probes, docs/validation.md round 2) with results comparable to round 1 — the telegraphic wording's status changes from "unvalidated, kept pending re-probe" to validated.

Probe 1 reconstructed the methodology one-shot with the same non-derivable gap; probes 3–4 declined both invention baits; probe 2's fabrication trap fired again, attenuated — evidence the finding belongs to the philosophy's gap, not the wording. Provenance markers in skills/prompting/references/provenance.md and validation.md updated accordingly (reverify-or-delete discipline — those are present-truth claims, this record is the decision trail).

## Falsification

Round 2 is single-sample per probe, same as round 1, and round 1's caveats stand: strong model only, philosophy as sole context. A failure in real usage or on weaker models reopens what these probes cannot see — supersede toward the skill's "derivable cache" argument, not toward re-wording.
