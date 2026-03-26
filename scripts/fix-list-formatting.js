#!/usr/bin/env node

/**
 * Fix list formatting issues in MDX files:
 * 1. Remove blank lines between consecutive list items
 * 2. Remove empty list items (just "- " or "1. " with no content)
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

let totalFixed = 0;

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Process line by line for more precise control
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty list items (just "- " or "1. ")
    if (/^- $/.test(trimmed) || /^\d+\. $/.test(trimmed)) {
      i++;
      continue;
    }

    // Check if current line is a list item
    const isListItem = /^- .+/.test(trimmed) || /^\d+\. .+/.test(trimmed);

    if (isListItem) {
      result.push(line);
      i++;

      // Look ahead and remove blank lines before next list item
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();

        // If blank line, peek further
        if (nextTrimmed === '') {
          // Check if there's a list item coming up
          let j = i + 1;
          while (j < lines.length && lines[j].trim() === '') {
            j++;
          }

          if (j < lines.length) {
            const futureLineMatch = /^- .+/.test(lines[j].trim()) || /^\d+\. .+/.test(lines[j].trim());
            // Also skip empty list items
            const futureLineEmpty = /^- $/.test(lines[j].trim()) || /^\d+\. $/.test(lines[j].trim());

            if (futureLineMatch || futureLineEmpty) {
              // Skip this blank line(s) - list continues
              i = j;
              continue;
            }
          }
          // Not followed by list item, keep the blank line and stop
          break;
        }

        // Not a blank line, stop
        break;
      }
    } else {
      result.push(line);
      i++;
    }
  }

  content = result.join('\n');

  // Clean up multiple consecutive blank lines (max 2 newlines = 1 blank line)
  content = content.replace(/\n{3,}/g, '\n\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    totalFixed++;
    console.log(`Fixed: ${filename}`);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);
