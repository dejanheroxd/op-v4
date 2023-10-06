import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Cards(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="mx-auto">
      <div className="w-40 border-2 hover:shadow-[0px_0px_30px_rgb(0,0,0,0.8)] hover:scale-110 duration-300 relative hover:-translate-y-3 border-black h-60 rounded-lg overflow-hidden">
        <img
          className="w-full h-full duration-300 hover:cursor-pointer object-center"
          src={productImage}
          alt=""
        />
        <div className="absolute bottom-0 flex justify-center items-center h-10 bg-black/60 w-full left-0">
          <div className="text-white font-semibold">{productName}</div>
        </div>
      </div>
      <div className="flex justify-between px-5 mt-3">
        <button className="border w-12 pb-[2px] text-white rounded-md border-none bg-violet-500">
          Epic
        </button>
        <p>$1200</p>
      </div>
      <div className="mt-3">
        <button className="border duration-100 hover:bg-black hover:text-white w-full border-black pb-[2px] rounded-md">
          <div
            onClick={() => addToCart(id)}
            className="flex justify-center items-center gap-x-2"
          >
            Add
          </div>
        </button>
      </div>
    </div>
  );
}

export default Cards;
