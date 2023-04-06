import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
