import { Mail, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

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
    icon: MapPin,
    tone: 'brand',
    label: 'Ubicación',
    value: contact.location,
    note: contact.locationNote,
  },
]

export const whatsappCta = {
  label: 'Escríbenos por WhatsApp',
  note: contact.phoneNote,
  href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
} as const

export const demoInviteContent = {
  title: '¿Prefieres ver el sistema primero?',
  description:
    'Accede al ejemplo en vivo de MR.SOFT Tree y explora cómo se ve una página pública de enlaces.',
  cta: { label: 'Ver demo en vivo', href: siteConfig.exampleUrl },
} as const
