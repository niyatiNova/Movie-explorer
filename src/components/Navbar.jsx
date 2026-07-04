import React from "react";
import logo from "../assets/cineverseLogo.png";
import { FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";

function NavBar({ searchQuery, setSearchQuery }) {
  return (
    <nav
      className="
        bg-black
        text-white
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        px-4
        md:px-8
        py-4
      "
    >
      <img
        src={logo}
        alt="CineVerse Logo"
        className="h-10 md:h-12 w-auto"
      />

      <div className="w-full md:w-auto flex justify-center">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <FaUserCircle
        className="
          text-3xl
          hover:scale-110
          transition-transform
          duration-300
          cursor-pointer
        "
      />
    </nav>
  );
}

export default NavBar;