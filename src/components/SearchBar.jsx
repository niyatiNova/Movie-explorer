import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center w-full max-w-xl h-12 bg-zinc-900 rounded-full px-5 shadow-lg border border-zinc-700 focus-within:border-red-500 transition-all duration-300">

      <FaSearch className="text-gray-400 text-lg" />

      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 ml-3 bg-transparent outline-none text-white text-base placeholder:text-gray-400"
      />
    </div>
  );
}

export default SearchBar;