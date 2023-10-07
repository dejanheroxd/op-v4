import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import Heading from "../Heading";
import { ArrowRight, Lock } from "phosphor-react";
import { visa_icon } from "../../assets/visa_icon.png";
import { mastercard } from "../../assets/mastercard.png";

function Cart() {
  const { cartItems, getPayAmount } = useContext(ShopContext);

  const payAmount = getPayAmount();

  return (
    <div>
      <Heading>Cart</Heading>
      <div className="flex flex-col gap-y-4 items-center mt-9 mb-12">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      <div className="m-5">
        <div className="mb-3 flex justify-between">
          <p className="text-gray-800 font-semibold ">Total</p>
          <p className="text-gray-800 font-semibold ">${payAmount}</p>
        </div>
        <div className="hover:shadow-[0_2px_4px_rgb(0,0,0,0.5)] relative hover:cursor-pointer rounded-md text-center duration-200 bg-blue-800 hover:bg-blue-700 text-white">
          <button className="py-3 font-semibold">Checkout</button>
          <ArrowRight className="absolute top-[16px] right-3" size={19} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
