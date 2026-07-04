import MovieCard from "./MovieCard";

function MovieRow({ movies, title, setSelectedTrailer }) {
  return (
    <section>
      <h2>{title}</h2>

      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-4">
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