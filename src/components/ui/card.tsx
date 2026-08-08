import { cn } from '@/lib/cn'

export function Surface({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('border-ink-600/70 bg-ink-800/60 rounded-2xl border', className)}>
      {children}
    </div>
  )
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <Surface
      className={cn('hover:border-brand-600/50 p-6 transition-colors duration-200', className)}
    >
      {children}
    </Surface>
  )
}
