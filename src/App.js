import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider/Slider";
import React from "react";
import About from "./Components/About";
import ContactUS from "./Components/ContactUS";
import Footer from "./Components/Footer";
import Thanks from "./Components/Thanks";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Slider />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactUS /> } />
        </Routes>
        <Routes>
          <Route path="/thank" element={<Thanks />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

// #39424e
