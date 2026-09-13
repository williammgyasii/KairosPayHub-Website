import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const items = [
  {
    num: '01',
    title: 'Always context-aware',
    body: 'KairosPayHub remembers your structure, layers, and leader scope — so pastors and unit leaders never repeat setup. It understands your church the way a long-time admin would.',
    image: '/backgrounds/feature-1.png',
    mosaic: [
      { top: '18%', left: '12%', tone: 'accent', size: 28 },
      { top: '32%', left: '38%', tone: 'soft', size: 22 },
      { top: '24%', left: '62%', tone: 'accent', size: 18 },
      { top: '48%', left: '22%', tone: 'soft', size: 32 },
      { top: '44%', left: '55%', tone: 'accent', size: 24 },
      { top: '58%', left: '72%', tone: 'soft', size: 20 },
    ],
  },
  {
    num: '02',
    title: 'Takes real action',
    body: 'Beyond directories, KairosPayHub executes — roll call, giving campaigns, approvals, and roster updates across every unit without constant hand-holding.',
    image: '/backgrounds/feature-2.png',
    mosaic: [
      { top: '20%', left: '18%', tone: 'soft', size: 26 },
      { top: '28%', left: '48%', tone: 'accent', size: 20 },
      { top: '40%', left: '68%', tone: 'soft', size: 28 },
      { top: '52%', left: '30%', tone: 'accent', size: 22 },
      { top: '56%', left: '58%', tone: 'soft', size: 18 },
    ],
  },
  {
    num: '03',
    title: 'Connects everything',
    body: 'Structure, membership, giving, attendance — all in one tree. One workspace updates everything across fellowship and cell layers, no extra work.',
    image: '/backgrounds/feature-3.png',
    mosaic: [
      { top: '16%', left: '28%', tone: 'accent', size: 24 },
      { top: '30%', left: '52%', tone: 'soft', size: 30 },
      { top: '46%', left: '16%', tone: 'soft', size: 20 },
      { top: '50%', left: '64%', tone: 'accent', size: 26 },
      { top: '62%', left: '40%', tone: 'soft', size: 18 },
    ],
  },
  {
    num: '04',
    title: 'Gets better over time',
    body: 'The longer you use it, the less you explain. Add layers, evolve templates, and move members — today’s setup becomes tomorrow’s one-click workflows.',
    image: '/backgrounds/feature-4.png',
    mosaic: [
      { top: '22%', left: '14%', tone: 'soft', size: 22 },
      { top: '26%', left: '44%', tone: 'accent', size: 28 },
      { top: '42%', left: '70%', tone: 'soft', size: 24 },
      { top: '54%', left: '24%', tone: 'accent', size: 18 },
      { top: '58%', left: '52%', tone: 'soft', size: 26 },
    ],
  },
] as const

type MosaicSquare = (typeof items)[number]['mosaic'][number]

function MosaicPattern({ squares }: { squares: readonly MosaicSquare[] }) {
  return (
    <div className="relative mx-auto mt-6 h-44 w-full max-w-[220px]" aria-hidden>
      {squares.map((square, index) => (
        <span
          key={index}
          className={cn(
            'absolute rounded-md',
            square.tone === 'accent' ? 'bg-[#f48d16]' : 'bg-[#d4cdc7]',
          )}
          style={{
            top: square.top,
            left: square.left,
            width: square.size,
            height: square.size,
          }}
        />
      ))}
    </div>
  )
}

export function Why() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Section id="features">
      <div className="mb-10 grid gap-6 sm:mb-14 sm:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <div>
          <p className="section-label">Why KairosPayHub</p>
          <h2 className="section-heading mt-4">
            A real platform, not a flat database in disguise
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base lg:pb-1">
          Most church software answers with member lists. KairosPayHub takes initiative
          — anticipating structure, scoping leaders, and growing smarter with every
          fellowship you add.
        </p>
      </div>

      <div
        className="-mx-4 snap-x snap-mandatory overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:snap-none md:overflow-visible md:px-0"
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="flex min-w-max gap-3 md:w-full md:min-w-0">
          {items.map(({ num, title, body, image, mosaic }, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={title}
                className={cn(
                  'why-card relative flex h-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-xl p-4 sm:h-[400px] sm:p-5 md:h-[420px]',
                  isActive
                    ? 'w-[min(88vw,420px)] bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.18)] md:w-[420px]'
                    : 'w-[min(72vw,284px)] bg-[#eeede6] md:w-[284px]',
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(isActive ? null : index)}
                tabIndex={0}
              >
                <div className="grid h-full grid-rows-[auto_1fr]">
                  <div className="relative min-h-0">
                    <div
                      className={cn(
                        'transition-opacity duration-300 ease-out',
                        isActive ? 'pointer-events-none opacity-0' : 'opacity-100',
                      )}
                      aria-hidden={isActive}
                    >
                      <span className="text-[2.5rem] font-medium leading-none text-[#c2bab1]">
                        {num}.
                      </span>
                      <MosaicPattern squares={mosaic} />
                    </div>

                    <div
                      className={cn(
                        'absolute inset-0 flex flex-col transition-opacity duration-300 ease-out',
                        isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
                      )}
                      aria-hidden={!isActive}
                    >
                      <div className="mb-4 overflow-hidden rounded-lg bg-[#f7f7f4]">
                        <img
                          src={image}
                          alt=""
                          className="h-44 w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
                    </div>
                  </div>

                  {!isActive ? (
                    <h3 className="mt-auto text-lg font-medium tracking-tight text-foreground">
                      {title}
                    </h3>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
