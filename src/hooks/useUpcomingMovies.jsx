import { useEffect } from "react";
import { addUpComingMovies } from "../slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options, TMDB_UPCOMING_MOVIES_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(TMDB_UPCOMING_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpcomingMovies;
