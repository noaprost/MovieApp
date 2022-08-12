import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie-container">
      <img className="movie-img" src={coverImg} alt={title} />
      <div className="movie-info">
        <h2>
          <Link className="movie-title" to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="summary">
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className="movie-genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
