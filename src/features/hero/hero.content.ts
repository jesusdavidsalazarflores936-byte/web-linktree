import { routes, siteConfig } from '@/lib/site.config'

export const heroContent = {
  eyebrow: 'Plataforma empresarial de links',
  titleStart: 'Tu empresa, en un solo enlace.',
  titleAccent: 'Y en todos tus',
  titleEnd: 'mostradores.',
  description:
    'Enlaces, catálogos, videos y códigos QR listos para imprimir — con tu marca, gestionados desde un solo panel.',
  primaryCta: { label: 'Crea tu vitrina digital', href: routes.contact },
  secondaryCta: { label: 'Ver ejemplo en vivo', href: siteConfig.exampleUrl, external: true },
  socialProof: 'Empresas peruanas que ya la usan',
  avatars: [
    { initials: 'MS', gradient: 'from-teal-400 to-cyan-600' },
    { initials: 'GR', gradient: 'from-rose-400 to-red-600' },
    { initials: 'GB', gradient: 'from-amber-400 to-orange-600' },
    { initials: 'HH', gradient: 'from-sky-400 to-blue-600' },
  ],
} as const
