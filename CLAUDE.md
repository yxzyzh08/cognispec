# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Cognispec** is a Claude Code plugin designed to leverage Claude Code capabilities to conduct product requirement analysis and generate human-readable product requirement documents with progressive disclosure structure.

## Quick Start

### Available Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/discover` | Requirements discovery interview | Start here - gather product requirements |
| `/research` | Competitor/market research | After discovery - validate assumptions |
| `/prd` | Generate PRD | After research - create documentation |

### Recommended Workflow

```
/discover → /research → /prd → Development
```

1. **Start with `/discover`**: Conduct structured interview to understand the product
2. **Run `/research`**: Analyze competitors and market best practices
3. **Generate `/prd`**: Create progressive disclosure PRD documents

## Plugin Structure

```
.claude/
├── skills/
│   └── cognispec/
│       └── SKILL.md          # Auto-triggered product discovery skill
└── commands/
    ├── discover.md           # /discover command
    ├── research.md           # /research command
    └── prd.md                # /prd command

.cognispec/                   # Output directory
├── discovery/
│   ├── interview.md          # Requirements interview record
│   └── research.md           # Competitor/market research
├── prd/
│   ├── summary.md            # Executive summary (Layer 1)
│   ├── overview.md           # Problem & solution (Layer 2)
│   ├── requirements.md       # Detailed requirements (Layer 3)
│   ├── appendix.md           # Technical appendix (Layer 4)
│   └── human/                # Human-readable version
│       ├── index.html        # Interactive PRD (progressive disclosure)
│       └── backup/           # Version backups
└── scripts/
    ├── md2html.js            # Markdown to HTML converter
    └── package.json          # Script dependencies
```

## Design Principles

### Progressive Disclosure
All documents are structured in layers to reduce cognitive load:
- **Layer 1 (30秒)**: Executive summary - quick overview
- **Layer 2 (2分钟)**: Problem & solution - moderate depth
- **Layer 3 (按需)**: Detailed requirements - full specification
- **Layer 4 (专家级)**: Technical appendix - implementation details

### Human-Readable Documents
- Start each section with conclusion/summary
- Use collapsible `<details>` for deep dives
- Visual hierarchy: headings, bold, quotes
- Table of contents for navigation

### Claude Code Native Integration
- Uses Skills for auto-triggered guidance
- Uses Slash Commands for explicit workflows
- Outputs stored in `.cognispec/` directory

## Meta Rules

### Language Rules
| Scenario | Language |
|----------|----------|
| User communication | Chinese (or user's preferred language) |
| Generated requirement documents | **English only** |

> **Important**: All PRD documents, technical specifications, and output files must be written in English. Conversations with users can be in Chinese or their preferred language.

## Development Guidelines

- Use existing Claude Code capabilities (WebSearch, file operations, etc.)
- Keep commands focused and single-purpose
- Support both Chinese and English interactions
- Maintain progressive disclosure in all outputs
- **All generated documents must be in English**

## Project Status

✅ MVP Implementation Complete - Ready for use

### Implemented Features
- [x] `/discover` - Requirements discovery interview
- [x] `/research` - Competitor/market research
- [x] `/prd` - PRD generation with progressive disclosure

### Future Enhancements
- [ ] Multiple PRD templates
- [ ] Export to other formats (Notion, Confluence)
- [ ] Team collaboration features
- [ ] Version comparison for PRD updates
