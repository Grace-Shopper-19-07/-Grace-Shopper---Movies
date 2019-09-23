import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {CheckOutThunk, getUserCartById} from '../store/cartReducer'

class Footer extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.renderCart()
  }
  render() {
    return (
      <div className="footer">
        <Link to="./contact">Contact Us</Link>
        <Link to="./about">About Us</Link>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    renderCart: () => {
      dispatch(getUserCartById())
    }
  }
}

const mapState = state => {
  return {
    user: state.user,
    cart: state.cart.userCart
  }
}
export default connect(mapState, mapDispatch)(Footer)
