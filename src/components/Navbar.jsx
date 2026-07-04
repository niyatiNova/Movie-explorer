import React from "react";
import logo from "../assets/cineverseLogo.png";
import { FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";

function NavBar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="w-full h-20 bg-black text-white flex items-center justify-between px-8 lg:px-12 shadow-lg">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Cineverse Logo"
          className="h-12 md:h-14 w-auto cursor-pointer"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center px-6">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* User Icon */}
      <div className="flex items-center">
        <FaUserCircle
          className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>

    </nav>
  );
}

export default NavBar;