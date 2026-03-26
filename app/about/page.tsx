import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionLabel,
  AnimatedSection,
  RatingsStrip,
} from "@/components/common";
import { LudaSection } from "@/components/luda/LudaSection";
import {
  StatsGrid,
  TeamGrid,
  TeamPhotoCollage,
  GlobalReach,
  WrittenTestimonial,
} from "@/components/about";
import { Button } from "@/components/ui/button";
import { SOCIAL, PRESS, YT_JUSTIN, YT_JASON } from "@/lib/constants";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Target,
  MessageSquare,
  Youtube,
  Podcast,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We exist for one reason: to help growing companies build technology that actually works. Learn about our story, values, and the LUDA Framework.",
  alternates: {
    canonical: "/about",
  },
};

const DNA_VALUES = [
  {
    title: "2-Week Sprints",
    description:
      "You see working software every 14 days. Not mockups. Not promises. Deployable code you can test with real users.",
    icon: Zap,
  },
  {
    title: "Senior-Only Teams",
    description:
      "No juniors learning on your project. Every engineer has 5+ years experience and has shipped production software for paying customers.",
    icon: ShieldCheck,
  },
  {
    title: "We Push Back",
    description:
      "You're paying us to tell you the truth. If a feature will waste your money or delay your launch, we'll say so — even if you disagree.",
    icon: Target,
  },
  {
    title: "Fixed-Scope Pricing",
    description:
      "You know exactly what you pay before we start. No hourly billing. No surprise invoices. Scope creep is on us, not you.",
    icon: TrendingUp,
  },
  {
    title: "Bi-Weekly Reviews",
    description:
      "Every two weeks, you see progress on a call with the team that built it. Questions answered in real-time. No waiting for status updates.",
    icon: MessageSquare,
  },
  {
    title: "One Squad, Start to Finish",
    description:
      "The PM, designer, and developers who start your project are the same ones who finish it. No handoffs. No re-explaining.",
    icon: Users,
  },
];

const WHY_US = [
  "<strong>The person you meet is the person who builds.</strong> No sales handoff. Adrian reviews every project personally.",
  "<strong>We say no more than we say yes.</strong> If the fit isn't right, we tell you — and recommend someone who is.",
  "<strong>Senior engineers only.</strong> No juniors. No interns. No offshore night shifts you never meet.",
  "<strong>You always know where you stand.</strong> Bi-weekly calls. Slack access. A live sprint board you can check anytime.",
  "<strong>Our delays, our cost.</strong> If we miss a deadline we agreed to, we pay for the extra time — not you.",
  "<strong>You own everything.</strong> Code, designs, documentation, credentials. From day one, not just at handover.",
  "<strong>Proven across industries.</strong> Manufacturing (Daikin), retail (BookXcess), healthcare (Teleme), media (TMI), fintech, logistics, HR tech.",
];

const QUALIFYING_QUESTIONS = [
  {
    question: "Why now?",
    description:
      "What changed in your business that makes this problem worth solving today — not next quarter?",
  },
  {
    question: "Why custom software?",
    description:
      "We'll ask if you've tried off-the-shelf tools, hiring internally, or process changes. Sometimes those are better answers.",
  },
  {
    question: "Are we the right team?",
    description:
      "We're not the cheapest. We're not the fastest. If you need either, we'll tell you and recommend someone else.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header — left-aligned, asymmetric */}
        <AnimatedSection className="max-w-3xl mb-12 md:mb-16">
          <SectionLabel className="mb-4 block">About Us</SectionLabel>
          <h1 className="text-page-title mb-6">
            We Build the Software Your Business Can&apos;t Buy Off the Shelf
          </h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-4">
            When your operations outgrow spreadsheets and your industry has no
            perfect SaaS — you need custom software. We&apos;ve been building it
            since 2017, for companies doing RM20M–RM500M+ in revenue who
            can&apos;t afford another failed project.
          </p>
          <p className="text-base text-muted">
            Kuala Lumpur-based. Delivered in 6 countries. 40+ clients. 25+
            production systems running today.
          </p>
        </AnimatedSection>

        {/* Team Photo Collage */}
        <TeamPhotoCollage />

        {/* Stats Grid */}
        <StatsGrid />

        {/* Global Reach — compact strip */}
        <GlobalReach />

        {/* AI-Enabled Section — HERO MOMENT */}
        <section className="py-20 md:py-32 -mx-4 md:-mx-6 px-4 md:px-6 bg-surface-2 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
                <div className="max-w-2xl">
                  <SectionLabel className="mb-4 block">
                    How We Build
                  </SectionLabel>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display mb-6 leading-[1.1]">
                    AI-Enabled Engineering
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary mb-6 leading-relaxed">
                    We build software the way the world&apos;s best engineers
                    build it — with AI. Our team uses Claude Code, AI-assisted
                    code review, and automated testing on every sprint.
                  </p>
                  <p className="text-lg text-muted leading-relaxed">
                    AI-enabled doesn&apos;t mean AI-replaced. It means your
                    project gets our senior engineers plus the best tools on the
                    planet. That&apos;s why 16 weeks is achievable when
                    competitors quote 12 months.
                  </p>
                </div>
                <div className="flex-shrink-0 md:text-right">
                  <div className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-brand-blue font-display leading-none">
                    17+
                  </div>
                  <p className="text-lg md:text-xl font-semibold mt-4 md:max-w-[200px] md:ml-auto">
                    projects shipped with AI-enabled engineering
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">Our Story</SectionLabel>
            <h2 className="text-section-title mb-8">
              Built from experience — including the painful kind.
            </h2>

            <div className="prose prose-lg text-secondary max-w-none">
              <p>
                We started in a cafe in Petaling Jaya. Just a few engineers who
                believed there had to be a better way to build software for
                growing companies.
              </p>
              <p>
                We&apos;ve walked away from a RM350,000 prospect because there
                were too many red flags. Both co-founders left within a year. We
                survived 3 months with no clients — team still on payroll — and
                had to tell a prospect honestly: &ldquo;I don&apos;t know
                whether I will still be here.&rdquo;
              </p>
              <p>
                We&apos;ve carried RM80,000 in bad debt from a client who
                doubled scope then refused to pay. Every one of those failures
                taught us something that now protects our clients.
              </p>
              <p>
                From those lessons came the LUDA Framework and the three
                qualifying questions we ask before every engagement. Now
                we&apos;re delivering for 9-figure brands and public-listed
                companies across six countries.
              </p>
            </div>

            {/* Press mention */}
            <div className="mt-8 pt-8 border-t border-default">
              <a
                href={PRESS.inRealLife.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-brand-blue hover:underline"
              >
                <span className="text-sm font-medium">Read more:</span>
                <span className="text-base">{PRESS.inRealLife.title}</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-sm text-muted mt-1">
                {PRESS.inRealLife.source}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Grid */}
        <TeamGrid />

        {/* Product Development DNA — horizontal icon-forward cards */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-12 md:mb-16 max-w-3xl">
            <SectionLabel className="mb-4 block">How We Work</SectionLabel>
            <h2 className="text-section-title mb-4">What You Actually Get</h2>
            <p className="text-lg text-secondary leading-relaxed">
              Not promises. Not values statements. Here&apos;s the concrete
              experience of working with us — the same process that grew
              BookXcess eCommerce revenue 15×, launched GO DAIKIN in half the
              quoted time, and shipped TMI&apos;s mobile app in 2 weeks.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {DNA_VALUES.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.05}>
                <div className="group flex gap-5 p-6 rounded-xl bg-surface border border-border hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors">
                    <value.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Qualifying Questions — no cards, editorial typography */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">We Say No a Lot</SectionLabel>
            <h2 className="text-section-title mb-12">
              3 questions we ask before taking your money.
            </h2>

            <div className="space-y-10">
              {QUALIFYING_QUESTIONS.map((item, index) => (
                <div
                  key={item.question}
                  className="grid grid-cols-[auto,1fr] gap-6 items-baseline"
                >
                  <span className="text-5xl md:text-6xl font-bold text-brand-blue/40 dark:text-brand-blue/30 font-display leading-none">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.question}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Us */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-surface border border-default p-8 md:p-12">
            <SectionLabel className="mb-4 block">Why Us</SectionLabel>
            <h2 className="text-section-title mb-8">
              7 Things We Do That Most Agencies Won&apos;t
            </h2>

            <ol className="space-y-4">
              {WHY_US.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p
                    className="text-lg pt-1"
                    dangerouslySetInnerHTML={{ __html: reason }}
                  />
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* Written Testimonial */}
        <WrittenTestimonial />

        {/* LUDA Section */}
        <LudaSection variant="full" />

        {/* YouTube / Podcast */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-12 md:mb-16 max-w-3xl">
            <SectionLabel className="mb-4 block">
              Don&apos;t Take Our Word For It
            </SectionLabel>
            <h2 className="text-section-title">
              Hear it from the people who paid us.
            </h2>
          </AnimatedSection>

          {/* Two videos side by side */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JUSTIN}`}
                    title="Justin Ruffier - Whisker Tracker Testimonial"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-4">
                <span className="font-semibold">Justin Ruffier</span>
                <span className="text-muted"> · Founder, Whisker Tracker</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_JASON}`}
                    title="Jason Anderson - Tradelink Testimonial"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-4">
                <span className="font-semibold">Jason Anderson</span>
                <span className="text-muted"> · CEO, Tradelink</span>
              </p>
            </AnimatedSection>
          </div>

          {/* Links */}
          <AnimatedSection
            delay={0.15}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors text-sm"
            >
              <Youtube className="h-4 w-4 text-red-500" />
              <span className="font-medium">More on YouTube</span>
            </a>
            <a
              href={SOCIAL.podcast}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-default bg-surface hover:bg-surface-2 transition-colors text-sm"
            >
              <Podcast className="h-4 w-4 text-brand-blue" />
              <span className="font-medium">Tech It Or Leave It</span>
            </a>
          </AnimatedSection>
        </section>

        {/* Ratings */}
        <AnimatedSection className="mb-16 md:mb-24">
          <RatingsStrip />
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h2 className="text-section-title mb-6">
            Still reading? Let&apos;s see if we&apos;re the right fit.
          </h2>
          <p className="text-lg text-secondary mb-4 max-w-2xl mx-auto">
            45 minutes with Adrian. You&apos;ll walk away with a clear picture
            of what your project would look like — timeline, team, investment —
            whether you work with us or not.
          </p>
          <p className="text-base text-muted mb-8">
            We take 3–4 new projects per quarter. If your timeline is urgent,
            don&apos;t wait.
          </p>
          <Button asChild size="lg">
            <Link href="/strategy-session">
              Book Your Strategy Call
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}
