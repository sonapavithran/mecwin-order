import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import './subheader.css';

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="toggle-search">
        <button className="toggle-button">☰</button> {/* Two-line toggle button */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search by Order Id, Employee Id"
          />
        </div>
      </div>
      <button className="performance-button">Performance Evaluation</button>
    </div>
  );
};

export default SubHeader;
