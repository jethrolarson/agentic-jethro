# ADR-0003: Prompting skill is canonical; CLAUDE.md is a pointer

Date: 2026-07-18. Status: active. Supersedes an unrecorded decision (2026-07-11) making CLAUDE.md canonical with the skill as mirror.

## Context

Philosophy lived in two places: CLAUDE.md and skills/prompting/SKILL.md, hand-synced under "Canonical copy: CLAUDE.md at the repo root. Edit there, mirror here." Standing duplication cost; copies had already drifted.

Original rationale, recovered from commit order (2026-07-18 backfill): philosophy born in CLAUDE.md (068815c, reverse-engineered from hazard-driven-skills), prompting skill created later same day (55ed089) as distribution copy for the plugin — CLAUDE.md canonical because original, skill the mirror. docs/validation.md probes ran against "the full CLAUDE.md text," anchoring the validated wording there. Further plausible benefit — CLAUDE.md loads unconditionally every session, skill body only on invocation — is reconstruction, not recovered evidence. Reversal (3eb6a8b) made without access to any of this — the gap that motivated ADR-0005.

## Decision

**Decision:** skills/prompting/SKILL.md becomes the single source of truth; CLAUDE.md reduces to one pointer line.

Eliminates mirror-sync duplication and the drift it produced.

Accepted cost: philosophy no longer unconditionally in context — delivery depends on the skill description firing. Partial mitigation at one delivery site: hooks/prompting-check.sh re-injects the self-apply rule on Agent tool calls.

## Falsification

Observed session where an agent writes instructions for another agent, prompting skill never fires, output violates the rules — invocation path leakier than the mirror was. Supersede; reconsider inlining or a stronger hook.
