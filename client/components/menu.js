// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

// const Menu = (handleClick, isLoggedIn) => (
//   <div>
//     <h1>MENU</h1>
//       {isLoggedIn ? (
//         <div>
//           <Link to="/user-home">Profile</Link>
//           <Link to="/shopping-cart">Shopping Cart</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//           <a href="#" onClick={handleClick}>
//           Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           <Link to="/shopping-cart">Shopping Cart</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//         </div>
//       )}
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Menu)

// /**
//  * PROP TYPES
//  */
// Menu.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
