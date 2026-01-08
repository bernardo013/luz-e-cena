import CardMovies from "../cardMovies"
import styles from "./MovieList.module.css"
import type { Movie } from '../../types'


interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
        {movies.map((movie) => <CardMovies key={movie.id} {...movie}/>)}
    </ul>
  )
}

export default MovieList