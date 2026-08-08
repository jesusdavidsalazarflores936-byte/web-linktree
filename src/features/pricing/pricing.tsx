import { Section, SectionHeading } from '@/components/ui'
import { plans, pricingHeading } from './pricing.content'
import { PlanCard } from './plan-card'

/**
 * Sección de planes. Se usa tanto en la landing como en la página /precios,
 * por eso la cabecera es opcional.
 */
export function Pricing({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section id="precios" tone="raised">
      {withHeading && <SectionHeading {...pricingHeading} />}

      <ul className={cnGrid(withHeading)}>
        {plans.map((plan) => (
          <li key={plan.id}>
            <PlanCard plan={plan} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function cnGrid(withHeading: boolean) {
  return withHeading
    ? 'mt-16 grid items-start gap-6 lg:grid-cols-3'
    : 'grid items-start gap-6 lg:grid-cols-3'
}
