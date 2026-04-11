const fs = require('fs')
const { XMLParser } = require('fast-xml-parser')
const xml = fs.readFileSync(
  '/Users/adrianching/Downloads/Personal/upstackstudio.WordPress.2026-03-19.xml',
  'utf-8'
)

// Use the EXACT same parser config as the script
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
  preserveOrder: false,
})
const result = parser.parse(xml)
let items = result.rss.channel.item

// Same array check
if (!Array.isArray(items)) {
  items = items ? [items] : []
}

console.log('Total items:', items.length)

// Check first item
console.log('First item wp:post_type:', JSON.stringify(items[0]['wp:post_type']))
console.log('First item wp:status:', JSON.stringify(items[0]['wp:status']))

// Apply same filter
const posts = items.filter((item) => {
  const postType = String(item['wp:post_type'] || '').trim()
  const status = String(item['wp:status'] || '').trim()
  return postType === 'post' && status === 'publish'
})
console.log('Filtered posts:', posts.length)
