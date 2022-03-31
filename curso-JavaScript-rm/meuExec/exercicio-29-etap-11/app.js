/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

const getPokemon = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOkay = request.readyState === 4 && request.status === 200
    const isRequestNotOkay = request.readyState === 4
    if (isRequestOkay) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOkay) {
      callback('Não foi possível obter o Pokémon', null)
      return
    }
  })

  request.open('GET', url)
  request.send()
}

  const logPokemonData = (error, data) => error 
    ? console.log(error) 
    : console.log(`Pokémon obtido: ${data.name}`)

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const bulbasaur = getPokemonUrl(1)
    const charmander = getPokemonUrl(4)
    const squirtle = getPokemonUrl(7)
  


getPokemon(bulbasaur, (error, data) => {
  logPokemonData(error, data)
  getPokemon(charmander, (error, data) => {
    logPokemonData(error, data)
    getPokemon(squirtle,logPokemonData)
  })
})

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

const map = (array, func) => {
  let newArray = []

  const addNewElementToNewArray = element => {
    const newElement = func(element)
    newArray.push(newElement)
  }

  array.forEach(addNewElementToNewArray)
  return newArray
}

console.log(map([1, 2, 3], number => number * 2))
console.log(map([4, 5, 6], number => number * 10))

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
  /*
  name: 'Roger',
  getName: () => this.name
 
  name: 'Marcelo',
  getName: function () {
    return this.name
  }

  name: 'Marcelo Luiz',
  getName () {
    return this.name
  }
  */

  name: 'Marcelo Luiz',
  getName: () => person.name
}

console.log(person.getName())  

/* 
dessa forma retorna string vazia, pois arrow function no this referencia o escopo global
para evitar usamos function declaration ou ate mais enxuto usamos a declaração do objeto person ai sim podemos usar arrow function
*/

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x'

const getX = () => {
  const x = 'y'
  return x
}

console.log(x, getX())


/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.


const getFullName = (user) => {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

const getFullName = user => `${user.firstName} ${user.lastName}` // 1° refactoring
*/
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`  // 2° refactoring

console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

const convertToHex = color => {
  const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  purple: '#FF00FF',  
  }
  return colors[color] 
    ? `O hexadecimal para a cor ${color} é ${colors[color]}` 
    : `Não temos o equivalente hexadecimal para ${color}`
}

const colors = [
  'blue', 
  'black', 
  'red', 
  'green', 
  'blue', 
  'yellow', 
  'purple', 
  'brow'
]

const logColorMessage = color => console.log(convertToHex(color))

colors.forEach(logColorMessage)

/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]

const createOrIncrementAgeFrequency = (acc, { age }) => {
  acc[age] = acc[age] + 1 || 1
  return acc
}

const agesFrequency = people.reduce(createOrIncrementAgeFrequency, {})
console.log(agesFrequency)