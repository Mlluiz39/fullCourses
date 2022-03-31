/*
  01
  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário']
const namesCopy = names.map(name => name).sort()

console.log(names)

console.log(namesCopy)

/*
  02
  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

const charactersCopy = characters.map(item => ({ id: item.id, name: item.name }))
// acima foi retornado dentro das chaves e valor do obj para ai sim retornar um novo obj
charactersCopy.sort((item2, item1) => item2.id - item1.id)

console.log(charactersCopy)
/*
  03
  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const numbersCopy = numbers.map(item => item)
numbersCopy.sort((number2, number1) => number2 - number1)

console.log(numbers, numbersCopy)

/*
  04
  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

const numberGreaterThan50 = randomNumbers.find(number => number > 50)

console.log(numberGreaterThan50)

/*
  05
  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']

const peopleCopy = people.map(item => item)

peopleCopy.sort()
peopleCopy.reverse()

console.log({people, peopleCopy})

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['arroz', 'tomate', 'cebola', 'cogumelo']

const cookedIngredients = ingredients.reduce((acc, item, index, array) => {
  //const corretWordGender = item[item.length -1] === 'a' ? 'cozida' : 'cozido'
  const corretWordGender = /a$/.test(item) ? 'cozida' : 'cozido'

  if (index === array.length - 1) {
    return acc + `${item} cozido`
  }

  return acc + `${item} ${corretWordGender}, `
}, '')

console.log(cookedIngredients)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const peopleAmount = topBrazilMovies
  .filter(movie => movie.distributedBy === 'Disney')
  .reduce((acc, item) => acc + item.peopleAmount , 0)

console.log(peopleAmount)
 
/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const humanAgeDog = pets
  .filter(pet => pet.type === 'Dog')
  .map(dog => ({ 
    name: dog.name, 
    age: dog.age * 7, 
    gender: dog.gender, 
    type: dog.type 
  }))

console.log(humanAgeDog)

/*
  09
  
  - Considerando o array topBrazilMovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const ul = document.querySelector('.list-group')

// const movieNames = topBrazilMovies
//   .map(movieName => `<li>${movieName.title}</li>`)
//   .join('')

// console.log(movieNames)

const movieNames = topBrazilMovies.reduce((acc, movie) => 
  acc + `<li>${movie.title}</li>`, '')

  ul.insertAdjacentHTML('beforeend', movieNames)

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/

/************************************* REFATORADO **********************************************/

/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const getArrayCopy = array => array.map(item => item)

const names = ['Caio', 'André', 'Dário']
const namesInAlphabeticalOrder = getArrayCopy(names).sort()

console.log(namesInAlphabeticalOrder)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

const caracterOrderById = characters
  .map(({ id, name }) => ({ id, name }))
  .sort((item2, item1) => item2.id - item1.id)

console.log(caracterOrderById)
/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const numbersInAscendingOrder = getArrayCopy(numbers)
  .sort((number2, number1) => number2 - number1)

console.log(numbersInAscendingOrder)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]
const numberGreaterThan50 = randomNumbers.find(number => number > 50)

console.log(numberGreaterThan50)

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']
const peopleInReverseAlphabeticalOrder = getArrayCopy(people).sort().reverse()

console.log({peopleInReverseAlphabeticalOrder})

/*
  06
  
  - Através do array abaixo, gere a mensagem "arroz cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['arroz', 'tomate', 'cebola', 'cogumelo']

const cookedIngredients = ingredients.reduce((acc, item, index, array) => {
  //const corretWordGender = item[item.length -1] === 'a' ? 'cozida' : 'cozido'
  const corretWordGender = /a$/.test(item) ? 'cozida' : 'cozido'
  const isLastItem = index === array.length - 1
  const ingredientMessage = acc + `${item} ${corretWordGender}`

  return isLastItem ? ingredientMessage : `${ingredientMessage}, `
}, '')

console.log(cookedIngredients)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const peopleAmount = topBrazilMovies
  .filter(({ distributedBy }) => distributedBy === 'Disney')
  .reduce((acc, { peopleAmount }) => acc + peopleAmount , 0)

console.log(peopleAmount)
 
/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const humanAgeDog = pets
  .filter(({ type }) => type === 'Dog')
  .map(({ name, age, gender, type }) => ({ name, age: age * 7, gender, type }))

console.log(humanAgeDog)

/*
  09
  
  - Considerando o array topBrazilMovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const ul = document.querySelector('.list-group')
const movieNames = topBrazilMovies
  .reduce((acc, { title }) => acc + `<li>${title}</li>`, '')

  ul.insertAdjacentHTML('beforeend', movieNames)

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/