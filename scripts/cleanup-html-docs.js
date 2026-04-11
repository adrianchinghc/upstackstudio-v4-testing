#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const blogDir = path.join(__dirname, '..', 'content', 'blog')

// Files with embedded HTML documents
const problemFiles = [
  'custom-booking-app-development.mdx',
  'custom-fitness-app-development.mdx',
  'custom-iot-application-development.mdx',
  'custom-loyalty-app-development.mdx',
  'custom-mobile-marketplace-development.mdx',
]

function cleanContent(content) {
  // Remove entire HTML document blocks (<!DOCTYPE html>...</html>)
  content = content.replace(/<!DOCTYPE html>[\s\S]*?<\/html>/gi, '')

  // Remove SVG elements
  content = content.replace(/<svg[\s\S]*?<\/svg>/gi, '')

  // Remove textarea elements
  content = content.replace(/<textarea[\s\S]*?<\/textarea>/gi, '')

  // Remove style tags and their content
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '')

  // Remove span tags with style attributes
  content = content.replace(/<span[^>]*style="[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '')

  // Remove pre tags without content
  content = content.replace(/<pre[^>]*>\s*<\/pre>/gi, '')

  // Remove script tags
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '')
  content = content.replace(/<script[\s\S]*$/gi, '')

  // Remove figure tags
  content = content.replace(/<figure[^>]*>/gi, '')
  content = content.replace(/<\/figure>/gi, '')

  // Remove button elements
  content = content.replace(/<button[\s\S]*?<\/button>/gi, '')
  content = content.replace(/<\/button>/gi, '')

  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '')

  // Remove input elements
  content = content.replace(/<input[^>]*>/gi, '')

  // Remove label elements with their content
  content = content.replace(/<label[^>]*>[\s\S]*?<\/label>/gi, '')

  // Remove p tags (opening only, keep content)
  content = content.replace(/<p>/gi, '')
  content = content.replace(/<\/p>/gi, '')

  // Remove div tags (opening only, keep content)
  content = content.replace(/<div[^>]*>/gi, '')
  content = content.replace(/<\/div>/gi, '')

  // Clean up multiple consecutive empty lines
  content = content.replace(/\n{4,}/g, '\n\n\n')

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
