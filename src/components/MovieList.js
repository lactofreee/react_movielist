import Movie from "./Movie";
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  return (
    <div>
      <div>{movies.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          coverImg={movie.medium_cover_image?movie.medium_cover_image:null} />
      ))}
      </div>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    coverImg: PropTypes.string
  })).isRequired
};

export default MovieList;