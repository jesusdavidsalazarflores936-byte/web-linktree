import { QrCode, Store, PlayCircle, Zap } from 'lucide-react'
import type { FeatureItem } from '@/types'
import { routes } from '@/lib/site.config'

export const whatIsContent = {
  title: '¿Qué resuelve?',
  paragraphs: [
    'Tu negocio recibe tráfico de Instagram, TikTok y WhatsApp, pero también del mundo físico: el counter, la mesa, la vitrina, el empaque, la feria. Todo ese tráfico necesita ir a algún sitio que sea tuyo y que puedas medir.',
    '**MR.SOFT Tree** es esa página. Una dirección propia —`mrsoft-tree.com/tu-marca`— con tus enlaces, tus catálogos y tus videos, y un código QR por cada uno para llevarla a lo impreso.',
  ],
  cta: { label: 'Ver ejemplo en vivo', href: routes.demo },
} as const

export const whatIsBenefits: readonly FeatureItem[] = [
  {
    icon: QrCode,
    title: 'QR y folletos imprimibles',
    description:
      'Un QR por cada enlace, catálogo y sucursal, con su folleto A4 en tu marca. Sabes qué mesa o qué empaque trajo el tráfico.',
  },
  {
    icon: Store,
    title: 'Una landing por sucursal',
    description:
      'Lima muestra su carta, Arequipa la suya. Sin duplicar contenido y sin pagar una cuenta por local.',
  },
  {
    icon: PlayCircle,
    title: 'El cliente no se va',
    description:
      'Catálogos, galerías y video se abren dentro de tu página. Al cerrarlos sigue donde estaba.',
  },
  {
    icon: Zap,
    title: 'Carga instantánea',
    description:
      'Toda imagen se convierte a WebP automáticamente. En móvil abre al toque, que es donde se juega la venta.',
  },
]
