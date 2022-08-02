//extends, implements

interface Veiculo {
  rodas: number
  acelerar(): void
  frear(): void
}

interface Moto extends Veiculo {
  capacete: boolean
  empinar(): void
}

let bros: Moto = {
  rodas: 2,
  acelerar() {
    console.log('Acelerando a moto')
  },
  capacete: false,
  empinar(): void {
    console.log('Empinando a moto')
  },
  frear(): void {
    console.log('Freando a moto')
  },
}

bros.acelerar()
bros.empinar()

class Carro implements Veiculo {
  rodas: number
  constructor() {
    this.rodas = 4
  }
  acelerar(): void {
    console.log('Acelerando o carro')
  }
  frear(): void {
    console.log('Freando o carro')
  }
}

let uno: Carro = new Carro()
uno.acelerar()
uno.frear()
