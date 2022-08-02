type Pet = 'dog' | 'cat' | 'zebra'

const showPet = (pet: Pet): void => {
    console.log(pet) 
}

const displayPet = (pet: Pet): void => {
    console.log(pet) 
}

showPet('dog')
displayPet('cat')

