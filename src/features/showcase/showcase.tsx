import { medirEjemplos } from './medir-ejemplos'
import { PhoneShowcase } from './phone-showcase'

export async function Showcase({ className }: { className?: string }) {
  const ejemplos = await medirEjemplos()

  if (ejemplos.length === 0) return null

  return <PhoneShowcase ejemplos={ejemplos} className={className} />
}
