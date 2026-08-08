import { Link2, Palette, BarChart3, Globe, ShieldCheck, Zap } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const capabilitiesHeading = {
  eyebrow: 'Características',
  title: 'Todo lo que necesita',
  accent: 'tu presencia digital',
  description:
    'Una plataforma completa para gestionar, personalizar y analizar cada aspecto de tu página de enlaces.',
} as const

export const capabilitiesContent: readonly FeatureItem[] = [
  {
    icon: Link2,
    title: 'Gestión de enlaces',
    description:
      'Centraliza todos tus links en un único espacio personalizado. Añade, edita y reordena con total facilidad desde el panel.',
  },
  {
    icon: Palette,
    title: 'Personalización total',
    description:
      'Adapta colores, fuentes, logos y estilos visuales para que tu página refleje exactamente la identidad de tu marca.',
  },
  {
    icon: BarChart3,
    title: 'Analíticas en tiempo real',
    description:
      'Visualiza clics, visitas únicas y fuentes de tráfico. Toma decisiones informadas con datos actualizados al instante.',
  },
  {
    icon: Globe,
    title: 'Dominio personalizado',
    description:
      'Publica tu página bajo tu propio dominio o subdominio. Refuerza la credibilidad y el reconocimiento de tu marca.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad robusta',
    description:
      'Autenticación segura, control de accesos y protección de datos en cumplimiento con las normativas vigentes.',
  },
  {
    icon: Zap,
    title: 'Carga ultrarrápida',
    description:
      'Infraestructura optimizada para que tus visitantes lleguen a tu contenido en milisegundos, desde cualquier dispositivo.',
  },
]
