import { Check } from 'lucide-react'
import { Container, Surface } from '@/components/ui'
import { comparisonContent, type ComparisonValue } from './content/comparison.content'

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <>
        <Check className="text-mint-400 mx-auto h-4 w-4" aria-hidden />
        <span className="sr-only">Incluido</span>
      </>
    )
  }

  if (value === false) {
    return (
      <>
        <span className="text-fg-muted" aria-hidden>
          —
        </span>
        <span className="sr-only">No incluido</span>
      </>
    )
  }

  return <span className="font-mono text-xs text-slate-200">{value}</span>
}

export function PricingComparison() {
  return (
    <Container className="py-14 sm:py-20">
      <Surface className="overflow-hidden">
        <h2 className="border-ink-600/70 border-b px-5 py-4 text-sm font-semibold sm:px-6">
          {comparisonContent.title}
        </h2>

        <p className="text-fg-muted border-ink-600/40 border-b px-5 py-2 font-mono text-[11px] sm:hidden">
          Desliza la tabla para ver todos los planes →
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="border-ink-600/70 bg-ink-850/60 text-fg-muted border-b font-mono text-[11px] tracking-wider uppercase">
                <th scope="col" className="px-5 py-3 text-left sm:px-6">
                  Funcionalidad
                </th>
                {comparisonContent.columns.map((column) => (
                  <th key={column} scope="col" className="px-4 py-3 text-center">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonContent.rows.map((row) => (
                <tr key={row.feature} className="border-ink-600/40 border-b last:border-0">
                  <th scope="row" className="px-5 py-3.5 text-left font-normal text-slate-300 sm:px-6">
                    {row.feature}
                  </th>
                  {row.values.map((value, index) => (
                    <td key={comparisonContent.columns[index]} className="px-4 py-3.5 text-center">
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Surface>
    </Container>
  )
}
