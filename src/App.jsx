import React, { Suspense, lazy, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './pages/LogIn/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Contents from './components/Contents';
// import Cart from './components/Cart/Cart';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import ContactUs from './pages/contact/ContactUs';
// import ProductDetail from './pages/ProductPage/ProductDetails';
// import LogIn from './pages/LogIn/LogIn';

// User lazy for components to be loaded lazily This approach helps improve the performance of your application by only loading the necessary components when they are needed, reducing the initial load time.

const Contents = lazy(() => import('./components/Contents'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const ContactUs = lazy(() => import('./pages/contact/ContactUs'));
const ProductDetail = lazy(() => import('./pages/ProductPage/ProductDetails'));
const LogIn = lazy(() => import('./pages/LogIn/LogIn'));

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
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route path="/" element={<Contents />} />
                <Route path="/store" element={<Contents />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
              </Routes>
            </Suspense>
            <Footer />
            {showCart && (
              <Suspense fallback={<div>Loading...</div>}>
                <Cart closeCart={closeCart} />
              </Suspense>
            )}
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
