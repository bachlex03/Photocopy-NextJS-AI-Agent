# Antigravity Kit Architecture

> **Version 5.0** - Comprehensive AI Agent Capability Expansion Toolkit

---

## 📋 Overview

Antigravity Kit is a modular system consisting of:
- **16 Specialist Agents** - Role-based AI personas
- **40 Skills** - Domain-specific knowledge modules
- **11 Workflows** - Slash command procedures

---

## 🏗️ Directory Structure

```
.agent/
├── ARCHITECTURE.md          # This file
├── agents/                  # 16 Specialist Agents
├── skills/                  # 40 Skills
├── workflows/               # 11 Slash Commands
├── rules/                   # Global Rules
└── .shared/                 # Shared Resources
```

---

## 🤖 Agents (0)

Specialist AI personas for different domains.

| Agent | Focus | Skills Used |
|-------|-------|-------------|
| (None) | No agents implemented yet | - |

---

## 🧠 Skills (0)

Domain-specific knowledge modules. Skills are loaded on-demand based on task context.

### Frontend & UI
| Skill | Description |
|-------|-------------|
| `frontend-design` | Create distinctive, production-grade frontend interfaces |
| `react-best-practices` | React and Next.js performance optimization |

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
| (None) | No agents implemented yet | - |

### Cloud & Infrastructure
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Testing & Quality
| Skill | Description |
|-------|-------------|
| `web-design-guidelines` | Review UI code for Web Interface Guidelines compliance |

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
| (None) | No agents implemented yet | - |

### Shell/CLI
| Skill | Description |
|-------|-------------|
| (None) | No agents implemented yet | - |

### Other
| Skill | Description |
|-------|-------------|
| `skill-creator` | Guide for creating effective skills |

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
| **Total Agents** | 0 |
| **Total Skills** | 4 |
| **Total Workflows** | 1 |
| **Coverage** | ~10% |

---

## 🔗 Quick Reference

| Need | Agent | Skills |
|------|-------|--------|
| Sync Docs | - | - |

