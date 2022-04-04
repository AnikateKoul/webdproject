import { useState } from "react";
import './Login.css';
import './Navbar.js';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  var result;
  var ans = 0;
  const navigate = useNavigate();
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("Data saved successfully");
      document.getElementById('lgnNav').style.display='none';
      document.getElementById('lgoutNav').style.display="block";
      document.getElementById('navBut').style.display='none';
      console.log(result);
      navigate("/");

      
      document.getElementById('lgoutNav').addEventListener('click',()=>{
        let a=window.confirm(`Do you really want to logout? :( `);
        
        if(a){
        document.getElementById('lgnNav').style.display="block";
        document.getElementById('navBut').style.display='block';
        document.getElementById('lgoutNav').style.display="none";
        }

      })


      setLoginEmail("");
      setLoginPassword("");
    }
  };
  return (
    <>
      <div className="login-box">
        <h2 id="loginTxt">Login</h2>
        <form action="" id='lgnForm'>
          <div className="user-box">
            <input
              type="email" className="lgnInpt"
              value={email} name="" required=""
              onChange={(e) => setLoginEmail(e.target.value)}
            />
              <label className="loginLab">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password" name=""
              value={password} className="lgnInpt" required=""
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label className="loginLab">Password</label>
          </div>
          <a href="#" id='lgnLink' onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          {/* {
            (ans) ? (<Link to="/thank"><button type="submit" id="lgnLink" onClick={login}>Login</button></Link>) : (<button type="submit" id="lgnLink" onClick={login}>Login</button>)
          } */}
        </form>
      </div>
    </>
  );
}

export default LoginForm;