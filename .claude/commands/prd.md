# /prd - Generate Product Requirements Document

## Purpose
Generate a comprehensive PRD with progressive disclosure structure from gathered requirements and research.

## Arguments
- `$ARGUMENTS` - Optional arguments:
  - `--template=<type>` - Specify template type: `ai-agent`, `mobile-app`, or `web-app`
  - Specific sections to generate or update

## Template Selection

### Available Templates

| Template | Best For | Template File |
|----------|----------|---------------|
| `ai-agent` | Claude Code plugins, MCP servers, AI tools | `.cognispec/templates/ai-agent.md` |
| `mobile-app` | iOS, Android, cross-platform apps | `.cognispec/templates/mobile-app.md` |
| `web-app` | Web applications with frontend/backend | `.cognispec/templates/web-app.md` |

### Template Detection Process

1. **Parse arguments**: Check if `$ARGUMENTS` contains `--template=<type>`
2. **If template specified**: Read and apply the corresponding template
3. **If no template specified**: Display template selection prompt:

```
Which template best fits your project?

1. **ai-agent** - Claude Code plugins, MCP servers, AI tools, chatbots
2. **mobile-app** - iOS, Android, React Native, Flutter apps
3. **web-app** - SaaS, web applications, admin dashboards

Please select (1-3) or type the template name:
```

4. **Load template**: Read `.cognispec/templates/<selected>.md`
5. **Apply template sections**: Add template-specific sections to each PRD document

## Instructions

You are generating a Product Requirements Document using the progressive disclosure approach.

### Prerequisites Check

1. Check for `.cognispec/discovery/interview.md`
   - If missing: Recommend running `/discover` first
   - If exists: Read and use as primary source

2. Check for `.cognispec/discovery/research.md`
   - If exists: Incorporate competitor insights
   - If missing: Proceed without (note this in output)

3. Check for existing codebase
   - If exists: Analyze for technical context and constraints
   - Consider existing architecture and patterns

### PRD Generation Process

#### Step 1: Synthesize Requirements

From discovery and research, extract:
- Core problem statement
- Target user personas
- Functional requirements
- Non-functional requirements
- Success metrics (SMART format)
- Constraints and dependencies

#### Step 2: Generate Layered Documents

Create four files following progressive disclosure:

**Layer 1: summary.md (30秒概览)**
- Executive summary (one paragraph)
- Key metrics dashboard
- **Template field** (record which template was used)
- Quick links to other sections

**Layer 2: overview.md (2分钟深入)**
- Problem statement with business impact
- Solution overview
- User personas
- Core user stories
- **Template-specific sections** (from selected template's "Overview Additions")

**Layer 3: requirements.md (详细需求)**
- Functional requirements (prioritized)
- Non-functional requirements
- User stories with acceptance criteria
- Edge cases
- **Template-specific sections** (from selected template's "Requirements Additions")

**Layer 4: appendix.md (专家级细节)**
- Technical constraints
- Dependencies
- Glossary
- Research references
- Change log
- **Template-specific sections** (from selected template's "Appendix Additions")

#### Step 3: Generate Human-Readable HTML

After generating Markdown files, run the conversion script to create interactive HTML:

1. **Check dependencies** (first time only):
   ```bash
   cd .cognispec/scripts && npm install
   ```

2. **Run conversion script**:
   ```bash
   node .cognispec/scripts/md2html.js --backup
   ```

   The script will:
   - Backup existing `human/index.html` to `human/backup/{timestamp}/`
   - Parse all PRD Markdown files using `marked` and `gray-matter`
   - Generate interactive HTML with progressive disclosure
   - Output to `.cognispec/prd/human/index.html`

3. **Inform user**:
   - Tell the user to run the script if they want HTML output
   - Provide the command to run

#### Step 4: Generate llms.txt

Generate the AI-friendly documentation index using the **script** (not AI generation):

```bash
node .cognispec/scripts/generate-llms-txt.js
```

The script will:
- Extract project metadata from `summary.md` (name, version, template)
- Check which documents exist in discovery/, prd/, plan/
- Generate a structured index at `.cognispec/llms.txt`

> **Why Script Generation?**
> llms.txt is an index, not creative content. Programmatic generation ensures:
> - Consistency: Same input = same output
> - Independence: Can run without AI session
> - Zero token cost

**Inform user**:
- Tell the user to run the script to update llms.txt
- Provide the command: `node .cognispec/scripts/generate-llms-txt.js`

### Quality Checks

Before finalizing, verify:

1. **Completeness**
   - [ ] Problem clearly stated
   - [ ] Users defined
   - [ ] Success metrics are SMART
   - [ ] All core features documented

2. **Testability**
   - [ ] Each requirement has acceptance criteria
   - [ ] Criteria are specific and measurable

3. **Clarity**
   - [ ] No ambiguous terms (avoid: "fast", "easy", "user-friendly")
   - [ ] Specific numbers where applicable

4. **Consistency**
   - [ ] No contradicting requirements
   - [ ] Terminology consistent throughout

5. **Progressive Disclosure**
   - [ ] Each layer complete on its own
   - [ ] Details properly folded
   - [ ] Navigation links working

## Output Structure

Create `.cognispec/prd/` directory with:

### summary.md
```markdown
# PRD: [Project Name]

## 🎯 30-Second Overview

> [One paragraph: what it is, what problem it solves, core value proposition]

## Key Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Primary KPI | [value] | [how measured] |
| Secondary KPI | [value] | [how measured] |

## Status

- **Version**: 1.0
- **Template**: [ai-agent | mobile-app | web-app]
- **Last Updated**: [date]
- **Status**: Draft | In Review | Approved

## Quick Navigation

- 📋 [Problem & Solution Overview](./overview.md)
- 📝 [Detailed Requirements](./requirements.md)
- 📚 [Technical Appendix](./appendix.md)

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [date] | [author] | Initial draft |
```

### overview.md
```markdown
# Problem & Solution Overview

## Problem Statement

### The Problem
[Clear description of the problem]

### Who Experiences It
[Target user personas]

### Business Impact
[What happens if unsolved - quantified if possible]

<details>
<summary>📖 User Research Data</summary>

[Interview quotes, survey data, analytics]

</details>

---

## Solution Overview

### Vision
[High-level solution description]

### Core Value Proposition
[Why users will choose this]

### Key Features
1. **[Feature 1]**: [Brief description]
2. **[Feature 2]**: [Brief description]
3. **[Feature 3]**: [Brief description]

<details>
<summary>📖 Feature Comparison with Alternatives</summary>

| Feature | Our Solution | Competitor A | Competitor B |
|---------|--------------|--------------|--------------|
| ... | ... | ... | ... |

</details>

---

## User Personas

### Primary Persona: [Name]
- **Role**: [job title/role]
- **Goals**: [what they want to achieve]
- **Pain Points**: [current frustrations]
- **Tech Savviness**: [low/medium/high]

<details>
<summary>📖 Detailed Persona Profile</summary>

[Demographics, behaviors, quotes, journey map]

</details>

---

## Core User Stories

### Epic: [Epic Name]

**US-001**: As a [persona], I want to [action] so that [benefit].
- **Priority**: Must Have
- **Acceptance Criteria**:
  - [ ] [Criterion 1]
  - [ ] [Criterion 2]

[Additional user stories...]

---

→ [View Detailed Requirements](./requirements.md)
```

### requirements.md
```markdown
# Detailed Requirements

## Functional Requirements

### FR-001: [Requirement Name]
- **Description**: [What the system must do]
- **User Story**: US-001
- **Priority**: Must Have | Should Have | Could Have | Won't Have
- **Acceptance Criteria**:
  - [ ] [Specific, testable criterion]
  - [ ] [Specific, testable criterion]

<details>
<summary>📖 Technical Notes</summary>

[Implementation hints, constraints, edge cases]

</details>

### FR-002: [Requirement Name]
[Same structure...]

---

## Non-Functional Requirements

### Performance
- **NFR-P01**: [Requirement with specific metrics]

### Security
- **NFR-S01**: [Requirement]

### Usability
- **NFR-U01**: [Requirement]

### Scalability
- **NFR-SC01**: [Requirement]

---

## Edge Cases & Error Handling

### EC-001: [Edge Case]
- **Scenario**: [When this happens]
- **Expected Behavior**: [System should...]
- **User Feedback**: [What user sees]

---

## Out of Scope

The following are explicitly NOT included in this version:
1. [Feature/capability 1]
2. [Feature/capability 2]

---

→ [View Technical Appendix](./appendix.md)
```

### appendix.md
```markdown
# Technical Appendix

## Technical Constraints

### Technology Stack
- **Frontend**: [tech]
- **Backend**: [tech]
- **Database**: [tech]
- **Infrastructure**: [tech]

### Integration Requirements
- [System 1]: [API/protocol]
- [System 2]: [API/protocol]

### Performance Constraints
- [Constraint 1]
- [Constraint 2]

---

## Dependencies

### External Dependencies
| Dependency | Version | Purpose | Risk |
|------------|---------|---------|------|
| [Lib/Service] | [ver] | [why needed] | [risk level] |

### Internal Dependencies
- [Dependency on other teams/systems]

---

## Glossary

| Term | Definition |
|------|------------|
| [Term 1] | [Definition] |
| [Term 2] | [Definition] |

---

## Research References

- [Research 1](link): [Key insight]
- [Research 2](link): [Key insight]

---

## Change Log

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| [date] | 1.0 | [author] | Initial creation |

---

## Approval History

| Role | Name | Date | Status |
|------|------|------|--------|
| Product Owner | | | Pending |
| Tech Lead | | | Pending |
| Stakeholder | | | Pending |
```

### human/index.html

Generated automatically by the conversion script. See `.cognispec/scripts/md2html.js`.

**To generate HTML:**
```bash
# First time: install dependencies
cd .cognispec/scripts && npm install

# Generate HTML (with backup)
node .cognispec/scripts/md2html.js --backup
```

**Features:**
- Progressive disclosure with collapsible sections
- Sticky navigation bar
- Inline CSS (works offline)
- Print-friendly styles
- Automatic backup before regeneration

## Next Steps

After PRD generation:
1. Review each layer for completeness
2. Share with stakeholders for feedback
3. `/plan` - to generate development plan from approved PRD

## Example Interaction

### Example 1: With Template Argument

```
User: /prd --template=ai-agent

You: I'll generate the PRD using the **ai-agent** template.

Reading `.cognispec/discovery/interview.md`...
Reading `.cognispec/discovery/research.md`...
Loading template `.cognispec/templates/ai-agent.md`...

Generating PRD with progressive disclosure structure...

✅ PRD generated successfully!

**Template Used**: ai-agent (Claude Code plugins, MCP servers, AI tools)

**AI-Optimized Documents (Markdown):**
- `.cognispec/prd/summary.md` - Executive summary (30秒概览)
- `.cognispec/prd/overview.md` - Problem & solution + Integration Architecture, Capability Mapping
- `.cognispec/prd/requirements.md` - Detailed requirements + MCP Configuration, Skills Structure
- `.cognispec/prd/appendix.md` - Technical appendix + MCP Server Implementation, Skills Directory

**AI Discovery Index:**
- `.cognispec/llms.txt` - Run script to update

**Quality Check Results:**
- [x] Completeness: All sections filled
- [x] Testability: 12 acceptance criteria defined
- [x] Clarity: No ambiguous terms detected
- [x] Template: ai-agent sections included

---

📄 **To generate derived files:**

```bash
# First time: install dependencies
cd .cognispec/scripts && npm install

# Generate Human-Readable HTML (with backup)
node .cognispec/scripts/md2html.js --backup

# Generate AI Discovery Index (llms.txt)
node .cognispec/scripts/generate-llms-txt.js

# Or generate both at once
npm run build:all
```

Then open `.cognispec/prd/human/index.html` in your browser.
```

### Example 2: Interactive Template Selection

```
User: /prd

You: I'll generate the PRD based on your discovery interview and research.

Reading `.cognispec/discovery/interview.md`...
Reading `.cognispec/discovery/research.md`...

**Template Selection**

Which template best fits your project?

| # | Template | Best For |
|---|----------|----------|
| 1 | ai-agent | Claude Code plugins, MCP servers, AI tools, chatbots |
| 2 | mobile-app | iOS, Android, React Native, Flutter apps |
| 3 | web-app | SaaS, web applications, admin dashboards |

Please select (1-3) or type the template name:

User: 2

You: Using **mobile-app** template.

Loading template `.cognispec/templates/mobile-app.md`...

Generating PRD with progressive disclosure structure...

✅ PRD generated successfully!

**Template Used**: mobile-app (iOS, Android, cross-platform apps)

**AI-Optimized Documents (Markdown):**
- `.cognispec/prd/summary.md` - Executive summary (30秒概览)
- `.cognispec/prd/overview.md` - Problem & solution + Platform Strategy, Device Support Matrix
- `.cognispec/prd/requirements.md` - Detailed requirements + Screen Flows, Offline Requirements
- `.cognispec/prd/appendix.md` - Technical appendix + App Store Checklist

**AI Discovery Index:**
- `.cognispec/llms.txt` - Run script to update

---

📄 **To generate derived files:**

```bash
# First time: install dependencies
cd .cognispec/scripts && npm install

# Generate Human-Readable HTML (with backup)
node .cognispec/scripts/md2html.js --backup

# Generate AI Discovery Index (llms.txt)
node .cognispec/scripts/generate-llms-txt.js

# Or generate both at once
npm run build:all
```

Then open `.cognispec/prd/human/index.html` in your browser.

---

Would you like me to walk through any section, or shall we proceed to `/plan` for development planning?
```
