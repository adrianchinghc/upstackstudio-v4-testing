#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'content', 'blog');

// Get all MDX files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

let totalFixed = 0;

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Fix 1: Remove **** (empty bold markers)
  content = content.replace(/\*\*\*\*/g, '');

  // Fix 2: Fix **text **pattern (space before closing)
  content = content.replace(/\*\*([^*]+) \*\*/g, '**$1**');

  // Fix 3: Fix ** followed by newline (dangling bold markers)
  content = content.replace(/\*\*\s*\n\*\*/g, '');
  content = content.replace(/\*\*\n\*\*/g, '');

  // Fix 4: Remove standalone ** on their own lines
  content = content.replace(/^\*\*$/gm, '');

  // Fix 5: Fix *text * pattern (space before closing italic)
  content = content.replace(/\*([^*\n]+) \*/g, '*$1*');

  // Fix 6: Remove excessive blank lines (more than 2 consecutive)
  content = content.replace(/\n{4,}/g, '\n\n');

  // Fix 7: Fix lists with excessive spacing between items
  // Pattern: "- item\n\n- item" where there's too much space
  content = content.replace(/^(- .+)\n\n\n+(- )/gm, '$1\n\n$2');

  // Fix 8: Clean up **text: ** patterns (colon with space before closing)
  content = content.replace(/\*\*([^*]+): \*\*/g, '**$1:** ');

  // Fix 9: Fix broken bold with newline inside: **text\nmore**
  // This is trickier - let's leave these for manual review

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
    console.log(`Fixed: ${filename}`);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);
