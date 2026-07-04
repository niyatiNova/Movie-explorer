import React from "react";
import {
  FaHome,
  FaFire,
  FaFilm,
  FaStar,
  FaHeart,
  FaPlay,
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

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-black text-white px-4 py-6">
      <nav className="w-full">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.id}
                onClick={() => item.ref && scrollToSection(item.ref)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-zinc-800 transition-all duration-300 text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Icon className="text-xl" />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;