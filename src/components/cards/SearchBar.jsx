import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function SearchBar() {
  const { getSearchQuery, searchQuery } = useContext(ShopContext);

  return (
    <div className="flex justify-center pt-5 pb-4">
      <div className="relative">
        <MagnifyingGlass
          size={20}
          className="absolute text-gray-600 top-[4px] left-3"
        />
        <input
          value={searchQuery}
          onChange={(e) => getSearchQuery(e.target.value)}
          placeholder="Search"
          type="text"
          className="border h-7 pl-10 focus:outline-none text-gray-600 border-gray-500 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SearchBar;
