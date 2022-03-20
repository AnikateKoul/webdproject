import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import React from "react";
import About from "./Components/About";
import ContactUS from "./Components/ContactUS";
import Footer from "./Components/Footer";
import Thanks from "./Components/Thanks";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import Place1 from "./Components/Destinations/Place1";
import Place2 from "./Components/Destinations/Place2";
import Place3 from "./Components/Destinations/Place3";
import Place4 from "./Components/Destinations/Place4";
import Place5 from "./Components/Destinations/Place5";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <ScrollToTop>
      {/* <App /> */}
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
        <Routes>
          <Route path="/signup" element={ <SignupForm/> } />
        </Routes>
        <Routes>
          <Route path="/place1" element={ <Place1 /> } />
        </Routes>
        <Routes>
          <Route path="/place2" element={ <Place2/> } />
        </Routes>
        <Routes>
          <Route path="/place3" element={ <Place3/> } />
        </Routes>
        <Routes>
          <Route path="/place4" element={ <Place4/> } />
        </Routes>
        <Routes>
          <Route path="/place5" element={ <Place5/> } />
        </Routes>
        </ScrollToTop>
        <Footer />
      </Router>

    </>
  );
}

export default App;

// #39424e
