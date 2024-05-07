import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function Cart({ closeCart }) {

  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  }

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top:' 42px',
        right: 0,
        bottom: 0,
        width: '300px',
        padding: '20px',
        color: 'white',
        overflowY: 'auto',
        textAlign: 'center',
      }}
    >
      {/* Cart title */}
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          marginBottom: '20px',
          marginTop: '1px',
        }}
      >
        Cart
      </div>
      {/* Close button */}
      <Button
        variant="danger"
        style={{
          position: 'absolute',
          top: '10px',
          right: '16px',
        }}
        onClick={closeCart}
      >
        X
      </Button>
      {/* Map through cart elements and display them */}
      {cart.map((item) => (
        <div
          key={item.title}
          style={{
            display: 'flex',
            borderBottom: '1px solid white',
            marginBottom: '10px',
          }}
        >
          {/* Image */}
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              maxWidth: '100px',
              maxHeight: '100px',
              marginRight: '10px',
            }}
          />
          {/* Product details */}
          <div style={{ flex: 1 }}>
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            {/* Remove button */}
            <Button
              variant="danger"
              size="sm"
              style={{ backgroundColor: 'red', padding: '5px' }}
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;