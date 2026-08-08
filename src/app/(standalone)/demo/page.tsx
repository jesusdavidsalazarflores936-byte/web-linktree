import { buildMetadata } from '@/lib/metadata'
import { routes } from '@/lib/site.config'

export const metadata = buildMetadata({
  title: 'Página de ejemplo',
  description: 'Así se ve una página pública de enlaces creada con MR.SOFT Tree.',
  path: routes.demo,
})

export default function DemoPage() {
  return (
    <div className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="text-2xl font-bold">Página de ejemplo</h1>
        <p className="mt-3 text-sm text-fg-muted">En construcción — llega en la siguiente fase.</p>
      </div>
    </div>
  )
}
