import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUserCartById} from '../store/cartReducer'

/**
 * COMPONENT
 */
// export const UserHome = props => {
export class UserHome extends React.Component {
  componentDidMount() {
    // this.props.renderCart()
  }

  render() {
    const email = this.props.email
    return (
      <div>
        <h3>Welcome, {email}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    renderCart: id => {
      dispatch(getUserCartById())
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
