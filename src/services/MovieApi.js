const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Movie API Error:", error);
    return [];
  }
}

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

export const searchMovies = (query) =>
  fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);

export async function fetchMovieTrailer(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch trailer: ${response.status}`);
    }

    const data = await response.json();

    return (
      data.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      ) ||
      data.results.find(
        (video) => video.site === "YouTube"
      ) ||
      null
    );
  } catch (error) {
    console.error("Trailer Error:", error);
    return null;
  }
}