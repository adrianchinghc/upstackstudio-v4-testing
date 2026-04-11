'use client'

import Image from 'next/image'
import { AnimatedSection, SectionLabel } from '@/components/common'
import { TEAM_MEMBERS } from '@/lib/constants'
import { Linkedin } from 'lucide-react'

export function TeamGrid() {
  return (
    <section className="py-20 md:py-32">
      {/* Left-aligned header with dramatic typography */}
      <AnimatedSection className="mb-16 md:mb-20">
        <SectionLabel className="mb-6 block">The Team</SectionLabel>
        <div className="max-w-4xl">
          <h2 className="text-section-title mb-6">
            These are the people who&apos;ll build your software.
          </h2>
          <p className="text-xl md:text-2xl text-secondary leading-relaxed">
            Not contractors. Not outsourced. Full-time engineers and designers based in Malaysia —
            the same faces from kickoff to launch.
          </p>
        </div>
      </AnimatedSection>

      {/* Grid with varied rhythm — offset rows for visual interest */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
        {TEAM_MEMBERS.map((member, index) => {
          // Create visual rhythm with staggered delays
          const row = Math.floor(index / 5)
          const isOffsetRow = row % 2 === 1

          return (
            <AnimatedSection
              key={member.name}
              delay={index * 0.04}
              className={isOffsetRow ? 'lg:translate-y-6' : ''}
            >
              <div className="group cursor-default">
                {/* Photo with dramatic hover */}
                <div className="relative mb-5">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto overflow-hidden rounded-full bg-surface-2">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-border group-hover:ring-brand-blue transition-all duration-500 z-10" />

                    <Image
                      src={member.image}
                      alt={member.fullName}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 112px, 144px"
                    />

                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-500 z-[5]" />
                  </div>
                </div>

                {/* Name and role with refined typography */}
                <div className="text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-1 flex items-center justify-center gap-2">
                    <span className="group-hover:text-brand-blue transition-colors duration-300">
                      {member.name}
                    </span>
                    {'linkedin' in member && member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-brand-blue transition-colors duration-300 opacity-0 group-hover:opacity-100"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm text-muted tracking-wide">{member.role}</p>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      {/* Subtle accent line */}
      <div className="mt-16 md:mt-24 flex justify-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
