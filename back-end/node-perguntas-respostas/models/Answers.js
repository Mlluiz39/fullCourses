const Sequelize = require('sequelize')
const connection = require('../database/db')

const Answer = connection.define('Answers', {
 body: {
 type: Sequelize.TEXT,
 allowNull: false  
 },
 questionId: {
 type: Sequelize.INTEGER,
 allowNull: false  
 }
})

Answer.sync({ force: false })

module.exports = Answer