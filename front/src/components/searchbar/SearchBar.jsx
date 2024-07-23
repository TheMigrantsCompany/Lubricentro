import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex">
      <TextInput
        type="text"
        placeholder="Buscar productos/servicios"
        value={query}
        onChange={handleInputChange}
        className="flex-grow border rounded-md p-2"
      />
      <Button 
        onClick={handleSearch} 
        className="ml-1 text-sm py-1 px-1  bg-red-600 hover:bg-red-700 text-white"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;