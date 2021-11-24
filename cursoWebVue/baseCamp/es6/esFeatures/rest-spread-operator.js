// rest ...

const numbers = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numbers

console.log(first, second)  // 1 2
console.log(rest)  // 3 4 5

const person = {
    firstName: 'Marcelo Luiz',
    secondName: 'Souza',
    age: 42,
    children: 0,
    address: {
        city: 'São Paulo',
        Region: 'SP'
    },
}

const {firstName, secondName, ...resto} = person

console.log(firstName, secondName)
console.log(resto)

const sum = (...params) => params.reduce((total, next) => total + next)

console.log(sum (5, 5, 10, 10, 6))

                  // spread

const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbers = [2, 4, 6, 8, 10]
const totalNumbers = [...oddNumbers, ...evenNumbers]

console.log(totalNumbers)

const person1 = {
    ...person,
    children: 1
}

console.log(person1)  // aqui pegou todo o conteudo e reatribuiu a propriedade children