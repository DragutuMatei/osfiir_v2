import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar({ onSearch, loading }) {
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
        placeholder="Nr. matricol/Vol. Matricol/an  ex:243/11C/2023"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button" disabled={loading}>
        {loading? "Loading..." :"Caută"}
      </button>
    </div>
  );
}

export default SearchBar;
