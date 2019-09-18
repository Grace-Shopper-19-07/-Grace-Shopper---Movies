import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const ShoppingCart = ({checkout, isEmpty}) => (
  <div className="cart">
    <h1>Shopping Cart</h1>
    {/* {isEmpty ? ( */}
    <div>
      <p>Your cart is empty</p>
      {/* <a href="#" onClick={checkout}> */}
      <button>Back to Shopping</button>
    </div>
    {/* ) : ( */}
    {/* <div> */}
    {/* <input type="text" className="input" placeholder="Search..." />
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/shopping-cart">Shopping Cart</Link> */}
    {/* <Link to="/menu">Menu</Link> */}
    {/* </div> */}
    {/* )} */}
  </div>
)

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isEmpty: !state.cart...
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(checkout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(ShoppingCart)

/**
 * PROP TYPES
 */
// ShoppingCart.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

export default ShoppingCart
