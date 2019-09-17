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

const getOneMovie = movie => ({
  type: GET_MOVIE_BY_ID,
  movie
})

export const getMovies = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/movies')
    dispatch(gotMovies(data))
  }
}

export const gotMovieById = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/movie/${id}`)
    dispatch(getOneMovie(data))
  }
}

export default function(state = initialState, action) {
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
