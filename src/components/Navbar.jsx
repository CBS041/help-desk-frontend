import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navbar-custom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand-custom">
          HelpDesk Lite <span className="badge-beta">BETA</span>
        </Link>

        {isHome ? (
          <Link to="/novo-chamado" className="btn-cyan">
            Novo chamado
          </Link>
        ) : (
          <Link to="/" className="btn-cyan">
            Voltar
          </Link>
        )}
      </div>
    </nav>
  )
}
