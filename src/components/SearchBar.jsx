import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchBar({searchQuery,setSearchQuery}){

    return(
       <div className="flex h-[25px] px-3 py-3 justify-center gap-2 items-center w-96 rounded-lg bg-zinc-900 text-white placeholder:text-gray-400">
        <FaSearch className="text-gray-400"/>
        <input className="flex-1 bg-transparent outline-none" type="text"
        placeholder="Search movies ..."
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />
       </div>

    )
}
export default SearchBar