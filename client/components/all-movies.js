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
          <label>
            <input name="genre" type="checkbox" />
            Action
          </label>
          <label>
            <input name="genre" type="checkbox" />
            Comedy
          </label>
          <label>
            <input name="genre" type="checkbox" />
            Drama
          </label>
          <label>
            <input name="genre" type="checkbox" />
            Romantic
          </label>
          <label>
            <input name="genre" type="checkbox" />
            Marvel
          </label>
        </div>
        <div className="allmovies">
          {this.props.movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.image} />
              <br />
              <p className="movie">
                <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
              </p>
            </div>
          ))}
        </div>
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
