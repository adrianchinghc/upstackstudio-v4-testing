/**
 * WordPress to MDX Migration Script
 *
 * Usage: npx ts-node scripts/migrate-wordpress.ts
 * Requires: wordpress-export.xml in project root
 * Produces: content/blog/*.mdx (one file per published post)
 * Verify: ls content/blog/ | wc -l  →  should return 203
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { parseStringPromise } from 'xml2js'
import TurndownService from 'turndown'

async function migrate() {
  const xmlPath = './wordpress-export.xml'
  if (!existsSync(xmlPath)) {
    console.error('❌ wordpress-export.xml not found in project root.')
    console.error('   Copy the export file here and run again.')
    process.exit(1)
  }

  const xml = readFileSync(xmlPath, 'utf-8')
  const parsed = await parseStringPromise(xml)
  const items = parsed.rss.channel[0].item || []

  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  })

  const blogDir = './content/blog'
  if (!existsSync(blogDir)) mkdirSync(blogDir, { recursive: true })

  let count = 0
  let skipped = 0

  for (const item of items) {
    // Only published posts
    if (item['wp:post_type']?.[0] !== 'post') continue
    if (item['wp:status']?.[0] !== 'publish') { skipped++; continue }

    const title = (item.title?.[0] || '').replace(/"/g, '\\"').replace(/\n/g, ' ').trim()
    const slug = item['wp:post_name']?.[0] || ''
    const date = item['wp:post_date']?.[0]?.substring(0, 10) || ''
    const html = item['content:encoded']?.[0] || ''
    const excerptHtml = item['excerpt:encoded']?.[0] || ''

    const cats = (item.category || [])
      .filter((c: Record<string, Record<string, string>>) => c.$?.domain === 'category')
      .map((c: Record<string, string>) => c._)

    const tags = (item.category || [])
      .filter((c: Record<string, Record<string, string>>) => c.$?.domain === 'post_tag')
      .map((c: Record<string, string>) => c._)

    if (!slug) { skipped++; continue }

    const body = td.turndown(html)
    const rawDesc = td.turndown(excerptHtml).substring(0, 155).replace(/\n/g, ' ')
    const desc = rawDesc.replace(/"/g, '\\"')

    const categoryName = cats[0] || 'Product Development'
    const tagsStr = [...cats, ...tags].map((t: string) => `"${t}"`).join(', ')

    const fm = [
      '---',
      `title: "${title}"`,
      `description: "${desc}"`,
      `date: "${date}"`,
      `author: "Upstack Studio"`,
      `category: "${categoryName}"`,
      `tags: [${tagsStr}]`,
      `slug: "${slug}"`,
      `canonical: "https://upstackstudio.com/blog/${slug}"`,
      '---',
      '',
    ].join('\n')

    writeFileSync(`${blogDir}/${slug}.mdx`, fm + body)
    count++
  }

  console.log(`✓ Migrated ${count} posts`)
  console.log(`  Skipped ${skipped} (drafts, pages, etc.)`)
  console.log(`\n  Verify: ls content/blog/ | wc -l`)
}

migrate().catch(console.error)
