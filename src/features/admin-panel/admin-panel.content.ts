import { Users, Layers, Bell, Settings, TrendingUp, Eye } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PanelPage } from '@/components/mockups/panel-preview'
import { routes } from '@/lib/site.config'

export const adminPanelContent = {
  eyebrow: 'Panel administrativo',
  title: 'Control total',
  titleAccentPrefix: 'desde',
  accent: 'un solo lugar',
  description:
    'Nuestro panel de administración te permite gestionar múltiples páginas, usuarios y configuraciones sin necesidad de conocimientos técnicos.',
  cta: { label: 'Explorar el Panel Admin', href: routes.admin },
} as const

export const adminPanelHighlights: readonly { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: 'Gestión de usuarios y roles' },
  { icon: Layers, label: 'Control de páginas múltiples' },
  { icon: Bell, label: 'Notificaciones y alertas' },
  { icon: Settings, label: 'Configuración centralizada' },
  { icon: TrendingUp, label: 'Reportes y métricas avanzadas' },
  { icon: Eye, label: 'Vista previa en tiempo real' },
]

export const adminPanelPages: readonly PanelPage[] = [
  { name: 'Empresa Principal', status: 'Activa', clicks: '1,240' },
  { name: 'Campaña Q3 2025', status: 'Activa', clicks: '876' },
  { name: 'Evento Lanzamiento', status: 'Pausada', clicks: '312' },
  { name: 'Equipo Comercial', status: 'Activa', clicks: '564' },
]
