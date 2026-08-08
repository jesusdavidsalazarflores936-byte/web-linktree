import { Target, Eye, Heart } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const pillarsContent: readonly FeatureItem[] = [
  {
    icon: Target,
    title: 'Misión',
    description:
      'Desarrollar soluciones tecnológicas de calidad que permitan a las empresas peruanas gestionar su presencia digital de forma simple, efectiva y sin barreras técnicas.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description:
      'Ser la empresa de software de referencia en el Perú, reconocida por la calidad de sus productos, la solidez de su equipo y el impacto positivo en sus clientes.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description:
      'Cada línea de código que escribimos tiene un propósito: resolver problemas reales de empresas reales. La calidad, la seguridad y la experiencia del usuario son nuestra prioridad.',
  },
]
