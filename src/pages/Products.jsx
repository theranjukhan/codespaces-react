import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

const Products = () => (
  <div className="products">
    <h2>Products</h2>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} style={{maxWidth: 120}} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
