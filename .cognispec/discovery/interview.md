# Cognispec Requirements Discovery Interview

## Date
2024-01-20

## Interview Status
✅ Completed

---

## Problem Space

### Problem Statement

Individual developers (indie hackers, freelancers) lack a systematic tool for requirements collection and analysis when developing products, leading to:

1. **AI-generated code deviates from expectations** - Wasted time and cost on revisions
2. **Requirements only exist in developer's mind** - Cannot continue after project interruption
3. **Human memory is unreliable** - After one month, developers forget their own requirements
4. **No persistent requirements documentation** - 80% progress may need to be discarded and restarted

**Key Insight**: Cognispec is not just a PRD writing tool, but an "external brain" - helping individual developers persist requirement memory, ensuring both humans and AI can align at any time.

### Target Users

| Attribute | Description |
|-----------|-------------|
| **Identity** | Independent developers / Freelancers |
| **Technical Background** | Full-stack developers with some requirements analysis experience |
| **Development Method** | AI-assisted development, developer reviews code and technical solutions |
| **Product Types** | Mobile Apps, Developer Tools, Web Applications (including e-commerce) |
| **Role Position** | Product Manager + Technical Reviewer (AI is the executor) |

### Business Impact (If Unsolved)

- AI generates code that deviates from expectations
- Project at 80% progress needs to be restarted
- After project interruption (e.g., 1 month), cannot continue development
- Human forgets product requirements

---

## Solution Space

### Core Workflow

```
/discover → /research → /prd → Development
```

Current commands (implemented):
- ✅ `/discover` - Requirements discovery interview
- ✅ `/research` - Competitor/market research
- ✅ `/prd` - PRD generation

### MVP Scope

| Feature | Status |
|---------|--------|
| 3 PRD Templates | 🎯 Priority for this iteration |
| Requirements Change Management | ⏸️ Future iteration |

### Template Types (MVP)

| # | Template Name | Use Case |
|---|---------------|----------|
| 1 | **AI Agent / Plugin** | Claude plugins, Cursor extensions, GPT Actions |
| 2 | **Mobile App** | iOS/Android/Cross-platform applications |
| 3 | **Web Application** | SaaS, Admin panels, Portal websites |

### Unique Value Proposition

> Cognispec is a tool customized for the author, fitting personal habits, evolving together with the author's capabilities.

### Language Rules

| Scenario | Language |
|----------|----------|
| User communication | Chinese (or user's preferred language) |
| Generated requirement documents | **English only** |

---

## Architecture Design

### Dual-Document Architecture

```
AI Document (source)  →  Auto Transform  →  Human Document (progressive disclosure)
    Structured                                Interactive, collapsible
    Complete info                             Layered presentation
    Modular Markdown                          HTML
```

### Why Dual-Document?

| Audience | Needs |
|----------|-------|
| **AI (Claude Code)** | Complete, structured, unambiguous, searchable by module |
| **Human** | Progressive disclosure, collapsible, visual hierarchy |

### AI Document Design Principles

| Principle | Rationale |
|-----------|-----------|
| **Modular** | Each file focuses on one topic, easy to search precisely |
| **Semantic filenames** | `F001-user-auth.md` enables quick Glob/Grep |
| **Single file < 10-15KB** | Avoid truncation, read completely at once |
| **Index file** | Provides global navigation, dive in as needed |
| **Clear cross-references** | Explicit relationships between files |

### Final Directory Structure

```
.cognispec/prd/
├── index.md                    # Product overview + document navigation (merged)
├── features/                   # Modular functional requirements
│   ├── _index.md
│   └── F00x-{name}.md
├── technical/                  # Modular technical specifications
│   ├── _index.md
│   └── {topic}.md
├── constraints.md              # Non-functional requirements
├── glossary.md                 # Term definitions
├── out-of-scope.md             # Explicitly what we don't build
│
├── human/                      # Human-readable version (auto-generated)
│   ├── index.html              # Interactive progressive disclosure
│   └── backup/                 # Historical backups
│       └── {timestamp}/
│
└── .meta.json                  # Metadata (version, template type, etc.)
```

### index.md Structure (AI Entry Point)

```markdown
# {Product Name} - PRD

## Meta
- Template: ai-agent | mobile-app | web-app
- Version: 1.0.0
- Status: Draft | Review | Approved
- Last Updated: YYYY-MM-DD

---

## Executive Summary
[3-5 sentences: what, why, for whom]

## Problem Statement
[Problem description]

## Target Users
[User personas]

## Core Value Proposition
[Core value]

---

## Document Map

| Document | Purpose | Path |
|----------|---------|------|
| Features | Functional requirements | [features/_index.md](./features/_index.md) |
| Technical | Architecture, API, data | [technical/_index.md](./technical/_index.md) |
| Constraints | Non-functional requirements | [constraints.md](./constraints.md) |
| Glossary | Term definitions | [glossary.md](./glossary.md) |
| Out of Scope | What we don't build | [out-of-scope.md](./out-of-scope.md) |

## Feature Overview
| ID | Feature | Priority | Status |
|----|---------|----------|--------|
| F001 | ... | P0 | Defined |
| F002 | ... | P1 | Defined |
```

### Human Document (index.html)

- Generated automatically by Node.js script
- Uses `<details>` tags for progressive disclosure
- Backup created before each regeneration
- Located at `.cognispec/prd/human/index.html`

### Conversion Workflow

```
/prd generates/updates source files
       ↓
Auto backup current version to human/backup/{timestamp}/
       ↓
Call Node.js conversion script
       ↓
Generate new index.html
```

---

## Context & Constraints

### Timeline
- No fixed deadline
- Iterative development: use and improve continuously

### Technical Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Markdown Parser** | marked | Lightweight, fast, minimal dependencies |
| **Frontmatter Parser** | gray-matter | Industry standard, simple to use |
| **Styling** | Inline CSS | No external dependencies, offline-friendly |

### Compatibility Requirements

| Requirement | Decision |
|-------------|----------|
| Mobile support | Not required (for now) |
| Offline viewing | ✅ Required, no CDN dependencies |
| Server requirement | None, pure static HTML |

### Other Constraints
- None specified

---

## Success Metrics

| Metric | Measurement Method |
|--------|-------------------|
| **Easy to use** | Subjective experience, human judgment |
| **Can continue after project interruption** | Subjective experience, human judgment |

> **Core Principle**: No quantitative metrics. Success is measured by the author's subjective satisfaction.

---

## User Journey

### Core Pattern: Human-AI Collaborative Iteration

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Human describes requirements                          │
│        ↓                                                │
│   AI generates/updates documents                        │
│        ↓                                                │
│   Human reviews HTML version                            │
│        ↓                                                │
│   ┌─────────────┐                                       │
│   │  Satisfied? │                                       │
│   └──────┬──────┘                                       │
│          │                                              │
│    No ←──┴──→ Yes                                       │
│    ↓          ↓                                         │
│  Feedback    AI Review (completeness, feasibility,      │
│    ↓         best practices)                            │
│  Continue         │                                     │
│  iteration   ┌────┴────┐                                │
│              │ Issues? │                                │
│              └────┬────┘                                │
│            Yes ←──┴──→ No                               │
│             ↓          ↓                                │
│         Continue    ✅ Done                             │
│         iteration                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Phase Breakdown

| Phase | Participant | Action |
|-------|-------------|--------|
| **1. Input requirements** | Human → AI | Describe ideas, features, constraints |
| **2. Generate documents** | AI | Generate/update PRD source files + HTML |
| **3. Human review** | Human | View HTML version (progressive disclosure) |
| **4. Feedback iteration** | Human → AI | Add requirements / change requirements |
| **5. Repeat 2-4** | Human + AI | Until human is satisfied |
| **6. AI review** | AI | Check completeness, feasibility, compare best practices |
| **7. Final confirmation** | Human + AI | Both satisfied, done |

### Key Insights

| Insight | Description |
|---------|-------------|
| **Human is the decision maker** | AI assists generation and review, but human decides |
| **HTML is the human reading interface** | Human doesn't read source files directly |
| **AI review is quality gate** | Check for omissions, feasibility, industry practices |
| **Mutual satisfaction required** | Human satisfied + AI deems feasible |

---

## Technical Decisions Summary

| Decision | Choice |
|----------|--------|
| Template location | `.cognispec/templates/` |
| Template selection | Both: auto-ask in `/prd` + `--template` parameter |
| Template format | Markdown + YAML Frontmatter |
| AI document structure | Modular (multiple small files + index) |
| AI doc file size | < 10-15KB each |
| Human document format | HTML (interactive, progressive disclosure) |
| Conversion tool | Node.js script (marked + gray-matter) |
| Backup strategy | Auto backup before each regeneration |
| Incremental update | Both: natural language + `/prd update F001` |
| AI review | `/prd --review` parameter |


---

## Command Enhancements Required

### `/prd` Command Updates

| Feature | Implementation |
|---------|----------------|
| Template selection | `--template=ai-agent\|mobile-app\|web-app` or auto-ask |
| Incremental update | Natural language: "update F001 to add WeChat login" |
| Explicit update | `/prd update F001` |
| AI review mode | `/prd --review` |
| Auto HTML generation | Call Node.js script after each update |
| Auto backup | Backup to `human/backup/{timestamp}/` before regeneration |

---

## Next Steps

1. ✅ Interview completed
2. Update `CLAUDE.md` with language rules
3. Run `/research` to analyze competitors and validate assumptions
4. Run `/prd` to generate the full PRD from gathered requirements
