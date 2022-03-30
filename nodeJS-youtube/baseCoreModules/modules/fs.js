const fs = require('fs')
const path = require('path')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('digite uma palavra: ', value => {
  fs.appendFile(
    path.join(__dirname, 'test', 'hello.txt'),
    `${value},${'\r\n'}`,
    err => {
      if (err) return console.log('Error: ', err)
      console.log('Arquivo salvo com sucesso!')
    }
  )
  readline.close()
})

// Criar uma pasta
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//   if (err) return console.log('Error: ', err)
//   console.log('Folder created!')
// })

// Criar um arquivo
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//   if (err) return console.log('Error: ', err)
//   console.log('File created!')
// })

// Lendo arquivos
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) return console.log('Error: ', err)
  console.log(data)
})
