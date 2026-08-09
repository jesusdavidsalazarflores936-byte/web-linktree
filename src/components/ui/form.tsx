import { cn } from '@/lib/cn'

const controlStyles =
  'border-ink-600 bg-ink-850 placeholder-fg-muted/70 focus:border-brand-500 focus:ring-brand-600/30 w-full rounded-xl border px-4 py-3 text-sm text-slate-100 transition outline-none focus:ring-2'

const invalidStyles = 'border-red-500/60 focus:border-red-500 focus:ring-red-500/25'

export function Field({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
        {required && (
          <>
            {' '}
            <span className="text-red-400" aria-hidden>
              *
            </span>
            <span className="sr-only">(obligatorio)</span>
          </>
        )}
      </label>

      {children}

      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({
  invalid,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return <input className={cn(controlStyles, invalid && invalidStyles, className)} {...props} />
}

export function Textarea({
  invalid,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(controlStyles, 'resize-y', invalid && invalidStyles, className)}
      {...props}
    />
  )
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select className={cn(controlStyles, invalid && invalidStyles, className)} {...props}>
      {children}
    </select>
  )
}
