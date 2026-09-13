import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  secondary: 'border border-border bg-surface text-foreground hover:bg-muted-bg',
  ghost: 'text-muted hover:text-foreground',
  accent: 'bg-accent text-white hover:opacity-90',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-10 px-5 text-sm font-medium',
  lg: 'h-12 px-6 text-sm font-medium',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition-all',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
