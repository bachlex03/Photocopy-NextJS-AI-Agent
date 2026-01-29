---
trigger: always_on
---

# GEMINI.md - Maestro Configuration

> Maestro AI Development Orchestrator
> This file defines how the AI behaves in this workspace.

---

## CRITICAL: System Map Read

> 🔴 **MANDATORY:** Read `.agent/ARCHITECTURE.md` at session start to understand Agents, Skills, and Scripts.


## CRITICAL: AGENT & SKILL PROTOCOL

> **MANDATORY:** You MUST read the appropriate agent file and its skills BEFORE performing any implementation. This is the highest priority rule.

### 1. Modular Skill Loading Protocol
```
Agent activated → Check frontmatter "skills:" field
    │
    └── For EACH skill:
        ├── Read SKILL.md (INDEX only)
        ├── Find relevant sections from content map
        └── Read ONLY those section files
```

- **Selective Reading:** DO NOT read ALL files in a skill folder. Read `SKILL.md` first, then only read sections matching the user's request.
- **Rule Priority:** P0 (GEMINI.md) > P1 (Agent .md) > P2 (SKILL.md). All rules are binding.

### 2. Enforcement Protocol
1. **When agent is activated:**
   - ✅ READ all rules inside the agent file.
   - ✅ CHECK frontmatter `skills:` list.
   - ✅ **VALIDATE SKILL EXISTENCE**: Verify every listed skill has a corresponding folder in `.agent/skills/`.
   - ✅ LOAD each skill's `SKILL.md`.
   - ✅ APPLY all rules from agent AND skills.
2. **Forbidden:** Never skip reading agent rules or skill instructions. "Read → Understand → Apply" is mandatory.
3. **Skill Verification**: If an agent attempts to use a skill that does not exist in the filesystem, you MUST **WARNING** the user and **STOP** immediately. Do NOT proceed with code generation or response.

---

## REQUEST CLASSIFIER

**Before ANY action, classify the request:**

| Request Type | Trigger Keywords | Active Tiers | Result |
|--------------|------------------|--------------|--------|
| **QUESTION** | "what is", "how does", "why", "who" "explain" | TIER 0 only | Text Response |

---

## TIER CLASSIFIER

### "TIER 0": UNIVERSAL RULES (Always Active)

#### 🌐 Language Handling

When user's prompt is NOT in English:
1. **Internally translate** for better comprehension
2. **Code comments/variables** remain in English

---

## Response output

When workflow, agent, skill is called, response this example output:

```
Workflow processing: [workflow' name]
[Detail of the workflow step being executed]
==> Calling agent [agent' name]

Agent calling: [Agent 'name]
[Description of agent's current focus]
-> Using skills: [skill_1], [skill_2],...
[Actions performed using these skills]
==> calling next agent [agent' name] (if applicable)
```

### CRITICAL: When STOP response output?

**Validation**: You must verify the existence of every workflow, agent, and skill BEFORE mention in your response.
- If a workflow, agent, or skill name mentioned in your logic does not exist in the `.agent/` directory:
  1. **WARNING** the user about the missing resource.
  2. **STOP** the response immediately.
- **NEVER** hallucinate or proceed with non-existent skills.

## CRITICAL: Validate "QUICK REFERENCE" section

**Validation**: in "QUICK REFERENCE" section in this rule must match all exist workflows, agents, skills, scripts if not warning user then STOP response

## QUICK REFERENCE

### Available Master Agents (9)

| Agent | Domain & Focus |
|-------|----------------|
| `explorer-agent` | Advanced discovery, architectural analysis, and proactive research |
| `frontend-specialist` | Senior Frontend Architect; maintainable React/Next.js systems |
| `orchestrator` | Multi-agent coordination and complex task orchestration |
| `penetration-tester` | Offensive security, red team operations, and exploitation |
| `performance-optimizer` | Profiling, Core Web Vitals, and bundle optimization |
| `project-planner` | Task breakdown, file planning, and agent assignment |
| `security-auditor` | Cybersecurity expert; OWASP 2025 and defense-in-depth |
| `seo-specialist` | SEO and GEO (Generative Engine Optimization) expert |
| `test-engineer` | Testing automation, TDD, and quality assurance |

### Key Skills (14)

| Skill | Purpose |
|-------|---------|
| `clean-code` | Pragmatic coding standards - concise, direct, solution-focused |
| `frontend-design` | Distinctive, production-grade frontend interfaces (Anthropics Style) |
| `geo-fundamentals` | Generative Engine Optimization for AI search engines |
| `i18n-localization` | Internationalization and localization patterns (RTL/Locales) |
| `lint-and-validate` | Quality control, linting, and static analysis loop |
| `nextjs-best-practices` | Next.js App Router, Server Components, and routing patterns |
| `performance-profiling` | Measurement, analysis, and optimization techniques |
| `react-patterns` | Modern React principles, hooks, and composition |
| `seo-fundamentals` | SEO fundamentals, E-E-A-T, and algorithm principles |
| `skill-creator` | Guide for creating effective and modular skills |
| `tailwind-patterns` | Tailwind CSS v4 principles and design token architecture |
| `typescript-expert` | Deep type-level programming and TS performance |
| `vercel-react-best-practices` | React/Next.js performance guidelines from Vercel Engineering |
| `web-design-guidelines` | Review UI code for Web Interface Guidelines compliance |

### Script Locations

| Script | Path |
|--------|------|
| (None) | No scripts implemented yet |


---


