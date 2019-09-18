import React from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../store/moviesReducer'
import {Link} from 'react-router-dom'

class AllMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies()
  }
  render() {
    return (
      <div>
        <h1>MOVIES</h1>
        {this.props.movies.map((movie, idx) => (
          <div key={idx}>
            <Link className="movie" to={`/movies/${movie.id}`}>
              {movie.name}
            </Link>
            <img src={movie.imageUrl} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.all
  }
}
const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
