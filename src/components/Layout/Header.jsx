import { Container, Nav, Navbar } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({toggleCart}) => {

  const {cart} = useCart()

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Nav className="mx-auto gap-5 header-names">
            <NavLink to="/home" style={{ color: 'white' }}>
              Home
            </NavLink>
            <NavLink to="/store" style={{ color: 'white' }}>
              Store
            </NavLink>
            <NavLink to="/about" style={{ color: 'white' }}>
              About
            </NavLink>
          </Nav>
          <Nav>
            <button onClick={toggleCart} className="bg-dark border border-info rounded py-1 px-3 text-light text-decoration-none">
              Cart <span>{cart.length}</span>
            </button>
          </Nav>
        </Container>
      </Navbar>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header