# Cognispec PRD Templates

This directory contains PRD templates optimized for different product types.

## Available Templates

| Template | File | Best For |
|----------|------|----------|
| AI Agent | `ai-agent.md` | Claude Code plugins, MCP servers, AI tools, chatbots |
| Mobile App | `mobile-app.md` | iOS, Android, React Native, Flutter apps |
| Web App | `web-app.md` | SaaS, web applications with frontend/backend |

## Usage

### Via Command Argument

```bash
/prd --template=ai-agent
/prd --template=mobile-app
/prd --template=web-app
```

### Interactive Selection

If you run `/prd` without the `--template` argument, you'll be prompted to select a template.

## Template Structure

Each template defines:

1. **Metadata** - Template name, description, and focus areas
2. **Template-Specific Sections** - Unique sections for each document layer:
   - `overview.md` additions
   - `requirements.md` additions
   - `appendix.md` additions

## How Templates Work

When a template is selected:

1. The standard PRD structure is generated (summary, overview, requirements, appendix)
2. Template-specific sections are added to each document layer
3. The `summary.md` records which template was used
4. The `llms.txt` includes template metadata

## Template Comparison

### ai-agent.md

Focus areas:
- Plugin architecture and extension points
- MCP server configuration
- Skills and command structure
- Claude Code integration patterns

Unique sections:
- Integration Architecture
- Capability Mapping
- MCP Configuration
- Skills Directory Structure

### mobile-app.md

Focus areas:
- UI/UX design patterns
- Platform support (iOS, Android)
- Offline capability and sync
- App store requirements

Unique sections:
- Platform Strategy
- Screen Flows
- Device Support Matrix
- Offline Requirements
- App Store Checklist

### web-app.md

Focus areas:
- Frontend/backend architecture
- Authentication and authorization
- Data models and API design
- Deployment strategy

Unique sections:
- Architecture Overview
- API Endpoints
- Data Models
- Authorization Matrix
- Database Schema

## Creating Custom Templates

To create a custom template:

1. Copy an existing template as a starting point
2. Modify the YAML frontmatter metadata
3. Add/remove template-specific sections
4. Save with a descriptive filename (e.g., `saas-platform.md`)

### Template File Structure

```yaml
---
name: template-name
description: Brief description of the template
focus_areas:
  - Focus area 1
  - Focus area 2
---

# Template: [Template Name]

## Overview Additions
[Sections to add to overview.md]

## Requirements Additions
[Sections to add to requirements.md]

## Appendix Additions
[Sections to add to appendix.md]
```

## Best Practices

1. **Choose the closest template** - Even if not perfect, start with the most similar template
2. **Customize as needed** - Templates are starting points, not rigid structures
3. **Document deviations** - If you skip template sections, note why in the PRD
4. **Keep templates simple** - Focus on the most valuable template-specific content

## Roadmap

Future template enhancements:
- [ ] Template inheritance (extend existing templates)
- [ ] User-defined templates
- [ ] Template versioning
- [ ] Community template sharing
