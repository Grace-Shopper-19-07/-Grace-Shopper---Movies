import React from 'react'
import {Link} from 'react-router-dom'
import {getUserCartById} from '../store/cartReducer'
import {connect} from 'react-redux'

class Footer extends React.Component {
  componentDidMount() {
    if (this.props.state.user.id) {
      console.log('props', this.props)
      this.props.renderCart()
    }
  }
  render() {
    console.log('render', this.props)
    return (
      <div className="footer">
        <Link to="./contact">Contact Us</Link>
        <Link to="./about">About Us</Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    state: state
  }
}

const mapDispatch = dispatch => {
  return {
    renderCart: () => {
      dispatch(getUserCartById())
    }
  }
}

export default connect(mapState, mapDispatch)(Footer)
