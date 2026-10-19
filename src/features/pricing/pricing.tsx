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
    <Section id="precios" tone={tone} className="relative overflow-hidden">
      {withHeading && <SectionHeading {...pricingHeading} />}

      <div className={cn('relative isolate', withHeading && 'mt-16')}>
        {/* Luces aurora detrás del vidrio: sin ellas el desenfoque no se nota */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-brand-600/30 absolute top-1/4 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full blur-[120px]" />
          <div className="bg-mint-500/15 absolute bottom-0 left-[8%] h-64 w-80 rounded-full blur-[110px]" />
          <div className="bg-brand-400/15 absolute top-0 right-[6%] h-64 w-80 rounded-full blur-[110px]" />
        </div>

        <ul className="mx-auto grid max-w-md items-stretch gap-6 lg:max-w-6xl lg:grid-cols-3 lg:gap-5">
          {plans.map((plan) => (
            <li key={plan.id}>
              <PlanCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
