// comunicação com db

async function connect() {
  if (global.conn && global.conn.state !== "disconnected") return global.conn;

  const mysql = require("mysql2/promise");
  const conn = await mysql.createConnection(
    "mysql://mlluizde_mlluiz39:Julia2912@@host10.hospedameusite.com.br/mlluizde_questions"
  );
  console.log("Conectado no banco na porta !");
  global.conn = conn;
  return conn;
}

async function selectCustomers() {
  const con = await connect();
  const [rows] = await con.query("SELECT * FROM mlluizde_questions;");
  return await rows;
}

async function insertCustomers(customer) {
  const con = await connect();
  const sql =
    "INSERT INTO mlluizde_questions (nome, usuario, senha, senha2, nivel) VALUES (?, ?, ?, ?, ?);";
  const values = [
    customer.nome,
    customer.usuario,
    customer.senha,
    customer.senha2,
    customer.nivel,
  ];
  return await con.query(sql, values);
}

async function updateCustomers(id, customer) {
  const con = await connect();
  const sql =
    "UPDATE mlluizde_questions SET nome = ?, usuario = ?, senha = ?, senha2 = ?, nivel = ?, cadastro = ? WHERE id=?;";
  const values = [
    customer.nome,
    customer.usuario,
    customer.senha,
    customer.senha2,
    customer.nivel,
    customer.cadastro,
    id_usuario,
  ];
  return await con.query(sql, values);
}

async function deleteCustomers(id) {
  const con = await connect();
  const sql = "DELETE FROM mlluizde_questions WHERE id = ?;";
  return await con.query(sql, id_usuario);
}

module.exports = {
  selectCustomers,
  insertCustomers,
  updateCustomers,
  deleteCustomers,
};
