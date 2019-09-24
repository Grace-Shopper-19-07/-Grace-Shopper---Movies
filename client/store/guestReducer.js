import axios from 'axios'

const initialState = {
  email: '',
  movies: []
}

const ADD_GUEST = 'ADD_GUEST'
const ADD_GUEST_CART = 'ADD_GUEST_CART'
const GUEST_CHECK_OUT = 'GUEST_CHECK_OUT'

const addGuest = email => ({type: ADD_GUEST, email})
const addGuestCart = cart => ({type: ADD_GUEST_CART, cart})
const guestCheckOut = email => ({type: GUEST_CHECK_OUT, email})

export const addGuestThunk = email => {
  return dispatch => {
    dispatch(addGuest(email))
  }
}

export const addGuestCartThunk = cart => {
  return dispatch => {
    dispatch(addGuestCart(cart))
  }
}

export const guestCheckOutThunk = email => {
  return async dispatch => {
    console.log('thunk')
    const {data} = await axios.post('api/cart/checkout', email)
    console.log(data)
  }
}

export default function guestReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return {...state, email: action.email}
    case ADD_GUEST_CART:
      return {...state, movies: [...state.movies, action.cart]}
    //   return {
    //     ...state,
    //     userCart: {
    //       ...state.userCart,
    //       movies: [...state.userCart.movies, action.cart]
    //     }
    //   }
    default:
      return state
  }
}
