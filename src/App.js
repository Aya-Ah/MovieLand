import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard'

// API Key :ba25ee4c

const API_URL = "http://www.omdbapi.com?apikey=ba25ee4c"

const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
   

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=> {searchMovie("batman")},[])


  return (
    <div className="app"> 
    <h1>MovieLand</h1>

    <div className="search">
    <input  
    placeholder="search for movies"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    <img 
    src={SearchIcon} 
    alt="search" 
    onClick={() => searchMovie(searchTerm)}
    />
    </div>

    {movies?.length > 0
    ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>

    ) : (
      <div className='empty'>
        <h2>No movies found</h2>
      </div>
      )}
      </div>
    );
}

export default App;





/* Counter App
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() =>{ setCounter(100)}, [])
   the useEffect it's hook has 2 parameter , first on is function that it's call 
  every time the var(the second parmeter of the hook) change . if the second parameter empty 
  the hook will call just when page reloud

  return (
    <div className='App'>
      <button onClick={ () => {setCounter(counter-1)}}>-</button>
      <h2>{counter}</h2>
      <button onClick={ () => {setCounter(counter+1)}}>+</button>
    </div>
  );
} */
