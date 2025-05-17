import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className=" pl-16 pt-5">
      <div>
        <h1 className=" text-white text-xl pb-3 pt-7 font-bold font-sans tracking-wider">
          {title}
        </h1>
        <div className=" flex gap-3 overflow-x-scroll w-full">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/watch-movie/" + movie.id}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
