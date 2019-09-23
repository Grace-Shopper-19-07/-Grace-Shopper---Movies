import axios from 'axios'
import {me} from './user'

const initialState = {
  userCart: {
    id: 0,
    movies: []
  }
}

const GET_LOGGED_IN_SHOPPING_CART = 'GET_LOGGED_IN_SHOPPING_CART'
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
const UPDATE_CART = 'UPDATE_CART'
const gotUpdatedCart = quantity => {
  return {
    type: UPDATE_CART,
    quantity
  }
}

export const updateCartThunk = updatedQuantity => {
  return async dispatch => {
    const {data} = await axios.put('/api/cart', updatedQuantity)
    dispatch(gotUpdatedCart(updatedQuantity))
  }
}

const CHECK_CART_OUT = 'CHECK_CART_OUT'
const cartCheckedOut = () => {
  return {
    type: CHECK_CART_OUT
  }
}

export const CheckOutThunk = userId => {
  return async dispatch => {
    const {data} = await axios.put(`/api/cart/checkout`, {userId: userId})
    dispatch(cartCheckedOut())
  }
}

export const deleteCart = () => {
  return dispatch => {
    dispatch(deletedCart())
  }
}

const ADD_MOVIE = 'ADD_MOVIE'
const addMovie = movie => ({
  type: ADD_MOVIE,
  movie
})

export const addMovieThunk = movie => {
  return async dispatch => {
    await axios.post(`/api/cart/`, movie)
    dispatch(addMovie(movie))
  }
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_CART_OUT:
      return {...state, userCart: {id: 0, movies: []}}
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
    case ADD_MOVIE:
      if (state.userCart.movies !== undefined) {
        return {
          ...state,
          userCart: {
            ...state.userCart,
            movies: [...state.userCart.movies, action.movie]
          }
        }
      } else {
        return {
          ...state,
          userCart: {
            movies: [action.movie]
          }
        }
      }
    default:
      return {...state}
  }
}
