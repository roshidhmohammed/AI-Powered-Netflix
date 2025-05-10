import { useEffect } from "react";
import { addUpComingMovies } from "../slices/moviesSlice";
import { useDispatch } from "react-redux";
import { options, TMDB_UPCOMING_MOVIES_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(TMDB_UPCOMING_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpcomingMovies;
