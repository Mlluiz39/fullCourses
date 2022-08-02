import './App.css'

const luana =
{
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],s

  ativa: true;


}

const mario = {
  cliente: 'Mario',
  idade: 31,

  compras:
    [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' }
    ],
  ativa: false


}

function App () {
  const dados = luana
  const total = dados.compras
    .map((compra) => Number(compra.preco.replace('R$', '')))
    .reduce((a, b) => a + b)

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total Gasto: R$ {total}</p>

      {/* <p>{total > 10000 ? 'você está gastando muito!!!' : ''}</p> */}

      {total > 10000 && <p>Você está gastando muito!!!</p>}
      {/* aqui estamos deixando o dom mais limpo e não precisamos usar um ternário pois ser fot verdadeiro entra na condição */}
    </>
  )
}

export default App
