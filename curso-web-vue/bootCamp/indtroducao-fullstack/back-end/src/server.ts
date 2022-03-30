import express from 'express'
import cors from 'cors'
import axios from 'axios'

// Create a new express application instance
const app = express()

// Allow cross-origin requests
app.use(express.json())
app.use(cors({ origin: '*' }))

// Get all users
interface User {
  id: string
  name: string
  email: string
}

// Get all users
const users: User[] = []

// Get all users
app.get('/users', (request, response) => {
    //buscar dados no db
  axios.get('https://my-json-server.typicode.com/Mlluiz39/fakeapi-json-testes')

  //retornar os dados do db
  return response.json(users)
})

app.post('/users', (request, response) => {
  //receber os dados do novo usuario
  const { id, name, email } = request.body

  //criar um novo usuario
  const user = { id, name, email }

  //adicionar o usuario na base de dados ou no array
  users.push(user)

  //retornar os dados do usuario criado
  return response.json(user)
})

app.put('/users/:id', (request, response) => {
  //receber o id do usuario
  const { id } = request.params
  //receber os dados do usuario
  const { name, email } = request.body

  //buscar o usuario pelo id
  const userIndex = users.findIndex(user => user.id === id)

  //se o usuario nao existir
  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found!' })
  }

  //atualizar os dados do usuario
  const user = { id, name, email }

  //adicionar o usuario na base de dados ou no array
  users[userIndex] = user

  //retornar os dados do usuario atualizado
  return response.json(user)
})

app.delete('/users/:id', (request, response) => {
  //receber o id do usuario
  const { id } = request.params

  //buscar o usuario pelo id
  const userIndex = users.findIndex(user => {
    user.id === id
  })

  //se o usuario nao existir
  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found!' })
  }

  //remover o usuario da base de dados ou do array
  users.splice(userIndex, 1)
  return response.status(204).send()
})

//porta que o servidor vai escutar
app.listen('3333', () => {
  console.log('back-end Started!')
})
