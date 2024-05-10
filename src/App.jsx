import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Contents from './components/Contents';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/contact/ContactUs';
import { CartProvider } from './components/context/CartContext';
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
        <CartProvider>
          <Header toggleCart={toggleCart} />
          <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/store" element={<Contents />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
          <Footer />
          {showCart && <Cart closeCart={closeCart} />}
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
