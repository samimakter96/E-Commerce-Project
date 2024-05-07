import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Contents from './components/Contents';
import Cart from './components/Cart';



function App() {

  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const closeCart = () => {
    setShowCart(false)
  }

  return (
    <>
    <div>

      <Header toggleCart={toggleCart}/>
      <Contents />
      <Footer />
      {showCart && <Cart closeCart={closeCart}/>}
    </div>
    </>
  );
}

export default App;