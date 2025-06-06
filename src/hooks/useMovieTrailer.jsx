import { useEffect } from "react";
import { options, TMDB_TRAILER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  if (!movieId) return;

  const getMovieVideos = async () => {
    const data = await fetch(TMDB_TRAILER_URL + movieId + "/videos", options);
    const json = await data.json();
    const trailer = await json?.results?.find(
      (video) => video?.type === "Trailer"
    );
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
