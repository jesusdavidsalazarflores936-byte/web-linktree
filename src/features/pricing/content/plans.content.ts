import { routes } from '@/lib/site.config'

export interface Plan {
  id: string
  name: string
  description: string
  price: string
  period?: string
  featured: boolean
  badge?: string
  cta: { label: string; href: string }
  features: readonly string[]
}

export const pricingHeading = {
  eyebrow: 'Planes y precios',
  title: 'Paga solo por lo que',
  accent: 'tu operación usa',
  description:
    'El plan Básico no es una demo recortada: es un producto completo. Los módulos premium se ven y se prueban en el panel antes de contratarlos.',
} as const

export const plans: readonly Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    description:
      'Para negocios locales y profesionales que necesitan ordenar sus canales de contacto.',
    price: 'S/ 30',
    period: '/mes',
    featured: false,
    cta: { label: 'Empezar ahora', href: routes.contact },
    features: [
      'Landing corporativa con enlaces ilimitados',
      'Más de 20 redes y canales integrados',
      'Generador de WhatsApp con mensaje precargado',
      'QR de tu página y de cada enlace, en PNG y SVG',
      'Folleto A4 con tu marca, listo para imprimir',
      'Analítica de clics por enlace y por red',
      'Colores de marca con contraste automático',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para cadenas, franquicias y equipos comerciales con varios locales o campañas.',
    price: 'S/ 50',
    period: '/mes',
    featured: true,
    badge: 'Más completo',
    cta: { label: 'Hablar con ventas', href: routes.contact },
    features: [
      'Todo lo del plan Básico',
      'Vitrinas: una landing por sucursal o campaña',
      'Catálogos PDF, galerías y video dentro de tu página',
      'Motor de diseño completo: degradados, tipografías y texturas',
      'Carruseles ilimitados con CTR por slide',
      'Métricas de vistas frente a descargas',
      'QR y folleto propios por sucursal y por catálogo',
    ],
  },
]
