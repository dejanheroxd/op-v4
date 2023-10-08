import { XCircle } from "phosphor-react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Popup({ onClosePopup, popupData }) {
  const { getRarity } = useContext(ShopContext);

  const rarity = popupData ? getRarity(popupData.id, popupData.price) : null;

  const boxShadow = popupData
    ? { boxShadow: `0px 0px 30px var(--${rarity}-color)` }
    : { boxShadow: "none" };

  const buttonStyle = popupData
    ? { backgroundColor: `var(--${rarity}-color)` }
    : { backgroundColor: "none" };

  return (
    <div>
      <div className="flex justify-center items-center bg-black/50 h-full w-full fixed top-0 left-0 z-20">
        <div
          onClick={() => onClosePopup()}
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
              <p className="font-semibold text-2xl">{popupData.productName}</p>
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
              onClick={() => onClosePopup()}
              className="absolute hover:cursor-pointer hover:text-red-500 duration-200 top-[-3px] right-5 mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
