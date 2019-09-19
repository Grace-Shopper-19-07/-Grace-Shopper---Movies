import React from 'react'
import {connect} from 'react-redux'
import {getMovie, addMovieThunk} from '../store/moviesReducer'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }
  render() {
    const {name, image, description, genre, year, price} = this.props.oneMovie
    const movie = {
      movieId: this.props.match.params.id,
      orderId: this.props.cart.id,
      quantity: 1
    }
    console.log(this.props)
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>{genre}</p>
        <p>{year}</p>
        <p>{description}</p>
        <p>${price / 100}</p>
        <button onClick={() => this.props.addMovieThunk(movie)}>
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
    cart: state.cart.userCart
  }
}
const mapDispatchToProps = dispatch => ({
  getMovie: id => {
    dispatch(getMovie(id))
  },
  addMovieThunk: movie => {
    dispatch(addMovieThunk(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
