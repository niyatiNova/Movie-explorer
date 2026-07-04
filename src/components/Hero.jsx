import { fetchMovieTrailer } from "../services/MovieApi";
import { FaPlay } from "react-icons/fa";

function HeroSection({ movies, setSelectedTrailer }) {
  if (movies.length === 0) {
    return (
      <div className="h-[650px] flex items-center justify-center bg-black text-white text-2xl">
        Loading...
      </div>
    );
  }

  const movie = movies[0];

  const handlePlay = async () => {
    const trailer = await fetchMovieTrailer(movie.id);

    if (trailer) {
      setSelectedTrailer(trailer.key);
    } else {
      alert("Trailer not available");
    }
  };

  return (
    <section className="relative h-[650px] w-full overflow-hidden rounded-2xl">
      {/* Background Image */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl ml-16 lg:ml-24 text-white z-10">
          <h1
            className="text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {movie.title}
          </h1>

          <div
            className="flex items-center gap-8 mt-6 text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>📅 {movie.release_date}</span>
          </div>

          <p
            className="mt-6 text-gray-300 text-lg leading-8 line-clamp-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {movie.overview}
          </p>

          <button
            onClick={handlePlay}
            className="mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <FaPlay />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;