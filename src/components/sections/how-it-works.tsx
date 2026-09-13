import { Section } from '@/components/ui/section'

const steps = [
  {
    num: '01',
    title: 'Connect your structure',
    body: 'Define Church → Fellowship → Cell layers and connect leaders to each unit.',
  },
  {
    num: '02',
    title: 'Brief & customize',
    body: 'Open giving campaigns, set meeting types, and register your roster — scoped to your template.',
  },
  {
    num: '03',
    title: 'Delegate everywhere',
    body: 'Leaders roll call, log gifts, and manage members. Pastors approve and see church-wide totals.',
  },
]

export function HowItWorks() {
  return (
    <Section className="border-t border-border bg-surface">
      <div className="mb-10 max-w-xl sm:mb-14">
        <p className="section-label">How it works</p>
        <h2 className="section-heading mt-4 md:leading-[1.1]">
          From setup to Sunday.{' '}
          <span className="headline-serif text-muted">Without the back-and-forth.</span>
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {steps.map(({ num, title, body }) => (
          <article
            key={num}
            className="feature-card rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs font-medium text-accent">{num}</p>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
