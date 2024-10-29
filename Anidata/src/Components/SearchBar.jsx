import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch(''); // Clear the search results
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(inputValue);
    }, 300); // Debounce time of 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for anime..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClear}>Clear</button> {/* Clear button */}
    </div>
  );
};

export default SearchBar;
