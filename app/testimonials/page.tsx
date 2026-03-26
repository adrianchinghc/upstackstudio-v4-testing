import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionLabel,
  AnimatedSection,
  TestimonialCard,
  RatingsStrip,
} from "@/components/common";
import { Button } from "@/components/ui/button";
import { YT_JUSTIN, YT_JASON } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about working with Upstack Studio. Real testimonials from companies across manufacturing, financial services, healthcare, and more.",
  alternates: {
    canonical: "/testimonials",
  },
};

// All testimonials from the brief - verbatim
const TESTIMONIALS = [
  {
    quote:
      "Brilliant job guys! Just brilliant! So many amazing changes in just a few days. Thank you for the quick response to our predicament. You really don't know how much this means to us. I owe you guys the biggest favour.",
    author: "Andrew Yap",
    role: "Founder",
    company: "BookXcess",
    image: "/images/clients/andrewyap.png",
    featured: true,
  },
  {
    quote:
      "They were much better than any development house we'd used previously.",
    author: "Mark Choo",
    role: "Ex-CEO",
    company: "Teleme",
    image: "/images/clients/mark-choo.webp",
  },
  {
    quote:
      "Pleasant experience working with a team of professionals who were responsive and reliable. Most impressive was that the entire team from Upstack Studio went above and beyond to ensure the deliverables and deadline were met.",
    author: "Eddy How",
    role: "Deputy Manager",
    company: "Magnum 4D Berhad",
    image: "/images/clients/eddyhow.png",
  },
  {
    quote:
      "I was impressed by their knowledge on web design, user experience, and optimization. The total app delivery process exceeded our expectations with remarkable turnaround speed.",
    author: "Heidzir Jamarajid",
    role: "IT Administrator",
    company: "The Malaysian Insight",
    image: "/images/clients/heidzirjamaraji.png",
  },
  {
    quote:
      "We worked closely with Adrian and his team during the project and their response was very quick and timely. Work is delivered on time and sometimes, they even go out of their way to complete urgent tasks which we really appreciate.",
    author: "Dinie Johari",
    role: "Assistant Manager",
    company: "BookXcess",
    image: "/images/clients/diniejohari.png",
  },
  {
    quote:
      "Adrian and his team were very agile and responsive. They are very transparent in their communication and operations throughout the project as we're always able to reach them whenever we need to.",
    author: "Bon Chee Fong",
    role: "Project Coordinator",
    company: "OneStop Manpower",
    image: "/images/clients/cheefongbon.png",
  },
  {
    quote:
      "They were very patient in dealing with us, which we appreciated, as we're not a technology company.",
    author: "Siyuan Lye",
    role: "Ex-Head of Marketing",
    company: "Whitman Independent Advisors",
    image: "/images/clients/siyuan.jpeg",
  },
  {
    quote:
      "The management team are satisfied with the deliverables, and decided to continue engaging Upstack team for the ongoing product enhancement and support. Upstack Team was able to complete the project within the agreeable timeframe. We were very satisfied with their work every step of the way.",
    author: "Tan Loo Toon",
    role: "CTO",
    company: "NiuAce for Builders",
    image: "/images/clients/loo-toon-tan.jpg",
  },
  {
    quote:
      "They made sure the prototype was better than what I imagined initially. Very approachable and very easy to work with.",
    author: "Chien Yee Tan",
    role: "Founder",
    company: "PriverCar",
    image: "/images/clients/chienyeetan.png",
  },
  {
    quote:
      "Working with Adrian and his team was a great experience. They handled everything professionally and made sure to address any potential issues before delivering the project. Even when our requirements changed, they were patient and worked with us to make the necessary adjustments, explaining everything clearly. Their dedication and passion made a huge difference compared to other vendors. They didn't just deliver and leave; they supported us every step of the way.",
    author: "Ivan Lee",
    role: "Executive Committee Member",
    company: "AFA Malaysia",
    image: "/images/clients/ivan-lee.png",
    featured: true,
  },
  {
    quote:
      "Adrian took the initiative to meet up personally to touch base about our projects after inquiries were sent online. We find him very honest, helpful, and professional. He even provided some invaluable advice for us to start working with before any charges occurred.",
    author: "MaoSheng Toh",
    role: "Co-founder",
    company: "Poof Cafe",
    image: "/images/clients/maoshengtoh.png",
  },
];

// Video testimonial quotes for context
const VIDEO_TESTIMONIALS = [
  {
    id: YT_JUSTIN,
    author: "Justin Ruffier",
    role: "Founder",
    company: "Whisker Tracker",
    location: "San Diego, USA",
    quotes: [
      "I shopped around. I looked at assembling a team of freelancers. I reached out to about two other agencies here in the United States in San Diego, California. In hindsight, I'm glad I did not do that.",
      "You had a great process. You had a great team. You're very knowledgeable. Your service offerings really fit exactly what I was looking for.",
      "Your team communicates with me very often and really outlines every step of the development we're in and so I always know where we are.",
      "I've had another developer look at what you guys have produced and said, 'You have a very clean code base.'",
    ],
  },
  {
    id: YT_JASON,
    author: "Jason Anderson",
    role: "Executive Director",
    company: "Black Tulip",
    location: "USA",
    quotes: [
      "We had a pretty negative experience with our previous developers. There were a number of things wrong with the project, but as the project evolved, they just couldn't keep up.",
      "We really liked the model of scaling up and scaling down. So, that was a big deal to us. The price was a good one. It's not inexpensive, but at the same time, we've gotten our money's worth.",
      "Ying, one of their designers, she's very good. She's a true graphic artist. She has a very strong aesthetic. She crushed it.",
      "We're building up to our first private release here in the next several weeks and then go public and it's in 10 languages. Like just a very hard thing to pull off.",
    ],
  },
];

export default function TestimonialsPage() {
  // Separate featured from regular testimonials
  const featuredTestimonials = TESTIMONIALS.filter((t) => t.featured);
  const regularTestimonials = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <div className="bg-page pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header — dramatic typography */}
        <AnimatedSection className="max-w-4xl mb-16 md:mb-24">
          <SectionLabel className="mb-4 block">Testimonials</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display mb-8 leading-[1.1]">
            Don&apos;t take our word for it.
          </h1>
          <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl">
            Every quote is verbatim. We don&apos;t paraphrase, summarize, or
            cherry-pick. These are the words our clients used.
          </p>
        </AnimatedSection>

        {/* Featured Pull Quote — hero moment */}
        {featuredTestimonials[0] && (
          <AnimatedSection className="mb-16 md:mb-24">
            <div className="relative">
              <span className="text-8xl md:text-9xl font-display font-bold leading-none text-brand-blue/10 select-none absolute -top-8 -left-4">
                &ldquo;
              </span>
              <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl pl-4 md:pl-8 border-l-4 border-brand-blue">
                {featuredTestimonials[0].quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pl-4 md:pl-8">
                {featuredTestimonials[0].image && (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-blue/20">
                    <img
                      src={featuredTestimonials[0].image}
                      alt={featuredTestimonials[0].author}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <p className="text-lg font-semibold">
                    {featuredTestimonials[0].author}
                  </p>
                  <p className="text-muted">
                    {featuredTestimonials[0].role},{" "}
                    <span className="text-brand-blue">
                      {featuredTestimonials[0].company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Ratings Strip */}
        <AnimatedSection className="mb-16 md:mb-24">
          <RatingsStrip />
        </AnimatedSection>

        {/* Video Testimonials */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-10 md:mb-12 max-w-3xl">
            <SectionLabel className="mb-4 block">
              Video Testimonials
            </SectionLabel>
            <h2 className="text-section-title">
              Hear it directly from our clients.
            </h2>
          </AnimatedSection>

          {/* Video grid — equal columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {VIDEO_TESTIMONIALS.map((video, index) => (
              <AnimatedSection key={video.id} delay={index * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-surface border border-default">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`${video.author} - ${video.company} Testimonial`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-lg font-semibold">{video.author}</p>
                  <p className="text-muted">
                    {video.role}, {video.company}
                  </p>
                  <p className="text-sm text-muted">{video.location}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Text Testimonials — with featured item */}
        <section className="mb-16 md:mb-24">
          <AnimatedSection className="mb-10 md:mb-12 max-w-3xl">
            <SectionLabel className="mb-4 block">
              Written Testimonials
            </SectionLabel>
            <h2 className="text-section-title">
              More voices from our clients.
            </h2>
          </AnimatedSection>

          {/* Second featured testimonial if exists */}
          {featuredTestimonials[1] && (
            <AnimatedSection className="mb-8">
              <TestimonialCard {...featuredTestimonials[1]} />
            </AnimatedSection>
          )}

          {/* Regular testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.03}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA — confident close */}
        <AnimatedSection className="text-center py-16 md:py-24 -mx-4 md:-mx-6 px-4 md:px-6 bg-surface-2 rounded-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-6">
            Ready to become our next success story?
          </h2>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join companies like BookXcess, Daikin, and Magnum 4D who trust us to
            build software that actually works.
          </p>
          <Button asChild size="lg">
            <Link href="/strategy-session">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}
