import { SectionHeading, Section } from '@/components/ui'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Nosotros',
  description:
    'Somos MR.SOFT, empresa de desarrollo de software fundada en Lima con más de 10 años creando soluciones tecnológicas para empresas peruanas.',
  path: routes.about,
})

export default function AboutPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Nosotros"
        title="Tecnología peruana"
        accent="con experiencia y propósito"
        description="Sección en construcción — se completará en la siguiente fase."
      />
    </Section>
  )
}
