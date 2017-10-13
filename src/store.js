import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const middleware = [
  thunkMiddleware,
]

const store = createStore(reducer, compose(
  applyMiddleware(...middleware)
))

export default store
