#!/usr/bin/env node

/**
 * Remove broken WordPress image references (404s) from MDX files
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'content', 'blog');

// Known broken image URLs (404s)
const brokenUrls = [
  'https://upstackstudio.com/wp-content/uploads/2022/08/AIDA.png',
  'https://upstackstudio.com/wp-content/uploads/2022/08/old-word.jpg',
  'https://upstackstudio.com/wp-content/uploads/2022/09/blog-3-1024x535.jpg',
  'https://upstackstudio.com/wp-content/uploads/2022/09/borat-1024x578.jpeg',
  'https://upstackstudio.com/wp-content/uploads/2022/11/bad-email-edited.jpg',
  'https://upstackstudio.com/wp-content/uploads/2022/09/seniorvsjuniordev.jpg',
  'https://upstackstudio.com/wp-content/uploads/2022/09/snake_nokia_3310.jpeg',
  'https://upstackstudio.com/wp-content/uploads/2024/02/continuum-of-co',
];

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

let totalFixed = 0;

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  brokenUrls.forEach(url => {
    // Remove markdown image syntax with this URL
    // Pattern: ![any alt text](broken-url)
    const regex = new RegExp(`!\\[[^\\]]*\\]\\(${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^)]*\\)\\n?`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, '');
      modified = true;
    }
  });

  // Also remove any incomplete URL patterns (just the directory)
  content = content.replace(/!\[[^\]]*\]\(https:\/\/upstackstudio\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/\)\n?/g, '');

  // Clean up multiple blank lines that may result
  content = content.replace(/\n{3,}/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${filename}`);
    totalFixed++;
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);

// Verify no WordPress URLs remain
const remaining = [];
files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.match(/upstackstudio\.com\/wp-content\/uploads/g);
  if (matches) {
    remaining.push({ file: filename, count: matches.length });
  }
});

if (remaining.length > 0) {
  console.log('\nFiles still containing WordPress URLs:');
  remaining.forEach(r => console.log(`  ${r.file}: ${r.count} occurrences`));
} else {
  console.log('\nAll WordPress URLs have been removed or converted!');
}
