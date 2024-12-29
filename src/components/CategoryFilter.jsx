import React from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  return (
    <div className="mb-4 text-center">
      <select
        className="form-control d-inline-block"
        style={{ maxWidth: '300px' }}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
