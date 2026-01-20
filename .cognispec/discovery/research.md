# Cognispec Competitor & Best Practices Research

## Research Date
2024-01-20

## Research Status
✅ Complete

---

## Executive Summary

> **Key Finding**: Cognispec's progressive disclosure approach and dual-document architecture (AI-optimized + human-readable) are genuine differentiators in the PRD generation space. No direct competitor implements these patterns explicitly.

**Top 3 Actionable Insights**:
1. Add Amazon-style "Customer Value" summary to PRDs (press release format)
2. Implement `llms.txt` for AI discoverability (emerging standard)
3. Add structured JSON export alongside Markdown for tool interoperability

---

## 1. Direct Competitors Analysis

### 1.1 QuillBot PRD Generator

| Attribute | Details |
|-----------|---------|
| **URL** | quillbot.com/prd-generator |
| **Pricing** | FREE |
| **Approach** | Template-free AI generation |

**Strengths**:
- Zero-cost barrier to entry
- Simple, fast generation
- No account required

**Weaknesses**:
- Generic output, not customizable
- No progressive disclosure
- No integration with development tools
- Single-shot generation (no iteration)

**Cognispec Advantage**: Modular structure, iterative refinement, Claude Code native integration

---

### 1.2 Chisel Labs

| Attribute | Details |
|-----------|---------|
| **URL** | chisellabs.com |
| **Pricing** | Enterprise (paid) |
| **Approach** | Full product management platform |

**Strengths**:
- Deep integrations (Jira, Linear, Notion)
- Team collaboration features
- Roadmap visualization
- Customer feedback integration

**Weaknesses**:
- Enterprise pricing, overkill for indie developers
- Heavy platform lock-in
- No progressive disclosure
- Not AI-native workflow

**Cognispec Advantage**: Free, lightweight, designed for solo developers, AI-first workflow

---

### 1.3 Oreate AI

| Attribute | Details |
|-----------|---------|
| **URL** | oreate.ai |
| **Pricing** | Freemium |
| **Approach** | Multi-tool AI workspace |

**Strengths**:
- Multiple AI tools in one platform
- User story generation
- Acceptance criteria automation

**Weaknesses**:
- Jack of all trades, master of none
- No Claude Code integration
- No progressive disclosure
- Web-based only

**Cognispec Advantage**: Focused on PRD excellence, terminal-native, progressive disclosure

---

## 2. Claude Code Ecosystem Analysis

### 2.1 PRD-Taskmaster

**Source**: github.com/anombyte93/prd-taskmaster

**Architecture**:
```
.taskmaster/
├── docs/
│   └── prd.md          # Main PRD document
├── CLAUDE.md           # Claude Code workflow guide
└── codex.md            # Codex user guide
```

**Key Features**:
- 8-step workflow with 12+ discovery questions
- 13 automated quality checks
- Task-Master-AI integration
- TDD-first development guidance

**Learnings for Cognispec**:
- Quality validation checklist is valuable
- Task-Master-AI JSON format enables interoperability
- Single prd.md file limits modularity (our approach is better)

---

### 2.2 ShipSpec

**Source**: github.com/jsegov/shipspec-claude-code-plugin

**Architecture**:
```
Specification → Implementation → Verification Loop
     ↓               ↓                ↓
   PRD+SDD      Task execution    Acceptance testing
```

**Key Features**:
- Three-phase development lifecycle
- "Ralph Wiggum loop" for continuous iteration
- Fibonacci task estimation (1-8 points)
- Atlassian-style SDD template

**Learnings for Cognispec**:
- Acceptance criteria are essential for verification
- Task estimation adds planning value
- Continuous verification loop prevents drift

---

### 2.3 Superpowers (obra)

**Source**: github.com/obra/superpowers

**Key Commands**:
- `/brainstorm` - Requirements brainstorming
- `/write-plan` - Plan writing
- `/execute-plan` - Plan execution
- `/tdd` - Test-driven development
- `/debug` - Systematic debugging

**Philosophy**: Engineering best practices as codified skills

**Learnings for Cognispec**:
- Focused, single-purpose commands are effective
- Skills should encode best practices, not just templates
- Developer workflow integration matters

---

## 3. Best Practices Research

### 3.1 PRD Structure Standards

#### Google Approach
- Problem statement first
- User-centric design
- Success metrics (OKRs)
- Launch criteria

#### Amazon Approach (Working Backwards)
- Start with press release
- Customer-focused narrative
- FAQ section
- Then detailed requirements

**Recommendation**: Adopt Amazon's "customer value summary" at the start of each PRD.

---

### 3.2 Progressive Disclosure Patterns

**Source**: Nielsen Norman Group, Interaction Design Foundation

| Layer | Content | Reading Time |
|-------|---------|--------------|
| **Layer 1** | Title + Executive Summary | 30 seconds |
| **Layer 2** | Problem + Solution Overview | 2 minutes |
| **Layer 3** | Detailed Requirements | As needed |
| **Layer 4** | Technical Appendix | Expert level |

**UI Implementation Patterns**:
- Collapsible `<details>` sections
- Tabbed interfaces
- "Read more" links
- Table of contents navigation

**Validation**: Cognispec's 4-layer structure aligns with industry best practices.

---

### 3.3 AI-Friendly Documentation

#### Modular Structure
| Principle | Rationale |
|-----------|-----------|
| Single file < 10-15KB | Prevents context window truncation |
| Semantic filenames | Enables efficient Glob/Grep search |
| Clear cross-references | Explicit relationships between files |
| Index file | Provides global navigation |

#### `llms.txt` Protocol (Emerging Standard)

**Concept**: Like `robots.txt` for search engines, but for LLMs

**Format**:
```
# llms.txt - AI agent documentation index

## Project Overview
[Brief description]

## Key Documents
- PRD: .cognispec/prd/index.md
- Architecture: .cognispec/plan/architecture.md
- Tasks: .cognispec/plan/tasks.json

## AI Instructions
[Special handling instructions for AI agents]
```

**Recommendation**: Add `llms.txt` support to `.cognispec/` directory.

---

## 4. Competitive Comparison Matrix

| Feature | QuillBot | Chisel | Oreate | PRD-Taskmaster | ShipSpec | **Cognispec** |
|---------|----------|--------|--------|----------------|----------|---------------|
| **Pricing** | Free | Paid | Freemium | Free | Free | **Free** |
| **Progressive Disclosure** | ❌ | ❌ | ❌ | ❌ | ❌ | **✅** |
| **AI-Optimized Format** | ❌ | ❌ | ❌ | Partial | Partial | **✅** |
| **Human-Readable HTML** | ❌ | ❌ | ❌ | ❌ | ❌ | **✅ Planned** |
| **Claude Code Native** | ❌ | ❌ | ❌ | ✅ | ✅ | **✅** |
| **Modular Structure** | ❌ | Partial | ❌ | ❌ | Partial | **✅** |
| **Multiple Templates** | ❌ | ✅ | ❌ | ❌ | ❌ | **🎯 Planned** |
| **Quality Validation** | ❌ | ✅ | ❌ | ✅ | ✅ | **🎯 Planned** |
| **Task Export (JSON)** | ❌ | ✅ | ❌ | ✅ | ✅ | **✅** |

---

## 5. Recommendations for Cognispec

### High Priority (Implement Now)

#### 5.1 Implement `llms.txt` Support
**What**: Add `.cognispec/llms.txt` for AI discoverability
**Why**: Future-proofs for autonomous agent interactions, emerging standard
**Implementation**: Generate llms.txt during `/prd` command

---

### Medium Priority (Next Iteration)

#### 5.2 Add Version Control & Change Log
**What**: Track PRD versions (v1.0, v1.1, v2.0) with change summaries
**Why**: Supports requirements change management over time
**Implementation**: Add `.meta.json` with version history

#### 5.3 Add Glossary Generation
**What**: Auto-extract and define domain-specific terms
**Why**: Improves AI understanding consistency, reduces ambiguity
**Implementation**: Generate `glossary.md` during PRD creation

---

### Low Priority (Future)

#### 5.4 Add Visual Diagram Support
**What**: User flow diagrams, architecture diagrams
**Why**: Visual communication for complex systems
**Implementation**: Mermaid diagram integration

---

## 6. Validation of Current Design

### ✅ Confirmed Good Decisions

| Decision | Validation Source |
|----------|-------------------|
| Modular file structure | Industry best practice for AI consumption |
| Single file < 10-15KB | Prevents context window issues |
| Semantic filenames (F001-xxx.md) | Enables efficient Glob/Grep |
| Markdown + Frontmatter | Standard format, widely supported |
| HTML progressive disclosure | Matches UX best practices (NN/g) |
| Dual-document architecture | Unique differentiator, no competitor offers this |
| `/discover → /research → /prd → /plan` workflow | Matches professional PM workflow |

### 🔄 Suggested Improvements to Current Design

| Current Design | Suggested Improvement |
|----------------|----------------------|
| No version tracking | Add `.meta.json` with version history |
| No `llms.txt` | Add for AI discoverability |

---

## 7. Conclusion

Cognispec occupies a unique position in the PRD generation landscape:

1. **Progressive Disclosure is Genuinely Unique** - No competitor explicitly implements this approach
2. **Dual-Document Architecture is Novel** - Separate AI-optimized and human-optimized versions
3. **Claude Code Native Integration** - Unlike web-based tools, works in developer's natural environment
4. **Free and Focused** - Unlike enterprise tools, designed for indie developers


---

## 8. References

### Competitor Tools
- QuillBot PRD Generator: quillbot.com/prd-generator
- Chisel Labs: chisellabs.com
- Oreate AI: oreate.ai

### Claude Code Ecosystem
- PRD-Taskmaster: github.com/anombyte93/prd-taskmaster
- ShipSpec: github.com/jsegov/shipspec-claude-code-plugin
- Superpowers: github.com/obra/superpowers
- Awesome Claude Code: github.com/hesreallyhim/awesome-claude-code

### Best Practices
- Nielsen Norman Group - Progressive Disclosure: nngroup.com/articles/progressive-disclosure
- Interaction Design Foundation: interaction-design.org/literature/topics/progressive-disclosure
- Amazon Working Backwards: aboutamazon.com/working-at-amazon/working-backwards

### AI Documentation Standards
- llms.txt proposal: Various discussions in AI developer communities
- Claude Code Best Practices: anthropic.com/engineering/claude-code-best-practices
