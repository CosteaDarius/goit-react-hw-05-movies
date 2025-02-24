import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../api/tmdb";
import "../styles/Reviews.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-container">
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews available.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
