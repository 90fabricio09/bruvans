const WHATSAPP = 'https://wa.me/5511960491973'

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-inner">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title">Página não encontrada</h1>
        <p className="not-found-text">
          O endereço que você tentou abrir não existe ou foi movido. Volte ao
          site para solicitar um orçamento ou conhecer nossos serviços.
        </p>

        <div className="not-found-actions">
          <a className="btn btn-primary" href="/">
            <i className="bi bi-house" aria-hidden="true" />
            Voltar ao início
          </a>
          <a
            className="btn btn-ghost"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Falar conosco
          </a>
        </div>
      </div>
    </main>
  )
}
