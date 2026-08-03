import path from "node:path"
import { fileURLToPath } from "node:url"
import type { Config, Plugin } from "@opencode-ai/plugin"

// The plugin package's Config type predates the `skills` field; opencode
// accepts it (skills.paths drives skill discovery at session start).
type SkillsConfig = Config & { skills?: { paths?: string[]; urls?: string[] } }

const SKILLS_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "skills")

// Re-injects the prompting skill's self-apply rule at prompt-delivery time.
//
// Why a hook and not skills/CLAUDE.md alone: instructions loaded once at
// session start decay; by the time a subagent prompt is authored mid-session,
// rule 6 (self-apply before delivering) goes unapplied. A constraint
// re-injected at the moment it matters holds — observed 2026-07-11: session-
// start rules were violated in the same session where a per-prompt-reinjected
// style hook held perfectly. This fires only on task tool calls (the delivery
// site), not every response, so it can't erode through irrelevant repetition.
//
// Port note vs. the Claude Code hook (hooks/prompting-check.sh, ADR-0002):
// Claude injects context after the trigger call is authored, so it shapes the
// *next* prompt and the first spawn of a session ships unreminded. opencode's
// tool.execute.before can mutate output.args.prompt before the subagent runs,
// so the reminder lands inside the prompt that is about to leave — closing
// that timing gap rather than inheriting it.
const DELIVERY_CHECK = `[agentic-jethro] Delivery check — the prompt that sent you this task was composed by another agent; before your work ships, self-apply the prompting rules (rule 6). Especially rule 4: strip direction the receiver does not need; excess instruction skews what comes back. Every instruction you pass on should carry a falsifiable why the receiver can check in context (rules 2-3). If an instruction cannot justify itself, cut it or mark it unjustified. Full rules: the \`prompting\` skill.`

export const AgenticJethro: Plugin = async () => {
  return {
    config: async (cfg) => {
      const config = cfg as SkillsConfig
      const existing = config.skills ?? {}
      const paths = [...(existing.paths ?? []).filter((dir) => dir !== SKILLS_DIR), SKILLS_DIR]
      config.skills = { ...existing, paths }
    },
    "tool.execute.before": async (input, output) => {
      if (input.tool === "task" && typeof output.args.prompt === "string") {
        output.args.prompt = `${DELIVERY_CHECK}\n\n${output.args.prompt}`
      }
    },
  }
}

export default AgenticJethro
