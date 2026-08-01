import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
