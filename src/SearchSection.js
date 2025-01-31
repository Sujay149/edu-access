import React from 'react';
import { Search } from 'lucide-react';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Find Your Perfect Course</h2>
          <p className="subtitle">Search through thousands of courses and learning materials</p>
        </div>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for courses, materials, or topics..."
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;