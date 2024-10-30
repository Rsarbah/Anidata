import React from 'react';

const Filters = ({ genres, onResetFilters, onFilterByGenre, onFilterByRating }) => {
  return (
    <div className="filters">
      <h3>Filter by Genre</h3>
      {genres.map((genre) => (
        <button key={genre} onClick={() => onFilterByGenre(genre)}>
          {genre}
        </button>
      ))}
      <h3>Filter by Rating</h3>
      <button onClick={() => onFilterByRating(8)}>Rating 8+</button>
      <button onClick={() => onFilterByRating(9)}>Rating 9+</button>
      <button onClick={onResetFilters}>Reset Filters</button> {/* Reset filters button */}
    </div>
  );
};

export default Filters;