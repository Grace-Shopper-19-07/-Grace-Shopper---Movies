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

class Checkout extends React.Component {
  componentDidMount() {
    if (this.props.user.id) this.props.renderCart()
  }

  render() {
    let totalPrice = 0
    this.props.cart.movies.map(movie => (totalPrice += movie.price))
    if (this.props.cart.movies) {
      return (
        <div className="cart">
          <p>Items In Your Cart:</p>
          {this.props.cart.movies.map(movie => (
            <div key={movie.id} className="cartMovie">
              <img src={movie.image} />
              <p>{movie.name}</p>
              <p>${movie.price / 100}</p>
              <button
                type="submit"
                onClick={() => this.props.removeMovie(movie)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <p>Total Price: ${totalPrice / 100}</p>

          <Link to="/postcheckout">
            <button
              type="submit"
              onClick={() => {
                this.props.checkout(this.props.user.id)
              }}
            >
              Submit Order
            </button>
          </Link>
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

export default connect(mapState, mapDispatch)(Checkout)
