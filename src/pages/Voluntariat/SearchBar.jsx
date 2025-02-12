import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Nr. matricol/Vol. Matricol/an  ex:243/11C/2025"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Caută
      </button>
    </div>
  );
}

export default SearchBar;
