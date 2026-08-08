import type { Testimonial } from '@/types'

export const testimonialsHeading = {
  eyebrow: 'Testimonios',
  title: 'Lo que dicen nuestros',
  accent: 'clientes',
} as const

export const testimonialsContent: readonly Testimonial[] = [
  {
    quote:
      'MR.SOFT Tree nos permitió centralizar toda nuestra presencia digital en minutos. El panel de administración es intuitivo y potente.',
    name: 'María González',
    role: 'Directora de Marketing · Grupo Nexo',
    initials: 'MG',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    quote:
      'Las analíticas en tiempo real cambiaron completamente cómo tomamos decisiones de contenido. Imprescindible para cualquier marca.',
    name: 'Carlos Ríos',
    role: 'Fundador · StartupLab',
    initials: 'CR',
    gradient: 'from-mint-400 to-mint-500',
  },
  {
    quote:
      'Gestionamos las páginas de más de 30 clientes desde un solo panel. La eficiencia que ganamos no tiene precio.',
    name: 'Laura Méndez',
    role: 'CEO · Agencia Digital Vórtex',
    initials: 'LM',
    gradient: 'from-orange-400 to-pink-500',
  },
]
