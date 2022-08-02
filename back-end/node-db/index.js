//vai fazer a apresentação via api ou na web

(async () => {
  const db = require("./db");
  console.log("conectado com sucesso!!!");

  console.log('INSERT INTO mlluizde_questions')
  const insertUsuarios = await db.insertCustomers({nome: 'Kaique', usuario: 'kaique@', senha: '1150', senha2: '1150', nivel: '0'})
  console.log(insertUsuarios)

  console.log("SELECT * FROM mlluizde_questions");
  const selectUsuarios = await db.selectCustomers();
  console.log(selectUsuarios);

  console.log("UPDATE mlluizde_questions");
  const updateUsuarios = await db.updateCustomers(12, {
    nome: "Luiz P Souza",
    usuario: "Nego",
    senha: "2150",
    senha2: "2150",
    nivel: "1",
    cadastro: "2021-08-29 14:15:00",
  });
  console.log(updateUsuarios);

  console.log("DELETE FROM mlluizde_questions");
  const deleteUsuarios = await db.deleteCustomers(8);
  console.log(deleteUsuarios);
})();
