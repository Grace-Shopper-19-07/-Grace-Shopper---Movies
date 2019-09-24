import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import moviesReducer from './moviesReducer'
import cartReducer from './cartReducer'
import guestReducer from './guestReducer'
import {loadState, saveState} from '../localStorage'
import throttle from 'lodash.throttle'

const persistatedState = loadState()

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  cart: cartReducer,
  guest: guestReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
// const store = createStore(reducer, middleware)
const store = createStore(reducer, persistatedState, middleware)

store.subscribe(
  throttle(() => {
    saveState({
      cart: store.getState().cart,
      guest: store.getState().guest
    })
  }, 1000)
)

export default store
export * from './user'
