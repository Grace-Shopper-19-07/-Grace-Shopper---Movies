import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import moviesReducer from './moviesReducer'
import cartReducer from './cartReducer'
import {loadState, saveState} from '../localStorage'

const persistatedState = loadState()

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  cart: cartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)
// const store = createStore(reducer, persistatedState, middleware)

// store.subscribe(() => {
//   saveState({
//     cart: store.getState().cart
//   })
// })

export default store
export * from './user'
