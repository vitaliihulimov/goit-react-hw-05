import axios from "axios";

const URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTdjNmVkN2NiNjAzMDE2YWE3MDI0NzExMDQwYWQzOCIsIm5iZiI6MTc0NzU2MTczMi42NDEsInN1YiI6IjY4MjlhZDA0MDBkMWNlYzZjMWRiMjY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MmmF7JceatbsBQQyZaQwb9DTjtNmUFJ1WBagfsHduC4",
  accept: "application/json",
};

// Trending movies
export async function fetchTrendingMovies() {
  const response = await axios.get(`${URL}/trending/movie/day?language=en-US`, {
    headers: headers,
  });
  return response.data.results;
}

// Search movies
export const searchMovies = async (query) => {
  const response = await axios.get(`${URL}/search/movie`, {
    headers: headers,
    params: { query, page: 1 },
  });
  return response.data;
};

// About movie
export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${URL}/movie/${movieId}?language=en-US`, {
    headers: headers,
  });
  return response.data;
}

// Movie cast
export async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `${URL}/movie/${movieId}/credits?language=en-US`,
    {
      headers: headers,
    }
  );
  return response.data.cast;
}

// Movie reviews
export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `${URL}/movie/${movieId}/reviews?language=en-US`,
    {
      headers: headers,
    }
  );
  return response.data.results;
}
