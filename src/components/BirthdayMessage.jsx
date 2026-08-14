import Reveal from './Reveal'
import { birthdayData as data } from '../data/birthday'

export default function BirthdayMessage() {
  return (
    <section className="section-shell" aria-labelledby="message-title">
      <Reveal><p className="eyebrow">Happy Birthday</p><h2 id="message-title" className="section-title">Gửi {data.name} của tuổi mới</h2></Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[.65fr_1fr] lg:gap-20">
        <Reveal><p className="sticky top-28 font-display text-3xl italic leading-[1.45] tracking-[-.02em] text-terracotta sm:text-4xl">“{data.highlight}”</p></Reveal>
        <div className="space-y-6 text-[1.05rem] leading-8 text-ink/75 sm:text-lg sm:leading-9">
          {data.message.map((paragraph, index) => <Reveal key={paragraph} delay={index * .08}><p>{paragraph}</p></Reveal>)}
          <Reveal><p className="pt-2 font-display text-2xl italic leading-relaxed text-ink">— Chúc mừng sinh nhật, {data.name}.</p></Reveal>
        </div>
      </div>
    </section>
  )
}
