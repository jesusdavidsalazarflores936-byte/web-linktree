import { routes } from '@/lib/site.config'

export const heroContent = {
  eyebrow: 'Plataforma empresarial de links',
  titleStart: 'Tu empresa, en un solo enlace.',
  titleAccent: 'Y en todos tus',
  titleEnd: 'mostradores.',
  description:
    'Enlaces, catálogos, videos y códigos QR listos para imprimir — con tu marca, gestionados desde un solo panel.',
  primaryCta: { label: 'Crea tu vitrina digital', href: routes.contact },
  secondaryCta: { label: 'Ver ejemplo en vivo', href: routes.demo },
  socialProof: '+500 empresas confían en nosotros',
  avatars: [
    { initials: 'MG', gradient: 'from-brand-500 to-brand-700' },
    { initials: 'CR', gradient: 'from-mint-400 to-mint-500' },
    { initials: 'LM', gradient: 'from-sky-400 to-blue-600' },
    { initials: 'AS', gradient: 'from-pink-400 to-rose-600' },
  ],
} as const
