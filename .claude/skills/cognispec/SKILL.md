# Cognispec: Product Requirements & Development Planning Skill

## Trigger Conditions

This skill activates when the user:
- Discusses product ideas, features, or requirements
- Wants to create PRD (Product Requirements Document)
- Needs to analyze competitors or market research
- Wants to plan development phases
- Mentions keywords: "需求", "PRD", "产品文档", "竞品分析", "研发计划", "feature planning", "product spec"

## Core Principles

### Progressive Disclosure (渐进式披露)
Always structure output in layers to reduce cognitive load:
1. **Layer 1 (30秒)**: Executive summary - understand the whole picture quickly
2. **Layer 2 (2分钟)**: Problem & solution overview
3. **Layer 3 (按需)**: Detailed requirements and specifications
4. **Layer 4 (专家级)**: Edge cases, appendix, technical details

### Human-Readable Documents
- Start each section with a conclusion/summary
- Use `<details>` tags for expandable content
- Visual hierarchy: headings, bold, quotes
- Include table of contents for navigation

## Available Commands

Direct users to these commands for specific workflows:

| Command | Purpose |
|---------|---------|
| `/discover` | Start requirements discovery interview |
| `/research` | Conduct competitor/market research |
| `/prd` | Generate PRD from gathered requirements |
| `/plan` | Generate development plan from confirmed PRD |

## Output Structure

All Cognispec outputs go to `.cognispec/` directory:

```
.cognispec/
├── discovery/
│   ├── interview.md      # Requirements interview record
│   └── research.md       # Competitor/market research
├── prd/
│   ├── summary.md        # Executive summary (Layer 1)
│   ├── overview.md       # Problem & solution (Layer 2)
│   ├── requirements.md   # Detailed requirements (Layer 3)
│   └── appendix.md       # Appendix (Layer 4)
├── plan/
│   ├── architecture.md   # Technical architecture
│   ├── phases.md         # Phased plan
│   ├── tasks.json        # Task breakdown (Taskmaster compatible)
│   └── risks.md          # Risks and mitigation
└── CLAUDE.md             # Project context for Claude Code
```

## Workflow Guidelines

### When User Has a New Idea
1. Acknowledge the idea
2. Suggest starting with `/discover` for structured requirements gathering
3. Explain the progressive disclosure approach

### When User Wants Documentation
1. Check if `.cognispec/discovery/` exists
2. If not, recommend `/discover` first
3. If yes, proceed with `/prd` to generate documentation

### When User Wants Development Plan
1. Check if `.cognispec/prd/` exists
2. If not, recommend completing PRD first
3. If yes, proceed with `/plan` to generate development plan

## Document Templates

### PRD Summary Template (Layer 1)
```markdown
# PRD: [Project Name]

## 🎯 30-Second Overview
> One paragraph explaining what this is, what problem it solves, and core value

## Key Metrics
- **Target Users**: [who]
- **Core Problem**: [what]
- **Success Metric**: [measurable outcome]

## Quick Links
- [Full Requirements](./requirements.md)
- [Technical Details](./appendix.md)
```

### Progressive Disclosure Pattern
```markdown
## Section Title

### Summary (必读)
[Brief conclusion first...]

<details>
<summary>📖 View Details</summary>

[Detailed content here...]

</details>
```

## Integration Notes

- Compatible with Task-Master-AI task format
- Uses Markdown for universal readability
- Supports both Chinese and English
- Works with existing CLAUDE.md project context
