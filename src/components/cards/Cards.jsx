import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";

function Cards(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, getRarity, clickedFilterRarity } =
    useContext(ShopContext);
  const [showCard, setShowCard] = useState(true);

  const rarity = getRarity(id, price);

  const cardStyle = {
    boxShadow: `0px 0px 30px transparent`,
  };

  const buttonStyle = {
    backgroundColor: `var(--${rarity}-color)`,
  };

  useEffect(() => {
    if (clickedFilterRarity && rarity !== clickedFilterRarity) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  }, [clickedFilterRarity, rarity]);

  return showCard ? (
    <div className="mx-auto">
      <div
        style={cardStyle}
        className={`w-40 border hover:scale-110 duration-300 relative hover:-translate-y-3 border-black h-60 rounded-lg overflow-hidden`}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0px 0px 30px var(--${rarity}-color)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0px 0px 30px transparent`;
        }}
      >
        <img
          className="w-full h-full duration-300 hover:cursor-pointer object-center"
          src={productImage}
          alt=""
        />
        <div className="absolute hover:cursor-pointer bottom-0 flex justify-center items-center h-10 bg-black/60 w-full left-0">
          <div className="text-white font-semibold">{productName}</div>
        </div>
      </div>
      <div className="flex justify-around mt-3">
        <button
          style={buttonStyle}
          className={`border px-2 pb-[2px] text-white rounded-md border-none ${rarity}`}
        >
          {rarity}
        </button>
        <p>${price}</p>
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
  ) : null;
}

export default Cards;
