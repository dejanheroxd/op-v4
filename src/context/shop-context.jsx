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

  function getRarity(id, price) {
    for (let product of PRODUCTS) {
      if (product.id === id) {
        if (price > 1000 && price < 2000) {
          return "Common";
        } else if (price > 2000 && price < 3000) {
          return "Uncommon";
        } else if (price >= 3000 && price < 4000) {
          return "Rare";
        } else if (price > 4000 && price < 5000) {
          return "Epic";
        } else if (price >= 5000) {
          return "Legendary";
        }
      }
    }
    return "common";
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    calcCartAmount,
    getRarity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
