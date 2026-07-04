const Token = import.meta.env.VITE_TMDB_TOKEN;

console.log("Token exists:", !!Token);

const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetch different movie categories
export const fetchTrendingMovies = () =>
  fetchMovies("/trending/movie/day");

export const fetchTopRatedMovies = () =>
  fetchMovies("/movie/top_rated");

export const fetchPopularMovies = () =>
  fetchMovies("/movie/popular");

export const fetchUpcomingMovies = () =>
  fetchMovies("/movie/upcoming");

export const fetchNowPlayingMovies = () =>
  fetchMovies("/movie/now_playing");

// Search Movies
export async function searchMovies(query) {
  return fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
}

// Fetch Trailer
export async function fetchMovieTrailer(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trailer");
    }

    const data = await response.json();

    return data.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}