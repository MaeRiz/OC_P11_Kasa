import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Lodgement from "../pages/Lodgement";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/" element={<About />} />
      <Route path="/lodgement/:lodgeId" element={<Lodgement />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
