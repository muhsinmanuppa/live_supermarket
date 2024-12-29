import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search Products"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
