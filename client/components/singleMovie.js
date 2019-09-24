import React from 'react'
import {connect} from 'react-redux'
import {getMovie} from '../store/moviesReducer'
import {
  getUserCartById,
  addGuestCartThunk,
  addMovieThunk,
  updateMovieThunk
} from '../store/cartReducer'
import {Link} from 'react-router-dom'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }
  render() {
    const {name, image, description, genre, year, price} = this.props.oneMovie
    console.log(this.props.match.params.id)
    console.log(
      this.props.cart.movies.filter(
        movie => movie.id === this.props.match.params.id
      )
    )
    const movie = {
      movieId: this.props.match.params.id,
      orderId: this.props.cart.id,
      quantity:
        this.props.cart.movies.filter(
          movie => movie.id === this.props.match.params.id
        )[0].ProductOrder.quantity || 1
    }
    // const movieLength = cart.movies.filter(film => film.id === movie.movieId).length
    console.log('movie', movie)
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>{genre}</p>
        <p>{year}</p>
        <p>{description}</p>
        <p>${price / 100}</p>
        <Link to="/movies">
          <button
            onClick={() => {
              if (this.props.user.id) {
                if (movieLength > 0) {
                  movie.quantity += 1
                  this.props.updateMovie(movie)
                } else {
                  this.props.addMovieThunk(movie)
                }
              } else {
                this.props.addGuestCartThunk(cart)
              }
            }}
          >
            Add to Cart
          </button>
        </Link>
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
  },
  updateMovie: movie => {
    dispatch(updateMovieThunk(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
