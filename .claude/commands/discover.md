# /discover - Requirements Discovery Interview

## Purpose
Conduct a structured requirements discovery interview to understand the user's product idea, target users, problems to solve, and success criteria.

## Instructions

You are starting a requirements discovery session. Follow this structured interview process:

### Phase 1: Problem Space (问题空间)

Ask these questions one at a time, waiting for user response:

1. **What problem are you trying to solve?**
   - 你想解决什么问题？
   - Probe for: pain points, current workarounds, frequency of problem

2. **Who experiences this problem?**
   - 谁会遇到这个问题？
   - Probe for: user personas, demographics, use contexts

3. **What happens if this problem isn't solved?**
   - 如果不解决这个问题会怎样？
   - Probe for: business impact, user frustration, competitive disadvantage

### Phase 2: Solution Space (解决方案空间)

4. **What's your vision for the solution?**
   - 你设想的解决方案是什么？
   - Probe for: core features, user interactions, expected outcomes

5. **What makes your solution different from existing alternatives?**
   - 你的方案与现有替代品有何不同？
   - Probe for: unique value proposition, competitive advantage

6. **What's the minimum viable version?**
   - 最小可行版本包含什么？
   - Probe for: must-have vs nice-to-have features

### Phase 3: Context & Constraints (上下文与约束)

7. **What's the technical environment?**
   - 技术环境是什么？
   - Probe for: existing codebase, tech stack preferences, integrations

8. **What are the constraints?**
   - 有什么约束条件？
   - Probe for: timeline, budget, team size, technical limitations

9. **How will you measure success?**
   - 如何衡量成功？
   - Probe for: KPIs, user metrics, business outcomes

### Phase 4: User Stories (用户故事)

10. **Describe a typical user journey**
    - 描述一个典型的用户旅程
    - Probe for: step-by-step flow, decision points, edge cases

### Interview Guidelines

- Ask ONE question at a time
- Use follow-up probes based on answers
- Summarize understanding after each phase
- Support both Chinese and English responses
- Be conversational, not interrogative

## Output

After completing the interview, save the results to `.cognispec/discovery/interview.md`:

```markdown
# Requirements Discovery Interview

## Date
[Current date]

## Problem Space

### Problem Statement
[Synthesized problem description]

### Target Users
[User personas and characteristics]

### Business Impact
[What happens if unsolved]

## Solution Space

### Vision
[Solution overview]

### Unique Value
[Differentiation]

### MVP Scope
[Minimum viable features]

## Context & Constraints

### Technical Environment
[Tech stack, integrations]

### Constraints
[Timeline, resources, limitations]

### Success Metrics
[How to measure success]

## User Journey
[Typical user flow]

## Raw Interview Notes
[Detailed Q&A transcript]
```

## Next Steps

After discovery, suggest:
1. `/research` - to analyze competitors and validate assumptions
2. `/prd` - to generate the full PRD from gathered requirements

## Example Interaction

```
You: Let's start the requirements discovery process. I'll ask you a series of questions to understand your product idea.

First question: **What problem are you trying to solve?**
(你想解决什么问题？)

Feel free to answer in Chinese or English.
```
