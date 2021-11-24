const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes/filmes.routes')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/netflix', {
  authSource: 'admin',
  user: 'root',
  pass: 'example',
})

app.use(express.json())
app.use(morgan('dev'))
app.use('/', routes)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
