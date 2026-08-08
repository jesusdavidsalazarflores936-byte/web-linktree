import { Section, SectionHeading } from '@/components/ui'
import { cn } from '@/lib/cn'
import { plans, pricingHeading } from './pricing.content'
import { PlanCard } from './plan-card'

/** La cabecera se oculta en /precios, donde ya la aporta el PageHero. */
export function Pricing({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section id="precios" tone="raised">
      {withHeading && <SectionHeading {...pricingHeading} />}

      <ul className={cn('grid items-start gap-6 lg:grid-cols-3', withHeading && 'mt-16')}>
        {plans.map((plan) => (
          <li key={plan.id}>
            <PlanCard plan={plan} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
