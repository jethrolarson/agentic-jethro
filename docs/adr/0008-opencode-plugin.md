# ADR-0008: Ship an opencode npm-plugin port

Date: 2026-08-03. Status: active.

## Context

The plugin's only opencode-novelty question is the delivery-site hook. Skills were
already portable: opencode's skill frontmatter (`name`, `description`) is
byte-identical to the Claude Code format, and opencode discovers SKILL.md from
`.claude/skills/`, `.agents/skills/`, and arbitrary `skills.paths` (verified live
2026-08-03: all four skills register unchanged). The gap is
`hooks/prompting-check.sh` (ADR-0002): opencode has no `PreToolUse` hooks. It has
plugins — `tool.execute.before` fires per tool call and can mutate the args that
are about to execute, and a plugin's `config` hook receives the live merged
config.

Both mechanisms verified live against opencode 1.18.11 before shipping: a plugin
`config` hook pushing a directory onto `cfg.skills.paths` made `opencode debug
skill` list skills from that directory, and `prompt.ts`'s task path passes the
post-hook `args` object straight into `taskTool.execute` — so mutating
`output.args.prompt` lands in the subagent's prompt.

## Decision

**Decision:** package the repo as the npm plugin `agentic-jethro` (repo root is
the package; `skills/` bundled as-is, single source of truth per ADR-0003). The
plugin has two hooks: `config` registers the bundled `skills/` dir on
`cfg.skills.paths`; `tool.execute.before` on the `task` tool prepends the
prompting delivery check to the prompt leaving for the subagent.

Port difference, deliberate: the Claude hook injects context *after* the trigger
call is authored, so it shapes the next prompt and the first spawn of a session
ships unreminded (recorded in `hooks/prompting-check.sh`). opencode's before-hook
mutates the prompt that is about to leave, so the reminder lands inside it —
closing that timing gap instead of inheriting it. The `config`-hook skill
registration is a convenience; the fallback if it ever stops working is the
one-line `skills.paths` entry or a copy to `~/.agents/skills/`.

## Falsification

Skills stop appearing in `opencode debug skill` with the plugin installed but no
`skills.paths` configured — opencode changed config-hook timing so discovery no
longer sees plugin mutations. Supersede toward documented `skills.paths`/copy
instructions. Or: a subagent prompt observed without the delivery-check prefix —
the `tool.execute.before` args mutation stopped reaching the task tool. Supersede
toward `command.execute.before`/agent-rule reinjection. (The task-prompt path is
source-verified, not live-observed: the live-subagent probe needs a working local
model provider, which the 2026-08-03 test harness could not stand up.)
