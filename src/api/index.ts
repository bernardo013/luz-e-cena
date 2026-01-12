import axios from 'axios'
import type { Movie } from '../types'

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<{ movies: Movie[] }>('/movies.json')
  return response.data.movies
}
