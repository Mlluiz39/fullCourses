            //retorno implicito
function anything () {
    console.log('Hello')
}

anything()

const anything1 = () => {
    console.log('Hello world')
}

anything1()

const anything2 = () => 'Hello world!'

console.log(anything2())

const arraysInArrow = () => [1, 2, 3, 4]

console.log(arraysInArrow())


const objectsInArrow = () => ({name: 'Marcelo'}) // aqui em objetos precisa ser envolvido em parênteses

console.log(objectsInArrow())
// const originalNumbers = [1, 2, 3, 4, 5]
// const changedNumbers = [1, 2, 3, 4, 5]
// const cars = ['fusca', 'civic', 'hb20']

// originalNumbers.forEach((number, index) => {
//     return (index, number)  // quando tem mais de um parâmetro não podemos tirar os parênteses
// })

// originalNumbers.forEach(() => {
//     return (originalNumbers)  // quando tem mais de um parâmetro não podemos tirar os parênteses
// })

// changedNumbers.forEach(number => {
//     return changedNumbers[index] = number + 1  // aqui sim podemos tirar  os parênteses
// })

// changedNumbers.forEach(number => number + 1)  // aqui se tiver apenas um retorno podemos ter retorno implicito

// console.log(changedNumbers)