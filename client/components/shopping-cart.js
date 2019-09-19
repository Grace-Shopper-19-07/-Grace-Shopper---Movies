import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {
  getUserCartById,
  updateCartThunk,
  deleteCart
} from '../store/cartReducer'

class ShoppingCart extends React.Component {
  componentDidMount() {
    if (this.props.user.id) {
      this.props.renderCart(this.props.user.id)
    }
  }

  render() {
    console.log('PROPS FROM SHOPPING CART', this.props)
    if (Object.keys(this.props.user).length === 0) {
      if (!this.props.cart.movies) {
        return <div> Your cart is empty</div>
      }
      return <div />
    }
    if (this.props.cart.movies) {
      return (
        <div className="cart">
          <div>
            {this.props.cart.movies.map((movie, idx) => (
              <div key={idx}>
                <img src={movie.image} />
                <p>{movie.name}</p>
                <p>${movie.price}</p>
              </div>
            ))}
            <button>Back to Shopping</button>
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
    renderCart: id => {
      dispatch(getUserCartById(id))
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
