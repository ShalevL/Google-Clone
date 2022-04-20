import { createSlice, configureStore } from "@reduxjs/toolkit";

export const GOOGLE_SEARCH_API_KEY =
  "8996225c5amsh21e7eaef7c64fbbp108f8ajsn2d3edfece8fe";

const searchResultsSlice = createSlice({
  name: "searchResultsSlice",
  initialState: { results: [], images: [], videos: [], news: [] },
  reducers: {
    updateSearchResults(state, action) {
      state.results = action.payload.results;
    },
    updateImagesResults(state, action) {
      state.images = action.payload.image_results;
    },
    updateVideoResults(state, action) {
      state.videos = action.payload.results;
    },
    updateNewsResults(state, action) {
      state.news = action.payload.entries;
    },
  },
});

const store = configureStore({
  reducer: {
    searchResults: searchResultsSlice.reducer,
  },
});

export function fetchSearchResults(searchTerm, searchType) {
  return function (dispatch) {
    const options = {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": GOOGLE_SEARCH_API_KEY,
      },
    };

    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/${searchType}/q=${searchTerm}`,
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        switch (searchType) {
          case "search":
            dispatch(searchResultsActions.updateSearchResults(data));
            break;
          case "image":
            dispatch(searchResultsActions.updateImagesResults(data));
            break;
          case "news":
            dispatch(searchResultsActions.updateNewsResults(data));
            break;
          case "video":
            dispatch(searchResultsActions.updateVideoResults(data));
            break;
          default:
            console.log("error");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}

export const searchResultsActions = searchResultsSlice.actions;

export default store;
