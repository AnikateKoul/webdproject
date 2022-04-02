import { useState } from "react";
import './Login.css'

export default function LoginForm() {
  const [email2, setEmail] = useState("");
  const [password2, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/signin", {
      method: "post",
      body: JSON.stringify({ email2, password2 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("Data saved successfully");
      setEmail("");
      setPassword("");
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
              value={email2} name="" required=""
              onChange={(e) => setEmail(e.target.value)}
            />
              <label className="loginLab">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password" name=""
              value={password2} className="lgnInpt" required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="loginLab">Password</label>
          </div>
          <a href="#" id='lgnLink' onClick={handleOnSubmit}>
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
