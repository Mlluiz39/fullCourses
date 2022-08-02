function Produto({ nome, propriedades }) {
  return (
    <div
      key={nome}
      style={{ border: '1px solid', padding: '1rem', margin: '1rem 0' }}
    >
      <h3>{nome}</h3>
      {propriedades.map((propriedade) => (
        <li>{propriedade}</li>
      ))}
    </div>
  )
}

export default Produto
