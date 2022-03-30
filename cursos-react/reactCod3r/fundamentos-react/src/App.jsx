import React from 'react'
import './App.css'

import ListarProdutos from './components/repeticao/ListarProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia2 from './components/basicos/Familia2'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import DesafioAleatorio from './components/basicos/DesafioAleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParamentro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

const App = () => (
  <div className="App">

    <h1>Fundamentos React</h1>

    <div className="Cards">

    <Card titulo="#08 - Desafio Repetição" color="#55121b">
       <ListarProdutos />
      </Card>

    <Card titulo="#07 - Repetição" color="#c68642">
       <ListaAlunos />
      </Card>

    <Card titulo="#06 - Componente com Filhos02" color="#451e3e">
        <Familia2 sobrenome2="Santos">
          <FamiliaMembro nome2="Marcelo"/>
          <FamiliaMembro nome2="Cilene" />
          <FamiliaMembro nome2="Julia"/>
        </Familia2>
      </Card>

    <Card titulo="#05 - Componente com Filhos" color="#000CCA">
        <Familia sobrenome="Souza"/>
      </Card>

      <Card titulo="#04 - Desafio Aleatorio" color="#d11141">
        <DesafioAleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#29a8ab">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#fed766">
        <ComParamentro 
        titulo="Situação do Aluno" aluno="Marcelo" 
        nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" 
      color="#2e003e">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
)

export default App
