import axios from 'axios'

const initialState = {
  userCart: {id: 0}
}

const GET_LOGGED_IN_SHOPPING_CART = 'GET_LOGGED_IN_SHOPPING_CART'
const gotLoggedInUserCart = cart => {
  return {
    type: GET_LOGGED_IN_SHOPPING_CART,
    cart
  }
}

export const getUserCartById = id => {
  console.log('ID from CartReducer', id)
  return async dispatch => {
    const {data} = await axios.get('/api/cart/' + id)
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
    default:
      return {...state}
  }
}
