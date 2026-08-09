import { PageHero } from '@/components/ui'
import { Pricing, PricingComparison, PricingFaq, PricingCta } from '@/features/pricing'
import { pricingHeading } from '@/features/pricing'
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
    <>
      <PageHero {...pricingHeading} className="border-b-0" />
      <Pricing withHeading={false} tone="default" />
      <PricingComparison />
      <PricingFaq />
      <PricingCta />
    </>
  )
}
