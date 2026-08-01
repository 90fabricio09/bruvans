import { useEffect, useState } from 'react'

const WHATSAPP =
  'https://wa.me/5511960491973?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const showTimer = window.setTimeout(() => setShowTip(true), 900)
    const hideTimer = window.setTimeout(() => setShowTip(false), 9000)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="wa-float">
      <div className={`wa-tip${showTip ? ' visible' : ''}`} role="status">
        <p>Clique para entrar em contato pelo WhatsApp</p>
        <button
          type="button"
          className="wa-tip-close"
          aria-label="Fechar sugestão"
          onClick={() => setShowTip(false)}
        >
          <i className="bi bi-x" aria-hidden="true" />
        </button>
        <span className="wa-tip-arrow" aria-hidden="true" />
      </div>

      <a
        className="wa-btn"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => setShowTip(false)}
      >
        <i className="bi bi-whatsapp" aria-hidden="true" />
      </a>
    </div>
  )
}
