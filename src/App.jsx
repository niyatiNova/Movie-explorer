import { useEffect, useState, useRef } from "react";

import HeroSection from "./components/Hero";
import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import MovieRow from "./components/MovieRow";
import TrailerModal from "./components/TrailerModal";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const [loading, setLoading] = useState(true);



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
    async function loadMovies() {
      try {
        const [
          trendingData,
          topRatedData,
          popularData,
          upcomingData,
          nowPlayingData,
        ] = await Promise.all([
          fetchTrendingMovies(),
          fetchTopRatedMovies(),
          fetchPopularMovies(),
          fetchUpcomingMovies(),
          fetchNowPlayingMovies(),
        ]);

        setTrending(trendingData);
        setTopRated(topRatedData);
        setPopular(popularData);
        setUpcoming(upcomingData);
        setNowPlaying(nowPlayingData);
      } catch (error) {
        console.error("Failed to load movies:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);



  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };



  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold animate-pulse">
          Loading Movies...
        </h1>
      </div>
    );
  }

 

  return (
    <>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

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

        <main className="flex-1 bg-black overflow-x-hidden px-8 py-6">

          {searchQuery.trim() === "" ? (
            <>
              <div ref={heroRef}>
                <HeroSection
                  movies={trending}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>

              <div ref={trendingRef}>
                <MovieRow
                  title="🔥 Trending Movies"
                  movies={trending}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>

              <div ref={topRatedRef}>
                <MovieRow
                  title="⭐ Top Rated"
                  movies={topRated}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>

              <div ref={popularRef}>
                <MovieRow
                  title="🎬 Popular"
                  movies={popular}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>

              <div ref={upcomingRef}>
                <MovieRow
                  title="🎥 Upcoming"
                  movies={upcoming}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>

              <div ref={nowPlayingRef}>
                <MovieRow
                  title="❤️ Now Playing"
                  movies={nowPlaying}
                  setSelectedTrailer={setSelectedTrailer}
                />
              </div>
            </>
          ) : searchResults.length > 0 ? (
            <MovieRow
              title={`🔍 Search Results (${searchResults.length})`}
              movies={searchResults}
              setSelectedTrailer={setSelectedTrailer}
            />
          ) : (
            <div className="h-[70vh] flex flex-col items-center justify-center text-white">
              <div className="text-7xl mb-6">🎬</div>

              <h2 className="text-5xl font-bold mb-4">
                No Movies Found
              </h2>

              <p className="text-gray-400 text-lg">
                We couldn't find anything matching
              </p>

              <p className="text-red-500 mt-2 text-xl font-semibold">
                "{searchQuery}"
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
  );
}

export default App;