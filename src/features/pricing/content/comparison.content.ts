/** true = incluido · false = no incluido · texto = se muestra tal cual */
export type ComparisonValue = boolean | string

export interface ComparisonRow {
  feature: string
  values: readonly [ComparisonValue, ComparisonValue]
}

export const comparisonContent = {
  title: 'Qué incluye cada plan',
  columns: ['Básico', 'Premium'],
  rows: [
    { feature: 'Landings', values: ['1', 'Ilimitadas'] },
    { feature: 'Enlaces y redes', values: ['Ilimitados', 'Ilimitados'] },
    {
      feature: 'QR y folleto A4 con tu marca',
      values: ['Página y enlaces', 'Todo, incluidas sucursales'],
    },
    { feature: 'Analítica de clics', values: [true, true] },
    { feature: 'Carruseles de banner', values: ['1 de 3 slides', 'Ilimitados'] },
    { feature: 'CTR por slide', values: [false, true] },
    { feature: 'Catálogos, galerías y video', values: [false, true] },
    { feature: 'Vitrinas por sucursal', values: [false, true] },
    { feature: 'Degradados, tipografías y texturas', values: [false, true] },
  ] satisfies readonly ComparisonRow[],
} as const
