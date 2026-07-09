# hazard-driven-skills plugin

A Claude Code plugin that provides the **hazard-driven-skills** skill.

The skill helps you write, edit, and review Claude `SKILL.md` files so they
inform the executing agent's judgment (with checkable "because" claims) instead
of collapsing into rigid, thought-terminating step-by-step procedures.

## What's inside

```
.claude-plugin/plugin.json          plugin manifest
skills/hazard-driven-skills/
  SKILL.md                          the skill (shared principles + routing)
  references/
    authoring-new.md                drafting a brand-new skill
    distilling-from-failure.md      encoding a failure you just watched
    maintenance.md                  editing / reverifying an existing skill
```

## The skill triggers when you

- ask to "write a skill" or "turn this workflow into a skill"
- want to update or clean up an existing skill
- want to encode a failure so an agent doesn't repeat it
- are reviewing a skill that feels overly prescriptive or bloated

## Installing

Add this repo as a plugin marketplace / plugin source in Claude Code (via the
`/plugin` command or your marketplace configuration), then enable the
`hazard-driven-skills` plugin. Once enabled, the skill is available to the agent
automatically based on its description.
