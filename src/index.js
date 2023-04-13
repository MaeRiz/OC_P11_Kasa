import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodgement from "./pages/Lodgement";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About/>} />
          <Route path="/lodgement/:lodgeId" element={<Lodgement />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
