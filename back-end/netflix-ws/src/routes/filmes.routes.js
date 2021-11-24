const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')

// RECUPERAR TODOS OS REGISTROS
router.get('/', (req, res) => {
  res.json({ message: 'PEGAR TODOS OS REGISTROS' })
})

// RECUPERAR UM REGISTRO
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `PEGAR SOMENTE UM REGISTRO COM ID: ${id}` })
})

// INSERIR UM REGISTRO
router.post('/', async (req, res) => {
  try {
    const filme = req.body
    const response = await new Filme(filme).save()
    res.json({ error: false, filme: response })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

// ATUALIZAR UM REGISTRO VIA ID
router.put('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `ATUALIZAR UM REGISTRO COM ID: ${id}` })
})

// DELETAR UM REGISTRO COM O ID
router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `DELETAR UM REGISTRO COM ID: ${id}` })
})

module.exports = router
