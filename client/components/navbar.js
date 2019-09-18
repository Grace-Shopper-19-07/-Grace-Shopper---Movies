import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>
      <Link to="/">LOGO</Link>
    </h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <input type="text" className="input" placeholder="Search..." />
          <Link to="/shopping-cart">Shopping Cart</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/home">Profile</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <input type="text" className="input" placeholder="Search..." />
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
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
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
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
