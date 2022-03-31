import { createApp } from 'vue'
import Todos from './api/todos'
import './assets/css/style.css'

const apiTodos = new Todos()

const app = createApp({
  data() {
    return {
     todos: [],
     form: {
       text: '',
       done: false
     },
    }
  },
  methods: {
   async readTodos() {
     this.todos = await apiTodos.read()
   },
   async createTodo() {
    const data = await apiTodos.create(this.form)
    this.todos.push(data)

    this.form.text = ''
    this.form.done = false
   },
   async toggleTodoStatus(todo) {
     const data = await apiTodos.update({  ...todo, done: !todo.done})
    const index = this.todos.findIndex((todo) => todo.id === data.id)
    this.todos[index] = data
   },
   async deleteTodo(id) {
    await apiTodos.delete({ id })
    const index = this.todos.findIndex((todo) => todo.id === id)
    this.todos.splice(index, 1)
   }
  },
  created() {
    this.readTodos()
  }
})

app.mount('#app')