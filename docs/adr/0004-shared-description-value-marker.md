# ADR-0004: Both skill descriptions share one verbatim value marker

Date: 2026-07-18. Status: active.

## Context

Descriptions of `prompting` and `hazard-driven-skills` both carry "Improves agent alignment without suppressing intelligence," verbatim. Review (2026-07-18, against writing-great-skills rules) flagged duplication at the most expensive tier — descriptions always-loaded, sentence gives an agent zero signal for choosing between the two.

## Decision

**Decision:** keep the verbatim sharing in both descriptions.

Within-pair discrimination already handled by disjoint triggers (SKILL.md files vs. instructions generally); the sentence never did that job. Its work is pair-versus-ecosystem: an agent holding several prompt- or skill-authoring skills needs to know these two carry the alignment philosophy, a generic one doesn't. Sameness is the point — verbatim match marks the pair as one system.

Accepted cost: maintenance coupling — rephrasing the value is a two-place edit.

## Falsification

Observed mis-invocation — agent picks the wrong skill of the pair, or fails to prefer these over a generic authoring skill where the philosophy mattered — means the marker isn't discriminating. Supersede; differentiate the descriptions.
