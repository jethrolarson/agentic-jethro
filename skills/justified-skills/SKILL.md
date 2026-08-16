---
name: justified-skills
description: Use when writing, editing, or reviewing skill files (SKILL.md)
---

# CONTEXT

Author of this skill observed skills written by agents default toward procedure: "always do X," fixed steps, "never do Y." Agents following imperative procedural instruction diligently followed instructions even when it was bad fit for the current situation. However agents noticing contradiction in instructions have been observed raising concerns before continuing. (docs/inception.md)
Hypothesis: agents given justification use judgement better and avoid a class of confident-but-wrong errors.

# Instructions

- MUST: load /agentic-jethro:prompting skill. REASON: This skill builds on that one.

- MUST: follow /agentic-jethro:prompting guidance. REASON: this aids in agent alignment and skill maintainability without sacrificing agent inteligence.

- SHOULD: avoid redundancies and meandering prose — focus on defining instructions and hazards. REASON: Excess text buries signal in the noise. See `/prompting` #4.

- CONTEXT: author of this skill observed ai-generated skills using arbitrary structure and meandering prose that obscures the edges between instructions, justifications and provenance. SHOULD: use tags (see below) when giving instructions in skill files. REASON: This helps humans scan and maintain skill files.

- SHOULD: keep skill files focused, create reference files as needed. REASON: long winded provenance records bloat context but are useful for skill maintenance.

- HAZARD: skill bloat from accretion. CONTEXT: Author observed a 200-file skill created through accretion. Lacking justifications and provenance it was nigh impossible to prune.

## for each instruction added, reviewed, or edited

- SHOULD: work with the maintainer either provide a legitimate `REASON` or consider removing the instruction. REASON: see `/prompting` #2 & #3.

- SHOULD: see if there's any real `CONTEXT:` that can be provided. REASON: Maintainer in the future can look at the context and see if the instruction is still relevant or can be deleted. See `/prompting` #5

## Tags

- `SHOULD:` — an instruction that should be followed where reason holds
- `MUST:` — strongly emphacized instruction that should have equally strong reason with it
- `HAZARD:` — a risk, pitfall, footgun
- `REASON:` — a falsifiable justification per `/prompting` #5
- `CONTEXT:` — provenance or relevant context for the related hazard, reason, instruction
