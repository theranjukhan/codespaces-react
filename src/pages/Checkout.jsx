import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products before checking out.</p>
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
          <button onClick={clearCart} style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', background: '#61dafb', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
