import Heading from "../Heading";
import Cards from "./Cards";
import FilterRarityBar from "./FilterRarityBar";
import { PRODUCTS } from "../../products";
import { useState } from "react";

import Popup from "./Popup";
import SearchBar from "./SearchBar";

function CardsPage() {
  const [popupData, setPopupData] = useState(null);

  function handleTogglePopup(data) {
    setPopupData(data);
  }

  function handleClosePopup() {
    setPopupData(null);
  }

  return (
    <div>
      <Heading>
        <p>All Cards</p>
      </Heading>
      {popupData && (
        <Popup popupData={popupData} onClosePopup={handleClosePopup} />
      )}
      <SearchBar />
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
