import { Section, SectionHeading } from '@/components/ui'
import { cn } from '@/lib/cn'
import { plans, pricingHeading } from './content/plans.content'
import { PlanCard } from './plan-card'

/** En /precios la cabecera la aporta el PageHero, por eso es opcional. */
export function Pricing({
  withHeading = true,
  tone = 'raised',
}: {
  withHeading?: boolean
  tone?: 'default' | 'raised'
}) {
  return (
    <Section id="precios" tone={tone}>
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
