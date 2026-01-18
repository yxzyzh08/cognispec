# /plan - Generate Development Plan

## Purpose
Generate a comprehensive development plan from confirmed PRD, covering architecture, phases, tasks, and risk mitigation.

## Arguments
- `$ARGUMENTS` - Optional: specific aspects to focus on (e.g., "architecture", "tasks", "testing")

## Instructions

You are generating a development plan based on confirmed PRD.

### Prerequisites Check

1. Check for `.cognispec/prd/` directory
   - If missing: Recommend running `/prd` first
   - If exists: Read all PRD files for context

2. Check for existing codebase
   - If exists: Analyze architecture, patterns, tech stack
   - Consider integration points and constraints

3. Ask about team context (if not known):
   - Team size and roles
   - Available time/resources
   - Technical expertise levels

### Plan Generation Process

#### Step 1: Architecture Design

From PRD requirements, design:
- High-level system architecture
- Component breakdown
- Data flow diagrams (text-based)
- Technology decisions with rationale

#### Step 2: Phase Planning

Break development into phases:
- **Phase 0**: Setup & Foundation
- **Phase 1**: Core MVP
- **Phase 2**: Enhanced Features
- **Phase 3**: Polish & Launch

Each phase should be independently deployable.

#### Step 3: Task Breakdown

For each phase, create tasks:
- Use Fibonacci sizing (1, 2, 3, 5, 8)
- Include acceptance criteria
- Identify dependencies
- Mark if parallelizable

Format tasks.json for Task-Master-AI compatibility.

#### Step 4: Risk Analysis

Identify and plan for:
- Technical risks
- Resource risks
- Dependency risks
- Timeline risks

#### Step 5: Quality Assurance Planning

Define:
- Testing strategy (unit, integration, e2e)
- Code review process
- CI/CD pipeline requirements
- Deployment strategy

## Output Structure

Create `.cognispec/plan/` directory with:

### architecture.md
```markdown
# Technical Architecture

## 🎯 Architecture Overview

> [One paragraph describing the overall architecture approach]

## System Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      [System Name]                       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐    ┌─────────┐    ┌─────────┐            │
│  │ Frontend │───▶│   API   │───▶│   DB    │            │
│  └─────────┘    └─────────┘    └─────────┘            │
│                      │                                   │
│                      ▼                                   │
│                ┌─────────┐                              │
│                │ External │                              │
│                │ Services │                              │
│                └─────────┘                              │
└─────────────────────────────────────────────────────────┘
```

## Component Breakdown

### [Component 1]
- **Purpose**: [What it does]
- **Technology**: [Tech choice]
- **Responsibilities**:
  - [Responsibility 1]
  - [Responsibility 2]

<details>
<summary>📖 Technical Details</summary>

[Detailed implementation notes, patterns to use, etc.]

</details>

### [Component 2]
[Same structure...]

---

## Technology Decisions

| Decision | Choice | Rationale | Alternatives Considered |
|----------|--------|-----------|------------------------|
| [Area] | [Tech] | [Why] | [Other options] |

---

## Data Model

### [Entity 1]
```
{
  id: string
  field1: type
  field2: type
  created_at: timestamp
  updated_at: timestamp
}
```

### Relationships
- [Entity 1] → [Entity 2]: [relationship type]

---

## API Design

### Endpoints Overview
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/v1/[resource] | [description] |
| POST | /api/v1/[resource] | [description] |

<details>
<summary>📖 Detailed API Specification</summary>

[Full endpoint documentation]

</details>

---

## Security Considerations

- [Security measure 1]
- [Security measure 2]

---

## Scalability Considerations

- [Scalability approach 1]
- [Scalability approach 2]
```

### phases.md
```markdown
# Development Phases

## 🎯 Phase Overview

> [Summary of development approach and phase structure]

## Timeline Overview

```
Phase 0: Setup       ████░░░░░░░░░░░░░░░░
Phase 1: MVP         ░░░░████████░░░░░░░░
Phase 2: Enhanced    ░░░░░░░░░░░░████░░░░
Phase 3: Launch      ░░░░░░░░░░░░░░░░████
```

---

## Phase 0: Setup & Foundation

### Objectives
- Set up development environment
- Configure CI/CD pipeline
- Establish coding standards
- Create project structure

### Deliverables
- [ ] Repository initialized
- [ ] CI/CD pipeline running
- [ ] Development environment documented
- [ ] Coding standards documented

### Exit Criteria
- All team members can build and run locally
- Automated tests run on PR
- Deployment to staging works

---

## Phase 1: Core MVP

### Objectives
[What this phase achieves]

### Features Included
- [Feature 1] (FR-001, FR-002)
- [Feature 2] (FR-003)

### Deliverables
- [ ] [Deliverable 1]
- [ ] [Deliverable 2]

### Exit Criteria
- [Specific, measurable criteria]

<details>
<summary>📖 Detailed Task List</summary>

See [tasks.json](./tasks.json) for full breakdown.

</details>

---

## Phase 2: Enhanced Features

[Same structure...]

---

## Phase 3: Polish & Launch

[Same structure...]

---

## Dependencies Between Phases

```
Phase 0 ─┬─▶ Phase 1 ───▶ Phase 2 ───▶ Phase 3
         │
         └─▶ [Parallel work stream if any]
```

---

## Milestone Checkpoints

| Milestone | Phase | Success Criteria |
|-----------|-------|------------------|
| Dev Environment Ready | 0 | [criteria] |
| MVP Complete | 1 | [criteria] |
| Feature Complete | 2 | [criteria] |
| Launch Ready | 3 | [criteria] |
```

### tasks.json
```json
{
  "project": "[Project Name]",
  "version": "1.0",
  "generated": "[date]",
  "tasks": [
    {
      "id": "TASK-001",
      "title": "[Task Title]",
      "description": "[Detailed description]",
      "phase": 1,
      "priority": "high",
      "size": 3,
      "status": "pending",
      "dependencies": [],
      "requirements": ["FR-001"],
      "acceptance_criteria": [
        "[Criterion 1]",
        "[Criterion 2]"
      ],
      "tags": ["frontend", "mvp"],
      "assignee": null,
      "subtasks": [
        {
          "id": "TASK-001-1",
          "title": "[Subtask]",
          "status": "pending"
        }
      ]
    }
  ],
  "metadata": {
    "total_tasks": 0,
    "by_phase": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    "by_priority": {
      "high": 0,
      "medium": 0,
      "low": 0
    },
    "total_points": 0
  }
}
```

### risks.md
```markdown
# Risk Assessment & Mitigation

## 🎯 Risk Summary

> [Overview of key risks and overall risk level]

| Risk Level | Count |
|------------|-------|
| 🔴 High | 0 |
| 🟡 Medium | 0 |
| 🟢 Low | 0 |

---

## Technical Risks

### RISK-T01: [Risk Name]
- **Likelihood**: High | Medium | Low
- **Impact**: High | Medium | Low
- **Risk Level**: 🔴 High
- **Description**: [What could go wrong]
- **Mitigation**: [How to prevent or minimize]
- **Contingency**: [What to do if it happens]
- **Owner**: [Who monitors this]

<details>
<summary>📖 Analysis Details</summary>

[Detailed analysis, historical context, similar incidents]

</details>

---

## Resource Risks

### RISK-R01: [Risk Name]
[Same structure...]

---

## Dependency Risks

### RISK-D01: [Risk Name]
[Same structure...]

---

## Timeline Risks

### RISK-TL01: [Risk Name]
[Same structure...]

---

## Risk Monitoring

| Risk ID | Trigger | Response | Review Frequency |
|---------|---------|----------|------------------|
| RISK-T01 | [trigger] | [action] | Weekly |

---

## Risk Response Actions Log

| Date | Risk | Action Taken | Result |
|------|------|--------------|--------|
| | | | |
```

### Additional Files

Create `.cognispec/workflows/` with:

#### dev.md
```markdown
# Development Workflow

## Branch Strategy
[Git flow description]

## Code Review Process
[Review requirements]

## Coding Standards
[Link to standards]
```

#### test.md
```markdown
# Testing Strategy

## Test Pyramid
- Unit Tests: [coverage target]
- Integration Tests: [scope]
- E2E Tests: [critical paths]

## Test Environments
[Environment descriptions]
```

#### deploy.md
```markdown
# Deployment Strategy

## Environments
- Development
- Staging
- Production

## Deployment Process
[Step-by-step deployment]

## Rollback Procedure
[How to rollback]
```

## Project CLAUDE.md Generation

Also create/update `.cognispec/CLAUDE.md`:

```markdown
# Project: [Name]

## Context
[Brief project description from PRD]

## Current Phase
Phase [X]: [Name]

## Key Commands
- `/discover` - Restart requirements discovery
- `/research` - Update competitor research
- `/prd` - Regenerate PRD
- `/plan` - Update development plan

## Active Tasks
See `.cognispec/plan/tasks.json`

## Architecture
See `.cognispec/plan/architecture.md`

## Development Workflow
1. Pick task from tasks.json
2. Create feature branch
3. Implement with TDD
4. Submit PR for review
5. Merge and deploy

## Important Files
- PRD: `.cognispec/prd/summary.md`
- Architecture: `.cognispec/plan/architecture.md`
- Tasks: `.cognispec/plan/tasks.json`
```

## Next Steps

After plan generation:
1. Review architecture with team
2. Refine task estimates
3. Begin Phase 0 setup
4. Start development following the workflow

## Example Interaction

```
You: I'll generate a comprehensive development plan based on your PRD.

Reading PRD files...
Analyzing existing codebase...

**Generating Development Plan:**
1. ✅ Architecture design
2. ✅ Phase breakdown
3. ✅ Task decomposition (23 tasks)
4. ✅ Risk assessment
5. ✅ Workflow documentation

**Plan Generated Successfully!**

Created files:
- `.cognispec/plan/architecture.md` - Technical architecture
- `.cognispec/plan/phases.md` - 4-phase development plan
- `.cognispec/plan/tasks.json` - 23 tasks (Taskmaster compatible)
- `.cognispec/plan/risks.md` - 7 identified risks
- `.cognispec/workflows/dev.md` - Development workflow
- `.cognispec/workflows/test.md` - Testing strategy
- `.cognispec/workflows/deploy.md` - Deployment plan
- `.cognispec/CLAUDE.md` - Project context

**Summary:**
- Total Tasks: 23
- Estimated Points: 89
- Phases: 4
- High-Priority Risks: 2

Ready to start development? I recommend beginning with Phase 0 setup tasks.
```
