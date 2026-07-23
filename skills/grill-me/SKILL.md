---
name: grill-me
description: Use when the user asks to be interviewed, grilled, or questioned thoroughly before work starts on something ambiguous or open-ended — surfaces every open design decision in dependency order instead of guessing or asking piecemeal. Trigger phrases include "grill me", "interview me first", "ask me everything up front".
---

# Grill Me

Map the request as a design tree: every open decision branches into the decisions that depend on its answer. Work the tree in rounds.

## The frontier

The frontier is every decision whose prerequisites are already settled — answerable now without guessing at something not yet heard. Compute it, ask the whole frontier in one round, then wait. A question that depends on another still-open question belongs to a later round, not this one.

Each round the user's answers resettle the tree: they unblock whatever depended on them, which becomes the next frontier. Recompute and ask again. Stop when the frontier is empty — every branch visited, nothing silently assumed.

## Facts are never a question to the user

If a frontier question needs something discoverable — filesystem, code, existing config, prior art — dispatch a subagent to find it instead of asking. Don't block the round on it: only the questions that depend on that fact wait; ask the rest of the frontier now. The user answers decisions; they don't do your reading for you.

## Every question carries its recommendation and the recommendation's why

Use AskUserQuestion for each round. Put your recommended option first and give it a real `description` — the reason, not a restatement of the label. A recommendation the user can't evaluate is a guess wearing a verdict's clothes; they can only accept or override it blind, which defeats the interview. This is the one place a plain question-and-answer version of this skill goes wrong: "give your recommended answer" without a stated reason produces exactly that.

## Stop before acting

Confirm the shared understanding once the frontier is empty. Don't start the work in the same turn — a design tree the user hasn't seen assembled is not yet a design tree they've agreed to.
