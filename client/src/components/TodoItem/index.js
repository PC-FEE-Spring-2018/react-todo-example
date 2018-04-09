import React, { Component } from 'react'

import {removeTodo, markAsComplete} from '../../actions/todoActions'

class TodoItem extends Component {
  remove = (e) => {
    e.preventDefault()
    removeTodo(this.props.id)
  }

  complete = (e) => {
    e.preventDefault()
    markAsComplete(this.props.id, !this.props.complete)
  }

  render() {
    return (
      <li className="todo">
        <p><input type="checkbox" onChange={this.complete} checked={this.props.complete} /> {this.props.text} <button onClick={this.remove}>X</button></p>
      </li>
    )
  }
}

export default TodoItem 