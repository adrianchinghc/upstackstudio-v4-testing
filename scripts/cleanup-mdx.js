#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const blogDir = path.join(__dirname, '..', 'content', 'blog')

// Files known to have problematic content
const problemFiles = [
  'crm-real-estate.mdx',
  'custom-booking-app-development.mdx',
  'custom-fitness-app-development.mdx',
  'custom-iot-application-development.mdx',
  'custom-mobile-marketplace-development.mdx',
  'custom-software-roi.mdx',
  'software-development-pricing-model.mdx',
  'custom-loyalty-app-development.mdx',
]

function cleanContent(content) {
  // Remove HTML comments (single line and multi-line)
  content = content.replace(/<!--[\s\S]*?-->/g, '')

  // Remove <script>...</script> tags and their content
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '')

  // Remove unclosed/partial script tags
  content = content.replace(/<script[\s\S]*$/gi, '')

  // Remove <button>...</button> tags
  content = content.replace(/<button[\s\S]*?<\/button>/gi, '')

  // Remove unclosed button tags
  content = content.replace(/<\/button>/gi, '')

  // Remove form input elements
  content = content.replace(/<input[^>]*>/gi, '')

  // Remove label elements with form associations
  content = content.replace(/<label[^>]*>[\s\S]*?<\/label>/gi, '')

  // Remove div elements with style attributes (typically form containers)
  content = content.replace(/<div[^>]*style="[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')

  // Remove figure and table elements (convert to markdown tables where possible)
  content = content.replace(
    /<figure[^>]*class="wp-block-table"[^>]*>([\s\S]*?)<\/figure>/gi,
    (match, inner) => {
      // Try to extract table content
      const rows = []
      const rowMatches = inner.match(/<tr>([\s\S]*?)<\/tr>/gi)
      if (rowMatches) {
        rowMatches.forEach((row, idx) => {
          const cells = []
          const cellMatches = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi)
          if (cellMatches) {
            cellMatches.forEach((cell) => {
              const cellContent = cell
                .replace(/<td[^>]*>/gi, '')
                .replace(/<\/td>/gi, '')
                .trim()
              cells.push(cellContent)
            })
          }
          if (cells.length > 0) {
            rows.push('| ' + cells.join(' | ') + ' |')
            if (idx === 0) {
              rows.push('|' + cells.map(() => '---').join('|') + '|')
            }
          }
        })
      }
      return rows.length > 0 ? rows.join('\n') : ''
    }
  )

  // Remove remaining HTML table elements
  content = content.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, '')
  content = content.replace(/<tbody[^>]*>[\s\S]*?<\/tbody>/gi, '')
  content = content.replace(/<thead[^>]*>[\s\S]*?<\/thead>/gi, '')
  content = content.replace(/<tr[^>]*>[\s\S]*?<\/tr>/gi, '')
  content = content.replace(/<td[^>]*>[\s\S]*?<\/td>/gi, '')
  content = content.replace(/<th[^>]*>[\s\S]*?<\/th>/gi, '')

  // Remove empty divs
  content = content.replace(/<div[^>]*>\s*<\/div>/gi, '')

  // Remove remaining unclosed divs
  content = content.replace(/<div[^>]*>/gi, '')
  content = content.replace(/<\/div>/gi, '')

  // Remove multiple consecutive empty lines (more than 2)
  content = content.replace(/\n{4,}/g, '\n\n\n')

  // Remove lines that are just whitespace
  content = content
    .split('\n')
    .filter((line) => line.trim() !== '' || line === '')
    .join('\n')

  return content
}

problemFiles.forEach((filename) => {
  const filePath = path.join(blogDir, filename)
  if (fs.existsSync(filePath)) {
    console.log(`Cleaning: ${filename}`)
    let content = fs.readFileSync(filePath, 'utf-8')
    const cleaned = cleanContent(content)
    fs.writeFileSync(filePath, cleaned)
    console.log(`  Done.`)
  } else {
    console.log(`  Skipping ${filename} - file not found`)
  }
})

console.log('\nCleanup complete!')
