import { ParleyArrow } from '@/components/ui/parley-arrow'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const command = 'setup Hilltop Fellowship structure'
const steps = [
  'Assign fellowship leader',
  'Add cell groups under fellowship',
  'Open giving campaign for Q3',
  'Notify scoped leaders',
] as const

type Phase = 'typing' | 'planning' | 'running' | 'done'

export function DelegationDemo() {
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [activeStep, setActiveStep] = useState(-1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    if (phase !== 'typing') return

    if (typed.length < command.length) {
      const timer = window.setTimeout(() => {
        setTyped(command.slice(0, typed.length + 1))
      }, 55)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => setPhase('planning'), 500)
    return () => window.clearTimeout(timer)
  }, [phase, typed])

  useEffect(() => {
    if (phase === 'planning') {
      const timer = window.setTimeout(() => {
        setPhase('running')
        setActiveStep(0)
      }, 700)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'running' && activeStep >= 0 && activeStep < steps.length) {
      const timer = window.setTimeout(() => {
        setCompletedSteps((prev) => [...prev, activeStep])
        setActiveStep((prev) => prev + 1)
      }, 900)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'running' && activeStep >= steps.length) {
      const timer = window.setTimeout(() => setPhase('done'), 600)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'done') {
      const timer = window.setTimeout(() => {
        setTyped('')
        setPhase('typing')
        setActiveStep(-1)
        setCompletedSteps([])
      }, 2200)
      return () => window.clearTimeout(timer)
    }
  }, [phase, activeStep])

  return (
    <div className="delegation-demo parley-card overflow-hidden font-sans shadow-[0_24px_80px_-20px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-xs text-muted sm:ml-3 sm:text-sm">
          Structure / New fellowship
        </span>
      </div>

      <div className="grid md:grid-cols-[160px_1fr]">
        <aside className="hidden border-r border-border bg-[#f7f7f4] p-5 md:block">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#251f19] text-xs font-semibold text-white">
              GA
            </span>
            <p className="text-sm font-semibold text-foreground">Grace Assembly</p>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <li className="font-semibold text-[#f48d16]">+ New unit</li>
            <li className={cn(phase !== 'typing' && 'font-medium text-foreground')}>
              Fellowships
            </li>
            <li>Cells</li>
            <li>Members</li>
          </ul>
        </aside>

        <div className="min-w-0 bg-white p-4 sm:p-5 md:p-6">
          <p className="text-sm text-muted">
            Structure / <span className="font-medium text-foreground">New fellowship</span>
          </p>

          <div className="mt-4 rounded-xl border border-border bg-[#fafaf8] px-4 py-3.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-[#f48d16]">
                <ParleyArrow direction="right" size={18} />
              </span>
              <p className="min-h-6 flex-1 text-base leading-relaxed text-foreground">
                {typed}
                {phase === 'typing' ? (
                  <span className="delegation-cursor ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-[#f48d16]" />
                ) : null}
              </p>
            </div>
          </div>

          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-muted transition-opacity duration-300',
              phase === 'typing' ? 'opacity-0' : 'opacity-100',
            )}
          >
            Intent · structure-setup workflow · {steps.length} steps
          </p>

          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => {
              const isComplete = completedSteps.includes(index)
              const isActive = activeStep === index

              return (
                <li
                  key={step}
                  className={cn(
                    'flex items-center gap-3 rounded-lg border px-3.5 py-3 text-sm leading-relaxed transition-all duration-300',
                    isComplete
                      ? 'border-[#f48d16]/20 bg-[#fff7ed]/80 text-foreground'
                      : isActive
                        ? 'border-[#f48d16]/40 bg-white font-medium text-foreground shadow-sm'
                        : 'border-transparent bg-transparent text-muted',
                    phase === 'typing' || phase === 'planning'
                      ? 'translate-y-1 opacity-0'
                      : 'translate-y-0 opacity-100',
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold',
                      isComplete
                        ? 'bg-[#f48d16] text-[#251f19]'
                        : isActive
                          ? 'bg-[#251f19] text-white'
                          : 'bg-[#eeede6] text-muted',
                    )}
                  >
                    {isComplete ? '✓' : index + 1}
                  </span>
                  <span className={cn(isActive && !isComplete && 'delegation-step-active')}>
                    {step}
                  </span>
                </li>
              )
            })}
          </ol>

          <div
            className={cn(
              'mt-5 flex items-center gap-2.5 rounded-lg bg-[#251f19] px-3.5 py-2.5 text-sm font-medium text-white transition-all duration-500',
              phase === 'done' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
            )}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#f48d16] text-[#251f19]">
              <ParleyArrow direction="up-right" size={16} />
            </span>
            Structure saved · leaders notified
          </div>
        </div>
      </div>
    </div>
  )
}
