// Adventure.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Abc from '../abc/abc'; // Import the Abc component

const Adventure = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=7543524441a260664a97044b8e2dc621&with_genres=12&count=8';

        axios
            .get(API_URL)
            .then((response) => {
                const movieData = response.data.results.slice(0, 10);
                console.log('movieData:', movieData);
                setMovies(movieData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return <Abc
        movieData={movies}
        genre="Adventure"
    />; // Passing the movieData to the Abc component
};

export default Adventure;
