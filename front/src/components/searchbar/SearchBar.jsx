import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleReset = () => {
    setSearchQuery('');
  };

  return (
    <div className="form relative flex justify-end bg-white antialiased dark:bg-gray-900 p-4">
      <form className="form relative" onSubmit={handleSubmit}>
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1" aria-label="Search">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input rounded-full px-8 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md text-slate-500"
          placeholder="Buscar"
          value={searchQuery}
          onChange={handleInputChange}
          required
          type="text"
          aria-label="Search products"
        />
        <button type="button" onClick={handleReset} className="absolute right-3 -translate-y-1/2 top-1/2 p-1" aria-label="Clear search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

