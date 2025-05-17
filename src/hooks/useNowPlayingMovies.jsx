import { useEffect } from "react";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options, TMDB_NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
