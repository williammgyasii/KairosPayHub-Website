import { IconButton } from '@/components/ui/icon-button'
import { Section } from '@/components/ui/section'
import { siteConfig } from '@/config/site'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How is KairosPayHub different from Planning Center or Breeze?',
    a: 'We start with fellowship → cell structure and leader-scoped workflows — not a flat church database with groups added later.',
  },
  {
    q: 'Do members need accounts?',
    a: 'Not on day one. Register members in Membership; email is optional until someone needs to sign in.',
  },
  {
    q: 'Can we accept online giving?',
    a: 'Manual giving with proof and approval is live today. Stripe-powered online giving is on the roadmap.',
  },
  {
    q: 'Is this only for churches in Ghana?',
    a: 'No. Churches in the US and elsewhere can use KairosPayHub. Currency follows each church’s settings.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most churches define their structure and invite leaders in under an hour. Early access includes hands-on onboarding.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">FAQ</p>
          <h2 className="section-heading mt-4 md:leading-[1.1]">
            Questions answered.
          </h2>
          <p className="mt-4 text-muted">Still curious?</p>
          <div className="mt-6">
            <IconButton
              href={`mailto:${siteConfig.supportEmail}`}
              label="Chat with us"
              icon="up-right"
            />
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={q} className="faq-item">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left text-sm font-medium text-foreground md:text-base"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="shrink-0 text-lg text-muted">{open === i ? '−' : '+'}</span>
              </button>
              <div
                className={cn(
                  'overflow-hidden text-sm leading-relaxed text-muted transition-all',
                  open === i ? 'max-h-96 pt-3' : 'max-h-0',
                )}
              >
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
