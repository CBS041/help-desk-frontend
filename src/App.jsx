import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ListaChamados from './pages/ListaChamados'
import NovoChamado from './pages/NovoChamado'
import DetalhesChamado from './pages/DetalhesChamado'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ListaChamados />} />
          <Route path="/novo-chamado" element={<NovoChamado />} />
          <Route path="/chamado/:id" element={<DetalhesChamado />} />
        </Routes>
      </main>
      <footer className="footer-global">
        HelpDesk Lite - {new Date().getFullYear()}
      </footer>
    </Router>
  )
}

export default App
