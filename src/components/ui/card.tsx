import { cn } from '@/lib/cn'

/** Superficie elevada básica. Sin padding: lo decide quien la usa. */
export function Surface({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('rounded-2xl border border-ink-600/70 bg-ink-800/60', className)}>
      {children}
    </div>
  )
}

/** Superficie con padding y realce al pasar el cursor. */
export function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <Surface className={cn('p-6 transition-colors duration-200 hover:border-brand-600/50', className)}>
      {children}
    </Surface>
  )
}
