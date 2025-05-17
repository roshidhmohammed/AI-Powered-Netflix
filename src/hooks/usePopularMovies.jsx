import { useEffect } from "react";
import { addPopularMovies } from "../slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options, TMDB_POPULAR_MOVIES_URL } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(TMDB_POPULAR_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
