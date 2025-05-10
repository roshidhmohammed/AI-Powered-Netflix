import { useEffect } from "react";
import { addPopularMovies } from "../slices/moviesSlice";
import { useDispatch } from "react-redux";
import { options, TMDB_POPULAR_MOVIES_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(TMDB_POPULAR_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
