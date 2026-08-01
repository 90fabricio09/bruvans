const WHATSAPP = 'https://wa.me/5511960491973'
const FLEET_IMG =
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1800&q=80'

export default function Fleet() {
  return (
    <section className="fleet section" id="frota" aria-labelledby="frota-title">
      <div className="fleet-media">
        <img
          src={FLEET_IMG}
          alt="Ônibus executivo da frota para locação e fretamento"
          width={1800}
          height={1200}
          loading="lazy"
        />
      </div>
      <div className="fleet-overlay" aria-hidden="true" />

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
