import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import ShimmerMovieCard from "./ShimmerMovieCard";
import { Link } from "react-router-dom";

const GptSuggestions = () => {
  const { movieResults, isLoading, errorMessage } = useSelector(
    (store) => store.gpt
  );
  return (
    <>
      {isLoading ? (
        <ShimmerMovieCard />
      ) : movieResults === null ? (
        <div className="  text-center  flex justify-center flex-col items-center m-auto h-[60vh] top-[50%]">
          <h1 className=" text-white text-2xl">
            {errorMessage?.split(",")[0]}{" "}
          </h1>
          <h1 className=" text-white text-2xl mt-2">
            {errorMessage?.split(",")[1]}
          </h1>
        </div>
      ) : (
        <div className="mt-10  px-10 w-full grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-10  pb-10">
          {movieResults?.map((movie) => (
            <Link key={movie.id} to={`/watch-movie/${movie?.id}`}>
              <MovieCard posterPath={movie?.poster_path} isGptComp={true} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default GptSuggestions;
