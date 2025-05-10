import { useEffect } from "react";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useDispatch } from "react-redux";
import { options, TMDB_NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
