import { Check } from 'lucide-react'
import { Container } from '@/components/ui'
import { cn } from '@/lib/cn'
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

/** Resalta la columna del plan recomendado en toda la tabla. */
function featured(index: number) {
  return index === comparisonContent.featuredColumn ? 'bg-brand-600/[0.09]' : undefined
}

export function PricingComparison() {
  return (
    <Container className="relative isolate py-14 sm:py-20">
      <div
        aria-hidden
        className="bg-brand-600/15 pointer-events-none absolute top-1/3 left-1/2 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full blur-[130px]"
      />

      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-2xl">
        <h2 className="border-b border-white/10 px-5 py-4 text-sm font-semibold sm:px-6">
          {comparisonContent.title}
        </h2>

        <p className="text-fg-muted border-b border-white/5 px-5 py-2 font-mono text-[11px] sm:hidden">
          Desliza la tabla para ver los tres planes →
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="text-fg-muted border-b border-white/10 bg-white/[0.02] font-mono text-[11px] tracking-wider uppercase">
                <th scope="col" className="px-5 py-3 text-left sm:px-6">
                  Funcionalidad
                </th>
                {comparisonContent.columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={cn(
                      'px-4 py-3 text-center',
                      featured(index),
                      index === comparisonContent.featuredColumn && 'text-brand-200',
                    )}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonContent.rows.map((row) => (
                <tr key={row.feature} className="border-b border-white/5 last:border-0">
                  <th
                    scope="row"
                    className="px-5 py-3.5 text-left font-normal text-slate-300 sm:px-6"
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={comparisonContent.columns[index]}
                      className={cn('px-4 py-3.5 text-center', featured(index))}
                    >
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
