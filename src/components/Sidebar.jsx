import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import {
  FaHome,
  FaFire,
  FaFilm,
  FaStar,
  FaHeart,
  FaClock,
  FaCog,
} from "react-icons/fa";




function SideBar({ scrollToSection, refs }) {

   

   const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: FaHome,
    ref: refs.heroRef,
},

  {
    id: 2,
    name: "Trending",
    icon: FaFire,
    ref: refs.trendingRef,
  },

  {
    id: 3,
    name: "Popular",
    icon: FaFilm,
    ref: refs.popularRef,
  },

  {
    id: 4,
    name: "Top Rated",
    icon: FaStar,
    ref: refs.topRatedRef,
  },

  {
    id: 5,
    name: "Upcoming",
    icon: FaPlay,
    ref: refs.upcomingRef,
  },

  {
    id: 6,
    name: "Now Playing",
    icon: FaHeart,
    ref: refs.nowPlayingRef,
  },
];


        

    return(
        
        <aside className=" min-h-screen w-[164px] py-4 flex bg-black text-white px-4">
            <nav className="flex flex-col h-full justify-between">
                <ul className="space-y-2">

                   {menuItems.map((item)=>{

                        const Icon = item.icon
                    return(
                        <li className="flex items-center gap-4 py-2 cursor-pointer text-[10px]  hover:bg-gray-800 transition-all duration-200 rounded-lg w-full px-3 " style={{ fontFamily: "Poppins, sans-serif" }} key={item.id}
                        onClick={() => item.ref && scrollToSection(item.ref)}
                        
                        >
                            <Icon className="text-lg"
                            />
                            {item.name}
                        </li>

                    )

                   })} 
                  
                </ul>
                   

          
                    
            </nav>
        </aside>
        
    )

}

export default SideBar