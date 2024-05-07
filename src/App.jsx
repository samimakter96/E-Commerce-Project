import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './pages/About/About';
import Contents from './components/Contents';
import Cart from './components/Cart/Cart';
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
            <Route path="/" element={<Contents />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
          {showCart && <Cart closeCart={closeCart} />}
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
