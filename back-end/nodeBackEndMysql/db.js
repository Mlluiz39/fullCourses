// comunicação com db

async function connect() {
  if (global.conn && global.conn.state !== 'disconnected') return global.conn

  const mysql = require('mysql2/promise')
  const conn = await mysql.createConnection(
    'mysql://root:2912@localhost:3306/usuarios'
  )
  console.log('Conectado no banco na porta !')
  global.conn = conn
  return conn
}

async function selectCustomers() {
  const con = await connect()
  const [rows] = await con.query('SELECT * FROM usuarios;')
  return await rows
}

async function insertCustomers(customer) {
  const con = await connect()
  const sql =
    'INSERT INTO usuarios (nome, usuario, senha, senha2, nivel) VALUES (?, ?, ?, ?, ?);'
  const values = [
    customer.nome,
    customer.usuario,
    customer.senha,
    customer.senha2,
    customer.nivel,
  ]
  return await con.query(sql, values)
}

async function updateCustomers(id_usuario, customer) {
  const con = await connect()
  const sql =
    'UPDATE usuarios SET nome = ?, usuario = ?, senha = ?, senha2 = ?, nivel = ?, cadastro = ? WHERE id_usuario=?;'
  const values = [
    customer.nome,
    customer.usuario,
    customer.senha,
    customer.senha2,
    customer.nivel,
    customer.cadastro,
    id_usuario,
  ]
  return await con.query(sql, values)
}

async function deleteCustomers(id_usuario) {
  const con = await connect()
  const sql = 'DELETE FROM usuarios WHERE id_usuario = ?;'
  return await con.query(sql, id_usuario)
}

module.exports = {
  selectCustomers,
  insertCustomers,
  updateCustomers,
  deleteCustomers,
}
