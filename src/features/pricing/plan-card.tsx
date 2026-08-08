import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Plan } from './pricing.content'

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-2xl border p-7 transition-colors duration-200',
        plan.featured
          ? 'border-brand-600/70 bg-gradient-to-b from-brand-600/12 to-ink-800/60 shadow-glow lg:-mt-4 lg:pb-10'
          : 'border-ink-600/70 bg-ink-800/60 hover:border-brand-600/40',
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-1.5 text-sm text-fg-muted">{plan.description}</p>

      <p className="mt-7 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        {plan.period && <span className="text-sm text-fg-muted">{plan.period}</span>}
      </p>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span
              className={cn(
                'mt-0.5 grid size-[1.15rem] shrink-0 place-items-center rounded-full',
                plan.featured ? 'bg-brand-500/25 text-brand-200' : 'bg-mint-500/15 text-mint-400',
              )}
            >
              <Check className="h-3 w-3" aria-hidden />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={plan.cta.href}
        variant={plan.featured ? 'primary' : 'ghost'}
        fullWidth
        className="mt-8"
      >
        {plan.cta.label}
      </ButtonLink>
    </div>
  )
}
