import type { LucideIcon } from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  gradient: string
}
