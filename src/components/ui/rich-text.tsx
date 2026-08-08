import { Fragment } from 'react'

/**
 * Párrafo que admite **énfasis** con sintaxis tipo markdown.
 * Permite escribir el copy en los archivos de contenido sin mezclar JSX.
 */
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
