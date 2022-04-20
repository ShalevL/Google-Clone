import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar(props) {
  function darkThemeButtonHandler() {
    props.setDarkTheme();
  }
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google-Clone 🔎 By Shalev Lazarof
          </p>
        </Link>
        <button
          type="button"
          onClick={darkThemeButtonHandler}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {props.darkTheme ? "Light ☀️" : "Dark 🌑"}
        </button>
      </div>
      <Search />
    </div>
  );
}
export default Navbar;
