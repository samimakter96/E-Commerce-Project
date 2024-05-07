import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Initialize cart state with an empty array

  const addToCart = (product) => {
    // Check if cart exists, if not, initialize it with an empty array
    const updatedCart = cart ? [...cart] : [];

    const existingProductIndex = updatedCart.findIndex(
      (item) => item.title === product.title
    );

    if (existingProductIndex !== -1) {
      // If product already exists in cart, update its quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // If product is not in cart, add it with quantity 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart); // Update cart state
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.title !== product.title)
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
