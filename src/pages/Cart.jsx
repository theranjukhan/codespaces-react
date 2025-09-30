import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{listStyle: 'none', padding: 0}}>
            {cart.map((item, idx) => (
              <li key={idx} style={{marginBottom: '1rem'}}>
                <img src={item.image} alt={item.name} style={{width: 40, verticalAlign: 'middle', marginRight: 8}} />
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
          <button onClick={clearCart} style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', background: '#ff5252', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
