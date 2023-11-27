
import React from 'react';

const Card = ({ movieData, onClose }) => {
  if (!movieData) {
    return null; // Render nothing if movieData is undefined
  }

  return (
    <div className="movie-details-card">
      <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt={movieData.title} />
      <div className="movie-info">
              <h1 className="movie-title">{movieData.title}</h1>
              <p className="movie-description">{movieData.overview}</p>
              <button className="play-button">Play</button>
            </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Card;

