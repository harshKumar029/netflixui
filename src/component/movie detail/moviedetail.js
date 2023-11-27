// MovieDetailsPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './moviedetail.css';

const MovieDetailsPage = () => {
  const { state } = useLocation();
  const movieData = state ? state.movieData : null;

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="movie-details-container"
      style={{
        background: `url('https://image.tmdb.org/t/p/original${movieData.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="movie-details">
        <div className="movie-info">
          <h1 className="movie-title">{movieData.title}</h1>
          <p className="movie-description">{movieData.overview}</p>
          <button className="play-button">Play</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
