import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, isGptComp }) => {
  if (!posterPath && isGptComp) return;
  return (
    <div className=" hover:cursor-pointer ">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="movie-poster"
        className={`${
          isGptComp ? "sm:min-w-40 min-w-4/4 sm:h-72 h-4/4" : "min-w-40"
        }    rounded-md`}
      />
    </div>
  );
};

export default MovieCard;
