# Authoring a new skill: interview for the "because"

Read this when a user wants to write a skill from scratch — capturing a workflow, a set of team conventions, or general guidance they want an agent to apply consistently in the future.

Before drafting, re-read the hazard test in the main SKILL.md — everything here assumes it.

## Don't one-shot it

A user asking for a skill usually knows *that* something went wrong before they know precisely *why*, in checkable terms. "We got burned by X" is easy to say. The causal mechanism, and the conditions under which the risk is absent, often isn't fully formed yet — it's tacit knowledge the user hasn't had to articulate before. If Claude just formats whatever the user hands over, a vague or missing "because" gets written down looking finished, and the thought-terminating problem the hazard test exists to prevent slips back in through the drafting process itself.

So treat drafting as a back-and-forth, not a transcription task. When a user describes a rule or a past failure, push on it before writing it into the skill:

- **If the mechanism is missing:** "What actually goes wrong when this happens — what breaks, and why?" Don't accept "it's just not safe" or "it caused problems" as a final answer; that's a filler-because. Keep asking until you get something checkable.
- **If the mechanism is present but the boundary isn't:** "Is there a case where this *doesn't* apply?" If the user says "no, always," that's worth gently testing — genuinely universal hazards are rarer than they first seem, and an unexamined "always" is exactly the pattern to catch, whether it originates from Claude or from the user's own framing of the problem.
- **If the user gives a fix but not the failure it's fixing:** ask what the fix was a response to, specifically. A prescribed action ("use pattern Z") without its originating hazard is a procedure by definition — recover the "why" before encoding the "what."

This doesn't mean interrogating every detail before writing anything — if the user's mechanism is already clear and checkable, just write it. The interview is proportional to how vague the "because" currently is, and it's fine to draft a first pass with a best guess at the mechanism and flag it back to the user for correction ("I'm inferring the risk is X — is that right, or is it something else?") rather than blocking on getting it perfect before writing anything down. Collaboration and iteration are the point; a single round-trip that produces a plausible-sounding but unverified "because" is just a slower version of the same failure.

## Match specificity to fragility, not just to whether a "because" exists

Most instructions should be hazard-driven. But some tasks are genuinely fragile in a way that warrants an exact, no-deviation script rather than a judgment call — a database migration that must run in one specific sequence, an API call with an exact required parameter order. The distinguishing feature: the "because" for these is "any deviation breaks it," and that's a real, checkable claim, not a filler one. The guardrail isn't "no scripts ever" — it's that the narrow, exact-steps case should be the exception you can name a reason for, not the default shape every instruction falls into out of habit.

If in doubt about which a given piece of the skill needs, ask the user directly: does this step tolerate judgment, or does it need to be followed exactly, and if the latter, what specifically breaks if it isn't?
