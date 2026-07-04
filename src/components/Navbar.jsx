import React from "react"
import logo from "../assets/cineverseLogo.png"
import { FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";



function NavBar({searchQuery,setSearchQuery}){

    return(
         <>
        
          <nav className=" h-16 text-sm flex justify-between gap-4 items-center bg-black text-white px-8 py-4 w-full">
            <div>
                <img src= {logo} 
                alt="cineverseLogo"
                className="h-10 w-auto"
                 />
            </div>

            <div>
                <SearchBar 
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}/>
            </div>

            <div className="flex items-center gap-3">
                <FaUserCircle className="text-xl hover:scale-110 duration-300 transition-transform cursor-pointer"/>
            </div>

          </nav>
        

    </>
    
    )
   
}


export default NavBar