import { LayoutGrid, Link2, Palette, Images, Store, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

export interface ModuloPanel {
  /** Nombre del archivo en public/panel, sin extensión */
  slug: string
  /** Texto de la pestaña */
  tab: string
  icon: LucideIcon
  title: string
  description: string
  /** Captura de página completa que se recorre en bucle, como el teléfono del hero */
  recorrido?: boolean
}

export const panelHeading = {
  eyebrow: 'Panel administrativo',
  title: 'Control total',
  titleAccentPrefix: 'desde',
  accent: 'un solo lugar',
  description:
    'Cada módulo se activa por separado. Míralos antes de decidir cuáles necesita tu operación.',
  cta: { label: 'Ver una página publicada', href: siteConfig.exampleUrl },
} as const

/**
 * Para cambiar una captura: reemplaza public/panel/<slug>.webp.
 * Todas se muestran en formato 16:9, así que conviene capturarlas en Full HD.
 */
export const modulosPanel: readonly ModuloPanel[] = [
  {
    slug: 'panel-dashboard',
    tab: 'Dashboard',
    icon: LayoutGrid,
    title: 'Todo a un clic',
    description:
      'Doce acciones rápidas y la descarga del QR en PDF listo para imprimir, nada más entrar.',
  },
  {
    slug: 'panel-cards',
    tab: 'Cards',
    icon: Link2,
    title: 'Arrastra y suelta',
    description:
      'Añade, reordena y pausa cards con un gesto. Una promoción se desactiva sin borrarla.',
  },
  {
    slug: 'panel-diseno-completo',
    tab: 'Diseño',
    recorrido: true,
    icon: Palette,
    title: 'Lo ves antes de publicar',
    description:
      'Colores, tipografías y texturas con un celular de vista previa que sigue el scroll.',
  },
  {
    slug: 'panel-multimedia',
    tab: 'Multimedia',
    icon: Images,
    title: 'Tu catálogo, dentro de tu página',
    description:
      'Cartas en PDF, galerías y video con reproductor propio. El cliente no se va a otra app.',
  },
  {
    slug: 'panel-vitrinas',
    tab: 'Vitrinas',
    icon: Store,
    title: 'Una página por local',
    description:
      'Cada sucursal con su dirección, su QR y su contenido, heredando la identidad de la matriz.',
  },
  {
    slug: 'panel-analytics',
    tab: 'Analytics',
    icon: BarChart3,
    title: 'Qué vende y qué no',
    description: 'Clics por enlace, conversión por banner y qué catálogos se abren de verdad.',
  },
]
