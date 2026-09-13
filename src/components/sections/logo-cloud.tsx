import { Marquee } from '@/components/ui/marquee'
import { trustedBy } from '@/config/site'

export function LogoCloud() {
  return (
    <section className="overflow-hidden border-y border-border/60 py-10">
      <Marquee duration={35} className="opacity-80">
        {trustedBy.map((name) => (
          <span
            key={name}
            className="shrink-0 px-8 text-sm font-medium tracking-wide text-muted/70 uppercase"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
