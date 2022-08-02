let age: number | string // com isso podemos ter números e strings sem precisar usar o tipo any

age = 42
age = 'quarenta e dois'

console.log(age)

const showPet = (pet: 'dog' | 'cat' | 'zebra'): void => {
    console.log(pet)  // aqui o intellisense vai saber quais opções existem graças ao union type
}

showPet('zebra')