import { useEffect, useRef, useState } from 'react'
import { Music, Volume2, VolumeX } from 'lucide-react'
import { birthdayData as data } from '../data/birthday'

export default function MusicControl({ shouldStart }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(shouldStart)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !shouldStart) return
    audio.volume = 0.58
    audio.play().catch(() => setPlaying(false))
    return () => audio.pause()
  }, [shouldStart])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try { await audio.play(); setPlaying(true) } catch { setPlaying(false) }
    } else {
      audio.pause(); setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={data.music.src} preload="metadata" loop onEnded={() => setPlaying(false)} />
      <button onClick={toggle} className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 items-center gap-2 rounded-full border border-white/20 bg-ink/90 px-4 text-xs font-medium text-white shadow-xl backdrop-blur transition hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2" aria-label={playing ? 'Tắt nhạc Happy Birthday' : 'Bật nhạc Happy Birthday'}>
        {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
        <Music size={14} className={playing ? 'music-note' : ''} aria-hidden="true" />
        <span>{playing ? 'Happy Birthday' : 'Bật nhạc'}</span>
      </button>
    </>
  )
}
