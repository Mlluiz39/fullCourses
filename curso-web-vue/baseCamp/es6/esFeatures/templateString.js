// Parâmetro padrão

const sayHello = (name = 'Fulano') => {
    console.log(`Ola ${name}`)
}

sayHello('Marcelo')

const numbersSum = (a = 0, b = 0) => {
    total = a + b
    console.log(`A soma de ${a} + ${b} = ${total}`)
}

numbersSum(3,6)

const showProduct = (product = 'calça', price = 20) => {
    console.log(`O valor do item ${product.toUpperCase} é R$ ${price}, pode comprar!`)
}

showProduct('camiseta', 15)