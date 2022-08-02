const mongoose = require('mongoose')

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mlluiz29.t2uzt.mongodb.net/database?retryWrites=true&w=majority`,
    error => {
      if (error) {
        return console.log('erro ao conectar no DB', error)
      } 
      return console.log('conectado no DB')
    }
  )
}

module.exports = connectToDatabase
