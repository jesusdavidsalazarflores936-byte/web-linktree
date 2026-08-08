import { SectionHeading, Section } from '@/components/ui'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Precios',
  description:
    'Planes desde S/ 89 al mes. Sin permanencias, cancela cuando quieras y migra de plan sin costos adicionales.',
  path: routes.pricing,
})

export default function PricingPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Planes y precios"
        title="Elige el plan que se adapta"
        accent="a tu empresa"
        description="Sección en construcción — se completará en la siguiente fase."
      />
    </Section>
  )
}
