import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useWatchMovie from "../hooks/useWatchMovie";

const WatchMovie = () => {
  const { movieId } = useParams();
  useWatchMovie(movieId);
  const watchMovie = useSelector((store) => store.movies?.watchMovie);

  return (
    <div className=" ">
      <div>
        <iframe
          className="   aspect-video w-full h-[100vh] "
          src={
            "https://www.youtube.com/embed/" +
            watchMovie?.key +
            "?autoplay=1&rel=0&controls=1&showinfo=0"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchMovie;
