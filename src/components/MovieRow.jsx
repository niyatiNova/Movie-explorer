import MovieCard from "./MovieCard";

function MovieRow({ movies, title, setSelectedTrailer }) {
  return (
    <section className="mt-8 md:mt-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
        {title}
      </h2>

      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-max pb-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setSelectedTrailer={setSelectedTrailer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieRow;