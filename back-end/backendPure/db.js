const connect = async () => {
  if (global.conn && global.conn.state != 'disconnected') 
    return global.conn;
  const mysql = require('mysql2/promise')
  const conn = mysql.createConnection("mysql://root:root@localhost:3308/node-users")
  console.log('Connected to database')
  global.conn = conn
  return conn
}

const getClients = async () => {
  const conn = await connect()
  const [rows] = await conn.query('SELECT * FROM application_users')
  return await rows
}

module.exports = {getClients}