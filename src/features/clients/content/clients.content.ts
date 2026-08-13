export interface Client {
  /** Nombre del logo en public/logos. No tiene por qué ser igual a su dirección. */
  slug: string
  name: string
  sector: string
  /** Dirección pública de su página de enlaces */
  url: string
  /** Respaldo mientras no haya logo */
  initials: string
  gradient: string
}

export const clientsHeading = {
  eyebrow: 'Clientes',
  title: 'Empresas que ya tienen',
  accent: 'su vitrina digital',
  description: 'Pasa el cursor por cualquiera para visitar su página.',
} as const

/** Para añadir una empresa: su logo en public/logos/<slug>.webp y una entrada aquí. */
export const clients: readonly Client[] = [
  {
    slug: 'mrsoft',
    name: 'Mr. Soft',
    sector: 'Desarrollo de software',
    url: 'https://mrsoft-tree.com/mrsoft',
    initials: 'MS',
    gradient: 'from-teal-400 to-cyan-600',
  },
  {
    slug: 'gesrest',
    name: 'GesRest',
    sector: 'Restaurantes',
    url: 'https://mrsoft-tree.com/gesrest',
    initials: 'GR',
    gradient: 'from-rose-400 to-red-600',
  },
  {
    slug: 'golden-brasas',
    name: 'Golden Brasas',
    sector: 'Pollería',
    url: 'https://mrsoft-tree.com/golden-brasas',
    initials: 'GB',
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    slug: 'hotel-hub',
    name: 'HotelHUB',
    sector: 'Hotelería',
    url: 'https://www.mrsoft-tree.com/hotelhub',
    initials: 'HH',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    slug: 'tavos',
    name: "Tavo's Karaoke",
    sector: 'Karaoke y música en vivo',
    url: 'https://www.mrsoft-tree.com/tavos-karaoke',
    initials: 'TV',
    gradient: 'from-lime-400 to-emerald-600',
  },
]
