import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Trash } from "phosphor-react";

function CartItem(props) {
  const { productName, productImage, price, id } = props.data;
  const {
    addToCart,
    removeFromCart,
    cartItems,
    setCartItemsAmount,
    deleteItemFormCart,
  } = useContext(ShopContext);

  return (
    <div className="border rounded-md relative overflow-hidden flex w-80 h-52 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <p
        onClick={() => deleteItemFormCart(id)}
        className="absolute bg-red-100 p-[6px] duration-200 hover:shadow-lg hover:cursor-pointer rounded-full top-9 right-7"
      >
        <Trash className="text-red-800" size={17} />
      </p>
      <img className="w-36 object-fill" src={productImage}></img>
      <div className="flex flex-col ml-3 justify-around">
        <div>
          <div className="font-bold">{productName}</div>
          <div className="text-gray-800">${price}</div>
        </div>
        <div className="flex h-8 items-center">
          <button
            onClick={() => removeFromCart(id)}
            className="border rounded-l-md bg-slate-200 px-[10px]"
          >
            -
          </button>
          <input
            onChange={(e) => setCartItemsAmount(id, Number(e.target.value))}
            value={cartItems[id]}
            className="border text-center w-20"
            type="text"
          />
          <button
            onClick={() => addToCart(id)}
            className="border rounded-r-md bg-slate-200 px-[7px]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
