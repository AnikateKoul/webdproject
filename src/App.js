import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider/Slider";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ContactUS from "./Components/ContactUS";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Slider /> </>} />

        </Routes>
        <Routes>
          <Route path="/about" element={<><About /> </>} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<><ContactUS /> </>} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

// #39424e
