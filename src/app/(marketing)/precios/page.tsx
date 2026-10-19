import { PageHero } from '@/components/ui'
import { Pricing, PricingComparison, PricingFaq, PricingCta } from '@/features/pricing'
import { pricingHeading } from '@/features/pricing'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Precios',
  description:
    'Plan Free S/ 0, Básico S/ 20 y Premium S/ 40 al mes. Empieza gratis y sube de plan cuando tu negocio lo pida.',
  path: routes.pricing,
})

export default function PricingPage() {
  return (
    <>
      <PageHero {...pricingHeading} className="border-b-0" />
      <Pricing withHeading={false} tone="default" />
      <PricingComparison />
      <PricingFaq />
      <PricingCta />
    </>
  )
}
