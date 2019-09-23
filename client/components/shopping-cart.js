import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {
  CheckOutThunk,
  getUserCartById,
  updateCartThunk,
  deleteCart
} from '../store/cartReducer'

class ShoppingCart extends React.Component {
  // componentDidMount() {
  //   this.props.renderCart()
  // }

  render() {
    // console.log(props)
    if (this.props.cart.movies) {
      return (
        <div className="cart">
          <div>
            {this.props.cart.movies.map(movie => (
              <div key={movie.id}>
                <img src={movie.image} />
                <p>{movie.name}</p>
                <p>${movie.price / 100}</p>
              </div>
            ))}
            <button>Back to Shopping</button>
            <button onClick={() => this.props.checkout(this.props.user.id)}>
              {' '}
              Checkout{' '}
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <p>Your cart is empty</p>
        </div>
      )
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    cart: state.cart.userCart
  }
}

const mapDispatch = dispatch => {
  return {
    renderCart: () => {
      dispatch(getUserCartById())
    },
    checkout: userId => {
      dispatch(CheckOutThunk(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(ShoppingCart)

/**
 * PROP TYPES
 */
// ShoppingCart.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
