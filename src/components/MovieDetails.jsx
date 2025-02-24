import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.png"} alt={movie.title} />
      <div className="details-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button onClick={() => navigate(-1)}>⬅️ Back to Movies</button>
        <nav>
          <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
