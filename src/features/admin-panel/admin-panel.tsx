import { ChevronRight } from 'lucide-react'
import { ButtonLink, Container, Eyebrow, IconBadge } from '@/components/ui'
import { PanelPreview } from '@/components/mockups/panel-preview'
import { adminPanelContent, adminPanelHighlights, adminPanelPages } from './admin-panel.content'

export function AdminPanel() {
  return (
    <section className="border-ink-600/60 bg-ink-850/40 border-y">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Eyebrow tone="mint">{adminPanelContent.eyebrow}</Eyebrow>

          <h2 className="mt-5 text-[1.75rem] leading-tight font-bold tracking-tight sm:text-4xl">
            {adminPanelContent.title}
            <br />
            {adminPanelContent.titleAccentPrefix}{' '}
            <span className="text-mint-400">{adminPanelContent.accent}</span>
          </h2>

          <p className="text-fg-muted mt-5 text-base leading-relaxed sm:text-lg">
            {adminPanelContent.description}
          </p>

          <ul className="mt-8 space-y-3.5">
            {adminPanelHighlights.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm text-slate-300">
                <IconBadge icon={item.icon} tone="mint" size="sm" className="rounded-lg" />
                {item.label}
              </li>
            ))}
          </ul>

          <ButtonLink href={adminPanelContent.cta.href} variant="mint" className="mt-9">
            {adminPanelContent.cta.label}
            <ChevronRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="lg:pl-6">
          <PanelPreview
            pages={adminPanelPages}
            tabs={['Gestión de páginas', 'Analíticas', 'Configuración']}
          />
        </div>
      </Container>
    </section>
  )
}
