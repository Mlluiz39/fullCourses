import { Router } from 'express'

const routes = Router()

routes.get('/users', (req, res) => {
  return res.send({
    User1: 'Marcelo',
    User2: 'Julia',
    User3: 'Kaique',
    User4: 'Elaine'
  })
})

export default routes