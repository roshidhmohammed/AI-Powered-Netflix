import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-76  pl-12 text-white z-50">
      <h1 className="font-bold text-lg md:text-2xl lg:text-6xl mb-5 bg-clip-text  w-2/3">{title}</h1>
      <h1 className=" bg-clip-text w-1/3 mb-5 sm:block hidden">{overview}</h1>
      <div className="flex  md:flex-row flex-col gap-5 mt-5">
        <button className="flex font-medium text-black text-lg items-center gap-3 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-lg px-8 py-3">
          <FaPlay />
          Play
        </button>
        <button className="flex bg-gray-100/30 hover:bg-gray-300/40 text-lg items-center   gap-3  hover:cursor-pointer rounded-lg px-5 py-3">
          <LuInfo className="" size={22} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
