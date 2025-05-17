import { useEffect } from "react";
import { addTopRatedMovies } from "../slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options, TMDB_TOP_RATED_MOVIES_URL } from "../utils/constants";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(TMDB_TOP_RATED_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
