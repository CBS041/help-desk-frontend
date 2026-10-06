import { Link } from 'react-router-dom'

export default function NovoChamado() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h3 className="fw-bold mb-5">#1 - Abrir Novo Chamado</h3>

          <form>
            <div className="mb-4">
              <label className="form-label-custom" htmlFor="titulo">
                Título:
              </label>
              <input
                type="text"
                id="titulo"
                className="form-control-custom"
                placeholder="Insira um titulo"
              />
            </div>

            <div className="mb-4">
              <label className="form-label-custom" htmlFor="categoria">
                Categoria:
              </label>
              <select
                className="form-control-custom"
                defaultValue="Outro"
                id="categoria"
              >
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Internet">Internet</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="form-label-custom" htmlFor="descricao">
                Descrição:
              </label>
              <textarea
                id="descricao"
                className="form-control-custom"
                placeholder="Descreva..."
              ></textarea>
            </div>

            <div className="d-flex gap-3">
              <button type="button" className="btn btn-success">
                Salvar chamado
              </button>
              <Link
                to="/"
                className="btn btn-danger text-decoration-none text-center"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
