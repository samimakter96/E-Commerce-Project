import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Contents from './components/Contents';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/contact/ContactUs';
import ProductDetail from './pages/ProductPage/ProductDetails';
import LogIn from './pages/LogIn/LogIn';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './pages/LogIn/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Header toggleCart={toggleCart} />
            <Routes>
              <Route path="/" element={<Contents />} />
              <Route path="/store" element={<Contents />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
            <Footer />
            {showCart && <Cart closeCart={closeCart} />}
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
