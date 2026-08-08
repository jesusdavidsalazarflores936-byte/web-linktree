import { Fragment } from 'react'

/** Admite **énfasis** con sintaxis markdown en los archivos de contenido. */
export function RichText({ text, className }: { text: string; className?: string }) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <p className={className}>
      {segments.map((segment, index) => {
        const isBold = segment.startsWith('**') && segment.endsWith('**')

        return isBold ? (
          <strong key={index} className="font-semibold text-slate-100">
            {segment.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        )
      })}
    </p>
  )
}
