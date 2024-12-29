import React, { useState } from 'react';
import ProductList from './src/components/ProductList';
import CategoryFilter from './src/components/CategoryFilter';
import SearchBox from './src/components/SearchBox';
import products from './products.json';

const App = () => {
  const [filteredCategory, setFilteredCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filteredCategory ? product.category === filteredCategory : true;
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">Live Super Market</h1>
        <h3 className="text-center mb-4">Products</h3>
        <div className="row mb-4">
          <div className="col-md-6 mb-2 mb-md-0">
            <SearchBox onSearchChange={setSearchQuery} />
          </div>

          <div className="col-md-6">
            <CategoryFilter
              categories={[...new Set(products.map((product) => product.category))]}
              onCategoryChange={setFilteredCategory}
            />
          </div>
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
};

export default App;
