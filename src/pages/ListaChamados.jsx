import { Link } from 'react-router-dom'
import { generateRandomDate } from '../utils/randomDate'

export default function ListaChamados() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4" style={{ color: '#1f2937' }}>
        Lista de Chamados
      </h2>

      <table className="table-custom">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Data de criação</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw-bold" style={{ color: '#1f2937' }}>
              1
            </td>
            <td>Monitor do setor financeiro não liga</td>
            <td>Hardware</td>
            <td>{generateRandomDate()}</td>
            <td>
              <span className="status-badge status-aberto">Em aberto</span>
            </td>
            <td className="text-end">
              <Link to="/chamado/1" className="btn-action-outline">
                &gt;
              </Link>
            </td>
          </tr>
          <tr>
            <td className="fw-bold" style={{ color: '#1f2937' }}>
              2
            </td>
            <td>Sistema Geral Travou</td>
            <td>Software</td>
            <td>{generateRandomDate()}</td>
            <td>
              <span className="status-badge status-andamento">
                Em andamento
              </span>
            </td>
            <td className="text-end">
              <Link to="/chamado/2" className="btn-action-outline">
                &gt;
              </Link>
            </td>
          </tr>
          <tr>
            <td className="fw-bold" style={{ color: '#1f2937' }}>
              3
            </td>
            <td>Algo não identificado foi encontrado</td>
            <td>Outro</td>
            <td>{generateRandomDate()}</td>
            <td>
              <span className="status-badge status-resolvido">Resolvido</span>
            </td>
            <td className="text-end">
              <Link to="/chamado/3" className="btn-action-outline">
                &gt;
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
