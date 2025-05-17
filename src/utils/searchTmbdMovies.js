import { options, TMDB_MOVIE_SEARCH_URL } from "./constants";

export const searchTmbdMovies = async (movie) => {
  const data = await fetch(TMDB_MOVIE_SEARCH_URL + movie, options);
  const json = await data.json();
  return json?.results;
};
