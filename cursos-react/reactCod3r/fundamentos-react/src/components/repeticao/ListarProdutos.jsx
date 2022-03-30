import produtos from '../../data/produtos'
import '../layout/ListarProdutos.css'

const ListarProdutos = () => {

  const produtosLi = produtos.map((produto, indice) => {
    return (
      <tr key={produto.id} className={indice % 2 === 1 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    )
  })

  return (
    <table className="TabelaProdutos">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtosLi}
      </tbody>
    </table>
  )
}

export default ListarProdutos