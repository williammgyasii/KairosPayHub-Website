import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  containerClassName?: string
}

export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24 lg:py-28', className)}>
      <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'mb-14 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  )
}
