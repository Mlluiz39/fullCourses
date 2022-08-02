import { Pool } from 'pg'
const connectionString = 'postgres://postgres:password@localhost:5432/user_db_dio' //"tipo de banco://YourUserName:YourPassword@localhost:5432/YourDatabase";
const pool = new Pool({
  connectionString,
})

export default pool