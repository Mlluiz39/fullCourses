const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {
  // return res.json([
  //   {Name: 'Marcelo'},
  //   {Name: 'Julia'}
  // ])

  try {
    // response é resposta do axios MAS estou fazendo um destructuring do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    //console.log(data)
      return res.json(data)
  } catch (error) {
    console.error(error)
  }
  
})

app.listen('4200')