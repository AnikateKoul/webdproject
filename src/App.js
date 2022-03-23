import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import React, { useEffect, useState } from "react";
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
// import FlipCard from "./Components/FlipCard";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Users from "./Users";

function App() {

  const [mode, setMode] = useState("light");

  const [ user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api?nat=us&results=20&page=1")
    .then((res) => {
      return res.json();
    }).then((data) => {
      let datas = data.results
      setUser(datas);
      console.log(datas);
    })
  }
  useEffect(() => {
    fetchData();
  }, []);


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
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
          <Route path="/" element={ <><Slider /> <Users user = {user}/></>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<><About mode={mode} toggleMode={toggleMode}/> </>} />
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
