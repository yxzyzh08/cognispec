#!/usr/bin/env node
/**
 * Cognispec llms.txt Generator
 *
 * Generates an AI-friendly documentation index at .cognispec/llms.txt
 * This is a programmatic generator, not AI-generated content.
 *
 * Usage: node generate-llms-txt.js [--verbose]
 *
 * Dependencies: gray-matter (for parsing frontmatter)
 * Install: npm install gray-matter
 */

const fs = require('fs');
const path = require('path');

// Check for dependencies
let matter;
try {
  matter = require('gray-matter');
} catch (e) {
  console.error('Missing dependencies. Please run:');
  console.error('  npm install gray-matter');
  process.exit(1);
}

// Configuration
const COGNISPEC_DIR = path.join(__dirname, '..');
const OUTPUT_FILE = path.join(COGNISPEC_DIR, 'llms.txt');

// Document definitions
const DISCOVERY_DOCS = [
  { name: 'Interview', path: 'discovery/interview.md', desc: 'Requirements interview record' },
  { name: 'Research', path: 'discovery/research.md', desc: 'Competitor/market research' }
];

const PRD_DOCS = [
  { layer: 1, path: 'prd/summary.md', time: '30 sec', desc: 'Executive summary' },
  { layer: 2, path: 'prd/overview.md', time: '2 min', desc: 'Problem & solution' },
  { layer: 3, path: 'prd/requirements.md', time: 'As needed', desc: 'Detailed requirements' },
  { layer: 4, path: 'prd/appendix.md', time: 'Expert', desc: 'Technical appendix' }
];

const PLAN_DOCS = [
  { name: 'Architecture', path: 'plan/architecture.md', desc: 'Technical architecture' },
  { name: 'Phases', path: 'plan/phases.md', desc: 'Development phases' },
  { name: 'Tasks', path: 'plan/tasks.json', desc: 'Task breakdown (Cognispec format)' },
  { name: 'Risks', path: 'plan/risks.md', desc: 'Risk assessment' }
];

/**
 * Check if a file exists
 */
function fileExists(relativePath) {
  return fs.existsSync(path.join(COGNISPEC_DIR, relativePath));
}

/**
 * Read and parse a Markdown file
 */
function readMarkdownFile(relativePath) {
  const fullPath = path.join(COGNISPEC_DIR, relativePath);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  return matter(content);
}

/**
 * Extract project name from summary.md
 * Looks for: # PRD: [Project Name]
 */
function extractProjectName(summaryContent) {
  if (!summaryContent) return 'Unknown Project';

  const match = summaryContent.match(/^#\s*PRD:\s*(.+)$/m);
  return match ? match[1].trim() : 'Unknown Project';
}

/**
 * Extract version from summary.md
 * Looks for: **Version**: [version]
 */
function extractVersion(summaryContent) {
  if (!summaryContent) return '1.0.0';

  const match = summaryContent.match(/\*\*Version\*\*:\s*(.+)/);
  return match ? match[1].trim() : '1.0.0';
}

/**
 * Extract template from summary.md
 * Looks for: **Template**: [template]
 */
function extractTemplate(summaryContent) {
  if (!summaryContent) return 'Not specified';

  const match = summaryContent.match(/\*\*Template\*\*:\s*(.+)/);
  return match ? match[1].trim() : 'Not specified';
}

/**
 * Extract 30-second overview from summary.md
 * Looks for the blockquote after "## 🎯 30-Second Overview"
 */
function extractOverview(summaryContent) {
  if (!summaryContent) return '';

  // Find the 30-Second Overview section and extract the blockquote
  const sectionMatch = summaryContent.match(/##\s*🎯\s*30-Second Overview\s*\n+>\s*([^\n]+)/);
  if (sectionMatch) {
    return sectionMatch[1].trim();
  }
  return '';
}

/**
 * Extract target users from overview.md
 * Looks for primary persona under User Personas section
 */
function extractTargetUsers(overviewContent) {
  if (!overviewContent) return 'See overview.md for user personas';

  // Try to find the Primary Persona section
  const match = overviewContent.match(/###\s*Primary Persona[^#]*?\*\*Role\*\*:\s*(.+)/);
  if (match) {
    return match[1].trim();
  }

  // Fallback: look for any "Target User" mention
  const fallbackMatch = overviewContent.match(/Target User[s]?[:\s]+([^\n]+)/i);
  if (fallbackMatch) {
    return fallbackMatch[1].trim();
  }

  return 'See overview.md for user personas';
}

/**
 * Generate the document index table for discovery phase
 */
function generateDiscoveryTable(verbose) {
  const rows = [];

  for (const doc of DISCOVERY_DOCS) {
    if (fileExists(doc.path)) {
      rows.push(`| ${doc.name} | .cognispec/${doc.path} | ${doc.desc} |`);
      if (verbose) console.log(`  [OK] ${doc.path}`);
    } else {
      if (verbose) console.log(`  [--] ${doc.path} (not found)`);
    }
  }

  if (rows.length === 0) {
    return '> No discovery documents found. Run `/discover` to start.\n';
  }

  return `| Document | Path | Description |
|----------|------|-------------|
${rows.join('\n')}`;
}

/**
 * Generate the document index table for PRD
 */
function generatePrdTable(verbose) {
  const rows = [];

  for (const doc of PRD_DOCS) {
    if (fileExists(doc.path)) {
      rows.push(`| ${doc.layer} | .cognispec/${doc.path} | ${doc.time} | ${doc.desc} |`);
      if (verbose) console.log(`  [OK] ${doc.path}`);
    } else {
      if (verbose) console.log(`  [--] ${doc.path} (not found)`);
    }
  }

  if (rows.length === 0) {
    return '> No PRD documents found. Run `/prd` to generate.\n';
  }

  return `| Layer | Path | Reading Time | Description |
|-------|------|--------------|-------------|
${rows.join('\n')}`;
}

/**
 * Generate the document index table for development planning
 */
function generatePlanTable(verbose) {
  const rows = [];

  for (const doc of PLAN_DOCS) {
    if (fileExists(doc.path)) {
      rows.push(`| ${doc.name} | .cognispec/${doc.path} | ${doc.desc} |`);
      if (verbose) console.log(`  [OK] ${doc.path}`);
    } else {
      if (verbose) console.log(`  [--] ${doc.path} (not found)`);
    }
  }

  if (rows.length === 0) {
    return '> No planning documents found. Run `/plan` to generate.\n';
  }

  return `| Document | Path | Description |
|----------|------|-------------|
${rows.join('\n')}`;
}

/**
 * Generate the complete llms.txt content
 */
function generateLlmsTxt(verbose) {
  // Read source files
  const summary = readMarkdownFile('prd/summary.md');
  const overview = readMarkdownFile('prd/overview.md');

  const summaryContent = summary ? summary.content : null;
  const overviewContent = overview ? overview.content : null;

  // Extract metadata
  const projectName = extractProjectName(summaryContent);
  const version = extractVersion(summaryContent);
  const template = extractTemplate(summaryContent);
  const projectOverview = extractOverview(summaryContent);
  const targetUsers = extractTargetUsers(overviewContent);
  const generatedDate = new Date().toISOString().split('T')[0];

  if (verbose) {
    console.log('\nExtracted metadata:');
    console.log(`  Project: ${projectName}`);
    console.log(`  Version: ${version}`);
    console.log(`  Template: ${template}`);
    console.log('');
  }

  // Generate document tables
  if (verbose) console.log('Checking discovery documents...');
  const discoveryTable = generateDiscoveryTable(verbose);

  if (verbose) console.log('\nChecking PRD documents...');
  const prdTable = generatePrdTable(verbose);

  if (verbose) console.log('\nChecking planning documents...');
  const planTable = generatePlanTable(verbose);

  // Build the llms.txt content
  return `# llms.txt - ${projectName} Documentation Index

## Project Overview
> ${projectName}: AI-Native Requirements Documentation

${projectOverview || 'See .cognispec/prd/summary.md for project overview.'}

## Target Users
${targetUsers}

## Core Workflow
\`\`\`
/discover → /research → /prd → /plan → Development
\`\`\`

---

## Document Index

### Discovery Phase
${discoveryTable}

### PRD Documents (Progressive Disclosure)
${prdTable}

### Development Planning
${planTable}

---

## AI Instructions

### Reading Priority
1. Start with \`summary.md\` for quick project context (30 seconds)
2. Read \`overview.md\` for problem/solution understanding (2 minutes)
3. Use \`requirements.md\` for specific feature details (as needed)
4. Reference \`appendix.md\` for technical decisions and glossary (expert level)

### Task Format
Tasks follow Cognispec native JSON format:
- Simple, human-readable structure
- Phase-based organization
- See \`tasks.json\` for implementation tasks

### Code Generation Guidelines
- Follow patterns established in existing codebase
- Refer to \`appendix.md\` for technical constraints
- Check \`requirements.md\` for acceptance criteria before implementation

---

## Metadata
- PRD Version: ${version}
- Template: ${template}
- Generated: ${generatedDate}
- Generator: Cognispec generate-llms-txt.js
`;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose') || args.includes('-v');

  console.log('Cognispec llms.txt Generator');
  console.log('============================\n');

  // Generate content
  const content = generateLlmsTxt(verbose);

  // Write output
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');

  console.log(`\nllms.txt generated: ${OUTPUT_FILE}`);
  console.log('\nThis file helps AI agents discover and navigate your project documentation.');
}

// Run
main();
