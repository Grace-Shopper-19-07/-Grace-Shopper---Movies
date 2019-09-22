import axios from 'axios'
import {me} from './user'

const initialState = {
  userCart: {
    id: 0
    // movies: []
  }
}

const GET_LOGGED_IN_SHOPPING_CART = 'GET_LOGGED_IN_SHOPPING_CART'
const gotLoggedInUserCart = cart => {
  return {
    type: GET_LOGGED_IN_SHOPPING_CART,
    cart
  }
}

export const getUserCartById = id => {
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

const DELETE_CART = 'DELETE_CART'
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

// const ADD_MOVIE = 'ADD_MOVIE'
// const addMovie = movie => ({
//   type: ADD_MOVIE,
//   movie
// })

export const addMovieThunk = movie => {
  return async dispatch => {
    await axios.post(`/api/cart/`, movie)
    // dispatch(addMovie(movie))
  }
}

export const removeMovieThunk = movie => {
  return async dispatch => {
    const user = await axios.get('/auth/me')
    await axios.delete(`/api/cart/${user.data.id}`, {
      orderId: user.data.id,
      movieId: movie.id
    })
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
    // case ADD_MOVIE:
    //   return {
    //     ...state,
    //     userCart: {
    //       ...state.userCart,
    //       movies: [...state.userCart.movies, action.movie]
    //     }
    //   }
    default:
      return {...state}
  }
}
