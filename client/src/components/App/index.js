import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {addTodo, clearCompleted} from '../../actions/todoActions'
import TodoList from '../TodoList'

class App extends Component {
  state = {
    todoText: ''
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.todoText !== '') {
      addTodo(this.state.todoText)
      this.setState({
        todoText: ''
      })
    }
  }

  clearCompleted = (e) => {
    e.preventDefault()
    clearCompleted()
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/:status?" exact component={TodoList} />
          <br />
          <Link to="/active">Active</Link> <Link to="/completed">Completed</Link> <Link to="/">All</Link>
          <div>
            <button onClick={this.clearCompleted}>Clear Completed</button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.todoText} onChange={this.handleChange} placeholder="Add todo" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Router>
    )
  }
}

export default App
