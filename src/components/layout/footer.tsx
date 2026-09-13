import { IconButton } from '@/components/ui/icon-button'
import { siteConfig } from '@/config/site'

const productLinks = [
  { label: 'Structure', href: '/#features' },
  { label: 'Giving', href: '/#product' },
  { label: 'Attendance', href: '/#product' },
]

const companyLinks = [
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: `mailto:${siteConfig.supportEmail}` },
]

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border mosaic-watermark pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 border-b border-border pb-12 md:flex-row md:items-start md:justify-between">
          <p className="text-base font-semibold text-foreground">{siteConfig.name}</p>
          <p className="text-sm text-muted">App</p>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description} Built for fellowship → cell churches that
              need structure-first operations.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Product</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="orange-bullet text-sm text-muted hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="orange-bullet text-sm text-muted hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={siteConfig.appUrl} className="orange-bullet text-sm text-muted hover:text-foreground">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-8 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <IconButton
            href={siteConfig.appUrl}
            label="Get started free"
            icon="up-right"
            className="w-full sm:w-auto"
          />
        </div>

        <p
          className="pointer-events-none select-none pb-8 text-center text-[clamp(3rem,12vw,8rem)] font-semibold leading-none tracking-tighter text-border/80"
          aria-hidden
        >
          {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
