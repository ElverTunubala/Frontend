import React, { Component, useState } from 'react'
import ApiFetch from '../Components/Cards/ApiFetch'

import NavBar from '../Components/NavBar'


const AppBM = () => {

    const [seccion,setSeccion] = useState('Todas las peliculas')
    const [search,setSearch] = useState('')
    const [movieCarousel,setMovieCarousel] = useState('')
    

    

    return (
        <div>
           <NavBar estado={setSeccion} estadoSearch={setSearch}/>
           
           <ApiFetch dato={seccion} datoSearch={search} dataCarousel={setMovieCarousel}/> 
           
        </div>
    )

    
}

export default AppBM

