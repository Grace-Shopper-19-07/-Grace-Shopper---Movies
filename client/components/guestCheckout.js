import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addGuestThunk, guestCheckOutThunk} from '../store/guestReducer'

class GuestCheckOut extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
  }

  handleChange = evt => {
    this.setState({
      email: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.setState({
      email: ''
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Link to="/postcheckout">
            <button
              type="submit"
              onClick={() => {
                this.props.addGuest(this.state.email)
                this.props.guestCheckOut(this.state.email)
              }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addGuest: email => {
      dispatch(addGuestThunk(email))
    },
    guestCheckOut: email => {
      dispatch(guestCheckOutThunk(email))
    }
  }
}

export default connect(null, mapDispatch)(GuestCheckOut)
