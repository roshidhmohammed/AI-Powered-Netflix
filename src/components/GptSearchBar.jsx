import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstants";
import openai from "../utils/openai";
import { useRef } from "react";
import {
  addGptMovieResults,
  updateErrorMessage,
  updateIsLoading,
} from "../slices/gptSlice";
import { searchTmbdMovies } from "../utils/searchTmbdMovies";

const GptSearchBar = () => {
  const currentlanguage = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const searchText = useRef();

  const handleGptSearch = async (e) => {
    dispatch(updateIsLoading(true));
    e.preventDefault();

    const gptQuery =
      "Act as a Movie recommendation system and suggest movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Don, Koi Mil Gaya, Varanam Ayiram, Animal, Leo";
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults) {
      dispatch(
        updateErrorMessage("Something went wrong., Please try again later!")
      );
      dispatch(updateIsLoading(false));
    }
    dispatch(updateErrorMessage(""));
    const gptResultMovies = gptResults.choices[0]?.message?.content.split(",");

    const promiseMoviesArray = gptResultMovies?.map((movie) =>
      searchTmbdMovies(movie)
    );
    const tmdbSearchMovieResults = await Promise.all(promiseMoviesArray);

    const concatinatedMovieResults = [];
    tmdbSearchMovieResults?.map((array) =>
      array.map((movie) => concatinatedMovieResults.push(movie))
    );
    dispatch(
      addGptMovieResults({
        movieNames: gptResultMovies,
        movieResults: concatinatedMovieResults,
      })
    );
    dispatch(
      updateErrorMessage("No Movies Available., Let's use your GPT search!!!")
    );
    dispatch(updateIsLoading(false));
  };
  return (
    <div>
      <form
        className=" mx-5 md:mx-0 flex justify-center gap-3 "
        onSubmit={handleGptSearch}
      >
        <input
          type="text"
          placeholder={language[currentlanguage].gptSearchPlaceHolder}
          ref={searchText}
          className="border px-2 py-3 rounded-lg w-full md:w-1/3"
        />
        <button
          type="submit"
          className=" bg-red-700  p-3 rounded-lg px-10  hover:bg-red-800 hover:cursor-pointer flex gap-1 items-center"
        >
          {language[currentlanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
