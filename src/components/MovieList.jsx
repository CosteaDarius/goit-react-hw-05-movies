import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieList.css";

const MovieList = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "/placeholder.png"} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
