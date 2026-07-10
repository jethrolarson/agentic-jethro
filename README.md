# agentic-jethro

A collection of useful skills for agentic programming. Well, one at the moment but it's a start!

## Install

```
/plugin marketplace add jethrolarson/agentic-jethro
/plugin install agentic-jethro@agentic-jethro
```

## Skills

### hazard-driven-skills

Makes Claude write and review `SKILL.md` files as **falsifiable hazard claims** instead of scripts.

By default skills written by agents are overspecified, procedural, and thought-terminating. Claude will give the next agent a confident but wrong instruction that it will often thoughtlessly execute without considering the context fully. This skill guides the agent to work with you to write skills that are hazard-driven to prevent pitfalls while still letting the executing agent use its intelligence. This skill will help you create, update and maintain skill files that minimize accretion and discourage creating zombie agents.

Example prompts:
* `Can you use hazard driven skills to prevent that last screw-up next time?`
* `Can you audit my-unit-testing-guide skill using hazard-driven-skills?`
* `Seems like you wasted a lot of tokens there, can you update the oncall-ops skill so the next agent doesn't do the same?`
