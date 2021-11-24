class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
   
  }

  acelerar() {
    console.log('acelerou...')
  }
}
class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas)
    this.capacete = capacete
  }

  empinar() {
    console.log(`empinou com ${this.rodas} rodas`)  
  }

  taDeCapacete() {
    console.log(this.capacete)
  }
}

const bros = new Moto(2, true)


bros.empinar()
bros.acelerar()
bros.taDeCapacete()