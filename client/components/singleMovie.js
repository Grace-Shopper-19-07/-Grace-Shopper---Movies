import React from 'react'
import {connect} from 'react-redux'
import {getMovie} from '../store/moviesReducer'

class SingleMovie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }
  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <h1>{this.props.oneMovie.name}</h1>
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
