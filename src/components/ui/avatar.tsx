import { cn } from '@/lib/cn'

export function Avatar({
  initials,
  gradient = 'from-brand-500 to-brand-700',
  className,
}: {
  initials: string
  gradient?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white',
        gradient,
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  )
}
