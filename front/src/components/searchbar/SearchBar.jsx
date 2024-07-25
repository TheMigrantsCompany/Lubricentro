import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch, className }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <TextInput
        type="text"
        placeholder="Ingrese su busqueda"
        value={query}
        onChange={handleInputChange}
        className="flex-grow border rounded-md p-2 pr-10"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <div 
        onClick={handleSearch} 
        className="absolute right-2 cursor-pointer text-gray-400"
      >
        <FiSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBar;

