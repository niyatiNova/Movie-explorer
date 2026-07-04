import { fetchMovieTrailer } from "../services/MovieApi";
import { FaPlay } from "react-icons/fa";
function HeroSection({ movies,setSelectedTrailer }) {

 

  if (movies.length === 0) {
  return (
    <div className="h-[550px] flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

const handlePlay = async () => {
    const trailer = await fetchMovieTrailer(movies[0].id);

    if (trailer) {
        setSelectedTrailer(trailer.key);
    } else {
        alert("Trailer not available");
    }
};

  return (
    <div className="relative h-[550px] w-full overflow-hidden">

  
      
      <img
  src={`https://image.tmdb.org/t/p/original${movies[0]?.backdrop_path}`}
  alt={movies[0]?.title}
  className="w-full h-full object-cover"
/>

     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      <div className="absolute top-10 left-10 text-white z-10">
        
    <h1 className="text-4xl font-bold max-w-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
      {movies[0]?.title}
    </h1>

     <div className="flex items-center gap-6 mt-6 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
    <span>⭐ {movies[0]?.vote_average?.toFixed(1)}</span>
    <span>📅 {movies[0]?.release_date}</span>
</div>

    <p className="mt-4 w-[400px] text-[12px] text-gray-300 leading-7 line-clamp-4" style={{ fontFamily: "Poppins, sans-serif" }}>
      {movies[0]?.overview}
    </p>
   

<button className="mt-8 flex items-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-2xl text-lg font-semibold transition" style={{ fontFamily: "Poppins, sans-serif" }}
onClick={handlePlay}><FaPlay/> Watch Teaser</button>
    </div>
    </div>
  );
}



 export default HeroSection