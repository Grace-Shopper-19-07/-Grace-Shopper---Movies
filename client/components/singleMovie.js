import React from 'react'
import {connect} from 'react-redux'
import {gotMovieById} from '../store/moviesReducer'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getOneMovie(this.props.match.params.id)
  }
  render() {
    return <h1>{this.props.oneMovie.name}</h1>
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    oneMovie: state.oneMovie
  }
}
const mapDispatchToProps = dispatch => ({
  getOneMovie: id => dispatch(gotMovieById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
