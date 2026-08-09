import { PageHero } from '@/components/ui'
import { Pricing, PricingComparison, PricingFaq, PricingCta } from '@/features/pricing'
import { pricingHeading } from '@/features/pricing'
import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Precios',
  description:
    'Plan Básico S/ 30 y Premium S/ 50 al mes. Pagas solo por los módulos que tu operación usa.',
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
