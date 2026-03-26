#!/usr/bin/env node
/**
 * WordPress to MDX Migration Script
 * Converts WordPress XML export to MDX blog posts
 */

const fs = require('fs')
const path = require('path')
const { XMLParser } = require('fast-xml-parser')

const INPUT_FILE = process.argv[2] || '/Users/adrianching/Downloads/Personal/upstackstudio.WordPress.2026-03-19.xml'
const OUTPUT_DIR = path.join(__dirname, '..', 'content', 'blog')

// Helper to extract value from CDATA wrapper
function getCdata(val) {
  if (val === null || val === undefined) return ''
  if (typeof val === 'object' && val.__cdata !== undefined) return val.__cdata
  if (typeof val === 'object' && val['#text'] !== undefined) return val['#text']
  return String(val)
}

// Author mapping
const AUTHORS = {
  adrianchinghc: 'Adrian Ching',
  ashraf: 'Ashraf Farid',
  Ainina: 'Ainina',
  elly: 'Elly Razali',
}

// Clean WordPress block comments and convert to clean MDX
function cleanContent(html) {
  if (!html) return ''

  let content = html

  // Remove WordPress block comments
  content = content.replace(/<!-- \/?wp:[^>]+ -->/g, '')
  content = content.replace(/<!-- wp:[^}]+} -->/g, '')

  // Convert WordPress embeds to proper format
  content = content.replace(
    /<figure class="wp-block-embed[^"]*"[^>]*>[\s\S]*?<div class="wp-block-embed__wrapper">\s*(https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))\s*<\/div>[\s\S]*?<\/figure>/g,
    '\n<YouTubeEmbed videoId="$2" />\n'
  )

  // Convert YouTube URLs in embeds
  content = content.replace(
    /https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
    '<YouTubeEmbed videoId="$1" />'
  )

  // Convert figure/img to markdown images
  content = content.replace(
    /<figure[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>([\s\S]*?)<\/figure>/gi,
    (_, src, alt) => `\n![${alt}](${src})\n`
  )

  // Convert standalone img tags
  content = content.replace(
    /<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>/gi,
    '![$2]($1)'
  )

  // Convert headings
  content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
  content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
  content = content.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n')
  content = content.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n')

  // Convert blockquotes
  content = content.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    const text = inner.replace(/<\/?p[^>]*>/gi, '').trim()
    return '\n> ' + text.split('\n').join('\n> ') + '\n'
  })

  // Convert code blocks
  content = content.replace(
    /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
    '\n```\n$1\n```\n'
  )
  content = content.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')

  // Convert lists
  content = content.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    return inner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1') + '\n'
  })
  content = content.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    let counter = 0
    return inner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, () => `${++counter}. `) + '\n'
  })

  // Fix ordered list items properly
  content = content.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, inner) => {
    let counter = 0
    const items = inner.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
    return items.map(item => {
      counter++
      const text = item.replace(/<\/?li[^>]*>/gi, '').trim()
      return `${counter}. ${text}`
    }).join('\n') + '\n'
  })

  // Convert links
  content = content.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')

  // Convert paragraphs
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')

  // Convert strong/bold
  content = content.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
  content = content.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')

  // Convert em/italic
  content = content.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
  content = content.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')

  // Remove remaining HTML tags
  content = content.replace(/<br\s*\/?>/gi, '\n')
  content = content.replace(/<hr\s*\/?>/gi, '\n---\n')
  content = content.replace(/<div[^>]*>/gi, '\n')
  content = content.replace(/<\/div>/gi, '\n')
  content = content.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1')
  content = content.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '*$1*')

  // Clean up CDATA
  content = content.replace(/<!\[CDATA\[/g, '')
  content = content.replace(/\]\]>/g, '')

  // Decode HTML entities
  content = content.replace(/&amp;/g, '&')
  content = content.replace(/&lt;/g, '<')
  content = content.replace(/&gt;/g, '>')
  content = content.replace(/&quot;/g, '"')
  content = content.replace(/&#8217;/g, "'")
  content = content.replace(/&#8216;/g, "'")
  content = content.replace(/&#8220;/g, '"')
  content = content.replace(/&#8221;/g, '"')
  content = content.replace(/&#8211;/g, '–')
  content = content.replace(/&#8212;/g, '—')
  content = content.replace(/&nbsp;/g, ' ')
  content = content.replace(/&#038;/g, '&')

  // Clean up extra whitespace
  content = content.replace(/\n{3,}/g, '\n\n')
  content = content.trim()

  return content
}

// Extract slug from WordPress URL
function extractSlug(link) {
  if (!link) return null
  const match = link.match(/\/blog\/([^/]+)\/?$/)
  if (match) return match[1]
  // Fallback: get last path segment
  const segments = link.replace(/\/$/, '').split('/')
  return segments[segments.length - 1]
}

// Generate frontmatter
function generateFrontmatter(post) {
  const link = getCdata(post.link)
  const slug = extractSlug(link) || getCdata(post['wp:post_name']) || 'untitled'
  const rawTitle = getCdata(post.title) || 'Untitled'
  const title = rawTitle.replace(/"/g, '\\"')

  // Extract description from content or use empty
  let description = ''
  const contentRaw = getCdata(post['content:encoded'])
  if (contentRaw) {
    // Get first paragraph as description
    const firstP = contentRaw.match(/<p[^>]*>([^<]+)<\/p>/i)
    if (firstP) {
      description = firstP[1]
        .replace(/<[^>]+>/g, '')
        .replace(/"/g, '\\"')
        .substring(0, 200)
        .trim()
      if (description.length === 200) description += '...'
    }
  }

  // Parse date
  let date = ''
  const pubDate = getCdata(post.pubDate)
  if (pubDate) {
    try {
      date = new Date(pubDate).toISOString().split('T')[0]
    } catch {
      date = ''
    }
  }

  // Get author
  const authorKey = getCdata(post['dc:creator'])
  const author = AUTHORS[authorKey] || 'Upstack Studio'

  // Get categories and tags
  let category = 'Product Development'
  const tags = []

  if (Array.isArray(post.category)) {
    post.category.forEach(cat => {
      if (typeof cat === 'object') {
        const catValue = getCdata(cat) || cat['@_nicename']
        if (cat['@_domain'] === 'category' && catValue) {
          category = catValue
        } else if (cat['@_domain'] === 'post_tag' && catValue) {
          tags.push(catValue)
        }
      } else if (typeof cat === 'string') {
        category = cat
      }
    })
  } else if (post.category) {
    if (typeof post.category === 'object') {
      const catValue = getCdata(post.category) || post.category['@_nicename']
      if (catValue) category = catValue
    } else {
      category = post.category
    }
  }

  return {
    slug,
    frontmatter: `---
title: "${title}"
description: "${description}"
date: "${date}"
author: "${author}"
category: "${category}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
canonical: "https://upstackstudio.com/blog/${slug}"
---`
  }
}

async function migrate() {
  console.log('📖 Reading WordPress XML export...')

  const xml = fs.readFileSync(INPUT_FILE, 'utf-8')

  console.log('🔍 Parsing XML...')

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text',
    cdataPropName: '__cdata',
    preserveOrder: false,
  })

  const result = parser.parse(xml)
  let items = result.rss.channel.item

  // Ensure items is an array
  if (!Array.isArray(items)) {
    items = items ? [items] : []
  }

  console.log(`📦 Total items in XML: ${items.length}`)

  // Filter for published posts only
  const posts = items.filter(item => {
    const postType = getCdata(item['wp:post_type']).trim()
    const status = getCdata(item['wp:status']).trim()
    return postType === 'post' && status === 'publish'
  })

  console.log(`📝 Found ${posts.length} published blog posts`)

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  let migrated = 0
  let skipped = 0
  const errors = []

  for (const post of posts) {
    try {
      const { slug, frontmatter } = generateFrontmatter(post)
      const content = cleanContent(getCdata(post['content:encoded']))

      if (!slug || slug === 'untitled') {
        console.log(`⚠️  Skipping post with no slug: ${post.title}`)
        skipped++
        continue
      }

      const mdxContent = `${frontmatter}\n\n${content}\n`
      const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`)

      fs.writeFileSync(outputPath, mdxContent, 'utf-8')
      migrated++

      if (migrated % 20 === 0) {
        console.log(`✅ Migrated ${migrated}/${posts.length} posts...`)
      }
    } catch (err) {
      errors.push({ title: post.title, error: err.message })
      console.error(`❌ Error migrating: ${post.title}`)
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✅ Migration complete!`)
  console.log(`   Migrated: ${migrated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Errors: ${errors.length}`)

  if (errors.length > 0) {
    console.log('\nErrors:')
    errors.forEach(e => console.log(`  - ${e.title}: ${e.error}`))
  }
}

migrate().catch(console.error)
