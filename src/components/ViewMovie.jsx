import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const ViewMovie = () => {
  const { id } = useParams();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const movieId = id;
  useMovieTrailer(movieId);

  return (
    <div className=" ">
      <div>
        <iframe
          className="   aspect-video w-full h-[100vh] "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&rel=0&controls=1&showinfo=0"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default ViewMovie;
