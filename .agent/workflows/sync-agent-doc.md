---
description: Check and sync agents, skills, workflows to agent docs to "GEMINI.md" and "ARCHITECTURE.md"
---

# /sync-agent-doc - Sync exist agents, skills, scripts, workflows to "GEMINI.md", "ARCHITECTURE.md"

---

## Purpose

This command will explore all exist agents, skills, scripts, workflows then sync - refactor file "GEMINI.md" and "ARCHITECTURE.md" to make sure neither too much nor too little.

---

## Task

This command update `GEMINI.md` and `ARCHITECTURE.md` if needed

### Steps:

1. **Load current state**:
   - Check agent folder, skill folder, workflow folder
2. **Sync/Refactor (if missing agent, skill, script, workflow)**
    - Refactor "GEMINI.md" and "ARCHITECTURE.md" (if not sync)
    - **Formatting Rule for Architecture**: If a skill category section has no implemented skills, it must be marked as:
      `| (None) | No agents implemented yet | - |`
    - Do not refactor "GEMINI.md" and "ARCHITECTURE.md" (if sync)