import { Hero } from '@/features/hero'
import { Stats } from '@/features/stats'
import { Capabilities } from '@/features/capabilities'
import { AdminPanel } from '@/features/admin-panel'
import { Clients } from '@/features/clients'
import { Pricing } from '@/features/pricing'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Capabilities />
      <AdminPanel />
      <Clients />
      <Pricing />
    </>
  )
}
