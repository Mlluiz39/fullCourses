// require('./modulesJS/path')
//require('./modulesJS/fs')
//require('./modulesJS/http')
require('./modulesJS/express')
const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')
dotenv.config()

connectToDatabase()
// const { Person } = require('./person')
// const person = new Person('Marcelo Luiz', 42)
