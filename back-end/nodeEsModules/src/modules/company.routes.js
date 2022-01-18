import { Router } from 'express'

const routes = Router()

routes.get('/company', (req, res) => {
  return res.send({
    Company1: 'Marcelo',
    Company2: 'Julia',
    Company3: 'Caique',
    Company4: 'Elaine'
  })
})

export default routes