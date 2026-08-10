export interface Client {
  /** Identificador y nombre del logo en public/logos/<slug>.webp */
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

/**
 * ── AÑADIR UNA EMPRESA ──────────────────────────────────────────
 * 1. Deja su logo en public/logos/<slug>.webp
 * 2. Copia un bloque de abajo y cambia los cinco campos
 *
 * El proyecto detecta el logo solo. Si el archivo no existe todavía,
 * la tarjeta muestra las iniciales sobre el degradado y no rompe nada.
 * ────────────────────────────────────────────────────────────────
 */
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
    name: 'Hotel Hub',
    sector: 'Hotelería',
    url: 'https://mrsoft-tree.com/hotel-hub',
    initials: 'HH',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    slug: 'tavos',
    name: "Tavo's",
    sector: 'Karaoke y discoteca',
    url: 'https://mrsoft-tree.com/tavos',
    initials: 'TV',
    gradient: 'from-lime-400 to-emerald-600',
  },
]
