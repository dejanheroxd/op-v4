import { useContext, useState } from "react";

export const ShopContext = useContext(null);

const getDefaultCart() {}

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState();

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
