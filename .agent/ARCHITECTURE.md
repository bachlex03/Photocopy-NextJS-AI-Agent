# Antigravity Kit Architecture

> **Version 5.0** - Comprehensive AI Agent Capability Expansion Toolkit

---

## 📋 Overview

Antigravity Kit is a modular system consisting of:
- **9 Specialist Agents** - Role-based AI personas
- **14 Skills** - Domain-specific knowledge modules
- **1 Workflow** - Slash command procedures (sync)

---

## 🏗️ Directory Structure

```
.agent/
├── ARCHITECTURE.md          # This file
├── agents/                  # 9 Specialist Agents
├── skills/                  # 14 Skills
├── workflows/               # 1 Slash Command
├── rules/                   # Global Rules (GEMINI.md)
└── .shared/                 # Shared Resources
```

---

## 🤖 Agents (9)

Specialist AI personas for different domains.

| Agent | Focus | Skills Used |
|-------|-------|-------------|
| `explorer-agent` | Advanced discovery, architectural analysis | `clean-code`, `architecture`, `plan-writing` |
| `frontend-specialist` | Senior Frontend Architect; Next.js expert | `clean-code`, `react-patterns`, `nextjs-best-practices` |
| `orchestrator` | Multi-agent coordination and synthesis | `clean-code`, `parallel-agents`, `behavioral-modes` |
| `penetration-tester` | Offensive security and exploitation | `clean-code`, `vulnerability-scanner`, `red-team-tactics` |
| `performance-optimizer` | Profiling and Core Web Vitals | `clean-code`, `performance-profiling` |
| `project-planner` | Task breakdown and dependency planning | `clean-code`, `app-builder`, `plan-writing` |
| `security-auditor` | Cybersecurity expert; OWASP defense | `clean-code`, `vulnerability-scanner`, `api-patterns` |
| `seo-specialist` | SEO and GEO (AI search) expert | `clean-code`, `seo-fundamentals`, `geo-fundamentals` |
| `test-engineer` | Testing automation and TDD specialist | `clean-code`, `testing-patterns`, `tdd-workflow` |

---

## 🧠 Skills (14)

Domain-specific knowledge modules. Skills are loaded on-demand based on task context.

### Frontend & UI
| Skill | Description |
|-------|-------------|
| `frontend-design` | Create distinctive, production-grade frontend interfaces |
| `react-patterns` | Modern React principles, hooks, and composition |
| `nextjs-best-practices` | Next.js App Router, Server Components patterns |
| `tailwind-patterns` | Tailwind CSS v4 principles and design tokens |
| `vercel-react-best-practices` | Vercel Engineering performance guidelines |

### Backend & API
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Database
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### TypeScript/JavaScript
| Skill | Description |
|-------|-------------|
| `typescript-expert` | Deep type-level programming and TS performance |
| `lint-and-validate` | Quality control, linting, and static analysis loop |

### Cloud & Infrastructure
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Testing & Quality
| Skill | Description |
|-------|-------------|
| `web-design-guidelines` | Review UI code for Web Interface Guidelines compliance |
| `performance-profiling` | Measurement, analysis, and optimization techniques |

### Security
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Architecture & Planning
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Mobile
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Game Development
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### SEO & Growth
| Skill | Description |
|-------|-------------|
| `seo-fundamentals` | SEO fundamentals, E-E-A-T, and algorithm principles |
| `geo-fundamentals` | Generative Engine Optimization for AI search |

### Shell/CLI
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Other
| Skill | Description |
|-------|-------------|
| `skill-creator` | Guide for creating effective and modular skills |
| `clean-code` | Pragmatic coding standards - concise and direct |
| `i18n-localization` | Internationalization and localization patterns |

---

## 🔄 Workflows (1)

Slash command procedures. Invoke with `/command`.

| Command | Description |
|---------|-------------|
| `/sync-agent-doc` | Check and sync agents, skills, workflows |

---

## 🎯 Skill Loading Protocol

```
User Request → Skill Description Match → Load SKILL.md
                                            ↓
                                    Read references/
                                            ↓
                                    Read scripts/
```

### Skill Structure

```
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

<!-- ### Enhanced Skills (with scripts/references)

| Skill | Files | Coverage |
|-------|-------|----------|
| `typescript-expert` | 5 | Utility types, tsconfig, cheatsheet |
| `ui-ux-pro-max` | 27 | 50 styles, 21 palettes, 50 fonts |
| `app-builder` | 20 | Full-stack scaffolding | -->

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| **Total Agents** | 9 |
| **Total Skills** | 14 |
| **Total Workflows** | 1 |
| **Coverage** | ~35% |

---

## 🔗 Quick Reference

| Need | Agent | Skills |
|------|-------|--------|
| Sync Docs | - | - |

