# Technical Appendix

## Technical Architecture

### Plugin Structure

```
.claude/
├── skills/
│   └── cognispec/
│       └── SKILL.md          # Auto-triggered product discovery skill
└── commands/
    ├── discover.md           # /discover command
    ├── research.md           # /research command
    ├── prd.md                # /prd command
    └── plan.md               # /plan command
```

### Output Directory Structure

```
.cognispec/
├── discovery/                # Requirements discovery artifacts
│   ├── interview.md          # Requirements interview record
│   └── research.md           # Competitor/market research
│
├── prd/                      # Product Requirements Documents
│   ├── summary.md            # Layer 1: Executive summary (30秒)
│   ├── overview.md           # Layer 2: Problem & solution (2分钟)
│   ├── requirements.md       # Layer 3: Detailed requirements
│   ├── appendix.md           # Layer 4: Technical appendix
│   ├── features/             # Modular feature specifications
│   │   └── F00x-{name}.md
│   ├── technical/            # Technical specifications
│   ├── human/                # Human-readable HTML version
│   │   ├── index.html
│   │   └── backup/
│   └── .meta.json            # Version & metadata
│
├── plan/                     # Development planning
│   ├── architecture.md       # Technical architecture
│   ├── phases.md             # Phased development plan
│   ├── tasks.json            # Task breakdown (Cognispec native format)
│   └── risks.md              # Risk assessment
│
├── workflows/                # Development workflows
│   ├── dev.md                # Development workflow
│   ├── test.md               # Testing strategy
│   └── deploy.md             # Deployment plan
│
├── scripts/                  # Utility scripts
│   ├── md2html.js            # Markdown to HTML converter
│   └── package.json          # Script dependencies
│
├── llms.txt                  # AI discoverability index
├── CLAUDE.md                 # Project context for Claude Code
└── README.md                 # Directory documentation
```

### Technology Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Document Format** | Markdown + YAML Frontmatter | Industry standard, AI-friendly |
| **Markdown Parser** | marked | Lightweight, fast, minimal dependencies |
| **Frontmatter Parser** | gray-matter | Industry standard, simple to use |
| **HTML Styling** | Inline CSS | No external dependencies, offline-friendly |
| **Task Format** | Cognispec Native JSON | Simple, human-readable, optimized for indie developers |

---

## Integration Requirements

### Claude Code Integration

| Integration Point | Method |
|-------------------|--------|
| **Commands** | Slash commands in `.claude/commands/` |
| **Skills** | Auto-triggered skills in `.claude/skills/` |
| **Context** | CLAUDE.md for project context |
| **Web Search** | Native Claude Code WebSearch capability |
| **File Operations** | Native Claude Code Read/Write tools |

### Cognispec Native Task Format

**tasks.json Format** (Primary):
```json
{
  "metadata": {
    "project": "Project Name",
    "version": "1.0.0",
    "generated": "2024-01-20",
    "source": "prd"
  },
  "phases": [
    {
      "id": "P1",
      "name": "Design Phase",
      "tasks": [
        {
          "id": "T001",
          "title": "Task title",
          "description": "Task description",
          "type": "design|development|testing|deployment",
          "priority": "high|medium|low",
          "estimatedHours": 4,
          "dependencies": [],
          "acceptanceCriteria": ["Criterion 1", "Criterion 2"]
        }
      ]
    }
  ]
}
```

**Design Rationale**:
- Simple, human-readable structure optimized for indie developers
- Phase-based organization matches natural development workflow
- Acceptance criteria included for clarity
- No complex dependency graphs or complexity scores

### Task-Master-AI Export (Optional)

For users who need Task-Master-AI compatibility, use `/plan --export=taskmaster`:

```json
{
  "tasks": [
    {
      "id": "T001",
      "title": "Task title",
      "description": "Task description",
      "priority": "high|medium|low",
      "status": "pending|in_progress|completed",
      "dependencies": ["T000"],
      "estimate": "2h|1d|1w"
    }
  ]
}
```

**Note**: Task-Master-AI export is a P2 feature for future implementation.

---

## Design Decisions

### Why Skills + Commands (Not MCP)?

| Approach | Pros | Cons |
|----------|------|------|
| **Skills + Commands** | Simple, native, no setup | Limited to Claude Code |
| **MCP Servers** | External data sources | Over-engineered for our use case |

**Decision**: Skills + Commands are sufficient. MCP adds complexity without benefit for a documentation-focused tool.

### Why Dual-Document Architecture?

| Audience | Needs | Solution |
|----------|-------|----------|
| **AI (Claude Code)** | Complete, structured, searchable | Modular Markdown with frontmatter |
| **Human** | Progressive disclosure, collapsible | Interactive HTML with `<details>` |

**Decision**: Generate both formats. AI reads source Markdown, humans read generated HTML.

### Why Progressive Disclosure?

| Layer | Purpose | Reading Time |
|-------|---------|--------------|
| **Layer 1** | Quick overview | 30 seconds |
| **Layer 2** | Problem understanding | 2 minutes |
| **Layer 3** | Implementation details | As needed |
| **Layer 4** | Expert reference | When required |

**Decision**: Reduces cognitive load. Each reader gets exactly the depth they need.

---

## Glossary

| Term | Definition |
|------|------------|
| **Progressive Disclosure** | UX pattern that reveals information gradually, starting with essential content and allowing users to drill down for details |
| **Dual-Document Architecture** | Generating separate versions optimized for AI consumption (Markdown) and human reading (HTML) |
| **llms.txt** | Emerging protocol for AI discoverability, similar to robots.txt but for LLMs |
| **Task-Master-AI** | Popular task management tool for AI-assisted development; Cognispec supports optional export to this format |
| **MCP (Model Context Protocol)** | Claude Code protocol for connecting to external data sources and tools |
| **Skills** | Claude Code extension mechanism that teaches Claude how to perform specific tasks |
| **Slash Commands** | Explicit user-triggered commands in Claude Code (e.g., `/discover`) |
| **CLAUDE.md** | Project context file automatically loaded by Claude Code |
| **Frontmatter** | YAML metadata at the beginning of Markdown files, enclosed in `---` |

---

## Research References

### Competitor Analysis
- **QuillBot PRD Generator**: Free template-free generation, lacks customization
- **Chisel Labs**: Enterprise platform, overkill for indie developers
- **PRD-Taskmaster**: Similar Claude Code plugin, lacks progressive disclosure
- **ShipSpec**: Three-phase workflow, good verification loop concept

### Best Practices Sources
- **Nielsen Norman Group**: Progressive disclosure patterns
- **Amazon Working Backwards**: Customer-focused press release approach
- **Google PRD Template**: Problem-first, OKR-driven structure

### Claude Code Documentation
- Claude Code Best Practices: anthropic.com/engineering/claude-code-best-practices
- Skills & Commands: Official Claude Code documentation

---

## Change Log

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2024-01-20 | 1.0.0 | Cognispec | Initial PRD generation from discovery interview |

---

## Approval History

| Role | Name | Date | Status |
|------|------|------|--------|
| Product Owner | - | - | ⏳ Pending |
| Tech Lead | - | - | ⏳ Pending |

---

## Language Rules

| Scenario | Language |
|----------|----------|
| User communication | Chinese (or user's preferred language) |
| Generated requirement documents | **English only** |

> **Important**: All PRD documents, technical specifications, and output files must be written in English. Conversations with users can be in Chinese or their preferred language.
