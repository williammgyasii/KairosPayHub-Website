import { IconButton } from '@/components/ui/icon-button'
import { siteConfig } from '@/config/site'

export function CTA() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:pb-28">
      <div className="cta-gradient mx-auto max-w-6xl overflow-hidden rounded-2xl px-5 py-14 text-center sm:rounded-[2rem] sm:px-6 sm:py-20 md:rounded-[2.5rem] md:px-12 md:py-24">
        <h2 className="headline-balance mx-auto max-w-3xl text-[1.75rem] font-semibold tracking-[-0.02em] text-white sm:text-3xl md:text-[2.75rem] md:leading-[1.1]">
          Meet your church hub.{' '}
          <span className="headline-serif text-white/90">Built for real work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/85">
          Join founding churches who use KairosPayHub as their daily workspace. Set up
          in minutes. Cancel anytime. Early access is on us.
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
    </section>
  )
}
