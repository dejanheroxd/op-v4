import Heading from "../Heading";
import Cards from "./Cards";
import FilterRarityBar from "./FilterRarityBar";
import { PRODUCTS } from "../../products";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { XCircle } from "phosphor-react";

function CardsPage() {
  const { clickedRarity, getClickedRarity, getRarity } =
    useContext(ShopContext);
  const [popupData, setPopupData] = useState(null);
  const rarity = popupData ? getRarity(popupData.id, popupData.price) : null;

  function handleTogglePopup(data) {
    setPopupData(data);
  }

  function closePopup() {
    setPopupData(null);
  }

  const boxShadow = popupData
    ? { boxShadow: `0px 0px 30px var(--${rarity}-color)` }
    : { boxShadow: "none" };

  const buttonStyle = popupData
    ? { backgroundColor: `var(--${rarity}-color)` }
    : { backgroundColor: "none" };

  return (
    <div>
      <Heading>
        <p>All Cards</p>
      </Heading>
      {popupData && (
        <div className="flex justify-center items-center bg-black/50 h-full w-full fixed top-0 left-0 z-20">
          <div
            onClick={() => closePopup()}
            style={boxShadow}
            className="relative rounded-lg bg-white h-[710px] w-[310px]"
          >
            <div className="flex justify-center pt-12">
              <div className="w-[185px] h-[250px] border border-black rounded-lg overflow-hidden">
                <img
                  className="object-fill w-full h-full"
                  src={popupData.productImage}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <div className="w-[200px]">
                <p className="font-semibold text-2xl">
                  {popupData.productName}
                </p>
                <div className="flex gap-x-1 mt-1 mb-1">
                  <p className="text-gray-800">Seltenheit:</p>
                  <p
                    style={buttonStyle}
                    className="bg-blue-600 px-[8px] rounded-[5px] text-white"
                  >
                    {rarity}
                  </p>
                </div>
                <p className="text-gray-800">{popupData.description}</p>
              </div>
              <XCircle
                size={33}
                onClick={() => closePopup()}
                className="absolute hover:cursor-pointer hover:text-red-500 duration-200 top-[-3px] right-5 mt-5"
              />
            </div>
          </div>
        </div>
      )}
      <FilterRarityBar />
      <div className="grid grid-cols-1 gap-y-10 mt-10 mb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {PRODUCTS.map((product) => (
          <Cards
            onTogglePopup={handleTogglePopup}
            data={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
