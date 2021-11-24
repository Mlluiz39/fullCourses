class Car {
  constructor(brand, price = 50000) {
    this.brand = brand;
    this.price = price;
  }

  run(car) {
      console.log(`${car} esta andando...`)
  }
  
  stop(car) {
    console.log(`${car} esta parado`)
  }
}

const car1 = new Car("civic", 89000);
const car2 = new Car('CRV')

console.log(car1.price)
car1.run(car1.brand)
car2.stop(car2.brand)


