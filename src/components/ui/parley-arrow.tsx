import { cn } from '@/lib/utils'

type ParleyArrowProps = {
  direction?: 'right' | 'up-right'
  className?: string
  size?: number
}

/** Pixel size of each block in the Parley arrow (from Framer export). */
const BLOCK = 1.439

/** Stepped up-right arrow blocks in local coordinates (Parley `framer-6tu3u`). */
const UP_RIGHT_BLOCKS: [number, number][] = [
  [0, 11.51],
  [1.439, 10.071],
  [2.878, 8.633],
  [4.316, 7.193],
  [5.756, 5.755],
  [4.317, 4.316],
  [2.878, 2.877],
  [1.439, 1.438],
  [0, 0],
]

const UP_RIGHT_ORIGIN: [number, number] = [8.306, 6.234]

function ArrowSvg({
  direction,
  size,
  className,
}: {
  direction: 'right' | 'up-right'
  size: number
  className?: string
}) {
  const groupTransform =
    direction === 'up-right'
      ? `translate(${UP_RIGHT_ORIGIN[0]} ${UP_RIGHT_ORIGIN[1]})`
      : 'translate(12 12) rotate(-90) translate(-8.306 -12.17)'

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      className={cn('shrink-0', className)}
    >
      <g transform={groupTransform}>
        {UP_RIGHT_BLOCKS.map(([x, y], index) => (
          <rect
            key={index}
            x={x}
            y={y}
            width={BLOCK}
            height={BLOCK}
            fill="currentColor"
          />
        ))}
      </g>
    </svg>
  )
}

/** Stepped pixel arrow used across Parley-style buttons and bullets. */
export function ParleyArrow({
  direction = 'up-right',
  className,
  size = 24,
}: ParleyArrowProps) {
  return <ArrowSvg direction={direction} size={size} className={className} />
}

/** Two stacked arrows for Parley button hover slide. */
export function ParleyArrowPair({
  direction = 'up-right',
  size = 24,
  className,
}: Omit<ParleyArrowProps, 'direction'> & { direction?: 'right' | 'up-right' }) {
  return (
    <span
      className={cn(
        'parley-arrow-pair inline-flex w-[200%] transition-transform duration-300 ease-out group-hover/ib:-translate-x-1/2',
        className,
      )}
    >
      <span className="flex w-1/2 items-center justify-center">
        <ArrowSvg direction={direction} size={size} />
      </span>
      <span className="flex w-1/2 items-center justify-center">
        <ArrowSvg direction={direction} size={size} />
      </span>
    </span>
  )
}
