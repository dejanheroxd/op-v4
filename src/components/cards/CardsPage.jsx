import Heading from "../Heading";
import Cards from "./Cards";
import FilterRarityBar from "./FilterRarityBar";
import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CardsPage() {
  const { clickedRarity, getClickedRarity } = useContext(ShopContext);

  return (
    <div>
      <Heading>
        <p>All Cards</p>
      </Heading>
      <FilterRarityBar />
      <div className="grid grid-cols-1 gap-y-10 mt-10 mb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {PRODUCTS.map((product) => (
          <Cards data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
