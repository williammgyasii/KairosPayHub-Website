import { Marquee } from '@/components/ui/marquee'
import { Section } from '@/components/ui/section'
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  Coins,
  GitBranch,
  Layers,
  Shield,
  Users,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const modules: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Layers,
    title: 'Structure',
    body: 'Church → Fellowship → Cell layers with evolve-as-you-grow templates.',
  },
  {
    icon: Users,
    title: 'Membership',
    body: 'Roster, placement, and optional login — scoped to the right leaders.',
  },
  {
    icon: Coins,
    title: 'Giving',
    body: 'Campaigns, sub-givings, proof upload, and pastor approvals.',
  },
  {
    icon: CalendarDays,
    title: 'Attendance',
    body: 'Recurring meeting types, roll call windows, and unit-level reporting.',
  },
  {
    icon: Wallet,
    title: 'Stripe Connect',
    body: 'Online giving routed through your church’s connected account.',
  },
  {
    icon: Shield,
    title: 'Leader scope',
    body: 'Each leader sees only their fellowship, cell, or assigned units.',
  },
  {
    icon: CheckCircle2,
    title: 'Approvals',
    body: 'Pastors review gifts and campaigns before they go live.',
  },
  {
    icon: GitBranch,
    title: 'Multi-campus',
    body: 'One tree for networks — campuses, fellowships, and cells together.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    body: 'Leaders get nudges for roll call, giving, and roster updates.',
  },
]

function IntegrationCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon
  title: string
  body: string
}) {
  return (
    <article className="integration-card flex w-[min(88vw,300px)] shrink-0 flex-col rounded-2xl border border-[#ddd8d3] bg-[#eeede6] p-5 sm:w-[300px] sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f48d16]/15">
        <Icon className="h-5 w-5 text-[#f48d16]" strokeWidth={2} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-[#251f19]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#68615a]">{body}</p>
    </article>
  )
}

export function Integrations() {
  return (
    <Section
      containerClassName="max-w-none px-4 sm:px-6 md:px-10 lg:px-16"
      className="overflow-hidden border-t border-border bg-surface"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="section-label">Integrations</p>
        <h2 className="section-heading mt-4 md:leading-[1.1]">
          Connect your workflow.{' '}
          <span className="headline-serif text-muted">KairosPayHub meets you there.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          Structure, membership, giving, and attendance — connected through your church
          tree, not bolted on as separate tools.
        </p>
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16">
        <Marquee duration={45}>
          {modules.map((item) => (
            <IntegrationCard key={item.title} {...item} />
          ))}
        </Marquee>
      </div>
    </Section>
  )
}
