class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    return this._name = newName
  }
}

const person = new Person('Marcelo Luiz')

person.name = 'João de Luca'

console.log(person.name)