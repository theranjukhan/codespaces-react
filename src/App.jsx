import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import SuperShopee1 from './pages/Dashboard/SuperShopee1';
import SuperShopee1Analytics from './pages/Dashboard/SuperShopee1Analytics';
import SuperShopee1Settings from './pages/Dashboard/SuperShopee1Settings';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main style={{ minHeight: '80vh', padding: '1rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/dashboard" element={<SuperShopee1 />} />
              <Route path="/dashboard/analytics" element={<SuperShopee1Analytics />} />
              <Route path="/dashboard/settings" element={<SuperShopee1Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
