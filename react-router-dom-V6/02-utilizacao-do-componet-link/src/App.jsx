import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contacts from '@/Components/Contacts'
import Home from '@/Components/Home'
import Services from '@/Components/Services'
import Error from '@/Components/Error'

export default function App() {
  return (
    <Router>
      <h1>React Router App!</h1>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/Services">Services</Link> | {' '}
        <Link to="/contacts">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* aqui em baixo com caseSensitive vai diferenciar entre maiúscula e minúscula */}
        <Route caseSensitive={true} path="/Services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* aqui em baixo é a rota de erros ou seja se não achar a rota vai apresentar esta pagina de 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
