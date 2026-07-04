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
        w-64
        flex-shrink-0
        cursor-pointer
        rounded-2xl
        overflow-hidden
        bg-zinc-900
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Poster */}
      <div className="relative h-[380px] overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play Button */}
        <button
          onClick={handlePlay}
          className="
            absolute
            inset-0
            m-auto
            w-16
            h-16
            rounded-full
            bg-red-600
            hover:bg-red-700
            text-white
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <FaPlay className="text-xl ml-1" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold truncate">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center mt-3 text-gray-300 text-sm">
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