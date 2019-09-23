import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {
  getUserCartById,
  checkOutThunk,
  removeMovieThunk
} from '../store/cartReducer'

class ShoppingCart extends React.Component {
  render() {
    if (this.props.cart.movies) {
      return (
        <div className="cart">
          <div>
            {this.props.cart.movies.map(movie => (
              <div key={movie.id}>
                <img src={movie.image} />
                <p>{movie.name}</p>
                <p>${movie.price / 100}</p>
                <button onClick={() => this.props.removeMovie(movie)}>
                  Remove from Cart
                </button>
              </div>
            ))}
            <Link to="/movies">
              <button>Back to Shopping</button>
            </Link>
            {/* <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link> */}
            <button onClick={() => this.props.checkout(this.props.user.id)}>
              Checkout
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
    removeMovie: movie => {
      dispatch(removeMovieThunk(movie))
    },
    checkout: userId => {
      dispatch(checkOutThunk(userId))
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
