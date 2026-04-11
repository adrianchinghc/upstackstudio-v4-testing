'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/common'

// Culture photos — team events, dinners, office moments
const CULTURE_PHOTOS = [
  {
    src: '/images/team/culture-photos/21e98305d31d91e6b7eb7ed4debfb9fbfc2b5a43.png',
    alt: 'Team gathering',
  },
  {
    src: '/images/team/culture-photos/2f83aa90f6d36e86ba27f361479892e4b90672c3.jpg',
    alt: 'Team event',
  },
  {
    src: '/images/team/culture-photos/481852f5410885da879bb63dd7202b19201e45d2.jpg',
    alt: 'Office collaboration',
  },
  {
    src: '/images/team/culture-photos/7d6e4535219fa16ceea32f282efa5be1f93924f1.png',
    alt: 'Team celebration',
  },
  {
    src: '/images/team/culture-photos/8651ba74bcbfe0cacc10b57a7f292aca5bfe233b.png',
    alt: 'Team dinner',
  },
  {
    src: '/images/team/culture-photos/8e5d59e63dc93a299b5a9ba293c7fcba2f0e3b05.jpg',
    alt: 'Podcast recording',
  },
  {
    src: '/images/team/culture-photos/97212112db955ad46e577732f4a2aaefa58d31c8.png',
    alt: 'Team awards',
  },
  {
    src: '/images/team/culture-photos/a5324b254e4f3129d54e3e24071f32e506c27d8c.png',
    alt: 'Team outing',
  },
]

export function TeamPhotoCollage() {
  return (
    <section className="py-8 md:py-12 overflow-hidden">
      {/* Full-bleed asymmetric grid — breaks out of container */}
      <div className="-mx-4 md:-mx-6 lg:-mx-12">
        <AnimatedSection>
          {/* Desktop: Intentional asymmetric bento grid */}
          <div className="hidden md:grid grid-cols-12 gap-2 md:gap-3">
            {/* Hero image — dominates left side */}
            <div className="col-span-5 row-span-2 relative h-[400px] lg:h-[480px] group overflow-hidden">
              <Image
                src={CULTURE_PHOTOS[0].src}
                alt={CULTURE_PHOTOS[0].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="40vw"
                priority
              />
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Top right cluster — varied sizes */}
            <div className="col-span-4 relative h-[195px] lg:h-[235px] group overflow-hidden rounded-sm">
              <Image
                src={CULTURE_PHOTOS[1].src}
                alt={CULTURE_PHOTOS[1].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="30vw"
              />
            </div>
            <div className="col-span-3 relative h-[195px] lg:h-[235px] group overflow-hidden">
              <Image
                src={CULTURE_PHOTOS[2].src}
                alt={CULTURE_PHOTOS[2].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="25vw"
              />
            </div>

            {/* Bottom right cluster */}
            <div className="col-span-3 relative h-[195px] lg:h-[235px] group overflow-hidden rounded-lg">
              <Image
                src={CULTURE_PHOTOS[3].src}
                alt={CULTURE_PHOTOS[3].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="25vw"
              />
            </div>
            <div className="col-span-4 relative h-[195px] lg:h-[235px] group overflow-hidden">
              <Image
                src={CULTURE_PHOTOS[4].src}
                alt={CULTURE_PHOTOS[4].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="30vw"
              />
            </div>

            {/* Bottom row — full width, smaller height */}
            <div className="col-span-4 relative h-[160px] lg:h-[180px] group overflow-hidden">
              <Image
                src={CULTURE_PHOTOS[5].src}
                alt={CULTURE_PHOTOS[5].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="33vw"
              />
            </div>
            <div className="col-span-5 relative h-[160px] lg:h-[180px] group overflow-hidden rounded-sm">
              <Image
                src={CULTURE_PHOTOS[6].src}
                alt={CULTURE_PHOTOS[6].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="40vw"
              />
            </div>
            <div className="col-span-3 relative h-[160px] lg:h-[180px] group overflow-hidden">
              <Image
                src={CULTURE_PHOTOS[7].src}
                alt={CULTURE_PHOTOS[7].alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="25vw"
              />
            </div>
          </div>

          {/* Mobile: Horizontal scroll with dramatic first image */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {/* First image larger */}
              <div className="flex-shrink-0 snap-start relative w-[75vw] h-[280px] overflow-hidden">
                <Image
                  src={CULTURE_PHOTOS[0].src}
                  alt={CULTURE_PHOTOS[0].alt}
                  fill
                  className="object-cover"
                  sizes="75vw"
                  priority
                />
              </div>
              {/* Rest smaller */}
              {CULTURE_PHOTOS.slice(1, 6).map((photo, index) => (
                <div
                  key={photo.src}
                  className={`flex-shrink-0 snap-start relative w-[55vw] h-[280px] overflow-hidden ${
                    index % 2 === 0 ? 'rounded-sm' : ''
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="55vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
