'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  className?: string
}

/**
 * YouTube Facade — Improves LCP by deferring iframe load until user interaction.
 * Shows a thumbnail + play button initially, loads full iframe on click.
 * Saves ~500KB+ of initial page weight from YouTube embed.
 */
export function YouTubeFacade({ videoId, title, className }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // YouTube thumbnail URLs — maxresdefault is highest quality
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className={`relative group cursor-pointer bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail with fallback */}
      <picture>
        <source srcSet={thumbnailUrl} type="image/jpeg" />
        <img
          src={fallbackThumbnail}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager" // Above fold, load immediately
        />
      </picture>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
        </div>
      </div>

      {/* YouTube branding hint */}
      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
        Watch on YouTube
      </div>
    </button>
  )
}
