import { Heart, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { birthdayData as data } from '../data/birthday'

export default function MemoryGallery() {
  return (
    <section id="memories" className="gallery-showcase scroll-mt-4 relative overflow-hidden px-4 py-20 sm:px-7 sm:py-28 lg:px-10 lg:py-32" aria-labelledby="memories-title">
      <div className="gallery-glow gallery-glow-one" aria-hidden="true" />
      <div className="gallery-glow gallery-glow-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.24em] text-terracotta sm:text-xs">
            <span className="h-px w-9 bg-terracotta/70" />
            <Heart size={14} fill="currentColor" aria-hidden="true" />
            Tú Thư của đa vũ trụ
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <h2 id="memories-title" className="scroll-mt-24 font-display text-[clamp(2.8rem,5.6vw,5.8rem)] leading-[1.06] tracking-[-.045em] text-ink">Xem ảnh nhớ người nha haha</h2>
            <Sparkles className="text-[#e7aa8e]" size={34} aria-hidden="true" />
          </div>
          <div className="mt-5 flex max-w-md items-center gap-3 text-[#dfae98]" aria-hidden="true"><span className="h-px flex-1 bg-[#e7c2b0]" /><Heart size={13} fill="currentColor" /></div>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-ink/55 sm:text-base">Nhớ công tìm kiếm nhớ Nam Phương (mà Nam Phương là cái gì dị không biết thiệt)</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-5 xl:gap-6">
          {data.memories.map((memory, index) => (
            <Reveal key={memory.src} delay={Math.min(index * .06, .3)} className={`gallery-item lg:col-span-3 ${index === 4 ? 'lg:col-start-2' : ''}`}>
              <figure className="gallery-card group h-full overflow-hidden rounded-[1.35rem] border border-white bg-white/90 p-1.5 shadow-[0_15px_38px_rgba(100,72,51,.09)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(100,72,51,.14)] sm:rounded-[1.55rem]">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.05rem] bg-[#e5ddd2] sm:rounded-[1.25rem]">
                  <img src={memory.src} alt={memory.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                </div>
                <figcaption className="flex min-h-[3.4rem] items-center gap-3 px-2.5 py-3 text-xs text-ink/70 sm:px-3 sm:text-[13px]">
                  <span className="grid h-7 min-w-8 place-items-center rounded-full bg-[#dca080] px-2 text-[10px] font-semibold text-white">{String(index + 1).padStart(2, '0')}</span>
                  <span className="leading-5">{memory.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
