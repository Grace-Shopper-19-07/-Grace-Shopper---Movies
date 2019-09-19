import React from 'react'
import {connect} from 'react-redux'
import {getMovie} from '../store/moviesReducer'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }
  render() {
    const {name, image, description, genre, year, price} = this.props.oneMovie
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>{genre}</p>
        <p>{year}</p>
        <p>{description}</p>
        <p>{'$' + price / 100}</p>
        <button>Add to Cart</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.all,
    oneMovie: state.movies.oneMovie
  }
}
const mapDispatchToProps = dispatch => ({
  getMovie: id => {
    dispatch(getMovie(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
