import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">Super Shope</Link>
    <ul>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/checkout">Checkout</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/dashboard/analytics">Analytics</Link></li>
      <li><Link to="/dashboard/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navbar;
