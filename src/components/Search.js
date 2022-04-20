import Links from "./Links";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "./store";
import { useDebounce } from "use-debounce";

function Search() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("Avangers");
  const [debounceValue] = useDebounce(searchTerm, 500);

  function inInputChangeHandler(event) {
    event.preventDefault();

    setSearchTerm(event.target.value);
  }

  function onButtonClickHandler() {
    setSearchTerm("");
  }

  useEffect(
    function () {
      dispatch(fetchSearchResults(searchTerm, "search"));
      dispatch(fetchSearchResults(searchTerm, "image"));
      dispatch(fetchSearchResults(searchTerm, "news"));
      dispatch(fetchSearchResults(searchTerm, "video"));
    },
    [debounceValue]
  );

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={searchTerm}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google-Clone"
        onChange={inInputChangeHandler}
      />
      {searchTerm && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={onButtonClickHandler}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
}

export default Search;
