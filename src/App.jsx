import HeroSection from "./components/Hero"
import NavBar from "./components/Navbar"
import SideBar from "./components/Sidebar"
import MovieCard from "./components/MovieCard"
import MovieRow from "./components/MovieRow"
import TrailerModal from "./components/TrailerModal"
import { useEffect, useState,useRef} from "react";
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  searchMovies,
} from "./services/MovieApi";

function App() {

const heroRef = useRef(null);
const trendingRef = useRef(null);
const topRatedRef = useRef(null);
const popularRef = useRef(null);
const upcomingRef = useRef(null);
const nowPlayingRef = useRef(null);
const [selectedTrailer, setSelectedTrailer] = useState(null);
const [debouncedQuery, setDebouncedQuery] = useState("");
const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [trending, setTrending] = useState([]);
const [topRated, setTopRated] = useState([]);
const [popular, setPopular] = useState([]);
const [upcoming, setUpcoming] = useState([]);
const [nowPlaying, setNowPlaying] = useState([]);
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(searchQuery);
  }, 500);

  return () => clearTimeout(timer);
}, [searchQuery]);

useEffect(() => {
  if (debouncedQuery.trim() === "") {
    setSearchResults([]);
    return;
  }

  searchMovies(debouncedQuery).then((data) => {
    setSearchResults(data);
  });
}, [debouncedQuery]);


  useEffect(() => {
  fetchTrendingMovies().then((data) => {
    setTrending(data);
  });

  fetchTopRatedMovies().then((data) => {
    setTopRated(data);
  });

  fetchPopularMovies().then((data) => {
    setPopular(data);
  });

  fetchUpcomingMovies().then((data) => {
    setUpcoming(data);
  });

  fetchNowPlayingMovies().then((data) => {
    setNowPlaying(data);
  });
}, []);

const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <>
    <NavBar
     searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}/>
    <div className="flex">
   <SideBar
  scrollToSection={scrollToSection}
  refs={{
    heroRef,
    trendingRef,
    topRatedRef,
    popularRef,
    upcomingRef,
    nowPlayingRef,
  }}
/>
  <main className="flex-1 bg-black overflow-x-hidden">
  {searchQuery.trim() === "" ? (
  <>
   <div ref={heroRef}>
  <HeroSection movies={trending}
   setSelectedTrailer={setSelectedTrailer} />
</div>

    <div ref={trendingRef}>
  <MovieRow title="🔥 Trending Movies" movies={trending}
  setSelectedTrailer={setSelectedTrailer} />
</div>
    <div ref={topRatedRef}>
  <MovieRow title="⭐ Top Rated" movies={topRated}
  setSelectedTrailer={setSelectedTrailer} />
</div>

<div ref={popularRef}>
  <MovieRow title="🎬 Popular" movies={popular}
  setSelectedTrailer={setSelectedTrailer} />
</div>

<div ref={upcomingRef}>
  <MovieRow title="🎥 Upcoming" movies={upcoming} 
  setSelectedTrailer={setSelectedTrailer}/>
</div>

<div ref={nowPlayingRef}>
  <MovieRow title="❤️ Now Playing" movies={nowPlaying}
  setSelectedTrailer={setSelectedTrailer} />
</div>
  </>
) : searchResults.length > 0 ? (
  <MovieRow
    title={`Search Results for "${searchQuery}"`}
    movies={searchResults}
  />
) : (
  <div className="flex flex-col items-center justify-center h-[60vh] text-white">
  <h2 className="text-3xl font-bold mb-3"
 style={{ fontFamily: "Poppins, sans-serif" }}>
    No Results Found
  </h2>

  <p className="text-gray-400">
    We couldn't find any movie matching "{searchQuery}"
  </p>
</div>
)}

<TrailerModal
    trailerKey={selectedTrailer}
    onClose={() => setSelectedTrailer(null)}
/>
</main>
    </div>
    </>
  )
}

export default App
