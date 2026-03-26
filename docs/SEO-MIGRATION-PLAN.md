# SEO Migration Plan: WordPress → Next.js

## Overview

This document outlines the SEO migration strategy to preserve Domain Authority (DA), rankings, and organic traffic when migrating from WordPress to Next.js.

---

## Current State Analysis

### WordPress Site Structure (from sitemap)

**Pages (19 total):**
- `/` - Homepage
- `/blog/` - Blog index
- `/about/`
- `/work/`
- `/roadmap/`
- `/strategy-session/`
- `/careers/`
- `/faq/`
- `/privacy-policy/`
- `/affiliate-disclaimer/`
- `/search/`
- `/schedule/`
- `/thanks/`
- `/almost-done/`
- `/clutch-top-rated-app-development-agency/`
- `/zero-to-app-ready/`
- `/app-developer-interview-questions/`
- `/app-brief-template/`
- `/app-validation-blueprint/`

**Landing Pages (2):**
- `/course/`
- `/app-development-mistakes-ebook/`

**Blog Posts:** 200+ posts at `/blog/[slug]/` (with trailing slash)

**Category Pages (12):**
- `/blog/category/product-growth/`
- `/blog/category/inside-upstack-studio/`
- `/blog/category/tech/`
- `/blog/category/insightful-stories/`
- `/blog/category/product-design/`
- `/blog/category/no-code-low-code/`
- `/blog/category/vibe-coding/`
- `/blog/category/workflow-automation/`
- `/blog/category/product-development/`
- `/blog/category/ai/`
- `/blog/category/web-app/`
- `/blog/category/mobile-app/`

### New Site Structure

**Implemented:**
- `/` - Homepage
- `/about`
- `/work`
- `/services` + 5 sub-pages
- `/strategy-session`
- `/contact`
- `/testimonials`
- `/resources`
- `/blog` + 203 posts
- `/thank-you`
- Geo pages: `/malaysia`, `/singapore`, `/australia`, `/united-kingdom`, `/united-states`, `/indonesia`, `/thailand`, `/philippines`

---

## Action Items

### 1. ✅ DONE - Basic Redirects (in next.config.ts)

```typescript
// Already implemented
{ source: '/blog/:slug/', destination: '/blog/:slug', permanent: true }, // trailing slash
{ source: '/category/:cat*', destination: '/blog', permanent: true },
{ source: '/author/:author*', destination: '/blog', permanent: true },
{ source: '/tag/:tag*', destination: '/blog', permanent: true },
```

### 2. 🔴 TODO - Add Missing Page Redirects

Add these redirects to `next.config.ts`:

```typescript
async redirects() {
  return [
    // Existing redirects...

    // WordPress legacy page redirects
    { source: '/roadmap/', destination: '/strategy-session', permanent: true },
    { source: '/roadmap', destination: '/strategy-session', permanent: true },
    { source: '/faq/', destination: '/#faq', permanent: true },
    { source: '/faq', destination: '/#faq', permanent: true },
    { source: '/schedule/', destination: '/strategy-session', permanent: true },
    { source: '/schedule', destination: '/strategy-session', permanent: true },
    { source: '/thanks/', destination: '/thank-you', permanent: true },
    { source: '/thanks', destination: '/thank-you', permanent: true },
    { source: '/almost-done/', destination: '/thank-you', permanent: true },
    { source: '/almost-done', destination: '/thank-you', permanent: true },
    { source: '/careers/', destination: '/about', permanent: true },
    { source: '/careers', destination: '/about', permanent: true },
    { source: '/search/', destination: '/blog', permanent: true },
    { source: '/search', destination: '/blog', permanent: true },

    // Lead magnets → Strategy session (capture intent)
    { source: '/app-developer-interview-questions/', destination: '/strategy-session', permanent: true },
    { source: '/app-developer-interview-questions', destination: '/strategy-session', permanent: true },
    { source: '/app-brief-template/', destination: '/strategy-session', permanent: true },
    { source: '/app-brief-template', destination: '/strategy-session', permanent: true },
    { source: '/app-validation-blueprint/', destination: '/strategy-session', permanent: true },
    { source: '/app-validation-blueprint', destination: '/strategy-session', permanent: true },
    { source: '/zero-to-app-ready/', destination: '/strategy-session', permanent: true },
    { source: '/zero-to-app-ready', destination: '/strategy-session', permanent: true },
    { source: '/course/', destination: '/strategy-session', permanent: true },
    { source: '/course', destination: '/strategy-session', permanent: true },
    { source: '/app-development-mistakes-ebook/', destination: '/strategy-session', permanent: true },
    { source: '/app-development-mistakes-ebook', destination: '/strategy-session', permanent: true },

    // Clutch page → Work/testimonials
    { source: '/clutch-top-rated-app-development-agency/', destination: '/work', permanent: true },
    { source: '/clutch-top-rated-app-development-agency', destination: '/work', permanent: true },

    // Legal pages (create or redirect)
    { source: '/privacy-policy/', destination: '/privacy-policy', permanent: true },
    { source: '/affiliate-disclaimer/', destination: '/privacy-policy', permanent: true },
    { source: '/affiliate-disclaimer', destination: '/privacy-policy', permanent: true },

    // Category pages → Blog with filter (or just blog)
    { source: '/blog/category/:cat/', destination: '/blog', permanent: true },
    { source: '/blog/category/:cat', destination: '/blog', permanent: true },

    // Trailing slashes for all main pages
    { source: '/about/', destination: '/about', permanent: true },
    { source: '/work/', destination: '/work', permanent: true },
    { source: '/services/', destination: '/services', permanent: true },
    { source: '/contact/', destination: '/contact', permanent: true },
    { source: '/testimonials/', destination: '/testimonials', permanent: true },
    { source: '/resources/', destination: '/resources', permanent: true },
  ]
}
```

### 3. 🔴 TODO - Create Missing Pages

**Required pages to create:**
- [ ] `/privacy-policy` - Privacy policy page
- [ ] `/terms` - Terms of service (optional but recommended)

### 4. 🔴 TODO - Add Structured Data (JSON-LD)

Create `components/seo/JsonLd.tsx`:

```typescript
// Organization schema for homepage
export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Upstack Studio",
          "url": "https://upstackstudio.com",
          "logo": "https://upstackstudio.com/logo-dark.svg",
          "description": "AI-enabled software engineering for established, growing companies.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kuala Lumpur",
            "addressCountry": "MY"
          },
          "sameAs": [
            "https://www.linkedin.com/company/upstack-studio/",
            "https://www.instagram.com/upstackstudio/",
            "https://youtube.com/@adrianchinghc"
          ]
        })
      }}
    />
  )
}

// Article schema for blog posts
export function ArticleJsonLd({ post }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.description,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date,
          "publisher": {
            "@type": "Organization",
            "name": "Upstack Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://upstackstudio.com/logo-dark.svg"
            }
          }
        })
      }}
    />
  )
}

// Service schema for service pages
export function ServiceJsonLd({ name, description }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": name,
          "description": description,
          "provider": {
            "@type": "Organization",
            "name": "Upstack Studio"
          }
        })
      }}
    />
  )
}
```

### 5. 🔴 TODO - Verify Canonical URLs

Each page should have proper canonical URLs. Check:

- [ ] Homepage: `https://upstackstudio.com`
- [ ] Blog posts: `https://upstackstudio.com/blog/[slug]` (matches MDX frontmatter)
- [ ] Service pages: Full URLs without trailing slashes
- [ ] Geo pages: Full URLs

### 6. 🔴 TODO - Submit to Search Console

**Pre-launch:**
1. Add new sitemap to Google Search Console (GSC)
2. Request indexing for key pages
3. Monitor crawl errors

**Post-launch:**
1. Submit updated sitemap.xml
2. Use URL Inspection tool to check key pages
3. Monitor Index Coverage report for errors
4. Check for 404s in Coverage report
5. Submit any new redirects via "Remove URLs" if needed

### 7. 🔴 TODO - Update External Links

**High-priority backlinks to verify still work:**
- Clutch profile links
- Guest post backlinks
- Directory listings
- Social media profile links

### 8. ✅ DONE - Meta Tags

Already implemented in `app/layout.tsx`:
- Title template
- Meta description
- Open Graph tags
- Twitter cards
- Robots directives

### 9. 🔴 TODO - Image SEO

- [ ] Add alt text to all images (partially done in blog migration)
- [ ] Ensure images have descriptive filenames
- [ ] Add Open Graph images for all pages
- [ ] Create `opengraph-image.tsx` for dynamic OG images

### 10. 🔴 TODO - Performance (Core Web Vitals)

- [ ] Run Lighthouse audit
- [ ] Verify LCP < 2.5s
- [ ] Verify FID < 100ms
- [ ] Verify CLS < 0.1
- [ ] Enable static generation for all possible pages
- [ ] Optimize images with next/image

---

## Migration Checklist

### Pre-Launch
- [x] All redirects configured in next.config.ts
- [x] Privacy policy page created
- [x] JSON-LD structured data added
- [ ] All canonical URLs verified
- [x] Sitemap.xml complete and accurate
- [x] robots.txt configured correctly
- [ ] Core Web Vitals passing
- [ ] Mobile-friendly test passing
- [x] All blog posts migrated with correct URLs

### Launch Day
- [ ] Deploy to production
- [ ] Verify redirects working (test 10+ URLs)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor for crawl errors

### Post-Launch (Week 1)
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor 404 errors in analytics
- [ ] Verify key pages indexed
- [ ] Check rankings for top keywords
- [ ] Monitor organic traffic in analytics

### Post-Launch (Month 1)
- [ ] Compare organic traffic to pre-migration baseline
- [ ] Check Index Coverage report
- [ ] Fix any remaining redirect issues
- [ ] Update any broken backlinks if possible

---

## Risk Mitigation

### Temporary Traffic Drop
Expected: 10-20% drop for 2-4 weeks during re-indexing. This is normal.

**Mitigation:**
- Proper 301 redirects (not 302)
- Keep old domain active during transition
- Don't change URLs unnecessarily
- Maintain content parity

### Lost Rankings
**Mitigation:**
- Don't change page titles drastically
- Keep meta descriptions similar
- Maintain internal linking structure
- Keep content quality same or better

### Broken Backlinks
**Mitigation:**
- Comprehensive redirect map
- Test all known backlink URLs
- Reach out to high-value backlink sources if URLs changed

---

## Priority Order

1. **Critical (Do before launch):**
   - Add all missing redirects
   - Create privacy policy page
   - Verify all blog post URLs work

2. **High (Do within first week):**
   - Add JSON-LD structured data
   - Submit to Search Console
   - Monitor for 404s

3. **Medium (Do within first month):**
   - Optimize Core Web Vitals
   - Add OG images to all pages
   - Improve internal linking

4. **Low (Ongoing):**
   - Monitor rankings
   - Build new backlinks
   - Create new content
