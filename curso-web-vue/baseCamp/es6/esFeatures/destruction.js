//Destruction em array

const fruits = ['laranja', 'banana', 'maça']

const a = fruits[0]
const b = fruits[1]

console.log(a, b)

const fruits1 = ['uva', 'morango', 'abacaxi']

//const [c, d] = fruits1
const [c, , e] = fruits1  // aqui pego o indice 2 deixando o indice 1 vago

//console.log(c, d)
console.log(c, e)

// Destruction em objects

const person = {
    firstName: 'Marcelo Luiz',
    secondName: 'Souza',
    age: 42,
    address: {
        city: 'São Paulo',
        Region: 'SP'
    },
}

/*
const firstName = person.firstName
const secondName = person.secondName
const city = person.address.city

console.log(firstName, secondName, city)
*/

//const { firstName, secondName } = person  // aqui desestruturando
const { firstName, secondName, address: { city } } = person

//console.log(firstName, secondName)
console.log(firstName, secondName, city)

/*
const showFullName = (person) => {
    console.log(`${person.firstName} ${person.secondName}`)
}
*/
const showFullName = ({ firstName, secondName }) => {
    console.log(`${firstName} ${secondName}`)
}

showFullName(person)