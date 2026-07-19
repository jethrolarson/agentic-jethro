# ADR-0005: Adopt hazard-shaped decision records

Date: 2026-07-18. Status: active.

## Context

Three independent convergences, same day: outside agent recommended ADRs after watching a multi-message decision ("why CLAUDE.md canonical over prompting") survive only in chat transcript; Claude Code memory format independently demands Why/How-to-apply fields; review finding (shared description value-marker) withdrawn on a rationale with no durable home. Live demonstration same day: commit 3eb6a8b reversed the CLAUDE.md-canonical decision with no record the original was deliberate.

Repo philosophy reduces to one generator: an artifact addressed to a future reasoning peer carries the minimum context they lack — observed pressure, mechanism, falsification condition. Hazard entries instantiate it for executing agents; prompting rules for delegated agents. Nothing instantiated it for decisions about the repo itself.

## Decision

**Decision:** record structural decisions in `docs/adr/`, one immutable file per decision — context that forced it, decision, mechanism, falsification condition. The Decision section opens with the decision alone, one bold plain sentence; rationale follows separately (compressed prose buries the verb — observed 2026-07-18, reader couldn't extract decisions quickly).

Numbering is recording order; backfills take the next number (this initial pre-commit set was ordered chronologically as a one-time exception). Immutable — a changed decision gets a new superseding ADR, never an edit or deletion. Deletion loses the reasoning; reasoning is the asset (3eb6a8b demonstration). Hazard/provenance entries keep reverify-or-delete — those are claims about present truth; ADRs are dated records of past choices, never stale as records.

Backfill lazily — when a decision actually gets questioned — from recoverable evidence only (git history, docs/validation.md, transcripts). Unrecoverable reasoning: write "unjustified, kept pending recovery," not a plausible reconstruction. Fabricated incident history is a known agent failure mode (skills/prompting/references/provenance.md).

## Falsification

ADRs accumulating without being read at decision points — nobody consults one before reversing a recorded choice — means the overhead buys nothing. Supersede the practice.

## Evidence

`docs/inception.md` is ADR-0000 in spirit: raw transcript of the origin decision (hazard over procedure, the hazard test, the reference-file split). Stays a transcript — predates the practice. Cite directly.

Outside agent, 2026-07-18: "a decision we spent several messages on this session, that's now just... in this chat transcript, nowhere in the repo … so the next person editing (including future-you) doesn't have to re-derive it from scratch or, worse, 'fix' it by reversing a decision that was actually deliberate."
