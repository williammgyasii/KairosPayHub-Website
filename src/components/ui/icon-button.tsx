import { ParleyArrowPair } from '@/components/ui/parley-arrow'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type IconButtonProps = ComponentProps<'a'> & {
  variant?: 'dark' | 'light'
  size?: 'md' | 'lg'
  icon?: 'right' | 'up-right'
  label: string
}

export function IconButton({
  className,
  variant = 'dark',
  size = 'md',
  icon = 'up-right',
  label,
  ...props
}: IconButtonProps) {
  const arrowSize = size === 'lg' ? 22 : 20

  return (
    <a
      className={cn(
        'icon-button group/ib inline-flex h-11 items-center gap-0 overflow-hidden rounded-lg text-xs font-medium transition-[transform,box-shadow] duration-300 ease-out',
        variant === 'dark'
          ? 'bg-[#251f19] text-[#fafafa]'
          : 'bg-white text-[#251f19]',
        size === 'lg' && 'h-12 text-sm',
        '[&.w-full]:flex [&.w-full]:w-full [&.w-full]:justify-center',
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'icon-button-icon relative m-1 flex shrink-0 overflow-hidden rounded bg-[#f48d16] text-[#251f19]',
          size === 'lg' ? 'h-10 w-10' : 'h-9 w-9',
        )}
      >
        <ParleyArrowPair direction={icon} size={arrowSize} />
      </span>
      <span className={cn('pr-4 pl-2', size === 'lg' && 'pr-5 pl-3')}>{label}</span>
    </a>
  )
}
