import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { ContCards, ContSpinner,H1SeccionPeliculas } from '../Styled/Styles'
import { Spinner } from 'react-bootstrap';

const ApiFetch = ({ dato, datoSearch }) => {

    let url = ''
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)


    if (datoSearch.length > 0) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=en-US&query=${datoSearch}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA`
    }

    useEffect(() => {

        obtenerDatos()
        
        

    }, [datoSearch])


    useEffect(() => {

        fetchScroll()

    }, [page])

    const obtenerDatos = async () => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
        
        
    }

    const fetchScroll = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=${page}&language=es-LA`)
        const data = await res.json()

        setMovies([...movies, ...data.results])
        
    }
    const scrollToEnd = () => {
        setPage(page + 1)
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    return (
        <div>
            <H1SeccionPeliculas>{dato}</H1SeccionPeliculas>
            <ContCards>
                {
                   
                    dato == 'Todas las peliculas' ?
                        movies.map(data => (
                            <Cards
                                key={data.id}
                                personaje={data}
                            />
                        )) : dato == 'Peliculas con mas calificacion' ?
                            movies.filter(vote => vote.vote_average >= 7).map(data => (
                                <Cards
                                    key={data.id}
                                    personaje={data}
                                />
                            )) : dato == 'Peliculas con menos calificacion' ?
                                movies.filter(voto => voto.vote_average < 7).map(data => (
                                    <Cards
                                        key={data.id}
                                        personaje={data}
                                    />
                                )) : console.log('no existe')
                }
            </ContCards>
            <ContSpinner>
                <Spinner animation="border" variant="warning" />
            </ContSpinner>
        </div>
    )
}

export default ApiFetch
