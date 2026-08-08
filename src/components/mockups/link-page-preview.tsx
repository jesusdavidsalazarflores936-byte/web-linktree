import type { LucideIcon } from 'lucide-react'
import { MousePointerClick } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface PreviewLink {
  icon: LucideIcon
  label: string
  highlighted?: boolean
}

export interface PreviewMetric {
  value: string
  label: string
  tone?: 'brand' | 'mint'
}

/**
 * Ventana de navegador que muestra cómo se ve una página de enlaces publicada.
 * Es la pieza visual del hero: enseña el producto en lugar de describirlo.
 */
export function LinkPagePreview({
  url,
  profile,
  links,
  metrics,
  toast,
  className,
}: {
  url: string
  profile: { initials: string; name: string; bio: string }
  links: readonly PreviewLink[]
  metrics: readonly PreviewMetric[]
  toast?: { title: string; time: string }
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      {/* Distintivo de página en vivo */}
      <span className="absolute -top-3 right-4 z-10 rounded-full bg-mint-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-950">
        Live
      </span>

      <div className="overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-850 shadow-card">
        {/* Barra del navegador */}
        <div className="flex items-center gap-3 border-b border-ink-600/70 bg-ink-800/80 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint-400/80" />
          </div>
          <p className="flex flex-1 items-center gap-1.5 truncate rounded-lg bg-ink-900/80 px-3 py-1.5 font-mono text-[11px] text-fg-muted">
            <LockIcon />
            {url}
          </p>
        </div>

        {/* Contenido de la página publicada */}
        <div className="px-5 py-7 sm:px-7">
          <div className="text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-mint-400 text-lg font-bold text-white">
              {profile.initials}
            </span>
            <p className="mt-3 text-sm font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-brand-300">{profile.bio}</p>
          </div>

          <ul className="mt-6 space-y-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <span
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-medium',
                    link.highlighted
                      ? 'bg-brand-600 text-white shadow-glow'
                      : 'border border-ink-600/70 bg-ink-800/70 text-slate-200',
                  )}
                >
                  <link.icon className="h-3.5 w-3.5" aria-hidden />
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-7 grid grid-cols-3 gap-2 border-t border-ink-600/60 pt-5 text-center">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd
                  className={cn(
                    'text-base font-bold',
                    metric.tone === 'mint' ? 'text-mint-400' : 'text-brand-300',
                  )}
                >
                  {metric.value}
                </dd>
                <p className="mt-0.5 font-mono text-[10px] text-fg-muted">{metric.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Aviso flotante de actividad reciente */}
      {toast && (
        <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border border-ink-600/70 bg-ink-800 px-4 py-3 shadow-card sm:-left-8">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-600/20 text-brand-300">
            <MousePointerClick className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] text-fg-muted">{toast.title}</p>
            <p className="text-xs font-semibold">{toast.time}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function LockIcon() {
  return (
    <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11V7a5 5 0 0110 0v4M5 11h14v10H5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
