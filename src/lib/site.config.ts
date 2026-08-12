export const siteConfig = {
  name: 'MR.SOFT Tree',
  company: 'MR.SOFT',
  title: 'MR.SOFT Tree — Tu presencia digital en un solo enlace',
  description:
    'Sistema tipo Linktree para empresas: centraliza todos tus enlaces en una página profesional y gestiónala desde un panel administrativo completo.',
  tagline: 'Soluciones tecnológicas para empresas peruanas. Lima, Perú.',
  locale: 'es_PE',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tree.mrsoft.com.pe',

  /** Web corporativa de la empresa */
  companyUrl: 'https://mrsoftperu.com',

  /** Página de enlaces real que se enseña como ejemplo */
  exampleUrl: 'https://www.mrsoft-tree.com/mrsoft-webs',

  contact: {
    email: 'hola@mrsoft.com.pe',
    emailNote: 'Respuesta en menos de 24 h hábiles',
    phone: '+51 992 441 187',
    phoneNote: 'Lun–Vie de 9:00 a 18:00 (Lima)',
    location: 'Lima, Perú',
    locationNote: 'Con presencia en todo el país',
    whatsapp: '51992441187',
    whatsappMessage: 'Hola, me interesa MR.SOFT Tree para mi empresa.',
  },
} as const

export const routes = {
  home: '/',
  info: '/informacion',
  pricing: '/precios',
  contact: '/contacto',
} as const

export const mainNav = [
  { label: 'Nosotros', href: siteConfig.companyUrl, external: true },
  { label: 'Información', href: routes.info },
  { label: 'Precios', href: routes.pricing },
  { label: 'Contacto', href: routes.contact },
] as const

export const footerNav = [
  {
    group: 'Producto',
    links: [
      { label: 'Características', href: `${routes.home}#caracteristicas` },
      { label: 'Panel Admin', href: `${routes.home}#panel` },
      { label: 'Analíticas', href: routes.info },
      { label: 'Integraciones', href: routes.pricing },
    ],
  },
  {
    group: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: siteConfig.companyUrl },
      { label: 'Contacto', href: routes.contact },
    ],
  },
  {
    group: 'Legal',
    links: [{ label: 'Privacidad' }, { label: 'Términos de uso' }, { label: 'Cookies' }],
  },
] as const
