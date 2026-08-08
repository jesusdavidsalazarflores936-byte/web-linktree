import { ShieldCheck, Zap, Award, Globe } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const storyContent = {
  title: 'Quiénes somos',
  paragraphs: [
    'MR.SOFT nació en Lima en 2013 con una idea clara: que las empresas peruanas tuvieran acceso a tecnología de calidad, desarrollada localmente y pensada para sus necesidades reales.',
    'A lo largo de los años hemos trabajado con empresas de todos los sectores — retail, servicios, educación, salud y entretenimiento — ayudándolas a digitalizar sus operaciones y mejorar su presencia en internet.',
    'Nuestro producto estrella, **MR.SOFT Tree**, es una plataforma tipo Linktree diseñada para empresas que necesitan centralizar su presencia digital con la potencia de un panel administrativo completo.',
    'Creemos en el software bien hecho: seguro, escalable, fácil de usar y respaldado por un equipo humano que entiende el contexto y los objetivos de cada cliente.',
  ],
} as const

export const differentiatorsContent: readonly FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: 'Equipo local certificado',
    description:
      'Profesionales peruanos con certificaciones internacionales en desarrollo de software, seguridad y diseño UX.',
  },
  {
    icon: Zap,
    title: 'Soporte en tu idioma',
    description:
      'Atención personalizada en español, con tiempos de respuesta rápidos y comprensión del contexto empresarial peruano.',
  },
  {
    icon: Award,
    title: 'Calidad garantizada',
    description:
      'Todos nuestros productos pasan por rigurosos procesos de prueba antes de llegar al cliente. Cero compromisos con la calidad.',
  },
  {
    icon: Globe,
    title: 'Experiencia en el mercado peruano',
    description:
      'Más de 10 años entendiendo las necesidades específicas de las empresas en el Perú y Latinoamérica.',
  },
]
