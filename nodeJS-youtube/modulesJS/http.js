const http = require('http')

const baseUrl = 'http://localhost'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Home Page</h1>')
  }
  if (req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const users = [
      { name: 'Marcelo', email: 'mlluiz@gmail.com', sex: 'Fem', age: 42 },
      { name: 'Julia', email: 'julia@gmail.com', sex: 'Masc', age: 18 },
    ]
    res.end(JSON.stringify(users))
  }
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>About</h1>')
  }
})

server.listen(port, () => {
  console.log(`Server running at ${baseUrl}:${port}/`)
})
