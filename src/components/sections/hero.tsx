import { IconButton } from '@/components/ui/icon-button'
import { siteConfig } from '@/config/site'

export function Hero() {
  return (
    <section className="px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6 md:pb-12 md:pt-8">
      <div className="hero-gradient mx-auto max-w-6xl overflow-hidden rounded-2xl px-5 py-14 text-center sm:rounded-[2rem] sm:px-6 sm:py-20 md:rounded-[2.5rem] md:px-12 md:py-28">
        <h1 className="headline-balance mx-auto max-w-4xl text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.25rem] md:text-[3.75rem] md:leading-[1.05]">
          Church operations that work{' '}
          <span className="headline-serif text-white/95">with you</span>, not just for
          you
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-base md:text-lg">
          KairosPayHub thinks, plans, and acts alongside your leaders — handling
          structure, giving, attendance, and roster so pastors can focus on ministry
          only they can do.
        </p>
        <div className="mt-8 flex justify-center sm:mt-10">
          <IconButton
            href={siteConfig.appUrl}
            label="Get started free"
            size="lg"
            className="w-full max-w-xs sm:w-auto"
          />
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Trusted by 200+ churches
      </p>
    </section>
  )
}
