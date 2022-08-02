import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Produtos from './components/Produtos/Produtos'

function App() {
  const { pathname } = window.location

  let Pagina
  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App
