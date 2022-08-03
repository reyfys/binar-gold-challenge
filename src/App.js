import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import DetailCar from "./pages/DetailCar";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchResult />} />
        <Route path="/detailcar/:id" element={<DetailCar />} />
      </Routes>
    </div>
  );
};

export default App;
