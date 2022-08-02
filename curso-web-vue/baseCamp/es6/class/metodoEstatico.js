class Calculator {
  static sum(a, b) {
    return a + b
  }
 }

 console.log(Calculator.sum(5, 4))

 class Person {
   constructor(firstName, secondName) {
     this.firstName = firstName
     this.secondName = secondName
   }

   get fullName() {
     //return this.joinNames() aqui não é reconhecido pois se trata de uma função pura
     return Person.joinNames(this.firstName, this.secondName)
   }

   static joinNames(firstName, secondName) {
    //return `${this.firstName} ${this.secondName}` o this é invalido pois referencia o proprio objeto
    return `${firstName} ${secondName}`
   }
 }

 const person = new Person('Marcelo', 'Luiz')

 console.log(person.fullName)