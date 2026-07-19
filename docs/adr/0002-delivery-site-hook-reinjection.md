# ADR-0002: Re-inject the self-apply rule via a PreToolUse[Agent] hook

Date: 2026-07-11 (backfilled 2026-07-18 from commit afb7f34). Status: active.

## Context

Observed failure: self-apply rule violated in the same session where a per-prompt-reinjected style hook held perfectly. Rules present once at session start erode; rules re-delivered at the point of use don't.

## Decision

**Decision:** a PreToolUse hook scoped to Agent tool calls re-injects the rule at the delivery site.

Not every response — repetition works because it lands where it applies; indiscriminate repetition erodes into noise. Mechanism, timing limit, and efficacy status live in the comment block of hooks/prompting-check.sh — single source of truth; this record holds only the decision.

## Falsification

Violation in a prompt the hook already fired before — supersede toward a stronger mechanism. Sustained violations on first spawns only (the hook's recorded timing gap) — indicts the timing, not the approach.
