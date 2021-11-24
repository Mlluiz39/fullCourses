import Todos from './api/todos'

async function running() {
  const todos = new Todos()

  // const response = await todos.getTodo()
  // console.log(response)

  // const response = await todos.postTodo({
  //   text: 'Cortar cabelo', 
  //   done: false
  // })
  //  console.log(response)

  // const response = await todos.updateTodo({ 
  //   id: 5, 
  //   text: 'Escovar os dentes', 
  //   done: true
  // })
  // console.log(response)

  // const response = await todos.deleteTodo({ id: 5 })
  // console.log(response)

}

running()