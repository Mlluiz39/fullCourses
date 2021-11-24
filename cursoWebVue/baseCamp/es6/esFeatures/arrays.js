const originalNumbers = [1, 2, 3, 4, 5]
const changedNumbers = [1, 2, 3, 4, 5]
const cars = ['fusca', 'civic', 'hb20']


             //foreach
originalNumbers.forEach(function (number, index) {
    return (index, number)
})

changedNumbers.forEach(function (number, index) {
changedNumbers[index] = number + 1
})

console.log(originalNumbers)
console.log(changedNumbers)  // aqui ele fez a iteração porem fez uma mudança no array
// original o que vai contra o conceito de programação funcional para isso não 
//acontecer usamos outro metodo de array o  map

               //Map
const newNumbers = originalNumbers.map(function (number) {
    return number + 1
})

console.log(newNumbers)

              //Reduce
const total = originalNumbers.reduce(function (total, next) {
    return total + next
})

 console.log(total)

              //filter
const todos = [
    {text: 'Lavar a louça', done: true},
    {text: 'Levar o lixo pra fora', done: false},
    {text: 'passear com cachorro', done: true}
]

const doneTodo = todos.filter(function (todo) {
    return todo.done === true
})

console.log(doneTodo)

              //Find
const findTodo = todos.find(function (todo) {
    return todo.text === 'passear com cachorro'
})

console.log(findTodo)

             // findIndex

const findIndexTodo = todos.findIndex(function (todo) {
    return todo.text === 'Lavar a louça'
})

console.log(findIndexTodo)

                 //some
const hasFusca = cars.some(function (car) {
    return car === 'fusca' 
})

console.log(hasFusca)