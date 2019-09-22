import React from 'react'
import {connect} from 'react-redux'
import {getMovie, addMovieThunk} from '../store/moviesReducer'
import {getUserCartById, addGuestCartThunk} from '../store/cartReducer'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
    // if (this.props.user.id) {
    //   this.props.renderCart(this.props.user.id)
    // }
  }
  render() {
    const {name, image, description, genre, year, price} = this.props.oneMovie
    const movie = {
      movieId: this.props.match.params.id,
      orderId: this.props.cart.id,
      quantity: 1
    }
    const cart = this.props.oneMovie

    console.log(this.props)
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>{genre}</p>
        <p>{year}</p>
        <p>{description}</p>
        <p>${price / 100}</p>
        <button
          onClick={() => {
            if (this.props.user.id) {
              this.props.addMovieThunk(movie)
            } else {
              this.props.addGuestCartThunk(cart)
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.all,
    oneMovie: state.movies.oneMovie,
    cart: state.cart.userCart,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => ({
  getMovie: id => {
    dispatch(getMovie(id))
  },
  addMovieThunk: movie => {
    dispatch(addMovieThunk(movie))
  },
  renderCart: id => {
    dispatch(getUserCartById(id))
  },
  addGuestCartThunk: cart => {
    dispatch(addGuestCartThunk(cart))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
