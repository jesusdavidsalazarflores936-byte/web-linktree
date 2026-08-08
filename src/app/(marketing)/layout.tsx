import { Navbar, Footer } from '@/components/layout'

/**
 * Shell de las páginas públicas de marketing: navbar + contenido + footer.
 * Las páginas de /demo y /admin usan otro layout, sin esta navegación.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
