import { useState } from "react";
import './Login.css'

export default function LoginForm() {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
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
        </form>
      </div>
    </>
  );
}
