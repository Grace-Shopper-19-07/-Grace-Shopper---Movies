import React from 'react'
import {Link} from 'react-router-dom'
import {getUserCartById} from '../store/cartReducer'
import {connect} from 'react-redux'

// const Footer = () => (
//   <div className="footer">
//     <Link to="./contact">Contact Us</Link>
//     <Link to="./about">About Us</Link>
//   </div>
// )

class Footer extends React.Component {
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
    renderCart: id => {
      dispatch(getUserCartById())
    }
  }
}

export default connect(null, mapDispatch)(Footer)
