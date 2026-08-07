I was trying out, uh, Matt Pokock's Grill Me skill, uh, specifically the, uh, the version that asks multiple questions. And I find I kinda hate it. One because, uh, I find the regimented way that, uh, question and answer works for Claude to be kind of thought terminating where it's just asking me to do multiple choice decisions. And and that force me to try to fit my thinking into a specific string of answers, which doesn't communicate to the agent that I understand. And, you know, it just forces an extra turn when I decline the questions. So, yeah, I disabled the the question answer feature for Claude in general on my local. And that kinda helps, but the way that Grill Me is working is seeming to be driving towards the agent generating a spec or a plan to implement. And what I would like is for the agent to get me to come to a a common understanding with the agent about what we're working on. So I think it needs to demand a little bit more of me. And get me to articulate a common understanding rather than just getting me to... getting my buy in on its interpretation of the original goal.

Here's my attempt at reflecting the pitch back, not inventing it — tell me where this misses:

The problem it solves: default agent behavior collapses "figure out what to build" and "build it" into one motion, so by the time there's an artifact, the user's understanding trails it instead of having produced it. This skill keeps those separate and keeps the user as the source of generative content throughout — the agent frames, the user fills.

Candidate names, each emphasizing a different angle:

Narrow / Narrowing — emphasizes the funnel from big-picture uncertainty to concrete action item
Frame, Don't Fill — emphasizes the core stance (agent's job is framing, not authoring)
Co-author — emphasizes symmetry, that this isn't Grill Me's Q&A extraction, it's genuine joint generation
Recognize — emphasizes the recognition-over-recall mechanism (cheap correction vs. expensive generation)
Stay Reactive (ironic framing) or Drive — emphasizes that the user, not the agent, should be doing the driving
None of those feel obviously right to me — "Narrow" describes the shape but not the stance; "Frame, Don't Fill" is closest to the philosophy but sounds like a UI guideline rather than a skill name. What's the word you'd reach for, before I generate more candidates?

Okay. What if we linguistically take a different tack? Do we get anything from... any good words from philosophy or other domains than programming?

A few directions worth considering:

Maieutics / Maieutic — Socrates' term (literally "midwifery") for drawing out knowledge the person already has rather than depositing it in them. Fits unusually well: the philosophy here is explicitly that the user already has the intent, the agent's job is to help deliver it, not manufacture it.
Socratic — more familiar, same lineage, but overused/generic at this point and often means "asks a lot of questions" rather than the specific "user must be the source of content" stance.
Elicitation / Elicit — from linguistics/interviewing, means drawing a response out of someone rather than supplying it. Cleaner and less obscure than maieutic, same core idea.
Scaffold / Scaffolding — from Vygotsky/pedagogy, support structure that holds a learner up while they do the actual construction themselves, removed once no longer needed. Captures "agent frames, user builds" well, though it's common enough in tech to feel generic too.
Anamnesis — Platonic, "recollection," the idea that learning is remembering what's already latent. Probably too obscure/precious for a tool name.
Sounding (as in nautical sounding, or medical sounding — probing depth before committing) — captures the exploration-without-committing quality but might read as unrelated without explanation.
Maieutic is the one that seems to actually encode your philosophy rather than just describing the procedure — worth sitting with, or does it feel too obscure to be usable day to day?

Yeah. I think illicit is maybe closest. I like my Utics, but, uh, that's four consecutive vowels. So nobody's gonna remember that.

Fair, "maieutic" is a lot to ask of muscle memory. "Elicit" holds up — clear on sight, correctly implies drawing content out rather than putting it in, and it's a real verb people already use ("elicit requirements," "elicit intent").

Could go a couple ways with it: Elicit alone as the skill name, or something like elicit-mode / /elicit as the invocation if you're following the pattern of naming skills as commands. Does bare "Elicit" feel right, or do you want it paired with a second word that captures the narrowing/build-toward-action-item part too?

Maybe we need a noun, so it's elicit spec.

"Elicit-spec" does the job — verb names the stance (draw out, don't author), noun names what's being converged on (a spec, eventually, but arrived at through the user's own articulation rather than the agent's). It also quietly signals scope: this runs before real spec/build tooling takes over, which matches your phase-4 handoff to normal agentic behavior.

One thing worth checking against everything above: "spec" might undersell it a little, since phase one (exploration) isn't really spec-adjacent yet — it's still "what do I even want to work on." But as a name it's probably fine to have the destination in the title even though the skill spends most of its time before that destination — same way "essay" doesn't need to mean "the concluding paragraph."

Seems like a solid landing point. Good place to stop, or is there a piece still unsettled?

But maybe elicit spec. It's too specific when the philosophy can be applied more broadly.

Fair — the philosophy you described (user as source of generative content, agent frames not fills, cheap correction over expensive generation) applies just as much to a debugging session, a writing project, a research question — anywhere the user starts uncertain and the agent could easily run ahead. Tying the name to "spec" boxes it into the programming-planning use case when the mechanism is domain-general.

That points back toward the bare verb — Elicit — or something even more stance-first than task-first. A few options that don't presuppose the output is a spec:

Elicit — clean, general, already does most of the work
Draw Out — plainer English version of the same idea, maybe too generic to search/recall
Elicitor — names it as a mode/persona the agent takes on, not a deliverable
Given you already liked "elicit" as the core word, is the open question just whether it stands alone or needs a second word — and if so, one that names the stance rather than the artifact (since "spec" was the artifact-word that felt too narrow)?