const WHATSAPP = 'https://wa.me/5511960491973'

export default function Fleet() {
  return (
    <section className="fleet section" id="frota" aria-labelledby="frota-title">
      <div className="container">
        <div className="fleet-content reveal">
          <p className="section-label">Frota</p>
          <h2 className="section-title" id="frota-title">
            Vans, micro-ônibus e ônibus para locação
          </h2>
          <p>
            Veículos prontos para grupos de todos os tamanhos — turismo, corporativo,
            escolar ou eventos. Monte o deslocamento sob medida com a BRU VANS.
          </p>
          <a
            className="btn btn-primary"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
