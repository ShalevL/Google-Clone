import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Results from "./Results";

function RoutesOptions() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {["/search", "/images", "/news", "/videos"].map((path) => (
          <Route key="Home" path={path} element={<Results />} />
        ))}
      </Routes>
    </div>
  );
}
export default RoutesOptions;
