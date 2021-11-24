let stock: any | number = 89 //porem não devemos usar any
stock = null

console.log(stock)

function showStock(name: string = 'Seu nome aqui'): void {
    console.log(name)
}

showStock('Marcelo')

function error(): never {
    throw new Error('Error') // serve quando iremos usar um bloco de código que nunca vai terminar ou exceção
}

