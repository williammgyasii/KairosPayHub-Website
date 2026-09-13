import { IconButton } from '@/components/ui/icon-button'
import { siteConfig } from '@/config/site'

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <IconButton href={siteConfig.appUrl} label="Get started" icon="up-right" />
    </div>
  )
}
