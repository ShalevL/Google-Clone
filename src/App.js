import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesOptions from "./components/RoutesOptions";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function setDarkThemeHandler() {
    setDarkTheme(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkThemeHandler} darkTheme={darkTheme} />
        <RoutesOptions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
