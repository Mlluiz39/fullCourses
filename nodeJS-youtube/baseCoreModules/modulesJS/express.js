const express = require('express')
const UserModel = require('../src/models/user.model')

const baseUrl = 'http://localhost'
const app = express()
app.use(express.json())

const port = 3000

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserModel.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/users', async (req, res) => {
  const user = await UserModel.create(req.body)
  try {
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.patch('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserModel.findByIdAndRemove(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server running at ${baseUrl}:${port}`)
})
