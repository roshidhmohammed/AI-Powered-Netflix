import { useEffect } from "react";
import { options, TMDB_TRAILER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addWatchMovie } from "../slices/moviesSlice";

const useWatchMovie = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWatchMovieDetails();
  });

  const getWatchMovieDetails = async () => {
    const data = await fetch(TMDB_TRAILER_URL + movieId + "/videos", options);
    const json = await data.json();
    const movie = await json?.results?.find(
      (video) => video?.type === "Trailer"
    );
    dispatch(addWatchMovie(movie));
  };
};

export default useWatchMovie;
