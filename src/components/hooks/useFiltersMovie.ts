import { useEffect, useState } from 'react'
import type { Movie } from '../../types'

const useFiltersMovie = (movies: Movie[]) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])


    useEffect(() => {
        setFilteredMovies(movies)
    }, [movies] ) //depêndecia, o efeito só roda quando movies mudar
    
    const handleSearch = () => {
        const filtered = movies.filter((movie) => 
            movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredMovies(filtered)
    }
    return { searchTerm, setSearchTerm, filteredMovies, handleSearch }
}

export default useFiltersMovie