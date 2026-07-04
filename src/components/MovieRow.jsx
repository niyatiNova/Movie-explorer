import MovieCard from "./MovieCard";

function MovieRow({movies,title,setSelectedTrailer}) {
  return (
    <section className="mt-5">
  <h2 className="text-2xl font-bold text-white mb-6">
    {title}
  </h2>

  <div className="overflow-x-auto">
    <div className="flex gap-6 w-max overflow-x-auto scrollbar-hide">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}
        setSelectedTrailer={setSelectedTrailer} />
      ))}
    </div>
  </div>
</section>
  );
}

export default MovieRow;