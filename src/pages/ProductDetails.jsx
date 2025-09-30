import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  if (!product) return <div>Product not found.</div>;
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} style={{maxWidth: 200}} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)} style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', background: '#61dafb', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
