import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  if (!movieId) return;

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const json = await data.json();
    const trailer = json?.results?.find((video) => video?.type === "Trailer");
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
