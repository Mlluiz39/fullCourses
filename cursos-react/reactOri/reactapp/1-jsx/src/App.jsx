import './App.css'

function App() {

  const estiloButton = {
    color: 'white',
    background: 'red',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    marginTop: '30px'
  }

  const site = 'Meu site Pessoal de projetos!'
  const nome = 'Marcelo Luiz'
  
  return(
  <main className="container">
  <header className="content">
    <h1>Hello World!</h1>
    <a href="https://marcelo-luiz.com" title="marcelo-luiz.com">{ site }</a>
    <p className="ativo">{ nome }</p>
    </header>
    <form className="input">
    <label htmlFor="nome">Nome:</label>
    <input type="text" id="nome" placeholder="digite o nome"/>
    <button style={estiloButton}>Enviar</button>
    <p style={{ color: 'blue', fontSize: '30px' }}>Enviar para banco de dados</p>
    </form>
    </main>
  )
}

export default App
