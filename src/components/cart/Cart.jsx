import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import Heading from "../Heading";
import CartCheckoutSummary from "./CartCheckoutSummary";

function Cart() {
  const { cartItems, getPayAmount } = useContext(ShopContext);
  const payAmount = getPayAmount();

  const hasItemsInCart = Object.values(cartItems).some(
    (quantity) => quantity > 0
  );

  return (
    <div>
      <Heading>Cart</Heading>
      {hasItemsInCart ? (
        <div className="flex flex-col gap-y-4 items-center mt-9 mb-12">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem data={product} key={product.id} />;
            }
            return null;
          })}
        </div>
      ) : (
        <div className="text-center pt-3">
          <p>No items in the Cart</p>
        </div>
      )}
      {hasItemsInCart && <CartCheckoutSummary payAmount={payAmount} />}
    </div>
  );
}

export default Cart;
