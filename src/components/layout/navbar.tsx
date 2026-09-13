import { IconButton } from '@/components/ui/icon-button'
import { navLinks, siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center md:flex">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 ? <span className="nav-dot" aria-hidden /> : null}
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="hidden md:block">
          <IconButton href={siteConfig.appUrl} label="Get started free" icon="up-right" />
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-border bg-surface px-4 py-4 sm:px-6 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <IconButton href={siteConfig.appUrl} label="Get started free" className="w-fit" />
        </nav>
      </div>
    </header>
  )
}
