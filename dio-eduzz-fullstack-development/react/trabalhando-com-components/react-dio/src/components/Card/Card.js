import { useState } from 'react'
import Button from '../Button/Button'

const Card = () => {
  const [valor, setValor] = useState(0)

  function Adicionar() {
    setValor(valor + 1)
  }

  function Remover() {
    setValor(valor - 1)
  }

  return (
    <>
      <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Meu primeiro card com React</h5>
          <p class="card-text">Meu texto no card com React.</p>
          <Button className="btn btn-success mx-1" onClick={Adicionar}>
            Adicionar
          </Button>
          <Button className="btn btn-danger mx-1" onClick={Remover}>
            Remover
          </Button>
          <h3>{valor}</h3>
        </div>
      </div>
    </>
  )
}

export default Card
