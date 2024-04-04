import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="w-full justify-center">
      <form className="relative flex justify-center w-full">
        <div className="relative h-8">
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-8 p-4 rounded-full focus:outline-[#00B4D8] bg-slate-100"
          />
          <button className="absolute right-1 top-4 text-zinc-900 -translate-y-1/2 p-2 rounded-full">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
