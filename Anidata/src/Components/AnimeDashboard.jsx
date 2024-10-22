import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Filters from './Filters';
import AnimeList from './AnimeList';

const AnimeDashboard = () => {
  const [animeList, setAnimeList] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        setAnimeList(response.data.data); 
        setFilteredAnime(response.data.data);  
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchAnime();
  }, []);

  // Summary Statistics
  const totalAnime = animeList.length;
  const avgRating = animeList.reduce((acc, anime) => acc + anime.score, 0) / totalAnime || 0;

  const topGenre = animeList
    .flatMap((anime) => anime.genres.map((g) => g.name))
    .reduce((acc, genre) => {
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});

  const mostCommonGenre = Object.keys(topGenre).reduce((a, b) => (topGenre[a] > topGenre[b] ? a : b), '');

  // Handle Search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const searchResults = animeList.filter((anime) =>
      anime.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredAnime(searchResults);
  };

  // Handle Filters
  const filterByGenre = (genre) => {
    const filtered = animeList.filter((anime) =>
      anime.genres.some((g) => g.name === genre)
    );
    setFilteredAnime(filtered);
  };

  const filterByRating = (minRating) => {
    const filtered = animeList.filter((anime) => anime.score >= minRating);
    setFilteredAnime(filtered);
  };

  return (
    <div>
      <h1>Anime Dashboard</h1>

      {/* Summary Statistics */}
      <div className="statistics">
        <p>Total Anime: {totalAnime}</p>
        <p>Average Rating: {avgRating.toFixed(2)}</p>
        <p>Most Common Genre: {mostCommonGenre}</p>
      </div>

      {/* SearchBar Component */}
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Filters Component */}
      <Filters onFilterByGenre={filterByGenre} onFilterByRating={filterByRating} />

      {/* AnimeList Component */}
      <AnimeList anime={filteredAnime} />
    </div>
  );
};

export default AnimeDashboard;
