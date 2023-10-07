import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { XCircle } from "phosphor-react";

function FilterRarityBar() {
  const { getClickedRarity, clickedFilterRarity } = useContext(ShopContext);

  return (
    <div className="flex justify-center w-full mt-8">
      <div className="border relative rounded-md border-black w-[335px] text-center flex ">
        <button
          onClick={() => getClickedRarity("Common")}
          className={`${
            clickedFilterRarity === "Common" ? "bg-yellow-300" : ""
          } border-r w-24 rounded-l-md hover:bg-yellow-300 text-sm border-black px-1`}
        >
          Common
        </button>
        <button
          onClick={() => getClickedRarity("Uncommon")}
          className={`${
            clickedFilterRarity === "Uncommon" ? "bg-yellow-300" : ""
          } border-r w-24 hover:bg-yellow-300 text-sm border-black px-1`}
        >
          Uncommon
        </button>
        <button
          onClick={() => getClickedRarity("Rare")}
          className={`${
            clickedFilterRarity === "Rare" ? "bg-yellow-300" : ""
          } border-r w-24 hover:bg-yellow-300 text-sm border-black px-1`}
        >
          Rare
        </button>
        <button
          onClick={() => getClickedRarity("Epic")}
          className={`${
            clickedFilterRarity === "Epic" ? "bg-yellow-300" : ""
          } border-r w-24 hover:bg-yellow-300 text-sm border-black px-1`}
        >
          Epic
        </button>
        <button
          onClick={() => getClickedRarity("Legendary")}
          className={`${
            clickedFilterRarity === "Legendary" ? "bg-yellow-300" : ""
          } border-black rounded-r-md hover:bg-yellow-300 text-sm px-1`}
        >
          Legendary
        </button>
        {clickedFilterRarity !== "" && (
          <div onClick={() => getClickedRarity("")} className="group">
            <XCircle
              size={25}
              className="absolute group-hover:text-red-500 group-active:text-red-700 duration-100 hover:cursor-pointer top-[-27px] right-[-10px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterRarityBar;
