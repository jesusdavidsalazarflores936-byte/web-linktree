import { Store, Images, Palette, QrCode, BarChart3, Users } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const adminFeaturesHeading = {
  title: 'Los módulos del panel',
  description: 'Se activan por separado: pagas solo lo que tu operación usa.',
} as const

export const adminFeaturesContent: readonly FeatureItem[] = [
  {
    icon: Store,
    title: 'Vitrinas',
    description:
      'Una landing por sucursal o campaña, con su dirección y su QR. El branding baja solo desde la empresa matriz.',
  },
  {
    icon: Images,
    title: 'Multimedia',
    description:
      'Catálogos PDF, galerías y video con reproductor dentro de tu página. Con métricas de vistas frente a descargas.',
  },
  {
    icon: Palette,
    title: 'Diseño',
    description:
      'Degradados, tipografías, texturas y formas. Un celular de vista previa fijo muestra cada cambio antes de guardar.',
  },
  {
    icon: QrCode,
    title: 'Códigos QR',
    description:
      'PNG y SVG por cada elemento, más el folleto A4 con tu logo. Cambias la página sin reimprimir nada.',
  },
  {
    icon: BarChart3,
    title: 'Analítica',
    description: 'Clics por enlace y por red, CTR por banner y qué catálogos se abren de verdad.',
  },
  {
    icon: Users,
    title: 'Enlaces y redes',
    description:
      'Más de 20 plataformas, arrastrar para reordenar y WhatsApp con el mensaje ya escrito para el cliente.',
  },
]
