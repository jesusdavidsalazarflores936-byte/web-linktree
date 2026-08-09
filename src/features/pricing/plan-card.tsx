import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Plan } from './content/plans.content'

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-200 sm:p-7',
        plan.featured
          ? 'border-brand-600/70 from-brand-600/12 to-ink-800/60 shadow-glow bg-gradient-to-b lg:-mt-4 lg:pb-10'
          : 'border-ink-600/70 bg-ink-800/60 hover:border-brand-600/40',
      )}
    >
      {plan.badge && (
        <span className="bg-brand-600 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] font-semibold tracking-[0.15em] whitespace-nowrap text-white uppercase">
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="text-fg-muted mt-1.5 text-sm">{plan.description}</p>

      <p className="mt-7 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        {plan.period && <span className="text-fg-muted text-sm">{plan.period}</span>}
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
