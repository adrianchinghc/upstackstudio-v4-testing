import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import { RATINGS } from '@/lib/constants'

interface RatingsStripProps {
  className?: string
  variant?: 'default' | 'compact'
}

export function RatingsStrip({ className, variant = 'default' }: RatingsStripProps) {
  const ratings = Object.values(RATINGS)

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-6 md:gap-10',
        variant === 'compact' && 'gap-4 md:gap-6',
        className
      )}
    >
      {ratings.map((rating) => (
        <div
          key={rating.label}
          className={cn(
            'flex items-center gap-2',
            variant === 'compact' && 'gap-1.5'
          )}
        >
          <div className="flex items-center">
            <Star className={cn(
              'text-amber-400 fill-amber-400',
              variant === 'default' ? 'h-5 w-5' : 'h-4 w-4'
            )} />
          </div>
          <span className={cn(
            'font-semibold',
            variant === 'default' ? 'text-lg' : 'text-base'
          )}>
            {rating.score}
          </span>
          <span className={cn(
            'text-muted',
            variant === 'default' ? 'text-base' : 'text-sm'
          )}>
            on {rating.label}
          </span>
        </div>
      ))}
    </div>
  )
}
