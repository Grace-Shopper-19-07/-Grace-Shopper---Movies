import axios from 'axios'
import {me} from './user'

const initialState = {
  userCart: {id: 0, movies: []}
}

const GET_LOGGED_IN_SHOPPING_CART = 'GET_LOGGED_IN_SHOPPING_CART'
const UPDATE_CART = 'UPDATE_CART'
const DELETE_CART = 'DELETE_CART'
const ADD_GUEST_CART = 'ADD_GUEST_CART'

const gotLoggedInUserCart = cart => {
  return {
    type: GET_LOGGED_IN_SHOPPING_CART,
    cart
  }
}

export const getUserCartById = () => {
  return async dispatch => {
    const user = await axios.get('/auth/me')
    const {data} = await axios.get(`/api/cart/${user.data.id}`)
    dispatch(gotLoggedInUserCart(data))
  }
}

const gotUpdatedCart = quantity => {
  return {
    type: UPDATE_CART,
    quantity
  }
}

const addGuestCart = cart => {
  return {
    type: ADD_GUEST_CART,
    cart
  }
}

export const updateCartThunk = updatedQuantity => {
  return async dispatch => {
    const {data} = await axios.put('/api/cart', updatedQuantity)
    dispatch(gotUpdatedCart(updatedQuantity))
  }
}

const deletedCart = () => {
  return {
    type: DELETE_CART
  }
}

export const deleteCart = () => {
  return dispatch => {
    dispatch(deletedCart())
  }
}

export const addGuestCartThunk = cart => {
  return dispatch => {
    dispatch(addGuestCart(cart))
  }
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CART:
      return {...state, userCart: {}}
    case UPDATE_CART:
      return {
        ...state,
        userCart: {...state.userCart, quantity: action.quantity}
      }
    case GET_LOGGED_IN_SHOPPING_CART:
      if (action.cart === null) {
        return {...state}
      }
      return {...state, userCart: action.cart}
    case ADD_GUEST_CART:
      return {
        ...state,
        userCart: {
          ...state.userCart,
          movies: [...state.userCart.movies, action.cart]
        }
      }
    default:
      return {...state}
  }
}
