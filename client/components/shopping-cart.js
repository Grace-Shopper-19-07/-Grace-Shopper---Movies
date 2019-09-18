import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {getUserCartById, updateCartThunk} from '../store/cartReducer'

class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.renderCart(this.props.user.id)
  }

  render() {
    console.log(this.props)
    return (
      <div className="cart">
        <div>
          <p>Your cart is empty</p>
          <button>Back to Shopping</button>
        </div>
      </div>
    )
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
