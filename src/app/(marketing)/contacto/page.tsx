import { SectionHeading, Section } from '@/components/ui'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Contacto',
  description:
    'Escríbenos y un especialista de MR.SOFT se pondrá en contacto contigo en menos de 24 horas hábiles.',
  path: routes.contact,
})

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        tone="mint"
        eyebrow="Contacto"
        title="¿Listo para empezar?"
        accent="Escríbenos"
        description="Sección en construcción — se completará en la siguiente fase."
      />
    </Section>
  )
}
