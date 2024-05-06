import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Nav className="mx-auto gap-5 header-names">
            <Nav.Link href="#home" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#store" style={{ color: 'white' }}>
              Store
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <button className="bg-dark border border-info rounded py-1 px-3 text-light text-decoration-none">
              Cart <span>0</span>
            </button>
          </Nav>
        </Container>
      </Navbar>
      <h1>The Generics</h1>
    </header>
  );
}

export default Header