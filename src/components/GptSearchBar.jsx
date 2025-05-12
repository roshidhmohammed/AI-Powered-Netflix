import { useSelector } from "react-redux";
import { language } from "../utils/languageConstants";

const GptSearchBar = () => {
  const currentlanguage = useSelector((store) => store.config.language);
  return (
    <div className=" flex justify-center gap-3 ">
      <input
        type="text"
        placeholder={language[currentlanguage].gptSearchPlaceHolder}
        className="border px-2 py-3 rounded-lg w-1/3"
      />
      <button className=" bg-red-700  p-3 rounded-lg px-10  hover:bg-red-800 hover:cursor-pointer flex gap-1 items-center">
        {language[currentlanguage].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
