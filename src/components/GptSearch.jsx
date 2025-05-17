import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white  ">
      <div className=" pt-[50%] sm:pt-[40%] md:pt-[12%]">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
