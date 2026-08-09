/** true = incluido · false = no incluido · texto = se muestra tal cual */
export type ComparisonValue = boolean | string

export interface ComparisonRow {
  feature: string
  values: readonly [ComparisonValue, ComparisonValue, ComparisonValue]
}

export const comparisonContent = {
  title: 'Comparativa de funcionalidades',
  columns: ['Starter', 'Business', 'Enterprise'],
  rows: [
    { feature: 'Páginas de enlaces', values: ['5', 'Ilimitadas', 'Ilimitadas'] },
    { feature: 'Usuarios del panel', values: ['1', 'Hasta 10', 'Ilimitados'] },
    { feature: 'Dominio personalizado', values: [true, true, true] },
    { feature: 'Analíticas avanzadas', values: [false, true, true] },
    { feature: 'Reportes automáticos', values: [false, true, true] },
    { feature: 'Integración por API', values: [false, false, true] },
    { feature: 'Soporte prioritario', values: [false, true, true] },
    { feature: 'Gestor de cuenta', values: [false, false, true] },
  ] satisfies readonly ComparisonRow[],
} as const
