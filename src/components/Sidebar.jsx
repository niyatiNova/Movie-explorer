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
    <aside className="min-h-screen w-60 bg-black text-white px-5 py-8 shadow-xl">

      <nav className="h-full">

        <ul className="space-y-4">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.id}
                onClick={() => item.ref && scrollToSection(item.ref)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-red-600 hover:translate-x-2"
              >
                <Icon className="text-2xl" />

                <span
                  className="text-lg font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.name}
                </span>
              </li>
            );
          })}

        </ul>

      </nav>

    </aside>
  );
}

export default SideBar;