export default function DetalhesChamado() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">
          <h3 className="fw-bold mb-5">#2 - Sistema Geral Travou</h3>

          <label className="form-label-custom">Informações do chamado:</label>

          <div className="card-detalhes mb-5">
            <div className="card-header-status">Em andamento</div>
            <div className="card-body-custom">
              <h5 className="fw-bold mb-3">#2 - Sistema Geral Travou</h5>
              <p
                className="text-muted"
                style={{ fontSize: '0.9rem', lineHeight: '1.6' }}
              >
                Sistema ficou fora do ar por alguns minutos e ficou travando.
              </p>

              <div className="data-chamado">31/06/2026</div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-md-6">
              <label
                className="form-label-custom"
                style={{
                  color: '#d1d5db',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                }}
              >
                STATUS
              </label>
              <select className="form-control-custom" defaultValue="andamento">
                <option value="aberto">Em aberto</option>
                <option value="andamento">Em andamento</option>
                <option value="resolvido">Resolvido</option>
              </select>
            </div>

            <div className="col-md-6 d-flex justify-content-end gap-3 mt-4 mt-md-0">
              {/* Botão de Salvar (Verde) */}
              <button
                className="btn-icon"
                style={{ backgroundColor: 'var(--green-badge)' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
              </button>

              {/* Botão de Excluir (Vermelho) */}
              <button
                className="btn-icon"
                style={{ backgroundColor: 'var(--red-badge)' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
