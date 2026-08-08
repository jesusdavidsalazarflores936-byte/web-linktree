/**
 * Configuración global del sitio.
 * Datos de marca, contacto y navegación — sin textos de secciones
 * (esos viven en src/content junto a su feature).
 */

export const siteConfig = {
  name: 'MR.SOFT Tree',
  company: 'MR.SOFT',
  title: 'MR.SOFT Tree — Tu presencia digital en un solo enlace',
  description:
    'Sistema tipo Linktree para empresas: centraliza todos tus enlaces en una página profesional y gestiónala desde un panel administrativo completo.',
  tagline: 'Soluciones tecnológicas para empresas peruanas. Lima, Perú.',
  locale: 'es_PE',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tree.mrsoft.com.pe',

  contact: {
    email: 'hola@mrsoft.com.pe',
    emailNote: 'Respuesta en menos de 24 h hábiles',
    phone: '+51 1 234-5678',
    phoneNote: 'Lun–Vie de 9:00 a 18:00 (Lima)',
    location: 'Lima, Perú',
    locationNote: 'Con presencia en todo el país',
    whatsapp: '51987654321',
  },
} as const

/** Rutas del sitio en un solo lugar: evita enlaces rotos por typos. */
export const routes = {
  home: '/',
  about: '/nosotros',
  info: '/informacion',
  pricing: '/precios',
  contact: '/contacto',
  demo: '/demo',
  admin: '/admin',
} as const

export const mainNav = [
  { label: 'Nosotros', href: routes.about },
  { label: 'Información', href: routes.info },
  { label: 'Precios', href: routes.pricing },
  { label: 'Contacto', href: routes.contact },
] as const

export const footerNav = [
  {
    group: 'Producto',
    links: [
      { label: 'Características', href: `${routes.home}#caracteristicas` },
      { label: 'Panel Admin', href: routes.admin },
      { label: 'Analíticas', href: routes.info },
      { label: 'Integraciones', href: routes.pricing },
    ],
  },
  {
    group: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: routes.about },
      { label: 'Clientes', href: `${routes.home}#testimonios` },
      { label: 'Contacto', href: routes.contact },
    ],
  },
  {
    group: 'Legal',
    links: [
      { label: 'Privacidad', href: routes.contact },
      { label: 'Términos de uso', href: routes.contact },
      { label: 'Cookies', href: routes.contact },
      { label: 'RGPD', href: routes.contact },
    ],
  },
] as const
