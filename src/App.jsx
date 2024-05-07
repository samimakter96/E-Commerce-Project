import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Contents from './components/Contents';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';

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
      <CartProvider>
        <Header toggleCart={toggleCart} />
        <Contents />
        <Footer />
        {showCart && <Cart closeCart={closeCart} />}
      </CartProvider>
    </>
  );
}

export default App;
