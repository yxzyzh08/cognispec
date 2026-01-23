---
name: research
description: Conduct competitor analysis and market research to validate assumptions
allowed-tools:
  - Read
  - Write
  - WebSearch
  - WebFetch
---

# /research - Competitor & Market Research

## Purpose
Conduct competitor analysis and market research to validate assumptions and identify best practices for the product.

## Arguments
- `$ARGUMENTS` - Optional: specific competitors, market segments, or research focus areas

## Instructions

You are conducting market and competitor research. Use web search capabilities to gather information.

### Research Process

#### Step 1: Understand Context

First, check if `.cognispec/discovery/interview.md` exists:
- If yes, read it to understand the product context
- If no, ask the user to briefly describe:
  - What product/feature they're building
  - Who the target users are
  - What problem it solves

#### Step 2: Identify Research Targets

Based on the context, identify:
1. **Direct Competitors**: Products solving the same problem
2. **Indirect Competitors**: Alternative solutions or workarounds
3. **Best Practices**: Industry standards and patterns
4. **Market Trends**: Emerging technologies or approaches

If `$ARGUMENTS` is provided, focus research on those specific areas.

#### Step 3: Conduct Research

For each competitor/area, research:

**Product Analysis**
- Core features and functionality
- Pricing model
- Target audience
- Strengths and weaknesses

**UX/Design Patterns**
- Onboarding flow
- Key user interactions
- Navigation patterns
- Visual design approach

**Technical Approach**
- Technology stack (if discoverable)
- Integration capabilities
- Performance characteristics
- API/extensibility

**Market Position**
- User reviews and ratings
- Market share (if available)
- Recent developments/updates

### Research Guidelines

- Use WebSearch tool for current information
- Use WebFetch to analyze specific product pages
- Focus on actionable insights, not just descriptions
- Identify patterns across multiple competitors
- Note gaps in the market that the user's product could fill

## Output

Save research results to `.cognispec/discovery/research.md`:

```markdown
# Market & Competitor Research

## Date
[Current date]

## Research Context
[Brief description of product being researched for]

## 🎯 Key Insights (30秒概览)
> [3-5 bullet points of most important findings]

---

## Competitor Analysis

### [Competitor 1 Name]
**Overview**: [One-line description]
**Target Users**: [Who they serve]
**Strengths**:
- [Strength 1]
- [Strength 2]

**Weaknesses**:
- [Weakness 1]
- [Weakness 2]

**Key Features**:
| Feature | Description | Relevance |
|---------|-------------|-----------|
| ... | ... | ... |

<details>
<summary>📖 Detailed Analysis</summary>

[In-depth analysis, screenshots, user reviews, etc.]

</details>

### [Competitor 2 Name]
[Same structure...]

---

## Market Patterns

### Common Features
[Features that appear across multiple competitors]

### Emerging Trends
[New approaches or technologies gaining traction]

### Market Gaps
[Unmet needs or underserved segments]

---

## Recommendations

### Differentiation Opportunities
1. [Opportunity 1]
2. [Opportunity 2]

### Features to Consider
1. [Feature 1] - [Rationale]
2. [Feature 2] - [Rationale]

### Features to Avoid
1. [Feature 1] - [Why]

---

## Sources
- [Source 1](url)
- [Source 2](url)
```

## Next Steps

After research, suggest:
1. Review findings with stakeholders
2. `/prd` - to generate PRD incorporating research insights
3. Update discovery interview if new requirements emerged

## Example Interaction

```
You: I'll conduct market and competitor research for your product.

Based on your discovery interview, I'll research:
1. [Competitor A] - direct competitor
2. [Competitor B] - indirect competitor
3. [Market segment] best practices

Starting research now...

[Uses WebSearch and WebFetch tools]

Research complete! Key findings saved to `.cognispec/discovery/research.md`.

**Top 3 Insights:**
1. [Insight 1]
2. [Insight 2]
3. [Insight 3]

Would you like me to dive deeper into any area, or shall we proceed to `/prd` generation?
```
