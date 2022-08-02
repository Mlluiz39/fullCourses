import './App.css'
import Form from './components/Form/Form'

const Titulo = ({cor, texto, children}) => {
  return <h1 style={{ color: cor }}>{texto}{children}</h1>
}

function App() {
  return (
    <section>
      <Titulo cor="red" texto="Meu titulo 1" />
      <Titulo cor="green" texto="Meu titulo 2" />
      <Titulo cor="blue"> Isso é o children</Titulo>
      <Form />
     
    </section>
  )
}

export default App
