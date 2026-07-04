import React from "react";
import { FaPlay } from "react-icons/fa";
import { fetchMovieTrailer } from "../services/MovieApi";


function MovieCard({movie,setSelectedTrailer}){

  const handlePlay = async () => {
    const trailer = await fetchMovieTrailer(movie.id);

    if (trailer) {
        setSelectedTrailer(trailer.key);
    } else {
        alert("Trailer not available");
    }
};

    return(
   <div className="group w-48 flex-shrink-0 cursor-pointer hover:scale-105 transition">

  <div className="relative">

    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      className="w-full h-[280px] object-cover rounded-xl"
    />

    <button
      className="absolute inset-0 m-auto
                 w-12 h-12
                 rounded-full
                 bg-red-600
                 flex items-center justify-center
                 opacity-0
                 group-hover:opacity-100
                 transition duration-300"
                 onClick={handlePlay}
    >
      <FaPlay className="text-white text-xl" />
    </button>

  </div>



  <h3 className="mt-4 text-sm text-white">
    {movie.title}
  </h3>

  <div className="flex items-center gap-6 mt-2 text-white">
    <span className="text-[10px]">
      ⭐ {movie.vote_average?.toFixed(1)}
    </span>

    <span className="text-[10px]">
      📅 {movie.release_date}
    </span>
  </div>

</div>
    )
}

export default MovieCard