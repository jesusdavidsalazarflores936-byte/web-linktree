import { ExternalLink } from 'lucide-react'
import { ButtonLink, Container, Eyebrow } from '@/components/ui'
import { panelHeading } from './content/modulos.content'
import { medirModulos } from './medir-modulos'
import { PanelTabs } from './panel-tabs'

export async function AdminPanel() {
  const medidas = await medirModulos()

  return (
    <section id="panel" className="border-ink-600/60 bg-ink-850/40 border-y">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="mint">{panelHeading.eyebrow}</Eyebrow>

          <h2 className="mt-5 text-[1.75rem] leading-tight font-bold tracking-tight sm:text-4xl">
            {panelHeading.title} {panelHeading.titleAccentPrefix}{' '}
            <span className="text-mint-400">{panelHeading.accent}</span>
          </h2>

          <p className="text-fg-muted mt-5 text-base leading-relaxed sm:text-lg">
            {panelHeading.description}
          </p>
        </div>

        <div className="mt-12">
          <PanelTabs medidas={medidas} />
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href={panelHeading.cta.href} variant="mint" external>
            {panelHeading.cta.label}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
