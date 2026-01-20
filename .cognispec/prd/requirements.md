# Detailed Requirements

## Functional Requirements

### Command: /discover

#### FR-001: Structured Interview Flow

- **Description**: The `/discover` command conducts a structured interview to extract product requirements from the user
- **User Story**: US-001
- **Priority**: Must Have (P0)
- **Status**: ✅ Implemented
- **Acceptance Criteria**:
  - [ ] Covers 5 key areas: Problem, Users, Features, Constraints, Success Metrics
  - [ ] Asks follow-up questions based on user responses
  - [ ] Allows interruption and resume of interview
  - [ ] Saves output to `.cognispec/discovery/interview.md`

<details>
<summary>📖 Technical Notes</summary>

**Interview Areas**:
1. Problem Space - What problem are we solving?
2. Target Users - Who experiences this problem?
3. Solution Space - What features are needed?
4. Constraints - Timeline, tech stack, budget
5. Success Metrics - How do we measure success?

**Implementation**: Uses Claude Code's conversational ability with guided prompts.

</details>

---

### Command: /research

#### FR-002: Competitor Analysis

- **Description**: AI-powered research of competitors and market best practices
- **User Story**: US-002
- **Priority**: Must Have (P0)
- **Status**: ✅ Implemented
- **Acceptance Criteria**:
  - [ ] Uses WebSearch to find competitors
  - [ ] Analyzes at least 3 direct competitors
  - [ ] Creates feature comparison matrix
  - [ ] Identifies market best practices
  - [ ] Saves output to `.cognispec/discovery/research.md`

<details>
<summary>📖 Technical Notes</summary>

**Research Scope**:
- Direct competitors (same problem space)
- Ecosystem tools (Claude Code plugins)
- Industry best practices (PRD standards)

**Output Sections**:
1. Executive Summary
2. Competitor Analysis (3+ competitors)
3. Best Practices
4. Recommendations
5. Validation of Design Decisions

</details>

---

### Command: /prd

#### FR-003: Progressive Disclosure PRD Generation

- **Description**: Generate PRD with 4-layer progressive disclosure structure
- **User Story**: US-003
- **Priority**: Must Have (P0)
- **Status**: ✅ Implemented
- **Acceptance Criteria**:
  - [ ] Generates 4 files: summary.md, overview.md, requirements.md, appendix.md
  - [ ] Each layer is self-contained and complete
  - [ ] Uses `<details>` tags for collapsible deep-dives
  - [ ] Includes navigation links between documents

#### FR-004: Multiple PRD Templates

- **Description**: Support for different product type templates
- **User Story**: US-004
- **Priority**: Should Have (P1)
- **Status**: 🎯 Planned
- **Acceptance Criteria**:
  - [ ] 3 templates available: `ai-agent`, `mobile-app`, `web-app`
  - [ ] Template selection via `--template=<type>` parameter
  - [ ] Auto-prompt for template selection if not specified
  - [ ] Templates stored in `.cognispec/templates/`


<details>
<summary>📖 Template Specifications</summary>

| Template | Focus Areas | Unique Sections |
|----------|-------------|-----------------|
| **ai-agent** | Plugin architecture, API integration, Claude Code hooks | MCP configuration, Skills structure |
| **mobile-app** | UI/UX, platform support, offline capability | Screen flows, Platform-specific requirements |
| **web-app** | Frontend/backend, authentication, data models | API endpoints, Database schema |

</details>

#### FR-005: Dual-Document Architecture

- **Description**: Generate both AI-optimized Markdown and human-readable HTML
- **User Story**: US-003
- **Priority**: Should Have (P1)
- **Status**: ✅ Implemented
- **Acceptance Criteria**:
  - [x] Source files in Markdown with YAML frontmatter
  - [x] HTML version with interactive progressive disclosure
  - [x] HTML uses inline CSS (no CDN dependencies)
  - [x] Auto-backup before regeneration

<details>
<summary>📖 Technical Architecture</summary>

```
.cognispec/prd/
├── index.md                    # AI entry point
├── features/                   # Modular feature specs
│   └── F00x-{name}.md
├── technical/                  # Technical specifications
├── human/                      # Human-readable version
│   ├── index.html              # Progressive disclosure HTML
│   └── backup/                 # Version backups
└── .meta.json                  # Metadata & version history
```

**Conversion Stack**:
- Markdown parser: `marked`
- Frontmatter parser: `gray-matter`
- Styling: Inline CSS

</details>

#### FR-006: Incremental PRD Updates

- **Description**: Update specific sections without regenerating entire PRD
- **User Story**: US-003
- **Priority**: Should Have (P1)
- **Status**: 🎯 Planned
- **Acceptance Criteria**:
  - [ ] Natural language updates: "Update F001 to add WeChat login"
  - [ ] Explicit update command: `/prd update F001`
  - [ ] Preserves unchanged sections
  - [ ] Updates version in `.meta.json`

#### FR-007: AI Review Mode

- **Description**: AI reviews PRD for completeness and feasibility
- **User Story**: US-003
- **Priority**: Could Have (P2)
- **Status**: ⏸️ Future
- **Acceptance Criteria**:
  - [ ] Triggered via `/prd --review`
  - [ ] Checks: completeness, testability, clarity, consistency
  - [ ] Compares against industry best practices
  - [ ] Generates improvement suggestions

---

### Command: /plan

#### FR-008: Development Plan Generation

- **Description**: Generate comprehensive development plan from approved PRD
- **User Story**: US-005
- **Priority**: Must Have (P0)
- **Status**: ✅ Implemented
- **Acceptance Criteria**:
  - [ ] Generates architecture.md, phases.md, tasks.json, risks.md
  - [ ] Tasks in Cognispec native JSON format (simple, human-readable)
  - [ ] Includes risk assessment with mitigation strategies
  - [ ] Covers design, development, testing, deployment phases

<details>
<summary>📖 Output Structure</summary>

```
.cognispec/plan/
├── architecture.md   # Technical architecture design
├── phases.md         # Phased development plan
├── tasks.json        # Task breakdown (Cognispec native format)
└── risks.md          # Risk assessment

.cognispec/workflows/
├── dev.md            # Development workflow
├── test.md           # Testing strategy
└── deploy.md         # Deployment plan
```

</details>

---

### Feature: llms.txt Support

#### FR-009: AI Discoverability Protocol

- **Description**: Generate llms.txt file for AI agent discoverability
- **User Story**: US-006
- **Priority**: Should Have (P1)
- **Status**: 🎯 Planned
- **Acceptance Criteria**:
  - [ ] Generated during `/prd` command
  - [ ] Located at `.cognispec/llms.txt`
  - [ ] Lists all key documents with descriptions
  - [ ] Includes AI-specific instructions

<details>
<summary>📖 llms.txt Format</summary>

```
# llms.txt - Cognispec Project Documentation Index

## Project Overview
[Brief project description]

## Key Documents
- PRD Summary: .cognispec/prd/summary.md
- Requirements: .cognispec/prd/requirements.md
- Architecture: .cognispec/plan/architecture.md
- Tasks: .cognispec/plan/tasks.json

## AI Instructions
- Read summary.md first for context
- Use modular feature files for specific queries
- Tasks are in Cognispec native format (simple, human-readable)
```

</details>

---

## Non-Functional Requirements

### Performance

#### NFR-P01: Fast Document Generation

- **Requirement**: PRD generation should complete within 60 seconds
- **Measurement**: Time from command to file creation
- **Priority**: Should Have

#### NFR-P02: Efficient File Size

- **Requirement**: Individual Markdown files should be < 15KB
- **Rationale**: Prevents AI context window truncation
- **Priority**: Must Have

---

### Usability

#### NFR-U01: Offline Capability

- **Requirement**: Generated HTML documents must work offline
- **Implementation**: Inline CSS, no CDN dependencies
- **Priority**: Must Have

#### NFR-U02: Self-Documenting

- **Requirement**: Each document layer should be complete and understandable on its own
- **Priority**: Must Have

---

### Compatibility

#### NFR-C01: Claude Code Integration

- **Requirement**: All commands work within Claude Code environment
- **Implementation**: Skills + Slash Commands architecture
- **Priority**: Must Have

#### NFR-C02: Task Format Compatibility

- **Requirement**: tasks.json uses Cognispec native format (simple, human-readable); optional export to Task-Master-AI format via `--export=taskmaster`
- **Priority**: Could Have (P2) for Task-Master-AI export

---

### Maintainability

#### NFR-M01: Modular Architecture

- **Requirement**: Feature files are independent and can be updated individually
- **Priority**: Must Have

#### NFR-M02: Version Tracking

- **Requirement**: All changes tracked in .meta.json with version history
- **Priority**: Should Have

---

## Edge Cases & Error Handling

### EC-001: Empty Interview

- **Scenario**: User runs `/prd` without running `/discover` first
- **Expected Behavior**: Display helpful message recommending `/discover`
- **User Feedback**: "No interview data found. Run `/discover` first to gather requirements."

### EC-002: Interrupted Interview

- **Scenario**: User stops mid-interview and returns later
- **Expected Behavior**: Offer to resume or start fresh
- **User Feedback**: "Found incomplete interview. [Resume] or [Start Fresh]?"

### EC-003: Conflicting Requirements

- **Scenario**: Interview contains contradictory requirements
- **Expected Behavior**: Flag during PRD generation, ask for clarification
- **User Feedback**: "Conflict detected: [requirement A] vs [requirement B]. Which takes priority?"

### EC-004: Missing Research Data

- **Scenario**: User runs `/prd` without `/research`
- **Expected Behavior**: Proceed without competitor data, note this limitation
- **User Feedback**: "Generating PRD without competitor research. Run `/research` for market validation."

---

## Out of Scope (v1.0)

The following are explicitly NOT included in this version:

1. **Team Collaboration** - Multi-user editing, comments, reviews
2. **Export Formats** - Notion, Confluence, Google Docs export
3. **Visual Diagrams** - Auto-generated flow charts, architecture diagrams
4. **Mobile-Responsive HTML** - HTML optimized for mobile viewing
5. **Requirements Change Management** - Formal change request workflow
6. **Custom Templates** - User-defined PRD templates
7. **API Integration** - External tool integrations beyond basic file I/O

---

→ [View Technical Appendix](./appendix.md)
