# Authoring a new skill: interview for the "because"

Users know *that* something went wrong before they know *why* in checkable terms. Transcribing what they hand over writes a vague "because" down looking finished — the thought-terminating failure re-entering through the drafting process. So push before encoding:

- **Mechanism missing:** "What actually breaks when this happens, and why?" Don't accept "it caused problems" — that's a filler-because.
- **Mechanism present, boundary missing:** "Is there a case where this *doesn't* apply?" An unexamined "always" is the exact pattern to catch, whether it comes from Claude or from the user's framing.
- **Fix given without its failure:** ask what the fix was a response to. An action without its originating hazard is a procedure by definition — recover the "why" before encoding the "what."

Interview in proportion to vagueness: if the mechanism is already clear and checkable, just write it. Drafting a best guess and flagging it back ("I'm inferring the risk is X — right?") beats blocking on perfection — but a round-trip that produces a plausible-sounding *unverified* "because" is the same failure, slower.

## When exact steps are legitimately warranted

Some tasks are genuinely fragile — a migration that must run in one sequence, an API call with exact parameter order. There the "because" is "any deviation breaks it," which is real and checkable. Scripts are fine as the exception you can name a reason for, not the default shape. If in doubt, ask the user: does this step tolerate judgment, and if not, what specifically breaks when it isn't followed exactly?
