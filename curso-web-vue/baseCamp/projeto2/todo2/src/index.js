import Todos from './api/todos'
import './assets/css/style.css'

const apiTodos = new Todos()

async function exec() {
  const todos = await apiTodos.getTodo()

//   <li class="todo">
//   <label class="checkbox-input">
//     <input type="checkbox" checked="true" />
//     <span class="checkmark"></span>
//   </label>
//   <span class="todo-text">Lavar Roupa</span>
//   <a class="todo-delete"></a>
// </li>

const ul = document.querySelector('ul.todos')

todos.forEach(todo => {
  const li = document.createElement('li')
  li.setAttribute('class', 'todo')

  const todoCheckBox = document.createElement('label')
  todoCheckBox.setAttribute('class', 'checkbox-input')

  const inputCheckBox = document.createElement('input')
  inputCheckBox.setAttribute('type', 'checkbox')
  if(todo.done) {
    inputCheckBox.setAttribute('checked', 'checked')
  }

  const spanCheckBox = document.createElement('span')
  spanCheckBox.setAttribute('class', 'checkmark')

  todoCheckBox.appendChild(inputCheckBox)
  todoCheckBox.appendChild(spanCheckBox)

  const todoText = document.createElement('span')
  todoText.setAttribute('class', 'todo-text')

  const spanText = document.createTextNode(todo.text)
  todoText.appendChild(spanText)

  const todoDelete = document.createElement('span')
  todoDelete.setAttribute('class', 'todo-delete')

  li.appendChild(todoCheckBox)
  li.appendChild(todoText)
  li.appendChild(todoDelete)

  ul.appendChild(li)
});
}

exec()

