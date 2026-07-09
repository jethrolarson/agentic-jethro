# Editing and maintaining an existing skill

Read this when a user is coming back to an existing skill to add, change, or clean up entries — as opposed to drafting one from nothing.

## Offer to reverify when touching an existing skill

Provenance (see `distilling-from-failure.md`) only pays off if something actually acts on it. Don't wait for a scheduled audit that probably won't happen — when a user comes back to add to or edit an existing skill, that's the natural moment to check. Before or after making the requested change, look at the anchored entries already in the file and ask whether the user wants to reverify any that predate significant changes to the relevant code (a new commit range, a version bump, a rewrite of the area in question).

This should be a suggestion, not a blocking step — the user came to make a specific edit, not necessarily to audit the whole file. Something like: "While I'm in here — a few of these entries are anchored to commits from before [change]. Want me to check whether they still hold, or is now not the time?" If they decline, proceed with the original request; the offer having been made is what matters, since it's what keeps staleness from silently accumulating.

## Prune, don't just accumulate

Reverification has two possible honest outcomes, and both are wins: the entry still holds (re-date the provenance to reflect the recheck), or it's been falsified by a change in the code and should be deleted outright. A skill that only ever accumulates entries is failing the same way an over-cautious procedure does — bulk mistaken for rigor. Provenance exists specifically to make deletion possible with confidence, so treat a successful prune as equally good an outcome as a successful reverification, not a fallback.

## Watch for reference-file rot specifically

A skill with multiple reference files can rot in a way a single-file skill can't: entries drift out of sync with each other, a reference file stops being pointed to from SKILL.md and goes silently unread, or two reference files end up saying slightly different things about the same hazard. When editing a multi-file skill, check that:

- SKILL.md's routing still names every reference file that exists, and points to each one under the condition it's actually meant to be read
- No two reference files make overlapping hazard claims that have drifted apart — if the same hazard is referenced from two places, it should live in one and be pointed to from the other, not be duplicated
