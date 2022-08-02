import db from '@/db'
import User from '@/models/user.model'
import DataBaseError from '@/models/errors/database.error.models'

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `
    SELECT uuid, username, email, password
    FROM application_users
    `
    const { rows } = await db.query<User>(query)
    return rows || []
  }

  async findUserByUser(uuid: string): Promise<User> {
    try {
      const query = `
      SELECT uuid, username, email, password
      FROM application_users
      WHERE uuid = $1
      `
      const values = [uuid]

      const { rows } = await db.query<User>(query, values)
      const [user] = rows

      return user
    } catch (error) {
      console.log(error)
      throw new DataBaseError('Erro na consulta por ID', error)
    }
  }

  async createUser({ username, email, password }: User): Promise<User> {
    const script = `
    INSERT INTO application_users (
      username, email, password
      )
      VALUES ($1, $2, $3)
      RETURNING uuid
    `
    const values = [username, email, password]

    const { rows } = await db.query<User>(script, values)
    const [userCreated] = rows

    return userCreated
  }

  async updateUser({ username, email, password, uuid }: User): Promise<void> {
    const script = `
    UPDATE application_users SET 
    username = $1, 
    email = $2, 
    password = $3 
    WHERE uuid = $4
    `
    const values = [username, email, password, uuid]
    await db.query<User>(script, values)
  }

  async deleteUser(uuid: string): Promise<void> {
    const script = `
    DELETE FROM application_users
    WHERE uuid = $1
    `
    const values = [uuid]
    await db.query<User>(script, values)
  }
}

export default new UserRepository()

