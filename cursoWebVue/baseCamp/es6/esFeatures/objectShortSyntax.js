const name = 'camisa'
const price = 20

const product = {
    name: name,
    price: price,
    inStock: true
}

console.log(product)

// Com shortSyntax
const product1 = {
    name,
    price,
    inStock: true
}

console.log(product1)  // se o valor da variavel for o mesmo podemos retirar tudo depois dos dois pontos