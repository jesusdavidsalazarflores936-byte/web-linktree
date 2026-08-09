import { FileText, Users, BarChart3, Palette, RefreshCw, Lock } from 'lucide-react'
import type { FeatureItem } from '@/types'

export const adminFeaturesHeading = {
  title: 'El Panel Administrativo',
  description:
    'El corazón del sistema. Desde aquí controlas absolutamente todo, sin escribir una sola línea de código.',
} as const

export const adminFeaturesContent: readonly FeatureItem[] = [
  {
    icon: FileText,
    title: 'Gestión de páginas múltiples',
    description:
      'Crea, edita y administra todas tus páginas de enlaces desde un único panel centralizado. Activa, pausa o archiva páginas con un solo clic.',
  },
  {
    icon: Users,
    title: 'Control de usuarios y roles',
    description:
      'Define permisos granulares para cada miembro del equipo: Administrador, Editor o Viewer. Gestiona accesos de forma segura sin complicaciones.',
  },
  {
    icon: BarChart3,
    title: 'Analíticas avanzadas',
    description:
      'Monitorea visitas, clics y tasas de conversión en tiempo real. Obtén reportes semanales automáticos y gráficos de evolución detallados.',
  },
  {
    icon: Palette,
    title: 'Personalización sin código',
    description:
      'Modifica colores, tipografías y estilos visuales directamente desde el panel. Vista previa en tiempo real antes de publicar cualquier cambio.',
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones instantáneas',
    description:
      'Los cambios se reflejan en la página pública de forma inmediata. Sin tiempos de espera ni procesos complejos de publicación.',
  },
  {
    icon: Lock,
    title: 'Seguridad y auditoría',
    description:
      'Autenticación en dos pasos, registro de actividad, control de sesiones y cifrado de datos. Tu información siempre protegida.',
  },
]
