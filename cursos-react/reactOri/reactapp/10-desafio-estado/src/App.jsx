import React from 'react'
import './App.css'
import Produto from './Produto'

function App() {
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  const handleClick = async (event) => {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
    //https://ranekapi.origamid.dev/json/api/produto/tablet
    //https://ranekapi.origamid.dev/json/api/produto/smartphone
    //https://ranekapi.origamid.dev/json/api/produto/notebook
    const json = await response.json()
    setCarregando(false)
    setDados(json)
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  )
}

export default App
