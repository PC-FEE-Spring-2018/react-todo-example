import store from '../services/store'
import axios from 'axios'

export function getTodos(status) {
  let url = 'http://localhost:3001/todos'

  if (status === 'active') {
    url += '?complete=false'
  } else if (status === 'completed') {
    url += '?complete=true'
  }

  axios.get(url).then(resp => {
    store.dispatch({
      type: 'GET_TODOS',
      payload: resp.data
    })
  })
}

export function addTodo(todo) {
  axios.post('http://localhost:3001/todos', {
    text: todo,
    complete: false
  }).then(resp => {
    getTodos()
  })
}

export function removeTodo(id) {
  axios.delete('http://localhost:3001/todos/' + id).then(resp => {
    getTodos()
  })
}

export function markAsComplete(id, complete) {
  axios.patch('http://localhost:3001/todos/' + id, {
    complete
  }).then(resp => {
    getTodos()
  })
}

export function clearCompleted() {
  const state = store.getState()

  const ids = state.todoReducer.todos.filter(todo => todo.complete === true).map(item => item.id)

  axios.all(ids.map(id => {
    return axios.delete('http://localhost:3001/todos/' + id)
  })).then(resp => {
    getTodos()
  })
}