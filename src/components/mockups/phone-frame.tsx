import { cn } from '@/lib/cn'

/** Relación de aspecto de un iPhone 14 Pro Max: el mismo con el que se capturan los ejemplos. */
export const PHONE_ASPECT = 430 / 932

export function PhoneFrame({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('relative', className)}>
      <div className="bg-ink-700 ring-ink-600 relative rounded-[2.5rem] p-2.5 shadow-2xl ring-1">
        <span
          aria-hidden
          className="bg-ink-600 absolute top-24 -left-[3px] h-8 w-[3px] rounded-l"
        />
        <span
          aria-hidden
          className="bg-ink-600 absolute top-36 -left-[3px] h-12 w-[3px] rounded-l"
        />
        <span
          aria-hidden
          className="bg-ink-600 absolute top-32 -right-[3px] h-16 w-[3px] rounded-r"
        />

        <div
          className="bg-ink-950 relative overflow-hidden rounded-[2rem]"
          style={{ aspectRatio: PHONE_ASPECT }}
        >
          {children}

          <span
            aria-hidden
            className="bg-ink-950 absolute top-2 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full"
          />
          <span
            aria-hidden
            className="absolute bottom-2 left-1/2 z-10 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40"
          />
        </div>
      </div>
    </div>
  )
}
