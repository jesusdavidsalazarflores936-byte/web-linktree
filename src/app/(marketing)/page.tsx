import { Hero } from '@/features/hero'
import { Stats } from '@/features/stats'
import { Capabilities } from '@/features/capabilities'
import { AdminPanel } from '@/features/admin-panel'
import { Testimonials } from '@/features/testimonials'
import { Pricing } from '@/features/pricing'

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
