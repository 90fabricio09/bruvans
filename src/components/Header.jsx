import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const WHATSAPP = 'https://wa.me/5511960491973'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#topo" className="logo-link" onClick={close} aria-label="BRU VANS Locadora">
          <img src={logo} alt="BRU VANS Locadora de Vans" className="logo-img" />
        </a>

        <button
          className={`menu-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
        </button>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Principal">
          <a href="#servicos" onClick={close}>
            <i className="bi bi-grid-3x3-gap" aria-hidden="true" />
            Serviços
          </a>
          <a href="#frota" onClick={close}>
            <i className="bi bi-bus-front" aria-hidden="true" />
            Frota
          </a>
          <a href="#contato" onClick={close}>
            <i className="bi bi-telephone" aria-hidden="true" />
            Contato
          </a>
          <a
            className="btn btn-primary header-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <a
          className="btn btn-primary header-cta desktop-only"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </header>
  )
}
