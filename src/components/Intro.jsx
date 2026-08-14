import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Intro({ data, onOpen }) {
  const reduced = useReducedMotion()
  return (
    <motion.section className="intro fixed inset-0 z-50 grid min-h-[100svh] place-items-center overflow-hidden bg-cream px-6" exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.03 }} transition={{ duration: 0.8 }} aria-labelledby="intro-title">
      <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
      <motion.div className="relative max-w-xl text-center" initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 id="intro-title" className="mx-auto max-w-[22ch] whitespace-pre-line font-display text-[clamp(2rem,8vw,3.35rem)] leading-[1.2] tracking-[-.03em] text-ink">{data.intro}</h1>
        <button onClick={onOpen} className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4">
          Mở nhé <ArrowDown size={17} className="transition group-hover:translate-y-0.5" aria-hidden="true" />
        </button>
      </motion.div>
    </motion.section>
  )
}
