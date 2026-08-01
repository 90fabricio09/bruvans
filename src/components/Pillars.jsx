const pillars = [
  {
    num: '01',
    title: 'Segurança',
    icon: 'bi-shield-check',
    text: 'Motoristas experientes e veículos preparados para levar seu grupo com tranquilidade do início ao fim.',
  },
  {
    num: '02',
    title: 'Conforto',
    icon: 'bi-cup-hot',
    text: 'Assentos espaçosos e frota adequada para viagens longas, eventos e deslocamentos corporativos.',
  },
  {
    num: '03',
    title: 'Pontualidade',
    icon: 'bi-clock-history',
    text: 'Compromisso com horários e rotas planejadas — você chega no destino no momento certo.',
  },
]

export default function Pillars() {
  return (
    <section className="pillars section" aria-label="Diferenciais">
      <div className="container pillars-grid">
        {pillars.map((item) => (
          <article key={item.num} className="pillar reveal">
            <div className="pillar-icon" aria-hidden="true">
              <i className={`bi ${item.icon}`} />
            </div>
            <p className="pillar-num">{item.num}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
