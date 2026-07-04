import { fetchMovieTrailer } from "../services/MovieApi";
import { FaPlay } from "react-icons/fa";

function HeroSection({ movies, setSelectedTrailer }) {
  if (movies.length === 0) {
    return (
      <div className="h-[350px] md:h-[650px] flex items-center justify-center bg-black text-white text-xl md:text-3xl">
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
    <section className="relative h-[450px] sm:h-[500px] md:h-[650px] w-full overflow-hidden rounded-2xl">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-6 md:px-12 lg:px-16 text-white">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {movie.title}
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 md:gap-8 mt-4 text-sm md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>📅 {movie.release_date}</span>
          </div>

          <p
            className="mt-5 text-sm md:text-lg text-gray-300 leading-6 md:leading-8 line-clamp-4 md:line-clamp-5 max-w-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {movie.overview}
          </p>

          <button
            onClick={handlePlay}
            className="mt-6 md:mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 px-5 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-xl font-semibold transition-all duration-300 hover:scale-105"
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