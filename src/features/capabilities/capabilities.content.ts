import { QrCode, Store, PlayCircle, Palette, Zap, BarChart3 } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const capabilitiesHeading = {
  eyebrow: 'Características',
  title: 'Los demás te dan un enlace.',
  accent: 'Nosotros, tu vitrina digital.',
  description: 'Con sus sucursales, sus catálogos y sus códigos QR impresos para el mostrador.',
} as const

export const capabilitiesContent: readonly FeatureItem[] = [
  {
    icon: QrCode,
    title: 'Del celular al mostrador',
    description:
      'Cada enlace, catálogo y sucursal tiene su QR y su folleto A4 con tu marca, listo para imprimir.',
  },
  {
    icon: Store,
    title: 'Una página por sucursal',
    description:
      'Landings ilimitadas desde una sola cuenta. Cada local con su contenido, todas con tu identidad.',
  },
  {
    icon: PlayCircle,
    title: 'Catálogos y video sin salir',
    description:
      'Cartas en PDF, galerías y video se abren dentro de tu página. El cliente no se va a otra app.',
  },
  {
    icon: Palette,
    title: 'Tu marca, no la nuestra',
    description:
      'Colores, tipografía, logo y texturas se aplican solos. Sin publicidad de terceros en tu página.',
  },
  {
    icon: Zap,
    title: 'Abre al toque',
    description:
      'Compresión automática a WebP: una foto de 5 MB se sirve en menos de 150 KB. Nadie se va por lentitud.',
  },
  {
    icon: BarChart3,
    title: 'Saber qué vende',
    description:
      'Clics por enlace, vistas frente a descargas en catálogos y conversión por banner.',
  },
]
