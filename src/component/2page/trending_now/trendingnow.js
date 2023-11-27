// Trendingnow.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './trendingnow.css'; // Make sure to include your CSS file

const TrendingNow = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=7543524441a260664a97044b8e2dc621&language=en-US&count=30');
                const movieData = response.data.results;
                setMovies(movieData);

                // Randomly set the initial movie index
                const randomIndex = Math.floor(Math.random() * movieData.length);
                setCurrentMovieIndex(randomIndex);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const currentMovie = movies[currentMovieIndex];

    if (!currentMovie) {
        return <div>Loading...</div>;
    }

    const mainStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        // Truncate the text to the maximum length and add ellipsis
        return text.slice(0, maxLength).trim() + '...';
    };
    const MAX_WORDS = 151;

    return (
        <div className="mainhero-ui" style={mainStyle}>
            <Link to={`/movie/${currentMovie.id}`} state={{ movieData: currentMovie }}>
                <div className="mainhero-details">
                    <h1 className="mainhero-title">{currentMovie.title}</h1>
                    <h2>Trending Now</h2>
                    <p className="mainhero-description">{truncateText(currentMovie.overview, MAX_WORDS)}</p>
                    <button className="mainhero-button">Play</button>
                    <button className="mainhero-button2">More Info</button>
                </div>
                <div className='banner-bottom'></div>
            </Link>

        </div>
    );
};

export default TrendingNow;
