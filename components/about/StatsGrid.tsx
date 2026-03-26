"use client";

import { AnimatedSection, AnimatedCounter } from "@/components/common";
import { COMPANY_STATS } from "@/lib/constants";

const stats = [
  {
    value: COMPANY_STATS.yearsInBusiness,
    suffix: "+",
    label: "Years Shipping Software",
    sublabel: "Still here. Still growing.",
  },
  {
    value: COMPANY_STATS.projectsCompleted,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "In production today",
  },
  {
    value: COMPANY_STATS.teamMembers,
    suffix: "",
    label: "Full-Time Team",
    sublabel: "No contractors",
  },
  {
    value: COMPANY_STATS.clientsServed,
    suffix: "+",
    label: "Clients Trusted Us",
    sublabel: "RM20M to RM500M+ companies",
  },
  {
    value: COMPANY_STATS.fundingRaised,
    prefix: "$",
    suffix: "",
    label: "Outside Funding",
    sublabel: "Bootstrapped. Profitable.",
  },
  {
    value: COMPANY_STATS.remotePercentage,
    suffix: "%",
    label: "Malaysia-Based",
    sublabel: "Same timezone, same values",
  },
];

export function StatsGrid() {
  return (
    <section className="py-16 md:py-24">
      {/* Left-aligned header */}
      <AnimatedSection className="mb-10 md:mb-14">
        <h2 className="text-section-title">The Track Record</h2>
      </AnimatedSection>

      {/* No cards — let the numbers breathe with spacing and a subtle divider grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-14 gap-x-6 md:gap-x-12">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.label} delay={index * 0.05}>
            <div className="relative">
              {/* Accent line above each stat */}
              <div className="absolute -top-4 left-0 w-8 h-0.5 bg-brand-blue/30" />
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue font-display mb-2 tabular-nums">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter value={stat.value} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-base md:text-lg font-medium">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-sm text-muted mt-1">{stat.sublabel}</p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
