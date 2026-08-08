import { ArrowLeft } from 'lucide-react'
import { ButtonLink, Container } from '@/components/ui'
import { routes } from '@/lib/site.config'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-brand-500 font-mono text-6xl font-bold">404</p>
      <h1 className="mt-6 text-2xl font-bold">Esta página no existe</h1>
      <p className="text-fg-muted mt-3 max-w-sm text-sm">
        Puede que el enlace haya cambiado o que la dirección esté mal escrita.
      </p>
      <ButtonLink href={routes.home} className="mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Volver al inicio
      </ButtonLink>
    </Container>
  )
}
