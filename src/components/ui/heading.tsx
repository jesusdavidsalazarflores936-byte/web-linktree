import { cn } from '@/lib/cn'
import { Eyebrow } from './eyebrow'

export function SectionHeading({
  eyebrow,
  tone = 'brand',
  title,
  accent,
  description,
  align = 'center',
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string
  tone?: 'brand' | 'mint'
  title: string
  /** Segunda línea del titular, en color */
  accent?: string
  description?: string
  align?: 'center' | 'left'
  as?: 'h1' | 'h2'
  className?: string
}) {
  const isH1 = Tag === 'h1'

  return (
    <div
      className={cn(
        'animate-fade-up',
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}

      <Tag
        className={cn(
          'font-bold tracking-tight',
          isH1
            ? 'text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]'
            : 'text-[1.75rem] leading-tight sm:text-4xl',
        )}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className={tone === 'mint' ? 'text-mint-400' : 'text-brand-400'}>{accent}</span>
          </>
        )}
      </Tag>

      {description && (
        <p
          className={cn(
            'text-fg-muted mt-5 text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
