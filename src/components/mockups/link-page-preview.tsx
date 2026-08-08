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
      <span className="bg-mint-400 text-ink-950 absolute -top-3 right-4 z-10 rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] uppercase">
        Live
      </span>

      <div className="border-ink-600/70 bg-ink-850 shadow-card overflow-hidden rounded-2xl border">
        <div className="border-ink-600/70 bg-ink-800/80 flex items-center gap-3 border-b px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="bg-mint-400/80 h-2.5 w-2.5 rounded-full" />
          </div>
          <p className="bg-ink-900/80 text-fg-muted flex flex-1 items-center gap-1.5 truncate rounded-lg px-3 py-1.5 font-mono text-[11px]">
            <LockIcon />
            {url}
          </p>
        </div>

        <div className="px-5 py-7 sm:px-7">
          <div className="text-center">
            <span className="from-brand-500 to-mint-400 mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br text-lg font-bold text-white">
              {profile.initials}
            </span>
            <p className="mt-3 text-sm font-semibold">{profile.name}</p>
            <p className="text-brand-300 mt-1 text-xs">{profile.bio}</p>
          </div>

          <ul className="mt-6 space-y-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <span
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-medium',
                    link.highlighted
                      ? 'bg-brand-600 shadow-glow text-white'
                      : 'border-ink-600/70 bg-ink-800/70 border text-slate-200',
                  )}
                >
                  <link.icon className="h-3.5 w-3.5" aria-hidden />
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          <dl className="border-ink-600/60 mt-7 grid grid-cols-3 gap-2 border-t pt-5 text-center">
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
                <p className="text-fg-muted mt-0.5 font-mono text-[10px]">{metric.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {toast && (
        <div className="border-ink-600/70 bg-ink-800 shadow-card absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border px-4 py-3 sm:-left-8">
          <span className="bg-brand-600/20 text-brand-300 grid h-8 w-8 shrink-0 place-items-center rounded-lg">
            <MousePointerClick className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-fg-muted text-[11px]">{toast.title}</p>
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
