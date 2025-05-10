import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const randomNumberLessThanMovieLength = Math.ceil(Math.random() * movies?.length-1);
  const mainMovie = movies[randomNumberLessThanMovieLength];

  const { title, overview } = mainMovie;

  return (
    <div className="  relative">
      <VideoBackground movieId={mainMovie?.id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
