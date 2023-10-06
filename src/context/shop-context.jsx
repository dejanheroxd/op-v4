import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function calcCartAmount() {
    const values = Object.values(cartItems);
    const total = values.reduce((acc, currentValue) => acc + currentValue, 0);
    return total;
  }

  const contextValue = { cartItems, addToCart, removeFromCart, calcCartAmount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
