#!/bin/bash
# PreToolUse[Agent] — re-inject the prompting skill's self-apply rule at
# prompt-delivery time.
#
# Why a hook and not CLAUDE.md alone: instructions loaded once at session
# start decay; by the time a subagent prompt is authored mid-session, rule 5
# (self-apply before delivering) goes unapplied. A constraint re-injected at
# the moment it matters holds — observed 2026-07-11: session-start rules were
# violated in the same session where a per-prompt-reinjected style hook held
# perfectly. Fires only on Agent tool calls (the delivery site), not every
# response, so it can't erode through irrelevant repetition.
#
# Verified firing live 2026-07-11. Timing limit observed then: the injected
# context lands after the triggering call is authored, so it shapes the
# *next* prompt, not the current one — the first Agent spawn of a session
# ships unreminded. Preventing an actual rule-4 violation: not yet observed.

cat > /dev/null # drain stdin; the matcher already scoped us to Agent calls

printf '%s' '{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"Prompt leaving for another agent — self-apply the prompting rules before it sends (rule 5). Especially rule 4: strip direction the receiving agent does not need; excess instruction skews what comes back (observed 2026-07-11: telling a cold agent to follow every spec bullet exactly inflated its output ~2x and contaminated the measurement the prompt served). Every remaining instruction should carry a falsifiable why the agent can check in context (rules 2-3). If an instruction cannot justify itself, cut it or mark it unjustified."}}'
