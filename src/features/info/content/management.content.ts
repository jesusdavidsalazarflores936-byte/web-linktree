import { Layers, Users, TrendingUp, Bell, Settings, Eye } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PanelPage } from '@/components/mockups/panel-preview'
import { routes } from '@/lib/site.config'

export const managementContent = {
  title: 'Gestión simple, resultados poderosos',
  description:
    'El panel está diseñado para que cualquier persona de tu equipo pueda usarlo desde el primer día. No necesitas un desarrollador ni conocimientos técnicos. Solo entras, haces tus cambios y los cambios se publican al instante.',
  cta: { label: 'Explorar el Panel Admin', href: routes.admin },
} as const

export const managementPoints: readonly { icon: LucideIcon; label: string }[] = [
  { icon: Layers, label: 'Crea y edita páginas de enlaces en segundos' },
  { icon: Users, label: 'Asigna roles distintos a cada miembro del equipo' },
  { icon: TrendingUp, label: 'Consulta métricas actualizadas en tiempo real' },
  { icon: Bell, label: 'Recibe alertas automáticas de actividad' },
  { icon: Settings, label: 'Personaliza colores, logo y estilos sin código' },
  { icon: Eye, label: 'Vista previa antes de publicar cualquier cambio' },
]

export const managementPages: readonly PanelPage[] = [
  { name: 'MR.SOFT Principal', status: 'Activa', clicks: '1,240' },
  { name: 'Campaña Verano', status: 'Activa', clicks: '876' },
  { name: 'Evento Aniversario', status: 'Pausada', clicks: '312' },
  { name: 'Equipo Comercial', status: 'Activa', clicks: '564' },
]
