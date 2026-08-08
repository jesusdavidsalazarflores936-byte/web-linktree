import { SectionHeading, Section } from '@/components/ui'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Información',
  description:
    'Qué es MR.SOFT Tree, cómo funciona el panel administrativo y todo lo que puedes gestionar sin escribir código.',
  path: routes.info,
})

export default function InfoPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        tone="mint"
        eyebrow="El sistema"
        title="MR.SOFT Tree:"
        accent="tu Linktree empresarial"
        description="Sección en construcción — se completará en la siguiente fase."
      />
    </Section>
  )
}
