import "./App.css";
import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Footer from "./Components/footer";
import Thanks from "./Components/Thanks";
import LoginForm from "./Components/LoginForm";
import Gallery from "./Components/Gallery";
import ContactUS from "./Components/ContactUS";
import SignupForm from "./Components/SignupForm";
import ScrollToTop from "./Components/ScrollToTop";
import Place1 from "./Components/Destinations/Place1";
import Place2 from "./Components/Destinations/Place2";
import Place3 from "./Components/Destinations/Place3";
import Place4 from "./Components/Destinations/Place4";
import Place5 from "./Components/Destinations/Place5";
import Users from "./Users";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import FlipCard from "./Components/FlipCard";

function App() {

  const [mode, setMode] = useState("light");


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={ <><Slider mode={mode}/> <Users /></>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<><About mode={mode} toggleMode={toggleMode}/> </>} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactUS mode={mode} toggleMode={toggleMode}/> } />
        </Routes>
        <Routes>
          <Route path="/thank" element={<Thanks mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
        {/* <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes> */}
        <Routes>
          <Route path="/signup" element={ <SignupForm mode={mode} toggleMode={toggleMode} /> } />
        </Routes>
        <Routes>
          <Route path="/Gallery" element={ <Gallery/> } />
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
        <Footer mode={mode} toggleMode={toggleMode}/>
      </Router>

      

    </>
  );
}

export default App;

// #39424e
