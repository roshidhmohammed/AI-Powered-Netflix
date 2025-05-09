import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies()
  const getMovies = useSelector((state)=> state.movies)
  console.log(getMovies.nowPlayingMovies)
  return (
    <div className=" ">
      <Header />
    </div>
  );
};

export default Browse;
