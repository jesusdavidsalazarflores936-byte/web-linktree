import Image from 'next/image'
import { Check, Crown, Rocket, Sprout, Star, type LucideIcon } from 'lucide-react'
import { ButtonLink } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Plan, PlanAccent } from './content/plans.content'

const icons: Record<Plan['id'], LucideIcon> = {
  free: Sprout,
  basico: Rocket,
  premium: Crown,
}

/** Color de cada plan sobre el vidrio: ícono, viñetas y luz interior. */
const accents: Record<PlanAccent, { tile: string; check: string; glow: string }> = {
  mint: {
    tile: 'from-mint-400/35 to-mint-500/5 text-mint-300 ring-mint-400/30',
    check: 'bg-mint-500/15 text-mint-300',
    glow: 'bg-mint-500/20',
  },
  brand: {
    tile: 'from-brand-400/50 to-brand-700/10 text-brand-50 ring-brand-300/40',
    check: 'bg-brand-500/25 text-brand-200',
    glow: 'bg-brand-600/40',
  },
  aurora: {
    tile: 'from-brand-500/40 via-mint-400/25 to-transparent text-white ring-white/20',
    check: 'bg-white/10 text-mint-300',
    glow: 'bg-mint-400/15',
  },
}

/** Tarjeta de plan en vidrio líquido: translúcida, con borde de luz y brillo interior. */
export function PlanCard({ plan }: { plan: Plan }) {
  const Icon = icons[plan.id]
  const accent = accents[plan.accent]

  return (
    <div
      className={cn(
        'relative isolate flex h-full flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl transition-colors duration-300 sm:p-7',
        plan.featured
          ? 'border-brand-300/35 bg-brand-600/[0.09] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.14),0_0_90px_-24px_rgb(124_58_237/0.7)] lg:-my-4 lg:py-10'
          : 'border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08),0_24px_60px_-28px_rgb(0_0_0/0.9)] hover:border-white/20',
      )}
    >
      {/* Brillo interior de esquina (recortado a la tarjeta) y reflejo del borde superior */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
        <div className={cn('absolute -top-24 -right-16 size-60 rounded-full blur-3xl', accent.glow)} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
      />

      {/* Pieza 3D que asoma por la esquina: la tarjeta "sale" del plano */}
      {plan.breakout && (
        <div aria-hidden className="pointer-events-none absolute -top-10 -right-6 hidden lg:block">
          <div className="flota" style={{ '--flotacion': '7s' } as React.CSSProperties}>
            <Image
              src={plan.breakout}
              alt=""
              width={104}
              height={104}
              className="size-26 object-contain drop-shadow-[0_18px_30px_rgb(124_58_237/0.55)]"
            />
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            'grid size-11 place-items-center rounded-2xl bg-gradient-to-br ring-1 backdrop-blur-md',
            accent.tile,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>

        {plan.badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.15em] whitespace-nowrap text-white uppercase backdrop-blur-md">
            <Star className="h-3 w-3 fill-current" aria-hidden />
            {plan.badge}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-bold">{plan.name}</h3>
      <p className="text-fg-muted mt-1.5 text-sm">{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        {plan.period && <span className="text-fg-muted text-sm">{plan.period}</span>}
      </p>

      <ButtonLink
        href={plan.cta.href}
        external={plan.cta.external}
        variant={plan.featured ? 'primary' : 'glass'}
        fullWidth
        className="mt-6"
      >
        {plan.cta.label}
      </ButtonLink>

      <div className="text-fg-muted mt-7 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase">
        <span className="h-px flex-1 bg-white/10" aria-hidden />
        Incluye
        <span className="h-px flex-1 bg-white/10" aria-hidden />
      </div>

      {plan.lead && <p className="mt-5 text-sm font-semibold text-white">{plan.lead}</p>}

      {/* Beneficios principales graficados: piezas 3D flotando sobre vidrio */}
      {plan.highlights && (
        <ul className="mt-4 grid grid-cols-2 gap-2.5" aria-label={`Beneficios principales del plan ${plan.name}`}>
          {plan.highlights.map((highlight, index) => (
            <li
              key={highlight.label}
              className={cn(
                'flex flex-col items-center gap-2 rounded-2xl border px-2.5 pt-4 pb-3 text-center shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md',
                index === 0
                  ? 'border-brand-300/30 bg-brand-500/[0.12]'
                  : 'border-white/10 bg-white/[0.05]',
              )}
            >
              <div
                className="flota"
                style={
                  {
                    '--flotacion': `${5.5 + index * 0.6}s`,
                    '--retraso': `${index * 0.7}s`,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={highlight.image}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 object-contain drop-shadow-[0_10px_18px_rgb(124_58_237/0.45)]"
                  style={highlight.zoom ? { scale: highlight.zoom } : undefined}
                />
              </div>
              <span className="text-xs leading-tight font-semibold text-white">{highlight.label}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className={cn('flex-1 space-y-3', plan.highlights ? 'mt-4' : plan.lead ? 'mt-3' : 'mt-5')}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span
              className={cn(
                'mt-0.5 grid size-[1.15rem] shrink-0 place-items-center rounded-full',
                accent.check,
              )}
            >
              <Check className="h-3 w-3" aria-hidden />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
