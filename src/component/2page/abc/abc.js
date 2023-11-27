// Abc.js
import React from 'react';
import { Link } from 'react-router-dom';
import './abc.css';

const Abc = ({ movieData, genre }) => {
  // Check if movieData is undefined or null
  if (!movieData) {
    return <div>Loading the data 
      ...</div>; // You can replace this with a loading indicator or another UI element
  }

  return (
    <div className="netflix-ui">
      <header className="header">
        <h2>{genre}</h2>
      </header>
      <main className="main-content">
        <div className="movie-container">
          {movieData.map((movie) => (
            <div className="movie" key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ movieData: movie }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Abc;
