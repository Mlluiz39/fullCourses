import React from 'react'

export default function ValorDeState(props){
  return(
    <>
    <p>Valor do state em numero: {props.valor}</p>
      <button onClick={() => props.setValor(props.valor + 10)}>Soma 10</button>
      <button onClick={() => props.setValor(props.valor - props.valor)}>Limpa valor</button>
    </>
  )
}