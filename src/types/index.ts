import type { LucideIcon } from 'lucide-react'

/** Elemento con icono + título + texto. Base de casi todas las tarjetas. */
export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

/** Enlace de navegación o llamada a la acción. */
export interface NavLink {
  label: string
  href: string
}

/** Dato numérico destacado (barra de estadísticas). */
export interface Stat {
  value: string
  label: string
}

/** Testimonio de cliente. */
export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  gradient: string
}
