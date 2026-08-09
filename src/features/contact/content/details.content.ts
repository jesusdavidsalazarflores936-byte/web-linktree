import { Mail, Phone, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig, routes } from '@/lib/site.config'

export interface ContactDetail {
  icon: LucideIcon
  tone: 'brand' | 'mint'
  label: string
  value: string
  note: string
  href?: string
}

const { contact } = siteConfig

export const contactDetails: readonly ContactDetail[] = [
  {
    icon: Mail,
    tone: 'brand',
    label: 'Email',
    value: contact.email,
    note: contact.emailNote,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    tone: 'mint',
    label: 'Teléfono',
    value: contact.phone,
    note: contact.phoneNote,
    href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: MapPin,
    tone: 'brand',
    label: 'Ubicación',
    value: contact.location,
    note: contact.locationNote,
  },
]

export const demoInviteContent = {
  title: '¿Prefieres ver el sistema primero?',
  description:
    'Accede al ejemplo en vivo de MR.SOFT Tree y explora cómo se ve una página pública de enlaces.',
  cta: { label: 'Ver demo en vivo', href: routes.demo },
} as const
