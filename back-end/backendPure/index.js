(async () => {
  const db = require('./db')
  const client = await db.getClients()
  console.log(client)
})()