import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 product-card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <small className="text-muted">Category: {product.category}</small>
      </div>
    </div>
  );
};

export default ProductCard;
