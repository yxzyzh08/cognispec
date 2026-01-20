#!/usr/bin/env node
/**
 * Cognispec Markdown to HTML Converter
 *
 * Converts PRD Markdown files to an interactive HTML document
 * with progressive disclosure.
 *
 * Usage: node md2html.js [--backup]
 *
 * Dependencies: marked, gray-matter
 * Install: npm install marked gray-matter
 */

const fs = require('fs');
const path = require('path');

// Check for dependencies
let marked, matter;
try {
  marked = require('marked');
  matter = require('gray-matter');
} catch (e) {
  console.error('Missing dependencies. Please run:');
  console.error('  npm install marked gray-matter');
  process.exit(1);
}

// Configuration
const PRD_DIR = path.join(__dirname, '..', 'prd');
const HUMAN_DIR = path.join(PRD_DIR, 'human');
const BACKUP_DIR = path.join(HUMAN_DIR, 'backup');
const OUTPUT_FILE = path.join(HUMAN_DIR, 'index.html');

// PRD files in order
const PRD_FILES = [
  { file: 'summary.md', layer: 1, title: 'Summary', readTime: '30 seconds' },
  { file: 'overview.md', layer: 2, title: 'Overview', readTime: '2 minutes' },
  { file: 'requirements.md', layer: 3, title: 'Requirements', readTime: 'As needed' },
  { file: 'appendix.md', layer: 4, title: 'Appendix', readTime: 'Expert level' }
];

// CSS Template (inline for offline use)
const CSS = `
*, *::before, *::after { box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
  background: #fafafa;
}
h1 { font-size: 2rem; border-bottom: 3px solid #2563eb; padding-bottom: 0.5rem; }
h2 { font-size: 1.5rem; color: #1e40af; margin-top: 2rem; }
h3 { font-size: 1.25rem; color: #3b82f6; }
nav {
  background: #1e40af;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
nav a { color: white; text-decoration: none; margin-right: 1.5rem; }
nav a:hover { text-decoration: underline; }
.layer {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.layer-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}
.layer-badge {
  background: #2563eb;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}
.layer-meta {
  color: #6b7280;
  font-size: 0.875rem;
}
details {
  background: #f1f5f9;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}
details summary {
  cursor: pointer;
  font-weight: 600;
  color: #1e40af;
}
details summary:hover { color: #2563eb; }
details[open] summary { margin-bottom: 1rem; }
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}
th, td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}
th { background: #f1f5f9; font-weight: 600; }
tr:nth-child(even) { background: #f8fafc; }
blockquote {
  background: #eff6ff;
  border-left: 4px solid #2563eb;
  padding: 1rem;
  margin: 1rem 0;
  font-style: italic;
}
pre, code {
  background: #f1f5f9;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
}
pre {
  padding: 1rem;
  overflow-x: auto;
}
code { padding: 0.2rem 0.4rem; }
pre code { padding: 0; }
ul, ol { padding-left: 1.5rem; }
li { margin-bottom: 0.5rem; }
a { color: #2563eb; }
a:hover { text-decoration: underline; }
.status-done { color: #16a34a; }
.status-planned { color: #2563eb; }
.status-future { color: #6b7280; }
@media print {
  nav { display: none; }
  details { break-inside: avoid; }
  .layer { break-inside: avoid; box-shadow: none; border: 1px solid #e2e8f0; }
}
footer {
  text-align: center;
  color: #6b7280;
  margin-top: 2rem;
  font-size: 0.875rem;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
}
`;

/**
 * Create backup of existing HTML
 */
function createBackup() {
  if (!fs.existsSync(OUTPUT_FILE)) {
    return null;
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(BACKUP_DIR, timestamp);

  fs.mkdirSync(backupPath, { recursive: true });
  fs.copyFileSync(OUTPUT_FILE, path.join(backupPath, 'index.html'));

  console.log(`Backup created: ${backupPath}`);
  return backupPath;
}

/**
 * Read and parse a Markdown file
 */
function parseMarkdownFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: markdown } = matter(content);
  const html = marked.parse(markdown);

  return { frontmatter, markdown, html };
}

/**
 * Extract project name from summary.md
 */
function extractProjectName(summaryHtml) {
  const match = summaryHtml.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  return match ? match[1].replace(/^PRD:\s*/i, '').trim() : 'Cognispec';
}

/**
 * Generate the HTML document
 */
function generateHTML(sections) {
  const projectName = sections[0] ? extractProjectName(sections[0].html) : 'Cognispec';
  const generatedDate = new Date().toISOString().split('T')[0];

  // Build navigation
  const navLinks = PRD_FILES.map(f =>
    `<a href="#${f.title.toLowerCase()}">${f.title}</a>`
  ).join('\n    ');

  // Build sections
  const sectionsHtml = sections.map((section, index) => {
    if (!section) return '';

    const config = PRD_FILES[index];
    return `
  <section id="${config.title.toLowerCase()}" class="layer">
    <div class="layer-header">
      <span class="layer-badge">Layer ${config.layer}</span>
      <span class="layer-meta">${config.title} (${config.readTime})</span>
    </div>
    ${section.html}
  </section>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName} - PRD</title>
  <style>${CSS}</style>
</head>
<body>
  <nav>
    <strong>${projectName} PRD:</strong>
    ${navLinks}
  </nav>
${sectionsHtml}
  <footer>
    Generated by <strong>Cognispec</strong> |
    <a href="https://github.com/anthropics/claude-code">Claude Code</a> |
    Generated: ${generatedDate}
  </footer>
</body>
</html>`;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const shouldBackup = args.includes('--backup') || args.includes('-b');

  console.log('Cognispec MD to HTML Converter');
  console.log('==============================\n');

  // Ensure directories exist
  fs.mkdirSync(HUMAN_DIR, { recursive: true });
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  // Create backup if requested and file exists
  if (shouldBackup) {
    createBackup();
  }

  // Parse all PRD files
  console.log('Parsing Markdown files...');
  const sections = PRD_FILES.map(config => {
    const filePath = path.join(PRD_DIR, config.file);
    const parsed = parseMarkdownFile(filePath);

    if (parsed) {
      console.log(`  [OK] ${config.file}`);
    } else {
      console.log(`  [--] ${config.file} (not found)`);
    }

    return parsed;
  });

  // Check if we have any content
  const hasContent = sections.some(s => s !== null);
  if (!hasContent) {
    console.error('\nError: No PRD files found.');
    console.error('Run /prd to generate PRD documents first.');
    process.exit(1);
  }

  // Generate HTML
  console.log('\nGenerating HTML...');
  const html = generateHTML(sections);

  // Write output
  fs.writeFileSync(OUTPUT_FILE, html, 'utf-8');
  console.log(`\nHTML generated: ${OUTPUT_FILE}`);
  console.log('\nOpen in browser to view the interactive PRD.');
}

// Run
main();
