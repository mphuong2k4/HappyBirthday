import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CakeSlice, CalendarDays, ChevronDown, Gift, Heart, Sparkles } from 'lucide-react'
import { birthdayData as data } from '../data/birthday'

const navItems = [

  { icon: CalendarDays, label: 'Lời chúc', href: '#birthday-message' },
  { icon: Gift, label: 'Kỷ niệm', href: '#memories' },

  { icon: Sparkles, label: 'Lời kết', href: '#final-wish' },
]

export default function Hero() {
  const reduced = useReducedMotion()
  return (
    <header className="hero-showcase relative min-h-[100svh] overflow-hidden px-3 py-4 sm:px-6 sm:py-7 lg:grid lg:place-items-center lg:px-10 lg:py-12" aria-labelledby="hero-title">
      <div className="hero-pink-glow hero-pink-glow-one" aria-hidden="true" />
      <div className="hero-pink-glow hero-pink-glow-two" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1420px] rounded-[2rem] border border-white/80 bg-white/45 p-2 shadow-[0_28px_90px_rgba(182,104,128,.14)] backdrop-blur-sm sm:rounded-[2.7rem] sm:p-3 lg:h-[min(860px,calc(100svh-6rem))] lg:min-h-[680px]">
        <nav className="hero-rail absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-xl shadow-pink-200/20 backdrop-blur-xl lg:bottom-auto lg:left-[-1.8rem] lg:top-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:flex-col lg:gap-3 lg:rounded-[1.6rem] lg:px-3 lg:py-5" aria-label="Điều hướng trang sinh nhật">
          {navItems.map(({ icon: Icon, label, href }, index) => (
            <a key={label} href={href} aria-label={label} className={`grid h-10 w-10 place-items-center rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f281a6] ${index === 0 ? 'bg-[#f083aa] text-white shadow-md shadow-pink-300/40' : 'text-[#ed8ead] hover:bg-pink-50 hover:text-[#d95e8a]'}`}>
              <Icon size={19} strokeWidth={2.2} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="grid h-full gap-2 lg:grid-cols-[46%_54%]">
          <motion.section className="relative z-10 order-2 mx-1 -mt-10 rounded-[1.8rem] border border-white/90 bg-white/85 px-6 pb-20 pt-8 shadow-[0_22px_65px_rgba(168,93,119,.13)] backdrop-blur-xl sm:mx-8 sm:-mt-14 sm:px-10 sm:pt-10 lg:order-1 lg:m-10 lg:mr-4 lg:flex lg:flex-col lg:justify-center lg:rounded-[2.35rem] lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:pb-12 lg:pt-12" initial={reduced ? false : { opacity: 0, x: -25, y: 12 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-[.12em] text-[#ef78a0] sm:text-base"><CalendarDays size={21} aria-hidden="true" /><span>{data.birthday.replace('.', ' . ')}</span></div>
            <div className="mt-8 sm:mt-12 lg:mt-14">
              <p className="hero-script text-[clamp(2.15rem,4vw,4rem)] leading-none text-[#ef78a0]">Happy Birthday</p>
              <h1 id="hero-title" className="mt-3 font-display text-[clamp(4.3rem,9vw,8.4rem)] leading-[.9] tracking-[-.06em] text-[#142957]">{data.name}</h1>
            </div>
            <div className="mt-7 flex items-center gap-3 text-[#ef78a0] sm:mt-9"><span className="h-px flex-1 bg-[#ef9ab6]" /><Heart size={17} fill="currentColor" aria-hidden="true" /><span className="h-px w-10 bg-[#ef9ab6]" /></div>
            <p className="mt-7 max-w-md text-[.98rem] leading-7 text-[#25344f]/80 sm:text-lg sm:leading-8">Thêm một tuổi mới,<br />thêm một chương thật đẹp để viết tiếp.</p>
            <a href="#birthday-message" className="group mt-8 flex max-w-[470px] items-center gap-4 rounded-full bg-gradient-to-r from-[#fff0f5] to-[#fde3ea] px-5 py-4 text-[#a9305b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef78a0] focus-visible:ring-offset-4 sm:px-7 sm:py-5">
              <CakeSlice className="shrink-0 text-[#dc6d94]" size={28} aria-hidden="true" />
              <span className="flex-1 text-sm font-medium leading-6 sm:text-base">Chúc Tú Thư luôn xinh đẹp,<br className="hidden sm:block" /> tự tin và rực rỡ mỗi ngày!</span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f188aa] text-white shadow-md shadow-pink-300/35 transition group-hover:translate-x-1"><ArrowRight size={19} aria-hidden="true" /></span>
            </a>
            <div className="mt-8 flex items-center justify-between sm:mt-10 lg:mt-auto lg:pt-10">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#d9809e]"><Sparkles size={15} aria-hidden="true" /> A little celebration</p>
              <a href="#birthday-message" aria-label="Kéo xuống phần lời chúc" className="grid h-12 w-12 place-items-center rounded-full border-2 border-pink-100 bg-white text-[#ef78a0] transition hover:border-[#ef78a0] hover:bg-[#ef78a0] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef78a0]"><ChevronDown size={22} aria-hidden="true" /></a>
            </div>
          </motion.section>
          <motion.figure className="relative order-1 min-h-[56svh] overflow-hidden rounded-[1.65rem] bg-[#d9cbc1] sm:min-h-[65svh] sm:rounded-[2.25rem] lg:order-2 lg:min-h-0 lg:rounded-[2.4rem]" initial={reduced ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <img src={data.memories[0].src} alt={data.memories[0].alt} className="h-full w-full object-cover object-[64%_center]" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221d2a]/30 via-transparent to-white/5" />
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-medium text-[#765563] shadow-lg backdrop-blur-md sm:right-7 sm:top-7 sm:px-5"><Heart size={16} fill="#ed86aa" className="text-[#ed86aa]" aria-hidden="true" /> Một ngày thật đẹp</div>
            <figcaption className="absolute bottom-7 right-7 hidden items-center gap-4 text-xs font-semibold tracking-[.18em] text-white sm:flex"><span className="h-px w-24 bg-white/65" /> 29 / 08</figcaption>
          </motion.figure>
        </div>
      </div>
    </header>
  )
}
