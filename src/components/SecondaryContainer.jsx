import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-[#141414] pb-20 ">
      <div className="-mt-[180px] md:-mt-[200px] lg:-mt-[330px] mr-2  relative">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
