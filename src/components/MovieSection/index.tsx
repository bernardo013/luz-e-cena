import styles from './MovieSection.module.css'
import Fieldset from '../FieldSet'
import InputText from '../inputText'
import { FaSearch } from 'react-icons/fa'
import Button from '../button/button'
import MovieList from '../MovieList'
import useFetchMovies from '../hooks/useFetchMovies'




const MovieSection = () => {
    const {movies, error, isLoading} = useFetchMovies()

  return (
        <main>
            <section className={styles.container}>
                <Fieldset variant='secondary'>
                   <InputText placeholder='Buscar Filmes' />
                   <Button variant='icon'>
                    <FaSearch />
                   </Button>
                </Fieldset> 
                <h1 className={styles.titulo}>Em Cartaz</h1>
                {isLoading && <p>Carregando Filmes</p>}
                <MovieList movies={movies}></MovieList>
            </section>
        </main>
    )   
}





export default MovieSection