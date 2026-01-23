# Problem & Solution Overview

## Problem Statement

### The Problem

Individual developers (indie hackers, freelancers) lack a systematic tool for requirements collection and analysis when developing products, leading to:

1. **AI-generated code deviates from expectations** - Wasted time and cost on revisions
2. **Requirements only exist in developer's mind** - Cannot continue after project interruption
3. **Human memory is unreliable** - After one month, developers forget their own requirements
4. **No persistent requirements documentation** - 80% progress may need to be discarded and restarted

### Who Experiences It

**Primary User: Independent Developer / Freelancer**

| Attribute | Description |
|-----------|-------------|
| **Identity** | Independent developers, Freelancers, Indie hackers |
| **Technical Background** | Full-stack developers with some requirements analysis experience |
| **Development Method** | AI-assisted development, developer reviews code and technical solutions |
| **Product Types** | Mobile Apps, Developer Tools, Web Applications (including e-commerce) |
| **Role Position** | Product Manager + Technical Reviewer (AI is the executor) |

### Business Impact

If this problem remains unsolved:
- AI generates code that deviates from expectations → **Increased revision cycles**
- Project at 80% progress needs to be restarted → **Massive time waste**
- After project interruption (e.g., 1 month), cannot continue development → **Project abandonment**
- Human forgets product requirements → **Inconsistent product vision**

<details>
<summary>📖 Key Insight from Discovery</summary>

> **Cognispec is not just a PRD writing tool, but an "external brain"** - helping individual developers persist requirement memory, ensuring both humans and AI can align at any time.

</details>

---

## Solution Overview

### Vision

A Claude Code native plugin that transforms vague product ideas into structured, AI-optimized requirement documents with progressive disclosure for human readability.

### Core Value Proposition

> **"Your external brain for requirements"** - Cognispec persists your product vision so you never lose context, whether you're picking up a project after months or ensuring AI understands your intent.

### Key Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **1. Discovery Interview** | Structured Q&A to extract requirements | Transforms vague ideas into concrete specs |
| **2. Competitor Research** | AI-powered market analysis | Validates assumptions with real data |
| **3. PRD Generation** | Progressive disclosure documents | AI-optimized + Human-readable |

### Core Workflow

```
/discover → /research → /prd → Development
```

<details>
<summary>📖 Feature Comparison with Alternatives</summary>

| Feature | Cognispec | QuillBot | Chisel Labs | PRD-Taskmaster |
|---------|-----------|----------|-------------|----------------|
| **Pricing** | Free | Free | Paid | Free |
| **Progressive Disclosure** | ✅ | ❌ | ❌ | ❌ |
| **AI-Optimized Format** | ✅ | ❌ | ❌ | Partial |
| **Human-Readable HTML** | ✅ Planned | ❌ | ❌ | ❌ |
| **Claude Code Native** | ✅ | ❌ | ❌ | ✅ |
| **Modular Structure** | ✅ | ❌ | Partial | ❌ |

**Unique Differentiators**:
1. Progressive Disclosure - No competitor explicitly implements this
2. Dual-Document Architecture - Separate AI-optimized and human-optimized versions
3. Claude Code Native - Works in developer's natural environment

</details>

---

## User Personas

### Primary Persona: Alex the Indie Developer

| Attribute | Description |
|-----------|-------------|
| **Role** | Independent full-stack developer |
| **Goals** | Ship products efficiently with AI assistance |
| **Pain Points** | Forgets requirements, AI generates wrong code, can't resume projects |
| **Tech Savviness** | High |
| **Tools Used** | Claude Code, VS Code, Git |

**Behavior Pattern**:
- Works on multiple projects simultaneously
- Often pauses projects for weeks/months
- Uses AI heavily for code generation
- Acts as PM + Tech Lead, AI is the executor

<details>
<summary>📖 Detailed Persona Profile</summary>

**Demographics**:
- Age: 25-45
- Location: Global (remote work)
- Income: Variable (project-based)

**A Day in Alex's Life**:
1. Morning: Reviews yesterday's AI-generated code
2. Mid-day: Realizes AI misunderstood a requirement
3. Afternoon: Spends 2 hours explaining the requirement again
4. Evening: Wishes there was a single source of truth for requirements

**Quote**:
> "I spend more time re-explaining requirements to AI than actually building the product."

</details>

---

## Core User Stories

### Epic: Requirements Discovery

**US-001**: As an indie developer, I want to conduct a structured interview about my product idea so that my vague ideas become concrete requirements.

- **Priority**: Must Have (P0)
- **Acceptance Criteria**:
  - [ ] Interview covers problem, users, features, constraints
  - [ ] Output is saved to `.cognispec/discovery/interview.md`
  - [ ] Can resume interrupted interview

---

### Epic: Market Research

**US-002**: As an indie developer, I want AI to research competitors and best practices so that I can validate my assumptions without manual research.

- **Priority**: Must Have (P0)
- **Acceptance Criteria**:
  - [ ] AI searches web for competitors
  - [ ] Analysis includes feature comparison
  - [ ] Output saved to `.cognispec/discovery/research.md`

---

### Epic: PRD Generation

**US-003**: As an indie developer, I want to generate a structured PRD from my interview and research so that both AI and I can reference it consistently.

- **Priority**: Must Have (P0)
- **Acceptance Criteria**:
  - [ ] PRD follows progressive disclosure (4 layers)
  - [ ] AI-optimized Markdown source files
  - [ ] Human-readable HTML with collapsible sections

**US-004**: As an indie developer, I want to choose from different PRD templates (AI Agent, Mobile App, Web App) so that the document structure matches my product type.

- **Priority**: Should Have (P1)
- **Acceptance Criteria**:
  - [ ] 3 templates available: AI Agent, Mobile App, Web App
  - [ ] Template selection via `--template` parameter or auto-prompt
  - [ ] Templates stored in `.cognispec/templates/`

---

### Epic: Requirements Persistence

**US-006**: As an indie developer, I want to resume a project after months of interruption so that I can continue where I left off without context loss.

- **Priority**: Must Have (P0)
- **Acceptance Criteria**:
  - [ ] All documents stored in `.cognispec/` directory
  - [ ] Documents are self-contained and complete
  - [ ] AI can read documents and understand project context

---

→ [View Detailed Requirements](./requirements.md)
