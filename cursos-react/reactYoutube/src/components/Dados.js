import React from 'react'

export default function Dados(props){
  const n1 = 10
  const n2 = 47
  return(
    <section className='container'>
      <p className='text-color'>Canal:{props.canal}</p>
      <p>Youtube:{props.youtube}</p>
      <p>Curso:{props.curso}</p>
      <p>Onde:{props.onde()}</p>
      <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.valor(n1, n2)}</p>
    </section>
  )
}