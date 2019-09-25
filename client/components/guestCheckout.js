import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  addGuestThunk,
  guestCheckOutThunk,
  addMovieThunk
} from '../store/guestReducer'
import {deleteCart} from '../store/cartReducer'

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
                // this.props.addMovie(this.state.cart.movies)
                this.props.deleteCart()
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

const mapState = state => {
  return {
    cart: state.cart.userCart
  }
}

const mapDispatch = dispatch => {
  return {
    addGuest: email => {
      dispatch(addGuestThunk(email))
    },
    guestCheckOut: email => {
      dispatch(guestCheckOutThunk(email))
    },
    deleteCart: () => {
      dispatch(deleteCart())
    },
    addMovie: movie => {
      dispatch(addMovieThunk(movie))
    }
  }
}

export default connect(mapState, mapDispatch)(GuestCheckOut)
