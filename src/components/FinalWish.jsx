import { motion, useReducedMotion } from 'framer-motion'
import { birthdayData as data } from '../data/birthday'

export default function FinalWish() {
  const reduced = useReducedMotion()
  return (
    <footer className="final-section relative mx-3 mb-3 flex min-h-[90svh] items-center justify-center overflow-hidden rounded-[2rem] px-6 py-20 text-center text-ink sm:mx-6 sm:mb-6 sm:rounded-[3rem]" aria-labelledby="final-title">
      <div className="final-glow" aria-hidden="true" />
      <div className="final-orb final-orb-one" aria-hidden="true" />
      <div className="final-orb final-orb-two" aria-hidden="true" />
      <motion.div className="relative max-w-3xl" initial={reduced ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .9 }}>
        <p className="mb-7 text-xs font-semibold uppercase tracking-[.3em] text-terracotta">Chương mới bắt đầu</p>
        <h2 id="final-title" className="font-display text-5xl leading-[1.15] tracking-[-.035em] text-ink sm:text-7xl">Happy Birthday,<br /><span className="italic text-terracotta">{data.name}</span></h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-ink/65 sm:text-lg">{data.finalMessage}</p>
        <div className="mx-auto mt-12 h-px w-16 bg-terracotta/70" />
        <p className="mt-5 text-sm tracking-widest text-ink/50">29 · 08 · MỘT NGÀY THẬT ĐẸP</p>
      </motion.div>
    </footer>
  )
}
