import { useEffect, useState } from 'react'
import type { Movie } from '../../types'
import { getMovies } from '../../api'

const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsloading] = useState<boolean>(false) 
    const [error, setError] = useState<string | null>(null)


    const fetchMovies = async  () => {
        setIsloading(true)
        setError(null)
        
        try{
            const movies = await getMovies()
            setMovies(movies)
        } catch(err){ 
            setError("Erro ao buscar filmes. Tente novamente!")
            console.log(err)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

  return {movies, isLoading, error}
}

export default useFetchMovies