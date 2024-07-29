import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, searchProducts } from "../../redux/actions/actions";
import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ className }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const re = /^[0-9a-zA-ZÁ-ÿ.:-\s]{0,40}$/;

  useEffect(() => {
    if (query.trim() === "") {
      dispatch(getAllProducts());
    }
  }, [dispatch, query]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (!re.exec(inputValue)) {
      inputValue.length > 40
        ? setError("Invalid Length")
        : setError("Invalid Characters");
      setInputDisabled(true);
    } else {
      setError("");
      setInputDisabled(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(searchProducts(query));
      setError("");
    }
    setInputDisabled(false);
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <TextInput
        type="text"
        placeholder="Ingrese su búsqueda"
        value={query}
        onChange={handleInputChange}
        className="flex-grow border rounded-md p-2 pr-10"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      {error && <p className="error">{error}</p>}
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

