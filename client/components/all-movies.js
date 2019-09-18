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
        <div className="filter">
          <p>-------------------------</p>
          <p>THIS IS A FILTER PART</p>
          <p>Genre PlaceHolder</p>
          <label>
            <input name="genre" type="checkbox" />
            Action
          </label>
          <label>
            <input name="genre" type="checkbox" />
            Comedy
          </label>
          <p>FILTER ENDS HERE</p>
          <p>-------------------------</p>
        </div>
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
