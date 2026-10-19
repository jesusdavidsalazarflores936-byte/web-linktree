import type { NextConfig } from 'next'

// El linktree público vive en link.mrsoft-tree.com. Los QR impresos antes del
// cambio de dominio apuntan a www.mrsoft-tree.com/{slug}[/{vitrina}]: todo
// path de 1–2 segmentos que no sea de esta web se manda allá (query incluida).
// Temporal (307) mientras se confirma que no choca con rutas de la web.
const LINKTREE_URL = 'https://link.mrsoft-tree.com'
const RESERVADAS = [
  'contacto',
  'informacion',
  'precios',
  '3d',
  'examples',
  'logos',
  'panel',
  '_next',
  '_vercel',
  'api',
]
const SLUG = `((?!(?:${RESERVADAS.join('|')})(?:/|$))[^/.]+)`

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Evita que Next deduzca la raíz desde lockfiles de carpetas superiores
  turbopack: { root: import.meta.dirname },
  async redirects() {
    return [
      { source: `/:slug${SLUG}`, destination: `${LINKTREE_URL}/:slug`, permanent: false },
      {
        source: `/:slug${SLUG}/:vitrina([^/.]+)`,
        destination: `${LINKTREE_URL}/:slug/:vitrina`,
        permanent: false,
      },
    ]
  },
}

export default nextConfig
