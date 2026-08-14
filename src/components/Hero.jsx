import { motion, useReducedMotion } from 'framer-motion'
import { birthdayData as data } from '../data/birthday'

export default function Hero() {
  const reduced = useReducedMotion()
  return (
    <header className="relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-12 pt-24 sm:px-8 lg:items-center lg:px-16 lg:py-16" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <motion.div className="absolute inset-x-5 top-20 bottom-[42%] overflow-hidden rounded-[2rem] bg-[#ded4c8] sm:inset-x-8 lg:inset-y-12 lg:left-[52%] lg:right-12" initial={reduced ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}>
        <img src={data.memories[0].src} alt={data.memories[0].alt} className="h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
      </motion.div>
      <motion.div className="relative z-10 w-full rounded-[2rem] bg-cream/90 p-6 shadow-2xl shadow-[#503a2a]/10 backdrop-blur-md sm:max-w-xl sm:p-10 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none" initial={reduced ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .9 }}>
        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-terracotta"><span className="h-px w-9 bg-terracotta" />{data.birthday}</div>
        <p className="font-display text-2xl italic leading-relaxed text-terracotta sm:text-3xl">Happy Birthday</p>
        <h1 id="hero-title" className="mt-2 font-display text-[clamp(3.25rem,15vw,7rem)] leading-[1.05] tracking-[-.045em] text-ink">{data.name}</h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">{data.heroMessage}</p>
      </motion.div>
    </header>
  )
}
