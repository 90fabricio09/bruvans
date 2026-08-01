const WHATSAPP = 'https://wa.me/5511960491973'
const PHONE_DISPLAY = '55 11 96049-1973'
const PHONE_TEL = 'tel:+5511960491973'
const EMAIL = 'Bizidio923@gmail.com'

export default function Contact() {
  return (
    <section className="contact section" id="contato" aria-labelledby="contato-title">
      <div className="container contact-layout">
        <div className="reveal">
          <p className="section-label">Contato</p>
          <h2 className="section-title" id="contato-title">
            Solicite orçamento de locação de van
          </h2>
          <p className="section-lead">
            Conte o destino, a data e o tamanho do grupo — retornamos com a melhor
            opção de frota e horário para sua viagem ou evento.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <small>
                <i className="bi bi-whatsapp" aria-hidden="true" />
                WhatsApp / Telefone
              </small>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </div>
            <div className="contact-item">
              <small>
                <i className="bi bi-envelope" aria-hidden="true" />
                E-mail
              </small>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>

        <aside className="contact-panel reveal">
          <h3>Orçamento rápido pelo WhatsApp</h3>
          <p>
            Atendimento direto para reservas, fretes e transfer. Resposta ágil para
            empresas, escolas, igrejas e grupos.
          </p>
          <a
            className="btn btn-primary"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Abrir conversa
          </a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
            <i className="bi bi-envelope" aria-hidden="true" />
            Enviar e-mail
          </a>
        </aside>
      </div>
    </section>
  )
}
