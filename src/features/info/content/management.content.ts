import { Eye, Layers, Zap, Bell, Palette, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PanelPage } from '@/components/mockups/panel-preview'
import { siteConfig } from '@/lib/site.config'

export const managementContent = {
  title: 'Se prueba antes de pagarse',
  description:
    'Los módulos premium están siempre visibles en el panel. Los activas, ves el resultado en el celular de vista previa y decides. Nada se borra si bajas de plan.',
  cta: { label: 'Ver una página publicada', href: siteConfig.exampleUrl, external: true },
} as const

export const managementPoints: readonly { icon: LucideIcon; label: string }[] = [
  { icon: Eye, label: 'Vista previa en vivo antes de guardar' },
  { icon: Layers, label: 'Arrastrar para reordenar tus enlaces' },
  { icon: Zap, label: 'Los cambios se publican al instante' },
  { icon: Bell, label: 'Pausar una promoción sin borrarla' },
  { icon: Palette, label: 'Contraste calculado solo: nunca un botón ilegible' },
  { icon: Users, label: 'Panel y soporte en español' },
]

export const managementPages: readonly PanelPage[] = [
  { name: 'Página principal', status: 'Activa', clicks: '1,240' },
  { name: 'Sucursal Arequipa', status: 'Activa', clicks: '876' },
  { name: 'Campaña Cyber Days', status: 'Pausada', clicks: '312' },
  { name: 'Equipo comercial', status: 'Activa', clicks: '564' },
]
