import { cn } from '@/lib/utils'
import { Children, cloneElement, isValidElement, type ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  className?: string
  /** Seconds for one full loop */
  duration?: number
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  className,
  duration = 45,
  pauseOnHover = true,
}: MarqueeProps) {
  const items = Children.toArray(children)

  const renderStrip = (prefix: string) =>
    items.map((child, index) => {
      if (!isValidElement(child)) return child
      return cloneElement(child, { key: `${prefix}-${index}` })
    })

  return (
    <div
      className={cn(
        'marquee-mask relative w-full overflow-hidden',
        pauseOnHover && 'group/marquee',
        className,
      )}
    >
      <div
        className={cn(
          'marquee-track flex w-max gap-4 md:gap-5',
          pauseOnHover && 'group-hover/marquee:[animation-play-state:paused]',
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {renderStrip('a')}
        {renderStrip('b')}
      </div>
    </div>
  )
}
