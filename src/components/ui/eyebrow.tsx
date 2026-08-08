import { cn } from '@/lib/cn'

/** Etiqueta pequeña en mayúsculas que precede a un titular. */
export function Eyebrow({
  tone = 'brand',
  dot = false,
  className,
  children,
}: {
  tone?: 'brand' | 'mint'
  /** Muestra un punto de color al inicio, como indicador de estado */
  dot?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em]',
        tone === 'mint'
          ? 'border-mint-500/30 bg-mint-500/5 text-mint-400'
          : 'border-ink-600 bg-ink-800 text-brand-300',
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            tone === 'mint' ? 'bg-mint-400' : 'bg-brand-400',
          )}
        />
      )}
      {children}
    </span>
  )
}
