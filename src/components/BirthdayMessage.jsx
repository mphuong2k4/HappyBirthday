import { Flower2, Gift, Heart, Leaf, Smile, Sparkles, Star } from 'lucide-react'
import Reveal from './Reveal'
import { birthdayData as data } from '../data/birthday'

const qualities = [
  { icon: Gift, title: 'Vui vẻ', text: 'Mỗi ngày đều thật tươi vui' },
  { icon: Flower2, title: 'Tự tin', text: 'Tin vào bản thân và khả năng của mình' },
  { icon: Star, title: 'Rực rỡ', text: 'Tỏa sáng theo cách riêng của bạn' },
  { icon: Leaf, title: 'Bình yên', text: 'Bình yên trong tâm hồn, bình thản trong cuộc sống' },
]

const messageIcons = [Smile, Heart, Sparkles]

export default function BirthdayMessage() {
  return (
    <section id="birthday-message" className="message-showcase relative overflow-hidden px-3 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-28" aria-labelledby="message-title">
      <div className="message-glow message-glow-one" aria-hidden="true" />
      <div className="message-glow message-glow-two" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2rem] border border-white/90 bg-[#fffdf9]/90 shadow-[0_26px_80px_rgba(92,68,49,.1)] backdrop-blur-sm sm:rounded-[2.8rem]">
          <div className="grid lg:grid-cols-[47%_53%]">
            <div className="relative border-b border-[#ead8cd] px-6 py-10 sm:px-10 sm:py-14 lg:border-b-0 lg:border-r lg:px-14 lg:py-16 xl:px-20">
              <div className="message-dot-grid absolute right-8 top-8 lg:hidden" aria-hidden="true" />
              <p className="eyebrow">Happy Birthday</p>
              <div className="mt-7 flex items-center gap-4 text-[#d79a7d]" aria-hidden="true"><span className="h-px w-32 bg-[#e8c4b2]" /><Sparkles size={17} fill="currentColor" /><span className="h-px w-20 bg-[#e8c4b2]" /></div>
              <h2 id="message-title" className="mt-7 font-display text-[clamp(3.2rem,5.6vw,6.2rem)] leading-[.96] tracking-[-.05em] text-ink">
                Gửi {data.name}<br /><span className="text-terracotta">của tuổi mới</span>
              </h2>

              <blockquote className="message-quote relative mt-9 overflow-hidden rounded-[1.4rem] border border-[#edc9b7] px-7 py-7 sm:px-10 sm:py-9">
                <span className="font-display text-6xl leading-none text-terracotta/85" aria-hidden="true">“</span>
                <p className="-mt-3 max-w-[18ch] font-display text-[clamp(1.7rem,2.5vw,2.45rem)] italic leading-[1.35] text-terracotta">“{data.highlight}”</p>
                <div className="message-branch" aria-hidden="true">♡</div>
              </blockquote>

              <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-0 lg:grid-cols-2 xl:grid-cols-4">
                {qualities.map(({ icon: Icon, title, text }, index) => (
                  <div key={title} className={`px-2 text-center ${index ? 'sm:border-l sm:border-[#ead8cd] lg:border-l-0 xl:border-l' : ''}`}>
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#fbf0e9] text-terracotta"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                    <h3 className="mt-3 text-xs font-semibold uppercase tracking-[.08em] text-ink/85">{title}</h3>
                    <p className="mx-auto mt-2 max-w-[14ch] text-[10px] leading-4 text-ink/55 sm:text-[11px]">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-9 flex max-w-sm items-center gap-3 text-[#d99b7d]" aria-hidden="true"><span className="h-px flex-1 bg-[#ead1c4]" /><Heart size={14} fill="currentColor" /><span className="h-px flex-1 bg-[#ead1c4]" /></div>
            </div>

            <div className="relative flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
              <div className="message-dot-grid absolute right-10 top-10 hidden lg:block" aria-hidden="true" />
              <div className="mt-5 flex-1 sm:mt-8 lg:mt-24">
                {data.message.map((paragraph, index) => {
                  const Icon = messageIcons[index]
                  return (
                    <div key={paragraph} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-dashed border-[#e8d8cf] py-7 first:pt-0 sm:grid-cols-[4.4rem_1fr] sm:gap-7 sm:py-9">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#fbf0e8] text-terracotta sm:h-[4.4rem] sm:w-[4.4rem]"><Icon size={index === 1 ? 32 : 29} strokeWidth={1.7} aria-hidden="true" /></span>
                      <p className="text-[.96rem] leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">{paragraph}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 flex items-end justify-between gap-5 sm:mt-14">
                <p className="font-display text-2xl italic leading-relaxed text-terracotta sm:text-3xl">— Chúc mừng sinh nhật, {data.name}.</p>
                <div className="hidden text-[#e7bda8] sm:block" aria-hidden="true"><Sparkles size={34} /><Sparkles className="-mt-2 ml-8" size={20} /></div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
