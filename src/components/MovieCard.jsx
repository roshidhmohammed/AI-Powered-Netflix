import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" hover:cursor-pointer">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="movie-poster"
        className=" min-w-40    rounded-md"
      />
    </div>
  );
};

export default MovieCard;
