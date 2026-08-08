/**
 * Shell de las páginas a pantalla completa (/demo y /admin):
 * sin navbar ni footer, para que se vean como productos independientes.
 */
export default function StandaloneLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>
}
