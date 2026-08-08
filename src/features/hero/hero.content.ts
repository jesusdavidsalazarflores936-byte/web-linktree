import { Globe, Smartphone, Mail, CalendarDays } from 'lucide-react'
import type { PreviewLink, PreviewMetric } from '@/components/mockups/link-page-preview'

export const heroContent = {
  eyebrow: 'Plataforma empresarial de links',
  titleStart: 'Tu presencia digital en',
  titleAccent: 'un solo',
  titleEnd: 'enlace',
  description:
    'MR.SOFT Tree es la plataforma profesional para centralizar todos tus enlaces, con un potente panel administrativo que te da control total sobre tu presencia online.',
  socialProof: '+500 empresas confían en nosotros',
  avatars: [
    { initials: 'MG', gradient: 'from-brand-500 to-brand-700' },
    { initials: 'CR', gradient: 'from-mint-400 to-mint-500' },
    { initials: 'LM', gradient: 'from-sky-400 to-blue-600' },
    { initials: 'AS', gradient: 'from-pink-400 to-rose-600' },
  ],
} as const

export const heroPreview = {
  url: 'mrsoft-tree.com/tu-empresa',
  profile: {
    initials: 'TU',
    name: 'Tu Empresa',
    bio: 'Conecta con nosotros en todas partes',
  },
  links: [
    { icon: Globe, label: 'Sitio web oficial' },
    { icon: Smartphone, label: 'Descarga nuestra app', highlighted: true },
    { icon: Mail, label: 'Contáctanos por email' },
    { icon: CalendarDays, label: 'Reserva una reunión' },
  ] satisfies readonly PreviewLink[],
  metrics: [
    { value: '1.2k', label: 'visitas', tone: 'brand' },
    { value: '342', label: 'clics', tone: 'brand' },
    { value: '28%', label: 'CTR', tone: 'mint' },
  ] satisfies readonly PreviewMetric[],
  toast: { title: 'Nuevo clic', time: 'hace 3 segundos' },
} as const
