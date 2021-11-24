// Parâmetro padrão

const sayHello = (name = 'Fulano') => {
    console.log('Ola ' + name)
}

sayHello('Marcelo')

const numbersSum = (a = 0, b = 0) => {
    total = a + b
    console.log('A soma de ' + a + ' e ' + b + ' é ' + total)
}

numbersSum(3,6)