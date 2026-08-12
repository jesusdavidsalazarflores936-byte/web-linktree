import { medirWebpPublico, type Medidas } from '@/lib/medir-imagen'
import { modulosPanel } from './content/modulos.content'

/** Medidas por módulo. Los iconos no cruzan al cliente: son funciones. */
export type MedidasPorModulo = Record<string, Medidas | null>

export async function medirModulos(): Promise<MedidasPorModulo> {
  const entradas = await Promise.all(
    modulosPanel
      .filter((modulo) => modulo.recorrido)
      .map(
        async (modulo) =>
          [modulo.slug, await medirWebpPublico(`panel/${modulo.slug}.webp`)] as const,
      ),
  )

  return Object.fromEntries(entradas)
}
