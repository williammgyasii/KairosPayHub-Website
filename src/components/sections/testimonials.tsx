import { Marquee } from '@/components/ui/marquee'
import { ParleyArrow } from '@/components/ui/parley-arrow'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'

const quotes = [
  {
    quote:
      'KairosPayHub does what every other church tool promised but never delivered — it actually respects our fellowship → cell structure. Roll call and giving finally match how we organize.',
    name: 'James R.',
    role: 'Lead pastor, Hilltop Church',
    avatar: '/backgrounds/avatar-1.png',
    featured: true,
  },
  {
    quote:
      "I was skeptical about 'structure-first' software — but leaders onboard in a week and only see their unit. Genuinely impressive.",
    name: 'Sophie K.',
    role: 'Fellowship leader, Grace Assembly',
    avatar: '/backgrounds/avatar-2.png',
  },
  {
    quote:
      'The giving approval workflow alone saved our admin team hours every week. And roll call finally rolls up the way we organize.',
    name: 'Daniel M.',
    role: 'Operations, TPH USA',
    avatar: '/backgrounds/avatar-3.png',
  },
  {
    quote:
      'KairosPayHub is the first church app that actually reduces my workload. I stay on top of giving, attendance, and roster without spreadsheet chaos.',
    name: 'Paul M.',
    role: 'Cell leader, Living Word',
    avatar: '/backgrounds/avatar-4.png',
  },
  {
    quote:
      'It feels like the platform we always needed. It keeps structure organized, handles approvals, and saves us hours every week.',
    name: 'Emily C.',
    role: 'Church admin, Cornerstone',
    avatar: '/backgrounds/avatar-5.png',
  },
]

function ReadOnButton({ dark = true }: { dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium',
        dark ? 'bg-[#251f19] text-[#fafafa]' : 'bg-white/90 text-foreground',
      )}
    >
      Read on
      <ParleyArrow direction="up-right" size={14} />
    </span>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  featured = false,
}: (typeof quotes)[number]) {
  return (
    <figure
      className={cn(
        'testimonial-card flex w-[min(88vw,372px)] shrink-0 flex-col justify-between rounded-2xl p-6 sm:w-[372px] sm:p-8',
        featured ? 'testimonial-card-featured' : 'testimonial-card-default',
      )}
    >
      <blockquote
        className={cn(
          'text-[15px] leading-relaxed',
          featured ? 'text-[#251f19]' : 'text-[#68615a]',
        )}
      >
        “{quote}”
      </blockquote>

      <figcaption className="mt-10 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt=""
            className="h-11 w-11 rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold text-[#251f19]">{name}</p>
            <p className="mt-0.5 text-xs text-[#948b81]">{role}</p>
          </div>
        </div>
        <ReadOnButton dark={!featured} />
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <Section
      containerClassName="max-w-none px-4 sm:px-6 md:px-10 lg:px-16"
      className="overflow-hidden border-t border-border"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="section-label">What people say</p>
        <h2 className="section-heading mt-4 md:leading-[1.1]">
          Teams that work with KairosPayHub, not around it
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          From solo pastors to multi-fellowship churches — here&apos;s what leaders
          say after making KairosPayHub their daily workspace.
        </p>
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16">
        <Marquee duration={50}>
          {quotes.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </Marquee>
      </div>
    </Section>
  )
}
