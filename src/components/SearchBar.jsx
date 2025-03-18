import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(`https://workingbackend-i34e.onrender.com/api/products/search?name=${query}`);
      const data = await response.json();
      onSearch(data); // Send results to parent component
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
  
  );
};

export default SearchBar;
