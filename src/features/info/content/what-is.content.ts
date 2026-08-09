import { Link2, Palette, BarChart3, Globe } from 'lucide-react'
import type { FeatureItem } from '@/types'
import { routes } from '@/lib/site.config'

export const whatIsContent = {
  title: '¿Qué es un sistema tipo Linktree?',
  paragraphs: [
    'Un Linktree es una página web simple con tu nombre, logo y una lista de botones que llevan a todos tus links importantes. En lugar de compartir múltiples URLs, compartes una sola — y esa única página lo tiene todo.',
    '**MR.SOFT Tree** va más allá: agrega un panel de administración completo que te permite gestionar, personalizar y analizar tu página en tiempo real, desde cualquier dispositivo.',
  ],
  cta: { label: 'Ver ejemplo en vivo', href: routes.demo },
} as const

export const whatIsBenefits: readonly FeatureItem[] = [
  {
    icon: Link2,
    title: 'Un solo enlace para todo',
    description:
      'Centraliza tu sitio web, redes sociales, tienda online, WhatsApp y cualquier otro recurso en una sola URL que puedes compartir en cualquier lugar.',
  },
  {
    icon: Palette,
    title: 'Totalmente personalizado',
    description:
      'Tu página refleja la identidad de tu marca: colores corporativos, logo, tipografía y estilo visual que conecta con tu audiencia.',
  },
  {
    icon: BarChart3,
    title: 'Métricas en tiempo real',
    description:
      'Conoce cuántas personas visitan tu página, qué enlaces hacen clic y de dónde proviene tu tráfico. Datos que te ayudan a tomar mejores decisiones.',
  },
  {
    icon: Globe,
    title: 'Accesible desde cualquier dispositivo',
    description:
      'Diseño 100% responsive. Tu página se ve perfecta en celulares, tablets y computadoras sin ninguna configuración adicional.',
  },
]
