import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const randomNumberLessThanMovieLength = Math.ceil(
    Math.random() * movies?.length - 1
  );
  const mainMovie = movies[randomNumberLessThanMovieLength];

  const { title } = mainMovie;

  return (
    <div className=" ">
      <VideoBackground movieId={mainMovie?.id} />
      <VideoTitle title={title} />
    </div>
  );
};

export default MainContainer;
