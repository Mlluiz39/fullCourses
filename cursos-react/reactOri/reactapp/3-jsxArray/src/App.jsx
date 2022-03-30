/* eslint-disable react/react-in-jsx-scope */
import './App.css'

function App() {
  // const produtos = [
  //   <li key="e1">Notebook</li>,
  //   <li key="e2">Tablet</li>,
  //   <li key="e3">Smartphone</li>
  // ]
  const filmes = ['Before Sunrise', 'Before Sunset', 'Midnight Club']
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Class of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 }
  ]

  return (
    <>
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <ol>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ol>
    </>
  )
}

export default App
