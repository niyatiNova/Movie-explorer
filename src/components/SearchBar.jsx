import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center w-full max-w-md md:max-w-lg lg:max-w-xl h-12 px-4 gap-3 rounded-full bg-zinc-900 border border-zinc-700 focus-within:border-red-500 transition-all duration-300">
      <FaSearch className="text-gray-400 text-lg" />

      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
      />
    </div>
  );
}

export default SearchBar;