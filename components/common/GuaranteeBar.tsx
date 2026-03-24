import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

const GUARANTEES = [
  '2-Week Risk-Free Trial',
  'No Extra Charge for Our Delays',
  'Transparent Pricing',
  '24-Hour Response SLA',
] as const

interface GuaranteeBarProps {
  className?: string
  variant?: 'default' | 'compact'
}

export function GuaranteeBar({ className, variant = 'default' }: GuaranteeBarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4 md:gap-8 py-6 px-4 rounded-xl bg-surface border border-default',
        variant === 'compact' && 'gap-3 md:gap-6 py-4',
        className
      )}
    >
      {GUARANTEES.map((guarantee) => (
        <div
          key={guarantee}
          className={cn(
            'flex items-center gap-2',
            variant === 'compact' && 'gap-1.5'
          )}
        >
          <CheckCircle className={cn(
            'text-[var(--color-brand-sky)] shrink-0',
            variant === 'default' ? 'h-5 w-5' : 'h-4 w-4'
          )} />
          <span className={cn(
            'font-medium',
            variant === 'default' ? 'text-sm md:text-base' : 'text-xs md:text-sm'
          )}>
            {guarantee}
          </span>
        </div>
      ))}
    </div>
  )
}
