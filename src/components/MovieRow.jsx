import MovieCard from "./MovieCard";

function MovieRow({ movies, title, setSelectedTrailer }) {
  return (
    <section className="mt-10 px-4">

      <h2 className="text-3xl font-bold text-white mb-6">
        {title}
      </h2>

      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex gap-8 w-max">
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