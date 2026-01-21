---
name: ai-agent
description: Template for AI agents, Claude Code plugins, MCP servers, and AI tools
focus_areas:
  - Plugin architecture and extension points
  - API integration patterns
  - Claude Code hooks and capabilities
  - MCP server configuration
  - Skills and command structure
---

# Template: AI Agent / Claude Code Plugin

This template is optimized for AI-powered tools including:
- Claude Code plugins and extensions
- MCP (Model Context Protocol) servers
- AI agents and assistants
- Chatbots and conversational interfaces
- AI-powered CLI tools

---

## Overview Additions

Add these sections to `overview.md` after "Solution Overview":

### Integration Architecture

```markdown
---

## Integration Architecture

### System Context

| Component | Role | Integration Method |
|-----------|------|-------------------|
| Claude Code | Host environment | Skills, Commands |
| MCP Server | Extended capabilities | MCP Protocol |
| External APIs | Data sources | REST/GraphQL |
| Local Files | Workspace context | File system |

### Data Flow

```
User Input → Claude Code → [Plugin] → External Services
                 ↓
            Workspace Files
```

<details>
<summary>📖 Detailed Integration Diagram</summary>

[Describe the complete data flow including:
- User interaction points
- AI model invocations
- External API calls
- File system operations
- State management]

</details>
```

### Capability Mapping

```markdown
---

## Capability Mapping

### Core Capabilities

| Capability | Implementation | Priority |
|------------|---------------|----------|
| [Capability 1] | Skills/Commands | Must Have |
| [Capability 2] | MCP Tools | Must Have |
| [Capability 3] | WebSearch/WebFetch | Should Have |

### Claude Code Integration Points

- **Skills**: Auto-triggered contextual guidance
- **Commands**: User-invoked workflows (`/command`)
- **Hooks**: Event-driven automation
- **MCP Tools**: Extended functionality

<details>
<summary>📖 Capability Requirements Matrix</summary>

| Feature | Read Files | Write Files | Web Access | External API | MCP Tools |
|---------|-----------|-------------|------------|--------------|-----------|
| [Feature 1] | ✓ | ✓ | | | |
| [Feature 2] | ✓ | | ✓ | | |
| [Feature 3] | | | | ✓ | ✓ |

</details>
```

---

## Requirements Additions

Add these sections to `requirements.md` after "Functional Requirements":

### MCP Configuration

```markdown
---

## MCP Configuration

### Required MCP Tools

| Tool | Purpose | Parameters |
|------|---------|------------|
| [tool_name] | [description] | [key params] |

### MCP Server Configuration

```json
{
  "mcpServers": {
    "[server-name]": {
      "command": "[command]",
      "args": ["[args]"],
      "env": {
        "[ENV_VAR]": "[value]"
      }
    }
  }
}
```

<details>
<summary>📖 Full MCP Configuration</summary>

[Complete MCP server configuration with all options]

</details>
```

### Skills Structure

```markdown
---

## Skills Structure

### Auto-Triggered Skills

| Skill | Trigger Condition | Purpose |
|-------|-------------------|---------|
| [skill-name] | [condition] | [purpose] |

### Skill File Structure

```
.claude/
├── skills/
│   └── [plugin-name]/
│       ├── SKILL.md          # Auto-triggered guidance
│       └── [context].md      # Additional context files
└── commands/
    ├── [command1].md         # /command1
    └── [command2].md         # /command2
```

<details>
<summary>📖 Skill Trigger Conditions</summary>

Skills are triggered when:
- User opens specific file types
- User mentions specific keywords
- Working directory matches patterns
- Specific tools are available

[Define specific trigger conditions for this plugin]

</details>
```

### Prompt Templates

```markdown
---

## Prompt Templates

### Command Prompts

Each command should include:
- Clear purpose statement
- Input expectations
- Step-by-step instructions
- Output format specification
- Example interactions

### System Prompt Patterns

| Pattern | When to Use | Example |
|---------|-------------|---------|
| Instructional | User needs guidance | "Follow these steps..." |
| Interrogative | Gathering requirements | "What is your..." |
| Generative | Creating content | "Generate a..." |

<details>
<summary>📖 Prompt Engineering Guidelines</summary>

[Detailed prompt writing guidelines:
- Clarity and specificity
- Context provision
- Output formatting
- Error handling instructions]

</details>
```

---

## Appendix Additions

Add these sections to `appendix.md` after "Technical Constraints":

### MCP Server Implementation

```markdown
---

## MCP Server Implementation

### Server Architecture

```
┌─────────────────────────────────────┐
│           MCP Server                │
├─────────────────────────────────────┤
│  Tools    │  Resources  │  Prompts  │
├─────────────────────────────────────┤
│         Transport Layer             │
│    (stdio / HTTP / WebSocket)       │
└─────────────────────────────────────┘
```

### Tool Definitions

```typescript
// Example tool definition
{
  name: "[tool-name]",
  description: "[tool description]",
  inputSchema: {
    type: "object",
    properties: {
      [param]: {
        type: "[type]",
        description: "[description]"
      }
    },
    required: ["[required-params]"]
  }
}
```

<details>
<summary>📖 Complete Tool Specifications</summary>

[Full tool definitions with:
- Input schemas
- Output formats
- Error handling
- Usage examples]

</details>
```

### Skills Directory Structure

```markdown
---

## Skills Directory Structure

### File Organization

```
.claude/
├── settings.json           # User settings
├── settings.local.json     # Local overrides
├── skills/
│   └── [plugin-name]/
│       ├── SKILL.md        # Main skill file
│       ├── patterns/       # Pattern libraries
│       └── templates/      # Output templates
└── commands/
    ├── [cmd1].md           # Slash command
    └── [cmd2].md           # Slash command
```

### SKILL.md Structure

```markdown
# [Skill Name]

## Trigger Conditions
[When this skill activates]

## Context
[Background information for Claude]

## Instructions
[What Claude should do]

## Examples
[Example interactions]
```
```

### Claude Code Hooks

```markdown
---

## Claude Code Hooks

### Available Hook Points

| Hook | Trigger | Use Case |
|------|---------|----------|
| `PreToolUse` | Before tool execution | Validation, logging |
| `PostToolUse` | After tool execution | Post-processing |
| `Notification` | On notifications | Alerts, updates |

### Hook Configuration

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "[tool-pattern]",
        "hooks": ["[script-path]"]
      }
    ]
  }
}
```

<details>
<summary>📖 Hook Implementation Examples</summary>

[Example hook scripts for common use cases]

</details>
```

---

## Quality Checklist

AI Agent-specific quality checks:

- [ ] MCP tools are well-documented with clear schemas
- [ ] Skills have clear trigger conditions
- [ ] Commands follow consistent structure
- [ ] Prompts are clear and unambiguous
- [ ] Error handling covers common AI failure modes
- [ ] Integration points are clearly defined
- [ ] Security considerations for AI interactions addressed
