import { LayoutGrid, Link2 } from 'lucide-react'
import { Surface } from '@/components/ui'
import { cn } from '@/lib/cn'

export interface PanelPage {
  name: string
  status: 'Activa' | 'Pausada'
  clicks: string
}

export function PanelPreview({
  tabs = ['Páginas', 'Analíticas', 'Configuración'],
  pages,
  className,
}: {
  tabs?: readonly string[]
  pages: readonly PanelPage[]
  className?: string
}) {
  return (
    <Surface className={cn('shadow-card overflow-hidden', className)}>
      <div className="border-ink-600/70 flex items-center justify-between border-b px-5 py-3.5">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <LayoutGrid className="text-brand-400 h-4 w-4" aria-hidden />
          Panel de Administración
        </p>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="bg-mint-400/80 h-2.5 w-2.5 rounded-full" />
        </div>
      </div>

      <div className="border-ink-600/70 flex gap-5 border-b px-5" aria-hidden>
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={cn(
              'border-b-2 py-3 text-xs transition-colors',
              index === 0
                ? 'border-mint-400 text-mint-400 font-medium'
                : 'text-fg-muted border-transparent',
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      <ul className="space-y-2.5 p-4">
        {pages.map((page) => (
          <li
            key={page.name}
            className="border-ink-600/60 bg-ink-850/70 flex items-center gap-3 rounded-xl border px-3.5 py-3"
          >
            <span className="bg-brand-600/20 text-brand-300 grid h-8 w-8 shrink-0 place-items-center rounded-lg">
              <Link2 className="h-4 w-4" aria-hidden />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{page.name}</p>
              <p className="text-fg-muted mt-0.5 flex items-center gap-1.5 font-mono text-[11px]">
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    page.status === 'Activa' ? 'bg-mint-400' : 'bg-amber-400',
                  )}
                />
                {page.status}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold">{page.clicks}</p>
              <p className="text-fg-muted font-mono text-[11px]">clics</p>
            </div>
          </li>
        ))}
      </ul>
    </Surface>
  )
}
