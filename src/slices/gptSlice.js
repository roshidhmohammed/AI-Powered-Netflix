import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    isLoading: false,
    errorMessage: "No Movies Available., Let's use your GPT search!!!",
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      (state.movieNames = movieNames), (state.movieResults = movieResults);
    },
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResults,
  updateIsLoading,
  updateErrorMessage,
} = gptSlice.actions;

export default gptSlice.reducer;
