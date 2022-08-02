const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename))

// Nome do diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo atual
console.log(path.extname(__filename))

// Caminho absoluto
console.log(path.parse(__filename))

//  Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test'))

// Caminho relativo
console.log(path.relative(__dirname, path.resolve(__dirname, '..', '..')))

// Caminho 
console.log(path.resolve(__dirname, '..', '..'))
