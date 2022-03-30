import React, { useState } from 'react';
import Img from '../components/imgs/dog.jpeg';
import Dados from './Dados';
import ValorDeState from './ValorDeState';

export default function Main() {
  const [num, setNum] = useState(10);
  const [name, setName] = useState('Marcelo');
  
  const cursoYoutube = ' React.js';
  const you = () => {
    return ' cfb no youtube';
  };

  const soma = (v1, v2) => {
    return v1 + v2;
  };

  return (
    <main className="container">
      <h2>Aqui é o corpo da pagina</h2>
      <div>
        <img src={Img} alt="dog um" />
        <img src="./img/dog2.jpeg" alt="dog dois" />
      </div>
      <p className="texto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        pulvinar urna sed elit convallis ullamcorper. Fusce lacinia lacus ut
        velit lacinia, id tempus lacus pulvinar. Curabitur auctor nulla et lacus
        vehicula sodales. Proin ac fermentum quam. Cras vehicula, dolor vel
        mollis feugiat, sapien dui pulvinar nisi, non sodales turpis nisi sed
        mauris. Vivamus at mi maximus, cursus metus in, hendrerit tortor.
        Praesent eget iaculis ligula, nec vehicula nisl.
      </p>
      <Dados
        canal=" CFB Cursos"
        youtube=" youtube.com/cfbcursoso"
        curso={cursoYoutube}
        onde={you}
        valor={soma}
      />
      <a href="https://marcelo-luiz.com">Meu Site</a>
      <p>Valor do state num em App: {num}</p>
      <ValorDeState valor={num} setValor={setNum}/>
      <p>{name}</p>
      <button onClick={() => setName('Luiz')}>Troca nome</button>
      <button onClick={() => setName(name)}>Volta nome</button>
    </main>
  );
}
