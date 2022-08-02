import axios from '../utils/axios'

export default class Todos {
  async getTodo() {
    const { data } = await axios.get('/todos')
    return data
  }

  async postTodo({ text, done }) {
    const { data } = await axios.post('/todos', { text, done })
    return data
  }

  async updateTodo({ id, text, done }) {
    const { data } = await axios.put(`/todos/${id}`, { text, done })
    return data
  }

  async deleteTodo({ id }) {
    await axios.delete(`/todos/${id}`)
    return alert('Excluido com sucesso')
  
  }
}

