import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

function SearchBar() {
  const [isSearchBarAcitve, setIsSearchBarActive] = useState(false);

  return (
    <div className="flex justify-center pt-5 pb-4">
      <div className="relative">
        <MagnifyingGlass
          size={20}
          className="absolute text-gray-600 top-[4px] left-3"
        />
        <input
          placeholder="Search"
          type="text"
          className="border h-7 pl-10 focus:outline-none text-gray-600 border-gray-500 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SearchBar;
