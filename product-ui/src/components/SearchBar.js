// SearchBar.js
import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ value, onChange, resultCount, total }) {
  return (
    <div className="search-wrap">
      <div className="search-input-wrap">
        <span className="search-icon">⌕</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search by name, description, or ID…"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {value && (
          <button className="search-clear" onClick={() => onChange("")}>✕</button>
        )}
      </div>
      {value && (
        <span className="search-hint">
          {resultCount} of {total} products
        </span>
      )}
    </div>
  );
}
