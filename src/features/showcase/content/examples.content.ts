export interface LinktreeExample {
  /** Nombre del archivo en public/examples, sin extensión */
  slug: string
  name: string
  sector: string
}

/**
 * Para añadir un cliente: deja su captura como public/examples/<slug>.webp
 * y agrégalo a esta lista. Las medidas las lee el proyecto del propio archivo.
 */
export const linktreeExamples: readonly LinktreeExample[] = [
  { slug: 'mrsoft', name: 'Mr. Soft', sector: 'Desarrollo de software' },
  { slug: 'gesrest', name: 'GesRest', sector: 'Restaurantes' },
  { slug: 'golden-brasas', name: 'Golden Brasas', sector: 'Pollería' },
]
