import Image from 'next/image'
import { cn } from '@/lib/cn'

/** Captura del panel dentro de un marco de navegador. */
export function CapturaPanel({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'border-ink-600/70 bg-ink-850/60 overflow-hidden rounded-2xl border',
        className,
      )}
    >
      <div className="border-ink-600/60 flex items-center gap-3 border-b px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="bg-mint-400/70 h-2.5 w-2.5 rounded-full" />
        </div>
        <p className="bg-ink-900/80 text-fg-muted flex-1 truncate rounded-lg px-3 py-1 font-mono text-[11px]">
          panel.mrsoft-tree.com
        </p>
      </div>

      <div className="bg-ink-900/60 sin-barra overflow-x-auto p-3 lg:overflow-visible">
        <div className="ring-ink-600/60 relative h-[240px] w-[427px] overflow-hidden rounded-lg ring-1 sm:h-[300px] sm:w-[533px] lg:aspect-video lg:h-auto lg:w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 533px, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
