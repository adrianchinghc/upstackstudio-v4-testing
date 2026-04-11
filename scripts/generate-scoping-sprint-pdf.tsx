/**
 * Generates public/downloads/scoping-sprint-brief.pdf
 *
 * Run: npx tsx scripts/generate-scoping-sprint-pdf.tsx
 * Added to package.json as "prebuild" so it regenerates on every production build.
 *
 * Source of truth for content: context/offers.md + context/positioning.md
 * Update those files first, then rerun this script.
 */

import React from 'react'
import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
  renderToFile,
  Font,
} from '@react-pdf/renderer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.resolve(__dirname, '../public/downloads/scoping-sprint-brief.pdf')

// ── Styles ─────────────────────────────────────────────────────────
const BLUE = '#0A4DFF'
const BLACK = '#000000'
const DARK = '#1a1a1a'
const MUTED = '#737373'
const BORDER = '#e5e5e5'
const SURFACE = '#fafafa'

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: DARK,
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 56,
    lineHeight: 1.5,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  companyName: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    letterSpacing: 0.5,
  },
  companyTagline: {
    fontSize: 8,
    color: MUTED,
    marginTop: 2,
    letterSpacing: 0.3,
  },
  headerRight: {
    textAlign: 'right',
  },
  headerLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  headerValue: {
    fontSize: 9,
    color: DARK,
    marginTop: 1,
  },
  // Section label
  sectionLabel: {
    fontSize: 8,
    color: BLUE,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 6,
    fontFamily: 'Helvetica-Bold',
  },
  // Hero
  h1: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    lineHeight: 1.25,
    marginBottom: 10,
  },
  h1Accent: {
    color: BLUE,
  },
  h2: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    marginBottom: 8,
  },
  h3: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: BLACK,
    marginBottom: 4,
  },
  body: {
    fontSize: 9.5,
    color: DARK,
    lineHeight: 1.6,
    marginBottom: 6,
  },
  muted: {
    color: MUTED,
  },
  // Highlight box
  highlightBox: {
    backgroundColor: '#EEF3FF',
    borderRadius: 6,
    padding: 14,
    marginBottom: 16,
  },
  highlightPrice: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
    marginBottom: 2,
  },
  highlightSub: {
    fontSize: 8.5,
    color: MUTED,
  },
  // Price table
  priceTable: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingVertical: 8,
  },
  priceRowHeader: {
    backgroundColor: SURFACE,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 2,
  },
  priceCol1: {
    flex: 1.6,
  },
  priceCol2: {
    flex: 1,
    textAlign: 'right',
  },
  priceCol3: {
    flex: 1,
    textAlign: 'right',
  },
  priceTierName: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
  },
  priceTierDesc: {
    fontSize: 8,
    color: MUTED,
    marginTop: 1,
  },
  priceValue: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
  },
  priceValueBlue: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
  },
  colHeader: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: MUTED,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // Bullet list
  bullet: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletDot: {
    width: 12,
    fontSize: 9,
    color: BLUE,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: DARK,
    lineHeight: 1.5,
  },
  // Two column
  twoCol: {
    flexDirection: 'row',
    gap: 16,
  },
  col: {
    flex: 1,
  },
  // Trust strip
  trustStrip: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  trustItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
  },
  trustValue: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
    marginBottom: 2,
  },
  trustLabel: {
    fontSize: 8,
    color: MUTED,
    textAlign: 'center',
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 56,
    right: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },
  footerText: {
    fontSize: 8,
    color: MUTED,
  },
  footerLink: {
    fontSize: 8,
    color: BLUE,
  },
  // Divider
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginVertical: 12,
  },
  // Section spacing
  section: {
    marginBottom: 18,
  },
})

// ── Document ───────────────────────────────────────────────────────
const ScopingSprintBrief = () => (
  <Document
    title="Scoping Sprint — A Brief for Decision Makers"
    author="Upstack Studio"
    subject="Custom software for growing companies. Built with AI, launched in 16 weeks."
  >
    {/* ── Page 1 ─────────────────────────────────────────────── */}
    <Page size="A4" style={s.page}>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.companyName}>Upstack Studio</Text>
          <Text style={s.companyTagline}>Custom software for growing companies.</Text>
          <Text style={s.companyTagline}>Built with AI, launched in 16 weeks.</Text>
        </View>
        <View style={s.headerRight}>
          <Text style={s.headerLabel}>Petaling Jaya, Malaysia</Text>
          <Text style={s.headerValue}>hello@upstackstudio.com</Text>
          <Text style={s.headerValue}>upstackstudio.com</Text>
        </View>
      </View>

      {/* Hero */}
      <View style={s.section}>
        <Text style={s.sectionLabel}>Scoping Sprint</Text>
        <Text style={s.h1}>
          A two-week diagnostic that gives you{' '}
          <Text style={s.h1Accent}>a written plan you can defend internally.</Text>
        </Text>
        <Text style={s.body}>
          Before we build anything, we map everything. A senior engineer from our team sits with
          your operations team for two weeks, traces every manual workflow end to end, and delivers
          six written outputs — including a cost-of-inaction analysis and a fixed-price proposal for
          Phase 1 of the build.
        </Text>
        <Text style={s.body}>
          You keep the plan whether you build with us or not. It is not a proposal dressed up as a
          workshop. It is a paid diagnostic with a clear output and a 70% conversion rate to the
          next phase — because clients who go through it almost always want to act on what they
          find.
        </Text>
      </View>

      {/* Price highlight */}
      <View style={s.highlightBox}>
        <Text style={s.highlightPrice}>RM 15,000 · USD 15,000</Text>
        <Text style={s.highlightSub}>
          2 weeks · Senior-led · All six deliverables included · Full ownership of outputs
        </Text>
      </View>

      {/* What you get */}
      <View style={s.section}>
        <Text style={s.h2}>What you walk away with</Text>
        {[
          ['Written operational assessment', '30+ pages mapping every manual workflow in scope.'],
          [
            'Cost-of-inaction analysis',
            'What staying manual costs you in headcount hours and currency.',
          ],
          ['Phased digitalization roadmap', 'Sequenced plan with expected ROI per project.'],
          [
            'Build-vs-buy recommendation',
            'Honest answer for every candidate system. Sometimes the answer is Odoo.',
          ],
          [
            'Locked Phase 1 proposal',
            'Fixed scope, fixed price, fixed 16-week timeline for the build.',
          ],
          [
            'Leadership presentation',
            '60-minute findings session with Adrian presenting personally.',
          ],
        ].map(([title, desc], i) => (
          <View key={i} style={s.bullet}>
            <Text style={s.bulletDot}>{i + 1}.</Text>
            <Text style={s.bulletText}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>{title} — </Text>
              {desc}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={s.footer} fixed>
        <Text style={s.footerText}>
          Upstack Studio · Petaling Jaya, Selangor, Malaysia · Confidential
        </Text>
        <Text style={s.footerText}>Page 1 of 2</Text>
      </View>
    </Page>

    {/* ── Page 2 ─────────────────────────────────────────────── */}
    <Page size="A4" style={s.page}>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.companyName}>Upstack Studio</Text>
          <Text style={s.companyTagline}>upstackstudio.com</Text>
        </View>
        <View style={s.headerRight}>
          <Text style={s.headerLabel}>Three-tier offer architecture</Text>
        </View>
      </View>

      {/* Offer architecture */}
      <View style={s.section}>
        <Text style={s.h2}>The full offer architecture</Text>
        <Text style={s.body}>
          The Scoping Sprint is the entry point. Most clients flow from Sprint to a Zero to Launch
          build, then into a DevSub retainer. Each tier is fixed-price, fixed-scope, fixed-timeline.
          No discounts. No "custom tier."
        </Text>

        <View style={s.priceTable}>
          {/* Table header */}
          <View style={[s.priceRow, { borderBottomWidth: 2, borderBottomColor: DARK }]}>
            <View style={s.priceCol1}>
              <Text style={s.colHeader}>Tier</Text>
            </View>
            <View style={s.priceCol2}>
              <Text style={[s.colHeader, { textAlign: 'right' }]}>Malaysia (RM)</Text>
            </View>
            <View style={s.priceCol3}>
              <Text style={[s.colHeader, { textAlign: 'right' }]}>International (USD)</Text>
            </View>
          </View>

          {/* Scoping Sprint */}
          {[
            {
              tier: 'Scoping Sprint',
              desc: '2 weeks · Diagnosis + plan',
              myr: 'RM 15,000',
              usd: 'USD 15,000',
              highlight: true,
            },
            {
              tier: 'ZTL Essential',
              desc: '16 weeks · Single workflow rebuild',
              myr: 'RM 180,000',
              usd: 'USD 55,000',
              highlight: false,
            },
            {
              tier: 'ZTL Growth',
              desc: '16 weeks · Multi-workflow + mobile',
              myr: 'RM 280,000',
              usd: 'USD 85,000',
              highlight: false,
            },
            {
              tier: 'ZTL Scale',
              desc: '16–20 weeks · AI-embedded, complex',
              myr: 'RM 380,000',
              usd: 'USD 115,000',
              highlight: false,
            },
            {
              tier: 'DevSub Essential',
              desc: 'Monthly · ~40 hrs maintenance',
              myr: 'RM 12,500/mo',
              usd: 'USD 3,500/mo',
              highlight: false,
            },
            {
              tier: 'DevSub Growth',
              desc: 'Monthly · ~100 hrs active development',
              myr: 'RM 28,500/mo',
              usd: 'USD 8,500/mo',
              highlight: false,
            },
            {
              tier: 'DevSub Scale',
              desc: 'Monthly · ~160 hrs + 4h SLA',
              myr: 'RM 42,500/mo',
              usd: 'USD 12,500/mo',
              highlight: false,
            },
          ].map((row, i) => (
            <View
              key={i}
              style={[
                s.priceRow,
                row.highlight
                  ? { backgroundColor: '#EEF3FF', paddingHorizontal: 4, borderRadius: 4 }
                  : {},
              ]}
            >
              <View style={s.priceCol1}>
                <Text style={row.highlight ? s.priceValueBlue : s.priceTierName}>{row.tier}</Text>
                <Text style={s.priceTierDesc}>{row.desc}</Text>
              </View>
              <View style={s.priceCol2}>
                <Text style={row.highlight ? s.priceValueBlue : s.priceValue}>{row.myr}</Text>
              </View>
              <View style={s.priceCol3}>
                <Text style={row.highlight ? s.priceValueBlue : s.priceValue}>{row.usd}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={[s.body, s.muted]}>
          All prices fixed. No discounts. No add-ons. If scope changes, we rescope the tier — we do
          not change the price.
        </Text>
      </View>

      <View style={s.divider} />

      {/* Trust signals */}
      <View style={[s.section]}>
        <Text style={s.h2}>Track record</Text>
        <View style={s.trustStrip}>
          {[
            { value: '4.9★', label: 'Clutch rating' },
            { value: '7+', label: 'Years in business' },
            { value: '25+', label: 'Projects completed' },
            { value: '40+', label: 'Clients served' },
          ].map((t, i) => (
            <View key={i} style={s.trustItem}>
              <Text style={s.trustValue}>{t.value}</Text>
              <Text style={s.trustLabel}>{t.label}</Text>
            </View>
          ))}
        </View>
        <Text style={[s.body, s.muted]}>
          Clients include Daikin Malaysia, Magnum 4D, BookXcess (15x ecommerce revenue growth),
          Teleme, The Malaysian Insight, and AFA Malaysia.
        </Text>
      </View>

      <View style={s.divider} />

      {/* Contact */}
      <View style={s.section}>
        <Text style={s.h2}>Book the discovery call</Text>
        <Text style={s.body}>
          The 45-minute discovery call is free, senior-led, and will not waste your time. Adrian
          takes every first call personally. If the fit is right, we explain the Scoping Sprint in
          detail. If it is not, we tell you honestly.
        </Text>

        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.h3}>Adrian Ching</Text>
            <Text style={[s.body, { marginBottom: 2 }]}>Founder, Upstack Studio</Text>
            <Text style={[s.body, s.muted]}>hello@upstackstudio.com</Text>
            <Link src="https://upstackstudio.com/strategy-session" style={s.footerLink}>
              upstackstudio.com/strategy-session
            </Link>
          </View>
          <View style={s.col}>
            <Text style={s.h3}>Upstack Studio</Text>
            <Text style={[s.body, s.muted]}>Petaling Jaya, Selangor, Malaysia</Text>
            <Text style={[s.body, s.muted]}>hello@upstackstudio.com</Text>
            <Link src="https://upstackstudio.com" style={s.footerLink}>
              upstackstudio.com
            </Link>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={s.footer} fixed>
        <Text style={s.footerText}>
          Upstack Studio · Petaling Jaya, Selangor, Malaysia · Confidential
        </Text>
        <Text style={s.footerText}>Page 2 of 2</Text>
      </View>
    </Page>
  </Document>
)

// ── Generate ───────────────────────────────────────────────────────
async function generate() {
  console.log('[pdf] Generating scoping-sprint-brief.pdf...')
  await renderToFile(React.createElement(ScopingSprintBrief), OUT_PATH)
  console.log(`[pdf] Written to ${OUT_PATH}`)
}

generate().catch((err: Error) => {
  console.error('[pdf] Failed:', err)
  process.exit(1)
})
