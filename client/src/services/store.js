import {createStore, combineReducers} from 'redux'

import todoReducer from '../reducers/todoReducer'

const rootReducer = combineReducers(
  { 
    todoReducer
    // namespace your reducers here
  }
)

export default createStore(rootReducer)