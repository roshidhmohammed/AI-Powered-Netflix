const ShimmerMovieCard = () => {
  return (
    <div className=" flex gap-5 flex-wrap justify-between px-20 pt-10 pb-20">
      {Array.from({ length: 8 }, (_, index) => index + 1)?.map((item) => (
        <div
          key={item}
          className=" h-80 w-80 bg-gray-700 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerMovieCard;
