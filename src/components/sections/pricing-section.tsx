import { IconButton } from '@/components/ui/icon-button'
import { Section } from '@/components/ui/section'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Plan = {
  name: string
  price: string
  period: string
  description: string
  cta: string
  href: string
  featured?: boolean
  features: { text: string; included: boolean }[]
}

const monthlyPlans: Plan[] = [
  {
    name: 'Starter',
    price: '$25',
    period: 'per church / month, billed monthly',
    description:
      'For single-campus churches getting structure, roster, and attendance in one place.',
    cta: 'Get started',
    href: siteConfig.appUrl,
    features: [
      { text: 'Structure templates & hierarchy', included: true },
      { text: 'Up to 250 members on roster', included: true },
      { text: 'Attendance & roll call', included: true },
      { text: 'Leader-scoped access', included: true },
      { text: 'Email support', included: true },
      { text: 'Online Stripe giving', included: false },
      { text: 'Multi-campus structure', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Growth',
    price: '$50',
    period: 'per church / month, billed monthly',
    description:
      'For churches ready for online giving, expanded leader seats, and campaign workflows.',
    cta: 'Get started',
    href: siteConfig.appUrl,
    featured: true,
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Up to 750 members on roster', included: true },
      { text: 'Stripe Connect giving', included: true },
      { text: 'Giving campaigns & approvals', included: true },
      { text: 'Expanded leader seats', included: true },
      { text: 'Private media hosting', included: false },
      { text: 'Multi-campus structure', included: false },
      { text: 'Dedicated onboarding', included: false },
    ],
  },
  {
    name: 'Scale',
    price: '$100',
    period: 'per church / month, billed monthly',
    description:
      'For growing ministries that need multi-campus structure and priority support.',
    cta: 'Get started',
    href: siteConfig.appUrl,
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'Unlimited members on roster', included: true },
      { text: 'Multi-campus structure', included: true },
      { text: 'Private media hosting', included: true },
      { text: 'Priority support', included: true },
      { text: 'Custom workflows', included: true },
      { text: 'Dedicated onboarding', included: false },
      { text: 'Custom integrations', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your network',
    description:
      'For networks and multi-campus organizations that need dedicated onboarding and SLAs.',
    cta: 'Talk to us',
    href: `mailto:${siteConfig.supportEmail}`,
    features: [
      { text: 'Everything in Scale', included: true },
      { text: 'Network-wide structure', included: true },
      { text: 'Dedicated onboarding', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA & training', included: true },
      { text: 'Team features', included: true },
      { text: 'Volume pricing', included: true },
      { text: 'Account manager', included: true },
    ],
  },
]

function annualPrice(monthly: string) {
  if (monthly === 'Custom') return 'Custom'
  const n = Number(monthly.replace('$', ''))
  return `$${Math.round(n * 0.85)}`
}

function FeatureList({ features }: { features: Plan['features'] }) {
  return (
    <ul className="space-y-3">
      {features.map(({ text, included }) => (
        <li
          key={text}
          className={cn(
            'flex items-start gap-3 text-base leading-[1.45] text-[#251f19]',
            !included && 'opacity-60',
          )}
        >
          <span
            className={cn(
              'mt-2 h-2 w-2 shrink-0 rounded-[2px]',
              included ? 'bg-[#f48d16]' : 'bg-[#948b81] opacity-0',
            )}
            aria-hidden
          />
          {text}
        </li>
      ))}
    </ul>
  )
}

function BillingToggle({
  annual,
  onMonthly,
  onAnnual,
  className,
}: {
  annual: boolean
  onMonthly: () => void
  onAnnual: () => void
  className?: string
}) {
  return (
    <div className={cn('inline-flex shrink-0 rounded-lg bg-[#eeede6] p-1', className)}>
      <button
        type="button"
        className={cn(
          'rounded-lg px-5 py-2.5 text-sm transition-colors',
          !annual ? 'bg-white font-medium text-[#251f19]' : 'text-[#68615a]',
        )}
        onClick={onMonthly}
      >
        Monthly
      </button>
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors',
          annual ? 'bg-white font-medium text-[#251f19]' : 'text-[#68615a]',
        )}
        onClick={onAnnual}
      >
        Annual
        <span className="font-medium text-[#251f19]">-15%</span>
      </button>
    </div>
  )
}

function PricingCard({
  plan,
  annual,
  index,
}: {
  plan: Plan
  annual: boolean
  index: number
}) {
  const price = annual ? annualPrice(plan.price) : plan.price
  const period =
    annual && plan.price !== 'Custom'
      ? 'per church / month, billed annually'
      : plan.period

  return (
    <article
      className={cn(
        'pricing-card pricing-card-flow flex h-full min-h-0 flex-col rounded-xl border border-[#ddd8d3] bg-[#eeede6] p-5 sm:min-h-[620px] sm:p-6 md:p-7 xl:min-h-[720px] xl:p-8',
        plan.featured && 'pricing-card-featured',
      )}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <h3 className="headline-serif text-[1.5rem] text-[#251f19] md:text-[1.65rem]">
        {plan.name}
      </h3>
      <div className="mt-5">
        <p className="text-[2.75rem] font-medium leading-none tracking-[-0.03em] text-[#251f19] sm:text-[3.25rem] md:text-[3.5rem]">
          {price}
        </p>
        <p className="mt-2.5 text-base text-[#68615a] md:text-lg">{period}</p>
      </div>
      <p className="mt-6 text-base leading-relaxed text-[#68615a] md:text-lg">
        {plan.description}
      </p>
      <div className="mt-8 flex-1">
        <FeatureList features={plan.features} />
      </div>
      <div className="mt-10">
        <IconButton
          href={plan.href}
          label={plan.cta}
          icon="right"
          variant={plan.featured ? 'dark' : 'light'}
          size="lg"
          className="w-full"
        />
      </div>
    </article>
  )
}

export function PricingSection({ showHeader = true }: { showHeader?: boolean }) {
  const [annual, setAnnual] = useState(false)

  return (
    <Section
      id="pricing"
      className="border-t border-border py-20 md:py-28"
      containerClassName="max-w-[1480px]"
    >
      <div className="mb-10">
        {showHeader ? (
          <>
            <p className="section-label">Pricing</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="section-heading-lg max-w-3xl text-[#251f19]">
                Simple, transparent pricing.{' '}
                <span className="headline-serif font-normal text-[#948b81]">No surprises.</span>
              </h2>
              <BillingToggle
                annual={annual}
                onMonthly={() => setAnnual(false)}
                onAnnual={() => setAnnual(true)}
                className="self-start sm:mt-2 sm:ml-auto"
              />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#68615a] md:text-lg">
              Scale as you grow. Every plan includes core structure and roster features —
              upgrade when you need giving, multi-campus, or network support.
            </p>
          </>
        ) : (
          <div className="flex justify-end">
            <BillingToggle
              annual={annual}
              onMonthly={() => setAnnual(false)}
              onAnnual={() => setAnnual(true)}
            />
          </div>
        )}
      </div>

      <div className="pricing-panel mt-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {monthlyPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
