import React from 'react';

const Filters = ({ onFilterByGenre, onFilterByRating }) => {
  return (
    <div className="filters">
      <h3>Filter by Genre</h3>
      <button onClick={() => onFilterByGenre('Action')}>Action</button>
      <button onClick={() => onFilterByGenre('Comedy')}>Comedy</button>
      <button onClick={() => onFilterByGenre('Drama')}>Drama</button>

      <h3>Filter by Rating</h3>
      <button onClick={() => onFilterByRating(8)}>Rating 8+</button>
      <button onClick={() => onFilterByRating(9)}>Rating 9+</button>
    </div>
  );
};

export default Filters;
