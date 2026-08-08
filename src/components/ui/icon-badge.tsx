import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type Tone = 'brand' | 'mint'

const tones: Record<Tone, string> = {
  brand: 'bg-brand-600/15 text-brand-300 ring-brand-600/25',
  mint: 'bg-mint-500/10 text-mint-400 ring-mint-500/20',
}

const sizes = {
  sm: { box: 'h-8 w-8', icon: 'h-4 w-4' },
  md: { box: 'h-10 w-10', icon: 'h-5 w-5' },
} as const

/** Icono dentro de una pastilla de color. Se repite en toda la landing. */
export function IconBadge({
  icon: Icon,
  tone = 'brand',
  size = 'md',
  className,
}: {
  icon: LucideIcon
  tone?: Tone
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-grid shrink-0 place-items-center rounded-xl ring-1',
        sizes[size].box,
        tones[tone],
        className,
      )}
    >
      <Icon className={sizes[size].icon} strokeWidth={1.8} aria-hidden />
    </span>
  )
}
