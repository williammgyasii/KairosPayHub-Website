import { FloatingCta } from '@/components/layout/floating-cta'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import type { ReactNode } from 'react'

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCta />
    </div>
  )
}
