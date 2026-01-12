import styles from './MovieSection.module.css'
import Fieldset from '../FieldSet'
import InputText from '../inputText'
import { FaSearch } from 'react-icons/fa'
import Button from '../button/button'
import MovieList from '../MovieList'
import useFetchMovies from '../hooks/useFetchMovies'
import useFiltersMovie from '../hooks/useFiltersMovie'
import type React from 'react'





const MovieSection = () => {
    const {movies, error, isLoading} = useFetchMovies()
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFiltersMovie(movies)

  return (
        <main>
            <section className={styles.container}>
                <Fieldset variant='secondary'>
                   <InputText value={searchTerm} onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} 
                    placeholder='Buscar Filmes' />
                   <Button variant='icon' onClick={handleSearch}>
                    <FaSearch />
                   </Button>
                </Fieldset> 
                <h1 className={styles.titulo}>Em Cartaz</h1>
                {isLoading && <p>Carregando Filmes</p>}
                {error && <p className={styles.error}>{error}</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    )   
}





export default MovieSection