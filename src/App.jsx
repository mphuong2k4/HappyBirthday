import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from './components/Intro'
import Hero from './components/Hero'
import BirthdayMessage from './components/BirthdayMessage'
import MemoryGallery from './components/MemoryGallery'
import FinalWish from './components/FinalWish'
import MusicControl from './components/MusicControl'
import { birthdayData } from './data/birthday'

export default function App() {
  const [opened, setOpened] = useState(false)
  const open = () => { setOpened(true); window.setTimeout(() => window.scrollTo({ top: 0 }), 30) }
  return (
    <>
      <AnimatePresence>{!opened && <Intro data={birthdayData} onOpen={open} />}</AnimatePresence>
      <main className={opened ? 'opacity-100' : 'h-screen overflow-hidden opacity-0'} aria-hidden={!opened}>
        <Hero /><BirthdayMessage /><MemoryGallery /><FinalWish />
      </main>
      {opened && <MusicControl shouldStart />}
    </>
  )
}
