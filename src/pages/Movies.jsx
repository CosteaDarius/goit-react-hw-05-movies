import React, { useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";
import "../styles/Movies.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="movies-page">
      <h1 className="search-text">Search Movies 🔎</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
