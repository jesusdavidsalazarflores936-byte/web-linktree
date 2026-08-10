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
      {/* Bisel de vidrio: translúcido, con reflejo superior y borde luminoso */}
      <div className="relative rounded-[2.75rem] bg-white/5 p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/15 backdrop-blur-xl sm:p-2.5">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-b from-white/20 via-transparent to-transparent"
        />

        <span
          aria-hidden
          className="absolute top-24 -left-[3px] h-8 w-[3px] rounded-l bg-white/20"
        />
        <span
          aria-hidden
          className="absolute top-36 -left-[3px] h-12 w-[3px] rounded-l bg-white/20"
        />
        <span
          aria-hidden
          className="absolute top-32 -right-[3px] h-16 w-[3px] rounded-r bg-white/20"
        />

        <div
          className="bg-ink-950 relative overflow-hidden rounded-[2.25rem]"
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
