import React, { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/Rating/Rating' ;
import MovieList from './Components/MovieList/MovieList';
import {moviesData} from './Constant/data'
import { Switch } from 'antd';
import { Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Home from './Components/Home/Home';

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
    <Switch>
    <Route exact path='./' > <Home /> </Route>
    <Route exact path='./Components/MovieDetails/MovieDetails.js/:id' > <MovieDetails /> </Route>

    </Switch>
    </div>
  );
}

export default App;
