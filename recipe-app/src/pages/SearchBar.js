import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="레시피 검색"
      onChange={(e) => onSearch(e.target.value)}
      className="searchBar"
    />
  );
}

export default SearchBar;
