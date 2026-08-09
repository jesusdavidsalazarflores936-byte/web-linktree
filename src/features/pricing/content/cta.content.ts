import { routes } from '@/lib/site.config'

export const pricingCtaContent = {
  title: '¿No estás seguro qué plan elegir?',
  description:
    'Contáctanos y un especialista de MR.SOFT te ayudará a encontrar el plan que mejor se adapta a tu empresa.',
  cta: { label: 'Hablar con un especialista', href: routes.contact },
} as const
