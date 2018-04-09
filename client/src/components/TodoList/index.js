import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTodos} from '../../actions/todoActions'
import TodoItem from '../TodoItem'

class TodoList extends Component {
  componentDidMount() {
    getTodos(this.props.match.params.status)
  }

  static defaultProps = {
    todos: []
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.status !== newProps.match.params.status) {
      getTodos(newProps.match.params.status)
    }
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={"todo" + todo.id} {...todo} />
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  }
}

export default connect(mapStateToProps)(TodoList)