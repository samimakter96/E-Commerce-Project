import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Contents from './components/Contents';



function App() {

  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
}

export default App;