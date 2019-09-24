import axios from 'axios'

const initialState = {email: ''}

const ADD_GUEST = 'ADD_GUEST'
const ADD_GUEST_CART = 'ADD_GUEST_CART'
const GUEST_CHECK_OUT = 'GUEST_CHECK_OUT'

const addGuest = email => ({type: ADD_GUEST, email})
const guestCheckOut = email => ({type: GUEST_CHECK_OUT, email})

export const addGuestThunk = email => {
  return dispatch => {
    dispatch(addGuest(email))
  }
}

export const guestCheckOutThunk = email => {
  return async dispatch => {
    await axios.post('api/cart/checkout', {email: email})
  }
}

export default function guestReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return {...state, email: action.email}
    default:
      return state
  }
}
