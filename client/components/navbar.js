import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {deleteCart, getUserCartById} from '../store/cartReducer'

const Navbar = ({handleClick, isLoggedIn, id}) => (
  <div className="navbar">
    <h1>LOGO</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <input type="text" className="input" placeholder="Search..." />
          <Link to={`/cart/${id}`}>Shopping Cart</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/home">Profile</Link>
          <Link to="/movies"> Movies </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <input type="text" className="input" placeholder="Search..." />
          <Link
            to="/login"
            onClick={() => this.props.handleLogin(this.props.id)}
          >
            Login
          </Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/movies"> Movies </Link>
          {/* <Link to="/menu">Menu</Link> */}
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    id: state.user.id,
    cart: state.cart.userCart,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(deleteCart())
      dispatch(logout())
    },
    handleLogin: id => {
      dispatch(getUserCartById(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
