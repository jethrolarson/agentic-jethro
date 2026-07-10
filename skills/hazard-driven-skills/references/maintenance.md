# Editing and maintaining an existing skill

## Offer to reverify while you're in there

Provenance only pays off if something acts on it, and scheduled audits don't happen. A user coming back to edit a skill *is* the natural checkpoint: offer to recheck entries anchored before significant changes to the relevant code (new commit range, version bump, rewrite). A suggestion, not a gate — "a few of these entries predate [change]; want me to check they still hold, or is now not the time?" If declined, proceed with the original request; the offer having been made is what keeps staleness from silently accumulating.

## Prune, don't just accumulate

Reverification has two honest outcomes, both wins: the entry still holds (re-date the provenance) or it's been falsified (delete it outright). A skill that only accumulates fails the same way an over-cautious procedure does — bulk mistaken for rigor. Treat a confident prune as equal in value to a confirmation, not a fallback.

Pruning only works on entries stated as falsifiable claims — an entry that can't in principle be proven wrong ("be careful with X") will survive every audit unexamined. But vagueness usually means the mechanism went unrecorded, not that the knowledge is dead, so the move is recovery, not removal: ask the user what failure the entry was guarding against (the interview in `authoring-new.md`) and restate it as a checkable hazard. Deletion is for when nobody can recover the "because" anymore — and that's the user's call to make, not the auditor's.

## Multi-file rot

Reference files rot in ways a single file can't: SKILL.md stops routing to one (it goes silently unread), or two files drift into slightly different claims about the same hazard. When editing a multi-file skill, check that:

- SKILL.md's routing names every reference file that exists, each under the condition it's actually meant to be read
- Any hazard referenced from two places lives in one and is pointed to from the other — never duplicated
