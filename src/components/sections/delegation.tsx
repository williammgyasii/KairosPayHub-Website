import { DelegationDemo } from '@/components/sections/delegation-demo'
import { ParleyArrow } from '@/components/ui/parley-arrow'
import { Section } from '@/components/ui/section'

const points = [
  {
    title: 'Natural language commands',
    body: 'Just speak naturally — "open Sunday roll call" or "show pending giving approvals for Hilltop Fellowship."',
  },
  {
    title: 'Multi-step task execution',
    body: 'Define structure once — KairosPayHub breaks setup into layers, assigns scope, and opens the right workflows for each leader.',
  },
  {
    title: 'Human-in-the-loop control',
    body: 'Pastors approve giving and see church-wide totals. Leaders operate in their unit — nothing slips through without the right eyes.',
  },
  {
    title: 'Persistent church profile',
    body: 'Your template, campaigns, and roster history carry forward. Add fellowships and cells without starting from scratch.',
  },
]

export function Delegation() {
  return (
    <Section id="product" className="border-t border-border">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <p className="section-label">Intelligent delegation</p>
          <h2 className="section-heading mt-4 md:leading-[1.1]">
            Set your structure once.{' '}
            <span className="headline-serif text-muted">Leaders handle the rest.</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Describe your church hierarchy in plain language and KairosPayHub scopes
            giving, attendance, and membership — keeping pastors updated along the way.
          </p>

          <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
            {points.map(({ title, body }) => (
              <div key={title} className="group/point">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#f48d16] transition-transform duration-300 group-hover/point:translate-x-0.5">
                    <ParleyArrow direction="right" size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <DelegationDemo />
        </div>
      </div>
    </Section>
  )
}
