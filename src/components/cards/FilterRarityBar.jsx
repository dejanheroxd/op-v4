function FilterRarityBar() {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="border  rounded-md border-black w-[330px] text-center flex ">
        <button className="border-r w-24 rounded-l-md hover:bg-yellow-300 text-xs pb-[2px] border-black px-1">
          Common
        </button>
        <button className="border-r w-24 hover:bg-yellow-300 text-xs pb-[2px] border-black px-1">
          Uncommon
        </button>
        <button className="border-r w-24 hover:bg-yellow-300 text-xs pb-[2px] border-black px-1">
          Rare
        </button>
        <button className="border-r w-24 hover:bg-yellow-300 text-xs pb-[2px] border-black px-1">
          Epic
        </button>
        <button className="border-black rounded-r-md hover:bg-yellow-300 pb-[2px] text-xs px-1">
          Legendary
        </button>
      </div>
    </div>
  );
}

export default FilterRarityBar;
