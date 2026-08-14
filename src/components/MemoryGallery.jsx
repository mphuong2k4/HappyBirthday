import Reveal from './Reveal'
import { birthdayData as data } from '../data/birthday'

export default function MemoryGallery() {
  return (
    <section className="section-shell pt-8" aria-labelledby="memories-title">
      <Reveal><p className="eyebrow">Tú Thư của đa vũ trụ</p><h2 id="memories-title" className="section-title">Xem ảnh nhớ người nha<br />haha</h2></Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-12 lg:gap-7">
        {data.memories.map((memory, index) => (
          <Reveal key={memory.src} delay={index * .07} className={`memory-card memory-${index + 1}`}>
            <figure>
              <div className="overflow-hidden rounded-[1.4rem] bg-[#e5ddd2] sm:rounded-[2rem]"><img src={memory.src} alt={memory.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]" /></div>
              <figcaption className="px-1 pt-3 text-xs text-ink/55 sm:text-sm">{String(index + 1).padStart(2, '0')} — {memory.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {data.memories.some((memory) => memory.src.endsWith('.svg')) && <p className="mt-9 text-center text-xs text-ink/45">Ba khung ảnh còn lại đang chờ những kỷ niệm thật của bạn.</p>}
    </section>
  )
}
