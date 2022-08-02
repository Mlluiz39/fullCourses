// const car = {
//   brand: null,
//   price: 0  
// }

// const civic = car
// civic.brand = 'honda'
// civic.price = 20.000

// const hb20 = car
// hb20.brand = 'hyundai'
// hb20.price = 16.000

// console.log(civic)
// console.log(hb20)

// no codigo acima vai pegar o ultimo objeto e duplicar o console.log

function Car (brand, price) {
    this.brand = brand
    this.price = price
}  // aqui não usamos arrow pois, o this não vai referenciar o proprio escopo do objeto

const civic = new Car('honda', 90000.00)
const hb20 = new Car('hyundai', 40000.00)

console.log(civic)
console.log(hb20)