import React from 'react'

function Produto({dados}) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <span>{dados.descricao}</span>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    
    </div>
  )
}

export default Produto