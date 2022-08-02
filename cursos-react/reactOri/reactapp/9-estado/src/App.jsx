import React from 'react'
import Modal from './Modal';
import ButtonModal from './ButtonModal';
import './App.css'

const App = () => {
  // const ativoHook = useState(false)
  // const ativoValor = ativoHook[0]
  // const atualizaValor = ativoHook[1]
  // console.log(ativoValor)

  const [ativo, setAtivo] = React.useState(true)
  const [dados, setDados] = React.useState({nome: 'Marcelo', idade: 42})
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
  //  atualizaValor(!ativoValor)

  setAtivo(!ativo)
  setDados({...dados, faculdade: 'Cursando o 4° semestre da faculdade'})
 
  }

  // return <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>

  return (
    <>
    <p>Nome: {dados.nome} </p>
    <p>Idade: {dados.idade}</p> 
    <p>Tem faculdade: {dados.faculdade}</p>
 
  <button style={{margin: '10px'}} onClick={handleClick}>{ativo ? 'Mostrar' : 'Esconder'}</button>

  <Modal modal={modal} setModal={setModal} />
  <ButtonModal setModal={setModal} />
  </>
  )
  
}

export default App
