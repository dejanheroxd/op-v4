import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function FilterRarityBar() {
  const { getClickedRarity } = useContext(ShopContext);

  return (
    <div className="flex justify-center w-full mt-8">
      <div className="border  rounded-md border-black w-[335px] text-center flex ">
        <button
          onClick={() => getClickedRarity("Common")}
          className="border-r w-24 rounded-l-md hover:bg-yellow-300 text-sm border-black px-1"
        >
          Common
        </button>
        <button
          onClick={() => getClickedRarity("Uncommon")}
          className="border-r w-24 hover:bg-yellow-300 text-sm border-black px-1"
        >
          Uncommon
        </button>
        <button
          onClick={() => getClickedRarity("Rare")}
          className="border-r w-24 hover:bg-yellow-300 text-sm border-black px-1"
        >
          Rare
        </button>
        <button
          onClick={() => getClickedRarity("Epic")}
          className="border-r w-24 hover:bg-yellow-300 text-sm border-black px-1"
        >
          Epic
        </button>
        <button
          onClick={() => getClickedRarity("Legendary")}
          className="border-black rounded-r-md hover:bg-yellow-300 text-sm px-1"
        >
          Legendary
        </button>
      </div>
    </div>
  );
}

export default FilterRarityBar;
