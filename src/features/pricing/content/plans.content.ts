import { whatsappHref } from '@/lib/site.config'

export type PlanAccent = 'mint' | 'brand' | 'aurora'

/** Beneficio estrella que se grafica con una pieza 3D flotante */
export interface PlanHighlight {
  image: string
  label: string
  /** Escala extra para piezas anchas con mucho aire (1 = tal cual) */
  zoom?: number
}

export interface Plan {
  id: 'free' | 'basico' | 'premium'
  name: string
  description: string
  price: string
  period?: string
  featured: boolean
  badge?: string
  accent: PlanAccent
  cta: { label: string; href: string; external?: boolean }
  /** Frase que abre la lista: "Todo lo del plan anterior, y además:" */
  lead?: string
  /** Panel de beneficios principales en 3D, antes de la lista */
  highlights?: readonly PlanHighlight[]
  /** Pieza 3D que sale por la esquina de la tarjeta (solo pantallas grandes) */
  breakout?: string
  features: readonly string[]
}

export const pricingHeading = {
  eyebrow: 'Planes y precios',
  title: 'Empieza gratis.',
  accent: 'Crece con tu marca.',
  description:
    'Arma tu página sin pagar. Cuando quieras tu folleto y tu portada diseñados a la medida, nuestro equipo se encarga desde el plan Básico.',
} as const

export const plans: readonly Plan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Para empezar hoy y probar tu página de enlaces sin pagar.',
    price: 'S/ 0',
    period: '/mes',
    featured: false,
    accent: 'mint',
    cta: {
      label: 'Pedir mi LinkTree gratis',
      href: whatsappHref('Hola, quiero mi LinkTree gratis (Plan Free) de MR.SOFT Tree.'),
      external: true,
    },
    features: [
      '1 página con tu enlace: mrsoft-tree.com/tu-negocio',
      'Tu logo y tus colores con contraste automático',
      'Hasta 7 enlaces y 4 redes sociales',
      'WhatsApp con mensaje precargado',
      '1 carrusel de hasta 2 imágenes',
      'QR de tu página y folleto A4 automático',
      'Plantilla "Enlaces clásicos"',
      'Sello "Hecho con MR.SOFT Tree" al pie',
    ],
  },
  {
    id: 'basico',
    name: 'Básico',
    description: 'Para negocios y profesionales que quieren su marca diseñada por expertos.',
    price: 'S/ 20',
    period: '/mes',
    featured: true,
    badge: 'Recomendado',
    accent: 'brand',
    cta: {
      label: 'Quiero el plan Básico',
      href: whatsappHref('Hola, quiero el plan Básico de MR.SOFT Tree.'),
      external: true,
    },
    lead: 'Todo lo del Free, sin el sello, y además:',
    features: [
      'Configuración completa por nuestro equipo',
      'Folleto A4 y banner diseñados con tu marca',
      'Enlaces y más de 20 redes, sin límite',
      'QR en PNG y SVG de tu página y de cada enlace',
      'Analítica de clics por enlace y por red',
      'Catálogo de productos con pedido por WhatsApp',
      'Galerías, PDF y video dentro de tu página',
      'Plantilla "Perfil profesional" con botón de contacto',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description:
      'Para cadenas, franquicias y equipos con varias sedes o campañas. Nosotros te lo administramos todo.',
    price: 'S/ 40',
    period: '/mes',
    featured: false,
    accent: 'aurora',
    cta: {
      label: 'Hablar con ventas',
      href: whatsappHref('Hola, quiero hablar sobre el plan Premium de MR.SOFT Tree.'),
      external: true,
    },
    lead: 'Todo lo del Básico, y además:',
    highlights: [
      { image: '/3d/sucursales.webp', label: 'Vitrinas por sucursal o campaña', zoom: 1.45 },
      { image: '/3d/soporte.webp', label: 'Te lo administramos todo' },
      { image: '/3d/whatsapp.webp', label: 'Flujo de contacto armado por nosotros' },
      { image: '/3d/grafico.webp', label: 'Métricas de vistas y CTR' },
    ],
    breakout: '/3d/megafono.webp',
    features: [
      'Soporte en todo: actualizamos tus cards, diseño y vitrinas',
      'Portada inmersiva, video y carruseles ilimitados',
      'Catálogo y multimedia sin límites, con importación desde Excel',
      'QR y folleto propios por sucursal y por campaña',
      'Todas las plantillas del catálogo',
    ],
  },
]
