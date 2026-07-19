# ADR-0001: Ship the telegraphic philosophy wording without re-probing

Date: 2026-07-11 (backfilled 2026-07-18 from commit 9f90630 and docs/validation.md). Status: active.

## Context

Original prose wording probe-validated 2026-07-11 (four fresh-agent probes, docs/validation.md). Same day, wording compressed into numbered telegraphic form across CLAUDE.md, README, prompting skill — token-cost reduction for text loaded often.

## Decision

**Decision:** ship the compressed wording immediately, without re-probing; label the validation gap explicitly.

Old evidence must not silently attach to new text: version note in validation.md, "unvalidated, kept pending re-probe" in skill provenance.

Accepted risk: compression can change what a cold agent reconstructs — probes measured the prose wording's generative power, a wording-sensitive property. Bet: content survives compression.

## Falsification

Re-run validation.md probes against current wording. Comparable results — supersede with validated status. Degraded reconstruction — compression cut content, not just tokens; revert or re-expand the lossy parts.
