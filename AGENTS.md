# AGENTS.md - ai-assisted-landing-demo

**Language:** HTML/CSS/JavaScript
**Framework:** Plain HTML/CSS/JS (no framework)
**Package Manager:** npm (for tooling)
**Deploy:** GitHub Pages | **Dev:** localhost:5500

## Overview

Demo showing how to use AI-assisted development to create a simple landing page

## Structure

```
ai-assisted-landing-demo/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Tech Stack

**Core:** HTML5/CSS3, JavaScript (ES6+)
**Styling:** Tailwind CSS + shadcn/ui component patterns
**Database:** None
**Testing:** None (Playwright recommended for E2E)
**Build:** Tailwind CSS CLI (optional)

## 📋 Project Management

**Tool:** GitHub Issues
**URL:** https://github.com/ninjasitm/ai-assisted-landing-demo/issues
**Project ID:** N/A
**Issue Key Format:** `#NUM`

### Conventions

- Reference issues in commit messages: `#42: Brief description`
- Link PRs to issues: Include issue key in PR title or description
- Use issue keys for traceability: `Fixes #42`, `Relates to #43`

### Examples

**Commit Messages:**

```
#42: Add hero section with CTA button
#43: Fix mobile responsive layout
```

**PR Titles:**

```
#42: Implement hero section layout
feat(hero): Add animated CTA button (#42)
```

**PR Descriptions:**

```markdown
Fixes #42
Relates to #43
```

## Agent Conduct & Interaction Rules

### Clarification & Assumption Handling

**CRITICAL**: Before making assumptions or proceeding with ambiguous requirements, agents MUST proactively ask the user for clarification. This applies to:

- **Ambiguous requirements**: If a task description is vague, incomplete, or could be interpreted multiple ways, ask the user to clarify before proceeding.
- **Architecture decisions**: When multiple valid approaches exist (e.g., adding a new service vs. extending an existing one), present options and ask for the user's preference.
- **Data model changes**: Before adding/modifying database columns, relationships, or entities, confirm the intended schema with the user.
- **Breaking changes**: If an implementation could break existing functionality, API contracts, or database compatibility, flag it and ask before proceeding.
- **Scope uncertainty**: If unsure whether a feature should be minimal (MVP) or comprehensive, ask about the desired scope.
- **External dependencies**: When a task requires secrets, third-party services, or infrastructure not yet configured, ask the user before assuming.
- **Domain-specific decisions**: Sensitive UX choices or domain-specific behavior should be confirmed with the user first.

### How to Ask for Clarification

- Be specific about what is unclear and why it matters
- Offer 2-3 concrete options when possible (with a recommended default)
- Explain the trade-offs of each option briefly
- If there is a clearly best practice, recommend it but still confirm

**Example:**

> "This endpoint could return paginated results or the full list. Given the expected data volume, I'd recommend pagination with a default page size of 20. Should I proceed with that approach, or do you prefer returning all results?"

### Guardrails

- **Never silently change** database schemas, API contracts, or auth flows without confirmation
- **Never assume scope** — if a task says "add search," ask whether it means basic text search, full-text search, or filter/facet search
- **Never skip tests** for assumed-correct behavior — confirm expectations first
- **Prefer reversible changes** when acting without full clarity

> **Full details:** See `.github/instructions/agent-conduct.instructions.md`

## Detailed Instructions

Detailed standards are split into focused instruction files in `.github/instructions/`:

| Instruction File                   | Description                                     |
| ---------------------------------- | ----------------------------------------------- |
| `agent-conduct.instructions.md`    | Agent conduct rules, clarification protocols    |
| `project-context.instructions.md`  | Project architecture and data flow              |
| `coding-standards.instructions.md` | Coding standards, patterns, and conventions     |
| `patterns.instructions.md`         | State management, API, and component patterns   |
| `workflows.instructions.md`        | Development commands and environment setup      |
| `testing.instructions.md`          | Testing standards, commands, and conventions    |
| `deployment.instructions.md`       | Deployment configuration and commands           |
| `logging.instructions.md`          | Structured logging standards and best practices |
| `documentation.instructions.md`    | Feature and fix documentation standards         |

## Skills

For detailed standards on specific topics, refer to these skills in `.agents/skills/`:

| Skill               | File                                      | Purpose                                                 |
| ------------------- | ----------------------------------------- | ------------------------------------------------------- |
| **TDD**             | `test-driven-development/SKILL.md`        | Test-driven development with red-green-refactor         |
| **Debugging**       | `systematic-debugging/SKILL.md`           | Structured debugging methodology                        |
| **Verification**    | `verification-before-completion/SKILL.md` | Quality checks before claiming work done                |
| **Writing Plans**   | `writing-plans/SKILL.md`                  | Feature planning and specifications                     |
| **Executing Plans** | `executing-plans/SKILL.md`                | Following through on implementation plans               |
| **Code Review**     | `requesting-code-review/SKILL.md`         | Review process and checklists                           |
| **Review Feedback** | `receiving-code-review/SKILL.md`          | Responding constructively to review feedback            |
| **Brainstorming**   | `brainstorming/SKILL.md`                  | Structured ideation sessions                            |
| **Writing Skills**  | `writing-skills/SKILL.md`                 | Creating effective SKILL.md files                       |
| **Superpowers**     | `using-superpowers/SKILL.md`              | Leveraging the full skill system                        |
| **Git Worktrees**   | `using-git-worktrees/SKILL.md`            | Parallel development branches                           |
| **Parallel Agents** | `dispatching-parallel-agents/SKILL.md`    | Coordinating multiple AI agents                         |
| **Subagent Dev**    | `subagent-driven-development/SKILL.md`    | Breaking tasks into subagent chunks                     |
| **Branch Finish**   | `finishing-a-development-branch/SKILL.md` | Completing and merging branches                         |
| **Logging**         | `logging/SKILL.md`                        | Structured logging standards, log levels, observability |
| **Documentation**   | `project-documentation/SKILL.md`          | README, comments, ADRs, changelogs                      |

## Contributing

**Standards:** Follow HTML5/CSS3 and JavaScript (ES6+) best practices
**Process:** Feature branch → tests → lint → build → PR

## Related Documentation

- [README.md](README.md) - Project overview
- [docs/](docs/) - Detailed documentation
- [.cursor/rules/](.cursor/rules/) - Cursor IDE rules
- [.github/instructions/](.github/instructions/) - Copilot instruction files
