import type { Stat } from '@/types'

/**
 * Datos verificables del producto, no recuentos de clientes.
 * Si alguno deja de ser cierto, se cambia aquí.
 */
export const statsContent: readonly Stat[] = [
  { value: '+20', label: 'Redes y canales integrados' },
  { value: '1 QR', label: 'Por cada enlace, catálogo y sucursal' },
  { value: 'Cero', label: 'Publicidad de terceros en tu página' },
]
