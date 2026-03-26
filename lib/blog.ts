import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  canonical: string
  readingTime: string
  content: string
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function getAllPostSlugs(): string[] {
  ensureBlogDir()
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map((f) => f.replace(/\.(mdx|md)$/, ''))
  } catch {
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir()
  const filePaths = [path.join(BLOG_DIR, `${slug}.mdx`), path.join(BLOG_DIR, `${slug}.md`)]

  const filePath = filePaths.find((p) => fs.existsSync(p))
  if (!filePath) return null

  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)

    return {
      slug: data.slug || slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Upstack Studio',
      category: data.category || 'Product Development',
      tags: Array.isArray(data.tags) ? data.tags : [],
      canonical: data.canonical || `https://upstackstudio.com/blog/${slug}`,
      readingTime: rt.text,
      content,
    }
  } catch {
    return null
  }
}

export function getAllPosts(category?: string): BlogPostMeta[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _content, ...meta } = post
      return meta
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .filter((p) => !category || category === 'All' || p.category === category)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export const POSTS_PER_PAGE = 20
