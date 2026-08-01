import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src={logo}
            alt="BRU VANS Locadora de Vans — transporte executivo em São Paulo"
            width={160}
            height={64}
          />
          <div className="footer-meta">
            <span>Locadora de vans · Micro-ônibus · Ônibus</span>
            <p>
              BRU VANS Locadora oferece locação de vans e fretamento para transfer,
              turismo, eventos corporativos, transporte escolar e viagens em São Paulo
              e região.
            </p>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Links do rodapé">
          <a href="#servicos">Serviços</a>
          <a href="#frota">Frota</a>
          <a href="#contato">Contato</a>
          <a href="https://wa.me/5511960491973" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
        <p className="footer-copy">
          © {year} BRU VANS Locadora. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
