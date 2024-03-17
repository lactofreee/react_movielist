import { Link } from "react-router-dom"
function Movie({ id, title, summary, genres=[], coverImg }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary ? summary : 'no description'}</p>
      <ul>
        {genres.map((genre) =>
          <li key={genre}>{genre}</li>)}
      </ul>
      <img src={coverImg} alt={title} />
    </div>
  )
}

export default Movie;