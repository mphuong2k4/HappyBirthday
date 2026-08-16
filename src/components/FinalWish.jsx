import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, Gift, Heart, Sparkles } from 'lucide-react'
import { birthdayData as data } from '../data/birthday'

function BotanicalTop() {
  return (
    <svg className="absolute -left-8 -top-6 h-[45%] w-[34%] min-w-[230px] opacity-75" viewBox="0 0 430 380" fill="none" aria-hidden="true">
      <path d="M-15 0H310C298 68 263 126 205 172C137 226 79 283 54 380H-15V0Z" fill="#f3c6b3" opacity=".55" />
      <path d="M-10 0H210C206 62 180 113 132 153C77 199 33 246 12 315H-10V0Z" fill="#f7ddcf" />
      <path d="M6 242C64 183 75 112 63 38M42 202C84 178 111 143 126 101M55 163C35 147 22 127 16 102M80 153C104 149 126 136 143 117" stroke="#7d8368" strokeWidth="2.2" strokeLinecap="round" opacity=".75" />
      <path d="M63 106C83 88 105 82 126 85C113 104 91 113 63 106ZM39 171C21 159 12 141 10 122C30 127 43 143 39 171ZM88 145C105 126 125 119 146 121C134 140 115 150 88 145Z" fill="#9ea18a" opacity=".65" />
      <circle cx="332" cy="63" r="4" fill="#d99c7d" /><circle cx="355" cy="63" r="4" fill="#d99c7d" /><circle cx="378" cy="63" r="4" fill="#d99c7d" />
      <circle cx="332" cy="86" r="4" fill="#d99c7d" /><circle cx="355" cy="86" r="4" fill="#d99c7d" /><circle cx="378" cy="86" r="4" fill="#d99c7d" />
      <circle cx="332" cy="109" r="4" fill="#d99c7d" /><circle cx="355" cy="109" r="4" fill="#d99c7d" /><circle cx="378" cy="109" r="4" fill="#d99c7d" />
    </svg>
  )
}

function BotanicalBottom() {
  return (
    <svg className="absolute -bottom-5 -right-5 h-[52%] w-[34%] min-w-[250px] opacity-85" viewBox="0 0 430 440" fill="none" aria-hidden="true">
      <path d="M92 440C176 365 245 276 319 84M174 440C221 351 272 287 370 218M212 440C210 347 181 290 137 244" stroke="#6f795e" strokeWidth="3" strokeLinecap="round" opacity=".75" />
      <g fill="#8d9675" opacity=".72">
        <path d="M209 348C163 331 141 298 142 261C181 269 207 299 209 348Z"/><path d="M230 313C266 285 300 280 329 296C305 326 272 333 230 313Z"/>
        <path d="M268 245C230 224 213 192 218 159C253 170 274 199 268 245Z"/><path d="M297 207C326 177 358 168 388 180C370 211 339 224 297 207Z"/>
        <path d="M165 384C126 375 100 351 94 319C128 320 154 341 165 384Z"/>
      </g>
      <g fill="#f2ae91" opacity=".75">
        <ellipse cx="315" cy="105" rx="34" ry="71" transform="rotate(-19 315 105)"/><ellipse cx="354" cy="113" rx="32" ry="66" transform="rotate(27 354 113)"/><ellipse cx="284" cy="127" rx="31" ry="62" transform="rotate(-53 284 127)"/><ellipse cx="332" cy="143" rx="32" ry="60" transform="rotate(5 332 143)"/>
        <ellipse cx="224" cy="235" rx="29" ry="59" transform="rotate(-22 224 235)"/><ellipse cx="261" cy="241" rx="28" ry="57" transform="rotate(25 261 241)"/><ellipse cx="197" cy="256" rx="27" ry="53" transform="rotate(-53 197 256)"/>
      </g>
      <circle cx="323" cy="137" r="16" fill="#d7936e"/><circle cx="229" cy="263" r="14" fill="#d7936e"/>
      <path d="M18 440H185C156 403 126 381 90 371C56 391 32 414 18 440Z" fill="#f7d8c9" opacity=".7"/>
    </svg>
  )
}

export default function FinalWish() {
  const reduced = useReducedMotion()
  return (
    <footer id="final-wish" className="final-showcase scroll-mt-2 relative overflow-hidden bg-[#faf6f1] px-3 py-6 sm:px-6 sm:py-9 lg:px-9 lg:py-12" aria-labelledby="final-title">
      <motion.div className="final-canvas relative mx-auto flex min-h-[88svh] max-w-[1580px] items-center justify-center overflow-hidden rounded-[2.3rem] border-[5px] border-white px-6 py-20 text-center shadow-[0_26px_80px_rgba(117,78,54,.14)] sm:rounded-[3.2rem] sm:px-10 lg:min-h-[min(900px,calc(100svh-6rem))]" initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
        <BotanicalTop />
        <BotanicalBottom />
        <p className="absolute bottom-6 left-7 z-20 max-w-[55%] text-left font-display text-[10px] italic leading-5 text-terracotta/35 sm:bottom-8 sm:left-10 sm:text-xs lg:bottom-10 lg:left-14">P/s: Thanh bánh để dành cho Tú Thư sắp hóa đá rồi</p>
        <div className="final-ring absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#e8ad92]/50 sm:h-80 sm:w-80" aria-hidden="true" />
        <Sparkles className="absolute left-[24%] top-[20%] hidden text-[#e69b78] sm:block" size={30} fill="currentColor" aria-hidden="true" />
        <Sparkles className="absolute right-[17%] top-[13%] text-[#e69b78]" size={25} fill="currentColor" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Gift className="mx-auto text-[#d9815e]" size={48} strokeWidth={1.8} aria-hidden="true" />
          <div className="mt-5 flex items-center justify-center gap-4 text-terracotta">
            <Sparkles size={14} fill="currentColor" aria-hidden="true" />
            <p className="rounded-full bg-[#f9ede6]/85 px-6 py-2 text-[10px] font-semibold uppercase tracking-[.28em] sm:px-8 sm:text-xs">Chương mới bắt đầu</p>
            <Sparkles size={14} fill="currentColor" aria-hidden="true" />
          </div>

          <h2 id="final-title" className="scroll-mt-24 mt-7 font-display text-[clamp(3.6rem,7.5vw,7.8rem)] leading-[1.02] tracking-[-.055em] text-ink">
            Happy Birthday,<br /><span className="inline-block pt-2 text-terracotta sm:pt-3">{data.name}</span>
          </h2>

          <div className="mx-auto mt-8 flex max-w-md items-center gap-4 text-[#d78966]" aria-hidden="true"><span className="h-px flex-1 bg-[#e5ad92]" /><Heart size={17} fill="currentColor" /><span className="h-px flex-1 bg-[#e5ad92]" /></div>
          <p className="mx-auto mt-8 max-w-2xl text-[.98rem] leading-7 text-ink/70 sm:text-lg sm:leading-8">{data.finalMessage}</p>

          <div className="mx-auto mt-9 inline-flex flex-wrap items-center justify-center gap-4 rounded-full border border-[#e8bba6] bg-white/45 px-6 py-3 text-[11px] font-semibold uppercase tracking-[.18em] text-ink/65 backdrop-blur-sm sm:gap-6 sm:px-9 sm:text-xs">
            <span className="flex items-center gap-3"><CalendarDays className="text-terracotta" size={18} aria-hidden="true" /> 29 · 08</span>
            <span className="h-5 w-px bg-[#dfae98]" aria-hidden="true" />
            <span className="flex items-center gap-3"><Heart className="text-terracotta" size={17} fill="currentColor" aria-hidden="true" /> Một ngày thật đẹp</span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
