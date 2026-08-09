import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Evita que Next deduzca la raíz desde lockfiles de carpetas superiores
  turbopack: { root: import.meta.dirname },
}

export default nextConfig
