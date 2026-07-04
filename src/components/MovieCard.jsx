import React from "react";
import { FaPlay } from "react-icons/fa";
import { fetchMovieTrailer } from "../services/MovieApi";

function MovieCard({ movie, setSelectedTrailer }) {

  const handlePlay = async () => {
    const trailer = await fetchMovieTrailer(movie.id);

    if (trailer) {
      setSelectedTrailer(trailer.key);
    } else {
      alert("Trailer not available");
    }
  };

  return (
    <div className="group w-64 flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-105">

      <div className="relative overflow-hidden rounded-2xl shadow-xl">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Play Button */}
        <button
          onClick={handlePlay}
          className="absolute inset-0 m-auto
                     w-16 h-16
                     rounded-full
                     bg-red-600
                     flex items-center justify-center
                     opacity-0
                     group-hover:opacity-100
                     transition duration-300"
        >
          <FaPlay className="text-white text-2xl" />
        </button>

      </div>

      <h3 className="mt-4 text-lg font-semibold text-white truncate">
        {movie.title}
      </h3>

      <div className="flex justify-between items-center mt-2 text-gray-300 text-sm">
        <span>⭐ {movie.vote_average?.toFixed(1)}</span>
        <span>{movie.release_date?.split("-")[0]}</span>
      </div>

    </div>
  );
}

export default MovieCard;