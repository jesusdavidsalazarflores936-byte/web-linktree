import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'mint' | 'ghost'
type Size = 'md' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-glow hover:bg-brand-500',
  mint: 'bg-mint-400 text-ink-950 hover:bg-mint-300',
  ghost:
    'border border-ink-600 bg-ink-800/60 text-slate-200 hover:border-brand-600/60 hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-xs',
}

interface StyleProps {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  className?: string
}

function styles({ variant = 'primary', size = 'md', fullWidth, className }: StyleProps) {
  return cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)
}

export function ButtonLink({
  href,
  children,
  external,
  ...style
}: StyleProps & { href: string; external?: boolean; children: React.ReactNode }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles(style)}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={styles(style)}>
      {children}
    </Link>
  )
}

export function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: StyleProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles({ variant, size, fullWidth, className })} {...props}>
      {children}
    </button>
  )
}
