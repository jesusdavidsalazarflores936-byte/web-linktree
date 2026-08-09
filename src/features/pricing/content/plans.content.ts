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
  title: 'Elige el plan que se adapta',
  accent: 'a tu empresa',
  description:
    'Sin permanencias. Cancela cuando quieras. Migra de plan en cualquier momento sin costos adicionales.',
} as const

export const plans: readonly Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal para profesionales y pequeñas marcas.',
    price: 'S/ 89',
    period: '/mes',
    featured: false,
    cta: { label: 'Comenzar ahora', href: routes.contact },
    features: [
      '5 páginas de enlaces activas',
      'Analíticas básicas de clics',
      'Personalización de colores y logo',
      'Dominio personalizado',
      '1 usuario administrador',
      'Soporte por email',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Para equipos que necesitan más poder y control.',
    price: 'S/ 229',
    period: '/mes',
    featured: true,
    badge: 'Más popular',
    cta: { label: 'Comenzar ahora', href: routes.contact },
    features: [
      'Páginas de enlaces ilimitadas',
      'Analíticas avanzadas en tiempo real',
      'Multi-dominio personalizado',
      'Panel administrativo completo',
      'Hasta 10 usuarios con roles',
      'Reportes semanales automáticos',
      'Soporte prioritario 24/7',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solución personalizada para grandes organizaciones.',
    price: 'A medida',
    featured: false,
    cta: { label: 'Solicitar cotización', href: routes.contact },
    features: [
      'Todo lo incluido en Business',
      'SLA de disponibilidad garantizado',
      'Integración por API REST',
      'Onboarding y capacitación dedicada',
      'Usuarios y páginas ilimitados',
      'Gestor de cuenta asignado',
    ],
  },
]
