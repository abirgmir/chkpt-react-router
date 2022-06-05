import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Constant/data' 




const MovieDetails = () => { 
    const {id} = useParams()
    const thismovie= data.find(movie=>movie.id===id)
    
    return(
        
    <div>
    <h1>{thismovie.trailer} </h1>
    </div>

    )
    
};

export default MovieDetails