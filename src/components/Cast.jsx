import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../api/tmdb";
import "../styles/Cast.css";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className="cast-container">
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map((actor) => (
          <div key={actor.id} className="cast-card">
            <img
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : "/placeholder.png"}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>as {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
