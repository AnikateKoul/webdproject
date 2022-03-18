import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider/Slider";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path = "/" element = {<Slider />} />
      </Routes>
      <Routes>
      <Route path = "/about" element = {<About />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
