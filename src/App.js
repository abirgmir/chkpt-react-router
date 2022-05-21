import React, { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/Rating/Rating' ;
import MovieList from './Components/MovieList/MovieList';
import {moviesData} from './Constant/data'

function App() {
  const [movies,setMovies]= useState(moviesData )
  const [inputSearch, setInputSearch] = useState("")
  const [rating,setRating] = useState(1)

  const add=(newMovie)=>{
      setMovies([...movies,newMovie])
  }

  return (
    <div className="App">
    <h1> MOVIE APP</h1>
    <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}  />
    <FilterByRate isMovieRating={false} rating={rating} setRating={setRating} />
    <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    <AddMovie add={add} />
    </div>
  );
}

export default App;
