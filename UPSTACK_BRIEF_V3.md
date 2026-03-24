# UPSTACK STUDIO — WEBSITE REBUILD BRIEF v3.0
## The Definitive Autonomous Build Document for Claude Code

> **READ THIS ENTIRE DOCUMENT BEFORE WRITING ONE LINE OF CODE.**
>
> **AGENT IDENTITY:** You are operating as a world top 0.5% expert across B2B strategy, conversion copywriting, Next.js engineering, UI/UX design, and technical SEO. Every decision — design, copy, architecture, animation — filters through one question: **"Would a COO at a RM50M company stop scrolling, read this, and book a call?"**
>
> Build autonomously. Never ask for confirmation. Fix errors immediately. `npm run build` must pass before any sprint is complete.

---

## PART 1 — PROJECT FOUNDATION

### 1.1 What This Is
Complete rebuild of **upstackstudio.com** from WordPress to Next.js 15.

**From:** Mobile app dev shop for non-technical founders
**To:** The world's most forward-thinking AI-enabled software engineering firm for established, growing companies (RM20M–RM100M+ revenue)

**The single conversion goal:** Book a 45-minute Strategy Call via Calendly
**Secondary goal:** Blog SEO → inbound leads from corporate buyers

### The AI-Enabled Angle — Core Brand Positioning
This is NOT a feature to add. It is the central brand story.

Upstack Studio builds with Claude Code. Engineers use AI pair programming, automated testing, and AI-assisted code review on every sprint. The team trains on AI tooling weekly. The result: faster delivery, fewer defects, more predictable timelines. This is why 16 weeks is achievable when competitors quote 12 months.

**This must be felt throughout the entire site** — in the hero, DNA section, About page, footer tech stack, and everywhere the brand voice speaks. Not as a marketing claim. As demonstrated reality.

### 1.2 The Visitor — Dual-Reader Model
**Scout (IT Manager / Ops Manager / Head of Tech):** Researching on behalf of the decision-maker. Needs specific technical evidence: case study details, stack, team structure, company tenure, client references. Building a shortlist document. Make it easy for them to quote Upstack.

**Decision-maker (COO / MD / GM / CEO):** Scanning for trust signals, business outcome alignment, risk mitigation, pricing range, and a low-risk first step. Does NOT want to be sold to. Wants to feel understood.

Both must find what they need without hunting. The site architecture and content hierarchy serves both simultaneously.

**The 5-second test:** Does this site make them feel *"This company understands my exact problem better than I can articulate it — and they're operating at a level I haven't seen before"*?

### 1.3 Reference Sites (design inspiration — confirmed by Adrian)

Study these sites before building. Extract what makes them work:

| Site | URL | What to steal |
|------|-----|---------------|
| Netguru | netguru.com | Numerical authority (17 years, 500+ clients), outcome-led service descriptions, clean typographic hierarchy |
| Nimble Studio | nimblestudio.com | Single-sentence precision, no wasted words, every line earns its place |
| Goodspeed Studio | goodspeed.studio | Guarantee-as-headline, no-risk framing front and center |
| Goji Labs | gojilabs.com | Discovery session framing, "let's understand your goals first" approach |

**What NOT to build:** Generic Webflow-template agency sites. Uniform rounded card grids. Purple gradients. Inter font. Centered hero with stock photo. If it looks like it could belong to any of the 1,000 other dev agencies, start over.

### 1.3 URLs & Integrations
```
Calendly:    https://calendly.com/upstackstudio/45-minute-strategy-session
             Pre-fill: ?first_name=X&last_name=Y&email=Z
HubSpot CRM: Forms API v3 — portal ID + form ID via env vars
GA4:         NEXT_PUBLIC_GA_MEASUREMENT_ID
Meta Pixel:  NEXT_PUBLIC_META_PIXEL_ID
LinkedIn:    NEXT_PUBLIC_LINKEDIN_PARTNER_ID
Deploy:      Vercel, Singapore region (sin1)
Domain:      upstackstudio.com
```

---

## PART 2 — BRAND ASSETS (CONFIRMED)

### 2.1 Colors (from Upstack_logo_2019.svg — source of truth)
```css
--brand-navy:   #302D83;   /* Primary — deep indigo */
--brand-sky:    #75C7DA;   /* Accent — sky blue */
--brand-black:  #231F20;   /* Near-black */
--brand-grey:   #414042;   /* Dark grey */
--bg:           #08080f;   /* Page background — very dark navy-black */
--surface:      #0f0f1c;   /* Elevated surfaces, cards */
--border:       #1a1a2e;   /* Subtle dividers */
--muted:        #5a5a7a;   /* Secondary text */
/* A-mark gradient: #75C7DA (left) → #302D83 (right) */
```

### 2.2 Typography (confirmed from brand guidelines)
```
Display / H1–H2:  Bricolage Grotesque — 700/800 weight, tight tracking (-0.025em)
Body / UI:        Inter — 400/500/600 weight, clean neutral
Logo wordmark:    Montserrat Light (Gotham-Light substitute)
```
**Load via next/font/google.**
- Bricolage Grotesque = all headings, card titles, stat numbers, display text
- Inter = body copy, nav, labels, buttons, captions, all UI text
- NEVER use: Sora, Playfair Display, Space Grotesk, Roboto, or system-ui as primary

### 2.3 Physical Assets
```bash
Logo SVG:       /mnt/project/Upstack_logo_2019.svg → cp to public/logo.svg
Founder photo:  /mnt/user-data/uploads/adrianching__1_.png → cp to public/images/team/adrian-ching.png
WP export:      /mnt/user-data/uploads/upstackstudio_WordPress_2026-03-19.xml → cp to ./wordpress-export.xml
```

### 2.4 Figma Files — Reference Only (NOT design authority)
```
Brand/main:  ezfuCwQmGGdG9NJZF5qICO
Wireframes:  bJzbHRH3uHEaozw4OcOBqQ
```
**Claude Code is the designer.** Figma files are pixel references — available via Figma MCP if you need to check an exact spacing value or colour. They are NOT the layout specification. They were designed for the old ICP (non-technical founders) and do not reflect the current enterprise positioning.

Build from the brand tokens in CLAUDE.md and the design-system/MASTER.md generated by UI UX Pro Max.

**Light + dark mode:** Both modes required. Default to system preference via next-themes. Test equally — light mode is not an afterthought.

---

## PART 3 — TECH STACK

### 3.1 Setup Commands
```bash
npx create-next-app@latest upstack-studio --typescript --tailwind --app --eslint
cd upstack-studio

# Core
npm install framer-motion lucide-react clsx tailwind-merge
npm install next-themes                        # light/dark mode toggle
npm install react-hook-form zod @hookform/resolvers
npm install next-mdx-remote gray-matter reading-time
npm install @tailwindcss/typography @next/third-parties
npm install react-cookie-consent

# Dev only (blog migration)
npm install --save-dev xml2js turndown @types/xml2js

# shadcn/ui — TypeScript=yes, Tailwind=yes, CSS variables=yes, dark=yes
npx shadcn@latest init
npx shadcn@latest add button card badge separator sheet navigation-menu \
  accordion tabs form input textarea select label sonner progress \
  table skeleton sidebar carousel avatar tooltip dialog

# Magic UI
npx magicui-cli@latest init
npx magicui-cli@latest add animated-gradient-text blur-fade border-beam \
  marquee number-ticker dot-pattern retro-grid particles meteor-shower
```

### 3.2 Key Config Files
```typescript
// vercel.json
{ "framework": "nextjs", "regions": ["sin1"] }

// app/layout.tsx — light/dark mode via next-themes (defaultTheme="dark")
// MUST include suppressHydrationWarning on <html> element
<html lang="en" suppressHydrationWarning>
// Wrap children in <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

// tailwind.config.ts — dark mode by class (required for next-themes)
darkMode: 'class'
// MUST have CSS vars for bg, surface, border, muted, text — not hardcoded colors
```

---

## PART 4 — SITE ARCHITECTURE

```
/                                       Home
/services                               Services overview
/services/operations-digitalization     Ops Digitalization
/services/ai-integration                AI Integration
/services/ai-automation-subscription    AI Automation Subscription
/services/custom-platform-development   Custom Development
/services/development-subscription      Dev Subscription

/work                                   Case Studies (17)
/about                                  About
/strategy-session                       Pain primer form → Calendly redirect on submit
/contact                                Simple contact form (general enquiries only)
/resources                              Resources Hub
/testimonials                           All testimonials
/thank-you                              Post-booking confirmation
/blog                                   Blog index (203 MDX posts)
/blog/[slug]                            Blog post

/malaysia                               Geo (MYR pricing)
/singapore /australia /united-kingdom
/united-states /indonesia /thailand /philippines   Geo (USD pricing)
```

---

## PART 5 — PRICING (CONFIRMED)

### Zero to Launch
| Package | Timeline | Scope | Post-launch | MYR | USD |
|---------|----------|-------|-------------|-----|-----|
| **Transform** | 16 weeks | 1 platform | 30 days | RM 155,000 | USD 45,000 |
| **Accelerate** | 4–6 months | Web + Mobile | 90 days | RM 295,000 | USD 75,000 |

### Development Subscription
| Tier | MYR/mo | USD/mo | Requests |
|------|--------|--------|---------|
| Essential | RM 4,995 | USD 2,995 | 1 |
| Pro | RM 24,995 | USD 7,995 | 1 |
| Platinum | RM 39,995 | USD 9,995 | 2 |

**Currency rule:** `/malaysia` → MYR only. All other pages → USD only. Never show both on same page.

---

## PART 6 — CASE STUDIES (17 confirmed)

| # | Client | Industry | Key Outcome | Notes |
|---|--------|----------|-------------|-------|
| 1 | Daikin / Acson — GO DAIKIN App | Manufacturing · IoT | IoT remote AC control | React Native |
| 2 | Daikin DEDM — AXIIOT Plus | Manufacturing · IoT | Unified CCTV + alarm monitoring | React Native |
| 3 | The Malaysian Insight | Media · News | Exceeded delivery expectations | Mobile app |
| 4 | Magnum 4D Berhad | Gaming · Public-listed | On-time delivery, above & beyond | |
| 5 | Teleme | Healthcare · Telemedicine | Better than any previous dev house | |
| 6 | BookXcess / Big Bad Wolf | Retail · Events | **15x ecommerce revenue growth** | Shopify — lead with this number |
| 7 | AFA Malaysia | Financial Services | Increased consumer transparency | Public adviser portal |
| 8 | Fightcode | Sports Tech | Simplified event management | fightcode.app · Google Play: com.fightcode.app |
| 9 | Whisker Tracker | Consumer Tech · AI | Cat facial recognition — NGO use case | Client: Justin Ruffier, San Diego |
| 10 | Hummingbird TMS / Tradelink | Logistics | Created sellable SaaS TMS product | ReactJS + NestJS |
| 11 | Black Tulip | Platform · Mental Health | Rebuilt failed $500K project in 10 languages | Client: Jason Anderson · Staging: black-tulip-staging.web.app |
| 12 | 12Job | HR Tech · Social Impact | Job access for B40 community | React Native + Ruby on Rails |
| 13 | Recruitopia | HR Tech · Recruitment | `<!-- TODO: confirm deliverable -->` | |
| 14 | iWealth | Financial Services | `<!-- TODO: confirm deliverable -->` | |
| 15 | Hack In The Box (HITB) | Cybersecurity · Events | `<!-- TODO: confirm deliverable -->` | |
| 16 | NiuAce for Builders | Construction Tech | Completed on time, client retained for ongoing work | CTO testimonial confirmed |
| 17 | Fitness Annotations | Health & Fitness | Full v1 delivered, AI-driven recommendations | React Native + NestJS |

**Industry filter tabs:**
`All · Manufacturing · IoT · Financial Services · Media · Healthcare · Retail · Cybersecurity · HR Tech · Logistics · Sports & Lifestyle · Consumer Tech · Health & Fitness · Social Impact`

---

## PART 7 — TESTIMONIALS (VERBATIM — NEVER PARAPHRASE)

```
Andrew Yap — Founder, BookXcess & Big Bad Wolf Books
"Brilliant job guys! Just brilliant! So many amazing changes in just a few days. Thank you
for the quick response to our predicament. You really don't know how much this means to us.
I owe you guys the biggest favour."

Mark Choo — Ex-CEO, Teleme
"They were much better than any development house we'd used previously."

Eddy How — Deputy Manager, Magnum 4D Berhad
"Pleasant experience working with a team of professionals who were responsive and reliable.
Most impressive was that the entire team from Upstack Studio went above and beyond to ensure
the deliverables and deadline were met."

Heidzir Jamarajid — IT Administrator, The Malaysian Insight
"I was impressed by their knowledge on web design, user experience, and optimization. The
total app delivery process exceeded our expectations with remarkable turnaround speed."

Dinie Johari — Assistant Manager, BookXcess
"We worked closely with Adrian and his team during the project and their response was very
quick and timely. Work is delivered on time and sometimes, they even go out of their way to
complete urgent tasks which we really appreciate."

Bon Chee Fong — Project Coordinator, OneStop Manpower
"Adrian and his team were very agile and responsive. They are very transparent in their
communication and operations throughout the project as we're always able to reach them
whenever we need to."

Siyuan Lye — Ex-Head of Marketing, Whitman Independent Advisors
"They were very patient in dealing with us, which we appreciated, as we're not a technology
company."

Tan Loo Toon — CTO, NiuAce for Builders
"The management team are satisfied with the deliverables, and decided to continue engaging
Upstack team for the ongoing product enhancement and support. Upstack Team was able to
complete the project within the agreeable timeframe. We were very satisfied with their work
every step of the way."

Chien Yee Tan — Founder, PriverCar
"They made sure the prototype was better than what I imagined initially. Very approachable
and very easy to work with."

Ivan Lee — Executive Committee Member, AFA Malaysia
"Working with Adrian and his team was a great experience. They handled everything
professionally and made sure to address any potential issues before delivering the project.
Even when our requirements changed, they were patient and worked with us to make the
necessary adjustments, explaining everything clearly. Their dedication and passion made a
huge difference compared to other vendors. They didn't just deliver and leave; they
supported us every step of the way."

MaoSheng Toh — Co-founder, Poof Cafe
"Adrian took the initiative to meet up personally to touch base about our projects after
inquiries were sent online. We find him very honest, helpful, and professional. He even
provided some invaluable advice for us to start working with before any charges occurred."

Justin Ruffier — Founder, Whisker Tracker (Video: kRUL8NrM_Rk)
"I shopped around. I looked at assembling a team of freelancers. I reached out to about two
other agencies here in the United States in San Diego, California. In hindsight, I'm glad I
did not do that. You had a great process. You had a great team. You're very knowledgeable.
Your service offerings really fit exactly what I was looking for."

"Your team communicates with me very often and really outlines every step of the development
we're in and so I always know where we are. I was pleasantly surprised with the
communication that I received from your team."

"I've had another developer look at what you guys have produced and said, 'You have a very
clean code base.'"

"Definitely recommend Upstack Studio really to anyone looking for mobile app solutions."

Jason Anderson — Executive Director, Black Tulip (Video: KdxPAqwEDHY)
"We had a pretty negative experience with our previous developers. There were a number of
things wrong with the project, but as the project evolved, they just couldn't keep up."

"Honestly, I was nervous because they're out of Malaysia. We never met. So, I spoke with
Adrian and I felt pretty good. We really liked the model of scaling up and scaling down.
So, that was a big deal to us. The price was a good one. It's not inexpensive, but at the
same time, we've gotten our money's worth."

"The work is good. Ying, one of their designers, she's very good. She's a true graphic
artist. She has a very strong aesthetic. She crushed it."

"We have a lot of features. Stack is just growing. It's pretty complicated and it hasn't
been easy because there's a lot of flux on our side in terms of what we want. They've
basically crushed it."

"We're building up to our first private release here in the next several weeks and then go
public and it's in 10 languages. Like just a very hard thing to pull off and completely
translated all the video, all the audio, all the articles, the whole interface in 10
languages."
```

---

## PART 8 — THE LUDA™ FRAMEWORK (MOST IMPORTANT TRUST ELEMENT)

> LUDA™ is the answer to every enterprise buyer's unspoken question: *"How do I know this won't fail like the last agency?"*
> **It must appear prominently on: Home, every service page, Contact (left column), About.**

### Placement Headline
*"70% of software projects fail. We built a framework specifically so yours doesn't."*

### Subtext
*"The LUDA™ Framework is how we deliver every engagement — not a promise, a structure. Every client, every project, every time."*

### The Four Pillars

**1. Dedicated Agile Squad**
Fixed senior team from day one — PM, engineers, QA, designer. Same people, kickoff to launch. No juniors. No interns. No handoffs. The people who scope your project are the people who build it.

**2. Bi-weekly Progress Reviews**
Video call every two weeks. You see what was built, what's next, what needs your input. Slack always open. No waiting for a monthly report to find out you're off-track.

**3. 16-Week Launch Commitment**
We set a date and keep it. Delays on our side = we keep working at no extra cost. You never pay for our problems.

**4. Full IP & Source Code Ownership**
Everything we build is yours — from kickoff to final delivery. No lock-in. No licensing. No platform dependency. Take it anywhere.

### Guarantee Bar (horizontal strip on every major page)
```
✓ 2-Week Risk-Free Trial   ✓ No Extra Charge for Our Delays   ✓ Transparent Pricing   ✓ 24-Hour Response SLA
```

---

## PART 9 — SOCIAL & MEDIA

### Adrian's Personal Channels (USE THESE — primary content)
```
YouTube:   https://youtube.com/@adrianchinghc
Instagram: https://www.instagram.com/adrianchinghc/
LinkedIn:  https://my.linkedin.com/in/adrianchinghc
TikTok:    https://www.tiktok.com/@adrianchinghc
X:         https://x.com/adrianchinghc
Podcast:   https://adrianchinghc.buzzsprout.com (Tech It Or Leave It)
```

### Company Accounts (footer only — low activity)
```
LinkedIn:  https://www.linkedin.com/company/upstack-studio/
Instagram: https://www.instagram.com/upstackstudio/
TikTok:    https://www.tiktok.com/@upstackstudio
X:         https://x.com/upstackstudio
```

### Video Testimonials
```
Justin Ruffier: YouTube ID kRUL8NrM_Rk
Jason Anderson: YouTube ID KdxPAqwEDHY
```

### Press
```
In Real Life Malaysia:
"I Made RM 2 Million Building Apps After Losing RM 80,000 With Zero Backup Plan"
URL: https://inreallife.my/i-made-rm-2-million-building-apps-after-losing-rm-80000-with-zero-backup-plan/
```

### Directory Ratings (show on Home + Contact + Testimonials)
```
⭐ 4.9/5 on Clutch
⭐ 5.0 on TechBehemoths
⭐ 4.9 on Google
```
`<!-- TODO: Get official badge assets from Adrian OR use text-based star display -->`

---

## PART 10 — PAGE COPY (PRODUCTION-READY)

### HOME (`/`)

**Eyebrow:** `For established companies that have outgrown spreadsheets and workarounds`

**H1:** `Your revenue has scaled. Your operations haven't. We fix that.`

**Sub:** `Upstack Studio helps established, growing companies replace manual bottlenecks, digitalize operations, and build the infrastructure to compete in an AI-driven world — built on the LUDA™ Framework, our proven delivery system trusted by Daikin, Magnum 4D, and companies across six countries.`

**CTA Primary:** `Book a Strategy Call →` → Calendly URL
**CTA Secondary:** `See Our Work →` → `/work`
**Trust line:** `Trusted by Daikin · Acson · Magnum 4D · The Malaysian Insight · Teleme · BookXcess · AFA Malaysia`

---

**Pain Section (3 cards — mirror their internal monologue):**

Card 1 — *"We're still doing approvals over WhatsApp"*
Your team copies data between systems, chases sign-offs on group chats, and re-enters information that should flow automatically. Every new hire adds one more person to manage the chaos — not fix it.

Card 2 — *"I can't get a clear picture of what's happening"*
Sales has one version of the numbers. Finance has another. Operations has a spreadsheet nobody's updated this week. Decisions get made on gut feel because pulling accurate data takes half a day.

Card 3 — *"Everyone says we need AI. Nobody can tell us where to start."*
You've sat through demos. You've read the reports. But every vendor wants to sell you a chatbot, and none of it connects to how your business actually runs.

---

**Stats Band (NumberTicker on scroll reveal):**
- `70%` — of digital transformations fail (McKinsey)
- `88%` — of business transformations miss their goals (Bain 2024)
- `15x` — ecommerce revenue growth (BookXcess)
- `4.9★` — average rating across Clutch & Google

---

**LUDA™ Section — Full variant** (largest trust block on the page)

---

**Client Marquee** — all 17 client names, scroll left, pause on hover

---

**Testimonials:**
- Justin Ruffier video (kRUL8NrM_Rk) + Jason Anderson video (KdxPAqwEDHY) — featured large
- 6 text testimonial cards below

---

**Industries Served:**
Manufacturing · Financial Services · Healthcare · Logistics · Media · Professional Services
Each with relevant Lucide icon + one-line pain statement

---

**BookXcess Feature Callout (standalone stat card):**
```
15x
ecommerce revenue growth

"Brilliant job guys! Just brilliant!"
— Andrew Yap, Founder, BookXcess
```

---

**Press Bar:** In Real Life Malaysia + Clutch + TechBehemoths badges

---

**YouTube Strip:**
`<!-- TODO: Replace VIDEO_IDs with 3 content videos from @adrianchinghc -->`
*"Want to understand how we think about software delivery — before you commit to a call?"*
Podcast sub-link: `"Also on podcast: Tech It Or Leave It →"`

---

**Final CTA:**
```
If this sounds like where your business is right now — let's talk.

Not every company is the right fit for what we do. We work best with
established businesses ready to invest in digital infrastructure seriously —
not companies looking for the cheapest quote or a quick fix.

Adrian personally reviews every submission before the call.
```
Button: `Book Your Strategy Call →`

---

### SERVICES OVERVIEW (`/services`)
H1: `We don't build apps. We build the infrastructure your business runs on.`
Sub: `Every engagement starts with understanding your operations — not a feature list. We engineer the exact solution your business needs, built on the LUDA™ Framework.`

5 service cards + pricing table (USD) + LUDA™ compact + 3-step process + CTA

---

### `/services/operations-digitalization`
H1: `Stop running your business on spreadsheets and WhatsApp chains.`
Keyword: "operations digitalization company Malaysia"

3 real scenarios:
1. Distribution company: PO approvals over WhatsApp → 3-5 day delays → automated approval workflow
2. Financial services: Client data in 3 systems → unified operations portal
3. Manufacturing: 6 hours/Monday building weekly KPI report → automated live dashboard

FAQ (Accordion, 4+ questions — see content rules)

---

### `/services/ai-integration`
H1: `AI isn't magic. But in the right place, it's the highest-ROI investment you can make.`
Keyword: "AI integration services Malaysia"

Honest framing (mandatory):
*"We will tell you directly if AI isn't the right answer yet. You can't automate chaos. Most companies need 60–90 days of operations work before AI becomes genuinely powerful. We'll tell you exactly where you are."*

3 types: Document & Data Intelligence · Operational AI Automation · Internal AI Tools

---

### `/services/ai-automation-subscription`
H1: `Automate operations, eliminate manual work, and scale without adding headcount.`
Unlimited AI workflow automation on a monthly plan.
Key tools: n8n, Zapier, Make.com, OpenAI agents
`<!-- TODO: Confirm pricing with Adrian -->`

---

### `/services/custom-platform-development`
H1: `When off-the-shelf software stops fitting — we build what actually works.`
Keyword: "custom software development Malaysia"

H3 subsections for SEO:
- **Mobile App Development** — iOS · Android · React Native · enterprise mobile (keyword: "mobile app development Malaysia")
- **Web App Development** — custom web apps · scalable platforms · enterprise portals (keyword: "web app development Malaysia")
- **PWA Development** — single codebase · offline capability · 76% higher conversion (keyword: "PWA development Malaysia")

---

### `/services/development-subscription`
H1: `Your platform launched. Now it needs to keep up with your business.`
Full 3-tier pricing table. What's included in all tiers. Pause/cancel anytime (1 month notice).

---

### WORK (`/work`)
H1: `Work that moves businesses forward.`
Sub: `Projects delivered across Malaysia, Australia, the US, UK, and the Netherlands.`
**Lead with BookXcess 15x stat prominently.**

---

### ABOUT (`/about`)
H1: `We exist for one reason: to help growing companies build technology that actually works.`

Story (use these confirmed facts, write in Adrian's voice):
- Started at a café in Petaling Jaya
- Walked away from a RM350,000 prospect — too many red flags
- Both co-founders left within a year
- 3 months with no clients, team still on payroll
- Told a prospect honestly: "I don't know whether I will still be here"
- RM 80,000 bad debt from a client who doubled scope then refused to pay
- From every failure came the LUDA™ Framework and the 3 qualifying questions
- Now delivering for 9-figure brands and public-listed companies across 6 countries

Press: In Real Life Malaysia article

3 qualifying questions before every engagement:
1. Why now? 2. Why this solution? 3. Why us?

Values (4): Growth Mindset · Uncompromising Standards · Proactive by Default · People Before Technology

Adrian — Founder photo (real photo — `/public/images/team/adrian-ching.png`)
Team: *"A lean, senior team of engineers, designers, and strategists — all full-time, all based in Malaysia."*

7 reasons to work with us (see copy rules section)

YouTube section + podcast mention
`<!-- TODO: Replace VIDEO_IDs with 3 content videos from @adrianchinghc -->`

---

### CONTACT (`/contact`)
H1: `Talk to someone who actually understands your situation.`
Sub: `45 minutes with Adrian. Not a junior sales rep. Not a pitch deck. A real conversation about your operations and what we'd do about it.`

Left column:
```
What the call covers:
— The specific operational problem you're trying to solve
— Whether software is the right solution right now
— What a realistic timeline and investment looks like
— Whether we're the right team for it

What it is NOT:
— A sales pitch  — A generic discovery call  — A commitment to anything

Had a bad experience with another developer?
Some of our strongest client relationships started as rescues.
Jason Anderson came to us after his previous team spent his budget and
couldn't finish. We rebuilt everything. He called it "basically crushed it."

LUDA™ compact section here.

Petaling Jaya, Selangor, Malaysia
```

Right column: Multi-step contact form (Section 11)

---

## PART 11 — CONTACT FORM (MULTI-STEP PAIN PRIMER)

**UX Flow:** Step 1 (Pain) → Step 2 (Contact + Qualify) → Step 3 (Confirmation + Calendly)

**Calendly appears ONLY on Step 3.** Never before. Never elsewhere on the site.

### Why this form works
The three Step 1 questions are **psychologically sequenced** — pain → cost of inaction → prior failure. This sequence does two things simultaneously: it qualifies the lead for Adrian, AND it primes the prospect's own thinking. By the time they reach Step 2 and enter their details, they've already articulated their problem in writing and sold themselves on needing a solution. The act of answering makes them emotionally invested. Do NOT replace these with dropdowns or shorter questions — the textarea format is the mechanism.

### Step 1 — Pain Primer (3 open-ended questions)

Show a progress indicator: Step 1 of 2 (never show "Step 1 of 3" — the confirmation is not a user step)

```
Q1 (required, Textarea):
Label: "What's the one thing in your operations that's costing you the most time or money right now?"
Placeholder: "e.g. Our approval process runs on WhatsApp and email chains. There's no
visibility into what's pending, who's approved it, or why things are delayed."
HubSpot field: biggest_operational_pain

Q2 (required, Textarea):
Label: "What happens to your business if this problem is still unsolved 12 months from now?"
Placeholder: "e.g. We'll need to hire 2–3 more people just to manage the same workload,
or we'll keep losing deals to competitors who move faster."
HubSpot field: cost_of_inaction

Q3 (optional, Textarea):
Label: "Have you tried to solve this before? What happened?"
Placeholder: "e.g. We tried an off-the-shelf tool but it didn't fit our workflow. We also
spoke to two other agencies — one ghosted us after the proposal."
HubSpot field: previous_attempts
```

Step 1→2 Button: `"Show me what's possible →"` (NOT "Next" — the wording matters)

### Step 2 — Contact & Qualify
```
First Name (required)
Last Name (optional)
Work Email (required)
Phone Number (optional)
Company Name (required)
Role / Title (optional)
Website (optional)

When are you hoping to start? (required, Select)
  - Immediately (0–1 month)
  - Soon (1–3 months)
  - Later (3–6 months)
  - Just researching

What budget range are you comfortable exploring? (required, Select)
  - USD 10,000 to USD 25,000
  - USD 25,000 to USD 50,000
  - USD 50,000 to USD 100,000
  - USD 100,000+
  - Not sure yet — need guidance

Do you already have any of the following? (multi-select, optional)
  ☐ Wireframes or designs  ☐ Technical documentation
  ☐ Existing app or system  ☐ Previous dev team experience  ☐ None yet

How did you hear about us? (optional, Select)
  Google · YouTube · LinkedIn · Instagram · X · TikTok · Clutch · GoodFirms · Referral
```
Submit: `"Request My Strategy Call →"`

### Step 3 — Confirmation
```
✓ Your request is in.

Adrian will personally review your answers before the call.
No scripts. No generic questions. Just a real conversation about what you shared.

[Book Your 45-Minute Strategy Session →]
(pre-filled Calendly URL with name + email from Step 2)

We'll also follow up within 1 business day if you'd prefer to wait for us to reach out.
```

### HubSpot field mapping
```typescript
const fields = [
  // Pain primer (Step 1)
  { name: 'biggest_operational_pain', value: data.pain1 },
  { name: 'cost_of_inaction',         value: data.pain2 },
  { name: 'previous_attempts',        value: data.pain3 || '' },
  // Contact (Step 2)
  { name: 'firstname',                value: data.firstName },
  { name: 'lastname',                 value: data.lastName || '' },
  { name: 'email',                    value: data.email },
  { name: 'phone',                    value: data.phone || '' },
  { name: 'company',                  value: data.company },
  { name: 'jobtitle',          value: data.role || '' },
  { name: 'website',           value: data.website || '' },
  { name: 'start_timeline',    value: data.timeline },
  { name: 'budget_range',      value: data.budget },
  { name: 'existing_assets',   value: data.assets.join(', ') },
  { name: 'how_did_you_hear',  value: data.source || '' },
]
```
`<!-- TODO: Create HubSpot custom properties: biggest_operational_pain, cost_of_inaction, previous_attempts, start_timeline, budget_range, existing_assets -->`

---

## PART 12 — GEO PAGES

Reusable `<GeoPage>` server component. Each page is a thin wrapper with typed props.

| Route | H1 | Keyword | Currency | Magic UI BG |
|-------|----|---------|----------|-------------|
| /malaysia | Malaysia's growing companies trust Upstack Studio to build what their operations need. | software development company Malaysia | MYR | RetroGrid |
| /singapore | For Singapore companies that need enterprise-grade software — without enterprise prices. | software development agency Singapore | USD | Particles |
| /australia | Australian companies building digital infrastructure across Asia-Pacific. | software development Australia | USD | MeteorShower |
| /united-kingdom | UK companies expanding into Southeast Asia — or building APAC-ready infrastructure. | software development UK | USD | DotPattern |
| /united-states | US companies that need APAC-ready software built to the same standard they expect at home. | software development USA | USD | AnimatedGradientText |
| /indonesia | For Indonesian enterprises ready to move beyond manual operations. | software development Indonesia | USD | DotPattern |
| /thailand | Thailand's growing enterprises deserve software built for how they actually operate. | software development Thailand | USD | DotPattern |
| /philippines | For Philippine enterprises that have outgrown off-the-shelf software. | software development Philippines | USD | DotPattern |

US page special callout: *"One of our clients spent USD 500,000 with a US agency and got nothing usable. They came to us. We rebuilt it in 16 weeks."*

---

## PART 13 — BLOG SYSTEM

**203 posts** from WordPress export. All must be migrated with exact slugs preserved.

### Migration Script: `/scripts/migrate-wordpress.ts`
```typescript
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { parseStringPromise } from 'xml2js'
import TurndownService from 'turndown'

async function migrate() {
  const xml = readFileSync('./wordpress-export.xml', 'utf-8')
  const parsed = await parseStringPromise(xml)
  const items = parsed.rss.channel[0].item || []
  const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' })

  if (!existsSync('./content/blog')) mkdirSync('./content/blog', { recursive: true })

  let count = 0
  for (const item of items) {
    if (item['wp:post_type']?.[0] !== 'post') continue
    if (item['wp:status']?.[0] !== 'publish') continue

    const title = item.title?.[0]?.replace(/"/g, '\\"') || ''
    const slug  = item['wp:post_name']?.[0] || ''
    const date  = item['wp:post_date']?.[0]?.substring(0, 10) || ''
    const html  = item['content:encoded']?.[0] || ''
    const cats  = (item.category || [])
                    .filter((c: any) => c.$?.domain === 'category')
                    .map((c: any) => c._)

    const body = td.turndown(html)
    const desc = td.turndown(item['excerpt:encoded']?.[0] || '').substring(0, 155).replace(/\n/g, ' ')

    const fm = `---\ntitle: "${title}"\ndescription: "${desc.replace(/"/g, '\\"')}"\ndate: "${date}"\nauthor: "Upstack Studio"\ncategory: "${cats[0] || 'Product Development'}"\ntags: [${cats.map((c:string) => `"${c}"`).join(', ')}]\nslug: "${slug}"\ncanonical: "https://upstackstudio.com/blog/${slug}"\n---\n\n`

    writeFileSync(`./content/blog/${slug}.mdx`, fm + body)
    count++
  }
  console.log(`✓ Migrated ${count} posts`)
}

migrate().catch(console.error)
```

**Run:** `npx ts-node scripts/migrate-wordpress.ts`
**Verify:** `ls content/blog/ | wc -l` → must return `203`

### Confirmed Blog Categories
```typescript
const BLOG_CATEGORIES = [
  'All', 'Product Development', 'Mobile App', 'Web App',
  'Artificial Intelligence', 'Workflow Automation', 'No Code & Low Code',
  'Vibe Coding', 'Insightful Stories', 'Inside Upstack Studio',
]
```

### Blog Post Page Features
- MDX rendered with `next-mdx-remote`
- `@tailwindcss/typography` prose classes
- Reading time (`reading-time`)
- Sticky TOC (`shadcn/Sidebar`, desktop only)
- Reading progress bar (`shadcn/Progress`, top of viewport)
- Related posts (3, same category)
- Inline CTA after every 3rd H2: *"Building something like this? Let's talk →"*
- End-of-post CTA block → `/contact`

### WordPress Redirects (`next.config.ts`)
```typescript
{ source: '/blog/:slug/', destination: '/blog/:slug', permanent: true },
{ source: '/category/:cat*', destination: '/blog', permanent: true },
{ source: '/author/:author*', destination: '/blog', permanent: true },
{ source: '/tag/:tag*', destination: '/blog', permanent: true },
```

---

## PART 14 — SEO

### Per-page metadata (`generateMetadata`)
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Upstack Studio',
  description: '155-char description with primary keyword.',
  alternates: { canonical: 'https://upstackstudio.com/page-slug' },
  openGraph: {
    title: '...', description: '...', url: '...',
    siteName: 'Upstack Studio', locale: 'en_MY', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '...', description: '...' },
}
```

### LocalBusiness JSON-LD (Home + all geo pages)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Upstack Studio",
  "url": "https://upstackstudio.com",
  "foundingDate": "2017",
  "founder": { "@type": "Person", "name": "Adrian Ching" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Petaling Jaya",
    "addressRegion": "Selangor",
    "addressCountry": "MY"
  },
  "areaServed": ["MY","SG","AU","GB","US","ID","TH","PH"]
}
```

### OG Image
`/app/opengraph-image.tsx` — dark bg `#08080f`, logo, tagline, navy/sky gradient accent

### Sitemap + Robots
`/app/sitemap.ts` — dynamic, includes all static routes + 203 blog slugs
`/app/robots.ts`

---

## PART 15 — ANALYTICS & COOKIE CONSENT

```typescript
// react-cookie-consent — dark theme, bottom bar
// On Accept → load GA4 + Meta Pixel + LinkedIn tag
// On Decline → skip all analytics

// GA4 via @next/third-parties/google (conditional)
// Cookie consent in app/layout.tsx
```

---

## PART 16 — COPY RULES (NON-NEGOTIABLE)

### Language & Platform
- **English only** — no Bahasa Malaysia version for launch
- **No WhatsApp chat button** — not appropriate for the enterprise ICP we're targeting
- **No cookie banner for MY pages** — required for AU/UK/EU traffic only (cookie consent is already in Sprint 7)

### BANNED words/phrases (never appear anywhere on the site)
`MVP` · `pivot` · `disrupt` · `seamless` · `solutions` (generic) · `non-technical founders` · `launch your app` · `startup` (in hero/services) · `leverage` (vague) · `world-class` (without proof) · `Joel Keat` · `Nur Fajarudeen` · `The Second Team`

### Phrases to use consistently
- `"Built on the LUDA™ Framework"` — hero, service intros, contact left column
- `"The people who pitch you are the people who build for you"`
- `"No juniors, no interns on design or development"`
- `"You own everything we build"`

### Testimonials
Verbatim only. Check against Part 7. No paraphrase. No summary. No rewriting for "brand voice."

### Team copy
`"A lean, senior team of engineers, designers, and strategists — all full-time, all based in Malaysia."`

### 7 Reasons to work with us (About + Home)
1. The people who pitch you are the people who build for you.
2. We tell you the truth about what's possible — even when it's not what you want to hear.
3. No juniors, no interns on design or development.
4. Bi-weekly calls. Slack always open. You always know where your project stands.
5. If we cause delays, we pay for them — not you.
6. You own everything we build, from kickoff to final delivery.
7. Delivered across manufacturing, financial services, healthcare, media, logistics, consumer tech, and sports.

---

## PART 17 — OPEN TODOS (add as code comments — never block build)

```
<!-- TODO: Replace YouTube VIDEO_IDs for content strip (3 videos from @adrianchinghc) -->
<!-- TODO: Replace YouTube VIDEO_IDs for About page (3 videos from @adrianchinghc) -->
<!-- TODO: Get pre-call video ID for /thank-you page -->
<!-- TODO: Create HubSpot custom properties: biggest_operational_pain, cost_of_inaction, previous_attempts, start_timeline, budget_range, existing_assets -->
<!-- TODO: Add HUBSPOT_PORTAL_ID + HUBSPOT_FORM_ID to Vercel env vars -->
<!-- TODO: Add GA4 Measurement ID to Vercel env vars -->
<!-- TODO: Add Meta Pixel ID to Vercel env vars -->
<!-- TODO: Add LinkedIn Partner ID to Vercel env vars -->
<!-- TODO: Confirm production URL for Black Tulip (currently: black-tulip-staging.web.app) -->
<!-- TODO: Confirm deliverables for Recruitopia, iWealth, HITB -->
<!-- TODO: Confirm AI Automation Subscription pricing -->
<!-- TODO: Confirm which resource URLs are live (app-cost-calculator, brief template, etc.) -->
<!-- TODO: Get Clutch/TechBehemoths badge assets for rating strip -->
<!-- NOTE: Figma files are brand reference only — not design constraints. Claude Code owns the design. -->
```

---

# SPRINT PLAN

> Every sprint: `npm run build` (zero errors) → commit → tag → `git push origin main --tags` → Vercel auto-deploys to staging.
> Repo `upstackstudio-v4` is already linked to Vercel. Push after every sprint — staging URL goes live within ~2 minutes.
> Commit after every working unit. Never at end of sprint.

---




---

## AI-ENABLED POSITIONING

This is a **core differentiator** — not a footnote. Thread it everywhere.

**The positioning:** Upstack Studio is an AI-enabled software engineering firm. We use tools like Claude Code to build faster, more thoroughly, and at higher quality than traditional agencies. Our engineers are constantly upskilling in AI. This benefits every client.

**Copy angles:**
- "AI-enabled engineering" — the short form
- "We build software the way the world's best engineers build it — with AI."
- "While other agencies are still debating AI, we've shipped 17 projects with it."
- "Our engineers use Claude Code. Your delivery timeline benefits."

**Where it must appear:**
- Hero sub-copy (this sprint)
- About page / How We Work section — dedicated card
- Services page intro
- Meta descriptions for all key pages
- Footer tagline (optional)

**What it does NOT mean:**
- AI writes the code and nobody reviews it (wrong)
- Junior developers outsourced to AI (wrong)
- It means: Senior engineers + best tools = faster, better outcomes for clients

---

## TOOL STACK — FULL REFERENCE

Claude Code has access to the following tools. Use whichever combination gets the job done best. **Bold = use frequently. Do not default to only one.**

### 1. UI UX Pro Max (`.claude/skills/ui-ux-pro-max/`)
Auto-activates on UI tasks. 161 industry rules, 67 styles, 161 palettes, 57 font pairs.
- Run at Sprint 0 to persist `design-system/MASTER.md`
- Re-run for each new page type: `--page "services"`, `--page "contact"` etc.
- **Do NOT follow safe UI patterns.** Bold, memorable, architecturally significant.

### 2. @21st-dev/magic MCP
Generates production-ready custom components from descriptions.
- Use when shadcn/ui and 21st.dev registry don't have exactly what you need
- Specify: dark theme, Upstack tokens, Bricolage Grotesque, Tailwind
- Output goes to `components/magic/` — adapt tokens after generation

### 3. 21st.dev Registry
```bash
npx shadcn@latest add "https://21st.dev/r/[author]/[component]"
```
Best components for Upstack: bento grid, animated counters, spotlight cards, marquee, text reveal, sticky nav.
Always adapt colours/fonts to Upstack design tokens after installing.

### 4. shadcn/ui MCP (`Shadcn UI:get_component`, `Shadcn UI:get_block`)
Read component source before installing. Check blocks before committing to a layout.
```
Shadcn UI:list_components() → see what's available
Shadcn UI:get_component("accordion") → read source first
Shadcn UI:get_block("dashboard-01") → preview block layout
```

### 5. Figma MCP — Brand Reference Only
Not a design constraint. Claude Code owns the design. Use Figma MCP only if you need to verify a specific brand asset (logo variant, exact swatch).
- Section nodes only, never full page nodes
- `get_metadata` → children → `get_design_context` per child if needed
- File: `bJzbHRH3uHEaozw4OcOBqQ` (wireframe, old ICP — ignore layout)

### 6. Marketing Skills (`.claude/skills/` from `coreyhaines31/marketingskills`)
Auto-activates on copy and marketing tasks. Priority skills for Upstack:
| Skill | Trigger |
|---|---|
| `product-marketing-context` | Run first, before any copy task |
| `copywriting` | Any page copy — hero, services, case studies |
| `page-cro` | Review any page before finalising |
| `copy-editing` | Tighten existing copy |
| `form-cro` | Review the StrategySessionForm pain primer |
| `marketing-psychology` | Apply social proof, anchoring, FOMO to copy/layout |

### 7. Frontend Design Skill (`.claude/skills/frontend-design/SKILL.md`)
Read before building any component. Governs aesthetic decisions.
Anti-safe-UI mandate: Bold maximalism and refined authority both work. The key is intentionality. Never produce a Webflow template.

### Decision guide — which tool first?

```
Task: Build a new page component
→ Read design-system/MASTER.md (UI UX Pro Max output)
→ Read .claude/skills/frontend-design/SKILL.md
→ Check Shadcn UI:list_components for base components
→ Check 21st.dev for animated variants
→ Use @21st-dev/magic if nothing fits

Task: Write page copy
→ Read .agents/product-marketing-context.md
→ Use copywriting skill (auto-activates)
→ Use page-cro skill to review after writing

Task: Build a complex custom component with no equivalent
→ @21st-dev/magic with explicit Upstack token spec
→ Adapt generated code to design-system/MASTER.md tokens

Task: Install a UI component
→ Shadcn UI:get_component → read source
→ npx shadcn@latest add [component]
→ Or: npx shadcn@latest add "https://21st.dev/r/[author]/[component]"
```

---

## SPRINT 0 — Foundation (45 min)
**Done when:** `npm run dev` runs, dark background visible, theme toggle switches to light mode, Bricolage Grotesque + Inter load, brand colors applied in both modes, UI UX Pro Max design system generated, product-marketing-context created.

### Sprint 0 — Step 0: Skills & Tools Setup (run first, before any code)

```bash
# 1. Install UI UX Pro Max (if not already installed)
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

# 2. Install Marketing Skills
/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills

# 3. Confirm frontend-design skill is available
cat .claude/skills/frontend-design/SKILL.md
```

**Generate and persist the design system before any code:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "AI-enabled B2B software engineering agency enterprise Malaysia" --design-system --persist -p "Upstack Studio"
# → Creates design-system/MASTER.md
# → Read this before building any component

python3 .claude/skills/ui-ux-pro-max/scripts/search.py "homepage conversion B2B enterprise trust authority" --design-system --persist -p "Upstack Studio" --page "homepage"
# → Creates design-system/pages/homepage.md
```

**Create product-marketing-context:**
```bash
# Create .agents/product-marketing-context.md from the ICP + positioning in this brief
# Required by marketingskills copywriting + page-cro skills before any copy task
```

**Add 21st.dev registry to `components.json`:**
```json
{
  "registries": {
    "@21st": "https://21st.dev/r/{name}"
  }
}
```

### Sprint 0 — Step 1: Codebase Setup

1. `git init` — repo is `upstackstudio-v4`, already linked to Vercel staging, work on `main`
2. Install `next-themes` for light/dark mode: `npm install next-themes`
3. ThemeProvider in `app/layout.tsx` with `attribute="class" defaultTheme="system" enableSystem`
4. ThemeToggle component in Navbar — Sun/Moon icon, ghost button, top-right of nav
5. CSS vars in `globals.css` — both `:root` (light) and `.dark` variables required
2. Create Next.js app (exact commands from Part 3)
3. Install ALL dependencies
4. `npx shadcn@latest init` (dark mode, CSS vars, TypeScript)
5. Install all shadcn components
6. `npx magicui-cli@latest init` + all components
7. Copy assets: `logo.svg`, `adrian-ching.png`, `wordpress-export.xml`

**Create:**
- `vercel.json` — `{ "framework": "nextjs", "regions": ["sin1"] }`
- `.env.local.example` — all env vars with empty values
- `.gitignore` — node_modules, .env.local, .next, .vercel
- `lib/constants.ts` — all URLs, video IDs, social links
- `lib/currency.ts` — PRICING object, formatPrice(), Market type
- `lib/utils.ts` — cn(), buildCalendlyUrl()
- `tailwind.config.ts` — brand colors, font variables
- `app/globals.css` — CSS custom properties, dark theme
- `app/layout.tsx` — `<html lang="en" className="dark">`, fonts loaded, Sonner

**Commit:** `feat(sprint-0): foundation — deps, brand tokens, dark mode`
**Tag:** `v0.1.0`

---

## SPRINT 1 — Shared Components (2 hrs)
**Done when:** All components render in a test page, zero console errors.

| Component | Key behaviour |
|-----------|--------------|
| `Navbar.tsx` | Sticky, NavigationMenu (desktop), Sheet (mobile), "Book a Call" sky-blue CTA, NO social icons |
| `Footer.tsx` | Logo, nav, Adrian's personal social links + podcast, location, copyright, company social accounts secondary row |
| `Logo.tsx` | next/image src="/logo.svg" — never recreate in JSX |
| `SectionLabel.tsx` | `text-xs font-semibold tracking-widest uppercase text-brand-sky` |
| `AnimatedSection.tsx` | BlurFade wrapper, inView trigger, delay prop |
| `StatsBar.tsx` | 4 stats, NumberTicker on scroll |
| `GuaranteeBar.tsx` | 4 guarantee items, CheckCircle icons in brand-sky |
| `LudaSection.tsx` | `variant: 'full' \| 'compact'` — full on Home, compact on service pages + Contact |
| `VideoTestimonial.tsx` | YouTube iframe + pull-quote + attribution |
| `TestimonialCard.tsx` | Text quote + attribution |
| `CaseStudyCard.tsx` | Industry Badge, client, outcome, link |
| `RatingsStrip.tsx` | Clutch + TechBehemoths + Google star ratings |
| `PressBar.tsx` | "As featured in" strip |
| `StrategySessionForm.tsx` | 3-step form — Step1→Step2→Step3+Calendly |
| `GeoPage.tsx` | Reusable geo template, market prop |

**LudaSection critical notes:**
- BorderBeam on pillar cards on hover
- Bricolage Grotesque on pillar headings
- Slightly elevated bg (`bg-surface`) from page bg
- Never cramped — generous `py-10` minimum inside section

**StrategySessionForm critical notes:**
- State: `useState<1|2|3>(1)`
- Step 1→2: button text `"Show me what's possible →"`
- Step 2 submit: `"Request My Strategy Call →"`
- Step 3: Calendly as `buildCalendlyUrl(firstName, lastName, email)` — NOT embedded widget, styled button/link
- HubSpot graceful degradation: if env vars missing → log to console + advance to Step 3

**Tag:** `v0.2.0`

---

## SPRINT 2 — Home Page (3 hrs)
**Done when:** Home renders all 11 sections, animations fire, mobile + desktop look correct.

**Section order:**
1. Hero — DotPattern + Particles bg, staggered BlurFade (0/100/200/300ms), eyebrow, H1, sub, CTAs, trust clients line
2. Pain Cards — 3 cards, BlurFade on scroll
3. Stats Band — full-width navy bg, 4 stats, NumberTicker
4. BookXcess Feature Callout — 15x stat, standalone prominence
5. Services Preview — 3 cards linking to service pages
6. LUDA™ Full — `<LudaSection variant="full" />` — most important section, generous space
7. Client Marquee — `<Marquee>` all 17 clients, pause on hover
8. Video Testimonials — Justin (primary) + Jason, large format
9. Text Testimonials — 6 cards, grid
10. Press + Ratings Strip
11. YouTube Strip + podcast link
12. Final CTA — full-bleed

**Visual specs:**
- Background: `#08080f` (very dark navy-black, not pure black)
- Hero: DotPattern at 3% opacity + Particles qty=20 color `#75C7DA` opacity=0.12
- LUDA™ section: `bg-surface` (#0f0f1c) elevation, BorderBeam on pillars
- Stats band: `bg-brand-navy` (#302D83) — the one section with full navy bg
- Section padding: `py-24 md:py-32` minimum everywhere
- H1: `clamp(40px, 6vw, 80px)` Bricolage Grotesque, `tracking-tight`, `text-white`
- Key words in sky-blue: `text-brand-sky`
- NO centered-everything layouts — left-align hero, strong hierarchy

**Tag:** `v0.3.0`

---

## SPRINT 3 — Services Pages (2.5 hrs)
**Done when:** 6 service pages + overview build and render. FAQs open/close.

Each page: Hero → 3 real scenarios → LUDA™ compact → FAQ (Accordion, 4+ Qs) → CTA

Unique requirements:
- `/services/custom-platform-development` — H3 subsections for Mobile App, Web App, PWA (required for SEO)
- `/services/development-subscription` — full 3-tier pricing table (shadcn Table)
- `/services/ai-automation-subscription` — TODO comment for pricing

**Tag:** `v0.4.0`

---

## SPRINT 4 — Work + About + Contact + Resources (2.5 hrs)

**`/work`:** Tabs filter + 17 CaseStudyCard components. BookXcess 15x stat as featured card at top.
**`/about`:** Full story + Adrian photo (REAL photo, not placeholder) + IRL press + YouTube + Values + Why Us (7).
**`/contact`:** 2-col layout. Left: copy from Part 10. Right: `<StrategySessionForm />`.
**`/resources`:** App Cost Calculator link + resource list (with TODO on live URLs).
**`/testimonials`:** All text testimonials + both video embeds + ratings strip.
**`/thank-you`:** Confirmation + TODO: pre-call video + what to expect.

**Tag:** `v0.5.0`

---

## SPRINT 5 — Geo Pages (1.5 hrs)
8 geo pages via `<GeoPage>` component. Per table in Part 12.
After: `npm run build` — fix any dynamic route issues.
**Tag:** `v0.6.0`

---

## SPRINT 6 — Blog System + Migration (3 hrs)
1. Run migration script (Part 13)
2. Verify: `ls content/blog/ | wc -l` → 203
3. Build `/app/blog/page.tsx` — filter tabs, card grid, pagination (20/page)
4. Build `/app/blog/[slug]/page.tsx` — MDX, TOC, progress bar, related posts, inline CTAs
5. Add WP redirects to `next.config.ts`
**Tag:** `v0.7.0`

---

## SPRINT 7 — SEO + Analytics + Polish (2 hrs)
1. `app/sitemap.ts` — all routes + 203 blog slugs
2. `app/robots.ts`
3. `generateMetadata()` on every page with title template
4. JSON-LD on Home + geo + blog posts
5. `app/opengraph-image.tsx`
6. `react-cookie-consent` + conditional GA4 + Meta + LinkedIn
7. Final `next.config.ts` review
**Tag:** `v0.8.0`

---

## SPRINT 8 — QA + Deploy (1 hr)

### Hard Checklist
- [ ] `npm run build` — zero TypeScript errors, zero ESLint warnings
- [ ] `npm run start` — spot-check 10 routes
- [ ] LUDA™ appears on: Home, all 6 service pages, Contact, About
- [ ] Calendly URL ONLY on Step 3 — never before
- [ ] Both video testimonials embed (kRUL8NrM_Rk, KdxPAqwEDHY)
- [ ] Adrian photo renders from `/public/images/team/adrian-ching.png` (not a placeholder)
- [ ] Logo renders from `/public/logo.svg`
- [ ] Malaysia page shows MYR, all others show USD
- [ ] BookXcess 15x stat appears prominently on Home + /work
- [ ] 5 random testimonials verbatim — check against Part 7
- [ ] `ls content/blog/ | wc -l` → 203
- [ ] `/blog/app-development-cost-breakdown` renders
- [ ] `/blog/how-long-it-takes-to-build-an-app` renders
- [ ] `/sitemap.xml` → 200, contains 200+ URLs
- [ ] Mobile 375px, 768px, 1280px — no horizontal scroll
- [ ] No banned words anywhere (grep for: MVP, pivot, disrupt, seamless, "Joel Keat", "The Second Team")
- [ ] Social links in Footer all point to correct URLs from Part 9
- [ ] Podcast link "Tech It Or Leave It" appears in Footer + About

### Deploy
```bash
git add -A && git commit -m "chore(launch): QA complete — all checks green"
git tag v1.0.0 -m "Production launch"
git push origin main --tags
# Vercel auto-deploys from main — upstackstudio-v4 repo already linked
# Point upstackstudio.com domain to this deployment when ready

### Sprint-end push sequence (every sprint, not just final)
```bash
npm run build           # fix all errors before proceeding
git add -A
git commit -m "feat(sprintN): description"
git tag vX.X.X -m "Sprint N complete"
git push origin main --tags
# Vercel staging deploys automatically — review at staging URL
```

### Environment variables (set in Vercel dashboard, never in code)
- `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
- `NEXT_PUBLIC_HUBSPOT_FORM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
Claude Code creates `.env.local.example` with these keys but never commits actual values.
```

---

## PART 18 — DECISION RULES (when uncertain)

| Situation | Rule |
|-----------|------|
| Copy ambiguous | Cut 30%. Lead with outcome. No fluff. |
| Design ambiguous | Darker. More minimal. More confident. Navy bg, sky accent. |
| Image missing | Unsplash abstract URL as placeholder |
| Testimonial needed | Part 7 only. Verbatim. Never invent or paraphrase. |
| Build error | Fix immediately. Keep moving. |
| LUDA™ placement unclear | Add it. It should appear on every major page. |
| Font choice unclear | Bricolage Grotesque (display/headings) + Inter (body/UI). Never Sora, Playfair, or Space Grotesk. |
| Copy sounds generic | Run marketingskills `copywriting` skill. Read `product-marketing-context.md` first. Lead with outcome, cut 30%, remove fluff. |
| Design looks like a Webflow template | Run UI UX Pro Max. Read `frontend-design/SKILL.md`. Bold, intentional, architecturally significant — not safe. |
| AI-enabled angle missing | Check hero eyebrow chip, DNA section card, About methodology section, footer tech stack. Must be woven in — not bolted on. |
| Light mode looks broken | Use CSS vars everywhere (`bg-[var(--bg)]`). Never hardcode colours. Test both modes before every sprint push. |
| Pain primer form simplified | Restore exact 3 textarea questions. Never replace with dropdowns. Button must say "Show me what's possible →". Must be at /strategy-session, not /contact. |
| CTA links to wrong URL | All "Book a Strategy Call" CTAs link to /strategy-session. Never link directly to Calendly or /contact. |
| Step 3 page appears on /strategy-session | Remove it. Successful submit triggers router.push(buildCalendlyUrl(...)). Redirect to Calendly IS the completion. |
| Animation unclear | BlurFade scroll reveal. One orchestrated entrance. No scatter. |
| Card layout unclear | Not centered. Not uniform heights. Use hierarchy. |

---

*Brief complete. 8 sprints. 17 case studies. 12 testimonials. 203 blog posts. 6 service pages. 8 geo pages.*
*All facts confirmed from source documents. All testimonials verbatim.*
*Calendly: https://calendly.com/upstackstudio/45-minute-strategy-session*
*YouTube: https://youtube.com/@adrianchinghc | Podcast: https://adrianchinghc.buzzsprout.com*

## PART 19 — SALES CALL INSIGHTS (from real recorded strategy sessions)

These come from Adrian's actual transcripts. Use verbatim where specified.

### "Why not use a template?" — Adrian's real answer (GT-Max Motors call)
*"Templates, yes, there are a lot out there. But confirm in the future, got technical issues. We don't take any of those anymore. Because you can see it looks very nice, but when we go inside the code base, most of them always have issues. It's very hard to change one thing without breaking several other things. We've used templates before, done that, so now we build everything from scratch."*

Use this as the FAQ answer on `/services/custom-platform-development`.

### "Can't we just use AI to build this?" — Adrian's real answer (GT-Max Motors call)
*"Even using AI tools to build applications — yes, you can do that. But when you want to deploy to production, when you want to use it for your business, a lot of times there's going to be a security issue. It's not going to be production ready. AI is not smart enough to do everything. You still need someone driving the project. We use AI to build faster — but senior engineers own every outcome."*

Use this for the AI Integration page FAQ and Custom Platform Development FAQ.

### How Adrian opens every strategy call (from multiple transcripts)
*"The goal of this call is just really simple. I want to understand what you're trying to achieve, what challenges you're facing right now, and see if we'll be the right team to help you bring it to life. If we're not, we'll tell you."*

Use verbatim on the Contact page (already in brief).

### The committee buyer dynamic (from UrKlinik transcript + confirmed ICP behaviour)
A procurement contact said: *"Shen went through a lot of different vendors and shortlisted for me to choose and make decisions for."*

**At RM20M–100M+ companies, the typical buying journey:**
1. COO/founder feels the pain and has budget authority
2. They delegate vendor research to Head of IT, Ops Manager, or a trusted EA
3. That person shortlists 3–5 vendors, builds an internal slide deck, presents to the boss
4. The COO reviews the shortlist for 10 minutes and picks one

**The site has two simultaneous readers:**

| The Scout | The Decision-Maker |
|-----------|-------------------|
| IT Manager, Ops Manager, EA | COO, MD, Founder |
| Spends 10–20 minutes on site | Spends 60–90 seconds |
| Reads case studies, FAQs, tech specs | Reads hero, scans LUDA™, checks price |
| Needs ammunition for internal pitch | Needs to feel confident fast |
| Fears recommending the wrong vendor | Fears being burned again |
| Asks: "Can I justify this to my boss?" | Asks: "Can I trust these people?" |

**What serves each reader — and how the site addresses both simultaneously:**

- **Hero** (serves decision-maker): Pain cards + H1 speak to whoever *owns* the problem. The scout reads this and immediately knows how to frame the recommendation: "They understand exactly what we're dealing with."
- **LUDA™ section** (serves both): Gives the decision-maker a concrete framework to trust. Gives the scout a nameable, presentable system: *"They have a 4-pillar delivery system called LUDA™ — it guarantees no extra charge for delays."* That sentence works in any internal slide deck.
- **Case studies** (serves scout): Must be "scout-ready" — concrete outcomes, specific industries, quotable client names. The scout needs specifics they can put in a vendor comparison doc.
- **FAQ sections** (serves scout): Pre-handles objections the scout will face from their boss: "Why not India developers?" "Why not a template?" "Why not an off-the-shelf SaaS?"
- **LUDA™ guarantees bar** (serves decision-maker): 2-week risk-free trial, no extra charge for delays — these remove risk from the decision-maker's perspective, not just the scout's.

**One copy addition for the Contact page left column:**
Add this line after the "What the call covers" section:

> *"Whether you're the person who owns this problem — or the person building the case for solving it — this call is for you."*

This is the only direct acknowledgement of the dual-reader dynamic. It's one line, doesn't break the experience for either reader, and gives the scout permission to book the call themselves.

**Case studies must be "scout-ready" — each card needs:**
- Industry + company name (for the vendor comparison doc)
- What was built in one concrete sentence (not abstract)
- One specific outcome or metric if available (e.g. "15x ecommerce revenue growth")
- App store link or live URL where confirmed (proves real delivery)
- Client name + title for the testimonial pull quote

The scout is building a shortlist. Make it easy for them to write: *"Upstack Studio — delivered 15x revenue growth for BookXcess, rebuilt a $500K failed project for Black Tulip, 8+ years, 4.9★ on Clutch."*
