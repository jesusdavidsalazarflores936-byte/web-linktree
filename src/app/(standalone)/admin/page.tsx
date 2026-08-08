import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Panel de Administración',
  description: 'Maqueta de demostración del panel administrativo de MR.SOFT Tree.',
  path: routes.admin,
})

export default function AdminPage() {
  return (
    <div className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <p className="mt-3 text-sm text-fg-muted">En construcción — llega en la siguiente fase.</p>
      </div>
    </div>
  )
}
