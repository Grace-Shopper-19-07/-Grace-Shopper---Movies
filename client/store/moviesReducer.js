import axios from 'axios'

const initialState = {
  all: [],
  oneMovie: {}
}

const GET_MOVIES = 'GET_MOVIES'
const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID'

const gotMovies = movies => ({
  type: GET_MOVIES,
  movies
})

const gotMovie = movie => ({
  type: GET_MOVIE_BY_ID,
  movie
})

export const getMovies = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/movies')
    dispatch(gotMovies(data))
  }
}

export const getMovie = id => {
  return async dispatch => {
    console.log('made it here', id)
    const {data} = await axios.get(`/api/movies/${id}`)
    console.log('DATA', data)
    dispatch(gotMovie(data))
  }
}

export default function(state = initialState, action) {
  console.log('ACTION', action)
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        all: action.movies
      }
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        oneMovie: action.movie
      }
    default:
      return state
  }
}
