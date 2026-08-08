import { Hero } from '@/features/hero'
import { Stats } from '@/features/stats'
import { Capabilities } from '@/features/capabilities'
import { AdminPanel } from '@/features/admin-panel'
import { Testimonials } from '@/features/testimonials'
import { Pricing } from '@/features/pricing'

/**
 * Landing. Cada sección es una feature independiente que se compone aquí.
 * Añadir o reordenar secciones es cambiar este archivo, nada más.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Capabilities />
      <AdminPanel />
      <Testimonials />
      <Pricing />
    </>
  )
}
