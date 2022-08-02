let voceComprou = new Promise((resolve, reject) => {
  setTimeout(() => {
    let produtos = ['camisa', 'sapato', 'calça']
    reject('deu ruim')
  }, 3000)
})

voceComprou.then((produtos) => {
  console.log(produtos)
}).catch((error) => {
  console.log(error)
})