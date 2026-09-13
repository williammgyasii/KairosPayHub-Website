import { CTA } from '@/components/sections/cta'
import { Delegation } from '@/components/sections/delegation'
import { FAQ } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Integrations } from '@/components/sections/integrations'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { PricingSection } from '@/components/sections/pricing-section'
import { Testimonials } from '@/components/sections/testimonials'
import { Why } from '@/components/sections/why'

export function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Why />
      <Delegation />
      <Testimonials />
      <PricingSection />
      <HowItWorks />
      <FAQ />
      <Integrations />
      <CTA />
    </>
  )
}
