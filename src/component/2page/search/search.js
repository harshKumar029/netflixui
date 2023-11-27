import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './search.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchListRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const apiEndpoints = [
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
         'https://api.themoviedb.org/3/search/movie?api_key=7543524441a260664a97044b8e2dc621&query=',
    // ... (Add all 10 API endpoints here)
  ];

  const searchInMultipleApis = async () => {
    let results = [];
    for (const endpoint of apiEndpoints) {
      try {
        const response = await axios.get(`${endpoint}${searchTerm}`);
        if (response.data && response.data.results.length > 0) {
          results = response.data.results;
          setShowSearchResults(true); // Display search results if found
          break; // Stop searching if results are found
        }
      } catch (error) {
        console.error('Error fetching from API:', error);
      }
    }
    setSearchResults(results.slice(0, 4));
  };
  
  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      await searchInMultipleApis();
    } else {
      setShowSearchResults(false); // Hide search results if the search term is empty
      setSearchResults([]);
    }
  };
  
  const handleOutsideClick = (event) => {
    if (searchListRef.current && !searchListRef.current.contains(event.target)) {
      setShowSearchResults(false); // Close search results if clicked outside
    }
  };
  
  const handleListItemClick = () => {
    setShowSearchResults(false); // Close search results upon clicking a list item
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for movies or TV shows..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg></button>

      {showSearchResults && (
  <ul className="searchlist" ref={searchListRef}>
    {searchResults.map((result) => (
      <li key={result.id} onClick={handleListItemClick}>
        <Link to={`/movie/${result.id}`} state={{ movieData: result }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt={result.title}
            className="movie-image"
          />
          <div>
            <strong>{result.title}</strong>
            <div className="release-date">Release Date: {result.release_date}</div>
          </div>
        </Link>
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default SearchBar;
