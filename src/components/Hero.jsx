import logo from '../assets/logo.png'

const WHATSAPP = 'https://wa.me/5511960491973'
const HERO_IMG =
  'https://images.unsplash.com/photo-1544620341-65bdb627772f?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="hero" id="topo" aria-label="Apresentação">
      <div className="hero-media" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          width={2000}
          height={1333}
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <img
          src={logo}
          alt="BRU VANS Locadora de Vans — aluguel de vans e transporte executivo"
          className="hero-brand"
          width={280}
          height={112}
        />
        <h1>
          Locação de vans e transporte executivo com <span>segurança</span>,
          conforto e pontualidade
        </h1>
        <p className="hero-text">
          Locação de vans, micro-ônibus e ônibus em São Paulo para viagens, eventos,
          transfer aeroporto e fretamento — no destino que você precisar.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Solicitar orçamento
          </a>
          <a className="btn btn-ghost" href="#servicos">
            <i className="bi bi-grid-3x3-gap" aria-hidden="true" />
            Ver serviços
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <i className="bi bi-chevron-down" />
        <span>Scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}
