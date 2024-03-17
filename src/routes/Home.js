import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year', { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies)
        console.log('fetch completed!');
        setLoading(false);

      })
  }, [])
  console.log(movies);
  return (
    <div>
      {loading ? <h1>loading...</h1> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
