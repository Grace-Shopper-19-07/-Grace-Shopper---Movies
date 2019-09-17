// import axios from 'axios'

// const GET_MOVIES = 'GET_MOVIES'

// const initialState = {
//   all: {},
// }
// const gotMovies = movies => ({
//   type: GET_MOVIES,
//   movies
// })

// export const getMovies = () => {
//   return async dispatch => {
//     const { data } = await axios.get('/api/movies')
//     dispatch(gotMovies(data))
//   }
// }

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GET_MOVIES:
//       return state.all
//     default:
//       return state
//   }
// }
