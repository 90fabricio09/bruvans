const services = [
  { label: 'Viagens e excursões', icon: 'bi-signpost-2' },
  { label: 'Turismo e passeios', icon: 'bi-binoculars' },
  { label: 'Transfer para aeroportos', icon: 'bi-airplane' },
  { label: 'Traslados para hotéis', icon: 'bi-building' },
  { label: 'City tour', icon: 'bi-geo-alt' },
  { label: 'Praias', icon: 'bi-water' },
  { label: 'Trilhas e ecoturismo', icon: 'bi-tree' },
  { label: 'Raves, shows e festivais', icon: 'bi-music-note-beamed' },
  { label: 'Eventos corporativos e sociais', icon: 'bi-briefcase' },
  { label: 'Casamentos e formaturas', icon: 'bi-heart' },
  { label: 'Transporte escolar', icon: 'bi-mortarboard' },
  { label: 'Transporte de colaboradores e funcionários', icon: 'bi-people' },
  { label: 'Fretamento contínuo e eventual', icon: 'bi-calendar2-check' },
  { label: 'Empresas e indústrias', icon: 'bi-buildings' },
  { label: 'Igrejas e grupos religiosos', icon: 'bi-church' },
  { label: 'Clubes e equipes esportivas', icon: 'bi-trophy' },
  { label: 'Congressos, feiras e convenções', icon: 'bi-easel' },
  { label: 'Viagens interestaduais e municipais', icon: 'bi-map' },
  { label: 'Transporte personalizado para qualquer destino', icon: 'bi-compass' },
]

export default function Services() {
  return (
    <section className="services section" id="servicos" aria-labelledby="servicos-title">
      <div className="container">
        <div className="services-intro reveal">
          <p className="section-label">O que fazemos</p>
          <h2 className="section-title" id="servicos-title">
            Serviços de locação de vans e ônibus
          </h2>
          <p className="section-lead">
            Prestamos serviços de locação de vans, micro-ônibus e ônibus para
            diversas necessidades — do frete eventual ao transporte contínuo em
            São Paulo, viagens municipais e interestaduais.
          </p>
        </div>

        <ul className="services-grid">
          {services.map((service) => (
            <li key={service.label} className="service-item reveal">
              <i className={`bi ${service.icon} service-mark`} aria-hidden="true" />
              <span>{service.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
