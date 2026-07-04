import React from "react";
import { FaPlay, FaStar, FaCalendarAlt } from "react-icons/fa";
import { fetchMovieTrailer } from "../services/MovieApi";

function MovieCard({ movie, setSelectedTrailer }) {
  const handlePlay = async () => {
    try {
      const trailer = await fetchMovieTrailer(movie.id);

      if (trailer) {
        setSelectedTrailer(trailer.key);
      } else {
        alert("Trailer not available");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to load trailer");
    }
  };

  return (
    <div
      className="
        group
        w-40
        sm:w-44
        md:w-52
        lg:w-56
        xl:w-64
        flex-shrink-0
        cursor-pointer
        rounded-2xl
        overflow-hidden
        bg-zinc-900
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="
            w-full
            h-[240px]
            sm:h-[270px]
            md:h-[300px]
            lg:h-[340px]
            xl:h-[380px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />

        <button
          onClick={handlePlay}
          className="
            absolute
            inset-0
            m-auto
            w-10
            h-10
            md:w-12
            md:h-12
            lg:w-16
            lg:h-16
            rounded-full
            bg-red-600
            hover:bg-red-700
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <FaPlay className="text-white text-sm md:text-lg lg:text-xl ml-1" />
        </button>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg truncate">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center mt-3 text-gray-300 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{movie.vote_average?.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" />
            <span>
              {movie.release_date
                ? movie.release_date.split("-")[0]
                : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;